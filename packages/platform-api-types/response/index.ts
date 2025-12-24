/** One of the providers supported by Auth. */
export type Provider =
  | 'apple'
  | 'azure'
  | 'bitbucket'
  | 'discord'
  | 'facebook'
  | 'figma'
  | 'github'
  | 'gitlab'
  | 'google'
  | 'kakao'
  | 'keycloak'
  | 'linkedin'
  | 'linkedin_oidc'
  | 'notion'
  | 'slack'
  | 'slack_oidc'
  | 'spotify'
  | 'twitch'
  | 'twitter'
  | 'workos'
  | 'zoom'

export interface UserAppMetadata {
  provider?: string
  [key: string]: any
}

export interface UserMetadata {
  [key: string]: any
}

export interface User {
  id: string
  aud: string
  app_metadata: UserAppMetadata
  user_metadata: UserMetadata
  confirmation_sent_at?: string
  recovery_sent_at?: string
  email_change_sent_at?: string
  identities?: UserIdentity[]
  new_email?: string
  new_phone?: string
  invited_at?: string
  action_link?: string
  email?: string
  phone?: string
  confirmed_at?: string
  email_confirmed_at?: string
  phone_confirmed_at?: string
  last_sign_in_at?: string
  role?: string
  is_anonymous?: boolean
  is_sso_user?: boolean
  auth0_id: string
  disabled_features: (
    | 'organizations:create'
    | 'organizations:delete'
    | 'organization_members:create'
    | 'organization_members:delete'
    | 'projects:create'
    | 'projects:transfer'
    | 'project_auth:all'
    | 'project_storage:all'
    | 'project_edge_function:all'
    | 'profile:update'
    | 'billing:account_data'
    | 'billing:credits'
    | 'billing:invoices'
    | 'billing:payment_methods'
    | 'realtime:all'
  )[]
  first_name: string
  free_project_limit: number
  user_id: string
  is_alpha_user: boolean
  last_name: string
  mobile: string
  primary_email: string
  username: string
  factors?: (Factor<FactorType, 'verified'> | Factor<FactorType, 'unverified'>)[]
  updated_at?: string
  created_at: string
  deletedAt?: string
}

export interface Session {
  /**
   * The oauth provider token. If present, this can be used to make external API requests to the oauth provider used.
   */
  provider_token?: string | null
  /**
   * The oauth provider refresh token. If present, this can be used to refresh the provider_token via the oauth provider's API.
   * Not all oauth providers return a provider refresh token. If the provider_refresh_token is missing, please refer to the oauth provider's documentation for information on how to obtain the provider refresh token.
   */
  provider_refresh_token?: string | null
  /**
   * The access token jwt. It is recommended to set the JWT_EXPIRY to a shorter expiry value.
   */
  access_token: string
  /**
   * A one-time used refresh token that never expires.
   */
  refresh_token: string
  /**
   * The number of seconds until the token expires (since it was issued). Returned when a login is confirmed.
   */
  expires_in: number
  /**
   * A timestamp of when the token will expire. Returned when a login is confirmed.
   */
  expires_at?: number
  token_type: 'bearer'

  /**
   * When using a separate user storage, accessing properties of this object will throw an error.
   */
  user: User
}

/**
 * similar to RequestResult except it allows you to destructure the possible shape of the success response
 *  {@see RequestResult}
 */
export type RequestResultSafeDestructure<T> =
  | { data: T; error: null }
  | {
      data: T extends object ? { [K in keyof T]: null } : null
      error: Error
    }

export type AuthResponse = RequestResultSafeDestructure<{
  user: User | null
  session: Session | null
}>

export type TelemetryCallFeatureFlagsResponse = {
  [key: string]: unknown
}

const WeakPasswordReasons = ['length', 'characters', 'pwned'] as const

export type WeakPasswordReasons = (typeof WeakPasswordReasons)[number]
export type WeakPassword = {
  reasons: WeakPasswordReasons[]
  message: string
}

export type AuthResponsePassword = RequestResultSafeDestructure<{
  user: User | null
  session: Session | null
  weak_password?: WeakPassword | null
}>

