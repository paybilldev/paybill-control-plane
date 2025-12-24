import { z } from 'zod'
import { zodToJsonSchema } from '../utils/zod-to-json-schema.js'

export const ConfirmCreateSubscriptionChangeBodySchema = z.object({
  name: z.string(),
  payment_intent_id: z.string(),
  kind: z.string().optional(),
  size: z.string().optional(),
})

export const CreateAwsBilledOrganizationBodySchema = z.object({
  buyer_id: z.string(),
  name: z.string(),
  kind: z.string().optional(),
  size: z.string().optional(),
})

// Enum for metric types
const MetricEnum = z.enum([
  'EGRESS',
  'CACHED_EGRESS',
  'DATABASE_SIZE',
  'STORAGE_SIZE',
  'MONTHLY_ACTIVE_USERS',
  'MONTHLY_ACTIVE_SSO_USERS',
  'FUNCTION_INVOCATIONS',
  'FUNCTION_CPU_MILLISECONDS',
  'STORAGE_IMAGES_TRANSFORMED',
  'REALTIME_MESSAGE_COUNT',
  'REALTIME_PEAK_CONNECTIONS',
  'DISK_SIZE_GB_HOURS_GP3',
  'DISK_SIZE_GB_HOURS_IO2',
  'AUTH_MFA_PHONE',
  'AUTH_MFA_WEB_AUTHN',
  'LOG_DRAIN_EVENTS',
  'MONTHLY_ACTIVE_THIRD_PARTY_USERS',
  'DISK_THROUGHPUT_GP3',
  'DISK_IOPS_GP3',
  'DISK_IOPS_IO2',
  'COMPUTE_HOURS_BRANCH',
  'COMPUTE_HOURS_XS',
  'COMPUTE_HOURS_SM',
  'COMPUTE_HOURS_MD',
  'COMPUTE_HOURS_L',
  'COMPUTE_HOURS_XL',
  'COMPUTE_HOURS_2XL',
  'COMPUTE_HOURS_4XL',
  'COMPUTE_HOURS_8XL',
  'COMPUTE_HOURS_12XL',
  'COMPUTE_HOURS_16XL',
  'COMPUTE_HOURS_24XL',
  'COMPUTE_HOURS_24XL_OPTIMIZED_CPU',
  'COMPUTE_HOURS_24XL_OPTIMIZED_MEMORY',
  'COMPUTE_HOURS_24XL_HIGH_MEMORY',
  'COMPUTE_HOURS_48XL',
  'COMPUTE_HOURS_48XL_OPTIMIZED_CPU',
  'COMPUTE_HOURS_48XL_OPTIMIZED_MEMORY',
  'COMPUTE_HOURS_48XL_HIGH_MEMORY',
  'CUSTOM_DOMAIN',
  'PITR_7',
  'PITR_14',
  'PITR_28',
  'IPV4',
  'LOG_DRAIN',
])

const UsageBreakdownSchema = z
  .object({
    egress_function: z.number(),
    egress_graphql: z.number(),
    egress_logdrain: z.number(),
    egress_realtime: z.number(),
    egress_rest: z.number(),
    egress_storage: z.number(),
    egress_supavisor: z.number(),
  })
  .nullable()

const DailyUsageItemSchema = z.object({
  date: z.string(),
  metric: MetricEnum,
  usage: z.number(),
  usage_original: z.number(),
  breakdown: UsageBreakdownSchema,
})

// Project allocation
const ProjectAllocationSchema = z.object({
  hours: z.number().optional(),
  name: z.string(),
  ref: z.string(),
  usage: z.number(),
})

// Individual usage
const UsageItemSchema = z.object({
  available_in_plan: z.boolean(),
  capped: z.boolean(),
  cost: z.number(),
  metric: MetricEnum,
  pricing_free_units: z.number().optional(),
  pricing_package_price: z.number().optional(),
  pricing_package_size: z.number().optional(),
  pricing_per_unit_price: z.number().optional(),
  pricing_strategy: z.enum(['UNIT', 'PACKAGE', 'TIERED', 'NONE']),
  project_allocations: z.array(ProjectAllocationSchema),
  unit_price_desc: z.string(),
  unlimited: z.boolean(),
  usage: z.number(),
  usage_original: z.number(),
})

// Full response
export const OrgUsageResponseSchema = z.object({
  usage_billing_enabled: z.boolean(),
  usages: z.array(UsageItemSchema),
})

// Request body for create/update
const CreateTaxIdBodySchema = z.object({
  country: z.string().optional(),
  type: z.string(),
  value: z.string(),
})

const BaseSSOProviderSchema = z.object({
  domains: z.array(z.string()),
  email_mapping: z.array(z.string()),
  enabled: z.boolean(),
  first_name_mapping: z.array(z.string()).optional(),
  join_org_on_signup_enabled: z.boolean(),
  join_org_on_signup_role: z.enum(['Administrator', 'Developer', 'Owner', 'Read-only']).optional(),
  last_name_mapping: z.array(z.string()).optional(),
  metadata_xml_file: z.string().optional(),
  metadata_xml_url: z.string().url().optional(),
  user_name_mapping: z.array(z.string()).optional(),
})

// Union to enforce either metadata_xml_file or metadata_xml_url
const SSOProviderSchema = z.union([
  BaseSSOProviderSchema.extend({
    metadata_xml_file: z.string(),
    metadata_xml_url: z.string().optional(),
  }),
  BaseSSOProviderSchema.extend({
    metadata_xml_file: z.string().optional(),
    metadata_xml_url: z.string().url(),
  }),
])

const RoleSchema = z.object({
  base_role_id: z.number(),
  description: z.string().nullable(),
  id: z.number(),
  name: z.string(),
  project_ids: z.array(z.number()).nullable(),
})

const OrganizationRoleResponseSchema = z.object({
  org_scoped_roles: z.array(RoleSchema),
  project_scoped_roles: z.array(RoleSchema),
})

