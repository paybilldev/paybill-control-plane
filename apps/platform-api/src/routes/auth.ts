import type { FastifyPluginAsync } from 'fastify'
import {
  CreateUserBody,
  CreateUserReponse,
  AuthConfigResponse,
  UpdateAuthConfigBody,
  UpdateAuthConfigHooksBody,
  UpdateUserBody,
  UpdateUserReponse,
  UserBody,
  ValidateSpamBody,
  ValidateSpamResponse,
  UpdateEmailBody,
  SignUpBody,
  ResetPasswordBody,
} from '../openapi/index.js'

interface DeleteUserQuery {
  soft_delete?: boolean
}

async function signUpUser(body: SignUpBody): Promise<void> {
  // Implement signup logic (store user, hash password, etc.)
}

async function resetPassword(body: ResetPasswordBody): Promise<void> {
  // Implement reset password logic (send email with link, etc.)
}

async function updateEmail(body: UpdateEmailBody): Promise<void> {
  // update user email in auth system
}
async function getAuthConfig(ref: string): Promise<AuthConfigResponse> {
  // TODO:
  return {} as AuthConfigResponse
}

export const updateAuthConfig = async (
  ref: string,
  body: UpdateAuthConfigBody
): Promise<AuthConfigResponse> => {
  // TODO:
  return {} as AuthConfigResponse
}

export const updateConfigHooks = async (
  ref: string,
  body: UpdateAuthConfigHooksBody
): Promise<AuthConfigResponse> => {
  //TODO:
  return {} as AuthConfigResponse
}

export const sendInvite = async (ref: string, body: UserBody): Promise<null> => {
  // TODO:
  return null
}

export const sendMagicLink = async (ref: string, body: UserBody): Promise<null> => {
  // TODO:
  return null
}

export const sendOtp = async (ref: string, body: UserBody): Promise<null> => {
  // TODO:
  return null
}

export const sendRecover = async (ref: string, body: UserBody): Promise<null> => {
  // TODO:
  return null
}

export const deleteUserById = async (ref: string, id: string): Promise<null> => {
  // TODO:
  return null
}

async function getTemplate(ref: string, templateName: string): Promise<null> {
  // TODO:
  return null
}

export const createUser = async (ref: string, body: CreateUserBody): Promise<CreateUserReponse> => {
  // TODO:
  return {} as CreateUserReponse
}

export const updateUserById = async (
  ref: string,
  id: string,
  body: UpdateUserBody
): Promise<UpdateUserReponse> => {
  // TODO:
  return {} as UpdateUserReponse
}

export const deleteFactors = async (ref: string, id: string): Promise<null> => {
  // TODO:
  return null
}

export const validateSpam = async (
  ref: string,
  body: ValidateSpamBody
): Promise<ValidateSpamResponse> => {
  // TODO:
  return {} as ValidateSpamResponse
}

