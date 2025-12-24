import { z } from 'zod'
import { zodToJsonSchema } from '../utils/zod-to-json-schema.js'

const NotificationsSummarySchema = z.object({
  has_critical: z.boolean(),
  has_warning: z.boolean(),
  unread_count: z.number(),
})

const NotificationResponseSchema = z.object({
  /** @description Any JSON-serializable value */
  data: z.unknown(),

  id: z.string(),
  inserted_at: z.string(),

  /** @description Any JSON-serializable value */
  meta: z.unknown(),

  name: z.string(),

  priority: z.enum(['Critical', 'Warning', 'Info']),

  status: z.enum(['new', 'seen', 'archived']),
})

const UpdateNotificationBodySchema = z.array(
  z.object({
    /** Format: uuid */
    id: z.string().uuid(),
    status: z.enum(['new', 'seen', 'archived']),
  })
)

export type NotificationResponse = z.infer<typeof NotificationResponseSchema>

export const NotificationResponseJsonSchema = zodToJsonSchema(NotificationResponseSchema, {
  name: 'NotificationResponse',
})

export type UpdateNotificationBody = z.infer<typeof UpdateNotificationBodySchema>

export const UpdateNotificationBodyJsonSchema = zodToJsonSchema(UpdateNotificationBodySchema, {
  name: 'UpdateNotificationBody',
})

export type NotificationsSummary = z.infer<typeof NotificationsSummarySchema>

export const NotificationsSummaryJsonSchema = zodToJsonSchema(NotificationsSummarySchema, {
  name: 'NotificationsSummary',
})
