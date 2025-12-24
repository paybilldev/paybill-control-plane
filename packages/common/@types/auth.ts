import {
  AMREntry,
  AuthenticatorAssuranceLevels,
  AuthMFAChallengePhoneResponse,
  AuthMFAChallengeResponse,
  AuthMFAChallengeTOTPResponse,
  AuthMFAEnrollPhoneResponse,
  AuthMFAEnrollResponse,
  AuthMFAEnrollTOTPResponse,
  AuthMFAGetAuthenticatorAssuranceLevelResponse,
  AuthMFAListFactorsResponse,
  AuthMFAUnenrollResponse,
  AuthMFAVerifyResponse,
  AuthOAuthAuthorizationDetailsResponse,
  AuthOAuthConsentResponse,
  AuthOAuthGrantsResponse,
  AuthOAuthRevokeGrantResponse,
  MFAChallengeAndVerifyParams,
  MFAChallengeParams,
  MFAChallengePhoneParams,
  MFAChallengeTOTPParams,
  MFAEnrollParams,
  MFAEnrollPhoneParams,
  MFAEnrollTOTPParams,
  MFAUnenrollParams,
  MFAVerifyParams,
  MFAVerifyPhoneParams,
  MFAVerifyTOTPParams,
  Prettify,
  Session,
} from 'platform-api-types'

type AnyFunction = (...args: any[]) => any
type MaybePromisify<T> = T | Promise<T>

type PromisifyMethods<T> = {
  [K in keyof T]: T[K] extends AnyFunction
    ? (...args: Parameters<T[K]>) => MaybePromisify<ReturnType<T[K]>>
    : T[K]
}

export type Uint8Array_ = ReturnType<Uint8Array['slice']>

export type Fetch = typeof fetch

export type SupportedStorage = PromisifyMethods<
  Pick<Storage, 'getItem' | 'setItem' | 'removeItem'>
> & {
  /**
   * If set to `true` signals to the library that the storage medium is used
   * on a server and the values may not be authentic, such as reading from
   * request cookies. Implementations should not set this to true if the client
   * is used on a server that reads storage information from authenticated
   * sources, such as a secure database or file.
   */
  isServer?: boolean
}

export type AuthFlowType = 'implicit' | 'pkce'

/**
 * Provide your own global lock implementation instead of the default
 * implementation. The function should acquire a lock for the duration of the
 * `fn` async function, such that no other client instances will be able to
 * hold it at the same time.
 *
 * @experimental
 *
 * @param name Name of the lock to be acquired.
 * @param acquireTimeout If negative, no timeout should occur. If positive it
 *                       should throw an Error with an `isAcquireTimeout`
 *                       property set to true if the operation fails to be
 *                       acquired after this much time (ms).
 * @param fn The operation to execute when the lock is acquired.
 */
export type LockFunc = <R>(name: string, acquireTimeout: number, fn: () => Promise<R>) => Promise<R>

export type Options = {
  /* The URL of the Api server. */
  url?: string
  /* Any additional headers to send to the Api server. */
  headers?: { [key: string]: string }
  /* Optional key name used for storing tokens in local storage. */
  storageKey?: string
  /* Set to "true" if you want to automatically detects OAuth grants in the URL and signs in the user. */
  detectSessionInUrl?: boolean
  /* Set to "true" if you want to automatically refresh the token before expiring. */
  autoRefreshToken?: boolean
  /* Set to "true" if you want to automatically save the user session into local storage. If set to false, session will just be saved in memory. */
  persistSession?: boolean
  /* Provide your own local storage implementation to use instead of the browser's local storage. */
  storage?: SupportedStorage
  /**
   * Stores the user object in a separate storage location from the rest of the session data. When non-null, `storage` will only store a JSON object containing the access and refresh token and some adjacent metadata, while `userStorage` will only contain the user object under the key `storageKey + '-user'`.
   *
   * When this option is set and cookie storage is used, `getSession()` and other functions that load a session from the cookie store might not return back a user. It's very important to always use `getUser()` to fetch a user object in those scenarios.
   *
   * @experimental
   */
  userStorage?: SupportedStorage
  /* A custom fetch implementation. */
  fetch?: Fetch
  /* If set to 'pkce' PKCE flow. Defaults to the 'implicit' flow otherwise */
  flowType?: AuthFlowType
  /* If debug messages are emitted. Can be used to inspect the behavior of the library. If set to a function, the provided function will be used instead of `console.log()` to perform the logging. */
  debug?: boolean | ((message: string, ...args: any[]) => void)
  /**
   * Provide your own locking mechanism based on the environment. By default no locking is done at this time.
   *
   * @experimental
   */
  lock?: LockFunc
  /**
   * Set to "true" if there is a custom authorization header set globally.
   * @experimental
   */
  hasCustomAuthorizationHeader?: boolean
  /**
   * If there is an error with the query, throwOnError will reject the promise by
   * throwing the error instead of returning it as part of a successful response.
   */
  throwOnError?: boolean
}

