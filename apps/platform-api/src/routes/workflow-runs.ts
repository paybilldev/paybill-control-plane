import type { FastifyPluginAsync } from 'fastify'
import { WorkflowRunResponse } from '../openapi/index.js'

interface ListWorkflowRunsQuery {
  /** @description Branch ID */
  branch_id?: string
  limit?: number
  offset?: number
  /** @description Project ref */
  project_ref?: string
}

interface CountWorkflowRunsQuery {
  /** @description Branch ID */
  branch_id?: string
  /** @description Project ref */
  project_ref?: string
}

async function getWorkflowRunLogs(workflowRunId: string): Promise<string> {
  return ''
}

async function countWorkflowRuns(query: CountWorkflowRunsQuery): Promise<number> {
  return 0
}

async function listWorkflowRuns(query: ListWorkflowRunsQuery): Promise<WorkflowRunResponse> {
  return [] as WorkflowRunResponse
}

const workflowRunsRoutes: FastifyPluginAsync = async (app) => {
  app.head<{ Querystring: CountWorkflowRunsQuery }>(
    '/',
    {
      schema: {
        description: 'Count the number of workflow runs for the given branch',
        tags: ['WorkflowRuns'],
        operationId: 'WorkflowRunController_countWorkflowRuns',
        querystring: {
          type: 'object',
          properties: {
            branch_id: {
              type: 'string',
              description: 'Branch ID',
            },
            project_ref: {
              type: 'string',
              description: 'Project ref',
            },
          },
        },
        response: {
          200: {
            description: 'Total count returned in X-Total-Count header',
            type: 'null',
          },
          500: {
            description: 'Failed to count workflow runs',
            type: 'null',
          },
        },
      },
    },
    async (request, reply) => {
      const total = await countWorkflowRuns(request.query)
      reply.header('X-Total-Count', total)
      return reply.send()
    }
  )

  app.get<{ Querystring: ListWorkflowRunsQuery }>(
    '/',
    {
      schema: {
        description: 'Get a list of workflow runs',
        tags: ['WorkflowRuns'],
        operationId: 'WorkflowRunController_listWorkflowRuns',
        querystring: {
          type: 'object',
          properties: {
            branch_id: {
              type: 'string',
              description: 'Branch ID',
            },
            limit: {
              type: 'number',
              description: 'Limit',
            },
            offset: {
              type: 'number',
              description: 'Offset',
            },
            project_ref: {
              type: 'string',
              description: 'Project ref',
            },
          },
        },
        response: {
          200: {
            $ref: 'WorkflowRunResponse',
          },
          500: {
            description: 'Failed to list workflow runs',
            type: 'null',
          },
        },
      },
    },
    async (request, reply) => {
      const runs = await listWorkflowRuns(request.query)
      return reply.send(runs)
    }
  )

  app.get<{ Params: { workflow_run_id: string } }>(
    '/:workflow_run_id/logs',
    {
      schema: {
        description: 'Get the logs of a workflow run',
        tags: ['WorkflowRuns'],
        operationId: 'WorkflowRunController_getWorkflowRunLogs',
        params: {
          type: 'object',
          properties: {
            workflow_run_id: {
              type: 'string',
              description: 'Workflow run ID',
            },
          },
          required: ['workflow_run_id'],
        },
        response: {
          200: {
            description: 'Workflow run logs',
            type: 'string',
          },
          500: {
            description: 'Failed to get workflow run logs',
            type: 'null',
          },
        },
      },
    },
    async (request, reply) => {
      const logs = await getWorkflowRunLogs(request.params.workflow_run_id)
      reply.type('text/plain')
      return reply.send(logs)
    }
  )
}

export default workflowRunsRoutes