const authRoutes: FastifyPluginAsync = async (app) => {
  app.get<{ Params: { ref: string } }>(
    '/:ref/config',
    {
      schema: {
        description: 'Retrieve Auth configuration for a given project reference.',
        tags: ['Auth'],
        operationId: 'AuthConfigController_getAuthConfig',
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
            $ref: 'AuthConfigResponse',
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
            description: 'Failed to retrieve Auth config',
            type: 'null',
          },
        },
      },
    },
    async (request, reply) => {
      const config = await getAuthConfig(request.params.ref)
      return reply.send(config)
    }
  )

  app.patch<{ Params: { ref: string }; Body: UpdateAuthConfigBody }>(
    '/:ref/config',
    {
      schema: {
        description: 'Update Auth configuration for a given project reference.',
        tags: ['Auth'],
        operationId: 'AuthConfigController_updateAuthConfig',
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
          $ref: 'UpdateAuthConfigBody',
        },
        response: {
          200: {
            $ref: 'AuthConfigResponse',
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
            description: 'Failed to update Auth config',
            type: 'null',
          },
        },
      },
    },
    async (request, reply) => {
      const config = await updateAuthConfig(request.params.ref, request.body)
      return reply.send(config)
    }
  )

  app.patch<{ Params: { ref: string }; Body: UpdateAuthConfigHooksBody }>(
    '/:ref/config/hooks',
    {
      schema: {
        description: 'Updates Auth config hooks.',
        tags: ['Auth'],
        operationId: 'AuthConfigController_updateAuthConfigHooks',
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
          $ref: 'UpdateAuthConfigHooksBody',
        },
        response: {
          200: {
            $ref: 'AuthConfigResponse',
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
            description: 'Failed to update Auth config hooks',
            type: 'null',
          },
        },
      },
    },
    async (request, reply) => {
      const config = await updateConfigHooks(request.params.ref, request.body)
      return reply.send(config)
    }
  )

  app.post<{ Params: { ref: string }; Body: UserBody }>(
    '/:ref/invite',
    {
      schema: {
        description: 'Sends an invite to the given email.',
        tags: ['Auth'],
        operationId: 'AuthInviteController_sendInvite',
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
          $ref: 'UserBody',
        },
        response: {
          201: {
            description: 'Successfully sent invite',
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
            description: 'Failed to send invite',
            type: 'null',
          },
        },
      },
    },
    async (request, reply) => {
      const config = await sendInvite(request.params.ref, request.body)
      return reply.send(config)
    }
  )

  app.post<{ Params: { ref: string }; Body: UserBody }>(
    '/:ref/magiclink',
    {
      schema: {
        description: 'Sends a magic link to the given email.',
        tags: ['Auth'],
        operationId: 'MagicLinkController_sendMagicLink',
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
          $ref: 'UserBody',
        },
        response: {
          201: {
            description: 'Successfully sent invite',
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
            description: 'Failed to send a magic link to the given email',
            type: 'null',
          },
        },
      },
    },
    async (request, reply) => {
      const config = await sendMagicLink(request.params.ref, request.body)
      return reply.send(config)
    }
  )

  app.post<{ Params: { ref: string }; Body: UserBody }>(
    '/:ref/otp',
    {
      schema: {
        description: 'Sends an OTP to the given phone number.',
        tags: ['Auth'],
        operationId: 'OtpController_sendOtp',
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
          $ref: 'UserBody',
        },
        response: {
          201: {
            description: 'Successfully sent otp',
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
            description: 'Failed to send an OTP to the given phone number',
            type: 'null',
          },
        },
      },
    },
    async (request, reply) => {
      const config = await sendOtp(request.params.ref, request.body)
      return reply.send(config)
    }
  )

  app.post<{ Params: { ref: string }; Body: UserBody }>(
    '/:ref/recover',
    {
      schema: {
        description: 'Sends a recovery email to the given email.',
        tags: ['Auth'],
        operationId: 'RecoverController_sendRecover',
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
          $ref: 'UserBody',
        },
        response: {
          201: {
            description: 'Successfully sent recovery email',
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
            description: 'Failed to send a recovery email to the given email',
            type: 'null',
          },
        },
      },
    },
    async (request, reply) => {
      const config = await sendRecover(request.params.ref, request.body)
      return reply.send(config)
    }
  )

  app.get<{ Params: { ref: string; template: string } }>(
    '/:ref/templates/:template',
    {
      schema: {
        description: 'Gets Auth template.',
        tags: ['Auth'],
        operationId: 'TemplateController_getTemplate',
        params: {
          type: 'object',
          properties: {
            ref: {
              type: 'string',
              description: 'Project ref',
            },
            template: {
              type: 'string',
              enum: [
                'confirmation',
                'email-change',
                'invite',
                'magic-link',
                'recovery',
                'reauthentication',
                'password-changed-notification',
                'email-changed-notification',
                'phone-changed-notification',
                'mfa-factor-enrolled-notification',
                'mfa-factor-unenrolled-notification',
                'identity-linked-notification',
                'identity-unlinked-notification',
              ],
              description: 'Template name',
            },
          },
          required: ['ref', 'template'],
        },
        response: {
          200: {
            description: 'Successfully retrieved Auth template',
            type: 'object', // replace with actual template schema if you have it
          },
          500: {
            description: 'Failed to retrieve Auth template',
            type: 'object',
          },
        },
      },
    },
    async (request, reply) => {
      const config = await getTemplate(request.params.ref, request.params.template)
      return reply.send(config)
    }
  )

  app.post<{ Params: { ref: string }; Body: CreateUserBody }>(
    '/:ref/users',
    {
      schema: {
        description: 'Creates a new user.',
        tags: ['Auth'],
        operationId: 'UsersController_createUser',
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
          $ref: 'CreateUserBody',
        },
        response: {
          201: {
            $ref: 'CreateUserReponse',
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
            description: 'Failed to create user',
            type: 'null',
          },
        },
      },
    },
    async (request, reply) => {
      const config = await createUser(request.params.ref, request.body)
      return reply.send(config)
    }
  )

  app.delete<{ Params: { ref: string; id: string }; Query: DeleteUserQuery }>(
    '/:ref/users/:id',
    {
      schema: {
        description: 'Delete user with given ID.',
        tags: ['Auth'],
        operationId: 'UsersController_deleteUserById',
        params: {
          type: 'object',
          properties: {
            ref: {
              type: 'string',
              description: 'Project ref',
            },
            id: {
              type: 'string',
              description: 'User ID',
            },
          },
          required: ['ref', 'id'],
        },
        querystring: {
          type: 'object',
          properties: {
            soft_delete: {
              type: 'boolean',
              description: 'Whether to perform a soft delete (default: false)',
            },
          },
        },
        response: {
          200: {
            description: 'Successfully deleted user',
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
            description: 'Failed to delete user',
            type: 'null',
          },
        },
      },
    },
    async (request, reply) => {
      const config = await deleteUserById(request.params.ref, request.params.id)
      return reply.send(config)
    }
  )

  app.patch<{ Params: { ref: string; id: string }; Body: UpdateUserBody }>(
    '/:ref/users/:id',
    {
      schema: {
        description: 'Updates user with given ID.',
        tags: ['Auth'],
        operationId: 'UsersController_updateUserById',
        params: {
          type: 'object',
          properties: {
            ref: {
              type: 'string',
              description: 'Project ref',
            },
            id: {
              type: 'string',
              description: 'User ID',
            },
          },
          required: ['ref', 'id'],
        },
        body: {
          type: 'object',
          $ref: 'UpdateUserBody',
        },
        response: {
          200: {
            $ref: 'UpdateUserReponse',
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
            description: 'Failed to update user with given ID',
            type: 'null',
          },
        },
      },
    },
    async (request, reply) => {
      const config = await updateUserById(request.params.ref, request.params.id, request.body)
      return reply.send(config)
    }
  )

  app.delete<{ Params: { ref: string; id: string } }>(
    '/:ref/users/:id/factors',
    {
      schema: {
        description: 'Delete all factors associated to a user',
        tags: ['Auth'],
        operationId: 'FactorsController_deleteFactors',
        params: {
          type: 'object',
          properties: {
            ref: {
              type: 'string',
              description: 'Project ref',
            },
            id: {
              type: 'string',
              description: 'User ID',
            },
          },
          required: ['ref', 'id'],
        },
        response: {
          200: {
            description: 'Successfully deleted user factors',
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
            description: 'Failed to delete factors',
            type: 'null',
          },
        },
      },
    },
    async (request, reply) => {
      const config = await deleteFactors(request.params.ref, request.params.id)
      return reply.send(config)
    }
  )

  app.post<{ Params: { ref: string }; Body: ValidateSpamBody }>(
    '/:ref/validate/spam',
    {
      schema: {
        description: 'Validate spam based on the given email content.',
        tags: ['Auth'],
        operationId: 'ValidateController_validateSpam',
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
          $ref: 'ValidateSpamBody',
        },
        response: {
          200: {
            $ref: 'ValidateSpamResponse',
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
            description: 'Failed to validate spam based on the given email content',
            type: 'null',
          },
        },
      },
    },
    async (request, reply) => {
      const config = await validateSpam(request.params.ref, request.body)
      return reply.send(config)
    }
  )

  app.put<{ Body: UpdateEmailBody }>(
    '/update-email',
    {
      schema: {
        description: 'Updates a user email address',
        tags: ['Auth'],
        body: { $ref: 'UpdateEmailBody' },
        operationId: 'UpdateEmailController_updateEmail',
        response: {
          200: {
            description: 'Email updated successfully',
            type: 'null',
          },
        },
      },
    },
    async (request, reply) => {
      await updateEmail(request.body)
      return reply.send()
    }
  )

  app.post<{ Body: SignUpBody }>(
    '/signup',
    {
      schema: {
        description: 'Sign up with email and password',
        tags: ['Auth'],
        body: { $ref: 'SignUpBody' },
        operationId: 'SignUpController_signUp',
        response: {
          201: { description: 'User signed up successfully' },
        },
      },
    },
    async (request, reply) => {
      await signUpUser(request.body)
      return reply.status(201).send()
    }
  )

  app.post<{ Body: ResetPasswordBody }>(
    '/reset-password',
    {
      schema: {
        description: 'Reset password for email',
        tags: ['Auth'],
        operationId: 'ResetPasswordController_resetPassword',
        body: { $ref: 'ResetPasswordBody' },
        response: {
          201: { description: 'Reset password email sent' },
        },
      },
    },
    async (request, reply) => {
      await resetPassword(request.body)
      return reply.status(201).send()
    }
  )
}

export default authRoutes