export type JwtHeader = {
  alg: 'RS256' | 'ES256' | 'HS256'
  kid: string
  typ: string
}

export type RequiredClaims = {
  iss: string
  sub: string
  aud: string | string[]
  exp: number
  iat: number
  role: string
  aal: AuthenticatorAssuranceLevels
  session_id: string
}

export interface UserAppMetadata {
  /**
   * The first provider that the user used to sign up with.
   */
  provider?: string
  /**
   * A list of all providers that the user has linked to their account.
   */
  providers?: string[]
  [key: string]: any
}

export interface UserMetadata {
  [key: string]: any
}

export interface JwtPayload extends RequiredClaims {
  // Standard optional claims (can be customized via custom access token hooks)
  email?: string
  phone?: string
  is_anonymous?: boolean

  // Optional claims
  jti?: string
  nbf?: number
  app_metadata?: UserAppMetadata
  user_metadata?: UserMetadata
  amr?: AMREntry[]

  // Special claims (only in anon/service role tokens)
  ref?: string

  // Allow custom claims via custom access token hooks
  [key: string]: any
}

export type AuthChangeEventMFA = 'MFA_CHALLENGE_VERIFIED'

export type AuthChangeEvent =
  | 'INITIAL_SESSION'
  | 'PASSWORD_RECOVERY'
  | 'SIGNED_IN'
  | 'SIGNED_OUT'
  | 'TOKEN_REFRESHED'
  | 'USER_UPDATED'
  | AuthChangeEventMFA

export interface UserAttributes {
  /**
   * The user's email.
   */
  email?: string

  /**
   * The user's phone.
   */
  phone?: string

  /**
   * The user's password.
   */
  password?: string

  /**
   * The nonce sent for reauthentication if the user's password is to be updated.
   *
   * Call reauthenticate() to obtain the nonce first.
   */
  nonce?: string

  /**
   * A custom data object to store the user's metadata. This maps to the `auth.users.raw_user_meta_data` column.
   *
   * The `data` should be a JSON object that includes user-specific info, such as their first and last name.
   *
   */
  data?: object
}

export interface Subscription {
  /**
   * The subscriber UUID. This will be set by the client.
   */
  id: string | symbol
  /**
   * The function to call every time there is an event. eg: (eventName) => {}
   */
  callback: (event: AuthChangeEvent, session: Session | null) => void
  /**
   * Call this to remove the listener.
   */
  unsubscribe: () => void
}

export interface JWK {
  kty: 'RSA' | 'EC' | 'oct'
  key_ops: string[]
  alg?: string
  kid?: string
  [key: string]: any
}

/**
 * Contains all OAuth 2.1 authorization server user-facing methods.
 * Only relevant when the OAuth 2.1 server is enabled in Auth.
 *
 * These methods are used to implement the consent page.
 */
export interface AuthOAuthServerApi {
  /**
   * Retrieves details about an OAuth authorization request.
   * Used to display consent information to the user.
   * Only relevant when the OAuth 2.1 server is enabled in Auth.
   *
   * This method returns authorization details including client info, scopes, and user information.
   * If the response includes a redirect_uri, it means consent was already given - the caller
   * should handle the redirect manually if needed.
   *
   * @param authorizationId - The authorization ID from the authorization request
   * @returns Authorization details including client info and requested scopes
   */
  getAuthorizationDetails(authorizationId: string): Promise<AuthOAuthAuthorizationDetailsResponse>

  /**
   * Approves an OAuth authorization request.
   * Only relevant when the OAuth 2.1 server is enabled in Auth.
   *
   * @param authorizationId - The authorization ID to approve
   * @param options - Optional parameters including skipBrowserRedirect
   * @returns Redirect URL to send the user back to the OAuth client
   */
  approveAuthorization(
    authorizationId: string,
    options?: { skipBrowserRedirect?: boolean }
  ): Promise<AuthOAuthConsentResponse>

