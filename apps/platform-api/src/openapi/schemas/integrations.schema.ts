import { z } from 'zod'
import { zodToJsonSchema } from '../utils/zod-to-json-schema.js'

const UpdatePrivateLinkBodySchema = z.object({
  appliedSuccessfully: z.boolean(),
  currentConfig: z.object({
    enabled: z.boolean(),
  }),
})

const PrivateLinkResponseSchema = z.object({
  appliedSuccessfully: z.boolean(),
  currentConfig: z.object({
    enabled: z.boolean(),
  }),
})

const ListRepositoryBranchesResponseSchema = z.object({
  branches: z.array(
    z.object({
      name: z.string(),
    })
  ),
})

const ListGitHubRepositoriesResponseSchema = z.object({
  partial_response_due_to_sso: z.boolean(),
  repositories: z.array(
    z.object({
      default_branch: z.string(),
      id: z.number(),
      installation_id: z.number(),
      name: z.string(),
    })
  ),
})

const UpdateGitHubConnectionBodySchema = z.object({
  branch_limit: z.number().optional(),
  new_branch_per_pr: z.boolean().optional(),
  changes_only: z.boolean().optional(),
  workdir: z.string().optional(),
})

const CreateGitHubConnectionResponseSchema = z.object({
  branch_limit: z.number(),
  id: z.number(),
  inserted_at: z.string(),
  installation_id: z.number(),
  new_branch_per_pr: z.boolean(),
  changes_only: z.boolean(),
  updated_at: z.string(),
  workdir: z.string(),
})

const CreateGitHubConnectionBodySchema = z.object({
  branch_limit: z.number().optional(),
  installation_id: z.number(),
  new_branch_per_pr: z.boolean().optional(),
  project_ref: z.string(),
  repository_id: z.number(),
  changes_only: z.boolean().optional(),
  workdir: z.string().optional(),
})

const ListGitHubConnectionsResponseSchema = z.object({
  connections: z.array(
    z.object({
      branch_limit: z.number(),
      id: z.number(),
      inserted_at: z.string(),
      installation_id: z.number(),
      new_branch_per_pr: z.boolean(),

      project: z.object({
        id: z.number(),
        name: z.string(),
        ref: z.string(),
      }),

      repository: z.object({
        id: z.number(),
        name: z.string(),
      }),

      changes_only: z.boolean(),
      updated_at: z.string(),

      user: z
        .object({
          id: z.number(),
          primary_email: z.string().nullable(),
          username: z.string(),
        })
        .nullable(),

      workdir: z.string(),
    })
  ),
})

const GitHubBranchResponseSchema = z.object({
  name: z.string(),
})

const CreateGitHubAuthorizationBodySchema = z.object({
  code: z.string(),
})

const GitHubAuthorizationResponseSchema = z.object({
  id: z.number(),
  sender_id: z.number(),
  user_id: z.number(),
})

const GetOrganizationIntegrationResponseSchema = z.object({
  added_by: z.object({
    primary_email: z.string(),
    username: z.string(),
  }),

  connections: z.array(
    z.object({
      added_by: z.object({
        primary_email: z.string(),
        username: z.string(),
      }),
      id: z.string(),
      inserted_at: z.string(),
      organization_integration_id: z.string(),
      project_ref: z.string(),
      updated_at: z.string(),
    })
  ),

  id: z.string(),
  inserted_at: z.string(),

  integration: z.object({
    name: z.string(),
  }),

  /** @description Any JSON-serializable value */
  metadata: z.unknown(),

  organization: z.object({
    slug: z.string(),
  }),

  updated_at: z.string(),
})

const GetUserOrganizationIntegrationResponseSchema = z.object({
  added_by: z.object({
    primary_email: z.string(),
    username: z.string(),
  }),

  id: z.string().uuid(),
  inserted_at: z.string(),

  integration: z.object({
    name: z.string(),
  }),

  /** @description Any JSON-serializable value */
  metadata: z.any(),

  organization: z.object({
    slug: z.string(),
  }),

  updated_at: z.string(),
})

