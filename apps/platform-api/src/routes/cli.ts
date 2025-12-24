import type { FastifyPluginAsync } from 'fastify'
import { CreateCliLoginSessionBody } from '../openapi/index.js'

export const createCliLoginSession = async (body: CreateCliLoginSessionBody): Promise<null> => {
  // TODO:
  return null
}

export const getCliLoginSession = async (session_id: string): Promise<null> => {
  // TODO:
  return null
}

const cliRoutes: FastifyPluginAsync = async (app) => {
  app.post<{ Body: CreateCliLoginSessionBody }>(
    '/login',
    {
      schema: {
        description: 'Create CLI login session.',
        tags: ['CLI Login'],
        operationId: 'CliLoginController_createCliLoginSession',
        body: {
          type: 'object',
          $ref: 'CreateCliLoginSessionBody',
        },
        response: {
          201: {
            description: 'Successfully created CLI login session.',
            type: 'null',
          },
          500: {
            description: 'Failed to create CLI login session',
            type: 'null',
          },
        },
      },
    },
    async (request, reply) => {
      const config = await createCliLoginSession(request.body)
      return reply.send(config)
    }
  )

  app.get<{ Params: { session_id: string }; Querystring: { device_code?: string } }>(
    '/login/:session_id',
    {
      schema: {
        description: 'Retrieve CLI login session.',
        tags: ['CLI Login'],
        operationId: 'CliLoginController_getCliLoginSession',
        params: {
          type: 'object',
          properties: {
            session_id: {
              type: 'string',
              description: 'Session ID',
            },
          },
          required: ['session_id'],
        },
        querystring: {
          type: 'object',
          properties: {
            device_code: {
              type: 'string',
              description: 'Device code',
            },
          },
        },
        response: {
          200: {
            description: 'Successfully retrieved CLI login session.',
            type: 'null',
          },
          500: {
            description: 'Failed to retrieve CLI login session',
            type: 'null',
          },
        },
      },
    },
    async (request, reply) => {
      const config = await getCliLoginSession(request.params.session_id)
      return reply.send(config)
    }
  )
}

export default cliRoutes
