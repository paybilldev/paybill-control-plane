import type { FastifyPluginAsync } from 'fastify'
import {
  AccessControlPermission,
  AccessToken,
  AccessTokenList,
  CreateAccessTokenBody,
  CreateAccessTokenResponse,
  CreateScopedAccessTokenBody,
  CreateScopedAccessTokenResponse,
  GetScopedAccessTokenResponse,
  GetScopedAccessTokensResponse,
  ProfileResponse,
  UpdateProfileBody,
  UserAuditLogsResponse,
} from '../openapi/index.js'

interface AuditLogsQuery {
  /** @description End timestamp */
  iso_timestamp_end: string
  /** @description Start timestamp */
  iso_timestamp_start: string
}

export async function createScopedAccessToken(
  body: CreateScopedAccessTokenBody
): Promise<CreateScopedAccessTokenResponse> {
  // TODO:
  return {} as CreateScopedAccessTokenResponse
}

export async function getScopedAccessTokens(): Promise<GetScopedAccessTokensResponse> {
  // TODO:
  return {} as GetScopedAccessTokensResponse
}

export async function getPermissions(): Promise<AccessControlPermission> {
  // TODO:
  return [] as AccessControlPermission
}

export async function getUserAuditLogs(query: AuditLogsQuery): Promise<UserAuditLogsResponse> {
  // TODO:
  return {} as UserAuditLogsResponse
}

export async function getScopedAccessToken(id: string): Promise<GetScopedAccessTokenResponse> {
  // TODO:
  return {} as GetScopedAccessTokenResponse
}

export async function deleteScopedAccessToken(id: string): Promise<null> {
  // TODO:
  return null
}

export async function deleteAccessToken(id: string): Promise<AccessToken> {
  // TODO:
  return {} as AccessToken
}

export async function getAccessToken(id: string): Promise<AccessToken> {
  // TODO:
  return {} as AccessToken
}

export async function getAccessTokens(): Promise<AccessTokenList> {
  // TODO:
  return [] as AccessTokenList
}

export async function auditAccountLogin(): Promise<null> {
  // TODO:
  return null
}

export async function getProfile(): Promise<ProfileResponse> {
  // TODO:
  return {} as ProfileResponse
}

export async function createProfile(): Promise<ProfileResponse> {
  // TODO:
  return {} as ProfileResponse
}

export async function updateProfile(body: UpdateProfileBody): Promise<ProfileResponse> {
  // TODO:
  return {} as ProfileResponse
}

export async function createAccessToken(
  body: CreateAccessTokenBody
): Promise<CreateAccessTokenResponse> {
  // TODO:
  return {} as CreateAccessTokenResponse
}

export async function deleteProfile(): Promise<null> {
  // TODO:
  return null
}