export type UserResponse = RequestResultSafeDestructure<{
  user: User
}>

/**
 * a shared result type that encapsulates errors instead of throwing them, allows you to optionally specify the ErrorType
 */
export type RequestResult<T> =
  | {
      data: T
      error: null
    }
  | {
      data: null
      error: Error
    }

export type SSOResponse = RequestResult<{
  /**
   * URL to open in a browser which will complete the sign-in flow by
   * taking the user to the identity provider's authentication flow.
   *
   * On browsers you can set the URL to `window.location.href` to take
   * the user to the authentication flow.
   */
  url: string
}>

export type GenerateLinkType =
  | 'signup'
  | 'invite'
  | 'magiclink'
  | 'recovery'
  | 'email_change_current'
  | 'email_change_new'

/** The properties related to the email link generated  */
export type GenerateLinkProperties = {
  /**
   * The email link to send to the user.
   * The action_link follows the following format: /verify?type={verification_type}&token={hashed_token}&redirect_to={redirect_to}
   * */
  action_link: string
  /**
   * The raw email OTP.
   * You should send this in the email if you want your users to verify using an OTP instead of the action link.
   * */
  email_otp: string
  /**
   * The hashed token appended to the action link.
   * */
  hashed_token: string
  /** The URL appended to the action link. */
  redirect_to: string
  /** The verification type that the email link is associated to. */
  verification_type: GenerateLinkType
}

export type GenerateLinkResponse = RequestResultSafeDestructure<{
  properties: GenerateLinkProperties
  user: User
}>

const FactorTypes = ['totp', 'phone'] as const

/**
 * Type of factor. `totp` and `phone` supported with this version
 */
export type FactorType = (typeof FactorTypes)[number]

const FactorVerificationStatuses = ['verified', 'unverified'] as const

/**
 * The verification status of the factor, default is `unverified` after `.enroll()`, then `verified` after the user verifies it with `.verify()`
 */
type FactorVerificationStatus = (typeof FactorVerificationStatuses)[number]

/**
 * A MFA factor.
 *
 * @see {@link MFAApi#enroll}
 * @see {@link MFAApi#listFactors}
 */
export type Factor<
  Type extends FactorType = FactorType,
  Status extends FactorVerificationStatus = (typeof FactorVerificationStatuses)[number],
> = {
  /** ID of the factor. */
  id: string

  /** Friendly name of the factor, useful to disambiguate between multiple factors. */
  friendly_name?: string

  /**
   * Type of factor. `totp` and `phone` supported with this version
   */
  factor_type: Type

  /**
   * The verification status of the factor, default is `unverified` after `.enroll()`, then `verified` after the user verifies it with `.verify()`
   */
  status: Status

  created_at: string
  updated_at: string
}

/**
 * Resolve mapped types and show the derived keys and their types when hovering in
 * VS Code, instead of just showing the names those mapped types are defined with.
 */
export type Prettify<T> = T extends Function ? T : { [K in keyof T]: T[K] }

export type AuthMFAListFactorsResponse<T extends typeof FactorTypes = typeof FactorTypes> =
  RequestResult<
    {
      /** All available factors (verified and unverified). */
      all: Prettify<Factor>[]

      // Dynamically create a property for each factor type with only verified factors
    } & {
      [K in T[number]]: Prettify<Factor<K, 'verified'>>[]
    }
  >

export type AuthTokenResponse = RequestResultSafeDestructure<{
  user: User
  session: Session
}>

/**
 * AuthOtpResponse is returned when OTP is used.
 *
 * {@see AuthResponse}
 */
export type AuthOtpResponse = RequestResultSafeDestructure<{
  user: null
  session: null
  messageId?: string | null
}>

export type OAuthResponse =
  | {
      data: {
        provider: Provider
        url: string
      }
      error: null
    }
  | {
      data: {
        provider: Provider
        url: null
      }
      error: Error
    }

