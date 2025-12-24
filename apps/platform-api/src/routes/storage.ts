import type { FastifyPluginAsync } from 'fastify'
import {
  CopyObjectBody,
  CopyObjectResponse,
  CreateBucketIndexBody,
  CreateNamespaceBody,
  CreateNamespaceTableBody,
  CreateStorageAnalyticsBucketBody,
  CreateStorageBucketBody,
  CreateStorageCredentialBody,
  CreateStorageCredentialResponse,
  CreateStorageVectorBucketBody,
  DeleteObjectsBody,
  GetArchiveResponse,
  GetObjectsBody,
  GetPublicUrlBody,
  GetSignedUrlBody,
  GetSignedUrlsBody,
  GetStorageCredentialsResponse,
  MoveObjectBody,
  NamespacesResponse,
  NamespaceTableResponse,
  PublicUrlResponse,
  SignedUrlResponse,
  SignedUrlsResponse,
  StorageAnalyticsBucketDeleteResponse,
  StorageAnalyticsBucketNamespaceTablesResponse,
  StorageAnalyticsBucketResponse,
  StorageAnalyticsBucketsResponse,
  StorageBucketListResponse,
  StorageBucketResponse,
  StorageListResponse,
  StorageObject,
  StorageVectorBucketListIndexesResponse,
  StorageVectorBucketResponse,
  StorageVectorBucketsResponse,
  UpdateStorageBucketBody,
} from '../openapi/index.js'

interface RefIdNamespaceTableParams {
  ref: string
  id: string
  namespace: string
  table: string
}
interface RefIdNamespaceParams {
  ref: string
  id: string
  namespace: string
}

interface RefIdParams {
  ref: string
  id: string
}

interface FilterQuery {
  limit?: number
  offset?: number
  search?: string
  sortColumn?: 'id' | 'name' | 'updated_at' | 'created_at'
  sortOrder?: 'asc' | 'desc'
}
export const getAnalyticsBuckets = async (
  ref: string,
  query: FilterQuery
): Promise<StorageAnalyticsBucketsResponse> => {
  // TODO
  return {} as StorageAnalyticsBucketsResponse
}

export const createAnalyticsBucket = async (
  ref: string,
  body: CreateStorageAnalyticsBucketBody
): Promise<StorageAnalyticsBucketResponse> => {
  // TODO
  return {} as StorageAnalyticsBucketResponse
}

export const deleteAnalyticsBucket = async (
  params: RefIdParams
): Promise<StorageAnalyticsBucketDeleteResponse> => {
  // TODO
  return {} as StorageAnalyticsBucketDeleteResponse
}

export const getNamespaces = async (params: RefIdParams): Promise<NamespacesResponse> => {
  // TODO
  return {} as NamespacesResponse
}

export const createNamespace = async (
  params: RefIdParams,
  body: CreateNamespaceBody
): Promise<void> => {
  // TODO
}

export const deleteNamespace = async (params: RefIdNamespaceParams): Promise<void> => {
  // TODO
}

export const getNamespaceTables = async (
  params: RefIdNamespaceParams
): Promise<StorageAnalyticsBucketNamespaceTablesResponse> => {
  // TODO
  return {} as StorageAnalyticsBucketNamespaceTablesResponse
}

export const createNamespaceTable = async (
  params: RefIdNamespaceParams,
  body: CreateNamespaceTableBody
): Promise<NamespaceTableResponse> => {
  // TODO
  return {} as NamespaceTableResponse
}

export const dropNamespaceTable = async (
  params: RefIdNamespaceTableParams,
  purge?: boolean
): Promise<void> => {
  // TODO
}

export const getArchive = async (ref: string): Promise<GetArchiveResponse> => {
  // TODO
  return {
    archive_empty: false,
    file_url: '',
    fileUrl: '',
  }
}

export const createArchive = async (ref: string): Promise<void> => {
  // TODO
}

export const getBuckets = async (
  ref: string,
  query: FilterQuery
): Promise<StorageBucketListResponse> => {
  // TODO
  return [] as StorageBucketListResponse
}

export const createBucket = async (ref: string, body: CreateStorageBucketBody): Promise<void> => {
  // TODO
}

export const getBucket = async (params: RefIdParams): Promise<StorageBucketResponse> => {
  // TODO
  return {} as StorageBucketResponse
}

export const deleteBucket = async (params: RefIdParams): Promise<void> => {
  // TODO
}

export const updateBucket = async (
  params: RefIdParams,
  body: UpdateStorageBucketBody
): Promise<void> => {
  // TODO
}

export const emptyBucket = async (params: RefIdParams): Promise<void> => {
  // TODO: implement bucket emptying logic
}

async function copyObject(params: RefIdParams, body: CopyObjectBody): Promise<CopyObjectResponse> {
  // TODO
  return {} as CopyObjectResponse
}

async function deleteObjects(params: RefIdParams, body: DeleteObjectsBody): Promise<void> {
  // TODO
}

async function moveObject(body: MoveObjectBody): Promise<null> {
  return null
}

async function getObjects(body: GetObjectsBody, params: RefIdParams): Promise<StorageListResponse> {
  return {} as StorageListResponse
}

