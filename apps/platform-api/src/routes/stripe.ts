import type { FastifyPluginAsync } from 'fastify'
import { OverdueInvoiceCount, SetupIntentRequest, SetupIntentResponse } from '../openapi/index.js'

async function setUpPaymentMethod(body: SetupIntentRequest): Promise<SetupIntentResponse> {
  // Initiate setup intent via Stripe API
  return {} as SetupIntentResponse
}
async function getOverdueInvoices(): Promise<OverdueInvoiceCount> {
  // Fetch overdue invoices from Stripe API
  return [] as OverdueInvoiceCount
}

const stripeRoutes: FastifyPluginAsync = async (app) => {
  app.get<{}>(
    '/invoices/overdue',
    {
      schema: {
        description:
          'Gets information about overdue invoices that relate to the authenticated user',
        tags: ['Stripe'],
        operationId: 'InvoicesController_getOverdueInvoices',
        response: {
          200: {
            $ref: 'OverdueInvoiceCount',
          },
        },
      },
    },
    async (_request, reply) => {
      const overdueInvoices = await getOverdueInvoices()
      return reply.send(overdueInvoices)
    }
  )

  /**
   * POST /setup-intent
   * Initiates payment method setup
   */
  app.post<{
    Body: SetupIntentRequest
  }>(
    '/setup-intent',
    {
      schema: {
        description: 'Initiated payment method setup',
        tags: ['Stripe'],
        operationId: 'SetupIntentController_setUpPaymentMethod',
        body: { $ref: 'SetupIntentRequest' },
        response: {
          201: { $ref: 'SetupIntentResponse' },
          500: { description: 'Failed to initiate a payment method setup', type: 'null' },
        },
      },
    },
    async (request, reply) => {
      const setupIntent = await setUpPaymentMethod(request.body)
      return reply.status(201).send(setupIntent)
    }
  )
}

export default stripeRoutes
