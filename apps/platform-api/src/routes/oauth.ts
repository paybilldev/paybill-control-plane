import type { FastifyPluginAsync } from 'fastify'
import {
  CreateOAuthAppResponse,
  DynamicRegisterOAuthAppBody,
  GetOAuthAuthorizationResponse,
} from '../openapi/index.js'

export const dynamicRegister = async (
  body: DynamicRegisterOAuthAppBody
): Promise<CreateOAuthAppResponse> => {
  // TODO:
  return {} as CreateOAuthAppResponse
}

export const getAuthorizationRequest = async (
  id: string
): Promise<GetOAuthAuthorizationResponse> => {
  // TODO:
  return {} as GetOAuthAuthorizationResponse
}

const oauthRoutes: FastifyPluginAsync = async (app) => {
  app.post<{ Body: DynamicRegisterOAuthAppBody }>(
    '/apps/register',
    {
      schema: {
        description: 'Dynamically register an OAuth client (RFC-7591)',
        tags: ['OAuth'],
        operationId: 'PlatformOAuthAppsController_dynamicRegister',
        body: {
          type: 'object',
          $ref: 'DynamicRegisterOAuthAppBody',
        },
        response: {
          201: {
            $ref: 'CreateOAuthAppResponse',
          },
        },
      },
    },
    async (request, reply) => {
      const config = await dynamicRegister(request.body)
      return reply.send(config)
    }
  )

  app.get<{ Params: { id: string } }>(
    '/authorizations/:id',
    {
      schema: {
        description: 'Get oauth app authorization request.',
        tags: ['OAuth'],
        operationId: 'OAuthAuthorizationsController_getAuthorizationRequest',
        params: {
          type: 'object',
          properties: {
            id: {
              type: 'string',
              description: 'Oauth authorization id ',
            },
          },
          required: ['id'],
        },
        response: {
          200: {
            $ref: 'GetOAuthAuthorizationResponse',
          },
        },
      },
    },
    async (request, reply) => {
      const config = await getAuthorizationRequest(request.params.id)
      return reply.send(config)
    }
  )
}

export default oauthRoutes
