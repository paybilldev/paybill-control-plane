import { z } from 'zod'
import { zodToJsonSchema } from '../utils/zod-to-json-schema.js'

export const UpdateEmailBodySchema = z.object({
  newEmail: z.string().email(),
})

// --- Define enums for fields with restricted values ---
const PasswordRequiredCharactersEnum = z.enum([
  'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ:0123456789',
  'abcdefghijklmnopqrstuvwxyz:ABCDEFGHIJKLMNOPQRSTUVWXYZ:0123456789',
  'abcdefghijklmnopqrstuvwxyz:ABCDEFGHIJKLMNOPQRSTUVWXYZ:0123456789:!@#$%^&*()_+-=[]{};\'\\:"|<>?,./`~',
  '',
])

const CaptchaProviderEnum = z.enum(['turnstile', 'hcaptcha'])

const SmsProviderEnum = z.enum(['messagebird', 'textlocal', 'twilio', 'twilio_verify', 'vonage'])

const CreateUserReponseSchema = z.object({
  aud: z.string().optional(),
  banned_until: z.string().optional(),
  confirmation_sent_at: z.string().optional(),
  confirmation_token: z.string().optional(),
  confirmed_at: z.string().optional(),
  created_at: z.string().optional(),
  deleted_at: z.string().optional(),
  email: z.string().optional(),
  email_change: z.string().optional(),
  email_change_confirm_status: z.number().optional(),
  email_change_sent_at: z.string().optional(),
  email_change_token_current: z.string().optional(),
  email_change_token_new: z.string().optional(),
  email_confirmed_at: z.string().optional(),
  encrypted_password: z.string().optional(),
  /** Format: uuid */
  id: z.string().optional(),
  /** Format: uuid */
  instance_id: z.string().optional(),
  invited_at: z.string().optional(),
  is_anonymous: z.boolean().optional(),
  is_sso_user: z.boolean().optional(),
  is_super_admin: z.boolean().optional(),
  last_sign_in_at: z.string().optional(),
  phone: z.string().optional(),
  phone_change: z.string().optional(),
  phone_change_sent_at: z.string().optional(),
  phone_change_token: z.string().optional(),
  phone_confirmed_at: z.string().optional(),
  raw_app_meta_data: z.record(z.unknown()).optional(),
  raw_user_meta_data: z.record(z.unknown()).optional(),
  reauthentication_sent_at: z.string().optional(),
  reauthentication_token: z.string().optional(),
  recovery_sent_at: z.string().optional(),
  recovery_token: z.string().optional(),
  role: z.string().optional(),
  updated_at: z.string().optional(),
})

