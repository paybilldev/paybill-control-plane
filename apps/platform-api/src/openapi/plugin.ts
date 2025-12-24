import fastifySwagger, { type SwaggerOptions } from '@fastify/swagger'
import fastifySwaggerUi from '@fastify/swagger-ui'
import type { FastifyInstance } from 'fastify'
import {
  AuthConfigResponseJsonSchema,
  UpdateAuthConfigBodyJsonSchema,
  UpdateAuthConfigHooksJsonSchema,
  CreateUserBodyJsonSchema,
  UserBodyJsonSchema,
  CreateUserReponseJsonSchema,
  UpdateUserBodyJsonSchema,
  UpdateUserReponseJsonSchema,
  ValidateSpamBodyJsonSchema,
  ValidateSpamResponseJsonSchema,
  CreateCliLoginSessionBodyJsonSchema,
  BackupsResponseJsonSchema,
  DownloadBackupBodyJsonSchema,
  DownloadBackupResponseJsonSchema,
  DownloadableBackupsResponseJsonSchema,
  PointInTimeRestoreBodyJsonSchema,
  RestoreLogicalBackupBodyJsonSchema,
  RestorePhysicalBackupBodyJsonSchema,
  ProjectClonedResponseJsonSchema,
  CloneProjectJsonSchema,
  CloneBackupsResponseJsonSchema,
  ProjectClonedStatusResponseJsonSchema,
  SendDocsFeedbackBodyJsonSchema,
  SendFeedbackResponseJsonSchema,
  SendExitSurveyBodyJsonSchema,
  SendFeedbackBodyJsonSchema,
  SendUpgradeSurveyBodyJsonSchema,
  GetUserOrganizationIntegrationResponseJsonSchema,
  GetOrganizationIntegrationResponseJsonSchema,
  GitHubAuthorizationResponseJsonSchema,
  CreateGitHubAuthorizationBodyJsonSchema,
  GitHubBranchResponseJsonSchema,
  ListGitHubConnectionsResponseJsonSchema,
  CreateGitHubConnectionResponseJsonSchema,
  CreateGitHubConnectionBodyJsonSchema,
  UpdateGitHubConnectionBodyJsonSchema,
  ListGitHubRepositoriesResponseJsonSchema,
  ListRepositoryBranchesResponseJsonSchema,
  PrivateLinkResponseJsonSchema,
  UpdatePrivateLinkBodyJsonSchema,
  NotificationResponseJsonSchema,
  UpdateNotificationBodyJsonSchema,
  NotificationsSummaryJsonSchema,
  DynamicRegisterOAuthAppBodyJsonSchema,
  CreateOAuthAppResponseJsonSchema,
  GetOAuthAuthorizationResponseJsonSchema,
  OrganizationResponseJsonSchema,
  CreateOrganizationBodyJsonSchema,
  CreateOrganizationResponseJsonSchema,
  OrganizationSlugResponseJsonSchema,
  UpdateOrganizationBodyJsonSchema,
  UpdateOrganizationResponseJsonSchema,
  AuditLogsResponseJsonSchema,
  OrganizationSlugAvailableVersionsBodyJsonSchema,
  OrganizationSlugAvailableVersionsResponseJsonSchema,
  CreditsTopUpRequestJsonSchema,
  CreditsTopUpResponseJsonSchema,
  InvoiceJsonSchema,
  InvoiceListJsonSchema,
  InvoicePaymentLinkResponseJsonSchema,
  UpcomingInvoiceJsonSchema,
  PlansResponseJsonSchema,
  UpdateSubscriptionResponseJsonSchema,
  UpdateSubscriptionBodyJsonSchema,
  GetSubscriptionResponseJsonSchema,
  PendingConfirmationResponseJsonSchema,
  ConfirmSubscriptionChangeBodyJsonSchema,
  CustomerResponseJsonSchema,
  BillingCustomerUpdateBodyJsonSchema,
  CreateDpaDocumentResponseJsonSchema,
  CreateDpaDocumentRequestJsonSchema,
  OrgDocumentUrlResponseJsonSchema,
  ListEntitlementsResponseJsonSchema,
  MemberJsonSchema,
  AssignMemberRoleBodyJsonSchema,
  UpdateMemberRoleBodyJsonSchema,
  CreateInvitationBodyJsonSchema,
  InvitationResponseJsonSchema,
  InvitationByTokenResponseJsonSchema,
  MfaStatusResponseJsonSchema,
  ChangeMFAEnforcementStateRequestJsonSchema,
  MemberWithFreeProjectLimitJsonSchema,
  OAuthAppResponseJsonSchema,
  CreateOAuthAppBodyJsonSchema,
  OAuthAppResponseListJsonSchema,
  ListOAuthAppClientSecretsResponseJsonSchema,
  CreateOAuthAppClientSecretResponseJsonSchema,
  PutOAuthAppResponseJsonSchema,
  DeleteOAuthAppResponseJsonSchema,
  RevokeAuthorizedOAuthAppResponseJsonSchema,
  DeclineAuthorizationResponseJsonSchema,
  ApproveAuthorizationResponseJsonSchema,
  DetachPaymentMethodBodyJsonSchema,
  PaymentsResponseJsonSchema,
  MarkDefaultPaymentMethodBodyJsonSchema,
  SetupIntentResponseJsonSchema,
  OrganizationProjectsResponseJsonSchema,
  OrganizationRoleResponseJsonSchema,
  GetSSOProviderResponseJsonSchema,
  UpdateSSOProviderBodyJsonSchema,
  UpdateSSOProviderResponseJsonSchema,
  CreateSSOProviderBodyJsonSchema,
  CreateSSOProviderResponseJsonSchema,
  TaxIdResponseJsonSchema,
  CreateTaxIdBodyJsonSchema,
  OrgUsageResponseJsonSchema,
  OrgDailyUsageResponseJsonSchema,
  CreateAwsBilledOrganizationBodyJsonSchema,
  ConfirmCreateSubscriptionChangeBodyJsonSchema,
  ProfileResponseJsonSchema,
  UpdateProfileBodyJsonSchema,
  CreateAccessTokenResponseJsonSchema,
  CreateAccessTokenBodyJsonSchema,
  AccessTokenJsonSchema,
  CreateProjectResponseJsonSchema,
  CreateProjectBodyJsonSchema,
  ProjectInfoJsonSchema,
  ProjectResourceWarningsResponseJsonSchema,
  ProjectRefResponseJsonSchema,
  UpdateProjectBodyJsonSchema,
  RemoveProjectResponseJsonSchema,
  ProjectDetailResponseJsonSchema,
  WorkflowRunResponseJsonSchema,
  UpdateEmailBodyJsonSchema,
  UpdateConversationCustomFieldsResponseJsonSchema,
  UpdateConversationCustomFieldsBodyJsonSchema,
  RequestUpgradeBodyJsonSchema,
  RequestUpgradeResponseJsonSchema,
  TelemetryIdentifyBodyJsonSchema,
  TelemetryGroupsIdentityBodyJsonSchema,
  TelemetryGroupsResetBodyJsonSchema,
  TelemetryFeatureFlagBodyJsonSchema,
  TelemetryCallFeatureFlagsResponseJsonSchema,
  TelemetryEventBodyJsonSchema,
  SetupIntentRequestJsonSchema,
  OverdueInvoiceCountJsonSchema,
  ResetPasswordBodyJsonSchema,
  SignUpBodyJsonSchema,
  CreateBucketIndexBodyJsonSchema,
  StorageVectorBucketListIndexesResponseJsonSchema,
  StorageVectorBucketResponseJsonSchema,
  CreateStorageVectorBucketBodyJsonSchema,
  StorageVectorBucketsResponseJsonSchema,
  CreateStorageCredentialBodyJsonSchema,
  CreateStorageCredentialResponseJsonSchema,
  GetStorageCredentialsResponseJsonSchema,
  GetSignedUrlsBodyJsonSchema,
  SignedUrlsResponseJsonSchema,
  SignedUrlResponseJsonSchema,
  GetSignedUrlBodyJsonSchema,
  PublicUrlResponseJsonSchema,
  GetPublicUrlBodyJsonSchema,
  StorageListResponseJsonSchema,
  GetObjectsBodyJsonSchema,
  MoveObjectBodyJsonSchema,
  StorageObjectArrayJsonSchema,
  CopyObjectResponseJsonSchema,
  CopyObjectBodyJsonSchema,
  DeleteObjectsBodyJsonSchema,
  UpdateStorageBucketBodyJsonSchema,
  StorageBucketResponseJsonSchema,
  CreateStorageBucketBodyJsonSchema,
  StorageBucketListResponseJsonSchema,
  GetArchiveResponseJsonSchema,
  NamespaceTableResponseJsonSchema,
  CreateNamespaceTableBodyJsonSchema,
  StorageAnalyticsBucketNamespaceTablesResponseJsonSchema,
  NamespacesResponseJsonSchema,
  CreateNamespaceBodyJsonSchema,
  CreateStorageAnalyticsBucketBodyJsonSchema,
  StorageAnalyticsBucketResponseJsonSchema,
  StorageAnalyticsBucketsResponseJsonSchema,
  StorageAnalyticsBucketDeleteResponseJsonSchema,
  ReplicationTablesResponseJsonSchema,
  CreateTenantSourceResponseJsonSchema,
  UpdateReplicationPublicationBodyJsonSchema,
  CreateReplicationPublicationBodyJsonSchema,
  ReplicationPublicationsResponseJsonSchema,
  ReplicationSourcesResponseJsonSchema,
  CreateSourceResponseJsonSchema,
  UpdateReplicationPipelineVersionBodyJsonSchema,
  ReplicationPipelineVersionResponseJsonSchema,
  ReplicationPipelineStatusResponseJsonSchema,
  RollbackTableStateResponseJsonSchema,
  RollbackTableStateBodyJsonSchema,
  UpdateReplicationPipelineBodyJsonSchema,
  ReplicationPipelineResponseJsonSchema,
  ReplicationPipelineReplicationStatusResponseJsonSchema,
  CreateReplicationPipelineBodyJsonSchema,
  CreatePipelineResponseJsonSchema,
  ReplicationPipelinesResponseJsonSchema,
  ReplicationDestinationResponseJsonSchema,
  UpdateReplicationDestinationBodyJsonSchema,
  CreateReplicationDestinationPipelineBodyJsonSchema,
  UpdateReplicationDestinationPipelineBodyJsonSchema,
  CreateDestinationPipelineResponseJsonSchema,
  CreateReplicationDestinationBodyJsonSchema,
  ReplicationDestinationsResponseJsonSchema,
  CreateDestinationResponseJsonSchema,
} from './schemas/index.js'
import type { JsonSchema } from './utils/zod-to-json-schema.js'
import {
  AccessControlPermissionJsonSchema,
  AccessTokenListJsonSchema,
  CreateScopedAccessTokenBodyJsonSchema,
  CreateScopedAccessTokenResponseJsonSchema,
  GetScopedAccessTokenResponseJsonSchema,
  GetScopedAccessTokensResponseJsonSchema,
  UserAuditLogsResponseJsonSchema,
} from './schemas/profile.schema.js'