const DatabaseSchema = z.object({
  cloud_provider: z.string(),
  disk_last_modified_at: z.string().optional(),
  disk_throughput_mbps: z.number().optional(),
  disk_type: z.enum(['gp3', 'io2']).optional(),
  disk_volume_size_gb: z.number().optional(),
  identifier: z.string(),
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
  region: z.string(),
  status: z.enum([
    'ACTIVE_HEALTHY',
    'ACTIVE_UNHEALTHY',
    'COMING_UP',
    'GOING_DOWN',
    'INIT_FAILED',
    'REMOVED',
    'RESTORING',
    'UNKNOWN',
    'INIT_READ_REPLICA',
    'INIT_READ_REPLICA_FAILED',
    'RESTARTING',
    'RESIZING',
  ]),
  type: z.enum(['PRIMARY', 'READ_REPLICA']),
})

const ProjectSchema = z.object({
  cloud_provider: z.string(),
  databases: z.array(DatabaseSchema),
  inserted_at: z.string(),
  is_branch: z.boolean(),
  name: z.string(),
  ref: z.string(),
  region: z.string(),
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
})

const PaginationSchema = z.object({
  count: z.number(),
  limit: z.number(),
  offset: z.number(),
})

const OrganizationProjectsResponseSchema = z.object({
  pagination: PaginationSchema,
  projects: z.array(ProjectSchema),
})

const MarkDefaultPaymentMethodBodySchema = z.object({
  payment_method_id: z.string(),
})

const DetachPaymentMethodBodySchema = z.object({
  card_id: z.string(),
})

const CardSchema = z.object({
  brand: z.string(),
  exp_month: z.number(),
  exp_year: z.number(),
  last4: z.string(),
})

const PaymentMethodSchema = z.object({
  id: z.string(),
  type: z.string(),
  is_default: z.boolean(),
  created: z.number(),
  has_address: z.boolean(),
  card: CardSchema.optional(),
})

const PaymentsResponseSchema = z.object({
  data: z.array(PaymentMethodSchema),
  defaultPaymentMethodId: z.string().nullable(),
})

const DeclineAuthorizationResponseSchema = z.object({
  id: z.string(),
})

const ApproveAuthorizationResponseSchema = z.object({
  url: z.string(),
})

const RevokeAuthorizedOAuthAppResponseSchema = z.object({
  id: z.string(),
  name: z.string(),
  website: z.string(),
  authorized_at: z.string().optional(),
  icon: z.string().optional(),
})

const DeleteOAuthAppResponseSchema = z.object({
  id: z.string(),
  client_id: z.string(),
  name: z.string(),
  website: z.string(),
  redirect_uris: z.array(z.string()),
  created_at: z.string(),
  icon: z.string().optional(),
})

const PutOAuthAppResponseSchema = z.object({
  id: z.string(),
  client_id: z.string(),
  name: z.string(),
  website: z.string(),
  redirect_uris: z.array(z.string()),
  created_at: z.string(),
  icon: z.string().optional(),
})

const CreateOAuthAppClientSecretResponseSchema = z.object({
  id: z.string(),
  oauth_app_id: z.string(),
  client_secret: z.string(),
  client_secret_alias: z.string(),
  created_at: z.string(),
  created_by: z.string(),
  last_used_at: z.string().nullable(),
})

const OAuthAppClientSecretSchema = z.object({
  id: z.string(),
  oauth_app_id: z.string(),
  client_secret_alias: z.string(),
  created_at: z.string(),
  created_by: z.string(),
  last_used_at: z.string().nullable(),
})

const ListOAuthAppClientSecretsResponseSchema = z.object({
  client_secrets: z.array(OAuthAppClientSecretSchema),
})

const OAuthScopeEnum = z.enum([
  'analytics:read',
  'analytics:write',
  'auth:read',
  'auth:write',
  'database:read',
  'database:write',
  'domains:read',
  'domains:write',
  'edge_functions:read',
  'edge_functions:write',
  'environment:read',
  'environment:write',
  'organizations:read',
  'organizations:write',
  'projects:read',
  'projects:write',
  'rest:read',
  'rest:write',
  'secrets:read',
  'secrets:write',
  'storage:read',
  'storage:write',
])

const CreateOAuthAppBodySchema = z.object({
  name: z.string(),
  website: z.string(),
  icon: z.string().optional(),
  redirect_uris: z.array(z.string()),
  scopes: z.array(OAuthScopeEnum).optional(),
})

const OAuthAppResponseSchema = z.object({
  id: z.string(),
  name: z.string(),
  website: z.string(),
  registration_type: z.enum(['manual', 'dynamic']),
  app_id: z.string().optional(),
  client_id: z.string().optional(),
  created_at: z.string().optional(),
  created_by: z.string().optional(),
  authorized_at: z.string().optional(),
  icon: z.string().optional(),
  redirect_uris: z.array(z.string()).optional(),
  scopes: z.array(OAuthScopeEnum).optional(),
})

const OAuthAppResponseListSchema = z.array(OAuthAppResponseSchema)

const MemberWithFreeProjectLimitSchema = z.array(
  z.object({
    free_project_limit: z.number(),
    primary_email: z.string().email(),
    username: z.string(),
  })
)

const MfaStatusResponseSchema = z.object({
  enforced: z.boolean(),
})

const ChangeMFAEnforcementStateRequestSchema = z.object({
  enforced: z.boolean(),
})

const InvitationByTokenResponseSchema = z.object({
  authorized_user: z.boolean(),
  email_match: z.boolean(),
  expired_token: z.boolean(),
  invite_id: z.number().optional(),
  organization_name: z.string(),
  sso_mismatch: z.boolean(),
  token_does_not_exist: z.boolean(),
})

// Request body for creating invitation
export const CreateInvitationBodySchema = z.object({
  email: z.string().email(),
  role_id: z.number(),
  role_scoped_projects: z.array(z.string()).optional(),
})