// --- Start from your existing AuthConfigResponseSchema, but enhance enum fields ---
const AuthConfigResponseSchema = z.object({
  API_MAX_REQUEST_DURATION: z.number().nullable().optional(),
  AUDIT_LOG_DISABLE_POSTGRES: z.boolean().nullable().optional(),
  DB_MAX_POOL_SIZE: z.number().nullable().optional(),
  DISABLE_SIGNUP: z.boolean(),
  EXTERNAL_ANONYMOUS_USERS_ENABLED: z.boolean(),
  EXTERNAL_APPLE_ADDITIONAL_CLIENT_IDS: z.string(),
  EXTERNAL_APPLE_CLIENT_ID: z.string(),
  EXTERNAL_APPLE_EMAIL_OPTIONAL: z.boolean(),
  EXTERNAL_APPLE_ENABLED: z.boolean(),
  EXTERNAL_APPLE_SECRET: z.string(),
  EXTERNAL_AZURE_CLIENT_ID: z.string(),
  EXTERNAL_AZURE_EMAIL_OPTIONAL: z.boolean(),
  EXTERNAL_AZURE_ENABLED: z.boolean(),
  EXTERNAL_AZURE_SECRET: z.string(),
  EXTERNAL_AZURE_URL: z.string(),
  EXTERNAL_BITBUCKET_CLIENT_ID: z.string(),
  EXTERNAL_BITBUCKET_EMAIL_OPTIONAL: z.boolean(),
  EXTERNAL_BITBUCKET_ENABLED: z.boolean(),
  EXTERNAL_BITBUCKET_SECRET: z.string(),
  EXTERNAL_DISCORD_CLIENT_ID: z.string(),
  EXTERNAL_DISCORD_EMAIL_OPTIONAL: z.boolean(),
  EXTERNAL_DISCORD_ENABLED: z.boolean(),
  EXTERNAL_DISCORD_SECRET: z.string(),
  EXTERNAL_EMAIL_ENABLED: z.boolean(),
  EXTERNAL_FACEBOOK_CLIENT_ID: z.string(),
  EXTERNAL_FACEBOOK_EMAIL_OPTIONAL: z.boolean(),
  EXTERNAL_FACEBOOK_ENABLED: z.boolean(),
  EXTERNAL_FACEBOOK_SECRET: z.string(),
  EXTERNAL_FIGMA_CLIENT_ID: z.string(),
  EXTERNAL_FIGMA_EMAIL_OPTIONAL: z.boolean(),
  EXTERNAL_FIGMA_ENABLED: z.boolean(),
  EXTERNAL_FIGMA_SECRET: z.string(),
  EXTERNAL_GITHUB_CLIENT_ID: z.string(),
  EXTERNAL_GITHUB_EMAIL_OPTIONAL: z.boolean(),
  EXTERNAL_GITHUB_ENABLED: z.boolean(),
  EXTERNAL_GITHUB_SECRET: z.string(),
  EXTERNAL_GITLAB_CLIENT_ID: z.string(),
  EXTERNAL_GITLAB_EMAIL_OPTIONAL: z.boolean(),
  EXTERNAL_GITLAB_ENABLED: z.boolean(),
  EXTERNAL_GITLAB_SECRET: z.string(),
  EXTERNAL_GITLAB_URL: z.string(),
  EXTERNAL_GOOGLE_ADDITIONAL_CLIENT_IDS: z.string(),
  EXTERNAL_GOOGLE_CLIENT_ID: z.string(),
  EXTERNAL_GOOGLE_EMAIL_OPTIONAL: z.boolean(),
  EXTERNAL_GOOGLE_ENABLED: z.boolean(),
  EXTERNAL_GOOGLE_SECRET: z.string(),
  EXTERNAL_GOOGLE_SKIP_NONCE_CHECK: z.boolean(),
  EXTERNAL_KAKAO_CLIENT_ID: z.string(),
  EXTERNAL_KAKAO_EMAIL_OPTIONAL: z.boolean(),
  EXTERNAL_KAKAO_ENABLED: z.boolean(),
  EXTERNAL_KAKAO_SECRET: z.string(),
  EXTERNAL_KEYCLOAK_CLIENT_ID: z.string(),
  EXTERNAL_KEYCLOAK_EMAIL_OPTIONAL: z.boolean(),
  EXTERNAL_KEYCLOAK_ENABLED: z.boolean(),
  EXTERNAL_KEYCLOAK_SECRET: z.string(),
  EXTERNAL_KEYCLOAK_URL: z.string(),
  EXTERNAL_LINKEDIN_OIDC_CLIENT_ID: z.string(),
  EXTERNAL_LINKEDIN_OIDC_EMAIL_OPTIONAL: z.boolean(),
  EXTERNAL_LINKEDIN_OIDC_ENABLED: z.boolean(),
  EXTERNAL_LINKEDIN_OIDC_SECRET: z.string(),
  EXTERNAL_NOTION_CLIENT_ID: z.string(),
  EXTERNAL_NOTION_EMAIL_OPTIONAL: z.boolean(),
  EXTERNAL_NOTION_ENABLED: z.boolean(),
  EXTERNAL_NOTION_SECRET: z.string(),
  EXTERNAL_PHONE_ENABLED: z.boolean(),
  EXTERNAL_SLACK_CLIENT_ID: z.string(),
  EXTERNAL_SLACK_EMAIL_OPTIONAL: z.boolean(),
  EXTERNAL_SLACK_ENABLED: z.boolean(),
  EXTERNAL_SLACK_OIDC_CLIENT_ID: z.string(),
  EXTERNAL_SLACK_OIDC_EMAIL_OPTIONAL: z.boolean(),
  EXTERNAL_SLACK_OIDC_ENABLED: z.boolean(),
  EXTERNAL_SLACK_OIDC_SECRET: z.string(),
  EXTERNAL_SLACK_SECRET: z.string(),
  EXTERNAL_SPOTIFY_CLIENT_ID: z.string(),
  EXTERNAL_SPOTIFY_EMAIL_OPTIONAL: z.boolean(),
  EXTERNAL_SPOTIFY_ENABLED: z.boolean(),
  EXTERNAL_SPOTIFY_SECRET: z.string(),
  EXTERNAL_TWITCH_CLIENT_ID: z.string(),
  EXTERNAL_TWITCH_EMAIL_OPTIONAL: z.boolean(),
  EXTERNAL_TWITCH_ENABLED: z.boolean(),
  EXTERNAL_TWITCH_SECRET: z.string(),
  EXTERNAL_TWITTER_CLIENT_ID: z.string(),
  EXTERNAL_TWITTER_EMAIL_OPTIONAL: z.boolean(),
  EXTERNAL_TWITTER_ENABLED: z.boolean(),
  EXTERNAL_TWITTER_SECRET: z.string(),
  EXTERNAL_WORKOS_CLIENT_ID: z.string(),
  EXTERNAL_WORKOS_SECRET: z.string(),
  EXTERNAL_WORKOS_URL: z.string(),
  EXTERNAL_ZOOM_CLIENT_ID: z.string(),
  EXTERNAL_ZOOM_EMAIL_OPTIONAL: z.boolean(),
  EXTERNAL_ZOOM_ENABLED: z.boolean(),
  EXTERNAL_ZOOM_SECRET: z.string(),
  HOOK_AFTER_USER_CREATED_ENABLED: z.boolean(),
  HOOK_AFTER_USER_CREATED_SECRETS: z.string(),
  HOOK_AFTER_USER_CREATED_URI: z.string(),
  HOOK_BEFORE_USER_CREATED_ENABLED: z.boolean(),
  HOOK_BEFORE_USER_CREATED_SECRETS: z.string(),
  HOOK_BEFORE_USER_CREATED_URI: z.string(),
  HOOK_CUSTOM_ACCESS_TOKEN_ENABLED: z.boolean(),
  HOOK_CUSTOM_ACCESS_TOKEN_SECRETS: z.string(),
  HOOK_CUSTOM_ACCESS_TOKEN_URI: z.string(),
  HOOK_MFA_VERIFICATION_ATTEMPT_ENABLED: z.boolean(),
  HOOK_MFA_VERIFICATION_ATTEMPT_SECRETS: z.string(),
  HOOK_MFA_VERIFICATION_ATTEMPT_URI: z.string(),
  HOOK_PASSWORD_VERIFICATION_ATTEMPT_ENABLED: z.boolean(),
  HOOK_PASSWORD_VERIFICATION_ATTEMPT_SECRETS: z.string(),
  HOOK_PASSWORD_VERIFICATION_ATTEMPT_URI: z.string(),
  HOOK_SEND_EMAIL_ENABLED: z.boolean(),
  HOOK_SEND_EMAIL_SECRETS: z.string(),
  HOOK_SEND_EMAIL_URI: z.string(),
  HOOK_SEND_SMS_ENABLED: z.boolean(),
  HOOK_SEND_SMS_SECRETS: z.string(),
  HOOK_SEND_SMS_URI: z.string(),
  JWT_EXP: z.number(),
  MAILER_ALLOW_UNVERIFIED_EMAIL_SIGN_INS: z.boolean(),
  MAILER_AUTOCONFIRM: z.boolean(),
  MAILER_NOTIFICATIONS_EMAIL_CHANGED_ENABLED: z.boolean(),
  MAILER_NOTIFICATIONS_IDENTITY_LINKED_ENABLED: z.boolean(),
  MAILER_NOTIFICATIONS_IDENTITY_UNLINKED_ENABLED: z.boolean(),
  MAILER_NOTIFICATIONS_MFA_FACTOR_ENROLLED_ENABLED: z.boolean(),
  MAILER_NOTIFICATIONS_MFA_FACTOR_UNENROLLED_ENABLED: z.boolean(),
  MAILER_NOTIFICATIONS_PASSWORD_CHANGED_ENABLED: z.boolean(),
  MAILER_NOTIFICATIONS_PHONE_CHANGED_ENABLED: z.boolean(),
  MAILER_OTP_EXP: z.number(),
  MAILER_OTP_LENGTH: z.number(),
  MAILER_SECURE_EMAIL_CHANGE_ENABLED: z.boolean(),
  MAILER_SUBJECTS_CONFIRMATION: z.string(),
  MAILER_SUBJECTS_EMAIL_CHANGE: z.string(),
  MAILER_SUBJECTS_EMAIL_CHANGED_NOTIFICATION: z.string(),
  MAILER_SUBJECTS_IDENTITY_LINKED_NOTIFICATION: z.string(),
  MAILER_SUBJECTS_IDENTITY_UNLINKED_NOTIFICATION: z.string(),
  MAILER_SUBJECTS_INVITE: z.string(),
  MAILER_SUBJECTS_MAGIC_LINK: z.string(),
  MAILER_SUBJECTS_MFA_FACTOR_ENROLLED_NOTIFICATION: z.string(),
  MAILER_SUBJECTS_MFA_FACTOR_UNENROLLED_NOTIFICATION: z.string(),
  MAILER_SUBJECTS_PASSWORD_CHANGED_NOTIFICATION: z.string(),
  MAILER_SUBJECTS_PHONE_CHANGED_NOTIFICATION: z.string(),
  MAILER_SUBJECTS_REAUTHENTICATION: z.string(),
  MAILER_SUBJECTS_RECOVERY: z.string(),
  MAILER_TEMPLATES_CONFIRMATION_CONTENT: z.string(),
  MAILER_TEMPLATES_EMAIL_CHANGE_CONTENT: z.string(),
  MAILER_TEMPLATES_EMAIL_CHANGED_NOTIFICATION_CONTENT: z.string(),
  MAILER_TEMPLATES_IDENTITY_LINKED_NOTIFICATION_CONTENT: z.string(),
  MAILER_TEMPLATES_IDENTITY_UNLINKED_NOTIFICATION_CONTENT: z.string(),
  MAILER_TEMPLATES_INVITE_CONTENT: z.string(),
  MAILER_TEMPLATES_MAGIC_LINK_CONTENT: z.string(),
  MAILER_TEMPLATES_MFA_FACTOR_ENROLLED_NOTIFICATION_CONTENT: z.string(),
  MAILER_TEMPLATES_MFA_FACTOR_UNENROLLED_NOTIFICATION_CONTENT: z.string(),
  MAILER_TEMPLATES_PASSWORD_CHANGED_NOTIFICATION_CONTENT: z.string(),
  MAILER_TEMPLATES_PHONE_CHANGED_NOTIFICATION_CONTENT: z.string(),
  MAILER_TEMPLATES_REAUTHENTICATION_CONTENT: z.string(),
  MAILER_TEMPLATES_RECOVERY_CONTENT: z.string(),
  MFA_ALLOW_LOW_AAL: z.boolean(),
  MFA_MAX_ENROLLED_FACTORS: z.number(),
  MFA_PHONE_ENROLL_ENABLED: z.boolean(),
  MFA_PHONE_MAX_FREQUENCY: z.number(),
  MFA_PHONE_OTP_LENGTH: z.number(),
  MFA_PHONE_TEMPLATE: z.string(),
  MFA_PHONE_VERIFY_ENABLED: z.boolean(),
  MFA_TOTP_ENROLL_ENABLED: z.boolean(),
  MFA_TOTP_VERIFY_ENABLED: z.boolean(),
  MFA_WEB_AUTHN_ENROLL_ENABLED: z.boolean(),
  MFA_WEB_AUTHN_VERIFY_ENABLED: z.boolean(),
  NIMBUS_OAUTH_CLIENT_ID: z.string().nullable().optional(),
  NIMBUS_OAUTH_CLIENT_SECRET: z.string().nullable().optional(),
  OAUTH_SERVER_ALLOW_DYNAMIC_REGISTRATION: z.boolean(),
  OAUTH_SERVER_AUTHORIZATION_PATH: z.string().nullable().optional(),
  OAUTH_SERVER_ENABLED: z.boolean(),
  PASSWORD_HIBP_ENABLED: z.boolean(),
  PASSWORD_MIN_LENGTH: z.number(),
  PASSWORD_REQUIRED_CHARACTERS: PasswordRequiredCharactersEnum,
  RATE_LIMIT_ANONYMOUS_USERS: z.number().nullable().optional(),
  RATE_LIMIT_EMAIL_SENT: z.number().nullable().optional(),
  RATE_LIMIT_OTP: z.number().nullable().optional(),
  RATE_LIMIT_SMS_SENT: z.number().nullable().optional(),
  RATE_LIMIT_TOKEN_REFRESH: z.number().nullable().optional(),
  RATE_LIMIT_VERIFY: z.number().nullable().optional(),
  REFRESH_TOKEN_ROTATION_ENABLED: z.boolean(),
  SAML_ALLOW_ENCRYPTED_ASSERTIONS: z.boolean(),
  SAML_ENABLED: z.boolean(),
  SAML_EXTERNAL_URL: z.string(),
  SECURITY_CAPTCHA_ENABLED: z.boolean(),
  SECURITY_CAPTCHA_PROVIDER: CaptchaProviderEnum,
  SECURITY_CAPTCHA_SECRET: z.string(),
  SECURITY_MANUAL_LINKING_ENABLED: z.boolean(),
  SECURITY_REFRESH_TOKEN_REUSE_INTERVAL: z.number(),
  SECURITY_UPDATE_PASSWORD_REQUIRE_REAUTHENTICATION: z.boolean(),
  SESSIONS_INACTIVITY_TIMEOUT: z.number(),
  SESSIONS_SINGLE_PER_USER: z.boolean(),
  SESSIONS_TAGS: z.string(),
  SESSIONS_TIMEBOX: z.number(),
  SITE_URL: z.string(),
  SMS_AUTOCONFIRM: z.boolean(),
  SMS_MAX_FREQUENCY: z.number(),
  SMS_MESSAGEBIRD_ACCESS_KEY: z.string(),
  SMS_MESSAGEBIRD_ORIGINATOR: z.string(),
  SMS_OTP_EXP: z.number(),
  SMS_OTP_LENGTH: z.number(),
  SMS_PROVIDER: SmsProviderEnum,
  SMS_TEMPLATE: z.string(),
  SMS_TEST_OTP: z.string(),
  SMS_TEST_OTP_VALID_UNTIL: z.string().datetime().nullable().optional(),
  SMS_TEXTLOCAL_API_KEY: z.string(),
  SMS_TEXTLOCAL_SENDER: z.string(),
  SMS_TWILIO_ACCOUNT_SID: z.string(),
  SMS_TWILIO_AUTH_TOKEN: z.string(),
  SMS_TWILIO_CONTENT_SID: z.string(),
  SMS_TWILIO_MESSAGE_SERVICE_SID: z.string(),
  SMS_TWILIO_VERIFY_ACCOUNT_SID: z.string(),
  SMS_TWILIO_VERIFY_AUTH_TOKEN: z.string(),
  SMS_TWILIO_VERIFY_MESSAGE_SERVICE_SID: z.string(),
  SMS_VONAGE_API_KEY: z.string(),
  SMS_VONAGE_API_SECRET: z.string(),
  SMS_VONAGE_FROM: z.string(),
  SMTP_ADMIN_EMAIL: z.string().email(),
  SMTP_HOST: z.string(),
  SMTP_MAX_FREQUENCY: z.number(),
  SMTP_PASS: z.string(),
  SMTP_PORT: z.string(),
  SMTP_SENDER_NAME: z.string(),
  SMTP_USER: z.string(),
  URI_ALLOW_LIST: z.string(),
})