async function createPublicUrl(
  body: GetPublicUrlBody,
  params: RefIdParams
): Promise<PublicUrlResponse> {
  return {} as PublicUrlResponse
}

async function createSignedUrl(
  body: GetSignedUrlBody,
  params: RefIdParams
): Promise<SignedUrlResponse> {
  return {} as SignedUrlResponse
}

async function createSignedUrls(
  body: GetSignedUrlsBody,
  params: RefIdParams
): Promise<SignedUrlsResponse> {
  return {} as SignedUrlsResponse
}

async function getStorageCredentials(ref: string): Promise<GetStorageCredentialsResponse> {
  return {} as GetStorageCredentialsResponse
}

async function createStorageCredential(
  ref: string,
  description: string
): Promise<CreateStorageCredentialResponse> {
  return {} as CreateStorageCredentialResponse
}

async function deleteStorageCredential(ref: string, id: string): Promise<void> {}

async function getVectorBuckets(
  ref: string,
  nextToken?: string
): Promise<StorageVectorBucketsResponse> {
  return {} as StorageVectorBucketsResponse
}

async function createVectorBucket(ref: string, bucketName: string): Promise<void> {}

async function getVectorBucket(
  ref: string,
  bucketId: string
): Promise<StorageVectorBucketResponse> {
  return {} as StorageVectorBucketResponse
}

async function deleteVectorBucket(ref: string, bucketId: string): Promise<void> {}

async function createVectorBucketIndex(
  ref: string,
  bucketId: string,
  body: CreateBucketIndexBody
): Promise<void> {
  // TODO
}

async function getBucketIndexes(
  ref: string,
  bucketId: string
): Promise<StorageVectorBucketListIndexesResponse> {
  // implement fetching indexes
  return {} as StorageVectorBucketListIndexesResponse
}

async function deleteBucketIndex(ref: string, bucketId: string, indexName: string): Promise<void> {
  // Implement the deletion logic here (e.g., call database or storage service)
}

