import { z } from 'zod'
import { zodToJsonSchema } from '../utils/zod-to-json-schema.js'

const CreateCliLoginSessionBodySchema = z.object({
  public_key: z.string(),
  /** Format: uuid */
  session_id: z.string(),
  token_name: z.string().optional(),
})

export type CreateCliLoginSessionBody = z.infer<typeof CreateCliLoginSessionBodySchema>

export const CreateCliLoginSessionBodyJsonSchema = zodToJsonSchema(
  CreateCliLoginSessionBodySchema,
  {
    name: 'CreateCliLoginSessionBody',
  }
)
