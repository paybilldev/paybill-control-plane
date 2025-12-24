import { z } from 'zod'
import { zodToJsonSchema } from '../utils/zod-to-json-schema.js'

export const TelemetryIdentifyBodySchema = z.object({
  anonymous_id: z.string().optional(),
  organization_slug: z.string().optional(),
  project_ref: z.string().optional(),
  user_id: z.string(),
})

export type TelemetryIdentifyBody = z.infer<typeof TelemetryIdentifyBodySchema>

export const TelemetryIdentifyBodyJsonSchema = zodToJsonSchema(TelemetryIdentifyBodySchema, {
  name: 'TelemetryIdentifyBody',
})

export const TelemetryGroupsResetBodySchema = z.object({
  reset_organization: z.boolean().optional(),
  reset_project: z.boolean().optional(),
})

export type TelemetryGroupsResetBody = z.infer<typeof TelemetryGroupsResetBodySchema>

export const TelemetryGroupsResetBodyJsonSchema = zodToJsonSchema(TelemetryGroupsResetBodySchema, {
  name: 'TelemetryGroupsResetBody',
})

export const TelemetryGroupsIdentityBodySchema = z.object({
  organization_slug: z.string().optional(),
  project_ref: z.string().optional(),
})

export type TelemetryGroupsIdentityBody = z.infer<typeof TelemetryGroupsIdentityBodySchema>

export const TelemetryGroupsIdentityBodyJsonSchema = zodToJsonSchema(
  TelemetryGroupsIdentityBodySchema,
  { name: 'TelemetryGroupsIdentityBody' }
)

export const TelemetryCallFeatureFlagsResponseSchema = z.record(z.string(), z.unknown())

export type TelemetryCallFeatureFlagsResponse = z.infer<
  typeof TelemetryCallFeatureFlagsResponseSchema
>

export const TelemetryCallFeatureFlagsResponseJsonSchema = zodToJsonSchema(
  TelemetryCallFeatureFlagsResponseSchema,
  {
    name: 'TelemetryCallFeatureFlagsResponse',
  }
)

export const TelemetryFeatureFlagBodySchema = z.object({
  feature_flag_name: z.string(),
  feature_flag_value: z.unknown().optional(),
})

export type TelemetryFeatureFlagBody = z.infer<typeof TelemetryFeatureFlagBodySchema>

export const TelemetryFeatureFlagBodyJsonSchema = zodToJsonSchema(TelemetryFeatureFlagBodySchema, {
  name: 'TelemetryFeatureFlagBody',
})

const TelemetryEventPHSchema = z.object({
  language: z.string(),
  referrer: z.string(),
  search: z.string(),
  user_agent: z.string(),
  viewport_height: z.number(),
  viewport_width: z.number(),
})

const TelemetryEventGroupsSchema = z.object({
  organization: z.string().optional(),
  project: z.string().optional(),
})

export const TelemetryEventBodySchema = z.object({
  action: z.string(),
  custom_properties: z.record(z.string(), z.unknown()),
  groups: TelemetryEventGroupsSchema.optional(),
  page_title: z.string(),
  page_url: z.string(),
  pathname: z.string(),
  ph: TelemetryEventPHSchema,
})

export type TelemetryEventBody = z.infer<typeof TelemetryEventBodySchema>

export const TelemetryEventBodyJsonSchema = zodToJsonSchema(TelemetryEventBodySchema, {
  name: 'TelemetryEventBody',
})
