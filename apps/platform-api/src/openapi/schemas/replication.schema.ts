import { z } from 'zod'
import { zodToJsonSchema } from '../utils/zod-to-json-schema.js'

const CreateTenantSourceResponseSchema = z.object({
  source_id: z.number(),
  tenant_id: z.string(),
})

export type CreateTenantSourceResponse = z.infer<typeof CreateTenantSourceResponseSchema>

export const CreateTenantSourceResponseJsonSchema = zodToJsonSchema(
  CreateTenantSourceResponseSchema,
  {
    name: 'CreateTenantSourceResponse',
  }
)

const ReplicationTableSchema = z.object({
  name: z.string(),
  schema: z.string(),
})

const ReplicationTablesResponseSchema = z.object({
  tables: z.array(ReplicationTableSchema),
})

export type ReplicationTablesResponse = z.infer<typeof ReplicationTablesResponseSchema>

export const ReplicationTablesResponseJsonSchema = zodToJsonSchema(
  ReplicationTablesResponseSchema,
  {
    name: 'ReplicationTablesResponse',
  }
)

const ReplicationPublicationTableSchema = z.object({
  name: z.string(),
  schema: z.string(),
})

const UpdateReplicationPublicationBodySchema = z.object({
  tables: z.array(ReplicationPublicationTableSchema),
})

export type UpdateReplicationPublicationBody = z.infer<
  typeof UpdateReplicationPublicationBodySchema
>

export const UpdateReplicationPublicationBodyJsonSchema = zodToJsonSchema(
  UpdateReplicationPublicationBodySchema,
  {
    name: 'UpdateReplicationPublicationBody',
  }
)

const CreateReplicationPublicationBodySchema = z.object({
  name: z.string(),
  tables: z.array(ReplicationPublicationTableSchema),
})

export type CreateReplicationPublicationBody = z.infer<
  typeof CreateReplicationPublicationBodySchema
>

export const CreateReplicationPublicationBodyJsonSchema = zodToJsonSchema(
  CreateReplicationPublicationBodySchema,
  {
    name: 'CreateReplicationPublicationBody',
  }
)

const ReplicationPublicationSchema = z.object({
  name: z.string(),
  tables: z.array(ReplicationPublicationTableSchema),
})

const ReplicationPublicationsResponseSchema = z.object({
  publications: z.array(ReplicationPublicationSchema),
})

export type ReplicationPublicationsResponse = z.infer<typeof ReplicationPublicationsResponseSchema>

export const ReplicationPublicationsResponseJsonSchema = zodToJsonSchema(
  ReplicationPublicationsResponseSchema,
  {
    name: 'ReplicationPublicationsResponse',
  }
)

const CreateSourceResponseSchema = z.object({
  id: z.number(),
})

export type CreateSourceResponse = z.infer<typeof CreateSourceResponseSchema>

export const CreateSourceResponseJsonSchema = zodToJsonSchema(CreateSourceResponseSchema, {
  name: 'CreateSourceResponse',
})

const ReplicationSourceConfigSchema = z.object({
  host: z.string(),
  name: z.string(),
  port: z.number(),
  username: z.string(),
})

const ReplicationSourceSchema = z.object({
  config: ReplicationSourceConfigSchema,
  id: z.number(),
  name: z.string(),
  tenant_id: z.string(),
})

const ReplicationSourcesResponseSchema = z.object({
  sources: z.array(ReplicationSourceSchema),
})

export type ReplicationSourcesResponse = z.infer<typeof ReplicationSourcesResponseSchema>

export const ReplicationSourcesResponseJsonSchema = zodToJsonSchema(
  ReplicationSourcesResponseSchema,
  {
    name: 'ReplicationSourcesResponse',
  }
)

const ReplicationPipelineVersionSchema = z.object({
  id: z.number(),
  name: z.string(),
})

const ReplicationPipelineVersionResponseSchema = z.object({
  pipeline_id: z.number(),
  version: ReplicationPipelineVersionSchema,
  new_version: ReplicationPipelineVersionSchema.optional(),
})