const storageRoutes: FastifyPluginAsync = async (app) => {
  app.get<{
    Params: { ref: string }
    Querystring: FilterQuery
  }>(
    '/:ref/analytics-buckets',
    {
      schema: {
        description: 'Gets list of analytics buckets',
        tags: ['Storage'],
        operationId: 'StorageAnalyticsBucketsController_getBuckets',
        params: {
          type: 'object',
          properties: {
            ref: { type: 'string', description: 'Project ref' },
          },
          required: ['ref'],
        },
        querystring: {
          type: 'object',
          properties: {
            limit: { type: 'number', description: 'Number of buckets to return per page' },
            offset: { type: 'number', description: 'Number of buckets to skip' },
            search: { type: 'string', description: 'Search buckets by name' },
            sortColumn: {
              type: 'string',
              enum: ['name', 'created_at', 'updated_at'],
              description: 'Sort column for buckets',
            },
            sortOrder: {
              type: 'string',
              enum: ['asc', 'desc'],
              description: 'Sort order for buckets',
            },
          },
        },
        response: {
          200: { $ref: 'StorageAnalyticsBucketsResponse' },
          401: { description: 'Unauthorized' },
          403: { description: 'Forbidden action' },
          429: { description: 'Rate limit exceeded' },
          500: { description: 'Failed to get list of analytics buckets' },
        },
      },
    },
    async (request, reply) => {
      const buckets = await getAnalyticsBuckets(request.params.ref, request.query)
      return reply.send(buckets)
    }
  )

  app.post<{ Params: { ref: string }; Body: CreateStorageAnalyticsBucketBody }>(
    '/:ref/analytics-buckets',
    {
      schema: {
        description: 'Create an analytics bucket',
        tags: ['Storage'],
        operationId: 'StorageAnalyticsBucketsController_createBucket',
        params: {
          type: 'object',
          properties: {
            ref: { type: 'string', description: 'Project ref' },
          },
          required: ['ref'],
        },
        body: { $ref: 'CreateStorageAnalyticsBucketBody' },
        response: {
          201: { $ref: 'StorageAnalyticsBucketResponse' },
          401: { description: 'Unauthorized' },
          403: { description: 'Forbidden action' },
          429: { description: 'Rate limit exceeded' },
          500: { description: 'Failed to create analytics bucket' },
        },
      },
    },
    async (request, reply) => {
      const bucket = await createAnalyticsBucket(request.params.ref, request.body)
      return reply.code(201).send(bucket)
    }
  )

  app.delete<{ Params: RefIdParams }>(
    '/:ref/analytics-buckets/:id',
    {
      schema: {
        description: 'Deletes an analytics bucket',
        tags: ['Storage'],
        operationId: 'StorageAnalyticsBucketIdController_deleteBucket',
        params: {
          type: 'object',
          properties: {
            ref: { type: 'string', description: 'Project ref' },
            id: { type: 'string', description: 'Analytics Bucket ID' },
          },
          required: ['ref', 'id'],
        },
        response: {
          200: { $ref: 'StorageAnalyticsBucketDeleteResponse' },
          401: { description: 'Unauthorized' },
          403: { description: 'Forbidden action' },
          429: { description: 'Rate limit exceeded' },
          500: { description: 'Failed to delete analytics bucket' },
        },
      },
    },
    async (request, reply) => {
      const result = await deleteAnalyticsBucket(request.params)
      return reply.send(result)
    }
  )

  app.get<{ Params: RefIdParams }>(
    '/:ref/analytics-buckets/:id/namespaces',
    {
      schema: {
        description: 'Gets list of namespaces from a bucket',
        tags: ['Storage'],
        operationId: 'StorageAnalyticsBucketNamespacesController_getNamespaces',
        params: {
          type: 'object',
          properties: {
            ref: {
              type: 'string',
              description: 'Project ref',
            },
            id: {
              type: 'string',
              description: 'Analytics Bucket ID',
            },
          },
          required: ['ref', 'id'],
        },
        response: {
          200: {
            $ref: 'NamespacesResponse',
          },
          401: { description: 'Unauthorized' },
          403: { description: 'Forbidden action' },
          429: { description: 'Rate limit exceeded' },
          500: {
            description: 'Failed to get list of namespaces',
          },
        },
      },
    },
    async (request, reply) => {
      const namespaces = await getNamespaces(request.params)
      return reply.send(namespaces)
    }
  )

  app.post<{ Params: RefIdParams; Body: CreateNamespaceBody }>(
    '/:ref/analytics-buckets/:id/namespaces',
    {
      schema: {
        description: 'Create a namespace within a bucket',
        tags: ['Storage'],
        operationId: 'StorageAnalyticsBucketNamespacesController_createNamespace',
        params: {
          type: 'object',
          properties: {
            ref: { type: 'string', description: 'Project ref' },
            id: {
              type: 'string',
              description: 'Analytics Bucket ID',
            },
          },
          required: ['ref', 'id'],
        },
        body: {
          $ref: 'CreateNamespaceBody',
        },
        response: {
          201: {
            description: 'Namespace created successfully',
            type: 'null',
          },
          401: { description: 'Unauthorized' },
          403: { description: 'Forbidden action' },
          429: { description: 'Rate limit exceeded' },
          500: {
            description: 'Failed to create namespace',
          },
        },
      },
    },
    async (request, reply) => {
      await createNamespace(request.params, request.body)
      return reply.code(201).send()
    }
  )

  app.delete<{ Params: RefIdNamespaceParams }>(
    '/:ref/analytics-buckets/:id/namespaces/:namespace',
    {
      schema: {
        description: 'Drop a namespace within an analytics bucket',
        tags: ['Storage'],
        operationId: 'StorageAnalyticsBucketNamespaceController_deleteNamespace',
        params: {
          type: 'object',
          properties: {
            ref: { type: 'string', description: 'Project ref' },
            id: {
              type: 'string',
              description: 'Analytics Bucket ID',
            },
            namespace: { type: 'string' },
          },
          required: ['ref', 'id', 'namespace'],
        },
        response: {
          200: {
            description: 'Namespace dropped successfully',
            type: 'null',
          },
          401: { description: 'Unauthorized' },
          403: { description: 'Forbidden action' },
          429: { description: 'Rate limit exceeded' },
          500: {
            description: 'Failed to drop namespace',
          },
        },
      },
    },
    async (request, reply) => {
      await deleteNamespace(request.params)
      return reply.send()
    }
  )

  app.get<{ Params: RefIdNamespaceParams }>(
    '/:ref/analytics-buckets/:id/namespaces/:namespace/tables',
    {
      schema: {
        description: 'Gets list of tables from a namespace',
        tags: ['Storage'],
        operationId: 'StorageAnalyticsBucketNamespaceTablesController_getTables',
        params: {
          type: 'object',
          properties: {
            ref: {
              type: 'string',
              description: 'Project ref',
            },
            id: {
              type: 'string',
              description: 'Analytics Bucket ID',
            },
            namespace: {
              type: 'string',
            },
          },
          required: ['ref', 'id', 'namespace'],
        },
        response: {
          200: {
            $ref: 'StorageAnalyticsBucketNamespaceTablesResponse',
          },
          401: { description: 'Unauthorized' },
          403: { description: 'Forbidden action' },
          429: { description: 'Rate limit exceeded' },
          500: {
            description: 'Failed to get list of tables buckets',
          },
        },
      },
    },
    async (request, reply) => {
      const tables = await getNamespaceTables(request.params)
      return reply.send(tables)
    }
  )

  app.post<{
    Params: RefIdNamespaceParams
    Body: CreateNamespaceTableBody
  }>(
    '/:ref/analytics-buckets/:id/namespaces/:namespace/tables',
    {
      schema: {
        description: 'Create a table within a namespace',
        tags: ['Storage'],
        operationId: 'StorageAnalyticsBucketNamespaceTablesController_createTable',
        params: {
          type: 'object',
          properties: {
            ref: { type: 'string', description: 'Project ref' },
            id: {
              type: 'string',
              description: 'Analytics Bucket ID',
            },
            namespace: { type: 'string' },
          },
          required: ['ref', 'id', 'namespace'],
        },
        body: {
          $ref: 'CreateNamespaceTableBody',
        },
        response: {
          201: {
            $ref: 'NamespaceTableResponse',
          },
          401: { description: 'Unauthorized' },
          403: { description: 'Forbidden action' },
          429: { description: 'Rate limit exceeded' },
          500: { description: 'Failed to create table' },
        },
      },
    },
    async (request, reply) => {
      const table = await createNamespaceTable(request.params, request.body)
      return reply.code(201).send(table)
    }
  )

  app.delete<{
    Params: RefIdNamespaceTableParams
    Querystring: {
      purge?: boolean
    }
  }>(
    '/:ref/analytics-buckets/:id/namespaces/:namespace/tables/:table',
    {
      schema: {
        description: 'Drop a table within a namespace',
        tags: ['Storage'],
        operationId: 'StorageAnalyticsBucketNamespaceTableController_dropTable',
        params: {
          type: 'object',
          properties: {
            ref: { type: 'string', description: 'Project ref' },
            id: {
              type: 'string',
              description: 'Analytics Bucket ID',
            },
            namespace: { type: 'string' },
            table: { type: 'string' },
          },
          required: ['ref', 'id', 'namespace', 'table'],
        },
        querystring: {
          type: 'object',
          properties: {
            purge: {
              type: 'boolean',
              description: 'Boolean string, true or false',
            },
          },
        },
        response: {
          200: {
            description: 'Table dropped successfully',
            type: 'null',
          },
          401: { description: 'Unauthorized' },
          403: { description: 'Forbidden action' },
          429: { description: 'Rate limit exceeded' },
          500: { description: 'Failed to drop table' },
        },
      },
    },
    async (request, reply) => {
      await dropNamespaceTable(request.params, request.query.purge)
      return reply.send()
    }
  )

  app.get<{ Params: { ref: string } }>(
    '/:ref/archive',
    {
      schema: {
        description: 'Gets project storage archive',
        tags: ['Storage'],
        operationId: 'StorageArchiveController_getArchive',
        params: {
          type: 'object',
          properties: {
            ref: {
              type: 'string',
              description: 'Project ref',
            },
          },
          required: ['ref'],
        },
        response: {
          200: {
            $ref: 'GetArchiveResponse',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden action',
          },
          429: {
            description: 'Rate limit exceeded',
          },
          500: {
            description: 'Failed to get project storage archive',
          },
        },
      },
    },
    async (request, reply) => {
      const archive = await getArchive(request.params.ref)
      return reply.send(archive)
    }
  )

  app.post<{ Params: { ref: string } }>(
    '/:ref/archive',
    {
      schema: {
        description: 'Creates project storage archive',
        tags: ['Storage'],
        operationId: 'StorageArchiveController_createArchive',
        params: {
          type: 'object',
          properties: {
            ref: {
              type: 'string',
              description: 'Project ref',
            },
          },
          required: ['ref'],
        },
        response: {
          201: {
            description: 'Archive created successfully',
            type: 'null',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden action',
          },
          429: {
            description: 'Rate limit exceeded',
          },
          500: {
            description: 'Failed to create project storage archive',
          },
        },
      },
    },
    async (request, reply) => {
      await createArchive(request.params.ref)
      return reply.code(201).send()
    }
  )

  app.get<{
    Params: { ref: string }
    Querystring: FilterQuery
  }>(
    '/:ref/buckets',
    {
      schema: {
        description: 'Gets list of buckets',
        tags: ['Storage'],
        operationId: 'StorageBucketsController_getBuckets',
        params: {
          type: 'object',
          properties: {
            ref: {
              type: 'string',
              description: 'Project ref',
            },
          },
          required: ['ref'],
        },
        querystring: {
          type: 'object',
          properties: {
            limit: { type: 'number' },
            offset: { type: 'number' },
            search: { type: 'string' },
            sortColumn: {
              type: 'string',
              enum: ['id', 'name', 'updated_at', 'created_at'],
            },
            sortOrder: {
              type: 'string',
              enum: ['asc', 'desc'],
            },
          },
          additionalProperties: false,
        },
        response: {
          200: {
            $ref: 'StorageBucketListResponse',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden action',
          },
          429: {
            description: 'Rate limit exceeded',
          },
          500: {
            description: 'Failed to get list of buckets',
          },
        },
      },
    },
    async (request, reply) => {
      const buckets = await getBuckets(request.params.ref, request.query)
      return reply.send(buckets)
    }
  )

  app.post<{ Params: { ref: string }; Body: CreateStorageBucketBody }>(
    '/:ref/buckets',
    {
      schema: {
        description: 'Create bucket',
        tags: ['Storage'],
        operationId: 'StorageBucketsController_createBucket',
        params: {
          type: 'object',
          properties: {
            ref: {
              type: 'string',
              description: 'Project ref',
            },
          },
          required: ['ref'],
        },
        body: {
          $ref: 'CreateStorageBucketBody',
        },
        response: {
          201: {
            description: 'Bucket created successfully',
            type: 'null',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden action',
          },
          429: {
            description: 'Rate limit exceeded',
          },
          500: {
            description: 'Failed to create bucket',
          },
        },
      },
    },
    async (request, reply) => {
      await createBucket(request.params.ref, request.body)
      return reply.code(201).send()
    }
  )

  app.get<{ Params: RefIdParams }>(
    '/:ref/buckets/:id',
    {
      schema: {
        description: 'Gets bucket',
        tags: ['Storage'],
        operationId: 'StorageBucketIdController_getBucket',
        params: {
          type: 'object',
          properties: {
            ref: {
              type: 'string',
              description: 'Project ref',
            },
            id: {
              type: 'string',
              description: 'Storage bucket id',
            },
          },
          required: ['ref', 'id'],
        },
        response: {
          200: {
            $ref: 'StorageBucketResponse',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden action',
          },
          429: {
            description: 'Rate limit exceeded',
          },
          500: {
            description: 'Failed to get bucket',
          },
        },
      },
    },
    async (request, reply) => {
      const bucket = await getBucket(request.params)
      return reply.send(bucket)
    }
  )

  app.delete<{ Params: RefIdParams }>(
    '/:ref/buckets/:id',
    {
      schema: {
        description: 'Deletes bucket',
        tags: ['Storage'],
        operationId: 'StorageBucketIdController_deleteBucket',
        params: {
          type: 'object',
          properties: {
            ref: {
              type: 'string',
              description: 'Project ref',
            },
            id: {
              type: 'string',
              description: 'Storage bucket id',
            },
          },
          required: ['ref', 'id'],
        },
        response: {
          200: {
            description: 'Bucket deleted successfully',
            type: 'null',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden action',
          },
          429: {
            description: 'Rate limit exceeded',
          },
          500: {
            description: 'Failed to delete bucket',
          },
        },
      },
    },
    async (request, reply) => {
      await deleteBucket(request.params)
      return reply.send()
    }
  )

  app.patch<{ Params: RefIdParams; Body: UpdateStorageBucketBody }>(
    '/:ref/buckets/:id',
    {
      schema: {
        description: 'Updates bucket',
        tags: ['Storage'],
        operationId: 'StorageBucketIdController_updateBucket',
        params: {
          type: 'object',
          properties: {
            ref: {
              type: 'string',
              description: 'Project ref',
            },
            id: {
              type: 'string',
              description: 'Storage bucket id',
            },
          },
          required: ['ref', 'id'],
        },
        body: {
          $ref: 'UpdateStorageBucketBody',
        },
        response: {
          200: {
            description: 'Bucket updated successfully',
            type: 'null',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden action',
          },
          429: {
            description: 'Rate limit exceeded',
          },
          500: {
            description: 'Failed to update bucket',
          },
        },
      },
    },
    async (request, reply) => {
      await updateBucket(request.params, request.body)
      return reply.send()
    }
  )

  app.post<{ Params: RefIdParams }>(
    '/:ref/buckets/:id/empty',
    {
      schema: {
        description: 'Removes all objects inside a single bucket.',
        tags: ['Storage'],
        operationId: 'StorageBucketIdController_emptyBucket',
        params: {
          type: 'object',
          properties: {
            ref: {
              type: 'string',
              description: 'Project ref',
            },
            id: {
              type: 'string',
              description: 'Storage bucket id',
            },
          },
          required: ['ref', 'id'],
        },
        response: {
          201: {
            description: 'Bucket emptied successfully',
            type: 'null',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden action',
          },
          429: {
            description: 'Rate limit exceeded',
          },
          500: {
            description: 'Failed to empty bucket',
          },
        },
      },
    },
    async (request, reply) => {
      await emptyBucket(request.params)
      return reply.code(201).send()
    }
  )

  app.delete<{ Params: RefIdParams; Body: DeleteObjectsBody }>(
    '/:ref/buckets/:id/objects',
    {
      schema: {
        description: 'Deletes objects',
        tags: ['Storage'],
        operationId: 'StorageObjectsController_deleteObjects',
        params: {
          type: 'object',
          properties: {
            ref: { type: 'string', description: 'Project ref' },
            id: { type: 'string', description: 'Storage bucket id' },
          },
          required: ['ref', 'id'],
        },
        body: { $ref: 'DeleteObjectsBody' },
        response: {
          200: { type: 'null' },
          401: { type: 'null', description: 'Unauthorized' },
          403: { type: 'null', description: 'Forbidden action' },
          429: { type: 'null', description: 'Rate limit exceeded' },
          500: { type: 'null', description: 'Failed to delete objects' },
        },
      },
    },
    async (request, reply) => {
      await deleteObjects(request.params, request.body)
      return reply.status(200).send()
    }
  )

  app.post<{ Params: RefIdParams; Body: CopyObjectBody }>(
    '/:ref/buckets/:id/objects/copy',
    {
      schema: {
        description: 'Copys object',
        tags: ['Storage'],
        operationId: 'StorageObjectsController_copyObject',
        params: {
          type: 'object',
          properties: {
            ref: { type: 'string', description: 'Project ref' },
            id: { type: 'string', description: 'Storage bucket id' },
          },
          required: ['ref', 'id'],
        },
        body: { $ref: 'CopyObjectBody' },
        response: {
          201: { $ref: 'CopyObjectResponse' },
          401: { type: 'null', description: 'Unauthorized' },
          403: { type: 'null', description: 'Forbidden action' },
          429: { type: 'null', description: 'Rate limit exceeded' },
          500: { type: 'null', description: 'Failed to copy object' },
        },
      },
    },
    async (request, reply) => {
      const result = await copyObject(request.params, request.body)
      return reply.status(201).send(result)
    }
  )

  app.post<{
    Params: RefIdParams
    Body: GetObjectsBody
  }>(
    '/:ref/buckets/:id/objects/list',
    {
      schema: {
        description: 'Gets list of objects with the given bucket',
        tags: ['Storage'],
        operationId: 'StorageObjectsController_getObjects',
        params: {
          type: 'object',
          properties: {
            ref: { type: 'string' },
            id: { type: 'string' },
          },
          required: ['ref', 'id'],
        },
        body: { $ref: 'GetObjectsBody' },
        response: {
          201: { $ref: 'StorageObject' },
          401: { type: 'null', description: 'Unauthorized' },
          403: { type: 'null', description: 'Forbidden action' },
          429: { type: 'null', description: 'Rate limit exceeded' },
          500: { type: 'null', description: 'Failed to get list of objects' },
        },
      },
    },
    async (request, reply) => {
      const objects = getObjects(request.body, request.params)

      return reply.code(201).send(objects)
    }
  )

  app.post<{
    Params: RefIdParams
    Body: MoveObjectBody
  }>(
    '/:ref/buckets/:id/objects/move',
    {
      schema: {
        description: 'Move object',
        tags: ['Storage'],
        operationId: 'StorageObjectsController_moveObject',
        params: {
          type: 'object',
          properties: {
            ref: { type: 'string' },
            id: { type: 'string' },
          },
          required: ['ref', 'id'],
        },
        body: { $ref: 'MoveObjectBody' },
        response: {
          201: { type: 'null' },
          401: { type: 'null', description: 'Unauthorized' },
          403: { type: 'null', description: 'Forbidden action' },
          429: { type: 'null', description: 'Rate limit exceeded' },
          500: { type: 'null', description: 'Failed to move object' },
        },
      },
    },
    async (request, reply) => {
      await moveObject(request.body)
      return reply.code(201).send()
    }
  )

  app.post<{
    Params: RefIdParams
    Body: GetPublicUrlBody
  }>(
    '/:ref/buckets/:id/objects/public-url',
    {
      schema: {
        description: 'Creates URL for an asset in a public bucket',
        tags: ['Storage'],
        operationId: 'StorageObjectsController_createPublicUrl',
        params: {
          type: 'object',
          properties: {
            ref: { type: 'string', description: 'Project ref' },
            id: { type: 'string', description: 'Storage bucket id' },
          },
          required: ['ref', 'id'],
        },
        body: { $ref: 'GetPublicUrlBody' },
        response: {
          201: { $ref: 'PublicUrlResponse' },
          401: { type: 'null', description: 'Unauthorized' },
          403: { type: 'null', description: 'Forbidden action' },
          429: { type: 'null', description: 'Rate limit exceeded' },
          500: { type: 'null', description: 'Failed to create public URL' },
        },
      },
    },
    async (request, reply) => {
      // TODO: Implement actual public URL creation logic
      const publicUrl = createPublicUrl(request.body, request.params)

      return reply.code(201).send(publicUrl)
    }
  )

  app.post<{
    Params: RefIdParams
    Body: GetSignedUrlBody
  }>(
    '/:ref/buckets/:id/objects/sign',
    {
      schema: {
        description: 'Creates a signed URL for a single object',
        tags: ['Storage'],
        operationId: 'StorageObjectsController_createSignedUrl',
        params: {
          type: 'object',
          properties: {
            ref: { type: 'string', description: 'Project ref' },
            id: { type: 'string', description: 'Storage bucket id' },
          },
          required: ['ref', 'id'],
        },
        body: { $ref: 'GetSignedUrlBody' },
        response: {
          201: { $ref: 'SignedUrlResponse' },
          401: { type: 'null', description: 'Unauthorized' },
          403: { type: 'null', description: 'Forbidden action' },
          429: { type: 'null', description: 'Rate limit exceeded' },
          500: { type: 'null', description: 'Failed to create a signed URL' },
        },
      },
    },
    async (request, reply) => {
      // TODO: Implement real signing logic
      const signedUrl = createSignedUrl(request.body, request.params)

      return reply.code(201).send(signedUrl)
    }
  )

  app.post<{
    Params: RefIdParams
    Body: GetSignedUrlsBody
  }>(
    '/:ref/buckets/:id/objects/sign-multi',
    {
      schema: {
        description: 'Gets multiple signed URLs',
        tags: ['Storage'],
        operationId: 'StorageObjectsController_createSignedUrls',
        params: {
          type: 'object',
          properties: {
            ref: { type: 'string', description: 'Project ref' },
            id: { type: 'string', description: 'Storage bucket id' },
          },
          required: ['ref', 'id'],
        },
        body: { $ref: 'GetSignedUrlsBody' },
        response: {
          201: { $ref: 'SignedUrlsResponse' },
          401: { type: 'null', description: 'Unauthorized' },
          403: { type: 'null', description: 'Forbidden action' },
          429: { type: 'null', description: 'Rate limit exceeded' },
          500: { type: 'null', description: 'Failed to get multiple signed URLs' },
        },
      },
    },
    async (request, reply) => {
      // TODO: Implement signing logic
      const response = createSignedUrls(request.body, request.params)

      return reply.code(201).send(response)
    }
  )

  app.get<{
    Params: { ref: string }
  }>(
    '/:ref/credentials',
    {
      schema: {
        description: 'Gets project storage credentials',
        tags: ['Storage'],
        operationId: 'StorageS3CredentialsController_getAllCredentials',
        params: {
          type: 'object',
          properties: { ref: { type: 'string', description: 'Project ref' } },
          required: ['ref'],
        },
        response: {
          200: { $ref: 'GetStorageCredentialsResponse' },
          401: { type: 'null', description: 'Unauthorized' },
          403: { type: 'null', description: 'Forbidden action' },
          429: { type: 'null', description: 'Rate limit exceeded' },
          500: { type: 'null', description: 'Failed to get project storage credentials' },
        },
      },
    },
    async (request, reply) => {
      const { ref } = request.params

      // TODO: Fetch storage credentials
      const response = await getStorageCredentials(ref)

      return reply.code(200).send(response)
    }
  )

  app.post<{
    Params: { ref: string }
    Body: CreateStorageCredentialBody
  }>(
    '/:ref/credentials',
    {
      schema: {
        description: 'Creates project storage credential',
        tags: ['Storage'],
        operationId: 'StorageS3CredentialsController_createCredential',
        params: {
          type: 'object',
          properties: { ref: { type: 'string', description: 'Project ref' } },
          required: ['ref'],
        },
        body: { $ref: 'CreateStorageCredentialBody' },
        response: {
          201: { $ref: 'CreateStorageCredentialResponse' },
          401: { type: 'null', description: 'Unauthorized' },
          403: { type: 'null', description: 'Forbidden action' },
          429: { type: 'null', description: 'Rate limit exceeded' },
          500: { type: 'null', description: 'Failed to create project storage credential' },
        },
      },
    },
    async (request, reply) => {
      const { ref } = request.params
      const { description } = request.body

      // TODO: Create storage credential
      const response = await createStorageCredential(ref, description)

      return reply.code(201).send(response)
    }
  )

  app.delete<{
    Params: RefIdParams
  }>(
    '/:ref/credentials/:id',
    {
      schema: {
        description: 'Deletes project storage credential',
        tags: ['Storage'],
        operationId: 'StorageS3CredentialsController_deleteCredential',
        params: {
          type: 'object',
          properties: { ref: { type: 'string' }, id: { type: 'string' } },
          required: ['ref', 'id'],
        },
        response: {
          204: { type: 'null', description: 'Deleted successfully' },
          401: { type: 'null', description: 'Unauthorized' },
          403: { type: 'null', description: 'Forbidden action' },
          429: { type: 'null', description: 'Rate limit exceeded' },
          500: { type: 'null', description: 'Failed to delete project storage credential' },
        },
      },
    },
    async (request, reply) => {
      const { ref, id } = request.params

      // TODO: Delete credential
      await deleteStorageCredential(ref, id)

      return reply.code(204).send()
    }
  )

  app.get<{
    Params: { ref: string }
    Querystring: { nextToken?: string }
  }>(
    '/:ref/vector-buckets',
    {
      schema: {
        description: 'Gets list of vector buckets',
        tags: ['Storage'],
        operationId: 'StorageVectorBucketsController_getBuckets',
        params: {
          type: 'object',
          properties: { ref: { type: 'string', description: 'Project ref' } },
          required: ['ref'],
        },
        querystring: {
          type: 'object',
          properties: { nextToken: { type: 'string' } },
        },
        response: {
          200: { $ref: 'StorageVectorBucketsResponse' },
          401: { type: 'null', description: 'Unauthorized' },
          403: { type: 'null', description: 'Forbidden action' },
          429: { type: 'null', description: 'Rate limit exceeded' },
          500: { type: 'null', description: 'Failed to get list of vector buckets' },
        },
      },
    },
    async (request, reply) => {
      const { ref } = request.params
      const { nextToken } = request.query

      // TODO: Fetch the list of vector buckets
      const response = await getVectorBuckets(ref, nextToken)

      return reply.code(200).send(response)
    }
  )

  app.post<{
    Params: { ref: string }
    Body: CreateStorageVectorBucketBody
  }>(
    '/:ref/vector-buckets',
    {
      schema: {
        description: 'Create vector bucket',
        tags: ['Storage'],
        operationId: 'StorageVectorBucketsController_createBucket',
        params: {
          type: 'object',
          properties: { ref: { type: 'string', description: 'Project ref' } },
          required: ['ref'],
        },
        body: { $ref: 'CreateStorageVectorBucketBody' },
        response: {
          201: { type: 'null', description: 'Vector bucket created successfully' },
          401: { type: 'null', description: 'Unauthorized' },
          403: { type: 'null', description: 'Forbidden action' },
          429: { type: 'null', description: 'Rate limit exceeded' },
          500: { type: 'null', description: 'Failed to create vector bucket' },
        },
      },
    },
    async (request, reply) => {
      const { ref } = request.params
      const { bucketName } = request.body

      // TODO: Implement vector bucket creation logic
      await createVectorBucket(ref, bucketName)

      return reply.code(201).send()
    }
  )

  app.get<{
    Params: RefIdParams
  }>(
    '/:ref/vector-buckets/:id',
    {
      schema: {
        description: 'Get bucket',
        tags: ['Storage'],
        operationId: 'StorageVectorBucketIdController_getBucket',
        params: {
          type: 'object',
          properties: {
            ref: { type: 'string', description: 'Project ref' },
            id: { type: 'string', description: 'Vector storage bucket name' },
          },
          required: ['ref', 'id'],
        },
        response: {
          200: { $ref: 'StorageVectorBucketResponse' },
          401: { type: 'null', description: 'Unauthorized' },
          403: { type: 'null', description: 'Forbidden action' },
          429: { type: 'null', description: 'Rate limit exceeded' },
          500: { type: 'null', description: 'Failed to get bucket' },
        },
      },
    },
    async (request, reply) => {
      const { ref, id } = request.params

      // TODO: Implement your logic to fetch the vector bucket
      const bucket = await getVectorBucket(ref, id)

      return reply.code(200).send(bucket)
    }
  )

  app.delete<{
    Params: RefIdParams
  }>(
    '/:ref/vector-buckets/:id',
    {
      schema: {
        description: 'Delete bucket',
        tags: ['Storage'],
        operationId: 'StorageVectorBucketIdController_deleteBucket',
        params: {
          type: 'object',
          properties: {
            ref: { type: 'string', description: 'Project ref' },
            id: { type: 'string', description: 'Vector storage bucket name' },
          },
          required: ['ref', 'id'],
        },
        response: {
          200: { type: 'null', description: 'Bucket deleted successfully' },
          401: { type: 'null', description: 'Unauthorized' },
          403: { type: 'null', description: 'Forbidden action' },
          429: { type: 'null', description: 'Rate limit exceeded' },
          500: { type: 'null', description: 'Failed to delete bucket' },
        },
      },
    },
    async (request, reply) => {
      const { ref, id } = request.params

      // TODO: Implement your logic to delete the vector bucket
      await deleteVectorBucket(ref, id)

      return reply.code(200).send()
    }
  )

  app.get<{
    Params: RefIdParams
  }>(
    '/:ref/vector-buckets/:id/indexes',
    {
      schema: {
        description: 'Gets bucket indexes',
        tags: ['Storage'],
        operationId: 'StorageVectorBucketIdIndexesController_getBucketIndexes',
        params: {
          type: 'object',
          properties: {
            ref: { type: 'string', description: 'Project ref' },
            id: { type: 'string', description: 'Vector storage bucket name' },
          },
          required: ['ref', 'id'],
        },
        response: {
          200: { $ref: 'StorageVectorBucketListIndexesResponse' },
          401: { description: 'Unauthorized', type: 'null' },
          403: { description: 'Forbidden action', type: 'null' },
          429: { description: 'Rate limit exceeded', type: 'null' },
          500: { description: 'Failed to get bucket indexes', type: 'null' },
        },
      },
    },
    async (request, reply) => {
      const data = await getBucketIndexes(request.params.ref, request.params.id)
      return reply.send(data)
    }
  )

  app.post<{
    Params: RefIdParams
    Body: CreateBucketIndexBody
  }>(
    '/:ref/vector-buckets/:id/indexes',
    {
      schema: {
        description: 'Create index in vector bucket',
        tags: ['Storage'],
        operationId: 'StorageVectorBucketIdIndexesController_createBucketIndex',
        params: {
          type: 'object',
          properties: {
            ref: { type: 'string', description: 'Project ref' },
            id: { type: 'string', description: 'Vector storage bucket name' },
          },
          required: ['ref', 'id'],
        },
        body: { $ref: 'CreateBucketIndexBody' },
        response: {
          201: { description: 'Index created successfully', type: 'null' },
          401: { description: 'Unauthorized', type: 'null' },
          403: { description: 'Forbidden action', type: 'null' },
          429: { description: 'Rate limit exceeded', type: 'null' },
          500: { description: 'Failed to create vector bucket index', type: 'null' },
        },
      },
    },
    async (request, reply) => {
      const { ref, id } = request.params
      const body = request.body

      // TODO: Implement your create vector bucket index logic
      await createVectorBucketIndex(ref, id, body)

      return reply.code(201).send()
    }
  )

  app.delete<{
    Params: { ref: string; id: string; indexName: string }
    Reply: void
  }>(
    '/:ref/vector-buckets/:id/indexes/:indexName',
    {
      schema: {
        description: 'Deletes bucket index',
        tags: ['Storage'],
        operationId: 'StorageVectorBucketIdIndexesController_deleteBucketIndex',
        params: {
          type: 'object',
          properties: {
            ref: { type: 'string', description: 'Project ref' },
            id: { type: 'string', description: 'Vector storage bucket name' },
            indexName: { type: 'string', description: 'Vector storage bucket index name' },
          },
          required: ['ref', 'id', 'indexName'],
        },
        response: {
          200: { description: 'Bucket index deleted successfully', type: 'null' },
          401: { description: 'Unauthorized', type: 'null' },
          403: { description: 'Forbidden action', type: 'null' },
          429: { description: 'Rate limit exceeded', type: 'null' },
          500: { description: 'Failed to delete bucket index', type: 'null' },
        },
      },
    },
    async (request, reply) => {
      try {
        await deleteBucketIndex(request.params.ref, request.params.id, request.params.indexName)
        return reply.status(200).send()
      } catch (err: any) {
        if (err.statusCode) return reply.status(err.statusCode).send()
        return reply.status(500).send()
      }
    }
  )
}

export default storageRoutes
