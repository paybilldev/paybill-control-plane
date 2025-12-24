import { z } from 'zod'
import { zodToJsonSchema } from '../utils/zod-to-json-schema.js'

const SendUpgradeSurveyBodySchema = z.object({
  additionalFeedback: z.string().optional(),
  currentPlan: z.string().optional(),
  orgSlug: z.string().optional(),
  prevPlan: z.string().optional(),
  reasons: z.array(z.string()),
})

const SendFeedbackBodySchema = z.object({
  additionalRedirectUrls: z.string().optional(),
  affectedServices: z.string().optional(),
  allowSupportAccess: z.boolean().optional(),
  browserInformation: z.string().optional(),
  category: z.string(),
  dashboardSentryIssueId: z.string().optional(),
  library: z.string().optional(),
  message: z.string(),
  organizationSlug: z.string().optional(),
  pathname: z.string().optional(),
  projectRef: z.string().optional(),
  severity: z.string().optional(),
  siteUrl: z.string().optional(),
  subject: z.string().optional(),
  tags: z.array(z.string()),
  urlToAirTable: z.string().optional(),
  verified: z.boolean().optional(),
})

const SendExitSurveyBodySchema = z.object({
  additionalFeedback: z.string().optional(),
  exitAction: z.string().optional(),
  orgSlug: z.string().optional(),
  projectRef: z.string().optional(),
  reasons: z.string(),
})

const SendFeedbackResponseSchema = z.object({
  result: z.string(),
})

const SendDocsFeedbackBodySchema = z.object({
  feedback: z.string().optional(),
  isHelpful: z.boolean(),
  page: z.string(),
  team: z.string().optional(),
  title: z.string(),
})

export type SendDocsFeedbackBody = z.infer<typeof SendDocsFeedbackBodySchema>

export const SendDocsFeedbackBodyJsonSchema = zodToJsonSchema(SendDocsFeedbackBodySchema, {
  name: 'SendDocsFeedbackBody',
})

export type SendFeedbackResponse = z.infer<typeof SendFeedbackResponseSchema>

export const SendFeedbackResponseJsonSchema = zodToJsonSchema(SendFeedbackResponseSchema, {
  name: 'SendFeedbackResponse',
})

export type SendExitSurveyBody = z.infer<typeof SendExitSurveyBodySchema>

export const SendExitSurveyBodyJsonSchema = zodToJsonSchema(SendExitSurveyBodySchema, {
  name: 'SendExitSurveyBody',
})

export type SendFeedbackBody = z.infer<typeof SendFeedbackBodySchema>

export const SendFeedbackBodyJsonSchema = zodToJsonSchema(SendFeedbackBodySchema, {
  name: 'SendFeedbackBody',
})

export type SendUpgradeSurveyBody = z.infer<typeof SendUpgradeSurveyBodySchema>

export const SendUpgradeSurveyBodyJsonSchema = zodToJsonSchema(SendUpgradeSurveyBodySchema, {
  name: 'SendUpgradeSurveyBody',
})

const UpdateConversationCustomFieldsBodySchema = z.object({
  allow_support_access: z.boolean().optional().default(false),
  category: z.string().optional().default('Problem'),
  org_id: z.number(),
  project_ref: z.string().optional(),
})

export type UpdateConversationCustomFieldsBody = z.infer<
  typeof UpdateConversationCustomFieldsBodySchema
>

export const UpdateConversationCustomFieldsBodyJsonSchema = zodToJsonSchema(
  UpdateConversationCustomFieldsBodySchema,
  {
    name: 'UpdateConversationCustomFieldsBody',
  }
)

// Response
const UpdateConversationCustomFieldsResponseSchema = z.object({
  result: z.literal('success'),
})

export type UpdateConversationCustomFieldsResponse = z.infer<
  typeof UpdateConversationCustomFieldsResponseSchema
>

export const UpdateConversationCustomFieldsResponseJsonSchema = zodToJsonSchema(
  UpdateConversationCustomFieldsResponseSchema,
  {
    name: 'UpdateConversationCustomFieldsResponse',
  }
)
