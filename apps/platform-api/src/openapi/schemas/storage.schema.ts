import { z } from 'zod'
import { zodToJsonSchema } from '../utils/zod-to-json-schema.js'

export const StorageVectorIndexSchema = z.object({
  creationTime: z.number().optional(),
  dataType: z.literal('float32'),
  dimension: z.number(),
  distanceMetric: z.union([z.literal('cosine'), z.literal('euclidean'), z.literal('dotproduct')]),
  indexName: z.string(),
  metadataConfiguration: z
    .object({ nonFilterableMetadataKeys: z.array(z.string()).optional() })
    .optional(),
  vectorBucketName: z.string(),
})

export const StorageVectorBucketListIndexesResponseSchema = z.object({
  indexes: z.array(StorageVectorIndexSchema),
  nextToken: z.string().optional(),
})

export type StorageVectorBucketListIndexesResponse = z.infer<
  typeof StorageVectorBucketListIndexesResponseSchema
>

export const StorageVectorBucketListIndexesResponseJsonSchema = zodToJsonSchema(
  StorageVectorBucketListIndexesResponseSchema,
  { name: 'StorageVectorBucketListIndexesResponse' }
)

export const CreateBucketIndexBodySchema = z.object({
  dataType: z.literal('float32'),
  dimension: z.number(),
  distanceMetric: z.union([z.literal('cosine'), z.literal('euclidean'), z.literal('dotproduct')]),
  indexName: z.string(),
  metadataKeys: z.array(z.string()).optional().default([]),
})

export type CreateBucketIndexBody = z.infer<typeof CreateBucketIndexBodySchema>

export const CreateBucketIndexBodyJsonSchema = zodToJsonSchema(CreateBucketIndexBodySchema, {
  name: 'CreateBucketIndexBody',
})

export const StorageVectorBucketResponseSchema = z.object({
  vectorBucketName: z.string(),
})

export type StorageVectorBucketResponse = z.infer<typeof StorageVectorBucketResponseSchema>

export const StorageVectorBucketResponseJsonSchema = zodToJsonSchema(
  StorageVectorBucketResponseSchema,
  {
    name: 'StorageVectorBucketResponse',
  }
)

export const StorageVectorBucketsResponseSchema = z.object({
  nextToken: z.string().optional(),
  vectorBuckets: z.array(
    z.object({
      vectorBucketName: z.string(),
    })
  ),
})

export type StorageVectorBucketsResponse = z.infer<typeof StorageVectorBucketsResponseSchema>

export const StorageVectorBucketsResponseJsonSchema = zodToJsonSchema(
  StorageVectorBucketsResponseSchema,
  { name: 'StorageVectorBucketsResponse' }
)

export const CreateStorageVectorBucketBodySchema = z.object({
  bucketName: z.string(),
})

export type CreateStorageVectorBucketBody = z.infer<typeof CreateStorageVectorBucketBodySchema>

export const CreateStorageVectorBucketBodyJsonSchema = zodToJsonSchema(
  CreateStorageVectorBucketBodySchema,
  { name: 'CreateStorageVectorBucketBody' }
)

export const GetStorageCredentialsResponseSchema = z.object({
  data: z.array(
    z.object({
      id: z.string(),
      description: z.string(),
      created_at: z.string(),
    })
  ),
})

export type GetStorageCredentialsResponse = z.infer<typeof GetStorageCredentialsResponseSchema>

export const GetStorageCredentialsResponseJsonSchema = zodToJsonSchema(
  GetStorageCredentialsResponseSchema,
  { name: 'GetStorageCredentialsResponse' }
)

export const CreateStorageCredentialResponseSchema = z.object({
  access_key: z.string(),
  secret_key: z.string(),
  id: z.string(),
  description: z.string(),
})

export type CreateStorageCredentialResponse = z.infer<typeof CreateStorageCredentialResponseSchema>

export const CreateStorageCredentialResponseJsonSchema = zodToJsonSchema(
  CreateStorageCredentialResponseSchema,
  { name: 'CreateStorageCredentialResponse' }
)

export const CreateStorageCredentialBodySchema = z.object({
  description: z.string(),
})

export type CreateStorageCredentialBody = z.infer<typeof CreateStorageCredentialBodySchema>

export const CreateStorageCredentialBodyJsonSchema = zodToJsonSchema(
  CreateStorageCredentialBodySchema,
  { name: 'CreateStorageCredentialBody' }
)

export const GetSignedUrlsBodySchema = z.object({
  path: z.array(z.string()),
  expiresIn: z.number(),
  options: z
    .object({
      download: z.boolean().optional(),
      downloadName: z.string().optional(),
    })
    .optional(),
})

export type GetSignedUrlsBody = z.infer<typeof GetSignedUrlsBodySchema>