export interface UserIdentity {
  id: string
  user_id: string
  identity_data?: {
    [key: string]: any
  }
  identity_id: string
  provider: string
  created_at?: string
  last_sign_in_at?: string
  updated_at?: string
}

/**
 * Data returned after successful MFA verification.
 * Contains new session tokens and updated user information.
 */
export type AuthMFAVerifyResponseData = {
  /** New access token (JWT) after successful verification. */
  access_token: string

  /** Type of token, always `bearer`. */
  token_type: 'bearer'

  /** Number of seconds in which the access token will expire. */
  expires_in: number

  /** Refresh token you can use to obtain new access tokens when expired. */
  refresh_token: string

  /** Updated user profile. */
  user: User
}

/**
 * Response type for MFA verification operations.
 * Returns session tokens on successful verification.
 */
export type AuthMFAVerifyResponse = RequestResult<AuthMFAVerifyResponseData>

/**
 * A stricter version of TypeScript's Omit that only allows omitting keys that actually exist.
 * This prevents typos and ensures type safety at compile time.
 * Unlike regular Omit, this will error if you try to omit a non-existent key.
 */
export type StrictOmit<T, K extends keyof T> = Omit<T, K>

export type AuthenticatorAssuranceLevels = 'aal1' | 'aal2'

const AMRMethods = [
  'password',
  'otp',
  'oauth',
  'totp',
  'mfa/totp',
  'mfa/phone',
  'anonymous',
  'sso/saml',
  'magiclink',
] as const

export type AMRMethod = (typeof AMRMethods)[number] | (string & {})

/**
 * An authentication methord reference (AMR) entry.
 *
 * An entry designates what method was used by the user to verify their
 * identity and at what time.
 *
 * @see {@link MFAApi#getAuthenticatorAssuranceLevel}.
 */
export interface AMREntry {
  /** Authentication method name. */
  method: AMRMethod

  /**
   * Timestamp when the method was successfully used. Represents number of
   * seconds since 1st January 1970 (UNIX epoch) in UTC.
   */
  timestamp: number
}

export type AuthMFAGetAuthenticatorAssuranceLevelResponse = RequestResult<{
  /** Current AAL level of the session. */
  currentLevel: AuthenticatorAssuranceLevels | null

  /**
   * Next possible AAL level for the session. If the next level is higher
   * than the current one, the user should go through MFA.
   *
   * @see {@link MFAApi#challenge}
   */
  nextLevel: AuthenticatorAssuranceLevels | null

  /**
   * A list of all authentication methods attached to this session. Use
   * the information here to detect the last time a user verified a
   * factor, for example if implementing a step-up scenario.
   */
  currentAuthenticationMethods: AMREntry[]
}>

type AuthMFAChallengeTOTPResponseFields = {
  /** no extra fields for now, kept for consistency and for possible future changes  */
}

type AuthMFAChallengeResponseBase<T extends FactorType> = {
  /** ID of the newly created challenge. */
  id: string

  /** Factor Type which generated the challenge */
  type: T

  /** Timestamp in UNIX seconds when this challenge will no longer be usable. */
  expires_at: number
}

export type AuthMFAChallengeTOTPResponse = RequestResult<
  Prettify<AuthMFAChallengeResponseBase<'totp'> & AuthMFAChallengeTOTPResponseFields>
>

type AuthMFAChallengePhoneResponseFields = {
  /** no extra fields for now, kept for consistency and for possible future changes  */
}

export type AuthMFAChallengePhoneResponse = RequestResult<
  Prettify<AuthMFAChallengeResponseBase<'phone'> & AuthMFAChallengePhoneResponseFields>
>

export type AuthMFAChallengeResponse = AuthMFAChallengeTOTPResponse | AuthMFAChallengePhoneResponse

type AuthMFAEnrollResponseBase<T extends FactorType> = {
  /** ID of the factor that was just enrolled (in an unverified state). */
  id: string

  /** Type of MFA factor.*/
  type: T

  /** Friendly name of the factor, useful for distinguishing between factors **/
  friendly_name?: string
}

type AuthMFAEnrollPhoneResponseFields = {
  /** Phone number of the MFA factor in E.164 format. Used to send messages  */
  phone: string
}

