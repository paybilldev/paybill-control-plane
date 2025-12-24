import type { FastifyPluginAsync, FastifyRequest } from 'fastify'
import {
  ApproveAuthorizationResponse,
  AssignMemberRoleBody,
  AuditLogsResponse,
  BillingCustomerUpdateBody,
  ChangeMFAEnforcementStateRequest,
  ConfirmCreateSubscriptionChangeBody,
  ConfirmSubscriptionChangeBody,
  CreateAwsBilledOrganizationBody,
  CreateDpaDocumentRequest,
  CreateDpaDocumentResponse,
  CreateInvitationBody,
  CreateOAuthAppBody,
  CreateOAuthAppClientSecretResponse,
  CreateOAuthAppResponse,
  CreateOrganizationBody,
  CreateOrganizationResponse,
  CreateSSOProviderBody,
  CreateSSOProviderResponse,
  CreateTaxIdBody,
  CreditsTopUpRequest,
  CreditsTopUpResponse,
  CustomerResponse,
  DeclineAuthorizationResponse,
  DeleteOAuthAppResponse,
  DetachPaymentMethodBody,
  GetSSOProviderResponse,
  GetSubscriptionResponse,
  InvitationByTokenResponse,
  InvitationResponse,
  Invoice,
  InvoiceList,
  InvoicePaymentLinkResponse,
  ListEntitlementsResponse,
  ListOAuthAppClientSecretsResponse,
  MarkDefaultPaymentMethodBody,
  Member,
  MemberWithFreeProjectLimit,
  MfaStatusResponse,
  OAuthAppResponse,
  OAuthAppResponseList,
  OrganizationProjectsResponse,
  OrganizationResponse,
  OrganizationRoleResponse,
  OrganizationSlugAvailableVersionsBody,
  OrganizationSlugAvailableVersionsResponse,
  OrganizationSlugResponse,
  OrgDailyUsageResponse,
  OrgDocumentUrlResponse,
  OrgUsageResponse,
  PaymentsResponse,
  PendingConfirmationResponse,
  PlansResponse,
  PutOAuthAppResponse,
  RequestUpgradeBody,
  RequestUpgradeResponse,
  RevokeAuthorizedOAuthAppResponse,
  SetupIntentResponse,
  TaxIdResponse,
  UpcomingInvoice,
  UpdateMemberRoleBody,
  UpdateOrganizationBody,
  UpdateOrganizationResponse,
  UpdateSSOProviderBody,
  UpdateSSOProviderResponse,
  UpdateSubscriptionBody,
  UpdateSubscriptionResponse,
} from '../openapi/index.js'

interface OrgDailyUsageQuery {
  apikey?: string
  end?: string
  project_ref?: string
  start?: string
}

interface OrganizationProjectsQuery {
  /** @description Number of projects to return per page */
  limit?: number
  /** @description Number of projects to skip */
  offset?: number
  /** @description Search projects by name */
  search?: string
  /** @description Sort order for projects */
  sort?: 'name_asc' | 'name_desc' | 'created_asc' | 'created_desc'
  /** @description A comma-separated list of project statuses to filter by.
   *
   *     The following values are supported: `ACTIVE_HEALTHY`, `INACTIVE`. */
  statuses?: string
}

interface QueryParams {
  limit?: number
  offset?: number
}

interface OrgUsageQuery {
  apikey?: string
  end?: string
  project_ref?: string
  start?: string
}

async function requestOrganizationUpgrade(
  slug: string,
  body: RequestUpgradeBody
): Promise<RequestUpgradeResponse> {
  return {} as RequestUpgradeResponse
}

export async function deleteOrganizationTaxId(slug: string): Promise<null> {
  // TODO:
  return null
}

export async function getOrganizationTaxId(slug: string): Promise<TaxIdResponse> {
  // TODO:
  return {} as TaxIdResponse
}

export async function deleteSSOProvider(slug: string): Promise<null> {
  // TODO:
  return null
}

export async function getSSOProvider(slug: string): Promise<GetSSOProviderResponse> {
  // TODO:
  return {} as GetSSOProviderResponse
}

export async function updateOrganizationTaxId(
  slug: string,
  body: CreateTaxIdBody
): Promise<TaxIdResponse> {
  // TODO:
  return {} as TaxIdResponse
}

export async function updateSSOProvider(
  slug: string,
  body: UpdateSSOProviderBody
): Promise<UpdateSSOProviderResponse> {
  // TODO:
  return {} as UpdateSSOProviderResponse
}

export async function createAwsMarketplaceOrganization(
  body: CreateAwsBilledOrganizationBody
): Promise<OrganizationResponse> {
  // TODO:
  return {} as OrganizationResponse
}

export async function createSSOProvider(
  slug: string,
  body: CreateSSOProviderBody
): Promise<CreateSSOProviderResponse> {
  // TODO:
  return {} as CreateSSOProviderResponse
}

export async function getOrganizationRoles(slug: string): Promise<OrganizationRoleResponse> {
  // TODO:
  return {} as OrganizationRoleResponse
}

export async function getOrganizationProjects(
  slug: string,
  query: OrganizationProjectsQuery
): Promise<OrganizationProjectsResponse> {
  // TODO:
  return {} as OrganizationProjectsResponse
}

export async function getDailyOrganizationUsage(
  slug: string,
  query: OrgDailyUsageQuery
): Promise<OrgDailyUsageResponse> {
  // TODO:
  return {} as OrgDailyUsageResponse
}

export async function getOrganizationUsage(
  slug: string,
  query: OrgUsageQuery
): Promise<OrgUsageResponse> {
  // TODO:
  return {} as OrgUsageResponse
}

export async function setUpPaymentMethod(slug: string): Promise<SetupIntentResponse> {
  // TODO:
  return {} as SetupIntentResponse
}

export async function markPaymentMethodAsDefault(
  slug: string,
  body: MarkDefaultPaymentMethodBody
): Promise<null> {
  // TODO:
  return null
}

export async function getPaymentMethods(slug: string): Promise<PaymentsResponse> {
  // TODO:
  return {} as PaymentsResponse
}

export async function detachPaymentMethod(
  slug: string,
  body: DetachPaymentMethodBody
): Promise<null> {
  // TODO:
  return null
}

export async function declineAuthorizationRequest(
  slug: string,
  id: string
): Promise<DeclineAuthorizationResponse> {
  // TODO:
  return {} as DeclineAuthorizationResponse
}

export async function approveAuthorizationRequest(
  slug: string,
  id: string
): Promise<ApproveAuthorizationResponse> {
  // TODO:
  return {} as ApproveAuthorizationResponse
}

export async function revokeAuthorizedOAuthApp(
  slug: string,
  id: string
): Promise<RevokeAuthorizedOAuthAppResponse> {
  // TODO:
  return {} as RevokeAuthorizedOAuthAppResponse
}

export async function removeOAuthApp(slug: string, id: string): Promise<DeleteOAuthAppResponse> {
  // TODO:
  return {} as DeleteOAuthAppResponse
}

export async function updateOAuthApp(
  slug: string,
  id: string,
  body: CreateOAuthAppBody
): Promise<PutOAuthAppResponse> {
  // TODO:
  return {} as PutOAuthAppResponse
}

export async function removeOAuthAppClientSecret(
  slug: string,
  app_id: string,
  secret_id: string
): Promise<null> {
  // TODO:
  return null
}

export async function listOAuthAppClientSecrets(
  slug: string,
  app_id: string
): Promise<ListOAuthAppClientSecretsResponse> {
  // TODO:
  return {} as ListOAuthAppClientSecretsResponse
}

export async function createOAuthAppClientSecret(
  slug: string,
  app_id: string
): Promise<CreateOAuthAppClientSecretResponse> {
  // TODO:
  return {} as CreateOAuthAppClientSecretResponse
}

export async function createOAuthApp(
  slug: string,
  body: CreateOAuthAppBody
): Promise<CreateOAuthAppResponse> {
  // TODO:
  return {} as CreateOAuthAppResponse
}

export async function listOAuthApps(slug: string, type: string): Promise<OAuthAppResponseList> {
  // TODO:
  return [] as OAuthAppResponseList
}

export async function updateMFAState(
  params: { slug: string },
  body: ChangeMFAEnforcementStateRequest
): Promise<MfaStatusResponse> {
  // TODO:
  return {} as MfaStatusResponse
}

export async function getMFAState(params: { slug: string }): Promise<MfaStatusResponse> {
  // TODO:
  return {} as MfaStatusResponse
}

export async function getMembersWhoReachedFreeProjectLimit(params: {
  slug: string
}): Promise<MemberWithFreeProjectLimit> {
  // TODO:
  return [] as MemberWithFreeProjectLimit
}

export async function deleteOrganizationInvitation(params: {
  slug: string
  id: string
}): Promise<null> {
  // TODO:
  return null
}

export async function acceptInvitationByToken(params: {
  slug: string
  token: string
}): Promise<null> {
  // TODO:
  return null
}

export async function getInvitationByToken(params: {
  slug: string
  token: string
}): Promise<InvitationByTokenResponse> {
  // TODO:
  return {} as InvitationByTokenResponse
}

export async function getAllInvitations(slug: string): Promise<InvitationResponse> {
  // TODO:
  return {} as InvitationResponse
}

export async function createInvitation(slug: string, body: CreateInvitationBody): Promise<void> {
  // TODO: implement actual API call to create invitation
  console.log(`Creating invitation for ${body.email} with role ${body.role_id} in org ${slug}`)
}

export async function updateMemberRole(
  slug: string,
  user_id: string,
  role_id: number,
  body: UpdateMemberRoleBody
): Promise<void> {
  // TODO: implement API call to update role
}

