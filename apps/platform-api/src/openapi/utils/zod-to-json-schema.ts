import { zodToJsonSchema as zodToJsonSchemaLib } from 'zod-to-json-schema'
import type { z } from 'zod'

/**
 * JSON Schema type for OpenAPI compatibility.
 */
export type JsonSchema = Record<string, unknown>

/**
 * Options for converting Zod schemas to JSON Schema.
 */
export interface ZodToJsonSchemaOptions {
  /** Name of the schema (used in $ref) */
  name?: string
  /** Target JSON Schema version */
  target?: 'jsonSchema7' | 'jsonSchema2019-09' | 'openApi3'
}

/**
 * Converts a Zod schema to JSON Schema format for use with OpenAPI.
 *
 * @param schema - The Zod schema to convert
 * @param options - Optional conversion options
 * @returns JSON Schema representation of the Zod schema
 *
 * @example
 * ```typescript
 * const mySchema = z.object({ name: z.string() });
 * const jsonSchema = zodToJsonSchema(mySchema);
 * // { type: 'object', properties: { name: { type: 'string' } }, required: ['name'] }
 * ```
 */
export function zodToJsonSchema(
  schema: z.ZodTypeAny,
  options?: ZodToJsonSchemaOptions
): JsonSchema {
  // When no name is provided, we get the raw schema directly
  // When a name is provided, extract the definition from the result
  if (options?.name) {
    const result = zodToJsonSchemaLib(schema, {
      name: options.name,
      target: options.target ?? 'openApi3',
      $refStrategy: 'none',
    }) as { definitions?: Record<string, JsonSchema> }

    // Return the named definition if available, otherwise the full result
    return result.definitions?.[options.name] ?? (result as JsonSchema)
  }

  return zodToJsonSchemaLib(schema, {
    target: options?.target ?? 'openApi3',
    $refStrategy: 'none',
  }) as JsonSchema
}
