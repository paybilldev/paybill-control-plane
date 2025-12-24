import type { FastifyPluginAsync } from 'fastify'
import {
  BackupsResponse,
  CloneBackupsResponse,
  CloneProject,
  DownloadableBackupsResponse,
  DownloadBackupBody,
  DownloadBackupResponse,
  PointInTimeRestoreBody,
  ProjectClonedResponse,
  ProjectClonedStatusResponse,
  RestoreLogicalBackupBody,
  RestorePhysicalBackupBody,
} from '../openapi/index.js'

export const enableHooks = async (ref: string): Promise<null> => {
  // TODO:
  return null
}

export const enablePhysicalBackup = async (ref: string): Promise<null> => {
  // TODO:
  return null
}

export const getBackups = async (ref: string): Promise<BackupsResponse> => {
  // TODO:
  return {} as BackupsResponse
}

export const downloadBackup = async (
  ref: string,
  body: DownloadBackupBody
): Promise<DownloadBackupResponse> => {
  // TODO:
  return {} as DownloadBackupResponse
}

export const getDownloadableBackups = async (ref: string): Promise<DownloadableBackupsResponse> => {
  // TODO:
  return {} as DownloadableBackupsResponse
}

export const restorePointInTimeBackup = async (
  ref: string,
  body: PointInTimeRestoreBody
): Promise<null> => {
  // TODO:
  return null
}

export const restoreBackup = async (ref: string, body: RestoreLogicalBackupBody): Promise<null> => {
  // TODO:
  return null
}

export const restorePhysicalBackup = async (
  ref: string,
  body: RestorePhysicalBackupBody
): Promise<null> => {
  // TODO:
  return null
}

export const getValidBackups = async (ref: string): Promise<CloneBackupsResponse> => {
  // TODO:
  return {} as CloneBackupsResponse
}

export const cloneCurrentProject = async (
  ref: string,
  body: CloneProject
): Promise<ProjectClonedResponse> => {
  // TODO:
  return {} as ProjectClonedResponse
}

export const cloneProjectStatus = async (ref: string): Promise<ProjectClonedStatusResponse> => {
  // TODO:
  return {} as ProjectClonedStatusResponse
}