// --- Create Update Schema: all fields optional + nullable ---
const UpdateAuthConfigBodySchema = z.object(
  Object.fromEntries(
    Object.entries(AuthConfigResponseSchema.shape).map(([key, schema]) => [
      key,
      (schema as z.ZodTypeAny).optional().nullable(),
    ])
  )
)

const UpdateUserReponseSchema = z.object({
  aud: z.string().optional(),
  banned_until: z.string().optional(),
  confirmation_sent_at: z.string().optional(),
  confirmation_token: z.string().optional(),
  confirmed_at: z.string().optional(),
  created_at: z.string().optional(),
  deleted_at: z.string().optional(),
  email: z.string().optional(),
  email_change: z.string().optional(),
  email_change_confirm_status: z.number().optional(),
  email_change_sent_at: z.string().optional(),
  email_change_token_current: z.string().optional(),
  email_change_token_new: z.string().optional(),
  email_confirmed_at: z.string().optional(),
  encrypted_password: z.string().optional(),
  /** Format: uuid */
  id: z.string().optional(),
  /** Format: uuid */
  instance_id: z.string().optional(),
  invited_at: z.string().optional(),
  is_anonymous: z.boolean().optional(),
  is_sso_user: z.boolean().optional(),
  is_super_admin: z.boolean().optional(),
  last_sign_in_at: z.string().optional(),
  phone: z.string().optional(),
  phone_change: z.string().optional(),
  phone_change_sent_at: z.string().optional(),
  phone_change_token: z.string().optional(),
  phone_confirmed_at: z.string().optional(),
  raw_app_meta_data: z.record(z.unknown()).optional(),
  raw_user_meta_data: z.record(z.unknown()).optional(),
  reauthentication_sent_at: z.string().optional(),
  reauthentication_token: z.string().optional(),
  recovery_sent_at: z.string().optional(),
  recovery_token: z.string().optional(),
  role: z.string().optional(),
  updated_at: z.string().optional(),
})

