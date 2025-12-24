import type { FastifyPluginAsync } from 'fastify'
import {
  NotificationResponse,
  NotificationsSummary,
  UpdateNotificationBody,
} from '../openapi/index.js'

async function getNotifications(query: {
  limit?: number
  offset?: number
  org_slug?: string
  priority?: string
  project_ref?: string
  status?: string
}): Promise<NotificationResponse> {
  // TODO:
  return {} as NotificationResponse
}

async function archiveAllNotifications(): Promise<null> {
  // TODO:
  return null
}

async function updateNotifications(body: UpdateNotificationBody): Promise<NotificationResponse> {
  // TODO:
  return {} as NotificationResponse
}

async function getNotificationsSummary(): Promise<NotificationsSummary> {
  // TODO:
  return {} as NotificationsSummary
}

const notificationsRoutes: FastifyPluginAsync = async (app) => {
  app.get<{
    Querystring: {
      limit?: number
      offset?: number
      org_slug?: string
      priority?: string
      project_ref?: string
      status?: string
    }
  }>(
    '/',
    {
      schema: {
        description: 'Get notifications.',
        tags: ['Notifications'],
        operationId: 'NotificationsController_getNotifications',
        querystring: {
          type: 'object',
          properties: {
            limit: {
              type: 'number',
              description: 'Limit the number of notifications returned',
            },
            offset: {
              type: 'number',
              description: 'Offset for pagination',
            },
            org_slug: {
              type: 'string',
              description: 'Organization slug to filter notifications',
            },
            priority: {
              type: 'string',
              description: 'Priority level to filter notifications',
            },
            project_ref: {
              type: 'string',
              description: 'Project reference to filter notifications',
            },
            status: {
              type: 'string',
              description: 'Status to filter notifications',
            },
          },
        },
        response: {
          200: {
            $ref: 'NotificationResponse',
          },
          500: {
            description: 'Failed to retrieve notifications',
            type: 'null',
          },
        },
      },
    },
    async (request, reply) => {
      const config = await getNotifications(request.query)
      return reply.send(config)
    }
  )

  app.patch<{ Body: UpdateNotificationBody }>(
    '/',
    {
      schema: {
        description: 'Update notifications.',
        tags: ['Notifications'],
        operationId: 'NotificationsController_updateNotifications',
        body: {
          type: 'object',
          $ref: 'UpdateNotificationBody',
        },
        response: {
          200: {
            $ref: 'NotificationResponse',
          },
          500: {
            description: 'Failed to update notifications',
            type: 'null',
          },
        },
      },
    },
    async (request, reply) => {
      const config = await updateNotifications(request.body)
      return reply.send(config)
    }
  )

  app.patch<{}>(
    '/archive-all',
    {
      schema: {
        description: 'Archives all notifications.',
        tags: ['Notifications'],
        operationId: 'NotificationsController_archiveAllNotifications',
        response: {
          200: {
            description: 'Successfully archived all notifications.',
            type: 'null',
          },
          500: {
            description: 'Failed to archive all notifications',
            type: 'null',
          },
        },
      },
    },
    async (request, reply) => {
      const config = await archiveAllNotifications()
      return reply.send(config)
    }
  )

  app.get<{}>(
    '/summary',
    {
      schema: {
        description: 'Get an aggregated data of interest across all notifications for the user.',
        tags: ['Notifications'],
        operationId: 'NotificationsController_getNotificationsSummary',
        response: {
          200: {
            $ref: 'NotificationsSummary',
          },
        },
      },
    },
    async (request, reply) => {
      const config = await getNotificationsSummary()
      return reply.send(config)
    }
  )
}

export default notificationsRoutes