export type ReplicationPipelineVersionResponse = z.infer<
  typeof ReplicationPipelineVersionResponseSchema
>

export const ReplicationPipelineVersionResponseJsonSchema = zodToJsonSchema(
  ReplicationPipelineVersionResponseSchema,
  {
    name: 'ReplicationPipelineVersionResponse',
  }
)

const UpdateReplicationPipelineVersionBodySchema = z.object({
  version_id: z.number(),
})

export type UpdateReplicationPipelineVersionBody = z.infer<
  typeof UpdateReplicationPipelineVersionBodySchema
>

export const UpdateReplicationPipelineVersionBodyJsonSchema = zodToJsonSchema(
  UpdateReplicationPipelineVersionBodySchema,
  {
    name: 'UpdateReplicationPipelineVersionBody',
  }
)

const ReplicationPipelineStatusNameSchema = z.enum([
  'stopped',
  'starting',
  'started',
  'stopping',
  'unknown',
  'failed',
])

const ReplicationPipelineStatusResponseSchema = z.object({
  pipeline_id: z.number(),
  status: z.object({
    name: ReplicationPipelineStatusNameSchema,
  }),
})

export type ReplicationPipelineStatusResponse = z.infer<
  typeof ReplicationPipelineStatusResponseSchema
>

export const ReplicationPipelineStatusResponseJsonSchema = zodToJsonSchema(
  ReplicationPipelineStatusResponseSchema,
  {
    name: 'ReplicationPipelineStatusResponse',
  }
)

const RollbackTableStateBodySchema = z.object({
  rollback_type: z.enum(['individual', 'full']),
  table_id: z.number(),
})

export type RollbackTableStateBody = z.infer<typeof RollbackTableStateBodySchema>

export const RollbackTableStateBodyJsonSchema = zodToJsonSchema(RollbackTableStateBodySchema, {
  name: 'RollbackTableStateBody',
})

const RetryPolicySchema = z.union([
  z.object({
    policy: z.literal('no_retry'),
  }),
  z.object({
    policy: z.literal('manual_retry'),
  }),
  z.object({
    policy: z.literal('timed_retry'),
    next_retry: z.string(),
  }),
])

const TableReplicationStateSchema = z.union([
  z.object({
    name: z.literal('queued'),
  }),
  z.object({
    name: z.literal('copying_table'),
  }),
  z.object({
    name: z.literal('copied_table'),
  }),
  z.object({
    name: z.literal('following_wal'),
  }),
  z.object({
    name: z.literal('error'),
    reason: z.string(),
    retry_policy: RetryPolicySchema,
    solution: z.string().optional(),
  }),
])

const RollbackTableStateResponseSchema = z.object({
  pipeline_id: z.number(),
  table_id: z.number(),
  new_state: TableReplicationStateSchema,
})

export type RollbackTableStateResponse = z.infer<typeof RollbackTableStateResponseSchema>

export const RollbackTableStateResponseJsonSchema = zodToJsonSchema(
  RollbackTableStateResponseSchema,
  {
    name: 'RollbackTableStateResponse',
  }
)

const BatchConfigSchema = z.object({
  max_fill_ms: z.number().optional(),
  max_size: z.number().optional(),
})

const UpdateReplicationPipelineBodySchema = z.object({
  config: z.object({
    batch: BatchConfigSchema.optional(),
    publication_name: z.string(),
  }),
  destination_id: z.number(),
  source_id: z.number(),
})

export type UpdateReplicationPipelineBody = z.infer<typeof UpdateReplicationPipelineBodySchema>

export const UpdateReplicationPipelineBodyJsonSchema = zodToJsonSchema(
  UpdateReplicationPipelineBodySchema,
  {
    name: 'UpdateReplicationPipelineBody',
  }
)

const ReplicationPipelineResponseSchema = z.object({
  id: z.number(),
  tenant_id: z.string(),
  replicator_id: z.number(),
  source_id: z.number(),
  source_name: z.string(),
  destination_id: z.number(),
  destination_name: z.string(),
  config: z.object({
    batch: BatchConfigSchema.optional(),
    publication_name: z.string(),
  }),
})

