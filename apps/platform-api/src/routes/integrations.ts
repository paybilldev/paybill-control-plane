import type { FastifyPluginAsync, FastifyRequest } from 'fastify'
import {
  CreateGitHubAuthorizationBody,
  CreateGitHubConnectionBody,
  CreateGitHubConnectionResponse,
  GetOrganizationIntegrationResponse,
  GetUserOrganizationIntegrationResponse,
  GitHubAuthorizationResponse,
  GitHubBranchResponse,
  ListGitHubConnectionsResponse,
  ListGitHubRepositoriesResponse,
  ListRepositoryBranchesResponse,
  PrivateLinkResponse,
  UpdateGitHubConnectionBody,
  UpdatePrivateLinkBody,
} from '../openapi/index.js'

async function updatePrivateLinkConfig(
  slug: string,
  body: UpdatePrivateLinkBody
): Promise<PrivateLinkResponse> {
  // TODO:
  return {} as PrivateLinkResponse
}

async function getPrivateLinkConfig(slug: string): Promise<PrivateLinkResponse> {
  // TODO:
  return {} as PrivateLinkResponse
}

async function listRepositoryBranches(
  repository_id: string
): Promise<ListRepositoryBranchesResponse> {
  // TODO:
  return {} as ListRepositoryBranchesResponse
}

async function getRepository(
  repository_id: string,
  branch_name: string
): Promise<GitHubBranchResponse> {
  // TODO:
  return {} as GitHubBranchResponse
}

async function listRepositories(request: FastifyRequest): Promise<ListGitHubRepositoriesResponse> {
  // TODO:
  return {} as ListGitHubRepositoriesResponse
}

async function updateGitHubConnection(
  connection_id: string,
  body: UpdateGitHubConnectionBody
): Promise<null> {
  // TODO:
  return null
}

async function deleteGitHubConnection(connection_id: string): Promise<null> {
  // TODO:
  return null
}

async function createGitHubConnection(
  body: CreateGitHubConnectionBody
): Promise<CreateGitHubConnectionResponse> {
  // TODO:
  return {} as CreateGitHubConnectionResponse
}

async function listOrganizationGitHubConnections(
  organization_id: string
): Promise<ListGitHubConnectionsResponse> {
  // TODO:
  return {} as ListGitHubConnectionsResponse
}

async function getConnectionBranch(
  connection_id: string,
  branch_name: string
): Promise<GitHubBranchResponse> {
  // TODO:
  return {} as GitHubBranchResponse
}

async function listConnectionBranches(
  connection_id: string,
  page: number,
  per_page: number
): Promise<GitHubBranchResponse> {
  // TODO:
  return {} as GitHubBranchResponse
}

async function createGitHubAuthorization(body: CreateGitHubAuthorizationBody): Promise<null> {
  // TODO:
  return null
}

async function removeGitHubAuthorization(request: FastifyRequest): Promise<null> {
  // TODO:
  return null
}

async function getGitHubAuthorization(
  request: FastifyRequest
): Promise<GitHubAuthorizationResponse> {
  // TODO:
  return {} as GitHubAuthorizationResponse
}

async function getUserInstallations(
  request: FastifyRequest
): Promise<GetUserOrganizationIntegrationResponse> {
  // TODO:
  return {} as GetUserOrganizationIntegrationResponse
}

async function getUserInstallationForOrg(
  slug: string
): Promise<GetOrganizationIntegrationResponse> {
  // TODO:
  return {} as GetOrganizationIntegrationResponse
}