export type AuthMFAEnrollPhoneResponse = RequestResult<
  Prettify<AuthMFAEnrollResponseBase<'phone'> & AuthMFAEnrollPhoneResponseFields>
>

type AuthMFAEnrollTOTPResponseFields = {
  /** TOTP enrollment information. */
  totp: {
    /** Contains a QR code encoding the authenticator URI. You can
     * convert it to a URL by prepending `data:image/svg+xml;utf-8,` to
     * the value. Avoid logging this value to the console. */
    qr_code: string

    /** The TOTP secret (also encoded in the QR code). Show this secret
     * in a password-style field to the user, in case they are unable to
     * scan the QR code. Avoid logging this value to the console. */
    secret: string

    /** The authenticator URI encoded within the QR code, should you need
     * to use it. Avoid loggin this value to the console. */
    uri: string
  }
}

export type AuthMFAEnrollTOTPResponse = RequestResult<
  Prettify<AuthMFAEnrollResponseBase<'totp'> & AuthMFAEnrollTOTPResponseFields>
>

export type AuthMFAEnrollResponse = AuthMFAEnrollTOTPResponse | AuthMFAEnrollPhoneResponse

export type AuthMFAUnenrollResponse = RequestResult<{
  /** ID of the factor that was successfully unenrolled. */
  id: string
}>

export type CallRefreshTokenResult = RequestResult<Session>

export type AuthTokenResponsePassword = RequestResultSafeDestructure<{
  user: User
  session: Session
  weakPassword?: WeakPassword
}>

export type InitializeResult = { error: Error | null }

/**
 * OAuth client details in an authorization request.
 * Only relevant when the OAuth 2.1 server is enabled in Auth.
 */
export type OAuthAuthorizationClient = {
  /** Unique identifier for the OAuth client (UUID) */
  id: string
  /** Human-readable name of the OAuth client */
  name: string
  /** URI of the OAuth client's website */
  uri: string
  /** URI of the OAuth client's logo */
  logo_uri: string
}

/**
 * OAuth authorization details for the consent flow.
 * Only relevant when the OAuth 2.1 server is enabled in Auth.
 */
export type OAuthAuthorizationDetails = {
  /** The authorization ID */
  authorization_id: string
  /** Redirect URL - present if user already consented (can be used to trigger immediate redirect) */
  redirect_url?: string
  /** OAuth client requesting authorization */
  client: OAuthAuthorizationClient
  /** User object associated with the authorization */
  user: {
    /** User ID (UUID) */
    id: string
    /** User email */
    email: string
  }
  /** Space-separated list of requested scopes */
  scope: string
}

/**
 * Response type for getting OAuth authorization details.
 * Only relevant when the OAuth 2.1 server is enabled in Auth.
 */
export type AuthOAuthAuthorizationDetailsResponse = RequestResult<OAuthAuthorizationDetails>

/**
 * Response type for OAuth consent decision (approve/deny).
 * Only relevant when the OAuth 2.1 server is enabled in Auth.
 */
export type AuthOAuthConsentResponse = RequestResult<{
  /** URL to redirect the user back to the OAuth client */
  redirect_url: string
}>

/**
 * Response type for revoking an OAuth grant.
 * Only relevant when the OAuth 2.1 server is enabled in Auth.
 */
export type AuthOAuthRevokeGrantResponse = RequestResult<{}>

/**
 * An OAuth grant representing a user's authorization of an OAuth client.
 * Only relevant when the OAuth 2.1 server is enabled in Auth.
 */
export type OAuthGrant = {
  /** OAuth client information */
  client: OAuthAuthorizationClient
  /** Array of scopes granted to this client */
  scopes: string[]
  /** Timestamp when the grant was created (ISO 8601 date-time) */
  granted_at: string
}

/**
 * Response type for listing user's OAuth grants.
 * Only relevant when the OAuth 2.1 server is enabled in Auth.
 */
export type AuthOAuthGrantsResponse = RequestResult<OAuthGrant[]>