export const GetSignedUrlsBodyJsonSchema = zodToJsonSchema(GetSignedUrlsBodySchema, {
  name: 'GetSignedUrlsBody',
})

export const SignedUrlsResponseSchema = z.array(
  z.object({
    path: z.string().nullable(),
    signedUrl: z.string(),
    error: z.string().nullable(),
  })
)

export type SignedUrlsResponse = z.infer<typeof SignedUrlsResponseSchema>

export const SignedUrlsResponseJsonSchema = zodToJsonSchema(SignedUrlsResponseSchema, {
  name: 'SignedUrlsResponse',
})

export const GetSignedUrlBodySchema = z.object({
  path: z.string(),
  expiresIn: z.number(),
  options: z
    .object({
      download: z.boolean().optional(),
      downloadName: z.string().optional(),
      transform: z
        .object({
          format: z.enum(['origin']).optional(),
          width: z.number().optional(),
          height: z.number().optional(),
          quality: z.number().optional(),
          resize: z.enum(['cover', 'contain', 'fill']).optional(),
        })
        .optional(),
    })
    .optional(),
})

export type GetSignedUrlBody = z.infer<typeof GetSignedUrlBodySchema>

export const GetSignedUrlBodyJsonSchema = zodToJsonSchema(GetSignedUrlBodySchema, {
  name: 'GetSignedUrlBody',
})

export const SignedUrlResponseSchema = z.object({
  signedUrl: z.string(),
})

export type SignedUrlResponse = z.infer<typeof SignedUrlResponseSchema>

export const SignedUrlResponseJsonSchema = zodToJsonSchema(SignedUrlResponseSchema, {
  name: 'SignedUrlResponse',
})

export const GetPublicUrlBodySchema = z.object({
  path: z.string(),
  options: z
    .object({
      download: z.boolean().optional(),
      downloadName: z.string().optional(),
      transform: z
        .object({
          format: z.enum(['origin']).optional(),
          width: z.number().optional(),
          height: z.number().optional(),
          quality: z.number().optional(),
          resize: z.enum(['cover', 'contain', 'fill']).optional(),
        })
        .optional(),
    })
    .optional(),
})

export type GetPublicUrlBody = z.infer<typeof GetPublicUrlBodySchema>

export const GetPublicUrlBodyJsonSchema = zodToJsonSchema(GetPublicUrlBodySchema, {
  name: 'GetPublicUrlBody',
})

export const PublicUrlResponseSchema = z.object({
  publicUrl: z.string(),
})

export type PublicUrlResponse = z.infer<typeof PublicUrlResponseSchema>

export const PublicUrlResponseJsonSchema = zodToJsonSchema(PublicUrlResponseSchema, {
  name: 'PublicUrlResponse',
})

export const MoveObjectBodySchema = z.object({
  from: z.string(),
  to: z.string(),
})
export type MoveObjectBody = z.infer<typeof MoveObjectBodySchema>

export const MoveObjectBodyJsonSchema = zodToJsonSchema(MoveObjectBodySchema, {
  name: 'MoveObjectBody',
})

export const StorageListResponseSchema = z.object({
  folders: z
    .array(
      z.object({
        created_at: z.string(),
        key: z.string(),
        name: z.string(),
        updated_at: z.string(),
      })
    )
    .default([]),
  hasNext: z.boolean(),
  nextCursor: z.string().optional(),
  objects: z
    .array(
      z.object({
        created_at: z.string(),
        id: z.string(),
        key: z.string(),
        last_accessed_at: z.string(),
        metadata: z
          .object({
            cacheControl: z.string().nullable().optional(),
            contentLength: z.number().nullable().optional(),
            eTag: z.string().nullable().optional(),
            httpStatusCode: z.number().nullable().optional(),
            lastModified: z.string().nullable().optional(),
            mimetype: z.string().nullable().optional(),
            size: z.number().nullable().optional(),
          })
          .default({}),
        name: z.string(),
        updated_at: z.string(),
      })
    )
    .default([]),
})
export type StorageListResponse = z.infer<typeof StorageListResponseSchema>
export const StorageListResponseJsonSchema = zodToJsonSchema(StorageListResponseSchema, {
  name: 'StorageListResponse',
})

export const GetObjectsBodySchema = z.object({
  path: z.string(),
  options: z
    .object({
      limit: z.number().optional(),
      offset: z.number().optional(),
      search: z.string().optional(),
      sortBy: z
        .object({
          column: z.string().optional(),
          order: z.string().optional(),
        })
        .optional(),
    })
    .optional(),
})

export type GetObjectsBody = z.infer<typeof GetObjectsBodySchema>

export const GetObjectsBodyJsonSchema = zodToJsonSchema(GetObjectsBodySchema, {
  name: 'GetObjectsBody',
})