// Response schema for listing invitations
export const InvitationResponseSchema = z.object({
  invitations: z.array(
    z.object({
      id: z.number(),
      invited_at: z.string(),
      invited_email: z.string().email(),
      role_id: z.number(),
    })
  ),
})

export const UpdateMemberRoleBodySchema = z.object({
  name: z.string(),
  description: z.string().optional(),
  role_scoped_projects: z.array(z.string()),
})

// Request body for assigning a new role
export const AssignMemberRoleBodySchema = z.object({
  role_id: z.number(),
  role_scoped_projects: z.array(z.string()).optional(),
})

/** Member schema */
export const MemberSchema = z.array(
  z.object({
    user_id: z.string(),
    is_sso_user: z.boolean().nullable(),
    metadata: z.record(z.unknown()),
    mfa_enabled: z.boolean(),
    primary_email: z.string().nullable(),
    role_ids: z.array(z.number()),
    username: z.string(),
  })
)

/** Feature schema */
const FeatureSchema = z.object({
  key: z.string(),
  type: z.enum(['boolean', 'numeric', 'set']),
})

/** Config schemas */
const BooleanConfigSchema = z.object({
  enabled: z.boolean(),
})

const NumericConfigSchema = z.object({
  enabled: z.boolean(),
  unit: z.string(),
  unlimited: z.boolean(),
  value: z.number(),
})

const SetConfigSchema = z.object({
  enabled: z.boolean(),
  set: z.array(z.string()),
})

/** Entitlement schema */
const EntitlementSchema = z.object({
  config: z.union([BooleanConfigSchema, NumericConfigSchema, SetConfigSchema]),
  feature: FeatureSchema,
  hasAccess: z.boolean(),
  type: z.enum(['boolean', 'numeric', 'set']),
})

/** Response schema */
export const ListEntitlementsResponseSchema = z.object({
  entitlements: z.array(EntitlementSchema),
})

export const OrgDocumentUrlResponseSchema = z.object({
  fileUrl: z.string(),
})

export const CreateDpaDocumentRequestSchema = z.object({
  recipient_email: z.string().email(),
})

// Response
export const CreateDpaDocumentResponseSchema = z.object({
  date_created: z.string(),
  document_id: z.string(),
  download_url: z.string().optional(),
  name: z.string(),
  status: z.string(),
})

/** Address schema */
const AddressSchema = z.object({
  city: z.string().nullable().optional(),
  country: z.string(),
  line1: z.string(),
  line2: z.string().nullable().optional(),
  postal_code: z.string().nullable().optional(),
  state: z.string().nullable().optional(),
})

/** Tax ID schema */
const TaxIdSchema = z.object({
  country: z.string(),
  type: z.string(),
  value: z.string(),
})

// Response wrapper
const TaxIdResponseSchema = z.object({
  tax_id: TaxIdSchema.nullable(),
})

/** GET Customer response */
export const CustomerResponseSchema = z.object({
  additional_emails: z.array(z.string()).nullable(),
  address: AddressSchema.optional(),
  balance: z.number(),
  billing_name: z.string().optional(),
  billing_via_partner: z.boolean(),
  email: z.string(),
  tax_id: TaxIdSchema.nullable(),
})

/** PUT Customer update body */
export const BillingCustomerUpdateBodySchema = z.object({
  additional_emails: z.array(z.string()).optional(),
  address: AddressSchema.optional(),
  billing_name: z.string().optional(),
})

export const PendingConfirmationResponseSchema = z.object({
  message: z.string(),
})

export const ConfirmSubscriptionChangeBodySchema = z.object({
  payment_intent_id: z.string(),
})

/** Update subscription response */
export const UpdateSubscriptionResponseSchema = z.object({
  pending_payment_intent_secret: z.string().nullable(),
})

/** Update subscription request */
export const UpdateSubscriptionBodySchema = z.object({
  address: z
    .object({
      city: z.string().nullable().optional(),
      country: z.string(),
      line1: z.string(),
      line2: z.string().nullable().optional(),
      postal_code: z.string().nullable().optional(),
      state: z.string().nullable().optional(),
    })
    .optional(),
  billing_name: z.string().optional(),
  payment_method: z.string().optional(),
  tax_id: z
    .object({
      country: z.string(),
      type: z.string(),
      value: z.string(),
    })
    .optional(),
  tier: z.enum(['tier_free', 'tier_pro', 'tier_payg', 'tier_team', 'tier_enterprise']),
})

/** Addon variant */
const VariantSchema = z.object({
  identifier: z.enum([
    'ci_micro',
    'ci_small',
    'ci_medium',
    'ci_large',
    'ci_xlarge',
    'ci_2xlarge',
    'ci_4xlarge',
    'ci_8xlarge',
    'ci_12xlarge',
    'ci_16xlarge',
    'ci_24xlarge',
    'ci_24xlarge_optimized_cpu',
    'ci_24xlarge_optimized_memory',
    'ci_24xlarge_high_memory',
    'ci_48xlarge',
    'ci_48xlarge_optimized_cpu',
    'ci_48xlarge_optimized_memory',
    'ci_48xlarge_high_memory',
    'cd_default',
    'pitr_7',
    'pitr_14',
    'pitr_28',
    'ipv4_default',
    'auth_mfa_phone_default',
    'auth_mfa_web_authn_default',
    'log_drain_default',
  ]),
  meta: z.unknown().optional(),
  name: z.string(),
  price: z.number(),
  price_description: z.string(),
  price_interval: z.enum(['monthly', 'hourly']),
  price_type: z.enum(['fixed', 'usage']),
})

/** Project addon */
const ProjectAddonSchema = z.object({
  addons: z.array(
    z.object({
      type: z.enum([
        'custom_domain',
        'compute_instance',
        'pitr',
        'ipv4',
        'auth_mfa_phone',
        'auth_mfa_web_authn',
        'log_drain',
      ]),
      variant: VariantSchema,
    })
  ),
  name: z.string(),
  ref: z.string(),
})

