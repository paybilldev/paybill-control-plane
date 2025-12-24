import { z } from 'zod'
import { zodToJsonSchema } from '../utils/zod-to-json-schema.js'

const ProjectClonedStatusResponseSchema = z.object({
  cloned_from: z
    .object({
      project_id: z.number(),
      source_project: z.object({
        name: z.string(),
        ref: z.string(),
      }),
    })
    .optional(),

  clones: z.array(
    z.object({
      inserted_at: z.string().nullable(),
      project_id: z.number(),
      status: z.enum(['COMPLETED', 'IN_PROGRESS', 'FAILED', 'REMOVED']),
      target_project: z.object({
        name: z.string(),
        ref: z.string(),
      }),
      target_project_id: z.number(),
      updated_at: z.string().nullable(),
    })
  ),

  id: z.number(),
  ref: z.string(),
})

const ProjectClonedResponseSchema = z.object({
  source_project_ref: z.string(),
  target_disk_size_gb: z.number(),
  target_instance_size: z.string(),
  target_project_ref: z.string(),
})

const CloneProjectSchema = z.object({
  cloneBackupId: z.number().optional(),
  newDbPass: z.string(),
  newProjectName: z.string(),
  recoveryTimeTarget: z.number().optional(),
})

const CloneBackupsResponseSchema = z.object({
  backups: z.array(
    z.object({
      id: z.number(),
      inserted_at: z.string(),
      isPhysicalBackup: z.boolean(),
      project_id: z.number(),
      status: z.enum(['COMPLETED', 'FAILED', 'PENDING', 'REMOVED', 'ARCHIVED', 'CANCELLED']),
    })
  ),

  physicalBackupData: z.object({
    earliestPhysicalBackupDateUnix: z.number().optional(),
    latestPhysicalBackupDateUnix: z.number().optional(),
  }),

  pitr_enabled: z.boolean(),
  region: z.string(),
  target_compute_size: z.string(),
  target_volume_size_gb: z.number(),
  tierKey: z.string(),
  walg_enabled: z.boolean(),
})

const RestorePhysicalBackupBodySchema = z.object({
  id: z.number(),
  recovery_time_target: z.string(),
})

const RestoreLogicalBackupBodySchema = z.object({
  id: z.number(),
})

const PointInTimeRestoreBodySchema = z.object({
  recovery_time_target_unix: z.number(),
})

const DownloadableBackupsResponseSchema = z.object({
  backups: z.array(
    z.object({
      id: z.number(),
      inserted_at: z.string(),
      isPhysicalBackup: z.boolean(),
      project_id: z.number(),
      status: z.enum(['COMPLETED', 'FAILED', 'PENDING', 'REMOVED', 'ARCHIVED', 'CANCELLED']),
    })
  ),

  status: z.enum(['ok', 'physical-backups-enabled', 'project-not-active']),
})

const DownloadBackupResponseSchema = z.object({
  fileUrl: z.string(),
})

const DownloadBackupBodySchema = z.object({
  id: z.number(),
})

const BackupsResponseSchema = z.object({
  backups: z.array(
    z.object({
      id: z.number(),
      inserted_at: z.string(),
      isPhysicalBackup: z.boolean(),
      project_id: z.number(),
      status: z.enum(['COMPLETED', 'FAILED', 'PENDING', 'REMOVED', 'ARCHIVED', 'CANCELLED']),
    })
  ),

  physicalBackupData: z.object({
    earliestPhysicalBackupDateUnix: z.number().optional(),
    latestPhysicalBackupDateUnix: z.number().optional(),
  }),

  pitr_enabled: z.boolean(),
  region: z.string(),
  tierKey: z.string(),
  walg_enabled: z.boolean(),
})

export type BackupsResponse = z.infer<typeof BackupsResponseSchema>

export const BackupsResponseJsonSchema = zodToJsonSchema(BackupsResponseSchema, {
  name: 'BackupsResponse',
})

export type DownloadBackupBody = z.infer<typeof DownloadBackupBodySchema>

export const DownloadBackupBodyJsonSchema = zodToJsonSchema(DownloadBackupBodySchema, {
  name: 'DownloadBackupBody',
})

export type DownloadBackupResponse = z.infer<typeof DownloadBackupResponseSchema>

export const DownloadBackupResponseJsonSchema = zodToJsonSchema(DownloadBackupResponseSchema, {
  name: 'DownloadBackupResponse',
})

export type DownloadableBackupsResponse = z.infer<typeof DownloadableBackupsResponseSchema>

export const DownloadableBackupsResponseJsonSchema = zodToJsonSchema(
  DownloadableBackupsResponseSchema,
  {
    name: 'DownloadableBackupsResponse',
  }
)

export type PointInTimeRestoreBody = z.infer<typeof PointInTimeRestoreBodySchema>

export const PointInTimeRestoreBodyJsonSchema = zodToJsonSchema(PointInTimeRestoreBodySchema, {
  name: 'PointInTimeRestoreBody',
})

export type RestoreLogicalBackupBody = z.infer<typeof RestoreLogicalBackupBodySchema>

export const RestoreLogicalBackupBodyJsonSchema = zodToJsonSchema(RestoreLogicalBackupBodySchema, {
  name: 'RestoreLogicalBackupBody',
})

export type RestorePhysicalBackupBody = z.infer<typeof RestorePhysicalBackupBodySchema>

export const RestorePhysicalBackupBodyJsonSchema = zodToJsonSchema(
  RestorePhysicalBackupBodySchema,
  {
    name: 'RestorePhysicalBackupBody',
  }
)

export type CloneBackupsResponse = z.infer<typeof CloneBackupsResponseSchema>

export const CloneBackupsResponseJsonSchema = zodToJsonSchema(CloneBackupsResponseSchema, {
  name: 'CloneBackupsResponse',
})

export type CloneProject = z.infer<typeof CloneProjectSchema>

export const CloneProjectJsonSchema = zodToJsonSchema(CloneProjectSchema, {
  name: 'CloneProject',
})

export type ProjectClonedResponse = z.infer<typeof ProjectClonedResponseSchema>

export const ProjectClonedResponseJsonSchema = zodToJsonSchema(ProjectClonedResponseSchema, {
  name: 'ProjectClonedResponse',
})

export type ProjectClonedStatusResponse = z.infer<typeof ProjectClonedStatusResponseSchema>

export const ProjectClonedStatusResponseJsonSchema = zodToJsonSchema(
  ProjectClonedStatusResponseSchema,
  {
    name: 'ProjectClonedStatusResponse',
  }
)