export const StorageObjectSchema = z.array(
  z.object({
    bucket_id: z.string(),
    buckets: z.object({
      allowed_mime_types: z.array(z.string()).optional(),
      created_at: z.string(),
      file_size_limit: z.number().optional(),
      id: z.string(),
      name: z.string(),
      owner: z.string(),
      public: z.boolean(),
      type: z.enum(['STANDARD', 'ANALYTICS']).optional(),
      updated_at: z.string(),
    }),
    created_at: z.string(),
    id: z.string(),
    last_accessed_at: z.string(),
    metadata: z.record(z.unknown()),
    name: z.string(),
    owner: z.string(),
    updated_at: z.string(),
  })
)

export type StorageObject = z.infer<typeof StorageObjectSchema>

export const StorageObjectArrayJsonSchema = zodToJsonSchema(z.array(StorageObjectSchema), {
  name: 'StorageObjectArray',
})

export const CopyObjectBodySchema = z.object({
  from: z.string(),
  to: z.string(),
})

export type CopyObjectBody = z.infer<typeof CopyObjectBodySchema>

export const CopyObjectBodyJsonSchema = zodToJsonSchema(CopyObjectBodySchema, {
  name: 'CopyObjectBody',
})

export const CopyObjectResponseSchema = z.object({
  path: z.string(),
})

export type CopyObjectResponse = z.infer<typeof CopyObjectResponseSchema>

export const CopyObjectResponseJsonSchema = zodToJsonSchema(CopyObjectResponseSchema, {
  name: 'CopyObjectResponse',
})

export const DeleteObjectsBodySchema = z.object({
  paths: z.array(z.string()),
})

export type DeleteObjectsBody = z.infer<typeof DeleteObjectsBodySchema>

export const DeleteObjectsBodyJsonSchema = zodToJsonSchema(DeleteObjectsBodySchema, {
  name: 'DeleteObjectsBody',
})

export const StorageBucketResponseSchema = z.object({
  allowed_mime_types: z.array(z.string()).optional(),
  created_at: z.string(),
  file_size_limit: z.number().optional(),
  id: z.string(),
  name: z.string(),
  owner: z.string(),
  public: z.boolean(),
  type: z.enum(['STANDARD', 'ANALYTICS']).optional(),
  updated_at: z.string(),
})

export type StorageBucketResponse = z.infer<typeof StorageBucketResponseSchema>

export const StorageBucketResponseJsonSchema = zodToJsonSchema(StorageBucketResponseSchema, {
  name: 'StorageBucketResponse',
})

export const UpdateStorageBucketBodySchema = z.object({
  allowed_mime_types: z.array(z.string()).nullable().optional(),
  file_size_limit: z.number().nullable().optional(),
  public: z.boolean(),
})

export type UpdateStorageBucketBody = z.infer<typeof UpdateStorageBucketBodySchema>

export const UpdateStorageBucketBodyJsonSchema = zodToJsonSchema(UpdateStorageBucketBodySchema, {
  name: 'UpdateStorageBucketBody',
})

export const CreateStorageBucketBodySchema = z.object({
  allowed_mime_types: z.array(z.string()).optional(),
  file_size_limit: z.number().optional(),
  id: z.string(),
  public: z.boolean(),
  type: z.enum(['STANDARD', 'ANALYTICS']).optional(),
})

export type CreateStorageBucketBody = z.infer<typeof CreateStorageBucketBodySchema>

export const CreateStorageBucketBodyJsonSchema = zodToJsonSchema(CreateStorageBucketBodySchema, {
  name: 'CreateStorageBucketBody',
})

export const StorageBucketListResponseSchema = z.array(StorageBucketResponseSchema)

export type StorageBucketListResponse = z.infer<typeof StorageBucketListResponseSchema>

export const StorageBucketListResponseJsonSchema = zodToJsonSchema(
  StorageBucketListResponseSchema,
  { name: 'StorageBucketListResponse' }
)

export const GetArchiveResponseSchema = z.object({
  archive_empty: z.boolean(),
  file_url: z.string(),
  fileUrl: z.string(),
})

export type GetArchiveResponse = z.infer<typeof GetArchiveResponseSchema>

export const GetArchiveResponseJsonSchema = zodToJsonSchema(GetArchiveResponseSchema, {
  name: 'GetArchiveResponse',
})

export const StorageAnalyticsBucketNamespaceTablesResponseSchema = z.object({
  data: z.array(
    z.object({
      name: z.string(),
      namespace: z.array(z.string()),
    })
  ),
})

export type StorageAnalyticsBucketNamespaceTablesResponse = z.infer<
  typeof StorageAnalyticsBucketNamespaceTablesResponseSchema
>

export const StorageAnalyticsBucketNamespaceTablesResponseJsonSchema = zodToJsonSchema(
  StorageAnalyticsBucketNamespaceTablesResponseSchema,
  { name: 'StorageAnalyticsBucketNamespaceTablesResponse' }
)