/** Addon */
const AddonSchema = z.object({
  name: z.string(),
  price: z.number(),
  prod_id: z.string(),
})

/** Scheduled plan change */
const ScheduledPlanChangeSchema = z
  .object({
    at: z.string(),
    target_plan: z.enum(['free', 'pro', 'team', 'enterprise']),
    usage_billing_enabled: z.boolean(),
  })
  .nullable()

/** Get subscription response */
export const GetSubscriptionResponseSchema = z.object({
  addons: z.array(AddonSchema),
  billing_cycle_anchor: z.number(),
  billing_partner: z.enum(['aws_marketplace',]).optional(),
  billing_via_partner: z.boolean(),
  cached_egress_enabled: z.boolean(),
  current_period_end: z.number(),
  current_period_start: z.number(),
  customer_balance: z.number().optional(),
  next_invoice_at: z.number(),
  payment_method_type: z.string(),
  plan: z.object({
    id: z.enum(['free', 'pro', 'team', 'enterprise']),
    name: z.string(),
  }),
  project_addons: z.array(ProjectAddonSchema),
  scheduled_plan_change: ScheduledPlanChangeSchema,
  usage_billing_enabled: z.boolean(),
})

const PlanSchema = z.object({
  change_type: z.enum(['upgrade', 'downgrade', 'none']),
  effective_at: z.enum(['now', 'end_of_billing_period', 'none']).optional(),
  id: z.enum(['free', 'pro', 'team', 'enterprise']),
  is_current: z.boolean(),
  name: z.string(),
  price: z.number(),
})

export const PlansResponseSchema = z.object({
  plans: z.array(PlanSchema),
})

// Breakdown schema
const BreakdownSchema = z.object({
  amount: z.number().optional(),
  project_db_instance_size: z
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
  project_name: z.string(),
  project_ref: z.string(),
  project_status: z
    .enum([
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
    ])
    .optional(),
  usage: z.number(),
})

// Period schema
const PeriodSchema = z
  .object({
    start: z.string(),
    end: z.string(),
  })
  .optional()

// Metadata schema
const MetadataSchema = z
  .object({
    is_branch: z.boolean().optional(),
    is_read_replica: z.boolean().optional(),
  })
  .optional()

// Line schema
const LineSchema = z.object({
  amount: z.number(),
  amount_before_discount: z.number(),
  breakdown: z.array(BreakdownSchema).optional(),
  description: z.string(),
  metadata: MetadataSchema,
  period: PeriodSchema,
  proration: z.boolean(),
  quantity: z.number().nullable(),
  unit_price: z.number().nullable(),
  unit_price_desc: z.string().nullable(),
  usage_based: z.boolean(),
  usage_metric: z
    .enum([
      'EGRESS',
      'CACHED_EGRESS',
      'DATABASE_SIZE',
      'STORAGE_SIZE',
      'MONTHLY_ACTIVE_USERS',
      'MONTHLY_ACTIVE_SSO_USERS',
      'FUNCTION_INVOCATIONS',
      'FUNCTION_CPU_MILLISECONDS',
      'STORAGE_IMAGES_TRANSFORMED',
      'REALTIME_MESSAGE_COUNT',
      'REALTIME_PEAK_CONNECTIONS',
      'DISK_SIZE_GB_HOURS_GP3',
      'DISK_SIZE_GB_HOURS_IO2',
      'AUTH_MFA_PHONE',
      'AUTH_MFA_WEB_AUTHN',
      'LOG_DRAIN_EVENTS',
      'MONTHLY_ACTIVE_THIRD_PARTY_USERS',
      'DISK_THROUGHPUT_GP3',
      'DISK_IOPS_GP3',
      'DISK_IOPS_IO2',
      'COMPUTE_HOURS_BRANCH',
      'COMPUTE_HOURS_XS',
      'COMPUTE_HOURS_SM',
      'COMPUTE_HOURS_MD',
      'COMPUTE_HOURS_L',
      'COMPUTE_HOURS_XL',
      'COMPUTE_HOURS_2XL',
      'COMPUTE_HOURS_4XL',
      'COMPUTE_HOURS_8XL',
      'COMPUTE_HOURS_12XL',
      'COMPUTE_HOURS_16XL',
      'COMPUTE_HOURS_24XL',
      'COMPUTE_HOURS_24XL_OPTIMIZED_CPU',
      'COMPUTE_HOURS_24XL_OPTIMIZED_MEMORY',
      'COMPUTE_HOURS_24XL_HIGH_MEMORY',
      'COMPUTE_HOURS_48XL',
      'COMPUTE_HOURS_48XL_OPTIMIZED_CPU',
      'COMPUTE_HOURS_48XL_OPTIMIZED_MEMORY',
      'COMPUTE_HOURS_48XL_HIGH_MEMORY',
      'CUSTOM_DOMAIN',
      'PITR_7',
      'PITR_14',
      'PITR_28',
      'IPV4',
      'LOG_DRAIN',
    ])
    .optional(),
  usage_original: z.number().optional(),
})

// UpcomingInvoice schema
export const UpcomingInvoiceSchema = z.object({
  amount_projected: z.number().optional(),
  amount_total: z.number(),
  billing_cycle_start: z.string(),
  billing_cycle_end: z.string(),
  currency: z.string(),
  customer_balance: z.number(),
  lines: z.array(LineSchema),
  subscription_id: z.string(),
})

export const InvoicePaymentLinkResponseSchema = z.object({
  redirectUrl: z.string(),
})

const InvoiceSchema = z.object({
  amount_due: z.number(),
  id: z.string(),
  invoice_pdf: z.string(),
  number: z.string(),
  payment_attempted: z.boolean(),
  period_end: z.number(),
  status: z.string(),
  subscription: z.string().nullable(),
  subtotal: z.number(),
})

const InvoiceListSchema = z.array(InvoiceSchema)

