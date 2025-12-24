import type { FastifyPluginAsync } from 'fastify'
import {
  CreateProjectBody,
  CreateProjectResponse,
  ProjectDetailResponse,
  ProjectInfo,
  ProjectRefResponse,
  ProjectResourceWarningsResponse,
  RemoveProjectResponse,
  UpdateProjectBody,
} from '../openapi/index.js'

async function getProject(ref: string): Promise<ProjectDetailResponse> {
  return {} as ProjectDetailResponse
}

async function deleteProject(ref: string): Promise<RemoveProjectResponse> {
  return {} as RemoveProjectResponse
}

async function updateProject(ref: string, body: UpdateProjectBody): Promise<ProjectRefResponse> {
  return {} as ProjectRefResponse
}

async function getProjectsResourceWarnings(
  ref?: string,
  slug?: string
): Promise<ProjectResourceWarningsResponse> {
  // fetch warnings from database or API
  return [] as ProjectResourceWarningsResponse
}
async function createProject(body: CreateProjectBody): Promise<CreateProjectResponse> {
  // create project and return response
  return {} as CreateProjectResponse
}
async function getProjects(): Promise<ProjectInfo> {
  // fetch projects from database or API
  return {} as ProjectInfo
}

const projectRoutes: FastifyPluginAsync = async (app) => {
  app.get<{}>(
    '/',
    {
      schema: {
        description:
          'Gets all projects that belong to the authenticated user. Only returns the minimal project info.',
        tags: ['Projects'],
        operationId: 'ProjectsController_getProjects',
        response: {
          200: {
            $ref: 'ProjectInfo',
          },
        },
      },
    },
    async (request, reply) => {
      const projects = await getProjects() // implement this
      return reply.send(projects)
    }
  )

  app.post<{ Body: CreateProjectBody }>(
    '/',
    {
      schema: {
        description: 'Creates a project',
        tags: ['Projects'],
        operationId: 'ProjectsController_createProject',
        body: { $ref: 'CreateProjectBody' },
        response: {
          201: { $ref: 'CreateProjectResponse' },
        },
      },
    },
    async (request, reply) => {
      const project = await createProject(request.body) // implement this
      return reply.status(201).send(project)
    }
  )

  app.get<{
    Querystring: {
      /** @description Project ref */
      ref?: string
      /** @description Organization slug */
      slug?: string
    }
  }>(
    '/projects-resource-warnings',
    {
      schema: {
        description:
          'Gets resource warnings for all projects accessible by the user. Only returns the minimal project info.',
        tags: ['Projects'],
        operationId: 'ProjectsResourceWarningsController_getProjectsResourceWarnings',
        querystring: {
          type: 'object',
          properties: {
            ref: {
              type: 'string',
              description: 'Project ref',
            },
            slug: {
              type: 'string',
              description: 'Organization slug',
            },
          },
        },
        response: {
          200: {
            $ref: 'ProjectResourceWarningsResponse',
          },
        },
      },
    },
    async (request, reply) => {
      const { ref, slug } = request.query
      const warnings = await getProjectsResourceWarnings(ref, slug) // implement this
      return reply.send(warnings)
    }
  )

  app.get<{ Params: { ref: string } }>(
    '/:ref',
    {
      schema: {
        description: 'Gets a specific project that belongs to the authenticated user',
        tags: ['Projects'],
        operationId: 'ProjectsRefController_getProject',
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
          200: { $ref: 'ProjectDetailResponse' },
          401: { description: 'Unauthorized', type: 'null' },
          403: { description: 'Forbidden', type: 'null' },
          429: { description: 'Rate limit exceeded', type: 'null' },
        },
      },
    },
    async (request, reply) => {
      const project = await getProject(request.params.ref)
      return reply.send(project)
    }
  )

  // DELETE /:ref
  app.delete<{ Params: { ref: string } }>(
    '/:ref',
    {
      schema: {
        description: 'Deletes the given project',
        tags: ['Projects'],
        operationId: 'ProjectsRefController_deleteProject',
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
          200: { $ref: 'RemoveProjectResponse' },
          401: { description: 'Unauthorized', type: 'null' },
          403: { description: 'Forbidden', type: 'null' },
          429: { description: 'Rate limit exceeded', type: 'null' },
        },
      },
    },
    async (request, reply) => {
      const removed = await deleteProject(request.params.ref) // implement
      return reply.send(removed)
    }
  )

  // PATCH /:ref
  app.patch<{ Params: { ref: string }; Body: UpdateProjectBody }>(
    '/:ref',
    {
      schema: {
        description: 'Updates the given project',
        tags: ['Projects'],
        operationId: 'ProjectsRefController_updateProject',
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
        body: { $ref: 'UpdateProjectBody' },
        response: {
          200: { $ref: 'ProjectRefResponse' },
          401: { description: 'Unauthorized', type: 'null' },
          403: { description: 'Forbidden', type: 'null' },
          429: { description: 'Rate limit exceeded', type: 'null' },
          500: { description: 'Failed to update project', type: 'null' },
        },
      },
    },
    async (request, reply) => {
      const updated = await updateProject(request.params.ref, request.body) // implement
      return reply.send(updated)
    }
  )
}

export default projectRoutes