  /**
   * Denies an OAuth authorization request.
   * Only relevant when the OAuth 2.1 server is enabled in Auth.
   *
   * @param authorizationId - The authorization ID to deny
   * @param options - Optional parameters including skipBrowserRedirect
   * @returns Redirect URL to send the user back to the OAuth client
   */
  denyAuthorization(
    authorizationId: string,
    options?: { skipBrowserRedirect?: boolean }
  ): Promise<AuthOAuthConsentResponse>

  /**
   * Lists all OAuth grants that the authenticated user has authorized.
   * Only relevant when the OAuth 2.1 server is enabled in Auth.
   *
   * @returns Response with array of OAuth grants with client information and granted scopes
   */
  listGrants(): Promise<AuthOAuthGrantsResponse>

  /**
   * Revokes a user's OAuth grant for a specific client.
   * Only relevant when the OAuth 2.1 server is enabled in Auth.
   *
   * Revocation marks consent as revoked, deletes active sessions for that OAuth client,
   * and invalidates associated refresh tokens.
   *
   * @param options - Revocation options
   * @param options.clientId - The OAuth client identifier (UUID) to revoke access for
   * @returns Empty response on successful revocation
   */
  revokeGrant(options: { clientId: string }): Promise<AuthOAuthRevokeGrantResponse>
}

/**
 * Contains the full multi-factor authentication API.
 *
 */
export interface MFAApi {
  /**
   * Starts the enrollment process for a new Multi-Factor Authentication (MFA)
   * factor. This method creates a new `unverified` factor.
   * To verify a factor, present the QR code or secret to the user and ask them to add it to their
   * authenticator app.
   * The user has to enter the code from their authenticator app to verify it.
   *
   * Upon verifying a factor, all other sessions are logged out and the current session's authenticator level is promoted to `aal2`.
   */
  enroll(params: MFAEnrollTOTPParams): Promise<AuthMFAEnrollTOTPResponse>
  enroll(params: MFAEnrollPhoneParams): Promise<AuthMFAEnrollPhoneResponse>
  enroll(params: MFAEnrollParams): Promise<AuthMFAEnrollResponse>

  /**
   * Prepares a challenge used to verify that a user has access to a MFA
   * factor.
   */
  challenge(params: MFAChallengeTOTPParams): Promise<Prettify<AuthMFAChallengeTOTPResponse>>
  challenge(params: MFAChallengePhoneParams): Promise<Prettify<AuthMFAChallengePhoneResponse>>
  challenge(params: MFAChallengeParams): Promise<AuthMFAChallengeResponse>

  /**
   * Verifies a code against a challenge. The verification code is
   * provided by the user by entering a code seen in their authenticator app.
   */
  verify(params: MFAVerifyTOTPParams): Promise<AuthMFAVerifyResponse>
  verify(params: MFAVerifyPhoneParams): Promise<AuthMFAVerifyResponse>
  verify(params: MFAVerifyParams): Promise<AuthMFAVerifyResponse>

  /**
   * Unenroll removes a MFA factor.
   * A user has to have an `aal2` authenticator level in order to unenroll a `verified` factor.
   */
  unenroll(params: MFAUnenrollParams): Promise<AuthMFAUnenrollResponse>

  /**
   * Helper method which creates a challenge and immediately uses the given code to verify against it thereafter. The verification code is
   * provided by the user by entering a code seen in their authenticator app.
   */
  challengeAndVerify(params: MFAChallengeAndVerifyParams): Promise<AuthMFAVerifyResponse>

  /**
   * Returns the list of MFA factors enabled for this user.
   *
   * @see {@link MFAApi#enroll}
   * @see {@link MFAApi#getAuthenticatorAssuranceLevel}
   * @see {@link ApiClient#getUser}
   *
   */
  listFactors(): Promise<AuthMFAListFactorsResponse>

  /**
   * Returns the Authenticator Assurance Level (AAL) for the active session.
   *
   * - `aal1` (or `null`) means that the user's identity has been verified only
   * with a conventional login (email+password, OTP, magic link, social login,
   * etc.).
   * - `aal2` means that the user's identity has been verified both with a conventional login and at least one MFA factor.
   *
   * Although this method returns a promise, it's fairly quick (microseconds)
   * and rarely uses the network. You can use this to check whether the current
   * user needs to be shown a screen to verify their MFA factors.
   *
   */
  getAuthenticatorAssuranceLevel(): Promise<AuthMFAGetAuthenticatorAssuranceLevelResponse>
}