const ValidateSpamBodySchema = z.object({
  content: z.string(),
  subject: z.string(),
})

const ValidateSpamResponseSchema = z.object({
  rules: z.array(
    z.object({
      desc: z.string(),
      name: z.string(),
      score: z.number(),
    })
  ),
})

const UpdateUserBodySchema = z.object({
  ban_duration: z.string().optional(),
})

const CreateUserBodySchema = z.object({
  email: z.string(),
  email_confirm: z.boolean(),
  password: z.string(),
})

const UserBodySchema = z.object({
  aud: z.string().optional(),
  banned_until: z.string().optional(),
  confirmation_sent_at: z.string().optional(),
  confirmation_token: z.string().optional(),
  confirmed_at: z.string().optional(),
  created_at: z.string().optional(),
  deleted_at: z.string().optional(),
  email: z.string().optional(),
  email_change: z.string().optional(),
  email_change_confirm_status: z.number().optional(),
  email_change_sent_at: z.string().optional(),
  email_change_token_current: z.string().optional(),
  email_change_token_new: z.string().optional(),
  email_confirmed_at: z.string().optional(),
  encrypted_password: z.string().optional(),
  /** Format: uuid */
  id: z.string().optional(),
  /** Format: uuid */
  instance_id: z.string().optional(),
  invited_at: z.string().optional(),
  is_anonymous: z.boolean().optional(),
  is_sso_user: z.boolean().optional(),
  is_super_admin: z.boolean().optional(),
  last_sign_in_at: z.string().optional(),
  phone: z.string().optional(),
  phone_change: z.string().optional(),
  phone_change_sent_at: z.string().optional(),
  phone_change_token: z.string().optional(),
  phone_confirmed_at: z.string().optional(),
  raw_app_meta_data: z.record(z.unknown()).optional(),
  raw_user_meta_data: z.record(z.unknown()).optional(),
  reauthentication_sent_at: z.string().optional(),
  reauthentication_token: z.string().optional(),
  recovery_sent_at: z.string().optional(),
  recovery_token: z.string().optional(),
  role: z.string().optional(),
  updated_at: z.string().optional(),
})