const integrationsRoutes: FastifyPluginAsync = async (app) => {
  app.get<{}>(
    '/',
    {
      schema: {
        description: "Gets user's integrations.",
        tags: ['Integrations'],
        operationId: 'IntegrationsController_getUserInstallations',
        response: {
          200: {
            $ref: 'GetUserOrganizationIntegrationResponse',
          },
          500: {
            description: "Failed to get user's integrations",
            type: 'object',
          },
        },
      },
    },
    async (request, reply) => {
      const config = await getUserInstallations(request)
      return reply.send(config)
    }
  )

  app.get<{ Params: { slug: string } }>(
    '/:slug',
    {
      schema: {
        description: 'Gets integration with the given organization slug',
        tags: ['Integrations'],
        operationId: 'IntegrationsController_getUserInstallationForOrg',
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
            $ref: 'GetOrganizationIntegrationResponse',
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
            description: 'Failed to get integration with the given organization slug',
            type: 'object',
          },
        },
      },
    },
    async (request, reply) => {
      const config = await getUserInstallationForOrg(request.params.slug)
      return reply.send(config)
    }
  )

  app.get<{ Params: { slug: string } }>(
    '/github/authorization',
    {
      schema: {
        description: 'Get GitHub authorization',
        tags: ['Integrations'],
        operationId: 'GitHubAuthorizationsController_getGitHubAuthorization',
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
            $ref: 'GitHubAuthorizationResponse',
          },
          500: {
            description: 'Failed to get GitHub authorization',
            type: 'object',
          },
        },
      },
    },
    async (request, reply) => {
      const config = await getGitHubAuthorization(request)
      return reply.send(config)
    }
  )

  app.post<{ Body: CreateGitHubAuthorizationBody }>(
    '/github/authorization',
    {
      schema: {
        description:
          'Upsert GitHub authorization. Creates or updates a GitHub authorization for the current user',
        tags: ['Integrations'],
        operationId: 'GitHubAuthorizationsController_createGitHubAuthorization',
        body: {
          type: 'object',
          $ref: 'CreateGitHubAuthorizationBody',
        },
        response: {
          201: {
            description: 'Successfully created GitHub authorization',
            type: 'null',
          },
          500: {
            description: 'Failed to create GitHub authorization',
            type: 'null',
          },
        },
      },
    },
    async (request, reply) => {
      const config = await createGitHubAuthorization(request.body)
      return reply.send(config)
    }
  )

  app.delete<{ Params: { slug: string } }>(
    '/github/authorization',
    {
      schema: {
        description:
          'Remove GitHub authorization. Removes the GitHub authorization for the current user',
        tags: ['Integrations'],
        operationId: 'GitHubAuthorizationsController_removeGitHubAuthorization',
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
            description: 'Successfully removed GitHub authorization',
            type: 'null',
          },
          404: {
            description: 'There was no GitHub authorization attached to the user',
            type: 'null',
          },
          500: {
            description: 'Failed to remove GitHub authorization',
            type: 'object',
          },
        },
      },
    },
    async (request, reply) => {
      const config = await removeGitHubAuthorization(request)
      return reply.send(config)
    }
  )

  app.get<{ Querystring: { organization_id: number } }>(
    '/github/connections',
    {
      schema: {
        description: 'List organization GitHub connections',
        tags: ['Integrations'],
        operationId: 'GitHubConnectionsController_listOrganizationGitHubConnections',
        querystring: {
          type: 'object',
          properties: {
            organization_id: {
              type: 'number',
              description: 'Organization ID',
            },
          },
          required: ['organization_id'],
        },
        response: {
          200: {
            $ref: 'ListGitHubConnectionsResponse',
          },
          500: {
            description: 'Failed to list organization GitHub connections',
            type: 'object',
          },
        },
      },
    },
    async (request, reply) => {
      const config = await listOrganizationGitHubConnections(
        request.query.organization_id.toString()
      )
      return reply.send(config)
    }
  )

  app.post<{ Body: CreateGitHubConnectionBody }>(
    '/github/connections',
    {
      schema: {
        description: 'Connects a GitHub project to a project',
        tags: ['Integrations'],
        operationId: 'GitHubConnectionsController_createGitHubConnection',
        body: {
          type: 'object',
          $ref: 'CreateGitHubConnectionBody',
        },
        response: {
          201: {
            $ref: 'CreateGitHubConnectionResponse',
          },
          500: {
            description: 'Failed to create project connections',
            type: 'object',
          },
        },
      },
    },
    async (request, reply) => {
      const config = await createGitHubConnection(request.body)
      return reply.send(config)
    }
  )

  app.delete<{ Params: { connection_id: string } }>(
    '/github/connections/:connection_id',
    {
      schema: {
        description: 'Deletes github project connection',
        tags: ['Integrations'],
        operationId: 'GitHubConnectionsController_deleteGitHubConnection',
        params: {
          type: 'object',
          properties: {
            connection_id: {
              type: 'string',
              description: 'Connection ID',
            },
          },
          required: ['connection_id'],
        },
        response: {
          204: {
            description: 'Successfully deleted GitHub connection',
            type: 'null',
          },
          500: {
            description: 'Failed to delete github integration project connection',
            type: 'null',
          },
        },
      },
    },
    async (request, reply) => {
      const config = await deleteGitHubConnection(request.params.connection_id)
      return reply.send(config)
    }
  )

  app.patch<{ Params: { connection_id: string }; Body: UpdateGitHubConnectionBody }>(
    '/github/connections/:connection_id',
    {
      schema: {
        description: 'Updates a GitHub connection for a project',
        tags: ['Integrations'],
        operationId: 'GitHubConnectionsController_updateGitHubConnection',
        params: {
          type: 'object',
          properties: {
            connection_id: {
              type: 'string',
              description: 'Connection ID',
            },
          },
          required: ['connection_id'],
        },
        body: {
          type: 'object',
          $ref: 'UpdateGitHubConnectionBody',
        },
        response: {
          204: {
            description: 'Successfully updated GitHub connection',
            type: 'null',
          },
          500: {
            description: 'Failed to update GitHub connection',
            type: 'null',
          },
        },
      },
    },
    async (request, reply) => {
      const config = await updateGitHubConnection(request.params.connection_id, request.body)
      return reply.send(config)
    }
  )

  app.get<{}>(
    '/github/repositories',
    {
      schema: {
        description: 'Gets GitHub repositories for user',
        tags: ['Integrations'],
        operationId: 'GitHubRepositoriesController_listRepositories',
        response: {
          200: {
            $ref: 'ListGitHubRepositoriesResponse',
          },
          500: {
            description: 'Failed to get GitHub repositories for user',
            type: 'object',
          },
        },
      },
    },
    async (request, reply) => {
      const config = await listRepositories(request)
      return reply.send(config)
    }
  )

  app.get<{ Params: { repository_id: string } }>(
    '/github/repositories/:repository_id/branches',
    {
      schema: {
        description: 'List GitHub repository branches',
        tags: ['Integrations'],
        operationId: 'GitHubRepositoriesController_listRepositoryBranches',
        params: {
          type: 'object',
          properties: {
            repository_id: {
              type: 'string',
              description: 'Repository ID',
            },
          },
          required: ['repository_id'],
        },
        response: {
          200: {
            $ref: 'ListRepositoryBranchesResponse',
          },
          500: {
            description: 'Failed to list GitHub repository branches',
            type: 'object',
          },
        },
      },
    },
    async (request, reply) => {
      const config = await listRepositoryBranches(request.params.repository_id)
      return reply.send(config)
    }
  )

  app.get<{ Params: { repository_id: string; branch_name: string } }>(
    '/github/repositories/:repository_id/branches/:branch_name',
    {
      schema: {
        description:
          'Get GitHub repository branch. This is a temporary endpoint before dashboard switches to combo box',
        tags: ['Integrations'],
        operationId: 'GitHubRepositoriesController_getRepository',
        params: {
          type: 'object',
          properties: {
            repository_id: {
              type: 'string',
              description: 'Repository ID',
            },
            branch_name: {
              type: 'string',
              description: 'Branch name',
            },
          },
          required: ['repository_id', 'branch_name'],
        },
        response: {
          200: {
            $ref: 'GitHubBranchResponse',
          },
          500: {
            description: 'Failed to get GitHub repository branch',
            type: 'object',
          },
        },
      },
    },
    async (request, reply) => {
      const config = await getRepository(request.params.repository_id, request.params.branch_name)
      return reply.send(config)
    }
  )

  app.get<{ Params: { slug: string } }>(
    '/private-link/:slug',
    {
      schema: {
        description: "Get organization's PrivateLink configuration.",
        tags: ['Integrations'],
        operationId: 'PrivateLinkController_getPrivateLinkConfig',
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
        response: {
          200: {
            $ref: 'PrivateLinkResponse',
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
            description: "Failed to retrieve organization's PrivateLink config",
            type: 'object',
          },
        },
      },
    },
    async (request, reply) => {
      const config = await getPrivateLinkConfig(request.params.slug)
      return reply.send(config)
    }
  )

  app.post<{ Params: { slug: string }; Body: UpdatePrivateLinkBody }>(
    '/private-link/:slug',
    {
      schema: {
        description: "Update organization's PrivateLink configuration.",
        tags: ['Integrations'],
        operationId: 'PrivateLinkController_updatePrivateLinkConfig',
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
        body: {
          type: 'object',
          $ref: 'UpdatePrivateLinkBody',
        },
        response: {
          200: {
            $ref: 'PrivateLinkResponse',
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
            description: "Failed to update organization's PrivateLink configuration",
            type: 'object',
          },
        },
      },
    },
    async (request, reply) => {
      const config = await updatePrivateLinkConfig(request.params.slug, request.body)
      return reply.send(config)
    }
  )
}

export default integrationsRoutes