export type ReplicationPipelineResponse = z.infer<typeof ReplicationPipelineResponseSchema>

export const ReplicationPipelineResponseJsonSchema = zodToJsonSchema(
  ReplicationPipelineResponseSchema,
  {
    name: 'ReplicationPipelineResponse',
  }
)

const LagStatsSchema = z.object({
  confirmed_flush_lsn_bytes: z.number(),
  restart_lsn_bytes: z.number(),
  safe_wal_size_bytes: z.number(),
  flush_lag: z.number().optional(),
  write_lag: z.number().optional(),
})

const ReplicationPipelineReplicationStatusResponseSchema = z.object({
  pipeline_id: z.number(),
  apply_lag: LagStatsSchema.optional(),
  table_statuses: z.array(
    z.object({
      table_id: z.number(),
      table_name: z.string(),
      state: TableReplicationStateSchema,
      table_sync_lag: LagStatsSchema.optional(),
    })
  ),
})

export type ReplicationPipelineReplicationStatusResponse = z.infer<
  typeof ReplicationPipelineReplicationStatusResponseSchema
>

export const ReplicationPipelineReplicationStatusResponseJsonSchema = zodToJsonSchema(
  ReplicationPipelineReplicationStatusResponseSchema,
  {
    name: 'ReplicationPipelineReplicationStatusResponse',
  }
)

const CreateReplicationPipelineBodySchema = z.object({
  config: z.object({
    batch: BatchConfigSchema.optional(),
    publication_name: z.string(),
  }),
  destination_id: z.number(),
  source_id: z.number(),
})

export type CreateReplicationPipelineBody = z.infer<typeof CreateReplicationPipelineBodySchema>

export const CreateReplicationPipelineBodyJsonSchema = zodToJsonSchema(
  CreateReplicationPipelineBodySchema,
  {
    name: 'CreateReplicationPipelineBody',
  }
)

const CreatePipelineResponseSchema = z.object({
  id: z.number(),
})

export type CreatePipelineResponse = z.infer<typeof CreatePipelineResponseSchema>

export const CreatePipelineResponseJsonSchema = zodToJsonSchema(CreatePipelineResponseSchema, {
  name: 'CreatePipelineResponse',
})

const ReplicationPipelineItemSchema = z.object({
  id: z.number(),
  tenant_id: z.string(),
  replicator_id: z.number(),
  source_id: z.number(),
  source_name: z.string(),
  destination_id: z.number(),
  destination_name: z.string(),
  config: z.object({
    batch: BatchConfigSchema.optional(),
    publication_name: z.string(),
  }),
})

const ReplicationPipelinesResponseSchema = z.object({
  pipelines: z.array(ReplicationPipelineItemSchema),
})

export type ReplicationPipelinesResponse = z.infer<typeof ReplicationPipelinesResponseSchema>

export const ReplicationPipelinesResponseJsonSchema = zodToJsonSchema(
  ReplicationPipelinesResponseSchema,
  {
    name: 'ReplicationPipelinesResponse',
  }
)

const BigQueryConfigSchema = z.object({
  dataset_id: z.string(),
  project_id: z.string(),
  service_account_key: z.string(),
  max_concurrent_streams: z.number().optional(),
  max_staleness_mins: z.number().optional(),
})

const ConfigSchema = z.object({
  catalog_token: z.string(),
  project_ref: z.string(),
  warehouse_name: z.string(),
  namespace: z.string().optional(),
  s3_access_key_id: z.string(),
  s3_secret_access_key: z.string(),
  s3_region: z.string(),
})

const IcebergConfigSchema = z.object({
  paybill: ConfigSchema,
})

const ReplicationDestinationConfigSchema = z.union([
  z.object({ big_query: BigQueryConfigSchema }),
  z.object({ iceberg: IcebergConfigSchema }),
])

const UpdateReplicationDestinationBodySchema = z.object({
  config: ReplicationDestinationConfigSchema,
  name: z.string(),
})

