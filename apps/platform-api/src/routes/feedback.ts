import type { FastifyPluginAsync } from 'fastify'
import {
  SendDocsFeedbackBody,
  SendExitSurveyBody,
  SendFeedbackBody,
  SendFeedbackResponse,
  SendUpgradeSurveyBody,
  UpdateConversationCustomFieldsBody,
} from '../openapi/index.js'

async function updateConversationCustomFields(
  conversationId: string,
  body: UpdateConversationCustomFieldsBody
): Promise<void> {
  // integrate with Front API / feedback system
}

export const sendUpgradeSurvey = async (
  body: SendUpgradeSurveyBody
): Promise<SendFeedbackResponse> => {
  // TODO:
  return {} as SendFeedbackResponse
}

export const sendDocsFeedback = async (
  body: SendDocsFeedbackBody
): Promise<SendFeedbackResponse> => {
  // TODO:
  return {} as SendFeedbackResponse
}

export const sendExitSurvey = async (body: SendExitSurveyBody): Promise<SendFeedbackResponse> => {
  // TODO:
  return {} as SendFeedbackResponse
}

export const sendFeedback = async (body: SendFeedbackBody): Promise<SendFeedbackResponse> => {
  // TODO:
  return {} as SendFeedbackResponse
}

const feedbackRoutes: FastifyPluginAsync = async (app) => {
  app.patch<{
    Params: { conversation_id: string }
    Body: UpdateConversationCustomFieldsBody
  }>(
    '/conversations/:conversation_id/custom-fields',
    {
      schema: {
        description: 'Update custom fields for a Front conversation',
        tags: ['Feedback'],
        operationId: 'LinkConversationController_updateConversationCustomFields',
        params: {
          type: 'object',
          properties: {
            conversation_id: {
              type: 'string',
              description: 'Conversation ID',
            },
          },
          required: ['conversation_id'],
        },
        body: { $ref: 'UpdateConversationCustomFieldsBody' },
        response: {
          200: { $ref: 'UpdateConversationCustomFieldsResponse' },
          500: {
            description: 'Failed to update conversation custom fields',
            type: 'null',
          },
        },
      },
    },
    async (request, reply) => {
      await updateConversationCustomFields(request.params.conversation_id, request.body)

      return reply.status(200).send({ result: 'success' })
    }
  )

  app.post<{ Body: SendDocsFeedbackBody }>(
    '/docs',
    {
      schema: {
        description: 'Send feedback on docs',
        tags: ['Feedback'],
        operationId: 'SendFeedbackController_sendDocsFeedback',
        body: {
          type: 'object',
          $ref: 'SendDocsFeedbackBody',
        },
        response: {
          201: {
            $ref: 'SendFeedbackResponse',
          },
          500: {
            description: 'Failed to send feedback for docs',
            type: 'null',
          },
        },
      },
    },
    async (request, reply) => {
      const config = await sendDocsFeedback(request.body)
      return reply.send(config)
    }
  )

  app.post<{ Body: SendExitSurveyBody }>(
    '/downgrade',
    {
      schema: {
        description: 'Send exit survey to HubSpot and survey_responses table',
        tags: ['Feedback'],
        operationId: 'SendFeedbackController_sendExitSurvey',
        body: {
          type: 'object',
          $ref: 'SendExitSurveyBody',
        },
        response: {
          201: {
            $ref: 'SendFeedbackResponse',
          },
          500: {
            description: 'Failed to send exit survey',
            type: 'null',
          },
        },
      },
    },
    async (request, reply) => {
      const config = await sendExitSurvey(request.body)
      return reply.send(config)
    }
  )

  app.post<{ Body: SendFeedbackBody }>(
    '/send',
    {
      schema: {
        description: 'Send feedback',
        tags: ['Feedback'],
        operationId: 'SendFeedbackController_sendFeedback',
        body: {
          type: 'object',
          $ref: 'SendFeedbackBody',
        },
        response: {
          201: {
            $ref: 'SendFeedbackResponse',
          },
          500: {
            description: 'Failed to send feedback',
            type: 'null',
          },
        },
      },
    },
    async (request, reply) => {
      const config = await sendFeedback(request.body)
      return reply.send(config)
    }
  )

  app.post<{ Body: SendUpgradeSurveyBody }>(
    '/upgrade',
    {
      schema: {
        description: 'Send upgrade survey to survey_responses table',
        tags: ['Feedback'],
        operationId: 'SendFeedbackController_sendUpgradeSurvey',
        body: {
          type: 'object',
          $ref: 'SendUpgradeSurveyBody',
        },
        response: {
          201: {
            $ref: 'SendFeedbackResponse',
          },
          500: {
            description: 'Failed to send upgrade survey',
            type: 'null',
          },
        },
      },
    },
    async (request, reply) => {
      const config = await sendUpgradeSurvey(request.body)
      return reply.send(config)
    }
  )
}

export default feedbackRoutes
