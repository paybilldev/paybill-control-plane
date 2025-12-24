import type { FastifyPluginAsync } from 'fastify'
import {
  CreateDestinationPipelineResponse,
  CreateDestinationResponse,
  CreatePipelineResponse,
  CreateReplicationDestinationBody,
  CreateReplicationDestinationPipelineBody,
  CreateReplicationPipelineBody,
  CreateReplicationPublicationBody,
  CreateSourceResponse,
  CreateTenantSourceResponse,
  ReplicationDestinationResponse,
  ReplicationDestinationsResponse,
  ReplicationPipelineReplicationStatusResponse,
  ReplicationPipelineResponse,
  ReplicationPipelinesResponse,
  ReplicationPipelineStatusResponse,
  ReplicationPipelineVersionResponse,
  ReplicationPublicationsResponse,
  ReplicationSourcesResponse,
  ReplicationTablesResponse,
  RollbackTableStateBody,
  RollbackTableStateResponse,
  UpdateReplicationDestinationBody,
  UpdateReplicationDestinationPipelineBody,
  UpdateReplicationPipelineBody,
  UpdateReplicationPipelineVersionBody,
  UpdateReplicationPublicationBody,
} from '../openapi/index.js'

interface RefIdParams {
  ref: string
  id: string
}

interface RefPipelineIdParams {
  ref: string
  pipeline_id: string
}

interface RefDestinationIdParams {
  ref: string
  destination_id: string
}

interface RefDestinationIdPipelineIdParams {
  ref: string
  destination_id: string
  pipeline_id: string
}

interface RefSourceIdPublicationNameParams {
  ref: string
  source_id: string
  publication_name: string
}

interface RefSourceIdParams {
  ref: string
  source_id: string
}

export const getDestinations = async (ref: string): Promise<ReplicationDestinationsResponse> => {
  // TODO: fetch all destinations for the project
  return {} as ReplicationDestinationsResponse
}

export const createDestination = async (
  ref: string,
  body: CreateReplicationDestinationBody
): Promise<CreateDestinationResponse> => {
  // TODO: create a new destination for the project
  return {} as CreateDestinationResponse
}

export const createDestinationPipeline = async (
  ref: string,
  body: CreateReplicationDestinationPipelineBody
): Promise<CreateDestinationPipelineResponse> => {
  // TODO
  return {} as CreateDestinationPipelineResponse
}

export const updateDestinationPipeline = async (
  params: RefDestinationIdPipelineIdParams,
  body: UpdateReplicationDestinationPipelineBody
): Promise<void> => {
  // TODO
}

export const deleteDestinationPipeline = async (
  params: RefDestinationIdPipelineIdParams
): Promise<void> => {
  // TODO
}

export const getReplicationDestination = async (
  params: RefDestinationIdParams
): Promise<ReplicationDestinationResponse> => {
  // TODO
  return {} as ReplicationDestinationResponse
}

export const updateReplicationDestination = async (
  params: RefDestinationIdParams,
  body: UpdateReplicationDestinationBody
) => {
  // TODO
}

export const deleteReplicationDestination = async (params: RefDestinationIdParams) => {
  // TODO
}

export const createReplicationPipeline = async (
  ref: string,
  body: CreateReplicationPipelineBody
): Promise<CreatePipelineResponse> => {
  // TODO
  return {} as CreatePipelineResponse
}

export const getReplicationPipelines = async (
  ref: string
): Promise<ReplicationPipelinesResponse> => {
  // TODO
  return {} as ReplicationPipelinesResponse
}

export const getPipelineReplicationStatus = async (
  params: RefPipelineIdParams
): Promise<ReplicationPipelineReplicationStatusResponse> => {
  // TODO
  return {} as ReplicationPipelineReplicationStatusResponse
}

export const deleteReplicationPipeline = async (params: RefPipelineIdParams): Promise<void> => {
  // TODO
}

export const updateReplicationPipeline = async (
  params: RefPipelineIdParams,
  body: UpdateReplicationPipelineBody
): Promise<void> => {
  // TODO
}

