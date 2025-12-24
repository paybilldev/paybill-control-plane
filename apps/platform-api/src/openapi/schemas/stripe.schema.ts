import { z } from 'zod'
import { zodToJsonSchema } from '../utils/zod-to-json-schema.js'

export const OverdueInvoiceCountSchema = z.array(
  z.object({
    organization_id: z.number(),
    overdue_invoice_count: z.number(),
  })
)

export type OverdueInvoiceCount = z.infer<typeof OverdueInvoiceCountSchema>

export const OverdueInvoiceCountJsonSchema = zodToJsonSchema(OverdueInvoiceCountSchema, {
  name: 'OverdueInvoiceCount',
})

// Setup Intent Request
export const SetupIntentRequestSchema = z.object({
  hcaptchaToken: z.string().optional(),
})

export type SetupIntentRequest = z.infer<typeof SetupIntentRequestSchema>

export const SetupIntentRequestJsonSchema = zodToJsonSchema(SetupIntentRequestSchema, {
  name: 'SetupIntentRequest',
})

// Setup Intent Response
export const SetupIntentResponseSchema = z.object({
  client_secret: z.string(),
  pending_subscription_flow_enabled_for_creation: z.boolean(),
})

export type SetupIntentResponse = z.infer<typeof SetupIntentResponseSchema>

export const SetupIntentResponseJsonSchema = zodToJsonSchema(SetupIntentResponseSchema, {
  name: 'SetupIntentResponse',
})
