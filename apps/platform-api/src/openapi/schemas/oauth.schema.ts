import { z } from 'zod'
import { zodToJsonSchema } from '../utils/zod-to-json-schema.js'

const GetOAuthAuthorizationResponseSchema = z.object({
  approved_at: z.string().optional(),
  approved_organization_slug: z.string().optional(),

  domain: z.string(),
  expires_at: z.string(),

  icon: z.string().optional(),
  name: z.string(),

  registration_type: z.enum(['manual', 'dynamic']),

  scopes: z
    .array(
      z.enum([
        'analytics:read',
        'analytics:write',
        'auth:read',
        'auth:write',
        'database:read',
        'database:write',
        'domains:read',
        'domains:write',
        'edge_functions:read',
        'edge_functions:write',
        'environment:read',
        'environment:write',
        'organizations:read',
        'organizations:write',
        'projects:read',
        'projects:write',
        'rest:read',
        'rest:write',
        'secrets:read',
        'secrets:write',
        'storage:read',
        'storage:write',
      ])
    )
    .optional(),

  website: z.string(),
})

const CreateOAuthAppResponseSchema = z.object({
  client_id: z.string(),
  client_secret: z.string(),
  client_secret_expires_at: z.number().optional(),
  id: z.string(),
  redirect_uris: z.array(z.string()),
})

const DynamicRegisterOAuthAppBodySchema = z.object({
  client_name: z.string(),
  /** Format: uri */
  client_uri: z.string().url().optional(),
  grant_types: z.string().array().optional(),
  /** Format: uri */
  logo_uri: z.string().url().optional(),
  redirect_uris: z.string().array(),
  response_types: z.string().array().optional(),
  /** @default organizations:read projects:read projects:write database:write database:read analytics:read secrets:read edge_functions:read edge_functions:write environment:read environment:write storage:read */
  scope: z.string().optional(),
  token_endpoint_auth_method: z.string().optional(),
})

export type DynamicRegisterOAuthAppBody = z.infer<typeof DynamicRegisterOAuthAppBodySchema>

export const DynamicRegisterOAuthAppBodyJsonSchema = zodToJsonSchema(
  DynamicRegisterOAuthAppBodySchema,
  {
    name: 'DynamicRegisterOAuthAppBody',
  }
)

export type CreateOAuthAppResponse = z.infer<typeof CreateOAuthAppResponseSchema>

export const CreateOAuthAppResponseJsonSchema = zodToJsonSchema(CreateOAuthAppResponseSchema, {
  name: 'CreateOAuthAppResponse',
})

export type GetOAuthAuthorizationResponse = z.infer<typeof GetOAuthAuthorizationResponseSchema>

export const GetOAuthAuthorizationResponseJsonSchema = zodToJsonSchema(
  GetOAuthAuthorizationResponseSchema,
  {
    name: 'GetOAuthAuthorizationResponse',
  }
)
