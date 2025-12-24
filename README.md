<p align="center">
  <a href="https://paybill.dev" target="blank"><img src="https://paybill.dev/logo-wordmark--light.png" width="180" alt="Logo" /></a>
</p>

# Paybill Platform

Paybill Platform is a EKS Multi-Tenant SaaS Solution. This solution uses AWS Codepipeline (Production Ready) / Azure DevOps Pipelines (Pending Implementation) / Google Cloud Build + Cloud Deploy (Pending Implementation) / IBM DevOps (Pending Implementation) / Oracle DevOps Cloud Service (Pending Implementation) to deploy all the control plane infrastructure component of Networking, Compute, Database, Monitoring & Logging and Security alongwith the control plane application using helm chart. This solution will also setup tenant codebuild projects which is responsible for onboarding of new silo and pooled tenant. Each tenant will have it's own infrastructure and application helm chart Which will be managed using gitops tool like ArgoCD and Argo Workflow. This solution will also have strict IAM policy and Kubernetes Authorization Policy for tenants to avoid cross namespace access.

For more details, you can go through the [platform documentation](https://docs.paybill.dev/platform.md).

## AWS Procedure Requirements

1. AWS Account 
2. Terraform CLI
3. AWS CLI


## Pre-Requisitie

> :warning: Please ensure you are logged into AWS Account as an IAM user with Administrator privileges, not the root account user.

### 1. **Create an AWS Organization**

* Console link: [Create and manage AWS Organizations](https://console.aws.amazon.com/organizations/v2/home)
* Docs: [Creating an organization](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_create.html)

This will give you a **Management (Root) account** where you can create and manage sub-accounts.

---

### 2. **Create Member Accounts (Production & Developer)**

* Console link: [AWS Organizations – Accounts](https://console.aws.amazon.com/organizations/v2/accounts)
* Docs: [Create an AWS account in your organization](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_create.html)

Here, create two accounts:

* **Developer** (for experiments)
* **Production** (for prod workloads)

---

### 3. **Log into Each Account & Create IAM Users**

For each of the **Production** and **Developer** accounts:

* Console link: [IAM Console](https://console.aws.amazon.com/iamv2/home)
* Docs: [Creating IAM users](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_create.html)

Steps:

1. Go to **IAM > Users > Add users**
2. Name it something like `cli-admin`
3. Check **Access key - Programmatic access** (for CLI access)
4. Assign to attach a policy (example: `AdministratorAccess`
5. Save then create **Access Key ID** and **Secret Access Key** securely

---

### 4. **Configure AWS CLI for Developer User**

On the developer’s machine:

```bash
aws configure --profile production
# enter Access Key, Secret Key, Region, Output format

aws configure --profile developer
# enter credentials for the developer account
```

---

### 5. **Create a hosted zone on route53**
If you have domain registered with 3rd party registrars then [create hosted zone on route53](https://medium.com/weekly-webtips/how-to-integrate-3rd-party-domain-names-with-aws-route-53-for-your-website-webapp-7f6cd8ff36b6) for your domain and generate Public Certificate for the domain using [AWS ACM](https://docs.aws.amazon.com/acm/latest/userguide/gs-acm-request-public.html). (please ensure to give both wildcard and root domain in Fully qualified domain name while generating ACM, e.g. if domain name is xyz.com then use both xyz.com & *.xyz.com in ACM) or run this terraform.

* Go to the `terraform/aws/route53` folder and edit `terraform.tfvars` 
* Then run the following command to deploy it 

    ```
    terraform init
    terraform plan 
    terraform apply
    ```
* Login to AWS and copy `NS records` to 3rd party registars. 
* Verify that DNS configurations and ACM certificates are well set. I would recommend adding more dns configurations such as email service provider configure

---

### 6. **Setup SES account**
SES account should be setup in production mode and `domain` should be verified. [Generate smtp credentials](https://docs.aws.amazon.com/ses/latest/dg/smtp-credentials.html) and store them in ssm parameter store as `SecureString`. (using parameter name - /{namespace}/{environment}/ses_access_key & /{namespace}/{environment}/ses_secret_access_key where `namespace` is project name and `environment` is development environment) or run this terraform.

* Go to the `terraform/aws/ses` folder and edit `terraform.tfvars` 
* Then run the following command to deploy it 

    ```
    terraform init
    terraform plan 
    terraform apply
    ```
* Login to AWS and complete any missing steps to move it to production. 

---

### 7. **Setup Github account access**
[Generate Github Token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens) and store them in ssm parameter as `SecureString`. (using parameter name - /{namespace}/{environment}/github_user & /{namespace}/{environment}/github_token)

> **_NOTE:_** If you are using organization github account then create github token with organization scope and provide necessary permission to create, manage repository & merge into the repository. Otherwise you can create github token for your personal user. Update the `.tfvars` file of `terraform/aws/tenant-codebuilds` folder.

Create a [codepipeline connection for github](https://docs.aws.amazon.com/codepipeline/latest/userguide/connections-github.html) with your github account and repository named `github-connection-paybill` or run this terraform.

* Go to the `terraform/aws/github` folder and edit `terraform.tfvars` 
* Then run the following command to deploy it 

    ```
    terraform init
    terraform plan 
    terraform apply
    ```
* Unfortunately, Terraform **cannot create the actual GitHub connection** (because you need to authorize GitHub OAuth via the AWS Console).
You must first create it in the console:
    * Go to **AWS Console → Developer Tools → Connections**
    * Click **Create connection** → Select **GitHub** → **Install App / Authorize**.

---

> **_NOTE:_** If you want to use client-vpn to access opensearch dashboard then enable it using variable defined in `.tfvars` file of `terraform/aws/client-vpn` folder. [follow [doc](https://docs.paybill.dev/platform/client-vpn-connection.md) to connect with VPN ]

## Setting up the environment

* First clone/fork the Github repository. 
* Based on the requirements, change `terraform.tfvars` file in all the terraform folders.
* Update the variables **namespace**,**environment**,**region** in the `.env` file.
* Execute the script using command `./scripts/replace-variable.sh`
* Execute the scripts for pushing all images to ECR repository using command `./scripts/push-<image_name>-image.sh`
* Update the codepipeline connection name (created in pre-requisite section), github repository name and other required variables in `terraform.tfvars` file of `terraform/aws/core-infra-pipeline folder`.
* Check if **AWSServiceRoleForAmazonOpenSearchService** Role is already created in your AWS account then set `create_iam_service_linked_role` variables to false in tfvars file of `terraform/aws/opensearch` otherwise set it to true.
* Go through all the variables decalred in tfvars file and update the variables according to your requirement.

Once the variables are updated, We will setup terraform codepipeline which will deploy all control plane infrastructure components alongwith control plane helm. We have multiple option to do that - 

1. Using Github Actions :: 

> **_NOTE:_** We are using slef hosted github runners to execute workflow action. please follow [this](https://docs.github.com/en/actions/hosting-your-own-runners/managing-self-hosted-runners/about-self-hosted-runners) document to setup runners.

* Add **AWS_ACCOUNT_ID** in [github repository secret](https://docs.github.com/en/actions/security-guides/using-secrets-in-github-actions).
* Execute the workflow of *apply-bootstrap.yaml* & *apply-pipeline.yaml* by updating the github events in these files. Currently these workflows will be executed when pull request will be merged to main branch so change the invocation of these workflow files according to you.
* Push the code to your github repository.


> **_NOTE:_** If you want to run other workflows, which are terraform plans, make sure to update the workflow files. Terraform bootstrap is one time activity so once bootstrap workflow is executed, please disable that to run again.


2. Using Local ::

AWS CLI version2 & Terraform CLI version 1.7 must be installed on your machine. If not installed, then follow the documentation to install [aws cli](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html) & [terraform cli](https://developer.hashicorp.com/terraform/tutorials/aws-get-started/install-cli).

* Configure your terminal with aws.
* Go to the `terraform/aws/bootstrap` folder and run the floowing command to deploy it - 

    ```
    terraform init
    terraform plan 
    terraform apply
    ```
* After that, Go to the `terraform/aws/core-infra-pipeline` and update the bucket name, dynamodb table name (created in above step) and region in `config.hcl`. 

**_NOTE:_** Update `config.hcl` file based using s

* Push the code to your github repository.
* Run the Followign command to create terraform codepipeline - 

    ```
    terraform init --backend-config=config.hcl
    terraform plan
    terraform apply 
    ```
> **_NOTE:_** All Terraform module README files are present in respective folder.


Once the codepipeline is created, Monitor the pipeline and when Codepipeline is executed successfully then create the following records in route53 hosted zone of the domain, using Load Balancer DNS address.

| Record Entry                   | Type   | Description                     |
|--------------------------------|--------|---------------------------------|
| {domain-name}                  |   A    | control-plane application URL.  |
| argocd.{domain-name}           | CNAME  | ArgoCD URL                      |
| argo-workflow.{domain-name}    | CNAME  | Argo Workflow URL               |
| grafana.{domain-name}          | CNAME  | Grafana Dashboard URL           |

> **_NOTE:_** All authentication password will be saved in SSM Paramater store. On Grafana, Please add athena, cloudwatch and prometheus data source and import the dashboard using json mentioned in billing and observability folder. 

After Creating record in the Route53, you can access the control plane application using `{domain-name}` URL (eg. if your domain name is xyz.com then control plane will be accessible on xyz.com). Tenant onboarding can be done using the URL `{domain-name}/tenant/signup`. Once the tenant will be onboarded successfully then you can access the tenant application plane on URL `{tenant-key}.{domain-name}`


## Azure Procedure Requirements

1. Azure Subscription
2. Azure CLI (`az`)
3. Terraform CLI

---

## Pre-Requisite

> :warning: Ensure you are logged into Azure Portal with an IAM role that has **Owner or User Access Administrator** permissions.

### 1. **Create an Azure Tenant**

* Portal: [https://portal.azure.com](https://portal.azure.com)
* Docs: [https://learn.microsoft.com/azure/active-directory/fundamentals/active-directory-access-create-new-tenant](https://learn.microsoft.com/azure/active-directory/fundamentals/active-directory-access-create-new-tenant)

This establishes the **directory root**, used to manage multiple subscriptions.

---

### 2. **Create Subscriptions (Production & Development)**

* Portal: Azure Portal → **Subscriptions → Create**
* Docs: [https://learn.microsoft.com/azure/cost-management-billing/manage/create-subscription](https://learn.microsoft.com/azure/cost-management-billing/manage/create-subscription)

Create:

* **Developer Subscription**
* **Production Subscription**

---

### 3. Once Implemented We shall update next steps

---

## Google Cloud Procedure Requirements

1. Google Cloud Account
2. gcloud CLI
3. Terraform CLI

---

## Pre-Requisite

> :warning: Login using Google Cloud credentials with **Organization Admin** privileges.

### 1. **Create an Organization + Billing Account**

* Console: [https://console.cloud.google.com](https://console.cloud.google.com)
* Docs: [https://cloud.google.com/resource-manager/docs/creating-managing-organization](https://cloud.google.com/resource-manager/docs/creating-managing-organization)

---

### 2. **Create Projects (Prod & Dev)**

* Console: **IAM & Admin → Manage Resources → Create Project**
* Docs: [https://cloud.google.com/resource-manager/docs/creating-managing-projects](https://cloud.google.com/resource-manager/docs/creating-managing-projects)

Create Projects:

* `dev`
* `prod`

---

### 3. Once Implemented We shall update next steps

---

## IBM Cloud Procedure Requirements

1. IBM Cloud Account
2. IBM Cloud CLI
3. Terraform CLI

---

## Pre-Requisite

> :warning: Login using an account with **Account Owner role** for resource management.

### 1. **Create IBM Resource Groups**

* Console: [https://cloud.ibm.com](https://cloud.ibm.com)
* Docs: [https://cloud.ibm.com/docs/account?topic=account-rgs](https://cloud.ibm.com/docs/account?topic=account-rgs)

Create two resource groups:

* `dev`
* `prod`

---

### 2. Once Implemented We shall update next steps

---

## Oracle Cloud Procedure Requirements

1. Oracle Cloud Account (OCI)
2. OCI CLI
3. Terraform CLI

---

## Pre-Requisite

> :warning: Log in as **Administrator (Administrator Group)** to manage compartments and policies.

### 1. **Create Compartments (Prod & Dev)**

* Console: [https://cloud.oracle.com](https://cloud.oracle.com)
* Docs: [https://docs.oracle.com/iaas/Content/Identity/Tasks/managingcompartments.htm](https://docs.oracle.com/iaas/Content/Identity/Tasks/managingcompartments.htm)

Create two compartments:

* `dev`
* `prod`

---

### 2. Once Implemented We shall update next steps