export const getReplicationPipeline = async (
  params: RefPipelineIdParams
): Promise<ReplicationPipelineResponse> => {
  // TODO
  return {} as ReplicationPipelineResponse
}

export const rollbackReplicationTableState = async (
  params: RefPipelineIdParams,
  body: RollbackTableStateBody
): Promise<RollbackTableStateResponse> => {
  // TODO
  return {} as RollbackTableStateResponse
}

export const startReplicationPipeline = async (params: RefPipelineIdParams): Promise<void> => {
  // TODO
}

export const stopReplicationPipeline = async (params: RefPipelineIdParams): Promise<void> => {
  // TODO
}

export const getReplicationPipelineStatus = async (
  params: RefPipelineIdParams
): Promise<ReplicationPipelineStatusResponse> => {
  // TODO
  return {} as ReplicationPipelineStatusResponse
}

export const updateReplicationPipelineVersion = async (
  params: RefPipelineIdParams,
  body: UpdateReplicationPipelineVersionBody
): Promise<void> => {
  // TODO
}

export const getReplicationPipelineVersion = async (
  params: RefPipelineIdParams
): Promise<ReplicationPipelineVersionResponse> => {
  // TODO
  return {} as ReplicationPipelineVersionResponse
}

export const createReplicationSource = async (ref: string): Promise<CreateSourceResponse> => {
  // TODO
  return {} as CreateSourceResponse
}

export const getReplicationSources = async (ref: string): Promise<ReplicationSourcesResponse> => {
  // TODO
  return {} as ReplicationSourcesResponse
}

export const createReplicationPublication = async (
  params: RefSourceIdParams,
  body: CreateReplicationPublicationBody
): Promise<void> => {
  // TODO
}

export const getReplicationPublications = async (
  params: RefSourceIdParams
): Promise<ReplicationPublicationsResponse> => {
  // TODO
  return {} as ReplicationPublicationsResponse
}

export const deleteReplicationPublication = async (
  params: RefSourceIdPublicationNameParams
): Promise<void> => {
  // TODO
}

export const updateReplicationPublication = async (
  params: RefSourceIdPublicationNameParams,
  body: UpdateReplicationPublicationBody
): Promise<void> => {
  // TODO
}

export const createTenantSource = async (ref: string): Promise<CreateTenantSourceResponse> => {
  // TODO:
  return {} as CreateTenantSourceResponse
}

export const getReplicationTables = async (
  params: RefIdParams
): Promise<ReplicationTablesResponse> => {
  // TODO:
  return {} as ReplicationTablesResponse
}

