import { z } from 'zod'
import { zodToJsonSchema } from '../utils/zod-to-json-schema.js'

/**
 * =====================
 * Schemas & Types
 * =====================
 */

// ProjectInfo
export const ProjectInfoSchema = z.object({
  cloud_provider: z.string(),
  disk_volume_size_gb: z.number().optional(),
  id: z.number(),
  infra_compute_size: z
    .enum([
      'pico',
      'nano',
      'micro',
      'small',
      'medium',
      'large',
      'xlarge',
      '2xlarge',
      '4xlarge',
      '8xlarge',
      '12xlarge',
      '16xlarge',
      '24xlarge',
      '24xlarge_optimized_memory',
      '24xlarge_optimized_cpu',
      '24xlarge_high_memory',
      '48xlarge',
      '48xlarge_optimized_memory',
      '48xlarge_optimized_cpu',
      '48xlarge_high_memory',
    ])
    .optional(),
  inserted_at: z.string().nullable(),
  is_branch_enabled: z.boolean(),
  is_physical_backups_enabled: z.boolean().nullable(),
  name: z.string(),
  organization_id: z.number(),
  organization_slug: z.string(),
  preview_branch_refs: z.array(z.string()),
  ref: z.string(),
  region: z.string(),
  status: z.string(),
  subscription_id: z.string().nullable(),
})

export const ProjectInfoListSchema = z.array(ProjectInfoSchema)

export type ProjectInfo = z.infer<typeof ProjectInfoListSchema>
export const ProjectInfoJsonSchema = zodToJsonSchema(ProjectInfoListSchema, { name: 'ProjectInfo' })

// CreateProjectBody
export const CreateProjectBodySchema = z.object({
  auth_site_url: z.string().optional(),
  cloud_provider: z.enum(['AWS', 'AWS_K8S', 'AWS_NIMBUS']),
  custom_internal_requests: z
    .object({
      ami: z.object({
        search_tags: z.record(z.string()).optional(),
      }),
    })
    .optional(),
  data_api_exposed_schemas: z.array(z.string()).optional(),
  data_api_use_api_schema: z.boolean().optional(),
  db_pass: z.string(),
  db_pricing_tier_id: z.string().optional(),
  db_region: z.string().optional(),
  db_sql: z.string().optional(),
  desired_instance_size: z
    .enum([
      'pico',
      'nano',
      'micro',
      'small',
      'medium',
      'large',
      'xlarge',
      '2xlarge',
      '4xlarge',
      '8xlarge',
      '12xlarge',
      '16xlarge',
      '24xlarge',
      '24xlarge_optimized_memory',
      '24xlarge_optimized_cpu',
      '24xlarge_high_memory',
      '48xlarge',
      '48xlarge_optimized_memory',
      '48xlarge_optimized_cpu',
      '48xlarge_high_memory',
    ])
    .optional(),
  name: z.string(),
  organization_slug: z.string(),
  postgres_engine: z.enum(['13', '14', '15', '17', '17-oriole']).optional(),
  region_selection: z
    .union([
      z.object({ code: z.string(), type: z.literal('specific') }),
      z.object({ code: z.enum(['americas', 'emea', 'apac']), type: z.literal('smartGroup') }),
    ])
    .optional(),
  release_channel: z.enum(['internal', 'alpha', 'beta', 'ga', 'withdrawn', 'preview']).optional(),
})

export type CreateProjectBody = z.infer<typeof CreateProjectBodySchema>
export const CreateProjectBodyJsonSchema = zodToJsonSchema(CreateProjectBodySchema, {
  name: 'CreateProjectBody',
})

// CreateProjectResponse
export const CreateProjectResponseSchema = ProjectInfoSchema.extend({
  anon_key: z.string(),
  endpoint: z.string(),
  service_key: z.string(),
})

export type CreateProjectResponse = z.infer<typeof CreateProjectResponseSchema>
export const CreateProjectResponseJsonSchema = zodToJsonSchema(CreateProjectResponseSchema, {
  name: 'CreateProjectResponse',
})