const databaseRoutes: FastifyPluginAsync = async (app) => {
  app.get<{ Params: { ref: string } }>(
    '/:ref/backups',
    {
      schema: {
        description: 'Gets project backups',
        tags: ['Database'],
        operationId: 'BackupsController_getBackups',
        params: {
          type: 'object',
          properties: {
            ref: {
              type: 'string',
              description: 'Project reference',
            },
          },
          required: ['ref'],
        },
        response: {
          200: {
            $ref: 'BackupsResponse',
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
            description: 'Failed to get project backups',
            type: 'null',
          },
        },
      },
    },
    async (request, reply) => {
      const config = await getBackups(request.params.ref)
      return reply.send(config)
    }
  )

  app.post<{ Params: { ref: string }; Body: DownloadBackupBody }>(
    '/:ref/backups/download',
    {
      schema: {
        description: 'Download project backup',
        tags: ['Database'],
        operationId: 'BackupsController_downloadBackup',
        params: {
          type: 'object',
          properties: {
            ref: {
              type: 'string',
              description: 'Project ref',
            },
          },
          required: ['ref'],
        },
        body: {
          type: 'object',
          $ref: 'DownloadBackupBody',
        },
        response: {
          201: {
            $ref: 'DownloadBackupResponse',
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
            description: 'Failed to download project backup',
            type: 'null',
          },
        },
      },
    },
    async (request, reply) => {
      const config = await downloadBackup(request.params.ref, request.body)
      return reply.send(config)
    }
  )

  app.get<{ Params: { ref: string } }>(
    '/:ref/backups/downloadable-backups',
    {
      schema: {
        description: 'Gets backups that might be downloadable, but potentially not restorable',
        tags: ['Database'],
        operationId: 'BackupsController_getDownloadableBackups',
        params: {
          type: 'object',
          properties: {
            ref: {
              type: 'string',
              description: 'Project reference',
            },
          },
          required: ['ref'],
        },
        response: {
          200: {
            $ref: 'DownloadableBackupsResponse',
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
            description: 'Failed to get project backups',
            type: 'null',
          },
        },
      },
    },
    async (request, reply) => {
      const config = await getDownloadableBackups(request.params.ref)
      return reply.send(config)
    }
  )

  app.post<{ Params: { ref: string } }>(
    '/:ref/backups/enable-physical-backups',
    {
      schema: {
        description: 'Enable usage of physical backups',
        tags: ['Database'],
        operationId: 'BackupsController_enablePhysicalBackup',
        params: {
          type: 'object',
          properties: {
            ref: {
              type: 'string',
              description: 'Project ref',
            },
          },
          required: ['ref'],
        },
        response: {
          201: {
            description: 'Successfully enabled usage of physical backups',
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
            description: 'Failed to enable usage of physical backups',
            type: 'null',
          },
        },
      },
    },
    async (request, reply) => {
      const config = await enablePhysicalBackup(request.params.ref)
      return reply.send(config)
    }
  )

  app.post<{ Params: { ref: string }; Body: PointInTimeRestoreBody }>(
    '/:ref/backups/pitr',
    {
      schema: {
        description: 'Restore project to a previous point in time',
        tags: ['Database'],
        operationId: 'BackupsController_restorePointInTimeBackup',
        params: {
          type: 'object',
          properties: {
            ref: {
              type: 'string',
              description: 'Project ref',
            },
          },
          required: ['ref'],
        },
        body: {
          type: 'object',
          $ref: 'PointInTimeRestoreBody',
        },
        response: {
          201: {
            description: 'Successfully initiated point-in-time restore',
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
            description: 'Failed to restore project to a previous point in time',
            type: 'null',
          },
        },
      },
    },
    async (request, reply) => {
      const config = await restorePointInTimeBackup(request.params.ref, request.body)
      return reply.send(config)
    }
  )

  app.post<{ Params: { ref: string }; Body: RestoreLogicalBackupBody }>(
    '/:ref/backups/restore',
    {
      schema: {
        description: 'Restore project backup',
        tags: ['Database'],
        operationId: 'BackupsController_restoreBackup',
        params: {
          type: 'object',
          properties: {
            ref: {
              type: 'string',
              description: 'Project ref',
            },
          },
          required: ['ref'],
        },
        body: {
          type: 'object',
          $ref: 'RestoreLogicalBackupBody',
        },
        response: {
          201: {
            description: 'Successfully initiated backup restore',
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
            description: 'Failed to restore project backup',
            type: 'null',
          },
        },
      },
    },
    async (request, reply) => {
      const config = await restoreBackup(request.params.ref, request.body)
      return reply.send(config)
    }
  )

  app.post<{ Params: { ref: string }; Body: RestorePhysicalBackupBody }>(
    '/:ref/backups/restore-physical',
    {
      schema: {
        description: 'Restore project with a physical backup',
        tags: ['Database'],
        operationId: 'BackupsController_restorePhysicalBackup',
        params: {
          type: 'object',
          properties: {
            ref: {
              type: 'string',
              description: 'Project ref',
            },
          },
          required: ['ref'],
        },
        body: {
          type: 'object',
          $ref: 'RestorePhysicalBackupBody',
        },
        response: {
          201: {
            description: 'Successfully initiated physical backup restore',
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
            description: 'Failed to restore project with physical backup',
            type: 'null',
          },
        },
      },
    },
    async (request, reply) => {
      const config = await restorePhysicalBackup(request.params.ref, request.body)
      return reply.send(config)
    }
  )

  app.get<{ Params: { ref: string } }>(
    '/:ref/clone',
    {
      schema: {
        description: 'List valid backups to clone from',
        tags: ['Database'],
        operationId: 'CloneController_getValidBackups',
        params: {
          type: 'object',
          properties: {
            ref: {
              type: 'string',
              description: 'Project reference',
            },
          },
          required: ['ref'],
        },
        response: {
          200: {
            $ref: 'CloneBackupsResponse',
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
            description: 'Failed to list available valid backups',
            type: 'null',
          },
        },
      },
    },
    async (request, reply) => {
      const config = await getValidBackups(request.params.ref)
      return reply.send(config)
    }
  )

  app.post<{ Params: { ref: string }; Body: CloneProject }>(
    '/:ref/clone',
    {
      schema: {
        description: 'Clone the current project from a backup',
        tags: ['Database'],
        operationId: 'CloneController_cloneCurrentProject',
        params: {
          type: 'object',
          properties: {
            ref: {
              type: 'string',
              description: 'Project reference',
            },
          },
          required: ['ref'],
        },
        body: {
          type: 'object',
          $ref: 'CloneProject',
        },
        response: {
          201: {
            $ref: 'ProjectClonedResponse',
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
            description: 'Failed to clone the current project',
            type: 'null',
          },
        },
      },
    },
    async (request, reply) => {
      const config = await cloneCurrentProject(request.params.ref, request.body)
      return reply.send(config)
    }
  )

  app.get<{ Params: { ref: string } }>(
    '/:ref/clone/status',
    {
      schema: {
        description: 'Retrieve the current status of an existing cloning process',
        tags: ['Database'],
        operationId: 'CloneController_cloneProjectStatus',
        params: {
          type: 'object',
          properties: {
            ref: {
              type: 'string',
              description: 'Project reference',
            },
          },
          required: ['ref'],
        },
        response: {
          200: {
            $ref: 'ProjectClonedStatusResponse',
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
            description: 'Failed to retrieve clone project status',
            type: 'null',
          },
        },
      },
    },
    async (request, reply) => {
      const config = await cloneProjectStatus(request.params.ref)
      return reply.send(config)
    }
  )

  app.post<{ Params: { ref: string } }>(
    '/:ref/hook-enable',
    {
      schema: {
        description: 'Enables Database Webhooks on the project',
        tags: ['Database'],
        operationId: 'HooksController_enableHooks',
        params: {
          type: 'object',
          properties: {
            ref: {
              type: 'string',
              description: 'Project reference',
            },
          },
          required: ['ref'],
        },
        response: {
          201: {
            description: 'Successfully enabled Database Webhooks on the project',
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
            description: 'Failed to enable Database Webhooks on the project',
            type: 'null',
          },
        },
      },
    },
    async (request, reply) => {
      const config = await enableHooks(request.params.ref)
      return reply.send(config)
    }
  )
}

export default databaseRoutes
