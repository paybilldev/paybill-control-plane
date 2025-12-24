import { z } from 'zod'
import { zodToJsonSchema } from '../utils/zod-to-json-schema.js'

export const DisabledFeatureEnum = z.enum([
  'organizations:create',
  'organizations:delete',
  'organization_members:create',
  'organization_members:delete',
  'projects:create',
  'projects:transfer',
  'project_auth:all',
  'project_storage:all',
  'project_edge_function:all',
  'profile:update',
  'billing:account_data',
  'billing:credits',
  'billing:invoices',
  'billing:payment_methods',
  'realtime:all',
])

/* ---------------------------------- */
/* Profile response                   */
/* ---------------------------------- */

export const ProfileResponseSchema = z.object({
  auth0_id: z.string(),
  disabled_features: z.array(DisabledFeatureEnum),
  first_name: z.string(),
  free_project_limit: z.number(),
  gotrue_id: z.string(),
  id: z.number(),
  is_alpha_user: z.boolean(),
  is_sso_user: z.boolean(),
  last_name: z.string(),
  mobile: z.string(),
  primary_email: z.string().email(),
  username: z.string(),
})

export const UpdateProfileBodySchema = z.object({
  first_name: z.string().optional(),
  last_name: z.string().optional(),
  primary_email: z.string().email().optional(),
  username: z.string().optional(),
})

/* ---------------------------------- */
/* Scope enum                         */
/* ---------------------------------- */

export const AccessTokenScopeEnum = z.enum(['V0'])

/* ---------------------------------- */
/* Access token (list item)           */
/* ---------------------------------- */

export const AccessTokenSchema = z.object({
  id: z.number(),
  name: z.string(),
  token_alias: z.string(),
  scope: AccessTokenScopeEnum.optional(),
  created_at: z.string(),
  expires_at: z.string().nullable(),
  last_used_at: z.string().nullable(),
})

export type AccessToken = z.infer<typeof AccessTokenSchema>

export const AccessTokenJsonSchema = zodToJsonSchema(AccessTokenSchema, { name: 'AccessToken' })

export const AccessTokenListSchema = z.array(AccessTokenSchema)

export type AccessTokenList = z.infer<typeof AccessTokenListSchema>

export const AccessTokenListJsonSchema = zodToJsonSchema(AccessTokenListSchema, {
  name: 'AccessTokenList',
})

/* ---------------------------------- */
/* Create access token body           */
/* ---------------------------------- */

export const CreateAccessTokenBodySchema = z.object({
  name: z.string(),
  expires_at: z.string().optional(), // date-time
  scope: AccessTokenScopeEnum.optional(),
})

export type CreateAccessTokenBody = z.infer<typeof CreateAccessTokenBodySchema>

export const CreateAccessTokenBodyJsonSchema = zodToJsonSchema(CreateAccessTokenBodySchema, {
  name: 'CreateAccessTokenBody',
})

/* ---------------------------------- */
/* Create access token response       */
/* ---------------------------------- */

export const CreateAccessTokenResponseSchema = z.object({
  id: z.number(),
  name: z.string(),
  token: z.string(),
  token_alias: z.string(),
  scope: AccessTokenScopeEnum.optional(),
  created_at: z.string(),
  expires_at: z.string().nullable(),
  last_used_at: z.string().nullable(),
})

export type CreateAccessTokenResponse = z.infer<typeof CreateAccessTokenResponseSchema>

export const CreateAccessTokenResponseJsonSchema = zodToJsonSchema(
  CreateAccessTokenResponseSchema,
  { name: 'CreateAccessTokenResponse' }
)

export type ProfileResponse = z.infer<typeof ProfileResponseSchema>

export const ProfileResponseJsonSchema = zodToJsonSchema(ProfileResponseSchema, {
  name: 'ProfileResponse',
})

export type UpdateProfileBody = z.infer<typeof UpdateProfileBodySchema>

export const UpdateProfileBodyJsonSchema = zodToJsonSchema(UpdateProfileBodySchema, {
  name: 'UpdateProfileBody',
})

/* ---------------------------------- */
/* User audit logs response           */
/* ---------------------------------- */

export const UserAuditLogsResponseSchema = z.object({
  result: z.array(z.unknown()),
  retention_period: z.number(),
})

export type UserAuditLogsResponse = z.infer<typeof UserAuditLogsResponseSchema>

export const UserAuditLogsResponseJsonSchema = zodToJsonSchema(UserAuditLogsResponseSchema, {
  name: 'UserAuditLogsResponse',
})

/* ---------------------------------- */
/* Access control permission          */
/* ---------------------------------- */

export const AccessControlPermissionSchema = z.array(
  z.object({
    actions: z.array(z.string()).nullable(),
    condition: z
      .union([z.string(), z.number(), z.boolean(), z.array(z.unknown()), z.record(z.unknown())])
      .nullable(),
    organization_id: z.number().nullable(),
    organization_slug: z.string(),
    project_ids: z.array(z.number()).nullable(),
    project_refs: z.array(z.string()).nullable(),
    resources: z.array(z.string()).nullable(),
    restrictive: z.boolean().nullable(),
  })
)

export type AccessControlPermission = z.infer<typeof AccessControlPermissionSchema>