const replicationRoutes: FastifyPluginAsync = async (app) => {
  app.get<{
    Params: { ref: string }
  }>(
    '/:ref/destinations',
    {
      schema: {
        description: 'List all destinations for the project.',
        tags: ['Replication'],
        operationId: 'ReplicationDestinationsController_getDestinations',
        params: {
          type: 'object',
          properties: { ref: { type: 'string' } },
          required: ['ref'],
        },
        response: {
          200: { $ref: 'ReplicationDestinationsResponse' },
          401: { description: 'Unauthorized', type: 'null' },
          403: { description: 'Forbidden action', type: 'null' },
          429: { description: 'Rate limit exceeded', type: 'null' },
          500: { description: 'Unexpected error while listing destinations', type: 'null' },
        },
      },
    },
    async (request, reply) => {
      const destinations = await getDestinations(request.params.ref)
      return reply.send(destinations)
    }
  )

  app.post<{
    Params: { ref: string }
    Body: CreateReplicationDestinationBody
  }>(
    '/:ref/destinations',
    {
      schema: {
        description: 'Create a destination for the project.',
        tags: ['Replication'],
        operationId: 'ReplicationDestinationsController_createDestination',
        params: {
          type: 'object',
          properties: { ref: { type: 'string' } },
          required: ['ref'],
        },
        body: { $ref: 'CreateReplicationDestinationBody' },
        response: {
          200: { $ref: 'CreateDestinationResponse' },
          401: { description: 'Unauthorized', type: 'null' },
          403: { description: 'Forbidden action', type: 'null' },
          429: { description: 'Rate limit exceeded', type: 'null' },
          500: { description: 'Unexpected error while creating destination', type: 'null' },
        },
      },
    },
    async (request, reply) => {
      const result = await createDestination(request.params.ref, request.body)
      return reply.send(result)
    }
  )

  app.post<{
    Params: { ref: string }
    Body: CreateReplicationDestinationPipelineBody
  }>(
    '/:ref/destinations-pipelines',
    {
      schema: {
        description: 'Create a destination and pipeline in one call.',
        tags: ['Replication'],
        operationId: 'ReplicationDestinationsPipelinesController_createDestinationPipeline',
        params: {
          type: 'object',
          properties: { ref: { type: 'string' } },
          required: ['ref'],
        },
        body: { $ref: 'CreateReplicationDestinationPipelineBody' },
        response: {
          200: { $ref: 'CreateDestinationPipelineResponse' },
          401: { description: 'Unauthorized', type: 'null' },
          403: { description: 'Forbidden action', type: 'null' },
          429: { description: 'Rate limit exceeded', type: 'null' },
          500: {
            description: 'Unexpected error while creating destination or pipeline',
            type: 'null',
          },
        },
      },
    },
    async (request, reply) => {
      const result = await createDestinationPipeline(request.params.ref, request.body)
      return reply.send(result)
    }
  )

  app.post<{
    Params: RefDestinationIdPipelineIdParams
    Body: UpdateReplicationDestinationPipelineBody
  }>(
    '/:ref/destinations-pipelines/:destination_id/:pipeline_id',
    {
      schema: {
        description: 'Update a destination and pipeline in one call.',
        tags: ['Replication'],
        operationId: 'ReplicationDestinationsPipelinesController_updateDestinationPipeline',
        params: {
          type: 'object',
          properties: {
            ref: { type: 'string' },
            destination_id: { type: 'number' },
            pipeline_id: { type: 'number' },
          },
          required: ['ref', 'destination_id', 'pipeline_id'],
        },
        body: { $ref: 'UpdateReplicationDestinationPipelineBody' },
        response: {
          200: { description: 'Destination and pipeline updated', type: 'null' },
          401: { description: 'Unauthorized', type: 'null' },
          403: { description: 'Forbidden action', type: 'null' },
          429: { description: 'Rate limit exceeded', type: 'null' },
          500: {
            description: 'Unexpected error while updating destination or pipeline',
            type: 'null',
          },
        },
      },
    },
    async (request, reply) => {
      await updateDestinationPipeline(request.params, request.body)
      return reply.status(200).send()
    }
  )

  app.delete<{
    Params: RefDestinationIdPipelineIdParams
  }>(
    '/:ref/destinations-pipelines/:destination_id/:pipeline_id',
    {
      schema: {
        description: 'Delete a destination and pipeline.',
        tags: ['Replication'],
        operationId: 'ReplicationDestinationsPipelinesController_deleteDestinationPipeline',
        params: {
          type: 'object',
          properties: {
            ref: { type: 'string' },
            destination_id: { type: 'number' },
            pipeline_id: { type: 'number' },
          },
          required: ['ref', 'destination_id', 'pipeline_id'],
        },
        response: {
          200: { description: 'Destination and pipeline deleted', type: 'null' },
          401: { description: 'Unauthorized', type: 'null' },
          403: { description: 'Forbidden action', type: 'null' },
          429: { description: 'Rate limit exceeded', type: 'null' },
          500: {
            description: 'Unexpected error while deleting destination or pipeline',
            type: 'null',
          },
        },
      },
    },
    async (request, reply) => {
      await deleteDestinationPipeline(request.params)
      return reply.status(200).send()
    }
  )

  app.get<{ Params: RefDestinationIdParams }>(
    '/:ref/destinations/:destination_id',
    {
      schema: {
        description: 'Get a destination by id.',
        tags: ['Replication'],
        operationId: 'ReplicationDestinationsController_getDestination',
        params: {
          type: 'object',
          properties: {
            ref: { type: 'string' },
            destination_id: { type: 'number' },
          },
          required: ['ref', 'destination_id'],
        },
        response: {
          200: { $ref: 'ReplicationDestinationResponse' },
          401: { description: 'Unauthorized', type: 'null' },
          403: { description: 'Forbidden action', type: 'null' },
          429: { description: 'Rate limit exceeded', type: 'null' },
          500: { description: 'Unexpected error while retrieving destination', type: 'null' },
        },
      },
    },
    async (request, reply) => {
      const destination = await getReplicationDestination(request.params)
      return reply.send(destination)
    }
  )

  app.post<{
    Params: RefDestinationIdParams
    Body: UpdateReplicationDestinationBody
  }>(
    '/:ref/destinations/:destination_id',
    {
      schema: {
        description: 'Update a destination for the project.',
        tags: ['Replication'],
        operationId: 'ReplicationDestinationsController_updateDestination',
        params: {
          type: 'object',
          properties: {
            ref: { type: 'string' },
            destination_id: { type: 'number' },
          },
          required: ['ref', 'destination_id'],
        },
        body: { $ref: 'UpdateReplicationDestinationBody' },
        response: {
          200: { description: 'Destination updated', type: 'null' },
          401: { description: 'Unauthorized', type: 'null' },
          403: { description: 'Forbidden action', type: 'null' },
          429: { description: 'Rate limit exceeded', type: 'null' },
          500: { description: 'Unexpected error while updating destination', type: 'null' },
        },
      },
    },
    async (request, reply) => {
      await updateReplicationDestination(request.params, request.body)
      return reply.status(200).send()
    }
  )

  app.delete<{ Params: RefDestinationIdParams }>(
    '/:ref/destinations/:destination_id',
    {
      schema: {
        description: 'Delete a destination from the project.',
        tags: ['Replication'],
        operationId: 'ReplicationDestinationsController_deleteDestination',
        params: {
          type: 'object',
          properties: {
            ref: { type: 'string' },
            destination_id: { type: 'number' },
          },
          required: ['ref', 'destination_id'],
        },
        response: {
          200: { description: 'Destination deleted', type: 'null' },
          401: { description: 'Unauthorized', type: 'null' },
          403: { description: 'Forbidden action', type: 'null' },
          429: { description: 'Rate limit exceeded', type: 'null' },
          500: { description: 'Unexpected error while deleting destination', type: 'null' },
        },
      },
    },
    async (request, reply) => {
      await deleteReplicationDestination(request.params)
      return reply.status(200).send()
    }
  )

  app.get<{ Params: { ref: string } }>(
    '/:ref/pipelines',
    {
      schema: {
        description: 'List all pipelines for the project.',
        tags: ['Replication'],
        operationId: 'ReplicationPipelinesController_getPipelines',
        params: {
          type: 'object',
          properties: {
            ref: { type: 'string', description: 'Project ref' },
          },
          required: ['ref'],
        },
        response: {
          200: {
            $ref: 'ReplicationPipelinesResponse',
          },
          401: { description: 'Unauthorized', type: 'null' },
          403: { description: 'Forbidden action', type: 'null' },
          429: { description: 'Rate limit exceeded', type: 'null' },
          500: {
            description: 'Unexpected error while listing pipelines.',
            type: 'null',
          },
        },
      },
    },
    async (request, reply) => {
      const pipelines = await getReplicationPipelines(request.params.ref)
      return reply.send(pipelines)
    }
  )

  app.post<{
    Params: { ref: string }
    Body: CreateReplicationPipelineBody
  }>(
    '/:ref/pipelines',
    {
      schema: {
        description: 'Create a pipeline for the project.',
        tags: ['Replication'],
        operationId: 'ReplicationPipelinesController_createPipeline',
        params: {
          type: 'object',
          properties: {
            ref: { type: 'string', description: 'Project ref' },
          },
          required: ['ref'],
        },
        body: {
          $ref: 'CreateReplicationPipelineBody',
        },
        response: {
          200: {
            $ref: 'CreatePipelineResponse',
          },
          401: { description: 'Unauthorized', type: 'null' },
          403: { description: 'Forbidden action', type: 'null' },
          429: { description: 'Rate limit exceeded', type: 'null' },
          500: {
            description: 'Unexpected error while creating pipeline.',
            type: 'null',
          },
        },
      },
    },
    async (request, reply) => {
      const result = await createReplicationPipeline(request.params.ref, request.body)
      return reply.send(result)
    }
  )

  app.get<{ Params: RefPipelineIdParams }>(
    '/:ref/pipelines/:pipeline_id',
    {
      schema: {
        description: 'Get a pipeline by id.',
        tags: ['Replication'],
        operationId: 'ReplicationPipelinesController_getPipeline',
        params: {
          type: 'object',
          properties: {
            ref: { type: 'string', description: 'Project ref' },
            pipeline_id: { type: 'number', description: 'Pipeline id' },
          },
          required: ['ref', 'pipeline_id'],
        },
        response: {
          200: {
            $ref: 'ReplicationPipelineResponse',
          },
          401: { description: 'Unauthorized', type: 'null' },
          403: { description: 'Forbidden action', type: 'null' },
          429: { description: 'Rate limit exceeded', type: 'null' },
          500: {
            description: 'Unexpected error while retrieving pipeline.',
            type: 'null',
          },
        },
      },
    },
    async (request, reply) => {
      const pipeline = await getReplicationPipeline(request.params)
      return reply.send(pipeline)
    }
  )

  app.post<{
    Params: RefPipelineIdParams
    Body: UpdateReplicationPipelineBody
  }>(
    '/:ref/pipelines/:pipeline_id',
    {
      schema: {
        description: 'Update a pipeline.',
        tags: ['Replication'],
        operationId: 'ReplicationPipelinesController_updatePipeline',
        params: {
          type: 'object',
          properties: {
            ref: { type: 'string', description: 'Project ref' },
            pipeline_id: { type: 'number', description: 'Pipeline id' },
          },
          required: ['ref', 'pipeline_id'],
        },
        body: {
          $ref: 'UpdateReplicationPipelineBody',
        },
        response: {
          200: { description: 'Pipeline updated.', type: 'null' },
          401: { description: 'Unauthorized', type: 'null' },
          403: { description: 'Forbidden action', type: 'null' },
          429: { description: 'Rate limit exceeded', type: 'null' },
          500: {
            description: 'Unexpected error while updating pipeline.',
            type: 'null',
          },
        },
      },
    },
    async (request, reply) => {
      await updateReplicationPipeline(request.params, request.body)
      return reply.send()
    }
  )

  app.delete<{ Params: RefPipelineIdParams }>(
    '/:ref/pipelines/:pipeline_id',
    {
      schema: {
        description: 'Delete a pipeline from the project.',
        tags: ['Replication'],
        operationId: 'ReplicationPipelinesController_deletePipeline',
        params: {
          type: 'object',
          properties: {
            ref: { type: 'string', description: 'Project ref' },
            pipeline_id: { type: 'number', description: 'Pipeline id' },
          },
          required: ['ref', 'pipeline_id'],
        },
        response: {
          200: { description: 'Pipeline deleted.', type: 'null' },
          401: { description: 'Unauthorized', type: 'null' },
          403: { description: 'Forbidden action', type: 'null' },
          429: { description: 'Rate limit exceeded', type: 'null' },
          500: {
            description: 'Unexpected error while deleting pipeline.',
            type: 'null',
          },
        },
      },
    },
    async (request, reply) => {
      await deleteReplicationPipeline(request.params)
      return reply.send()
    }
  )

  app.get<{ Params: RefPipelineIdParams }>(
    '/:ref/pipelines/:pipeline_id/replication-status',
    {
      schema: {
        description: 'Get the pipeline replication status.',
        tags: ['Replication'],
        operationId: 'ReplicationPipelinesController_getPipelineReplicationStatus',
        params: {
          type: 'object',
          properties: {
            ref: { type: 'string', description: 'Project ref' },
            pipeline_id: { type: 'number', description: 'Pipeline id' },
          },
          required: ['ref', 'pipeline_id'],
        },
        response: {
          200: {
            $ref: 'ReplicationPipelineReplicationStatusResponse',
          },
          401: { description: 'Unauthorized', type: 'null' },
          403: { description: 'Forbidden action', type: 'null' },
          429: { description: 'Rate limit exceeded', type: 'null' },
          500: {
            description: 'Unexpected error while retrieving replication status.',
            type: 'null',
          },
        },
      },
    },
    async (request, reply) => {
      const status = await getPipelineReplicationStatus(request.params)
      return reply.send(status)
    }
  )

  app.post<{
    Params: RefPipelineIdParams
    Body: RollbackTableStateBody
  }>(
    '/:ref/pipelines/:pipeline_id/rollback-table-state',
    {
      schema: {
        description: 'Rollback a table state for the pipeline.',
        tags: ['Replication'],
        operationId: 'ReplicationPipelinesController_rollbackTableState',
        params: {
          type: 'object',
          properties: {
            ref: {
              type: 'string',
              description: 'Project ref',
            },
            pipeline_id: {
              type: 'number',
              description: 'Pipeline id',
            },
          },
          required: ['ref', 'pipeline_id'],
        },
        body: {
          $ref: 'RollbackTableStateBody',
        },
        response: {
          200: {
            $ref: 'RollbackTableStateResponse',
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
            description: 'Unexpected error while rolling back table state.',
            type: 'null',
          },
        },
      },
    },
    async (request, reply) => {
      const result = await rollbackReplicationTableState(request.params, request.body)
      return reply.send(result)
    }
  )

  app.post<{ Params: RefPipelineIdParams }>(
    '/:ref/pipelines/:pipeline_id/start',
    {
      schema: {
        description: 'Start the pipeline.',
        tags: ['Replication'],
        operationId: 'ReplicationPipelinesController_startPipeline',
        params: {
          type: 'object',
          properties: {
            ref: {
              type: 'string',
              description: 'Project ref',
            },
            pipeline_id: {
              type: 'number',
              description: 'Pipeline id',
            },
          },
          required: ['ref', 'pipeline_id'],
        },
        response: {
          200: {
            type: 'null',
            description: 'Pipeline started.',
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
            description: 'Unexpected error while starting pipeline.',
            type: 'null',
          },
        },
      },
    },
    async (request, reply) => {
      await startReplicationPipeline(request.params)
      return reply.send()
    }
  )

  app.get<{ Params: RefPipelineIdParams }>(
    '/:ref/pipelines/:pipeline_id/status',
    {
      schema: {
        description: 'Get the current pipeline status.',
        tags: ['Replication'],
        operationId: 'ReplicationPipelinesController_getPipelineStatus',
        params: {
          type: 'object',
          properties: {
            ref: {
              type: 'string',
              description: 'Project ref',
            },
            pipeline_id: {
              type: 'number',
              description: 'Pipeline id',
            },
          },
          required: ['ref', 'pipeline_id'],
        },
        response: {
          200: {
            $ref: 'ReplicationPipelineStatusResponse',
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
            description: 'Unexpected error while retrieving pipeline status.',
            type: 'null',
          },
        },
      },
    },
    async (request, reply) => {
      const status = await getReplicationPipelineStatus(request.params)
      return reply.send(status)
    }
  )

  app.post<{ Params: RefPipelineIdParams }>(
    '/:ref/pipelines/:pipeline_id/stop',
    {
      schema: {
        description: 'Stop the pipeline.',
        tags: ['Replication'],
        operationId: 'ReplicationPipelinesController_stopPipeline',
        params: {
          type: 'object',
          properties: {
            ref: {
              type: 'string',
              description: 'Project ref',
            },
            pipeline_id: {
              type: 'number',
              description: 'Pipeline id',
            },
          },
          required: ['ref', 'pipeline_id'],
        },
        response: {
          200: {
            type: 'null',
            description: 'Pipeline stopped.',
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
            description: 'Unexpected error while stopping pipeline.',
            type: 'null',
          },
        },
      },
    },
    async (request, reply) => {
      await stopReplicationPipeline(request.params)
      return reply.send()
    }
  )

  app.get<{ Params: RefPipelineIdParams }>(
    '/:ref/pipelines/:pipeline_id/version',
    {
      schema: {
        description: 'Get the current pipeline version.',
        tags: ['Replication'],
        operationId: 'ReplicationPipelinesController_getPipelineVersion',
        params: {
          type: 'object',
          properties: {
            ref: {
              type: 'string',
              description: 'Project ref',
            },
            pipeline_id: {
              type: 'number',
              description: 'Pipeline id',
            },
          },
          required: ['ref', 'pipeline_id'],
        },
        response: {
          200: {
            $ref: 'ReplicationPipelineVersionResponse',
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
            description: 'Unexpected error while retrieving pipeline version.',
            type: 'null',
          },
        },
      },
    },
    async (request, reply) => {
      const version = await getReplicationPipelineVersion(request.params)
      return reply.send(version)
    }
  )

  app.post<{
    Params: RefPipelineIdParams
    Body: UpdateReplicationPipelineVersionBody
  }>(
    '/:ref/pipelines/:pipeline_id/version',
    {
      schema: {
        description: 'Update the pipeline to a new version.',
        tags: ['Replication'],
        operationId: 'ReplicationPipelinesController_updatePipelineVersion',
        params: {
          type: 'object',
          properties: {
            ref: {
              type: 'string',
              description: 'Project ref',
            },
            pipeline_id: {
              type: 'string',
              description: 'Pipeline id',
            },
          },
          required: ['ref', 'pipeline_id'],
        },
        body: {
          $ref: 'UpdateReplicationPipelineVersionBody',
        },
        response: {
          200: {
            type: 'null',
            description: 'Pipeline version updated.',
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
            description: 'Unexpected error while updating pipeline version.',
            type: 'null',
          },
        },
      },
    },
    async (request, reply) => {
      await updateReplicationPipelineVersion(request.params, request.body)
      return reply.send()
    }
  )

  app.get<{ Params: { ref: string } }>(
    '/:ref/sources',
    {
      schema: {
        description: 'List all sources for the project.',
        tags: ['Replication'],
        operationId: 'ReplicationSourcesController_getSources',
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
          200: {
            $ref: 'ReplicationSourcesResponse',
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
            description: 'Unexpected error while listing sources.',
            type: 'null',
          },
        },
      },
    },
    async (request, reply) => {
      const sources = await getReplicationSources(request.params.ref)
      return reply.send(sources)
    }
  )

  app.post<{ Params: { ref: string } }>(
    '/:ref/sources',
    {
      schema: {
        description: 'Create a source for the project.',
        tags: ['Replication'],
        operationId: 'ReplicationSourcesController_createSource',
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
          200: {
            $ref: 'CreateSourceResponse',
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
            description: 'Unexpected error while creating source.',
            type: 'null',
          },
        },
      },
    },
    async (request, reply) => {
      const result = await createReplicationSource(request.params.ref)
      return reply.send(result)
    }
  )

  app.get<{ Params: RefSourceIdParams }>(
    '/:ref/sources/:source_id/publications',
    {
      schema: {
        description: 'List publications for a source.',
        tags: ['Replication'],
        operationId: 'ReplicationSourcesController_getPublications',
        params: {
          type: 'object',
          properties: {
            ref: {
              type: 'string',
              description: 'Project ref',
            },
            source_id: {
              type: 'number',
              description: 'Source id',
            },
          },
          required: ['ref', 'source_id'],
        },
        response: {
          200: {
            $ref: 'ReplicationPublicationsResponse',
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
            description: 'Unexpected error while listing publications.',
            type: 'null',
          },
        },
      },
    },
    async (request, reply) => {
      const publications = await getReplicationPublications(request.params)
      return reply.send(publications)
    }
  )

  app.post<{
    Params: RefSourceIdParams
    Body: CreateReplicationPublicationBody
  }>(
    '/:ref/sources/:source_id/publications',
    {
      schema: {
        description: 'Create a publication for a source.',
        tags: ['Replication'],
        operationId: 'ReplicationSourcesController_createPublication',
        params: {
          type: 'object',
          properties: {
            ref: {
              type: 'string',
              description: 'Project ref',
            },
            source_id: {
              type: 'number',
              description: 'Source id',
            },
          },
          required: ['ref', 'source_id'],
        },
        body: {
          $ref: 'CreateReplicationPublicationBody',
        },
        response: {
          200: {
            type: 'null',
            description: 'Publication created.',
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
            description: 'Unexpected error while creating publication.',
            type: 'null',
          },
        },
      },
    },
    async (request, reply) => {
      await createReplicationPublication(request.params, request.body)
      return reply.send()
    }
  )

  app.post<{
    Params: RefSourceIdPublicationNameParams
    Body: UpdateReplicationPublicationBody
  }>(
    '/:ref/sources/:source_id/publications/:publication_name',
    {
      schema: {
        description: 'Update a publication for a source.',
        tags: ['Replication'],
        operationId: 'ReplicationSourcesController_updatePublication',
        params: {
          type: 'object',
          properties: {
            ref: {
              type: 'string',
              description: 'Project ref',
            },
            source_id: {
              type: 'number',
              description: 'Source id',
            },
            publication_name: {
              type: 'string',
              description: 'Publication name',
            },
          },
          required: ['ref', 'source_id', 'publication_name'],
        },
        body: {
          $ref: 'UpdateReplicationPublicationBody',
        },
        response: {
          200: {
            type: 'null',
            description: 'Publication updated.',
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
            description: 'Unexpected error while updating publication.',
            type: 'null',
          },
        },
      },
    },
    async (request, reply) => {
      await updateReplicationPublication(request.params, request.body)
      return reply.send()
    }
  )

  app.delete<{
    Params: RefSourceIdPublicationNameParams
  }>(
    '/:ref/sources/:source_id/publications/:publication_name',
    {
      schema: {
        description: 'Delete a publication for a source.',
        tags: ['Replication'],
        operationId: 'ReplicationSourcesController_deletePublication',
        params: {
          type: 'object',
          properties: {
            ref: {
              type: 'string',
              description: 'Project ref',
            },
            source_id: {
              type: 'number',
              description: 'Source id',
            },
            publication_name: {
              type: 'string',
              description: 'Publication name',
            },
          },
          required: ['ref', 'source_id', 'publication_name'],
        },
        response: {
          200: {
            type: 'null',
            description: 'Publication deleted.',
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
            description: 'Unexpected error while deleting publication.',
            type: 'null',
          },
        },
      },
    },
    async (request, reply) => {
      await deleteReplicationPublication(request.params)
      return reply.send()
    }
  )

  app.get<{ Params: RefIdParams }>(
    '/:ref/sources/:source_id/tables',
    {
      schema: {
        description: 'List tables available for a source.',
        tags: ['Replication'],
        operationId: 'ReplicationSourcesController_getTables',
        params: {
          type: 'object',
          properties: {
            ref: {
              type: 'string',
              description: 'Project ref',
            },
            source_id: {
              type: 'number',
              description: 'Source id',
            },
          },
          required: ['ref', 'source_id'],
        },
        response: {
          200: {
            $ref: 'ReplicationTablesResponse',
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
            description: 'Unexpected error while listing tables.',
            type: 'null',
          },
        },
      },
    },
    async (request, reply) => {
      const tables = await getReplicationTables(request.params)
      return reply.send(tables)
    }
  )

  app.post<{ Params: { ref: string } }>(
    '/:ref/tenants-sources',
    {
      schema: {
        description: 'Create a replication tenant and source.',
        tags: ['Replication'],
        operationId: 'ReplicationTenantsSourcesController_createTenantSource',
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
          200: {
            $ref: 'CreateTenantSourceResponse',
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
            description: 'Unexpected error while creating tenant or source.',
            type: 'null',
          },
        },
      },
    },
    async (request, reply) => {
      const result = await createTenantSource(request.params.ref)
      return reply.send(result)
    }
  )
}

export default replicationRoutes
