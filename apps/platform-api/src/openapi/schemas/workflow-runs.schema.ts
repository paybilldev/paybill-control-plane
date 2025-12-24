import { z } from 'zod'
import { zodToJsonSchema } from '../utils/zod-to-json-schema.js'

// WorkflowRunResponse
export const WorkflowRunResponseSchema = z.array(
  z.object({
    branch_id: z.string(),
    check_run_id: z.number().nullable(),
    created_at: z.string(),
    git_config: z.unknown().optional(),
    id: z.string(),
    status: z.enum([
      'CREATING_PROJECT',
      'RUNNING_MIGRATIONS',
      'MIGRATIONS_PASSED',
      'MIGRATIONS_FAILED',
      'FUNCTIONS_DEPLOYED',
      'FUNCTIONS_FAILED',
    ]),
    updated_at: z.string(),
    workdir: z.string().nullable(),
  })
)

export type WorkflowRunResponse = z.infer<typeof WorkflowRunResponseSchema>
export const WorkflowRunResponseJsonSchema = zodToJsonSchema(WorkflowRunResponseSchema, {
  name: 'WorkflowRunResponse',
})