export const CreateNamespaceTableBodySchema = z.object({
  name: z.string(),
  fields: z.array(
    z.object({
      id: z.number(),
      name: z.string(),
      required: z.boolean(),
      type: z.union([
        z.enum([
          'boolean',
          'int',
          'long',
          'float',
          'double',
          'string',
          'timestamp',
          'date',
          'time',
          'timestamptz',
          'uuid',
          'binary',
        ]),
        z.string(),
      ]),
    })
  ),
})

export type CreateNamespaceTableBody = z.infer<typeof CreateNamespaceTableBodySchema>

export const CreateNamespaceTableBodyJsonSchema = zodToJsonSchema(CreateNamespaceTableBodySchema, {
  name: 'CreateNamespaceTableBody',
})

export const NamespaceTableResponseSchema = z.object({
  'current-schema-id': z.number(),
  'current-snapshot-id': z.number().optional(),
  'default-sort-order-id': z.number().optional(),
  'default-spec-id': z.number().optional(),
  'format-version': z.number().optional(),
  'last-column-id': z.number().optional(),
  'last-partition-id': z.number().optional(),
  'last-sequence-number': z.number().optional(),
  'last-updated-ms': z.number().optional(),
  location: z.string(),
  'metadata-location': z.string().optional(),
  'metadata-log': z.array(z.unknown()).optional(),
  name: z.string().optional(),
  'partition-specs': z.array(z.unknown()),
  properties: z.record(z.string()),
  refs: z.record(z.unknown()).optional(),
  schemas: z.array(
    z.object({
      fields: z.array(z.unknown()),
      type: z.string(),
    })
  ),
  'snapshot-log': z.array(z.unknown()).optional(),
  snapshots: z.array(z.unknown()).optional(),
  'sort-orders': z.array(z.unknown()),
  'table-uuid': z.string().optional(),
})

export type NamespaceTableResponse = z.infer<typeof NamespaceTableResponseSchema>

export const NamespaceTableResponseJsonSchema = zodToJsonSchema(NamespaceTableResponseSchema, {
  name: 'NamespaceTableResponse',
})

export const CreateNamespaceBodySchema = z.object({
  namespace: z.string(),
})

export type CreateNamespaceBody = z.infer<typeof CreateNamespaceBodySchema>

export const CreateNamespaceBodyJsonSchema = zodToJsonSchema(CreateNamespaceBodySchema, {
  name: 'CreateNamespaceBody',
})

export const NamespacesResponseSchema = z.object({
  data: z.array(
    z.object({
      namespace: z.array(z.string()),
    })
  ),
})

export type NamespacesResponse = z.infer<typeof NamespacesResponseSchema>

export const NamespacesResponseJsonSchema = zodToJsonSchema(NamespacesResponseSchema, {
  name: 'NamespacesResponse',
})

export const CreateStorageAnalyticsBucketBodySchema = z.object({
  bucketName: z.string(),
})

export type CreateStorageAnalyticsBucketBody = z.infer<
  typeof CreateStorageAnalyticsBucketBodySchema
>

export const CreateStorageAnalyticsBucketBodyJsonSchema = zodToJsonSchema(
  CreateStorageAnalyticsBucketBodySchema,
  {
    name: 'CreateStorageAnalyticsBucketBody',
  }
)

export const StorageAnalyticsBucketResponseSchema = z.object({
  created_at: z.string(),
  name: z.string(),
  updated_at: z.string(),
})

export type StorageAnalyticsBucketResponse = z.infer<typeof StorageAnalyticsBucketResponseSchema>

export const StorageAnalyticsBucketResponseJsonSchema = zodToJsonSchema(
  StorageAnalyticsBucketResponseSchema,
  {
    name: 'StorageAnalyticsBucketResponse',
  }
)

export const StorageAnalyticsBucketsResponseSchema = z.object({
  data: z.array(StorageAnalyticsBucketResponseSchema),
})

export type StorageAnalyticsBucketsResponse = z.infer<typeof StorageAnalyticsBucketsResponseSchema>

export const StorageAnalyticsBucketsResponseJsonSchema = zodToJsonSchema(
  StorageAnalyticsBucketsResponseSchema,
  {
    name: 'StorageAnalyticsBucketsResponse',
  }
)

export const StorageAnalyticsBucketDeleteResponseSchema = z.object({
  message: z.string(),
})

export type StorageAnalyticsBucketDeleteResponse = z.infer<
  typeof StorageAnalyticsBucketDeleteResponseSchema
>

export const StorageAnalyticsBucketDeleteResponseJsonSchema = zodToJsonSchema(
  StorageAnalyticsBucketDeleteResponseSchema,
  {
    name: 'StorageAnalyticsBucketDeleteResponse',
  }
)