const UpdateAuthConfigHooksBodySchema = z.object({
  HOOK_AFTER_USER_CREATED_ENABLED: z.boolean().nullable().optional(),
  HOOK_AFTER_USER_CREATED_SECRETS: z.string().nullable().optional(),
  HOOK_AFTER_USER_CREATED_URI: z.string().nullable().optional(),
  HOOK_BEFORE_USER_CREATED_ENABLED: z.boolean().nullable().optional(),
  HOOK_BEFORE_USER_CREATED_SECRETS: z.string().nullable().optional(),
  HOOK_BEFORE_USER_CREATED_URI: z.string().nullable().optional(),
  HOOK_CUSTOM_ACCESS_TOKEN_ENABLED: z.boolean().nullable().optional(),
  HOOK_CUSTOM_ACCESS_TOKEN_SECRETS: z.string().nullable().optional(),
  HOOK_CUSTOM_ACCESS_TOKEN_URI: z.string().nullable().optional(),
  HOOK_MFA_VERIFICATION_ATTEMPT_ENABLED: z.boolean().nullable().optional(),
  HOOK_MFA_VERIFICATION_ATTEMPT_SECRETS: z.string().nullable().optional(),
  HOOK_MFA_VERIFICATION_ATTEMPT_URI: z.string().nullable().optional(),
  HOOK_PASSWORD_VERIFICATION_ATTEMPT_ENABLED: z.boolean().nullable().optional(),
  HOOK_PASSWORD_VERIFICATION_ATTEMPT_SECRETS: z.string().nullable().optional(),
  HOOK_PASSWORD_VERIFICATION_ATTEMPT_URI: z.string().nullable().optional(),
  HOOK_SEND_EMAIL_ENABLED: z.boolean().nullable().optional(),
  HOOK_SEND_EMAIL_SECRETS: z.string().nullable().optional(),
  HOOK_SEND_EMAIL_URI: z.string().nullable().optional(),
  HOOK_SEND_SMS_ENABLED: z.boolean().nullable().optional(),
  HOOK_SEND_SMS_SECRETS: z.string().nullable().optional(),
  HOOK_SEND_SMS_URI: z.string().nullable().optional(),
})