export async function deleteMemberRole(
  slug: string,
  user_id: string,
  role_id: number
): Promise<void> {
  // TODO: implement API call to delete role
}

export async function deleteOrganizationMember(slug: string, user_id: string): Promise<null> {
  return null
}

export async function assignMemberRole(
  slug: string,
  user_id: string,
  body: AssignMemberRoleBody
): Promise<null> {
  // TODO: implement actual API call to assign role
  return null
}

export async function getOrganizationMembers(slug: string): Promise<Member> {
  // TODO:
  return [] as Member
}

export async function getOrganizationEntitlements(slug: string): Promise<ListEntitlementsResponse> {
  // TODO: implement actual API call
  return {} as ListEntitlementsResponse
}

export async function getStandardSecurityQuestionnaireUrl(
  slug: string
): Promise<OrgDocumentUrlResponse> {
  return {} as OrgDocumentUrlResponse
}

export async function getSoc2Type2ReportUrl(slug: string): Promise<OrgDocumentUrlResponse> {
  return {} as OrgDocumentUrlResponse
}

export async function createDpaDocument(
  slug: string,
  body: CreateDpaDocumentRequest
): Promise<CreateDpaDocumentResponse> {
  // TODO:
  return {} as CreateDpaDocumentResponse
}

export async function getCustomer(slug: string): Promise<CustomerResponse> {
  // TODO: implement actual API call
  return {} as CustomerResponse
}

export async function updateCustomer(slug: string, body: BillingCustomerUpdateBody): Promise<void> {
  // TODO: implement actual API call
}

export async function previewSubscriptionChange(
  slug: string,
  body: UpdateSubscriptionBody
): Promise<void> {
  // TODO:
  // No response content needed for 201
}

export async function _confirmSubscriptionChange(
  body: ConfirmCreateSubscriptionChangeBody
): Promise<CreateOrganizationResponse | PendingConfirmationResponse> {
  // TODO:
  return {} as CreateOrganizationResponse | PendingConfirmationResponse
}

export async function confirmSubscriptionChange(
  slug: string,
  body: ConfirmSubscriptionChangeBody
): Promise<PendingConfirmationResponse> {
  // TODO:
  return {} as PendingConfirmationResponse
}

export async function updateSubscription(
  slug: string,
  body: UpdateSubscriptionBody
): Promise<UpdateSubscriptionResponse> {
  // TODO:
  return {} as UpdateSubscriptionResponse
}

export async function getSubscription(slug: string): Promise<GetSubscriptionResponse> {
  // TODO: implement actual API call
  return {} as GetSubscriptionResponse
}

export async function getAvailablePlans(slug: string): Promise<PlansResponse> {
  // TODO: implement actual API call to fetch plans
  return {} as PlansResponse
}

export async function getUpcomingInvoice(slug: string): Promise<UpcomingInvoice> {
  // TODO:
  return {} as UpcomingInvoice
}

export async function getInvoicePaymentLink(
  slug: string,
  invoice_id: string
): Promise<InvoicePaymentLinkResponse> {
  // TODO:
  return {} as InvoicePaymentLinkResponse
}

export async function getInvoice(slug: string, invoice_id: string): Promise<Invoice> {
  // TODO:
  return {} as Invoice
}

export const countInvoices = async (slug: string): Promise<null> => {
  // TODO:
  return null
}
export const getInvoices = async (slug: string): Promise<InvoiceList> => {
  // TODO:
  return {} as InvoiceList
}
export const createTopUp = async (
  slug: string,
  body: CreditsTopUpRequest
): Promise<CreditsTopUpResponse> => {
  // TODO:
  return {} as CreditsTopUpResponse
}

export const getAvailableImageVersions = async (
  slug: string,
  body: OrganizationSlugAvailableVersionsBody
): Promise<OrganizationSlugAvailableVersionsResponse> => {
  // TODO:
  return {} as OrganizationSlugAvailableVersionsResponse
}
export const getAuditLogs = async (
  slug: string,
  query: { iso_timestamp_end: string; iso_timestamp_start: string }
): Promise<AuditLogsResponse> => {
  // TODO:
  return {} as AuditLogsResponse
}
export const updateOrganization = async (
  slug: string,
  body: UpdateOrganizationBody
): Promise<UpdateOrganizationResponse> => {
  // TODO:
  return {} as UpdateOrganizationResponse
}

export const deleteOrganization = async (slug: string): Promise<null> => {
  // TODO:
  return null
}
export const getOrganization = async (slug: string): Promise<OrganizationSlugResponse> => {
  // TODO:
  return {} as OrganizationSlugResponse
}

export const getOrganizations = async (request: FastifyRequest): Promise<OrganizationResponse> => {
  // TODO:
  return {} as OrganizationResponse
}

export const createOrganizationWithTier = async (
  body: CreateOrganizationBody
): Promise<CreateOrganizationResponse> => {
  // TODO:
  return {} as CreateOrganizationResponse
}