const CreditsTopUpResponseSchema = z.object({
  payment_intent_secret: z.string().optional(),

  status: z.enum([
    'canceled',
    'processing',
    'requires_action',
    'requires_capture',
    'requires_confirmation',
    'requires_payment_method',
    'succeeded',
  ]),
})

const CreditsTopUpRequestSchema = z.object({
  address: z
    .object({
      city: z.string().nullable().optional(),
      country: z.string(),
      line1: z.string(),
      line2: z.string().nullable().optional(),
      postal_code: z.string().nullable().optional(),
      state: z.string().nullable().optional(),
    })
    .optional(),

  amount: z.number(),

  billing_name: z.string().optional(),

  hcaptcha_token: z.string().optional(),

  payment_method_id: z.string(),

  tax_id: z
    .object({
      country: z.string(),
      type: z.string(),
      value: z.string(),
    })
    .optional(),
})

const OrganizationSlugAvailableVersionsResponseSchema = z.object({
  available_versions: z.array(
    z.object({
      database_engine: z.enum(['15-postgres', '17-postgres', '17-postgres-oriole']),
      release_channel: z.enum(['internal', 'alpha', 'beta', 'ga', 'withdrawn', 'preview']),
      version: z.string(),
    })
  ),
})

const OrganizationSlugAvailableVersionsBodySchema = z.object({
  provider: z.enum(['AWS', 'AWS_K8S', 'AWS_NIMBUS']),
  region: z.string(),
})

const AuditLogsResponseSchema = z.object({
  result: z.array(z.unknown()),
  retention_period: z.number(),
})

const UpdateOrganizationResponseSchema = z.object({
  billing_email: z.string().optional(),

  id: z.number(),
  name: z.string(),

  opt_in_tags: z.array(z.string()),

  slug: z.string(),
  stripe_customer_id: z.string(),
})

const UpdateOrganizationBodySchema = z.object({
  additional_billing_emails: z.array(z.string()).optional(),

  /** Format: email */
  billing_email: z.string().email().optional(),

  name: z.string().optional(),

  opt_in_tags: z
    .array(
      z.enum(['AI_SQL_GENERATOR_OPT_IN', 'AI_DATA_GENERATOR_OPT_IN', 'AI_LOG_GENERATOR_OPT_IN'])
    )
    .optional(),
})