export const AccessControlPermissionJsonSchema = zodToJsonSchema(AccessControlPermissionSchema, {
  name: 'AccessControlPermission',
})

/* ---------------------------------- */
/* Permissions enum                   */
/* ---------------------------------- */

export const ScopedAccessTokenPermissionEnum = z.enum([
  'organizations_read',
  'organizations_write',
  'projects_read',
  'available_regions_read',
  'snippets_read',
  'organization_admin_read',
  'organization_admin_write',
  'members_read',
  'members_write',
  'project_admin_read',
  'project_admin_write',
  'advisors_read',
  'api_gateway_keys_read',
  'api_gateway_keys_write',
  'auth_config_read',
  'auth_config_write',
  'auth_signing_keys_read',
  'auth_signing_keys_write',
  'backups_read',
  'backups_write',
  'branching_development_read',
  'branching_development_write',
  'branching_production_read',
  'branching_production_write',
  'custom_domain_read',
  'custom_domain_write',
  'data_api_config_read',
  'data_api_config_write',
  'database_read',
  'database_write',
  'database_config_read',
  'database_config_write',
  'database_network_bans_read',
  'database_network_bans_write',
  'database_network_restrictions_read',
  'database_network_restrictions_write',
  'database_migrations_read',
  'database_migrations_write',
  'database_pooling_config_read',
  'database_pooling_config_write',
  'database_readonly_config_read',
  'database_readonly_config_write',
  'database_ssl_config_read',
  'database_ssl_config_write',
  'database_webhooks_config_read',
  'database_webhooks_config_write',
  'edge_functions_read',
  'edge_functions_write',
  'edge_functions_secrets_read',
  'edge_functions_secrets_write',
  'infra_add-ons_read',
  'infra_add-ons_write',
  'infra_read_replicas_read',
  'infra_read_replicas_write',
  'project_snippets_read',
  'project_snippets_write',
  'storage_read',
  'storage_write',
  'storage_config_read',
  'storage_config_write',
  'telemetry_logs_read',
  'telemetry_usage_read',
])

/* ---------------------------------- */
/* Token summary (list item)          */
/* ---------------------------------- */

export const ScopedAccessTokenSchema = z.object({
  id: z.string(),
  name: z.string(),
  token_alias: z.string(),
  created_at: z.string(),
  expires_at: z.string().nullable(),
  last_used_at: z.string().nullable(),
})

export const GetScopedAccessTokensResponseSchema = z.object({
  tokens: z.array(ScopedAccessTokenSchema),
})

export type GetScopedAccessTokensResponse = z.infer<typeof GetScopedAccessTokensResponseSchema>

export const GetScopedAccessTokensResponseJsonSchema = zodToJsonSchema(
  GetScopedAccessTokensResponseSchema,
  {
    name: 'GetScopedAccessTokensResponse',
  }
)

/* ---------------------------------- */
/* Create scoped access token body    */
/* ---------------------------------- */

export const CreateScopedAccessTokenBodySchema = z.object({
  name: z.string(),
  expires_at: z.string().optional(), // date-time
  organization_slugs: z.array(z.string()).optional(),
  project_refs: z.array(z.string()).optional(),
  permissions: z.array(ScopedAccessTokenPermissionEnum),
})

export type CreateScopedAccessTokenBody = z.infer<typeof CreateScopedAccessTokenBodySchema>

export const CreateScopedAccessTokenBodyJsonSchema = zodToJsonSchema(
  CreateScopedAccessTokenBodySchema,
  {
    name: 'CreateScopedAccessTokenBody',
  }
)

/* ---------------------------------- */
/* Create scoped access token response */
/* ---------------------------------- */

export const CreateScopedAccessTokenResponseSchema = z.object({
  id: z.string(),
  name: z.string(),
  token: z.string(),
  token_alias: z.string(),
  permissions: z.array(z.string()),
  organization_slugs: z.array(z.string()).optional(),
  project_refs: z.array(z.string()).optional(),
  created_at: z.string(),
  expires_at: z.string().nullable(),
  last_used_at: z.string().nullable(),
})

export type CreateScopedAccessTokenResponse = z.infer<typeof CreateScopedAccessTokenResponseSchema>

export const CreateScopedAccessTokenResponseJsonSchema = zodToJsonSchema(
  CreateScopedAccessTokenResponseSchema,
  {
    name: 'CreateScopedAccessTokenResponse',
  }
)

/* ---------------------------------- */
/* Get scoped access token response   */
/* ---------------------------------- */

export const GetScopedAccessTokenResponseSchema = z.object({
  id: z.string(),
  name: z.string(),
  token_alias: z.string(),
  permissions: z.array(z.string()),
  organization_slugs: z.array(z.string()).optional(),
  project_refs: z.array(z.string()).optional(),
  created_at: z.string(),
  expires_at: z.string().nullable(),
  last_used_at: z.string().nullable(),
})

export type GetScopedAccessTokenResponse = z.infer<typeof GetScopedAccessTokenResponseSchema>

export const GetScopedAccessTokenResponseJsonSchema = zodToJsonSchema(
  GetScopedAccessTokenResponseSchema,
  {
    name: 'GetScopedAccessTokenResponse',
  }
)