const organizationRoutes: FastifyPluginAsync = async (app) => {
  app.get<{}>(
    '/',
    {
      schema: {
        description: "Gets user's organizations.",
        tags: ['Organizations'],
        operationId: 'OrganizationsController_getOrganizations',
        response: {
          200: {
            $ref: 'OrganizationResponse',
          },
          500: {
            description: "Failed to retrieve user's organizations",
            type: 'null',
          },
        },
      },
    },
    async (request, reply) => {
      const config = await getOrganizations(request)
      return reply.send(config)
    }
  )

  app.post<{ Body: CreateOrganizationBody }>(
    '/',
    {
      schema: {
        description: 'Creates an organization.',
        tags: ['Organizations'],
        operationId: 'OrganizationsController_createOrganizationWithTier',
        body: {
          type: 'object',
          $ref: 'CreateOrganizationBody',
        },
        response: {
          201: {
            $ref: 'CreateOrganizationResponse',
          },
          500: {
            description: 'Unexpected error creating an organization',
            type: 'null',
          },
        },
      },
    },
    async (request, reply) => {
      const config = await createOrganizationWithTier(request.body)
      return reply.send(config)
    }
  )

  app.get<{ Params: { slug: string } }>(
    '/:slug',
    {
      schema: {
        description: 'Gets a specific organization that belongs to the authenticated user.',
        tags: ['Organizations'],
        operationId: 'OrganizationSlugController_getOrganization',
        params: {
          type: 'object',
          properties: {
            slug: {
              type: 'string',
            },
          },
          required: ['slug'],
        },
        response: {
          200: {
            $ref: 'OrganizationSlugResponse',
          },
          401: {
            description: 'Unauthorized',
            type: 'null',
          },
          403: {
            description: 'Forbidden action',
            type: 'null',
          },
          429: {
            description: 'Rate limit exceeded',
            type: 'null',
          },
        },
      },
    },
    async (request, reply) => {
      const config = await getOrganization(request.params.slug)
      return reply.send(config)
    }
  )

  app.delete<{ Params: { slug: string } }>(
    '/:slug',
    {
      schema: {
        description: 'Deletes organization.',
        tags: ['Organizations'],
        operationId: 'OrganizationSlugController_deleteOrganization',
        params: {
          type: 'object',
          properties: {
            slug: {
              type: 'string',
            },
          },
          required: ['slug'],
        },
        response: {
          200: {
            description: 'Successfully deleted organization',
            type: 'null',
          },
          401: {
            description: 'Unauthorized',
            type: 'null',
          },
          403: {
            description: 'Forbidden action',
            type: 'null',
          },
          429: {
            description: 'Rate limit exceeded',
            type: 'null',
          },
          500: {
            description: 'Failed to delete organization',
            type: 'null',
          },
        },
      },
    },
    async (request, reply) => {
      const config = await deleteOrganization(request.params.slug)
      return reply.send(config)
    }
  )

  app.patch<{ Params: { slug: string }; Body: UpdateOrganizationBody }>(
    '/:slug',
    {
      schema: {
        description: 'Updates organization',
        tags: ['Organizations'],
        operationId: 'OrganizationSlugController_updateOrganization',
        params: {
          type: 'object',
          properties: {
            slug: {
              type: 'string',
            },
          },
          required: ['slug'],
        },
        body: {
          type: 'object',
          $ref: 'UpdateOrganizationBody',
        },
        response: {
          200: {
            $ref: 'UpdateOrganizationResponse',
          },
          401: {
            description: 'Unauthorized',
            type: 'null',
          },
          403: {
            description: 'Forbidden action',
            type: 'null',
          },
          429: {
            description: 'Rate limit exceeded',
            type: 'null',
          },
          500: {
            description: 'Failed to update organization',
            type: 'null',
          },
        },
      },
    },
    async (request, reply) => {
      const config = await updateOrganization(request.params.slug, request.body)
      return reply.send(config)
    }
  )

  app.get<{
    Params: { slug: string }
    Querystring: { iso_timestamp_end: string; iso_timestamp_start: string }
  }>(
    '/:slug/audit',
    {
      schema: {
        description: "Gets an organization's audit logs.",
        tags: ['Organizations'],
        operationId: 'OrgAuditLogsController_getAuditLogs',
        params: {
          type: 'object',
          properties: {
            slug: {
              type: 'string',
              description: 'Slug',
            },
          },
          required: ['slug'],
        },
        querystring: {
          type: 'object',
          properties: {
            iso_timestamp_start: {
              type: 'string',
              description: 'Start timestamp',
            },
            iso_timestamp_end: {
              type: 'string',
              description: 'End timestamp',
            },
          },
          required: ['iso_timestamp_start', 'iso_timestamp_end'],
        },
        response: {
          200: {
            $ref: 'AuditLogsResponse',
          },
          401: {
            description: 'Unauthorized',
            type: 'null',
          },
          403: {
            description: 'Forbidden action',
            type: 'null',
          },
          429: {
            description: 'Rate limit exceeded',
            type: 'null',
          },
          500: {
            description: "Failed to get an organization's audit logs",
            type: 'null',
          },
        },
      },
    },
    async (request, reply) => {
      const config = await getAuditLogs(request.params.slug, request.query)
      return reply.send(config)
    }
  )

  app.post<{ Params: { slug: string }; Body: OrganizationSlugAvailableVersionsBody }>(
    '/:slug/available-versions',
    {
      schema: {
        description:
          'Retrieves a list of available Database versions available to the organization',
        tags: ['Organizations'],
        operationId: 'OrganizationSlugController_getAvailableImageVersions',
        params: {
          type: 'object',
          properties: {
            slug: {
              type: 'string',
              description: 'Organization slug',
            },
          },
          required: ['slug'],
        },
        body: {
          $ref: 'OrganizationSlugAvailableVersionsBody',
        },
        response: {
          200: {
            $ref: 'OrganizationSlugAvailableVersionsResponse',
          },
          401: {
            description: 'Unauthorized',
            type: 'null',
          },
          403: {
            description: 'Forbidden action',
            type: 'null',
          },
          429: {
            description: 'Rate limit exceeded',
            type: 'null',
          },
          500: {
            description: 'Failed to determine available Database versions',
            type: 'null',
          },
        },
      },
    },
    async (request, reply) => {
      const config = await getAvailableImageVersions(request.params.slug, request.body)
      return reply.send(config)
    }
  )

  app.post<{ Params: { slug: string }; Body: CreditsTopUpRequest }>(
    '/:slug/billing/credits/top-up',
    {
      schema: {
        description: 'Tops up the credit balance',
        tags: ['Organizations'],
        operationId: 'OrgCreditsController_createTopUp',
        params: {
          type: 'object',
          properties: {
            slug: {
              type: 'string',
              description: 'Organization slug',
            },
          },
          required: ['slug'],
        },
        body: {
          $ref: 'CreditsTopUpRequest',
        },
        response: {
          201: {
            $ref: 'CreditsTopUpResponse',
          },
          401: {
            description: 'Unauthorized',
            type: 'null',
          },
          403: {
            description: 'Forbidden action',
            type: 'null',
          },
          429: {
            description: 'Rate limit exceeded',
            type: 'null',
          },
          500: {
            description: 'Failed to top up credit balance',
            type: 'null',
          },
        },
      },
    },
    async (request, reply) => {
      const config = await createTopUp(request.params.slug, request.body)
      return reply.send(config)
    }
  )

  app.head<{ Params: { slug: string } }>(
    '/:slug/billing/invoices',
    {
      schema: {
        description: 'Gets the total count of invoices for the given organization',
        tags: ['Organizations'],
        operationId: 'OrgInvoicesController_countInvoices',
        params: {
          type: 'object',
          properties: {
            slug: {
              type: 'string',
              description: 'Organization slug',
            },
          },
          required: ['slug'],
        },
        response: {
          200: {
            description: 'Total count value',
            headers: {
              'X-Total-Count': { type: 'number' },
            },
          },
          401: {
            description: 'Unauthorized',
            type: 'null',
          },
          403: {
            description: 'Forbidden action',
            type: 'null',
          },
          429: {
            description: 'Rate limit exceeded',
            type: 'null',
          },
          500: {
            description: 'Failed to retrieve invoices',
            type: 'null',
          },
        },
      },
    },
    async (request, reply) => {
      const config = await countInvoices(request.params.slug)
      return reply.send(config)
    }
  )

  app.get<{ Params: { slug: string }; Querystring?: QueryParams }>(
    '/:slug/billing/invoices',
    {
      schema: {
        description: 'Gets invoices for the given organization',
        tags: ['Organizations'],
        operationId: 'OrgInvoicesController_getInvoices',
        params: {
          type: 'object',
          properties: {
            slug: {
              type: 'string',
              description: 'Organization slug',
            },
          },
          required: ['slug'],
        },
        querystring: {
          type: 'object',
          properties: {
            limit: {
              type: 'number',
              description: 'Limit',
            },
            offset: {
              type: 'number',
              description: 'Offset',
            },
          },
        },
        response: {
          200: {
            $ref: 'InvoiceList',
          },
          401: {
            description: 'Unauthorized',
            type: 'null',
          },
          403: {
            description: 'Forbidden action',
            type: 'null',
          },
          429: {
            description: 'Rate limit exceeded',
            type: 'null',
          },
          500: {
            description: 'Failed to retrieve invoices',
            type: 'null',
          },
        },
      },
    },
    async (request, reply) => {
      const config = await getInvoices(request.params.slug)
      return reply.send(config)
    }
  )

  app.get<{
    Params: { slug: string; invoice_id: string }
  }>(
    '/:slug/billing/invoices/:invoice_id',
    {
      schema: {
        description: 'Gets invoice with the given invoice ID',
        tags: ['Organizations'],
        operationId: 'OrgInvoicesController_getInvoice',
        params: {
          type: 'object',
          properties: {
            slug: { type: 'string', description: 'Organization slug' },
            invoice_id: { type: 'string', description: 'Invoice ID' },
          },
          required: ['slug', 'invoice_id'],
        },
        response: {
          200: { $ref: 'Invoice' },
          401: { description: 'Unauthorized', type: 'null' },
          403: { description: 'Forbidden action', type: 'null' },
          429: { description: 'Rate limit exceeded', type: 'null' },
          500: { description: 'Failed to retrieve invoice', type: 'null' },
        },
      },
    },
    async (request, reply) => {
      const invoice = await getInvoice(request.params.slug, request.params.invoice_id)
      return reply.send(invoice)
    }
  )

  app.get<{
    Params: { slug: string; invoice_id: string }
  }>(
    '/:slug/billing/invoices/:invoice_id/payment-link',
    {
      schema: {
        description: 'Gets the payment link to manually pay the given invoice',
        tags: ['Organizations'],
        operationId: 'OrgInvoicesController_getInvoicePaymentLink',
        params: {
          type: 'object',
          properties: {
            slug: { type: 'string', description: 'Organization slug' },
            invoice_id: { type: 'string', description: 'Invoice ID' },
          },
          required: ['slug', 'invoice_id'],
        },
        response: {
          200: { $ref: 'InvoicePaymentLinkResponse' },
          401: { description: 'Unauthorized', type: 'null' },
          403: { description: 'Forbidden action', type: 'null' },
          429: { description: 'Rate limit exceeded', type: 'null' },
          500: { description: 'Failed to retrieve invoice payment link', type: 'null' },
        },
      },
    },
    async (request, reply) => {
      const link = await getInvoicePaymentLink(request.params.slug, request.params.invoice_id)
      return reply.send(link)
    }
  )

  app.get<{
    Params: { slug: string }
  }>(
    '/:slug/billing/invoices/upcoming',
    {
      schema: {
        description: 'Gets the upcoming invoice',
        tags: ['Organizations'],
        operationId: 'OrgInvoicesController_getUpcomingInvoice',
        params: {
          type: 'object',
          properties: {
            slug: { type: 'string', description: 'Organization slug' },
          },
          required: ['slug'],
        },
        response: {
          200: { $ref: 'UpcomingInvoice' },
          401: { description: 'Unauthorized', type: 'null' },
          403: { description: 'Forbidden action', type: 'null' },
          429: { description: 'Rate limit exceeded', type: 'null' },
          500: { description: 'Failed to retrieve upcoming invoice', type: 'null' },
        },
      },
    },
    async (request, reply) => {
      const invoice = await getUpcomingInvoice(request.params.slug)
      return reply.send(invoice)
    }
  )

  app.get<{
    Params: { slug: string }
  }>(
    '/:slug/billing/plans',
    {
      schema: {
        description: 'Gets subscription Plans',
        tags: ['Organizations'],
        operationId: 'OrgPlansController_getAvailablePlans',
        params: {
          type: 'object',
          properties: {
            slug: { type: 'string', description: 'Organization slug' },
          },
          required: ['slug'],
        },
        response: {
          200: { $ref: 'PlansResponse' },
          401: { description: 'Unauthorized', type: 'null' },
          403: { description: 'Forbidden action', type: 'null' },
          429: { description: 'Rate limit exceeded', type: 'null' },
          500: { description: 'Failed to get subscription Plans', type: 'null' },
        },
      },
    },
    async (request, reply) => {
      const plans = await getAvailablePlans(request.params.slug)
      return reply.send(plans)
    }
  )

  app.get<{
    Params: { slug: string }
  }>(
    '/:slug/billing/subscription',
    {
      schema: {
        description: 'Gets the current subscription',
        tags: ['Organizations'],
        operationId: 'SubscriptionController_getSubscription',
        params: { type: 'object', properties: { slug: { type: 'string' } }, required: ['slug'] },
        response: {
          200: { $ref: 'GetSubscriptionResponse' },
          401: { description: 'Unauthorized', type: 'null' },
          403: { description: 'Forbidden action', type: 'null' },
          429: { description: 'Rate limit exceeded', type: 'null' },
          500: { description: 'Failed to retrieve subscription', type: 'null' },
        },
      },
    },
    async (request, reply) => {
      const subscription = await getSubscription(request.params.slug)
      return reply.send(subscription)
    }
  )

  // PUT subscription
  app.put<{
    Params: { slug: string }
    Body: UpdateSubscriptionBody
  }>(
    '/:slug/billing/subscription',
    {
      schema: {
        description: 'Updates subscription',
        tags: ['Organizations'],
        operationId: 'SubscriptionController_updateSubscription',
        params: { type: 'object', properties: { slug: { type: 'string' } }, required: ['slug'] },
        body: {
          $ref: 'UpdateSubscriptionBody',
        },
        response: {
          200: { $ref: 'UpdateSubscriptionResponse' },
          401: { description: 'Unauthorized', type: 'null' },
          403: { description: 'Forbidden action', type: 'null' },
          429: { description: 'Rate limit exceeded', type: 'null' },
          500: { description: 'Failed to update subscription change', type: 'null' },
        },
      },
    },
    async (request, reply) => {
      const updated = await updateSubscription(request.params.slug, request.body)
      return reply.send(updated)
    }
  )

  app.post<{
    Params: { slug: string }
    Body: ConfirmSubscriptionChangeBody
  }>(
    '/:slug/billing/subscription/confirm',
    {
      schema: {
        description: 'Confirm subscription change',
        tags: ['Organizations'],
        operationId: 'SubscriptionController_confirmSubscriptionChange',
        params: { type: 'object', properties: { slug: { type: 'string' } }, required: ['slug'] },
        body: { $ref: 'ConfirmSubscriptionChangeBody' },
        response: {
          200: { description: 'Confirmed successfully', type: 'null' },
          202: { $ref: 'PendingConfirmationResponse' },
          401: { description: 'Unauthorized', type: 'null' },
          403: { description: 'Forbidden action', type: 'null' },
          429: { description: 'Rate limit exceeded', type: 'null' },
          500: { description: 'Failed to confirm subscription change', type: 'null' },
        },
      },
    },
    async (request, reply) => {
      const response = await confirmSubscriptionChange(request.params.slug, request.body)
      if (response) return reply.code(202).send(response)
      return reply.code(200).send()
    }
  )

  app.post<{
    Params: { slug: string }
    Body: UpdateSubscriptionBody
  }>(
    '/:slug/billing/subscription/preview',
    {
      schema: {
        description: 'Preview subscription changes',
        tags: ['Organizations'],
        operationId: 'SubscriptionController_previewSubscriptionChange',
        params: { type: 'object', properties: { slug: { type: 'string' } }, required: ['slug'] },
        body: { $ref: 'UpdateSubscriptionBody' },
        response: {
          201: { description: 'Preview created', type: 'null' },
          401: { description: 'Unauthorized', type: 'null' },
          403: { description: 'Forbidden action', type: 'null' },
          429: { description: 'Rate limit exceeded', type: 'null' },
          500: { description: 'Failed to preview subscription changes', type: 'null' },
        },
      },
    },
    async (request, reply) => {
      await previewSubscriptionChange(request.params.slug, request.body)
      return reply.code(201).send()
    }
  )

  app.post<{
    Params: { slug: string }
    Body: RequestUpgradeBody
  }>(
    '/:slug/billing/upgrade-request',
    {
      schema: {
        description: 'Request organization upgrade and notify billing owners',
        tags: ['Organizations'],
        operationId: 'UpgradeRequestController_requestUpgrade',
        params: { type: 'object', properties: { slug: { type: 'string' } }, required: ['slug'] },
        body: { $ref: 'RequestUpgradeBody' },
        response: {
          201: { $ref: 'RequestUpgradeResponse' },
          401: { description: 'Unauthorized', type: 'null' },
          403: { description: 'Forbidden action', type: 'null' },
          429: { description: 'Rate limit exceeded', type: 'null' },
          500: { description: 'Failed to send upgrade request', type: 'null' },
        },
      },
    },
    async (request, reply) => {
      const result = await requestOrganizationUpgrade(request.params.slug, request.body)

      return reply.status(201).send(result)
    }
  )

  app.get<{
    Params: { slug: string }
  }>(
    '/:slug/customer',
    {
      schema: {
        description: 'Gets the Billing customer',
        tags: ['Organizations'],
        operationId: 'CustomerController_getCustomer',
        params: { type: 'object', properties: { slug: { type: 'string' } }, required: ['slug'] },
        response: {
          200: { $ref: 'CustomerResponse' },
          401: { description: 'Unauthorized', type: 'null' },
          403: { description: 'Forbidden action', type: 'null' },
          429: { description: 'Rate limit exceeded', type: 'null' },
          500: { description: 'Failed to retrieve the Billing customer', type: 'null' },
        },
      },
    },
    async (request, reply) => {
      const customer = await getCustomer(request.params.slug)
      return reply.send(customer)
    }
  )

  // PUT Customer
  app.put<{
    Params: { slug: string }
    Body: BillingCustomerUpdateBody
  }>(
    '/:slug/customer',
    {
      schema: {
        description: 'Updates the billing customer',
        tags: ['Organizations'],
        operationId: 'CustomerController_updateCustomer',
        params: { type: 'object', properties: { slug: { type: 'string' } }, required: ['slug'] },
        body: { $ref: 'BillingCustomerUpdateBody' },
        response: {
          204: { description: 'Customer updated successfully', type: 'null' },
          401: { description: 'Unauthorized', type: 'null' },
          403: { description: 'Forbidden action', type: 'null' },
          429: { description: 'Rate limit exceeded', type: 'null' },
          500: { description: 'Failed to update the billing customer', type: 'null' },
        },
      },
    },
    async (request, reply) => {
      await updateCustomer(request.params.slug, request.body)
      return reply.code(204).send()
    }
  )

  app.post<{
    Params: { slug: string }
    Body: CreateDpaDocumentRequest
  }>(
    '/:slug/documents/dpa',
    {
      schema: {
        description: 'Create DPA document using PandaDoc',
        tags: ['Organizations'],
        operationId: 'OrgDocumentsController_createDpaDocument',
        params: { type: 'object', properties: { slug: { type: 'string' } }, required: ['slug'] },
        body: { $ref: 'CreateDpaDocumentRequest' },
        response: {
          201: { $ref: 'CreateDpaDocumentResponse' },
          401: { description: 'Unauthorized', type: 'null' },
          403: { description: 'Forbidden action', type: 'null' },
          429: { description: 'Rate limit exceeded', type: 'null' },
        },
      },
    },
    async (request, reply) => {
      const response = await createDpaDocument(request.params.slug, request.body)
      return reply.code(201).send(response)
    }
  )

  app.get<{
    Params: { slug: string }
  }>(
    '/:slug/documents/soc2-type-2-report',
    {
      schema: {
        description: 'Get SOC2 Type 2 report URL',
        tags: ['Organizations'],
        operationId: 'OrgDocumentsController_getSoc2Type2ReportUrl',
        params: { type: 'object', properties: { slug: { type: 'string' } }, required: ['slug'] },
        response: {
          200: { $ref: 'OrgDocumentUrlResponse' },
          401: { description: 'Unauthorized', type: 'null' },
          403: { description: 'Forbidden action', type: 'null' },
          429: { description: 'Rate limit exceeded', type: 'null' },
        },
      },
    },
    async (request, reply) => {
      const response = await getSoc2Type2ReportUrl(request.params.slug)
      return reply.send(response)
    }
  )

  app.get<{
    Params: { slug: string }
  }>(
    '/:slug/documents/standard-security-questionnaire',
    {
      schema: {
        description: 'Get standard security questionnaire URL',
        tags: ['Organizations'],
        operationId: 'OrgDocumentsController_getStandardSecurityQuestionnaireUrl',
        params: { type: 'object', properties: { slug: { type: 'string' } }, required: ['slug'] },
        response: {
          200: { $ref: 'OrgDocumentUrlResponse' },
          401: { description: 'Unauthorized', type: 'object' },
          403: { description: 'Forbidden action', type: 'object' },
          429: { description: 'Rate limit exceeded', type: 'object' },
        },
      },
    },
    async (request, reply) => {
      const response = await getStandardSecurityQuestionnaireUrl(request.params.slug)
      return reply.send(response)
    }
  )

  app.get<{
    Params: { slug: string }
  }>(
    '/:slug/entitlements',
    {
      schema: {
        description: 'Get entitlements for an organization',
        tags: ['Organizations'],
        operationId: 'OrganizationEntitlementsController_getEntitlements',
        params: { type: 'object', properties: { slug: { type: 'string' } }, required: ['slug'] },
        response: {
          200: { $ref: 'ListEntitlementsResponse' },
          401: { description: 'Unauthorized', type: 'object' },
          403: { description: 'Forbidden action', type: 'object' },
          429: { description: 'Rate limit exceeded', type: 'object' },
        },
      },
    },
    async (request, reply) => {
      const response = await getOrganizationEntitlements(request.params.slug)
      return reply.send(response)
    }
  )

  app.get<{
    Params: { slug: string }
  }>(
    '/:slug/members',
    {
      schema: {
        description: "Gets organization's members",
        tags: ['Organizations'],
        operationId: 'MembersController_getMembers',
        params: { type: 'object', properties: { slug: { type: 'string' } }, required: ['slug'] },
        response: {
          200: { $ref: 'Member' },
          500: { description: "Failed to retrieve organization's members", type: 'object' },
        },
      },
    },
    async (request, reply) => {
      const members = await getOrganizationMembers(request.params.slug)
      return reply.send(members)
    }
  )

  app.delete<{
    Params: { slug: string; user_id: string }
  }>(
    '/:slug/members/:user_id',
    {
      schema: {
        description: 'Removes organization member',
        tags: ['Organizations'],
        operationId: 'MembersController_deleteMember',
        params: {
          type: 'object',
          properties: { slug: { type: 'string' }, user_id: { type: 'string' } },
          required: ['slug', 'user_id'],
        },
        response: {
          200: { type: 'null' },
          401: { description: 'Unauthorized', type: 'null' },
          403: { description: 'Forbidden action', type: 'null' },
          429: { description: 'Rate limit exceeded', type: 'null' },
          500: { description: 'Failed to remove organization member', type: 'null' },
        },
      },
    },
    async (request, reply) => {
      await deleteOrganizationMember(request.params.slug, request.params.user_id)
      return reply.code(200).send()
    }
  )

  // PATCH member role
  app.patch<{
    Params: { slug: string; user_id: string }
    Body: AssignMemberRoleBody
  }>(
    '/:slug/members/:user_id',
    {
      schema: {
        description: 'Assign organization member with new role',
        tags: ['Organizations'],
        operationId: 'MembersController_assignMemberRole',
        params: {
          type: 'object',
          properties: { slug: { type: 'string' }, user_id: { type: 'string' } },
          required: ['slug', 'user_id'],
        },
        body: { $ref: 'AssignMemberRoleBody' },
        response: {
          200: { type: 'null' },
          401: { description: 'Unauthorized', type: 'null' },
          403: { description: 'Forbidden action', type: 'null' },
          429: { description: 'Rate limit exceeded', type: 'null' },
          500: { description: 'Failed to assign organization member with new role', type: 'null' },
        },
      },
    },
    async (request, reply) => {
      await assignMemberRole(request.params.slug, request.params.user_id, request.body)
      return reply.code(200).send()
    }
  )

  app.put<{
    Params: { slug: string; user_id: string; role_id: number }
    Body: UpdateMemberRoleBody
  }>(
    '/:slug/members/:user_id/roles/:role_id',
    {
      schema: {
        description: 'Update organization member role',
        tags: ['Organizations'],
        operationId: 'MembersController_UpdateMemberRole',
        params: {
          type: 'object',
          properties: {
            slug: { type: 'string' },
            user_id: { type: 'string' },
            role_id: { type: 'number' },
          },
          required: ['slug', 'user_id', 'role_id'],
        },
        body: { $ref: 'UpdateMemberRoleBody' },
        response: {
          200: { type: 'null' },
          401: { description: 'Unauthorized', type: 'null' },
          403: { description: 'Forbidden action', type: 'null' },
          429: { description: 'Rate limit exceeded', type: 'null' },
          500: { description: 'Failed to update organization member role', type: 'null' },
        },
      },
    },
    async (request, reply) => {
      await updateMemberRole(
        request.params.slug,
        request.params.user_id,
        request.params.role_id,
        request.body
      )
      return reply.code(200).send()
    }
  )

  // DELETE: Remove member role
  app.delete<{
    Params: { slug: string; user_id: string; role_id: number }
  }>(
    '/:slug/members/:user_id/roles/:role_id',
    {
      schema: {
        description: 'Removes organization member role',
        tags: ['Organizations'],
        operationId: 'MembersController_deleteMemberRole',
        params: {
          type: 'object',
          properties: {
            slug: { type: 'string' },
            user_id: { type: 'string' },
            role_id: { type: 'number' },
          },
          required: ['slug', 'user_id', 'role_id'],
        },
        response: {
          200: { type: 'null' },
          401: { description: 'Unauthorized', type: 'null' },
          403: { description: 'Forbidden action', type: 'null' },
          429: { description: 'Rate limit exceeded', type: 'null' },
          500: { description: 'Failed to remove organization member role', type: 'null' },
        },
      },
    },
    async (request, reply) => {
      await deleteMemberRole(request.params.slug, request.params.user_id, request.params.role_id)
      return reply.code(200).send()
    }
  )

  app.get<{
    Params: { slug: string }
  }>(
    '/:slug/members/invitations',
    {
      schema: {
        description: 'Gets organization invitations',
        tags: ['Organizations'],
        operationId: 'InvitationsController_getAllInvitations',
        params: {
          type: 'object',
          properties: { slug: { type: 'string' } },
          required: ['slug'],
        },
        response: {
          200: { $ref: 'InvitationResponse' },
          401: { description: 'Unauthorized', type: 'null' },
          403: { description: 'Forbidden action', type: 'null' },
          429: { description: 'Rate limit exceeded', type: 'null' },
          500: { description: 'Failed to get organization invitations', type: 'null' },
        },
      },
    },
    async (request, reply) => {
      const invitations = await getAllInvitations(request.params.slug)
      return reply.send(invitations)
    }
  )

  // POST: Create new invitation
  app.post<{
    Params: { slug: string }
    Body: CreateInvitationBody
  }>(
    '/:slug/members/invitations',
    {
      schema: {
        description: 'Creates organization invitation',
        tags: ['Organizations'],
        operationId: 'InvitationsController_createInvitation',
        params: {
          type: 'object',
          properties: { slug: { type: 'string' } },
          required: ['slug'],
        },
        body: { $ref: 'CreateInvitationBody' },
        response: {
          201: { type: 'null' },
          401: { description: 'Unauthorized', type: 'null' },
          403: { description: 'Forbidden action', type: 'null' },
          429: { description: 'Rate limit exceeded', type: 'null' },
          500: { description: 'Failed to create organization invitation', type: 'null' },
        },
      },
    },
    async (request, reply) => {
      await createInvitation(request.params.slug, request.body)
      return reply.code(201).send()
    }
  )

  app.delete<{
    Params: { slug: string; id: string }
  }>(
    '/:slug/members/invitations/:id',
    {
      schema: {
        description: 'Deletes organization invitation with given id',
        tags: ['Organizations'],
        operationId: 'InvitationsController_deleteInvitation',
        params: {
          type: 'object',
          properties: { slug: { type: 'string' }, id: { type: 'string' } },
          required: ['slug', 'id'],
        },
        response: {
          200: {
            description: 'Invitation deleted successfully',
            type: 'null',
          },
          401: {
            description: 'Unauthorized',
            type: 'null',
          },
          403: {
            description: 'Forbidden action',
            type: 'null',
          },
          429: {
            description: 'Rate limit exceeded',
            type: 'null',
          },
          500: {
            description: 'Failed to delete organization invitation with given id',
            type: 'null',
          },
        },
      },
    },
    async (request, reply) => {
      await deleteOrganizationInvitation(request.params)
      return reply.code(200).send()
    }
  )

  app.get<{
    Params: { slug: string; token: string }
  }>(
    '/:slug/members/invitations/:token',
    {
      schema: {
        description: 'Gets organization invitation by token',
        tags: ['Organizations'],
        operationId: 'InvitationsController_getInvitationByToken',
        params: {
          type: 'object',
          properties: {
            slug: {
              type: 'string',
            },
            token: {
              type: 'string',
            },
          },
          required: ['slug', 'token'],
        },
        response: {
          200: {
            $ref: 'InvitationByTokenResponse',
          },
          500: {
            description: 'Failed to get organization invitation by token',
            type: 'null',
          },
        },
      },
    },
    async (request, reply) => {
      const invitation = await getInvitationByToken(request.params)
      return reply.send(invitation)
    }
  )

  app.post<{
    Params: { slug: string; token: string }
  }>(
    '/:slug/members/invitations/:token',
    {
      schema: {
        description: 'Accepts organization invitation by token',
        tags: ['Organizations'],
        operationId: 'InvitationsController_acceptInvitationByToken',
        params: {
          type: 'object',
          properties: {
            slug: { type: 'string' },
            token: { type: 'string' },
          },
          required: ['slug', 'token'],
        },
        response: {
          201: {
            description: 'Invitation accepted',
            type: 'null',
          },
          500: {
            description: 'Failed to accept organization invitation by token',
            type: 'null',
          },
        },
      },
    },
    async (request, reply) => {
      await acceptInvitationByToken(request.params)
      return reply.code(201).send()
    }
  )

  app.get<{
    Params: { slug: string }
  }>(
    '/:slug/members/mfa/enforcement',
    {
      schema: {
        description: 'Gets organization MFA enforcement state',
        tags: ['Organizations'],
        operationId: 'MfaController_getMFAState',
        params: {
          type: 'object',
          properties: {
            slug: {
              type: 'string',
              description: 'Organization slug',
            },
          },
          required: ['slug'],
        },
        response: {
          201: {
            description: 'MFA enforcement state on organization',
            $ref: 'MfaStatusResponse',
          },
          401: {
            description: 'Unauthorized',
            type: 'null',
          },
          403: {
            description: 'Forbidden action',
            type: 'null',
          },
          429: {
            description: 'Rate limit exceeded',
            type: 'null',
          },
          500: {
            description: 'Failed to get organization MFA status',
            type: 'null',
          },
        },
      },
    },
    async (request, reply) => {
      const status = await getMFAState(request.params)
      return reply.code(201).send(status)
    }
  )

  app.patch<{
    Params: { slug: string }
    Body: ChangeMFAEnforcementStateRequest
  }>(
    '/:slug/members/mfa/enforcement',
    {
      schema: {
        description: 'Update organization MFA enforcement state',
        tags: ['Organizations'],
        operationId: 'MfaController_updateMFAState',
        params: {
          type: 'object',
          properties: {
            slug: {
              type: 'string',
              description: 'Organization slug',
            },
          },
          required: ['slug'],
        },
        body: {
          $ref: 'ChangeMFAEnforcementStateRequest',
        },
        response: {
          201: {
            description: 'MFA enforcement state on organization updated successfully',
            $ref: 'MfaStatusResponse',
          },
          401: {
            description: 'Unauthorized',
            type: 'null',
          },
          403: {
            description: 'Forbidden action',
            type: 'null',
          },
          429: {
            description: 'Rate limit exceeded',
            type: 'null',
          },
          500: {
            description: 'Failed to update organization MFA enforcement',
            type: 'null',
          },
        },
      },
    },
    async (request, reply) => {
      const updated = await updateMFAState(request.params, request.body)
      return reply.code(201).send(updated)
    }
  )

  app.get<{
    Params: { slug: string }
  }>(
    '/:slug/members/reached-free-project-limit',
    {
      schema: {
        description: 'Gets organization members who have reached their free project limit',
        tags: ['Organizations'],
        operationId: 'ReachedFreeProjectLimitController_getMembersWhoReachedFreeProjectLimit',
        params: {
          type: 'object',
          properties: {
            slug: {
              type: 'string',
              description: 'Organization slug',
            },
          },
          required: ['slug'],
        },
        response: {
          200: {
            description: 'Organization members who have reached their free project limit',
            $ref: 'MemberWithFreeProjectLimit',
          },
          401: {
            description: 'Unauthorized',
            type: 'null',
          },
          403: {
            description: 'Forbidden action',
            type: 'null',
          },
          429: {
            description: 'Rate limit exceeded',
            type: 'null',
          },
          500: {
            description:
              'Failed to retrieve organization members who have reached their free project limit',
            type: 'null',
          },
        },
      },
    },
    async (request, reply) => {
      const members = await getMembersWhoReachedFreeProjectLimit(request.params)
      return reply.send(members)
    }
  )

  app.get<{
    Params: { slug: string }
    Querystring: { type: 'published' | 'authorized' }
  }>(
    '/:slug/oauth/apps',
    {
      schema: {
        description: 'List published or authorized oauth apps',
        tags: ['Organizations'],
        operationId: 'OAuthAppsController_listOAuthApps',
        params: {
          type: 'object',
          properties: {
            slug: {
              type: 'string',
              description: 'Organization slug',
            },
          },
          required: ['slug'],
        },
        querystring: {
          type: 'object',
          properties: {
            type: {
              type: 'string',
              description: 'Type of connection',
            },
          },
        },
        response: {
          200: {
            description: 'OAuth apps',
            $ref: 'OAuthAppResponseList',
          },
          401: {
            description: 'Unauthorized',
            type: 'null',
          },
          403: {
            description: 'Forbidden action',
            type: 'null',
          },
          429: {
            description: 'Rate limit exceeded',
            type: 'null',
          },
        },
      },
    },
    async (request, reply) => {
      const apps = await listOAuthApps(request.params.slug, request.query.type)
      return reply.send(apps)
    }
  )

  app.post<{
    Params: { slug: string }
    Body: CreateOAuthAppBody
  }>(
    '/:slug/oauth/apps',
    {
      schema: {
        description: 'Create an oauth app',
        tags: ['Organizations'],
        operationId: 'OAuthAppsController_createOAuthApp',
        params: {
          type: 'object',
          properties: {
            slug: {
              type: 'string',
              description: 'Organization slug',
            },
          },
          required: ['slug'],
        },
        body: {
          $ref: 'CreateOAuthAppBody',
        },
        response: {
          201: {
            description: 'OAuth app created',
            $ref: 'CreateOAuthAppResponse',
          },
          401: {
            description: 'Unauthorized',
            type: 'null',
          },
          403: {
            description: 'Forbidden action',
            type: 'null',
          },
          429: {
            description: 'Rate limit exceeded',
            type: 'null',
          },
        },
      },
    },
    async (request, reply) => {
      const app = await createOAuthApp(request.params.slug, request.body)
      return reply.code(201).send(app)
    }
  )

  app.get<{
    Params: { slug: string; app_id: string }
  }>(
    '/:slug/oauth/apps/:app_id/client-secrets',
    {
      schema: {
        description: 'List oauth app client secrets',
        tags: ['Organizations'],
        operationId: 'OAuthAppClientSecretsController_listClientSecrets',
        params: {
          type: 'object',
          properties: {
            slug: {
              type: 'string',
              description: 'Organization slug',
            },
            app_id: {
              type: 'string',
              description: 'Oauth app id',
            },
          },
          required: ['slug', 'app_id'],
        },
        response: {
          200: {
            description: 'OAuth app client secrets',
            $ref: 'ListOAuthAppClientSecretsResponse',
          },
          401: {
            description: 'Unauthorized',
            type: 'null',
          },
          403: {
            description: 'Forbidden action',
            type: 'null',
          },
          429: {
            description: 'Rate limit exceeded',
            type: 'null',
          },
        },
      },
    },
    async (request, reply) => {
      const secrets = await listOAuthAppClientSecrets(request.params.slug, request.params.app_id)
      return reply.send(secrets)
    }
  )

  app.post<{
    Params: { slug: string; app_id: string }
  }>(
    '/:slug/oauth/apps/:app_id/client-secrets',
    {
      schema: {
        description: 'Create oauth app client secret',
        tags: ['Organizations'],
        operationId: 'OAuthAppClientSecretsController_CreateClientSecret',
        params: {
          type: 'object',
          properties: {
            slug: {
              type: 'string',
              description: 'Organization slug',
            },
            app_id: {
              type: 'string',
              description: 'Oauth app id',
            },
          },
          required: ['slug', 'app_id'],
        },
        response: {
          201: {
            description: 'OAuth app client secret created',
            $ref: 'CreateOAuthAppClientSecretResponse',
          },
          401: {
            description: 'Unauthorized',
            type: 'null',
          },
          403: {
            description: 'Forbidden action',
            type: 'null',
          },
          429: {
            description: 'Rate limit exceeded',
            type: 'null',
          },
        },
      },
    },
    async (request, reply) => {
      const secret = await createOAuthAppClientSecret(request.params.slug, request.params.app_id)
      return reply.code(201).send(secret)
    }
  )

  app.delete<{
    Params: { slug: string; app_id: string; secret_id: string }
  }>(
    '/:slug/oauth/apps/:app_id/client-secrets/:secret_id',
    {
      schema: {
        description: 'Remove oauth app client secret',
        tags: ['Organizations', 'OAuth'],
        operationId: 'OAuthAppClientSecretsController_RemoveClientSecret',
        params: {
          type: 'object',
          properties: {
            slug: {
              type: 'string',
              description: 'Organization slug',
            },
            app_id: {
              type: 'string',
              description: 'Oauth app id',
            },
            secret_id: {
              type: 'string',
              description: 'Secret id',
            },
          },
          required: ['slug', 'app_id', 'secret_id'],
        },
        response: {
          200: {
            description: 'OAuth app client secret removed',
            type: 'null',
          },
          401: {
            description: 'Unauthorized',
            type: 'null',
          },
          403: {
            description: 'Forbidden action',
            type: 'null',
          },
          429: {
            description: 'Rate limit exceeded',
            type: 'null',
          },
        },
      },
    },
    async (request, reply) => {
      await removeOAuthAppClientSecret(
        request.params.slug,
        request.params.app_id,
        request.params.secret_id
      )
      return reply.send()
    }
  )

  app.put<{
    Params: { slug: string; id: string }
    Body: CreateOAuthAppBody
  }>(
    '/:slug/oauth/apps/:id',
    {
      schema: {
        description: 'Update an oauth app',
        tags: ['Organizations'],
        operationId: 'OAuthAppsController_updateOAuthApp',
        params: {
          type: 'object',
          properties: {
            slug: {
              type: 'string',
              description: 'Organization slug',
            },
            id: {
              type: 'string',
              description: 'id',
            },
          },
          required: ['slug', 'id'],
        },
        body: {
          $ref: 'CreateOAuthAppBody',
        },
        response: {
          200: {
            description: 'OAuth app updated',
            $ref: 'PutOAuthAppResponse',
          },
          401: {
            description: 'Unauthorized',
            type: 'null',
          },
          403: {
            description: 'Forbidden action',
            type: 'null',
          },
          429: {
            description: 'Rate limit exceeded',
            type: 'null',
          },
        },
      },
    },
    async (request, reply) => {
      const updatedApp = await updateOAuthApp(request.params.slug, request.params.id, request.body)
      return reply.send(updatedApp)
    }
  )

  app.delete<{
    Params: { slug: string; id: string }
  }>(
    '/:slug/oauth/apps/:id',
    {
      schema: {
        description: 'Remove a published oauth app',
        tags: ['Organizations'],
        operationId: 'OAuthAppsController_removeOAuthApp',
        params: {
          type: 'object',
          properties: {
            slug: {
              type: 'string',
              description: 'Organization slug',
            },
            id: {
              type: 'string',
              description: 'id',
            },
          },
          required: ['slug', 'id'],
        },
        response: {
          200: {
            description: 'OAuth app removed',
            $ref: 'DeleteOAuthAppResponse',
          },
          401: {
            description: 'Unauthorized',
            type: 'null',
          },
          403: {
            description: 'Forbidden action',
            type: 'null',
          },
          429: {
            description: 'Rate limit exceeded',
            type: 'null',
          },
        },
      },
    },
    async (request, reply) => {
      const deletedApp = await removeOAuthApp(request.params.slug, request.params.id)
      return reply.send(deletedApp)
    }
  )

  app.post<{
    Params: { slug: string; id: string }
  }>(
    '/:slug/oauth/apps/:id/revoke',
    {
      schema: {
        description: 'Revoke an authorized oauth app',
        tags: ['Organizations'],
        operationId: 'OAuthAppsController_revokeAuthorizedOAuthApp',
        params: {
          type: 'object',
          properties: {
            slug: {
              type: 'string',
              description: 'Organization slug',
            },
            id: {
              type: 'string',
              description: 'id',
            },
          },
          required: ['slug', 'id'],
        },
        response: {
          201: {
            description: 'OAuth app revoked',
            $ref: 'RevokeAuthorizedOAuthAppResponse',
          },
          401: {
            description: 'Unauthorized',
            type: 'null',
          },
          403: {
            description: 'Forbidden action',
            type: 'null',
          },
          429: {
            description: 'Rate limit exceeded',
            type: 'null',
          },
        },
      },
    },
    async (request, reply) => {
      const revokedApp = await revokeAuthorizedOAuthApp(request.params.slug, request.params.id)
      return reply.code(201).send(revokedApp)
    }
  )

  app.post<{
    Params: { slug: string; id: string }
  }>(
    '/:slug/oauth/authorizations/:id',
    {
      schema: {
        description: '[Beta] Approve oauth app authorization request',
        tags: ['Organizations'],
        operationId: 'OrganizationOAuthAuthorizationsController_approveAuthorizationRequest',
        params: {
          type: 'object',
          properties: {
            slug: {
              type: 'string',
              description: 'Organization slug',
            },
            id: {
              type: 'string',
              description: 'id',
            },
          },
          required: ['slug', 'id'],
        },
        response: {
          201: {
            description: 'OAuth authorization approved',
            $ref: 'ApproveAuthorizationResponse',
          },
          401: {
            description: 'Unauthorized',
            type: 'null',
          },
          403: {
            description: 'Forbidden action',
            type: 'null',
          },
          429: {
            description: 'Rate limit exceeded',
            type: 'null',
          },
        },
      },
    },
    async (request, reply) => {
      const response = await approveAuthorizationRequest(request.params.slug, request.params.id)
      return reply.code(201).send(response)
    }
  )

  app.delete<{
    Params: { slug: string; id: string }
  }>(
    '/:slug/oauth/authorizations/:id',
    {
      schema: {
        description: '[Beta] Decline oauth app authorization request',
        tags: ['Organizations'],
        operationId: 'OrganizationOAuthAuthorizationsController_declineAuthorizationRequest',
        params: {
          type: 'object',
          properties: {
            slug: {
              type: 'string',
              description: 'Organization slug',
            },
            id: {
              type: 'string',
              description: 'id',
            },
          },
          required: ['slug', 'id'],
        },
        response: {
          200: {
            description: 'OAuth authorization declined',
            $ref: 'DeclineAuthorizationResponse',
          },
          401: {
            description: 'Unauthorized',
            type: 'null',
          },
          403: {
            description: 'Forbidden action',
            type: 'null',
          },
          429: {
            description: 'Rate limit exceeded',
            type: 'null',
          },
        },
      },
    },
    async (request, reply) => {
      const response = await declineAuthorizationRequest(request.params.slug, request.params.id)
      return reply.send(response)
    }
  )

  app.get<{
    Params: { slug: string }
  }>(
    '/:slug/payments',
    {
      schema: {
        description: 'Gets Stripe payment methods for the given organization',
        tags: ['Organizations'],
        operationId: 'PaymentsController_getPaymentMethods',
        params: {
          type: 'object',
          properties: {
            slug: {
              type: 'string',
              description: 'Organization slug',
            },
          },
          required: ['slug'],
        },
        response: {
          200: {
            description: 'List of payment methods',
            $ref: 'PaymentsResponse',
          },
          401: { description: 'Unauthorized', type: 'null' },
          403: { description: 'Forbidden action', type: 'null' },
          429: { description: 'Rate limit exceeded', type: 'null' },
          500: { description: 'Failed to get Stripe payment methods', type: 'null' },
        },
      },
    },
    async (request, reply) => {
      const payments = await getPaymentMethods(request.params.slug)
      return reply.send(payments)
    }
  )

  app.delete<{
    Params: { slug: string }
    Body: DetachPaymentMethodBody
  }>(
    '/:slug/payments',
    {
      schema: {
        description: 'Detach payment method with the given card ID',
        tags: ['Organizations'],
        operationId: 'PaymentsController_detachPaymentMethod',
        params: {
          type: 'object',
          properties: {
            slug: {
              type: 'string',
              description: 'Organization slug',
            },
          },
          required: ['slug'],
        },
        body: { $ref: 'DetachPaymentMethodBody' },
        response: {
          200: { description: 'Payment method detached', type: 'null' },
          401: { description: 'Unauthorized', type: 'null' },
          403: { description: 'Forbidden action', type: 'null' },
          429: { description: 'Rate limit exceeded', type: 'null' },
          500: { description: 'Failed to detach Stripe payment method', type: 'null' },
        },
      },
    },
    async (request, reply) => {
      await detachPaymentMethod(request.params.slug, request.body)
      return reply.send()
    }
  )

  app.put<{
    Params: { slug: string }
    Body: MarkDefaultPaymentMethodBody
  }>(
    '/:slug/payments/default',
    {
      schema: {
        description: 'Mark given payment method as default for organization',
        tags: ['Organizations'],
        operationId: 'PaymentsController_markPaymentMethodAsDefault',
        params: {
          type: 'object',
          properties: {
            slug: {
              type: 'string',
              description: 'Organization slug',
            },
          },
          required: ['slug'],
        },
        body: { $ref: 'MarkDefaultPaymentMethodBody' },
        response: {
          200: { description: 'Payment method marked as default', type: 'null' },
          401: { description: 'Unauthorized', type: 'null' },
          403: { description: 'Forbidden action', type: 'null' },
          429: { description: 'Rate limit exceeded', type: 'null' },
          500: { description: 'Failed to mark payment method as default', type: 'null' },
        },
      },
    },
    async (request, reply) => {
      await markPaymentMethodAsDefault(request.params.slug, request.body)
      return reply.send()
    }
  )

  app.post<{
    Params: { slug: string }
  }>(
    '/:slug/payments/setup-intent',
    {
      schema: {
        description: 'Sets up a payment method',
        tags: ['Organizations'],
        operationId: 'SetupIntentOrgController_setUpPaymentMethod',
        params: {
          type: 'object',
          properties: {
            slug: {
              type: 'string',
              description: 'Organization slug',
            },
          },
          required: ['slug'],
        },
        response: {
          201: {
            description: 'Setup intent created',
            $ref: 'SetupIntentResponse',
          },
          401: { description: 'Unauthorized', type: 'null' },
          403: { description: 'Forbidden action', type: 'null' },
          429: { description: 'Rate limit exceeded', type: 'null' },
          500: { description: 'Failed to set up a payment method', type: 'null' },
        },
      },
    },
    async (request, reply) => {
      const setupIntent = await setUpPaymentMethod(request.params.slug)
      return reply.code(201).send(setupIntent)
    }
  )

  app.get<{
    Params: { slug: string }
    Querystring: OrganizationProjectsQuery
  }>(
    '/:slug/projects',
    {
      schema: {
        description: `Returns a paginated list of projects for the specified organization.
  This endpoint uses offset-based pagination. Use the \`offset\` parameter to skip a number of projects and the \`limit\` parameter to control the number of projects returned per page.`,
        tags: ['Organizations'],
        operationId: 'OrganizationProjectsController_getOrganizationProjects',
        params: {
          type: 'object',
          properties: {
            slug: {
              type: 'string',
              description: 'Organization slug',
            },
          },
          required: ['slug'],
        },
        querystring: {
          type: 'object',
          properties: {
            limit: {
              type: 'number',
              description: 'Number of projects to return per page',
            },
            offset: {
              type: 'number',
              description: 'Number of projects to skip',
            },
            search: {
              type: 'string',
              description: 'Search query',
            },
            sort: {
              type: 'string',
              description: 'Sort order',
            },
            statuses: {
              type: 'string',
              description: 'Project status',
            },
          },
        },
        response: {
          200: {
            description: 'Paginated list of organization projects',
            $ref: 'OrganizationProjectsResponse',
          },
          500: { description: 'Failed to retrieve projects', type: 'null' },
        },
      },
    },
    async (request, reply) => {
      const projects = await getOrganizationProjects(request.params.slug, request.query)
      return reply.send(projects)
    }
  )

  app.get<{
    Params: { slug: string }
  }>(
    '/:slug/roles',
    {
      schema: {
        description: "Gets the given organization's roles",
        tags: ['Organizations'],
        operationId: 'OrganizationRolesController_getAllRoles',
        params: {
          type: 'object',
          properties: {
            slug: {
              type: 'string',
              description: 'Organization slug',
            },
          },
          required: ['slug'],
        },
        response: {
          200: { $ref: 'OrganizationRoleResponse' },
          401: { description: 'Unauthorized', type: 'null' },
          403: { description: 'Forbidden action', type: 'null' },
          429: { description: 'Rate limit exceeded', type: 'null' },
          500: { description: "Failed to retrieve the organization's roles", type: 'null' },
        },
      },
    },
    async (request, reply) => {
      const roles = await getOrganizationRoles(request.params.slug)
      return reply.send(roles)
    }
  )

  // GET SSO Provider
  app.get<{
    Params: { slug: string }
  }>(
    '/:slug/sso',
    {
      schema: {
        description: "Get the organization's SSO Provider",
        tags: ['Organizations'],
        operationId: 'SSOProvidersController_getSSOProvider',
        params: {
          type: 'object',
          properties: {
            slug: {
              type: 'string',
              description: 'Organization slug',
            },
          },
          required: ['slug'],
        },
        response: {
          200: { $ref: 'GetSSOProviderResponse' },
          401: { description: 'Unauthorized', type: 'null' },
          403: { description: 'Forbidden action', type: 'null' },
          429: { description: 'Rate limit exceeded', type: 'null' },
        },
      },
    },
    async (request, reply) => {
      const sso = await getSSOProvider(request.params.slug)
      return reply.send(sso)
    }
  )

  // PUT (Update SSO Provider)
  app.put<{
    Params: { slug: string }
    Body: UpdateSSOProviderBody
  }>(
    '/:slug/sso',
    {
      schema: {
        description: "Update the organization's SSO Provider",
        tags: ['Organizations'],
        operationId: 'SSOProvidersController_updateSSOProvider',
        params: {
          type: 'object',
          properties: {
            slug: {
              type: 'string',
              description: 'Organization slug',
            },
          },
          required: ['slug'],
        },
        body: { $ref: 'UpdateSSOProviderBody' },
        response: {
          200: { $ref: 'UpdateSSOProviderResponse' },
          401: { description: 'Unauthorized', type: 'null' },
          403: { description: 'Forbidden action', type: 'null' },
          429: { description: 'Rate limit exceeded', type: 'null' },
        },
      },
    },
    async (request, reply) => {
      const updated = await updateSSOProvider(request.params.slug, request.body)
      return reply.send(updated)
    }
  )

  // POST (Create SSO Provider)
  app.post<{
    Params: { slug: string }
    Body: CreateSSOProviderBody
  }>(
    '/:slug/sso',
    {
      schema: {
        description: "Create the organization's SSO Provider",
        tags: ['Organizations'],
        operationId: 'SSOProvidersController_createSSOProvider',
        params: {
          type: 'object',
          properties: {
            slug: {
              type: 'string',
              description: 'Organization slug',
            },
          },
          required: ['slug'],
        },
        body: { $ref: 'CreateSSOProviderBody' },
        response: {
          201: { $ref: 'CreateSSOProviderResponse' },
          401: { description: 'Unauthorized', type: 'null' },
          403: { description: 'Forbidden action', type: 'null' },
          429: { description: 'Rate limit exceeded', type: 'null' },
        },
      },
    },
    async (request, reply) => {
      const created = await createSSOProvider(request.params.slug, request.body)
      return reply.status(201).send(created)
    }
  )

  // DELETE SSO Provider
  app.delete<{
    Params: { slug: string }
  }>(
    '/:slug/sso',
    {
      schema: {
        description: "Delete the organization's SSO Provider",
        tags: ['Organizations'],
        operationId: 'SSOProvidersController_deleteSSOProvider',
        params: {
          type: 'object',
          properties: {
            slug: {
              type: 'string',
              description: 'Organization slug',
            },
          },
          required: ['slug'],
        },
        response: {
          200: { type: 'null' },
          401: { description: 'Unauthorized', type: 'null' },
          403: { description: 'Forbidden action', type: 'null' },
          429: { description: 'Rate limit exceeded', type: 'null' },
        },
      },
    },
    async (request, reply) => {
      await deleteSSOProvider(request.params.slug)
      return reply.send()
    }
  )

  // GET organization's tax ID
  app.get<{
    Params: { slug: string }
  }>(
    '/:slug/tax-ids',
    {
      schema: {
        description: "Gets the given organization's tax ID",
        tags: ['Organizations'],
        operationId: 'TaxIdsController_getTaxId',
        params: {
          type: 'object',
          properties: {
            slug: {
              type: 'string',
              description: 'Organization slug',
            },
          },
          required: ['slug'],
        },
        response: {
          200: { $ref: 'TaxIdResponse' },
          401: { description: 'Unauthorized', type: 'null' },
          403: { description: 'Forbidden', type: 'null' },
          429: { description: 'Rate limit exceeded', type: 'null' },
          500: { description: 'Failed to retrieve tax ID', type: 'null' },
        },
      },
    },
    async (request, reply) => {
      const taxId = await getOrganizationTaxId(request.params.slug)
      return reply.send(taxId)
    }
  )

  // PUT (Create or update tax ID)
  app.put<{
    Params: { slug: string }
    Body: CreateTaxIdBody
  }>(
    '/:slug/tax-ids',
    {
      schema: {
        description: 'Creates or updates a tax ID for the given organization',
        tags: ['Organizations'],
        operationId: 'TaxIdsController_updateTaxId',
        params: {
          type: 'object',
          properties: {
            slug: {
              type: 'string',
              description: 'Organization slug',
            },
          },
          required: ['slug'],
        },
        body: { $ref: 'CreateTaxIdBody' },
        response: {
          200: { $ref: 'TaxIdResponse' },
          401: { description: 'Unauthorized', type: 'null' },
          403: { description: 'Forbidden', type: 'null' },
          429: { description: 'Rate limit exceeded', type: 'null' },
          500: { description: 'Failed to create/update tax ID', type: 'null' },
        },
      },
    },
    async (request, reply) => {
      const updated = await updateOrganizationTaxId(request.params.slug, request.body)
      return reply.send(updated)
    }
  )

  // DELETE tax ID
  app.delete<{
    Params: { slug: string }
  }>(
    '/:slug/tax-ids',
    {
      schema: {
        description: 'Delete the tax ID with the given ID',
        tags: ['Organizations'],
        operationId: 'TaxIdsController_deleteTaxId',
        params: {
          type: 'object',
          properties: {
            slug: {
              type: 'string',
              description: 'Organization slug',
            },
          },
          required: ['slug'],
        },
        response: {
          204: { type: 'null' },
          401: { description: 'Unauthorized', type: 'null' },
          403: { description: 'Forbidden', type: 'null' },
          429: { description: 'Rate limit exceeded', type: 'null' },
          500: { description: 'Failed to delete tax ID', type: 'null' },
        },
      },
    },
    async (request, reply) => {
      await deleteOrganizationTaxId(request.params.slug)
      return reply.status(204).send()
    }
  )

  app.get<{
    Params: { slug: string }
    Querystring: OrgUsageQuery
  }>(
    '/:slug/usage',
    {
      schema: {
        description: 'Gets usage stats for the organization',
        tags: ['Organizations'],
        operationId: 'OrgUsageController_getOrgUsage',
        params: {
          type: 'object',
          properties: {
            slug: {
              type: 'string',
              description: 'Organization slug',
            },
          },
          required: ['slug'],
        },
        querystring: {
          type: 'object',
          properties: {
            apiKey: {
              type: 'string',
              description: 'API key',
            },
            start: {
              type: 'string',
              description: 'Start date',
            },
            end: {
              type: 'string',
              description: 'End date',
            },
            project_ref: {
              type: 'string',
              description: 'Project ref',
            },
          },
        },
        response: {
          200: { $ref: 'OrgUsageResponse' },
          401: { description: 'Unauthorized', type: 'null' },
          403: { description: 'Forbidden', type: 'null' },
          429: { description: 'Rate limit exceeded', type: 'null' },
          500: { description: 'Failed to get usage stats', type: 'null' },
        },
      },
    },
    async (request, reply) => {
      const usage = await getOrganizationUsage(request.params.slug, request.query)
      return reply.send(usage)
    }
  )

  app.get<{
    Params: { slug: string }
    Querystring: OrgDailyUsageQuery
  }>(
    '/:slug/usage/daily',
    {
      schema: {
        description: 'Gets daily aggregated usage stats for the organization',
        tags: ['Organizations'],
        operationId: 'OrgUsageController_getDailyOrgUsage',
        params: {
          type: 'object',
          properties: {
            slug: {
              type: 'string',
              description: 'Organization slug',
            },
          },
          required: ['slug'],
        },
        querystring: {
          type: 'object',
          properties: {
            apiKey: {
              type: 'string',
              description: 'API key',
            },
            start: {
              type: 'string',
              description: 'Start date',
            },
            end: {
              type: 'string',
              description: 'End date',
            },
            project_ref: {
              type: 'string',
              description: 'Project ref',
            },
          },
        },
        response: {
          200: { $ref: 'OrgDailyUsageResponse' },
          401: { description: 'Unauthorized', type: 'null' },
          403: { description: 'Forbidden', type: 'null' },
          429: { description: 'Rate limit exceeded', type: 'null' },
          500: { description: 'Failed to get usage stats', type: 'null' },
        },
      },
    },
    async (request, reply) => {
      const dailyUsage = await getDailyOrganizationUsage(request.params.slug, request.query)
      return reply.send(dailyUsage)
    }
  )

  app.post<{
    Body: CreateAwsBilledOrganizationBody
  }>(
    '/cloud-marketplace',
    {
      schema: {
        description: 'Creates organization billed by AWS Marketplace',
        tags: ['Organizations'],
        operationId: 'OrganizationsController_createAwsBilledOrganization',
        body: { $ref: 'CreateAwsBilledOrganizationBody' },
        response: {
          201: { $ref: 'OrganizationResponse' },
          500: {
            description: 'Failed to create organization billed by AWS Marketplace',
            type: 'null',
          },
        },
      },
    },
    async (request, reply) => {
      const org = await createAwsMarketplaceOrganization(request.body)
      return reply.code(201).send(org)
    }
  )

  app.post<{
    Body: ConfirmCreateSubscriptionChangeBody
  }>(
    '/confirm-subscription',
    {
      schema: {
        description: 'Confirm subscription change and apply pending changes',
        tags: ['Organizations'],
        operationId: 'OrganizationsController_confirmSubscription',
        body: { $ref: 'ConfirmCreateSubscriptionChangeBody' },
        response: {
          201: { $ref: 'CreateOrganizationResponse' },
          202: { $ref: 'PendingConfirmationResponse' },
          500: { description: 'Failed to confirm subscription changes', type: 'null' },
        },
      },
    },
    async (request, reply) => {
      const result = await _confirmSubscriptionChange(request.body)

      if ('pending_payment_intent_secret' in result) {
        return reply.code(201).send(result)
      }

      return reply.code(202).send(result)
    }
  )
}

export default organizationRoutes