const OrganizationSlugResponseSchema = z.object({
  billing_email: z.string().nullable(),

  billing_partner: z.enum(['aws_marketplace',]).nullable(),

  has_oriole_project: z.boolean(),
  id: z.number(),
  name: z.string(),

  opt_in_tags: z.array(z.string()),

  plan: z.object({
    id: z.enum(['free', 'pro', 'team', 'enterprise']),
    name: z.string(),
  }),

  projects: z.array(
    z.object({
      cloud_provider: z.string(),
      disk_volume_size_gb: z.number().optional(),
      engine: z.string().optional(),
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
  ),

  restriction_data: z.record(z.unknown()).nullable(),

  restriction_status: z.enum(['grace_period', 'grace_period_over', 'restricted']).nullable(),

  slug: z.string(),
  usage_billing_enabled: z.boolean(),
})

const CreateOrganizationResponseSchema = z.union([
  // Case 1: pending payment
  z.object({
    pending_payment_intent_secret: z.string().nullable(),
  }),

  // Case 2: full organization object
  z.object({
    billing_email: z.string().nullable(),

    billing_partner: z.enum(['aws_marketplace',]).nullable(),

    id: z.number(),
    is_owner: z.boolean(),
    name: z.string(),

    opt_in_tags: z.array(z.string()),

    organization_missing_address: z.boolean(),
    organization_requires_mfa: z.boolean(),

    plan: z.object({
      id: z.enum(['free', 'pro', 'team', 'enterprise']),
      name: z.string(),
    }),

    restriction_data: z.record(z.string()).nullable(),

    restriction_status: z.enum(['grace_period', 'grace_period_over', 'restricted']).nullable(),

    slug: z.string(),

    stripe_customer_id: z.string().nullable(),
    subscription_id: z.string().nullable(),

    usage_billing_enabled: z.boolean(),
  }),
])

const CreateOrganizationBodySchema = z.object({
  address: z
    .object({
      city: z.string().nullable().optional(),
      country: z.string(),
      line1: z.string(),
      line2: z.string().nullable().optional(),
      postal_code: z.string().nullable().optional(),
      state: z.string().nullable().optional(),
    })
    .optional(),

  billing_name: z.string().optional(),
  kind: z.string().optional(),
  name: z.string(),

  payment_method: z.string().optional(),
  size: z.string().optional(),

  tax_id: z
    .object({
      country: z.string().optional(),
      type: z.string(),
      value: z.string(),
    })
    .optional(),

  tier: z.enum(['tier_free', 'tier_pro', 'tier_payg', 'tier_team', 'tier_enterprise']),
})

const OrganizationResponseSchema = z.object({
  billing_email: z.string().nullable(),

  billing_partner: z.enum(['aws_marketplace',]).nullable(),

  id: z.number(),
  is_owner: z.boolean(),
  name: z.string(),

  opt_in_tags: z.array(z.string()),

  organization_missing_address: z.boolean(),
  organization_requires_mfa: z.boolean(),

  plan: z.object({
    id: z.enum(['free', 'pro', 'team', 'enterprise']),
    name: z.string(),
  }),

  restriction_data: z.record(z.string()).nullable(),

  restriction_status: z.enum(['grace_period', 'grace_period_over', 'restricted']).nullable(),

  slug: z.string(),

  stripe_customer_id: z.string().nullable(),
  subscription_id: z.string().nullable(),

  usage_billing_enabled: z.boolean(),
})

export type OrganizationResponse = z.infer<typeof OrganizationResponseSchema>

export const OrganizationResponseJsonSchema = zodToJsonSchema(OrganizationResponseSchema, {
  name: 'OrganizationResponse',
})

export type CreateOrganizationBody = z.infer<typeof CreateOrganizationBodySchema>

export const CreateOrganizationBodyJsonSchema = zodToJsonSchema(CreateOrganizationBodySchema, {
  name: 'CreateOrganizationBody',
})

export type CreateOrganizationResponse = z.infer<typeof CreateOrganizationResponseSchema>

export const CreateOrganizationResponseJsonSchema = zodToJsonSchema(
  CreateOrganizationResponseSchema,
  {
    name: 'CreateOrganizationResponse',
  }
)

export type OrganizationSlugResponse = z.infer<typeof OrganizationSlugResponseSchema>

export const OrganizationSlugResponseJsonSchema = zodToJsonSchema(OrganizationSlugResponseSchema, {
  name: 'OrganizationSlugResponse',
})

export type UpdateOrganizationBody = z.infer<typeof UpdateOrganizationBodySchema>

export const UpdateOrganizationBodyJsonSchema = zodToJsonSchema(UpdateOrganizationBodySchema, {
  name: 'UpdateOrganizationBody',
})

export type UpdateOrganizationResponse = z.infer<typeof UpdateOrganizationResponseSchema>

export const UpdateOrganizationResponseJsonSchema = zodToJsonSchema(
  UpdateOrganizationResponseSchema,
  {
    name: 'UpdateOrganizationResponse',
  }
)

export type AuditLogsResponse = z.infer<typeof AuditLogsResponseSchema>

export const AuditLogsResponseJsonSchema = zodToJsonSchema(AuditLogsResponseSchema, {
  name: 'AuditLogsResponse',
})

export type OrganizationSlugAvailableVersionsBody = z.infer<
  typeof OrganizationSlugAvailableVersionsBodySchema
>

export const OrganizationSlugAvailableVersionsBodyJsonSchema = zodToJsonSchema(
  OrganizationSlugAvailableVersionsBodySchema,
  {
    name: 'OrganizationSlugAvailableVersionsBody',
  }
)

export type OrganizationSlugAvailableVersionsResponse = z.infer<
  typeof OrganizationSlugAvailableVersionsResponseSchema
>

export const OrganizationSlugAvailableVersionsResponseJsonSchema = zodToJsonSchema(
  OrganizationSlugAvailableVersionsResponseSchema,
  {
    name: 'OrganizationSlugAvailableVersionsResponse',
  }
)

export type CreditsTopUpRequest = z.infer<typeof CreditsTopUpRequestSchema>

export const CreditsTopUpRequestJsonSchema = zodToJsonSchema(CreditsTopUpRequestSchema, {
  name: 'CreditsTopUpRequest',
})

export type CreditsTopUpResponse = z.infer<typeof CreditsTopUpResponseSchema>

export const CreditsTopUpResponseJsonSchema = zodToJsonSchema(CreditsTopUpResponseSchema, {
  name: 'CreditsTopUpResponse',
})

export type Invoice = z.infer<typeof InvoiceSchema>

export const InvoiceJsonSchema = zodToJsonSchema(InvoiceSchema, {
  name: 'Invoice',
})

export type InvoiceList = z.infer<typeof InvoiceListSchema>

export const InvoiceListJsonSchema = zodToJsonSchema(InvoiceListSchema, {
  name: 'InvoiceList',
})

export type InvoicePaymentLinkResponse = z.infer<typeof InvoicePaymentLinkResponseSchema>

export const InvoicePaymentLinkResponseJsonSchema = zodToJsonSchema(
  InvoicePaymentLinkResponseSchema,
  { name: 'InvoicePaymentLinkResponse' }
)

export type UpcomingInvoice = z.infer<typeof UpcomingInvoiceSchema>

export const UpcomingInvoiceJsonSchema = zodToJsonSchema(UpcomingInvoiceSchema, {
  name: 'UpcomingInvoice',
})

export type PlansResponse = z.infer<typeof PlansResponseSchema>

export const PlansResponseJsonSchema = zodToJsonSchema(PlansResponseSchema, {
  name: 'PlansResponse',
})

export type GetSubscriptionResponse = z.infer<typeof GetSubscriptionResponseSchema>

export const GetSubscriptionResponseJsonSchema = zodToJsonSchema(GetSubscriptionResponseSchema, {
  name: 'GetSubscriptionResponse',
})

export type UpdateSubscriptionBody = z.infer<typeof UpdateSubscriptionBodySchema>

export const UpdateSubscriptionBodyJsonSchema = zodToJsonSchema(UpdateSubscriptionBodySchema, {
  name: 'UpdateSubscriptionBody',
})

export type UpdateSubscriptionResponse = z.infer<typeof UpdateSubscriptionResponseSchema>

export const UpdateSubscriptionResponseJsonSchema = zodToJsonSchema(
  UpdateSubscriptionResponseSchema,
  {
    name: 'UpdateSubscriptionResponse',
  }
)

export type ConfirmSubscriptionChangeBody = z.infer<typeof ConfirmSubscriptionChangeBodySchema>

export const ConfirmSubscriptionChangeBodyJsonSchema = zodToJsonSchema(
  ConfirmSubscriptionChangeBodySchema,
  { name: 'ConfirmSubscriptionChangeBody' }
)

export type PendingConfirmationResponse = z.infer<typeof PendingConfirmationResponseSchema>

export const PendingConfirmationResponseJsonSchema = zodToJsonSchema(
  PendingConfirmationResponseSchema,
  { name: 'PendingConfirmationResponse' }
)

export type BillingCustomerUpdateBody = z.infer<typeof BillingCustomerUpdateBodySchema>

export const BillingCustomerUpdateBodyJsonSchema = zodToJsonSchema(
  BillingCustomerUpdateBodySchema,
  {
    name: 'BillingCustomerUpdateBody',
  }
)

export type CustomerResponse = z.infer<typeof CustomerResponseSchema>

export const CustomerResponseJsonSchema = zodToJsonSchema(CustomerResponseSchema, {
  name: 'CustomerResponse',
})

export type CreateDpaDocumentRequest = z.infer<typeof CreateDpaDocumentRequestSchema>

export const CreateDpaDocumentRequestJsonSchema = zodToJsonSchema(CreateDpaDocumentRequestSchema, {
  name: 'CreateDpaDocumentRequest',
})

export type CreateDpaDocumentResponse = z.infer<typeof CreateDpaDocumentResponseSchema>

export const CreateDpaDocumentResponseJsonSchema = zodToJsonSchema(
  CreateDpaDocumentResponseSchema,
  { name: 'CreateDpaDocumentResponse' }
)

export type OrgDocumentUrlResponse = z.infer<typeof OrgDocumentUrlResponseSchema>

export const OrgDocumentUrlResponseJsonSchema = zodToJsonSchema(OrgDocumentUrlResponseSchema, {
  name: 'OrgDocumentUrlResponse',
})

export type ListEntitlementsResponse = z.infer<typeof ListEntitlementsResponseSchema>

export const ListEntitlementsResponseJsonSchema = zodToJsonSchema(ListEntitlementsResponseSchema, {
  name: 'ListEntitlementsResponse',
})

export type Member = z.infer<typeof MemberSchema>

export const MemberJsonSchema = zodToJsonSchema(MemberSchema, { name: 'Member' })

export type AssignMemberRoleBody = z.infer<typeof AssignMemberRoleBodySchema>

export const AssignMemberRoleBodyJsonSchema = zodToJsonSchema(AssignMemberRoleBodySchema, {
  name: 'AssignMemberRoleBody',
})

export type UpdateMemberRoleBody = z.infer<typeof UpdateMemberRoleBodySchema>

export const UpdateMemberRoleBodyJsonSchema = zodToJsonSchema(UpdateMemberRoleBodySchema, {
  name: 'UpdateMemberRoleBody',
})

export type CreateInvitationBody = z.infer<typeof CreateInvitationBodySchema>

export const CreateInvitationBodyJsonSchema = zodToJsonSchema(CreateInvitationBodySchema, {
  name: 'CreateInvitationBody',
})

export type InvitationResponse = z.infer<typeof InvitationResponseSchema>

export const InvitationResponseJsonSchema = zodToJsonSchema(InvitationResponseSchema, {
  name: 'InvitationResponse',
})

export type InvitationByTokenResponse = z.infer<typeof InvitationByTokenResponseSchema>

export const InvitationByTokenResponseJsonSchema = zodToJsonSchema(
  InvitationByTokenResponseSchema,
  {
    name: 'InvitationByTokenResponse',
  }
)

export type ChangeMFAEnforcementStateRequest = z.infer<
  typeof ChangeMFAEnforcementStateRequestSchema
>

export const ChangeMFAEnforcementStateRequestJsonSchema = zodToJsonSchema(
  ChangeMFAEnforcementStateRequestSchema,
  {
    name: 'ChangeMFAEnforcementStateRequest',
  }
)

export type MfaStatusResponse = z.infer<typeof MfaStatusResponseSchema>

export const MfaStatusResponseJsonSchema = zodToJsonSchema(MfaStatusResponseSchema, {
  name: 'MfaStatusResponse',
})

export type MemberWithFreeProjectLimit = z.infer<typeof MemberWithFreeProjectLimitSchema>

export const MemberWithFreeProjectLimitJsonSchema = zodToJsonSchema(
  MemberWithFreeProjectLimitSchema,
  {
    name: 'MemberWithFreeProjectLimit',
  }
)

export type OAuthAppResponse = z.infer<typeof OAuthAppResponseSchema>

export const OAuthAppResponseJsonSchema = zodToJsonSchema(OAuthAppResponseSchema, {
  name: 'OAuthAppResponse',
})

export type CreateOAuthAppBody = z.infer<typeof CreateOAuthAppBodySchema>

export const CreateOAuthAppBodyJsonSchema = zodToJsonSchema(CreateOAuthAppBodySchema, {
  name: 'CreateOAuthAppBody',
})

export type OAuthAppResponseList = z.infer<typeof OAuthAppResponseListSchema>

export const OAuthAppResponseListJsonSchema = zodToJsonSchema(OAuthAppResponseListSchema, {
  name: 'OAuthAppResponse',
})

export type ListOAuthAppClientSecretsResponse = z.infer<
  typeof ListOAuthAppClientSecretsResponseSchema
>

export const ListOAuthAppClientSecretsResponseJsonSchema = zodToJsonSchema(
  ListOAuthAppClientSecretsResponseSchema,
  {
    name: 'ListOAuthAppClientSecretsResponse',
  }
)

export type CreateOAuthAppClientSecretResponse = z.infer<
  typeof CreateOAuthAppClientSecretResponseSchema
>

export const CreateOAuthAppClientSecretResponseJsonSchema = zodToJsonSchema(
  CreateOAuthAppClientSecretResponseSchema,
  {
    name: 'CreateOAuthAppClientSecretResponse',
  }
)

export type PutOAuthAppResponse = z.infer<typeof PutOAuthAppResponseSchema>

export const PutOAuthAppResponseJsonSchema = zodToJsonSchema(PutOAuthAppResponseSchema, {
  name: 'PutOAuthAppResponse',
})

export type DeleteOAuthAppResponse = z.infer<typeof DeleteOAuthAppResponseSchema>

export const DeleteOAuthAppResponseJsonSchema = zodToJsonSchema(DeleteOAuthAppResponseSchema, {
  name: 'DeleteOAuthAppResponse',
})

export type RevokeAuthorizedOAuthAppResponse = z.infer<
  typeof RevokeAuthorizedOAuthAppResponseSchema
>

export const RevokeAuthorizedOAuthAppResponseJsonSchema = zodToJsonSchema(
  RevokeAuthorizedOAuthAppResponseSchema,
  {
    name: 'RevokeAuthorizedOAuthAppResponse',
  }
)

export type ApproveAuthorizationResponse = z.infer<typeof ApproveAuthorizationResponseSchema>

export const ApproveAuthorizationResponseJsonSchema = zodToJsonSchema(
  ApproveAuthorizationResponseSchema,
  {
    name: 'ApproveAuthorizationResponse',
  }
)

export type DeclineAuthorizationResponse = z.infer<typeof DeclineAuthorizationResponseSchema>

export const DeclineAuthorizationResponseJsonSchema = zodToJsonSchema(
  DeclineAuthorizationResponseSchema,
  {
    name: 'DeclineAuthorizationResponse',
  }
)

export type PaymentsResponse = z.infer<typeof PaymentsResponseSchema>

export const PaymentsResponseJsonSchema = zodToJsonSchema(PaymentsResponseSchema, {
  name: 'PaymentsResponse',
})

export type DetachPaymentMethodBody = z.infer<typeof DetachPaymentMethodBodySchema>

export const DetachPaymentMethodBodyJsonSchema = zodToJsonSchema(DetachPaymentMethodBodySchema, {
  name: 'DetachPaymentMethodBody',
})

export type MarkDefaultPaymentMethodBody = z.infer<typeof MarkDefaultPaymentMethodBodySchema>

export const MarkDefaultPaymentMethodBodyJsonSchema = zodToJsonSchema(
  MarkDefaultPaymentMethodBodySchema,
  { name: 'MarkDefaultPaymentMethodBody' }
)

export type OrganizationProjectsResponse = z.infer<typeof OrganizationProjectsResponseSchema>

export const OrganizationProjectsResponseJsonSchema = zodToJsonSchema(
  OrganizationProjectsResponseSchema,
  { name: 'OrganizationProjectsResponse' }
)

export type OrganizationRoleResponse = z.infer<typeof OrganizationRoleResponseSchema>

export const OrganizationRoleResponseJsonSchema = zodToJsonSchema(OrganizationRoleResponseSchema, {
  name: 'OrganizationRoleResponse',
})

export type GetSSOProviderResponse = z.infer<typeof SSOProviderSchema>
export type UpdateSSOProviderBody = z.infer<typeof SSOProviderSchema>
export type UpdateSSOProviderResponse = z.infer<typeof SSOProviderSchema>
export type CreateSSOProviderBody = z.infer<typeof SSOProviderSchema>
export type CreateSSOProviderResponse = z.infer<typeof SSOProviderSchema>

export const GetSSOProviderResponseJsonSchema = zodToJsonSchema(SSOProviderSchema, {
  name: 'GetSSOProviderResponse',
})
export const UpdateSSOProviderBodyJsonSchema = zodToJsonSchema(SSOProviderSchema, {
  name: 'UpdateSSOProviderBody',
})
export const UpdateSSOProviderResponseJsonSchema = zodToJsonSchema(SSOProviderSchema, {
  name: 'UpdateSSOProviderResponse',
})
export const CreateSSOProviderBodyJsonSchema = zodToJsonSchema(SSOProviderSchema, {
  name: 'CreateSSOProviderBody',
})
export const CreateSSOProviderResponseJsonSchema = zodToJsonSchema(SSOProviderSchema, {
  name: 'CreateSSOProviderResponse',
})

export type TaxIdResponse = z.infer<typeof TaxIdResponseSchema>
export const TaxIdResponseJsonSchema = zodToJsonSchema(TaxIdResponseSchema, {
  name: 'TaxIdResponse',
})

export type CreateTaxIdBody = z.infer<typeof CreateTaxIdBodySchema>
export const CreateTaxIdBodyJsonSchema = zodToJsonSchema(CreateTaxIdBodySchema, {
  name: 'CreateTaxIdBody',
})

export type OrgUsageResponse = z.infer<typeof OrgUsageResponseSchema>
export const OrgUsageResponseJsonSchema = zodToJsonSchema(OrgUsageResponseSchema, {
  name: 'OrgUsageResponse',
})

export const OrgDailyUsageResponseSchema = z.object({
  usages: z.array(DailyUsageItemSchema),
})

export type OrgDailyUsageResponse = z.infer<typeof OrgDailyUsageResponseSchema>
export const OrgDailyUsageResponseJsonSchema = zodToJsonSchema(OrgDailyUsageResponseSchema, {
  name: 'OrgDailyUsageResponse',
})

export type CreateAwsBilledOrganizationBody = z.infer<typeof CreateAwsBilledOrganizationBodySchema>

export const CreateAwsBilledOrganizationBodyJsonSchema = zodToJsonSchema(
  CreateAwsBilledOrganizationBodySchema,
  {
    name: 'CreateAwsBilledOrganizationBody',
  }
)

export type ConfirmCreateSubscriptionChangeBody = z.infer<
  typeof ConfirmCreateSubscriptionChangeBodySchema
>

export const ConfirmCreateSubscriptionChangeBodyJsonSchema = zodToJsonSchema(
  ConfirmCreateSubscriptionChangeBodySchema,
  {
    name: 'ConfirmCreateSubscriptionChangeBody',
  }
)

export const RequestUpgradeBodySchema = z.object({
  note: z.string().optional(),
  requested_plan: z.enum(['Pro', 'Team', 'Enterprise']),
})

export type RequestUpgradeBody = z.infer<typeof RequestUpgradeBodySchema>

export const RequestUpgradeBodyJsonSchema = zodToJsonSchema(RequestUpgradeBodySchema, {
  name: 'RequestUpgradeBody',
})

// Response
export const RequestUpgradeResponseSchema = z.object({
  message: z.string(),
})

export type RequestUpgradeResponse = z.infer<typeof RequestUpgradeResponseSchema>

export const RequestUpgradeResponseJsonSchema = zodToJsonSchema(RequestUpgradeResponseSchema, {
  name: 'RequestUpgradeResponse',
})