export type UpdateReplicationDestinationBody = z.infer<
  typeof UpdateReplicationDestinationBodySchema
>

export const UpdateReplicationDestinationBodyJsonSchema = zodToJsonSchema(
  UpdateReplicationDestinationBodySchema,
  {
    name: 'UpdateReplicationDestinationBody',
  }
)

const ReplicationDestinationResponseSchema = z.object({
  id: z.number(),
  tenant_id: z.string(),
  name: z.string(),
  config: ReplicationDestinationConfigSchema,
})

export type ReplicationDestinationResponse = z.infer<typeof ReplicationDestinationResponseSchema>

export const ReplicationDestinationResponseJsonSchema = zodToJsonSchema(
  ReplicationDestinationResponseSchema,
  {
    name: 'ReplicationDestinationResponse',
  }
)

const DestinationConfigSchema = z.union([
  z.object({ big_query: BigQueryConfigSchema }),
  z.object({ iceberg: IcebergConfigSchema }),
])

const PipelineConfigSchema = z.object({
  publication_name: z.string(),
  batch: z
    .object({
      max_fill_ms: z.number().optional(),
      max_size: z.number().optional(),
    })
    .optional(),
})

const CreateReplicationDestinationPipelineBodySchema = z.object({
  destination_config: DestinationConfigSchema,
  destination_name: z.string(),
  pipeline_config: PipelineConfigSchema,
  source_id: z.number(),
})

const UpdateReplicationDestinationPipelineBodySchema =
  CreateReplicationDestinationPipelineBodySchema

export type CreateReplicationDestinationPipelineBody = z.infer<
  typeof CreateReplicationDestinationPipelineBodySchema
>

export const CreateReplicationDestinationPipelineBodyJsonSchema = zodToJsonSchema(
  CreateReplicationDestinationPipelineBodySchema,
  {
    name: 'CreateReplicationDestinationPipelineBody',
  }
)

export type UpdateReplicationDestinationPipelineBody = z.infer<
  typeof UpdateReplicationDestinationPipelineBodySchema
>

export const UpdateReplicationDestinationPipelineBodyJsonSchema = zodToJsonSchema(
  UpdateReplicationDestinationPipelineBodySchema,
  {
    name: 'UpdateReplicationDestinationPipelineBody',
  }
)

const CreateDestinationPipelineResponseSchema = z.object({
  destination_id: z.number(),
  pipeline_id: z.number(),
})

export type CreateDestinationPipelineResponse = z.infer<
  typeof CreateDestinationPipelineResponseSchema
>

export const CreateDestinationPipelineResponseJsonSchema = zodToJsonSchema(
  CreateDestinationPipelineResponseSchema,
  {
    name: 'CreateDestinationPipelineResponse',
  }
)

const CreateReplicationDestinationBodySchema = z.object({
  config: DestinationConfigSchema,
  name: z.string(),
})

export type CreateReplicationDestinationBody = z.infer<
  typeof CreateReplicationDestinationBodySchema
>

export const CreateReplicationDestinationBodyJsonSchema = zodToJsonSchema(
  CreateReplicationDestinationBodySchema,
  {
    name: 'CreateReplicationDestinationBody',
  }
)

const ReplicationDestinationsResponseSchema = z.object({
  destinations: z.array(
    z.object({
      config: DestinationConfigSchema,
      id: z.number(),
      name: z.string(),
      tenant_id: z.string(),
    })
  ),
})

export type ReplicationDestinationsResponse = z.infer<typeof ReplicationDestinationsResponseSchema>

export const ReplicationDestinationsResponseJsonSchema = zodToJsonSchema(
  ReplicationDestinationsResponseSchema,
  {
    name: 'ReplicationDestinationsResponse',
  }
)

const CreateDestinationResponseSchema = z.object({
  id: z.number(),
})

export type CreateDestinationResponse = z.infer<typeof CreateDestinationResponseSchema>

export const CreateDestinationResponseJsonSchema = zodToJsonSchema(
  CreateDestinationResponseSchema,
  {
    name: 'CreateDestinationResponse',
  }
)