export type GetUserOrganizationIntegrationResponse = z.infer<
  typeof GetUserOrganizationIntegrationResponseSchema
>

export const GetUserOrganizationIntegrationResponseJsonSchema = zodToJsonSchema(
  GetUserOrganizationIntegrationResponseSchema,
  {
    name: 'GetUserOrganizationIntegrationResponse',
  }
)

export type GetOrganizationIntegrationResponse = z.infer<
  typeof GetOrganizationIntegrationResponseSchema
>

export const GetOrganizationIntegrationResponseJsonSchema = zodToJsonSchema(
  GetOrganizationIntegrationResponseSchema,
  {
    name: 'GetOrganizationIntegrationResponse',
  }
)

export type GitHubAuthorizationResponse = z.infer<typeof GitHubAuthorizationResponseSchema>

export const GitHubAuthorizationResponseJsonSchema = zodToJsonSchema(
  GitHubAuthorizationResponseSchema,
  {
    name: 'GitHubAuthorizationResponse',
  }
)

export type CreateGitHubAuthorizationBody = z.infer<typeof CreateGitHubAuthorizationBodySchema>

export const CreateGitHubAuthorizationBodyJsonSchema = zodToJsonSchema(
  CreateGitHubAuthorizationBodySchema,
  {
    name: 'CreateGitHubAuthorizationBody',
  }
)

export type GitHubBranchResponse = z.infer<typeof GitHubBranchResponseSchema>

export const GitHubBranchResponseJsonSchema = zodToJsonSchema(GitHubBranchResponseSchema, {
  name: 'GitHubBranchResponse',
})

export type ListGitHubConnectionsResponse = z.infer<typeof ListGitHubConnectionsResponseSchema>

export const ListGitHubConnectionsResponseJsonSchema = zodToJsonSchema(
  ListGitHubConnectionsResponseSchema,
  {
    name: 'ListGitHubConnectionsResponse',
  }
)

export type CreateGitHubConnectionBody = z.infer<typeof CreateGitHubConnectionBodySchema>

export const CreateGitHubConnectionBodyJsonSchema = zodToJsonSchema(
  CreateGitHubConnectionBodySchema,
  {
    name: 'CreateGitHubConnectionBody',
  }
)

export type CreateGitHubConnectionResponse = z.infer<typeof CreateGitHubConnectionResponseSchema>

export const CreateGitHubConnectionResponseJsonSchema = zodToJsonSchema(
  CreateGitHubConnectionResponseSchema,
  {
    name: 'CreateGitHubConnectionResponse',
  }
)

export type UpdateGitHubConnectionBody = z.infer<typeof UpdateGitHubConnectionBodySchema>

export const UpdateGitHubConnectionBodyJsonSchema = zodToJsonSchema(
  UpdateGitHubConnectionBodySchema,
  {
    name: 'UpdateGitHubConnectionBody',
  }
)

export type ListGitHubRepositoriesResponse = z.infer<typeof ListGitHubRepositoriesResponseSchema>

export const ListGitHubRepositoriesResponseJsonSchema = zodToJsonSchema(
  ListGitHubRepositoriesResponseSchema,
  {
    name: 'ListGitHubRepositoriesResponse',
  }
)

export type ListRepositoryBranchesResponse = z.infer<typeof ListRepositoryBranchesResponseSchema>

export const ListRepositoryBranchesResponseJsonSchema = zodToJsonSchema(
  ListRepositoryBranchesResponseSchema,
  {
    name: 'ListRepositoryBranchesResponse',
  }
)

export type PrivateLinkResponse = z.infer<typeof PrivateLinkResponseSchema>

export const PrivateLinkResponseJsonSchema = zodToJsonSchema(PrivateLinkResponseSchema, {
  name: 'PrivateLinkResponse',
})

export type UpdatePrivateLinkBody = z.infer<typeof UpdatePrivateLinkBodySchema>

export const UpdatePrivateLinkBodyJsonSchema = zodToJsonSchema(UpdatePrivateLinkBodySchema, {
  name: 'UpdatePrivateLinkBody',
})