/**
 * Server configuration for OpenAPI spec.
 */
export interface OpenAPIServer {
  url: string
  description?: string
}

/**
 * Error response definition for OpenAPI documentation.
 */
export interface ErrorResponseDefinition {
  /** HTTP status code */
  statusCode: number
  /** Description of when this error occurs */
  description: string
}

/**
 * Multipart body schema configuration for OpenAPI documentation.
 */
export interface MultipartBodySchema {
  /** Route URL pattern (e.g., '/upload') */
  url: string
  /** JSON Schema for the multipart body */
  schema: JsonSchema
  /** Error responses to document (optional) */
  errorResponses?: ErrorResponseDefinition[]
}

/**
 * Options for registering OpenAPI documentation.
 */
export interface OpenAPIOptions {
  /** API title */
  title: string
  /** API version */
  version: string
  /** API description */
  description?: string
  /** List of server URLs */
  servers?: OpenAPIServer[]
  /** Route prefix for documentation endpoints (default: /documentation) */
  routePrefix?: string
  /** Whether to expose the JSON spec at /documentation/json (default: true) */
  exposeRoute?: boolean
  /** Additional schemas to register in components.schemas */
  additionalSchemas?: Record<string, JsonSchema>
  /**
   * Multipart body schemas for documentation.
   * These are injected into the OpenAPI spec for routes that use multipart/form-data.
   * Fastify doesn't validate multipart bodies, so these are for docs only.
   */
  multipartBodies?: MultipartBodySchema[]
}