const profileRoutes: FastifyPluginAsync = async (app) => {
  /** Gets the user's profile */
  app.get<{}>(
    '/',
    {
      schema: {
        description: "Gets the user's profile",
        tags: ['Profile'],
        operationId: 'ProfileController_getProfile',
        response: {
          200: { $ref: 'ProfileResponse' },
          500: {
            description: "Failed to retrieve user's profile",
          },
        },
      },
    },
    async (_request, reply) => {
      const profile = await getProfile()
      return reply.send(profile)
    }
  )

  /** Creates user's profile */
  app.post<{}>(
    '/',
    {
      schema: {
        description: "Creates user's profile",
        tags: ['Profile'],
        operationId: 'ProfileController_createProfile',
        response: {
          201: { $ref: 'ProfileResponse' },
          500: {
            description: "Failed to create user's profile",
          },
        },
      },
    },
    async (_request, reply) => {
      const profile = await createProfile()
      return reply.code(201).send(profile)
    }
  )

  /** Deletes user's profile */
  app.delete<{}>(
    '/',
    {
      schema: {
        description: "Deletes user's profile",
        tags: ['Profile'],
        operationId: 'ProfileController_deleteProfile',
        response: {
          200: { type: 'null' },
          403: { type: 'null' },
          500: {
            description: "Failed to delete user's profile",
          },
        },
      },
    },
    async (_request, reply) => {
      await deleteProfile()
      return reply.code(200).send()
    }
  )

  /** Updates user's profile */
  app.patch<{ Body: UpdateProfileBody }>(
    '/',
    {
      schema: {
        description: "Updates user's profile",
        tags: ['Profile'],
        operationId: 'ProfileController_updateProfile',
        body: { $ref: 'UpdateProfileBody' },
        response: {
          200: { $ref: 'ProfileResponse' },
          500: {
            description: "Failed to update user's profile",
          },
        },
      },
    },
    async (request, reply) => {
      const profile = await updateProfile(request.body)
      return reply.send(profile)
    }
  )

  /** Gets the user's access tokens */
  app.get<{}>(
    '/access-tokens',
    {
      schema: {
        description: "Gets the user's access tokens",
        tags: ['Profile'],
        operationId: 'AccessTokensController_getAccessTokens',
        response: {
          200: {
            $ref: 'AccessTokenList',
          },
          500: {
            description: "Failed to get user's access tokens",
          },
        },
      },
    },
    async (_request, reply) => {
      const tokens = await getAccessTokens()
      return reply.send(tokens)
    }
  )

  /** Creates a new access token */
  app.post<{ Body: CreateAccessTokenBody }>(
    '/access-tokens',
    {
      schema: {
        description: 'Creates a new access token',
        tags: ['Profile'],
        operationId: 'AccessTokensController_createAccessToken',
        body: { $ref: 'CreateAccessTokenBody' },
        response: {
          201: { $ref: 'CreateAccessTokenResponse' },
          500: {
            description: 'Failed to create access token',
          },
        },
      },
    },
    async (request, reply) => {
      const token = await createAccessToken(request.body)
      return reply.code(201).send(token)
    }
  )

  /** Gets the access token with the given ID */
  app.get<{ Params: { id: string } }>(
    '/access-tokens/:id',
    {
      schema: {
        description: 'Gets the access token with the given ID',
        tags: ['Profile'],
        operationId: 'AccessTokensController_getAccessToken',
        params: {
          type: 'object',
          properties: {
            id: { type: 'string' },
          },
          required: ['id'],
        },
        response: {
          200: { $ref: 'AccessToken' },
          500: {
            description: 'Failed to get access token',
          },
        },
      },
    },
    async (request, reply) => {
      const token = await getAccessToken(request.params.id)
      return reply.send(token)
    }
  )

  /** Deletes the access token with the given ID */
  app.delete<{ Params: { id: string } }>(
    '/access-tokens/:id',
    {
      schema: {
        description: 'Deletes the access token with the given ID',
        tags: ['Profile'],
        operationId: 'AccessTokensController_deleteAccessToken',
        params: {
          type: 'object',
          properties: {
            id: { type: 'string' },
          },
          required: ['id'],
        },
        response: {
          200: { $ref: 'AccessToken' },
          500: {
            description: 'Failed to delete access token',
          },
        },
      },
    },
    async (request, reply) => {
      const token = await deleteAccessToken(request.params.id)
      return reply.send(token)
    }
  )

  /** Gets a user's audit logs */
  app.get<{ Querystring: AuditLogsQuery }>(
    '/audit',
    {
      schema: {
        description: "Gets a user's audit logs",
        tags: ['Profile'],
        operationId: 'UserAuditLogsController_getAuditLogs',
        querystring: {
          type: 'object',
          properties: {
            iso_timestamp_start: {
              type: 'string',
              description: 'Start timestamp',
            },
            iso_timestamp_end: {
              type: 'string',
              description: 'End timestamp',
            },
          },
          required: ['iso_timestamp_start', 'iso_timestamp_end'],
        },
        response: {
          200: { $ref: 'UserAuditLogsResponse' },
          500: {
            description: "Failed to get a user's audit logs",
          },
        },
      },
    },
    async (request, reply) => {
      const logs = await getUserAuditLogs(request.query)
      return reply.send(logs)
    }
  )

  /** Logged into account */
  app.post<{}>(
    '/audit-login',
    {
      schema: {
        description: 'Logged into account',
        tags: ['Profile'],
        operationId: 'ProfileController_auditAccountLogin',
        response: {
          201: { type: 'null' },
        },
      },
    },
    async (_request, reply) => {
      await auditAccountLogin()
      return reply.code(201).send()
    }
  )

  /** Gets all the user's permissions */
  app.get<{}>(
    '/permissions',
    {
      schema: {
        description: "Gets all the user's permissions",
        tags: ['Profile'],
        operationId: 'PermissionsController_getPermissions',
        response: {
          200: {
            $ref: 'AccessControlPermission',
          },
          500: {
            description: 'Failed to retrieve permissions',
          },
        },
      },
    },
    async (_request, reply) => {
      const permissions = await getPermissions()
      return reply.send(permissions)
    }
  )

  /** Gets the user's scoped access tokens */
  app.get<{}>(
    '/scoped-access-tokens',
    {
      schema: {
        description: "Gets the user's scoped access tokens",
        tags: ['Profile'],
        operationId: 'ScopedAccessTokensController_getAccessTokens',
        response: {
          200: { $ref: 'GetScopedAccessTokensResponse' },
          500: {
            description: "Failed to get user's scoped access tokens",
          },
        },
      },
    },
    async (_request, reply) => {
      const tokens = await getScopedAccessTokens()
      return reply.send(tokens)
    }
  )

  /** Creates a new scoped access token */
  app.post<{ Body: CreateScopedAccessTokenBody }>(
    '/scoped-access-tokens',
    {
      schema: {
        description: 'Creates a new scoped access token',
        tags: ['Profile'],
        operationId: 'ScopedAccessTokensController_createAccessToken',
        body: { $ref: 'CreateScopedAccessTokenBody' },
        response: {
          201: { $ref: 'CreateScopedAccessTokenResponse' },
          500: {
            description: 'Failed to create scoped access token',
          },
        },
      },
    },
    async (request, reply) => {
      const token = await createScopedAccessToken(request.body)
      return reply.code(201).send(token)
    }
  )

  /** Gets the scoped access token with the given ID */
  app.get<{ Params: { id: string } }>(
    '/scoped-access-tokens/:id',
    {
      schema: {
        description: 'Gets the scoped access token with the given ID',
        tags: ['Profile'],
        operationId: 'ScopedAccessTokensController_getAccessToken',
        params: {
          type: 'object',
          properties: {
            id: { type: 'string' },
          },
          required: ['id'],
        },
        response: {
          200: { $ref: 'GetScopedAccessTokenResponse' },
          500: {
            description: 'Failed to get scoped access token',
          },
        },
      },
    },
    async (request, reply) => {
      const token = await getScopedAccessToken(request.params.id)
      return reply.send(token)
    }
  )

  /** Deletes the scoped access token with the given ID */
  app.delete<{ Params: { id: string } }>(
    '/scoped-access-tokens/:id',
    {
      schema: {
        description: 'Deletes the scoped access token with the given ID',
        tags: ['Profile'],
        operationId: 'ScopedAccessTokensController_deleteAccessToken',
        params: {
          type: 'object',
          properties: {
            id: { type: 'string' },
          },
          required: ['id'],
        },
        response: {
          200: { type: 'null' },
          500: {
            description: 'Failed to delete scoped access token',
          },
        },
      },
    },
    async (request, reply) => {
      await deleteScopedAccessToken(request.params.id)
      return reply.code(200).send()
    }
  )
}

export default profileRoutes