export type UpdateAuthConfigBody = z.infer<typeof UpdateAuthConfigBodySchema>

export const UpdateAuthConfigBodyJsonSchema = zodToJsonSchema(UpdateAuthConfigBodySchema, {
  name: 'UpdateAuthConfigBody',
})

export type AuthConfigResponse = z.infer<typeof AuthConfigResponseSchema>

export const AuthConfigResponseJsonSchema = zodToJsonSchema(AuthConfigResponseSchema, {
  name: 'AuthConfigResponse',
})

export type UpdateAuthConfigHooksBody = z.infer<typeof UpdateAuthConfigHooksBodySchema>

export const UpdateAuthConfigHooksJsonSchema = zodToJsonSchema(UpdateAuthConfigHooksBodySchema, {
  name: 'UpdateAuthConfigHooksBody',
})

export type UserBody = z.infer<typeof UserBodySchema>

export const UserBodyJsonSchema = zodToJsonSchema(UserBodySchema, {
  name: 'UserBody',
})

export type CreateUserBody = z.infer<typeof CreateUserBodySchema>

export const CreateUserBodyJsonSchema = zodToJsonSchema(CreateUserBodySchema, {
  name: 'CreateUserBody',
})

export type CreateUserReponse = z.infer<typeof CreateUserReponseSchema>