export async function registerOpenAPI(
  app: FastifyInstance,
  options: OpenAPIOptions
): Promise<void> {
  const routePrefix = options.routePrefix ?? '/docs'

  // Register shared schemas with Fastify (for both serialization and OpenAPI)
  // These schemas can be referenced via $ref: '#/components/schemas/SchemaName'
  app.addSchema({
    $id: 'AuthConfigResponse',
    ...(AuthConfigResponseJsonSchema as object),
  })

  app.addSchema({
    $id: 'UpdateAuthConfigBody',
    ...(UpdateAuthConfigBodyJsonSchema as object),
  })

  app.addSchema({
    $id: 'UpdateAuthConfigHooksBody',
    ...(UpdateAuthConfigHooksJsonSchema as object),
  })

  app.addSchema({
    $id: 'UserBody',
    ...(UserBodyJsonSchema as object),
  })

  app.addSchema({
    $id: 'CreateUserBody',
    ...(CreateUserBodyJsonSchema as object),
  })

  app.addSchema({
    $id: 'CreateUserReponse',
    ...(CreateUserReponseJsonSchema as object),
  })

  app.addSchema({
    $id: 'UpdateUserBody',
    ...(UpdateUserBodyJsonSchema as object),
  })

  app.addSchema({
    $id: 'UpdateUserReponse',
    ...(UpdateUserReponseJsonSchema as object),
  })

  app.addSchema({
    $id: 'ValidateSpamBody',
    ...(ValidateSpamBodyJsonSchema as object),
  })

  app.addSchema({
    $id: 'ValidateSpamResponse',
    ...(ValidateSpamResponseJsonSchema as object),
  })

  app.addSchema({
    $id: 'CreateCliLoginSessionBody',
    ...(CreateCliLoginSessionBodyJsonSchema as object),
  })

  app.addSchema({
    $id: 'BackupsResponse',
    ...(BackupsResponseJsonSchema as object),
  })

  app.addSchema({
    $id: 'DownloadBackupBody',
    ...(DownloadBackupBodyJsonSchema as object),
  })

  app.addSchema({
    $id: 'DownloadBackupResponse',
    ...(DownloadBackupResponseJsonSchema as object),
  })

  app.addSchema({
    $id: 'DownloadableBackupsResponse',
    ...(DownloadableBackupsResponseJsonSchema as object),
  })

  app.addSchema({
    $id: 'PointInTimeRestoreBody',
    ...(PointInTimeRestoreBodyJsonSchema as object),
  })

  app.addSchema({
    $id: 'RestoreLogicalBackupBody',
    ...(RestoreLogicalBackupBodyJsonSchema as object),
  })

  app.addSchema({
    $id: 'RestorePhysicalBackupBody',
    ...(RestorePhysicalBackupBodyJsonSchema as object),
  })

  app.addSchema({
    $id: 'ProjectClonedResponse',
    ...(ProjectClonedResponseJsonSchema as object),
  })

  app.addSchema({
    $id: 'CloneProject',
    ...(CloneProjectJsonSchema as object),
  })

  app.addSchema({
    $id: 'CloneBackupsResponse',
    ...(CloneBackupsResponseJsonSchema as object),
  })

  app.addSchema({
    $id: 'ProjectClonedStatusResponse',
    ...(ProjectClonedStatusResponseJsonSchema as object),
  })

  app.addSchema({
    $id: 'UpdateConversationCustomFieldsResponse',
    ...(UpdateConversationCustomFieldsResponseJsonSchema as object),
  })

  app.addSchema({
    $id: 'UpdateConversationCustomFieldsBody',
    ...(UpdateConversationCustomFieldsBodyJsonSchema as object),
  })

  app.addSchema({
    $id: 'SendDocsFeedbackBody',
    ...(SendDocsFeedbackBodyJsonSchema as object),
  })

  app.addSchema({
    $id: 'SendFeedbackResponse',
    ...(SendFeedbackResponseJsonSchema as object),
  })

  app.addSchema({
    $id: 'SendExitSurveyBody',
    ...(SendExitSurveyBodyJsonSchema as object),
  })

  app.addSchema({
    $id: 'SendFeedbackBody',
    ...(SendFeedbackBodyJsonSchema as object),
  })

  app.addSchema({
    $id: 'SendUpgradeSurveyBody',
    ...(SendUpgradeSurveyBodyJsonSchema as object),
  })

  app.addSchema({
    $id: 'GetUserOrganizationIntegrationResponse',
    ...(GetUserOrganizationIntegrationResponseJsonSchema as object),
  })

  app.addSchema({
    $id: 'GetOrganizationIntegrationResponse',
    ...(GetOrganizationIntegrationResponseJsonSchema as object),
  })

  app.addSchema({
    $id: 'GitHubAuthorizationResponse',
    ...(GitHubAuthorizationResponseJsonSchema as object),
  })

  app.addSchema({
    $id: 'CreateGitHubAuthorizationBody',
    ...(CreateGitHubAuthorizationBodyJsonSchema as object),
  })

  app.addSchema({
    $id: 'GitHubBranchResponse',
    ...(GitHubBranchResponseJsonSchema as object),
  })

  app.addSchema({
    $id: 'ListGitHubConnectionsResponse',
    ...(ListGitHubConnectionsResponseJsonSchema as object),
  })

  app.addSchema({
    $id: 'CreateGitHubConnectionResponse',
    ...(CreateGitHubConnectionResponseJsonSchema as object),
  })

  app.addSchema({
    $id: 'CreateGitHubConnectionBody',
    ...(CreateGitHubConnectionBodyJsonSchema as object),
  })

  app.addSchema({
    $id: 'UpdateGitHubConnectionBody',
    ...(UpdateGitHubConnectionBodyJsonSchema as object),
  })

  app.addSchema({
    $id: 'ListGitHubRepositoriesResponse',
    ...(ListGitHubRepositoriesResponseJsonSchema as object),
  })

  app.addSchema({
    $id: 'ListRepositoryBranchesResponse',
    ...(ListRepositoryBranchesResponseJsonSchema as object),
  })

  app.addSchema({
    $id: 'PrivateLinkResponse',
    ...(PrivateLinkResponseJsonSchema as object),
  })

  app.addSchema({
    $id: 'UpdatePrivateLinkBody',
    ...(UpdatePrivateLinkBodyJsonSchema as object),
  })

  app.addSchema({
    $id: 'NotificationResponse',
    ...(NotificationResponseJsonSchema as object),
  })

  app.addSchema({
    $id: 'UpdateNotificationBody',
    ...(UpdateNotificationBodyJsonSchema as object),
  })

  app.addSchema({
    $id: 'NotificationsSummary',
    ...(NotificationsSummaryJsonSchema as object),
  })

  app.addSchema({
    $id: 'DynamicRegisterOAuthAppBody',
    ...(DynamicRegisterOAuthAppBodyJsonSchema as object),
  })

  app.addSchema({
    $id: 'CreateOAuthAppResponse',
    ...(CreateOAuthAppResponseJsonSchema as object),
  })

  app.addSchema({
    $id: 'GetOAuthAuthorizationResponse',
    ...(GetOAuthAuthorizationResponseJsonSchema as object),
  })

  app.addSchema({
    $id: 'RequestUpgradeBody',
    ...(RequestUpgradeBodyJsonSchema as object),
  })

  app.addSchema({
    $id: 'RequestUpgradeResponse',
    ...(RequestUpgradeResponseJsonSchema as object),
  })

  app.addSchema({
    $id: 'OrganizationResponse',
    ...(OrganizationResponseJsonSchema as object),
  })

  app.addSchema({
    $id: 'CreateOrganizationBody',
    ...(CreateOrganizationBodyJsonSchema as object),
  })

  app.addSchema({
    $id: 'CreateOrganizationResponse',
    ...(CreateOrganizationResponseJsonSchema as object),
  })

  app.addSchema({
    $id: 'OrganizationSlugResponse',
    ...(OrganizationSlugResponseJsonSchema as object),
  })

  app.addSchema({
    $id: 'UpdateOrganizationBody',
    ...(UpdateOrganizationBodyJsonSchema as object),
  })

  app.addSchema({
    $id: 'UpdateOrganizationResponse',
    ...(UpdateOrganizationResponseJsonSchema as object),
  })

  app.addSchema({
    $id: 'AuditLogsResponse',
    ...(AuditLogsResponseJsonSchema as object),
  })

  app.addSchema({
    $id: 'OrganizationSlugAvailableVersionsBody',
    ...(OrganizationSlugAvailableVersionsBodyJsonSchema as object),
  })

  app.addSchema({
    $id: 'OrganizationSlugAvailableVersionsResponse',
    ...(OrganizationSlugAvailableVersionsResponseJsonSchema as object),
  })

  app.addSchema({
    $id: 'CreditsTopUpRequest',
    ...(CreditsTopUpRequestJsonSchema as object),
  })

  app.addSchema({
    $id: 'CreditsTopUpResponse',
    ...(CreditsTopUpResponseJsonSchema as object),
  })

  app.addSchema({
    $id: 'Invoice',
    ...(InvoiceJsonSchema as object),
  })

  app.addSchema({
    $id: 'InvoiceList',
    ...(InvoiceListJsonSchema as object),
  })

  app.addSchema({
    $id: 'InvoicePaymentLinkResponse',
    ...(InvoicePaymentLinkResponseJsonSchema as object),
  })

  app.addSchema({
    $id: 'UpcomingInvoice',
    ...(UpcomingInvoiceJsonSchema as object),
  })

  app.addSchema({
    $id: 'PlansResponse',
    ...(PlansResponseJsonSchema as object),
  })

  app.addSchema({
    $id: 'GetSubscriptionResponse',
    ...(GetSubscriptionResponseJsonSchema as object),
  })

  app.addSchema({
    $id: 'UpdateSubscriptionBody',
    ...(UpdateSubscriptionBodyJsonSchema as object),
  })

  app.addSchema({
    $id: 'UpdateSubscriptionResponse',
    ...(UpdateSubscriptionResponseJsonSchema as object),
  })

  app.addSchema({
    $id: 'ConfirmSubscriptionChangeBody',
    ...(ConfirmSubscriptionChangeBodyJsonSchema as object),
  })

  app.addSchema({
    $id: 'PendingConfirmationResponse',
    ...(PendingConfirmationResponseJsonSchema as object),
  })

  app.addSchema({
    $id: 'BillingCustomerUpdateBody',
    ...(BillingCustomerUpdateBodyJsonSchema as object),
  })

  app.addSchema({
    $id: 'CustomerResponse',
    ...(CustomerResponseJsonSchema as object),
  })

  app.addSchema({
    $id: 'CreateDpaDocumentRequest',
    ...(CreateDpaDocumentRequestJsonSchema as object),
  })

  app.addSchema({
    $id: 'CreateDpaDocumentResponse',
    ...(CreateDpaDocumentResponseJsonSchema as object),
  })

  app.addSchema({
    $id: 'OrgDocumentUrlResponse',
    ...(OrgDocumentUrlResponseJsonSchema as object),
  })

  app.addSchema({
    $id: 'ListEntitlementsResponse',
    ...(ListEntitlementsResponseJsonSchema as object),
  })

  app.addSchema({
    $id: 'Member',
    ...(MemberJsonSchema as object),
  })

  app.addSchema({
    $id: 'AssignMemberRoleBody',
    ...(AssignMemberRoleBodyJsonSchema as object),
  })

  app.addSchema({
    $id: 'UpdateMemberRoleBody',
    ...(UpdateMemberRoleBodyJsonSchema as object),
  })

  app.addSchema({
    $id: 'InvitationResponse',
    ...(InvitationResponseJsonSchema as object),
  })

  app.addSchema({
    $id: 'CreateInvitationBody',
    ...(CreateInvitationBodyJsonSchema as object),
  })

  app.addSchema({
    $id: 'InvitationByTokenResponse',
    ...(InvitationByTokenResponseJsonSchema as object),
  })

  app.addSchema({
    $id: 'ChangeMFAEnforcementStateRequest',
    ...(ChangeMFAEnforcementStateRequestJsonSchema as object),
  })

  app.addSchema({
    $id: 'MfaStatusResponse',
    ...(MfaStatusResponseJsonSchema as object),
  })

  app.addSchema({
    $id: 'MemberWithFreeProjectLimit',
    ...(MemberWithFreeProjectLimitJsonSchema as object),
  })

  app.addSchema({
    $id: 'OAuthAppResponse',
    ...(OAuthAppResponseJsonSchema as object),
  })

  app.addSchema({
    $id: 'CreateOAuthAppBody',
    ...(CreateOAuthAppBodyJsonSchema as object),
  })

  app.addSchema({
    $id: 'OAuthAppResponseList',
    ...(OAuthAppResponseListJsonSchema as object),
  })

  app.addSchema({
    $id: 'CreateOAuthAppClientSecretResponse',
    ...(CreateOAuthAppClientSecretResponseJsonSchema as object),
  })

  app.addSchema({
    $id: 'ListOAuthAppClientSecretsResponse',
    ...(ListOAuthAppClientSecretsResponseJsonSchema as object),
  })

  app.addSchema({
    $id: 'PutOAuthAppResponse',
    ...(PutOAuthAppResponseJsonSchema as object),
  })

  app.addSchema({
    $id: 'DeleteOAuthAppResponse',
    ...(DeleteOAuthAppResponseJsonSchema as object),
  })

  app.addSchema({
    $id: 'RevokeAuthorizedOAuthAppResponse',
    ...(RevokeAuthorizedOAuthAppResponseJsonSchema as object),
  })

  app.addSchema({
    $id: 'DeclineAuthorizationResponse',
    ...(DeclineAuthorizationResponseJsonSchema as object),
  })

  app.addSchema({
    $id: 'ApproveAuthorizationResponse',
    ...(ApproveAuthorizationResponseJsonSchema as object),
  })

  app.addSchema({
    $id: 'PaymentsResponse',
    ...(PaymentsResponseJsonSchema as object),
  })

  app.addSchema({
    $id: 'DetachPaymentMethodBody',
    ...(DetachPaymentMethodBodyJsonSchema as object),
  })

  app.addSchema({
    $id: 'MarkDefaultPaymentMethodBody',
    ...(MarkDefaultPaymentMethodBodyJsonSchema as object),
  })

  app.addSchema({
    $id: 'OrganizationProjectsResponse',
    ...(OrganizationProjectsResponseJsonSchema as object),
  })

  app.addSchema({
    $id: 'OrganizationRoleResponse',
    ...(OrganizationRoleResponseJsonSchema as object),
  })

  app.addSchema({
    $id: 'GetSSOProviderResponse',
    ...(GetSSOProviderResponseJsonSchema as object),
  })

  app.addSchema({
    $id: 'UpdateSSOProviderBody',
    ...(UpdateSSOProviderBodyJsonSchema as object),
  })

  app.addSchema({
    $id: 'UpdateSSOProviderResponse',
    ...(UpdateSSOProviderResponseJsonSchema as object),
  })

  app.addSchema({
    $id: 'CreateSSOProviderBody',
    ...(CreateSSOProviderBodyJsonSchema as object),
  })

  app.addSchema({
    $id: 'CreateSSOProviderResponse',
    ...(CreateSSOProviderResponseJsonSchema as object),
  })

  app.addSchema({
    $id: 'TaxIdResponse',
    ...(TaxIdResponseJsonSchema as object),
  })

  app.addSchema({
    $id: 'CreateTaxIdBody',
    ...(CreateTaxIdBodyJsonSchema as object),
  })

  app.addSchema({
    $id: 'OrgUsageResponse',
    ...(OrgUsageResponseJsonSchema as object),
  })

  app.addSchema({
    $id: 'OrgDailyUsageResponse',
    ...(OrgDailyUsageResponseJsonSchema as object),
  })

  app.addSchema({
    $id: 'CreateAwsBilledOrganizationBody',
    ...(CreateAwsBilledOrganizationBodyJsonSchema as object),
  })

  app.addSchema({
    $id: 'ConfirmCreateSubscriptionChangeBody',
    ...(ConfirmCreateSubscriptionChangeBodyJsonSchema as object),
  })

  app.addSchema({
    $id: 'ProfileResponse',
    ...(ProfileResponseJsonSchema as object),
  })

  app.addSchema({
    $id: 'UpdateProfileBody',
    ...(UpdateProfileBodyJsonSchema as object),
  })

  app.addSchema({
    $id: 'CreateAccessTokenResponse',
    ...(CreateAccessTokenResponseJsonSchema as object),
  })

  app.addSchema({
    $id: 'CreateAccessTokenBody',
    ...(CreateAccessTokenBodyJsonSchema as object),
  })

  app.addSchema({
    $id: 'AccessToken',
    ...(AccessTokenJsonSchema as object),
  })

  app.addSchema({
    $id: 'AccessTokenList',
    ...(AccessTokenListJsonSchema as object),
  })

  app.addSchema({
    $id: 'UserAuditLogsResponse',
    ...(UserAuditLogsResponseJsonSchema as object),
  })

  app.addSchema({
    $id: 'AccessControlPermission',
    ...(AccessControlPermissionJsonSchema as object),
  })

  app.addSchema({
    $id: 'CreateScopedAccessTokenResponse',
    ...(CreateScopedAccessTokenResponseJsonSchema as object),
  })

  app.addSchema({
    $id: 'CreateScopedAccessTokenBody',
    ...(CreateScopedAccessTokenBodyJsonSchema as object),
  })

  app.addSchema({
    $id: 'GetScopedAccessTokensResponse',
    ...(GetScopedAccessTokensResponseJsonSchema as object),
  })

  app.addSchema({
    $id: 'GetScopedAccessTokenResponse',
    ...(GetScopedAccessTokenResponseJsonSchema as object),
  })

  app.addSchema({
    $id: 'CreateProjectResponse',
    ...(CreateProjectResponseJsonSchema as object),
  })

  app.addSchema({
    $id: 'CreateProjectBody',
    ...(CreateProjectBodyJsonSchema as object),
  })

  app.addSchema({
    $id: 'ProjectInfo',
    ...(ProjectInfoJsonSchema as object),
  })

  app.addSchema({
    $id: 'ProjectResourceWarningsResponse',
    ...(ProjectResourceWarningsResponseJsonSchema as object),
  })

  app.addSchema({
    $id: 'ProjectRefResponse',
    ...(ProjectRefResponseJsonSchema as object),
  })

  app.addSchema({
    $id: 'UpdateProjectBody',
    ...(UpdateProjectBodyJsonSchema as object),
  })

  app.addSchema({
    $id: 'RemoveProjectResponse',
    ...(RemoveProjectResponseJsonSchema as object),
  })

  app.addSchema({
    $id: 'ProjectDetailResponse',
    ...(ProjectDetailResponseJsonSchema as object),
  })

  app.addSchema({
    $id: 'WorkflowRunResponse',
    ...(WorkflowRunResponseJsonSchema as object),
  })

  app.addSchema({
    $id: 'UpdateEmailBody',
    ...(UpdateEmailBodyJsonSchema as object),
  })

  app.addSchema({
    $id: 'ResetPasswordBody',
    ...(ResetPasswordBodyJsonSchema as object),
  })

  app.addSchema({
    $id: 'SignUpBody',
    ...(SignUpBodyJsonSchema as object),
  })

  app.addSchema({
    $id: 'TelemetryIdentifyBody',
    ...(TelemetryIdentifyBodyJsonSchema as object),
  })

  app.addSchema({
    $id: 'TelemetryGroupsIdentityBody',
    ...(TelemetryGroupsIdentityBodyJsonSchema as object),
  })

  app.addSchema({
    $id: 'TelemetryGroupsResetBody',
    ...(TelemetryGroupsResetBodyJsonSchema as object),
  })

  app.addSchema({
    $id: 'TelemetryFeatureFlagBody',
    ...(TelemetryFeatureFlagBodyJsonSchema as object),
  })

  app.addSchema({
    $id: 'TelemetryCallFeatureFlagsResponse',
    ...(TelemetryCallFeatureFlagsResponseJsonSchema as object),
  })

  app.addSchema({
    $id: 'TelemetryEventBody',
    ...(TelemetryEventBodyJsonSchema as object),
  })

  app.addSchema({
    $id: 'SetupIntentResponse',
    ...(SetupIntentResponseJsonSchema as object),
  })

  app.addSchema({
    $id: 'SetupIntentRequest',
    ...(SetupIntentRequestJsonSchema as object),
  })

  app.addSchema({
    $id: 'OverdueInvoiceCount',
    ...(OverdueInvoiceCountJsonSchema as object),
  })

  app.addSchema({
    $id: 'CreateBucketIndexBody',
    ...(CreateBucketIndexBodyJsonSchema as object),
  })

  app.addSchema({
    $id: 'StorageVectorBucketListIndexesResponse',
    ...(StorageVectorBucketListIndexesResponseJsonSchema as object),
  })

  app.addSchema({
    $id: 'StorageVectorBucketResponse',
    ...(StorageVectorBucketResponseJsonSchema as object),
  })

  app.addSchema({
    $id: 'CreateStorageVectorBucketBody',
    ...(CreateStorageVectorBucketBodyJsonSchema as object),
  })

  app.addSchema({
    $id: 'StorageVectorBucketsResponse',
    ...(StorageVectorBucketsResponseJsonSchema as object),
  })

  app.addSchema({
    $id: 'CreateStorageCredentialBody',
    ...(CreateStorageCredentialBodyJsonSchema as object),
  })

  app.addSchema({
    $id: 'CreateStorageCredentialResponse',
    ...(CreateStorageCredentialResponseJsonSchema as object),
  })

  app.addSchema({
    $id: 'GetStorageCredentialsResponse',
    ...(GetStorageCredentialsResponseJsonSchema as object),
  })

  app.addSchema({
    $id: 'GetSignedUrlsBody',
    ...(GetSignedUrlsBodyJsonSchema as object),
  })

  app.addSchema({
    $id: 'SignedUrlsResponse',
    ...(SignedUrlsResponseJsonSchema as object),
  })

  app.addSchema({
    $id: 'SignedUrlResponse',
    ...(SignedUrlResponseJsonSchema as object),
  })

  app.addSchema({
    $id: 'GetSignedUrlBody',
    ...(GetSignedUrlBodyJsonSchema as object),
  })

  app.addSchema({
    $id: 'PublicUrlResponse',
    ...(PublicUrlResponseJsonSchema as object),
  })

  app.addSchema({
    $id: 'GetPublicUrlBody',
    ...(GetPublicUrlBodyJsonSchema as object),
  })

  app.addSchema({
    $id: 'StorageListResponse',
    ...(StorageListResponseJsonSchema as object),
  })

  app.addSchema({
    $id: 'GetObjectsBody',
    ...(GetObjectsBodyJsonSchema as object),
  })

  app.addSchema({
    $id: 'MoveObjectBody',
    ...(MoveObjectBodyJsonSchema as object),
  })

  app.addSchema({
    $id: 'CopyObjectResponse',
    ...(CopyObjectResponseJsonSchema as object),
  })

  app.addSchema({
    $id: 'CopyObjectBody',
    ...(CopyObjectBodyJsonSchema as object),
  })

  app.addSchema({
    $id: 'StorageObject',
    ...(StorageObjectArrayJsonSchema as object),
  })

  app.addSchema({
    $id: 'DeleteObjectsBody',
    ...(DeleteObjectsBodyJsonSchema as object),
  })

  app.addSchema({
    $id: 'UpdateStorageBucketBody',
    ...(UpdateStorageBucketBodyJsonSchema as object),
  })

  app.addSchema({
    $id: 'StorageBucketResponse',
    ...(StorageBucketResponseJsonSchema as object),
  })

  app.addSchema({
    $id: 'CreateStorageBucketBody',
    ...(CreateStorageBucketBodyJsonSchema as object),
  })

  app.addSchema({
    $id: 'StorageBucketListResponse',
    ...(StorageBucketListResponseJsonSchema as object),
  })

  app.addSchema({
    $id: 'GetArchiveResponse',
    ...(GetArchiveResponseJsonSchema as object),
  })

  app.addSchema({
    $id: 'NamespaceTableResponse',
    ...(NamespaceTableResponseJsonSchema as object),
  })

  app.addSchema({
    $id: 'CreateNamespaceTableBody',
    ...(CreateNamespaceTableBodyJsonSchema as object),
  })

  app.addSchema({
    $id: 'StorageAnalyticsBucketNamespaceTablesResponse',
    ...(StorageAnalyticsBucketNamespaceTablesResponseJsonSchema as object),
  })

  app.addSchema({
    $id: 'NamespacesResponse',
    ...(NamespacesResponseJsonSchema as object),
  })

  app.addSchema({
    $id: 'CreateNamespaceBody',
    ...(CreateNamespaceBodyJsonSchema as object),
  })

  app.addSchema({
    $id: 'StorageAnalyticsBucketDeleteResponse',
    ...(StorageAnalyticsBucketDeleteResponseJsonSchema as object),
  })

  app.addSchema({
    $id: 'StorageAnalyticsBucketsResponse',
    ...(StorageAnalyticsBucketsResponseJsonSchema as object),
  })

  app.addSchema({
    $id: 'StorageAnalyticsBucketResponse',
    ...(StorageAnalyticsBucketResponseJsonSchema as object),
  })

  app.addSchema({
    $id: 'CreateStorageAnalyticsBucketBody',
    ...(CreateStorageAnalyticsBucketBodyJsonSchema as object),
  })

  app.addSchema({
    $id: 'ReplicationTablesResponse',
    ...(ReplicationTablesResponseJsonSchema as object),
  })

  app.addSchema({
    $id: 'CreateTenantSourceResponse',
    ...(CreateTenantSourceResponseJsonSchema as object),
  })

  app.addSchema({
    $id: 'UpdateReplicationPublicationBody',
    ...(UpdateReplicationPublicationBodyJsonSchema as object),
  })

  app.addSchema({
    $id: 'CreateReplicationPublicationBody',
    ...(CreateReplicationPublicationBodyJsonSchema as object),
  })

  app.addSchema({
    $id: 'ReplicationPublicationsResponse',
    ...(ReplicationPublicationsResponseJsonSchema as object),
  })

  app.addSchema({
    $id: 'CreateSourceResponse',
    ...(CreateSourceResponseJsonSchema as object),
  })

  app.addSchema({
    $id: 'ReplicationSourcesResponse',
    ...(ReplicationSourcesResponseJsonSchema as object),
  })

  app.addSchema({
    $id: 'UpdateReplicationPipelineVersionBody',
    ...(UpdateReplicationPipelineVersionBodyJsonSchema as object),
  })

  app.addSchema({
    $id: 'ReplicationPipelineVersionResponse',
    ...(ReplicationPipelineVersionResponseJsonSchema as object),
  })

  app.addSchema({
    $id: 'ReplicationPipelineStatusResponse',
    ...(ReplicationPipelineStatusResponseJsonSchema as object),
  })

  app.addSchema({
    $id: 'RollbackTableStateResponse',
    ...(RollbackTableStateResponseJsonSchema as object),
  })

  app.addSchema({
    $id: 'RollbackTableStateBody',
    ...(RollbackTableStateBodyJsonSchema as object),
  })

  app.addSchema({
    $id: 'UpdateReplicationPipelineBody',
    ...(UpdateReplicationPipelineBodyJsonSchema as object),
  })

  app.addSchema({
    $id: 'ReplicationPipelineResponse',
    ...(ReplicationPipelineResponseJsonSchema as object),
  })

  app.addSchema({
    $id: 'ReplicationPipelineReplicationStatusResponse',
    ...(ReplicationPipelineReplicationStatusResponseJsonSchema as object),
  })

  app.addSchema({
    $id: 'CreateReplicationPipelineBody',
    ...(CreateReplicationPipelineBodyJsonSchema as object),
  })

  app.addSchema({
    $id: 'CreatePipelineResponse',
    ...(CreatePipelineResponseJsonSchema as object),
  })

  app.addSchema({
    $id: 'ReplicationPipelinesResponse',
    ...(ReplicationPipelinesResponseJsonSchema as object),
  })

  app.addSchema({
    $id: 'ReplicationDestinationResponse',
    ...(ReplicationDestinationResponseJsonSchema as object),
  })

  app.addSchema({
    $id: 'UpdateReplicationDestinationBody',
    ...(UpdateReplicationDestinationBodyJsonSchema as object),
  })

  app.addSchema({
    $id: 'CreateDestinationPipelineResponse',
    ...(CreateDestinationPipelineResponseJsonSchema as object),
  })

  app.addSchema({
    $id: 'UpdateReplicationDestinationPipelineBody',
    ...(UpdateReplicationDestinationPipelineBodyJsonSchema as object),
  })

  app.addSchema({
    $id: 'CreateReplicationDestinationPipelineBody',
    ...(CreateReplicationDestinationPipelineBodyJsonSchema as object),
  })

  app.addSchema({
    $id: 'CreateReplicationDestinationBody',
    ...(CreateReplicationDestinationBodyJsonSchema as object),
  })

  app.addSchema({
    $id: 'ReplicationDestinationsResponse',
    ...(ReplicationDestinationsResponseJsonSchema as object),
  })

  app.addSchema({
    $id: 'CreateDestinationResponse',
    ...(CreateDestinationResponseJsonSchema as object),
  })

  // Register additional schemas from the service
  if (options.additionalSchemas) {
    for (const [name, schema] of Object.entries(options.additionalSchemas)) {
      app.addSchema({
        $id: name,
        ...(schema as object),
      })
    }
  }

  // Register @fastify/swagger for OpenAPI spec generation
  const swaggerOptions: SwaggerOptions = {
    openapi: {
      openapi: '3.0.3',
      info: {
        title: options.title,
        version: options.version,
        description: options.description,
      },
      servers: options.servers,
    },
    // refResolver tells swagger to use the schemas we added via addSchema
    refResolver: {
      buildLocalReference(json, _baseUri, _fragment, _i) {
        // Use the $id as the reference name
        return json.$id as string
      },
    },
  }
  await app.register(fastifySwagger, swaggerOptions)

  // Register @fastify/swagger-ui for serving Swagger UI
  await app.register(fastifySwaggerUi, {
    routePrefix,
    uiConfig: {
      docExpansion: 'list',
      deepLinking: true,
      defaultModelsExpandDepth: 3,
      defaultModelExpandDepth: 3,
    },
    staticCSP: true,
  })
}