export const ProjectResourceWarningsResponseSchema = z.array(
  z.object({
    auth_email_offender: z.enum(['critical', 'warning']).nullable(),
    auth_rate_limit_exhaustion: z.enum(['critical', 'warning']).nullable(),
    auth_restricted_email_sending: z.enum(['critical', 'warning']).nullable(),
    cpu_exhaustion: z.enum(['critical', 'warning']).nullable(),
    disk_io_exhaustion: z.enum(['critical', 'warning']).nullable(),
    disk_space_exhaustion: z.enum(['critical', 'warning']).nullable(),
    is_readonly_mode_enabled: z.boolean(),
    memory_and_swap_exhaustion: z.enum(['critical', 'warning']).nullable(),
    need_pitr: z.enum(['critical', 'warning']).nullable(),
    project: z.string(),
  })
)

export type ProjectResourceWarningsResponse = z.infer<typeof ProjectResourceWarningsResponseSchema>
export const ProjectResourceWarningsResponseJsonSchema = zodToJsonSchema(
  ProjectResourceWarningsResponseSchema,
  { name: 'ProjectResourceWarningsResponse' }
)

export const ProjectDetailResponseSchema = z.object({
  cloud_provider: z.string(),
  connectionString: z.string().nullable().optional().default(null),
  db_host: z.string(),
  dbVersion: z.string().optional(),
  id: z.number(),
  infra_compute_size: z
    .enum([
      'pico',
      'nano',
      'micro',
      'small',
      'medium',
      'large',
      'xlarge',
      '2xlarge',
      '4xlarge',
      '8xlarge',
      '12xlarge',
      '16xlarge',
      '24xlarge',
      '24xlarge_optimized_memory',
      '24xlarge_optimized_cpu',
      '24xlarge_high_memory',
      '48xlarge',
      '48xlarge_optimized_memory',
      '48xlarge_optimized_cpu',
      '48xlarge_high_memory',
    ])
    .optional(),
  inserted_at: z.string(),
  is_branch_enabled: z.boolean(),
  is_physical_backups_enabled: z.boolean().nullable(),
  lastDatabaseResizeAt: z.string().optional(),
  maxDatabasePreprovisionGb: z.number().optional(),
  name: z.string(),
  organization_id: z.number(),
  parent_project_ref: z.string().optional(),
  ref: z.string(),
  region: z.string(),
  restUrl: z.string(),
  status: z.enum([
    'INACTIVE',
    'ACTIVE_HEALTHY',
    'ACTIVE_UNHEALTHY',
    'COMING_UP',
    'UNKNOWN',
    'GOING_DOWN',
    'INIT_FAILED',
    'REMOVED',
    'RESTORING',
    'UPGRADING',
    'PAUSING',
    'RESTORE_FAILED',
    'RESTARTING',
    'PAUSE_FAILED',
    'RESIZING',
  ]),
  subscription_id: z.string(),
  volumeSizeGb: z.number().optional(),
})

export type ProjectDetailResponse = z.infer<typeof ProjectDetailResponseSchema>
export const ProjectDetailResponseJsonSchema = zodToJsonSchema(ProjectDetailResponseSchema, {
  name: 'ProjectDetailResponse',
})

// RemoveProjectResponse
export const RemoveProjectResponseSchema = z.object({
  id: z.number(),
  name: z.string(),
  ref: z.string(),
})

export type RemoveProjectResponse = z.infer<typeof RemoveProjectResponseSchema>
export const RemoveProjectResponseJsonSchema = zodToJsonSchema(RemoveProjectResponseSchema, {
  name: 'RemoveProjectResponse',
})

// UpdateProjectBody
export const UpdateProjectBodySchema = z.object({
  name: z.string(),
})

export type UpdateProjectBody = z.infer<typeof UpdateProjectBodySchema>
export const UpdateProjectBodyJsonSchema = zodToJsonSchema(UpdateProjectBodySchema, {
  name: 'UpdateProjectBody',
})

// ProjectRefResponse
export const ProjectRefResponseSchema = z.object({
  id: z.number(),
  name: z.string(),
  ref: z.string(),
})

export type ProjectRefResponse = z.infer<typeof ProjectRefResponseSchema>
export const ProjectRefResponseJsonSchema = zodToJsonSchema(ProjectRefResponseSchema, {
  name: 'ProjectRefResponse',
})