export const CreateUserReponseJsonSchema = zodToJsonSchema(CreateUserReponseSchema, {
  name: 'CreateUserReponse',
})

export type UpdateUserBody = z.infer<typeof UpdateUserBodySchema>

export const UpdateUserBodyJsonSchema = zodToJsonSchema(UpdateUserBodySchema, {
  name: 'UpdateUserBody',
})

export type UpdateUserReponse = z.infer<typeof UpdateUserReponseSchema>

export const UpdateUserReponseJsonSchema = zodToJsonSchema(UpdateUserReponseSchema, {
  name: 'UpdateUserReponse',
})

export type ValidateSpamBody = z.infer<typeof ValidateSpamBodySchema>

export const ValidateSpamBodyJsonSchema = zodToJsonSchema(ValidateSpamBodySchema, {
  name: 'ValidateSpamBody',
})

export type ValidateSpamResponse = z.infer<typeof ValidateSpamResponseSchema>

export const ValidateSpamResponseJsonSchema = zodToJsonSchema(ValidateSpamResponseSchema, {
  name: 'ValidateSpamResponse',
})

export type UpdateEmailBody = z.infer<typeof UpdateEmailBodySchema>
export const UpdateEmailBodyJsonSchema = zodToJsonSchema(UpdateEmailBodySchema, {
  name: 'UpdateEmailBody',
})

export const SignUpBodySchema = z.object({
  email: z.string().email(),
  password: z.string(),
  redirectTo: z.string().url().optional(),
})

export type SignUpBody = z.infer<typeof SignUpBodySchema>

export const SignUpBodyJsonSchema = zodToJsonSchema(SignUpBodySchema, {
  name: 'SignUpBody',
})

// Reset Password
export const ResetPasswordBodySchema = z.object({
  email: z.string().email(),
  redirectTo: z.string().url().optional(),
})

export type ResetPasswordBody = z.infer<typeof ResetPasswordBodySchema>

export const ResetPasswordBodyJsonSchema = zodToJsonSchema(ResetPasswordBodySchema, {
  name: 'ResetPasswordBody',
})
