import { FactorType, Prettify, Provider } from '../response'

export type SignInWithPasswordlessCredentials =
  | {
      /** The user's email address. */
      email: string
      options?: {
        /** The redirect url embedded in the email link */
        emailRedirectTo?: string
        /** If set to false, this method will not create a new user. Defaults to true. */
        shouldCreateUser?: boolean
        /**
         * A custom data object to store the user's metadata. This maps to the `auth.users.raw_user_meta_data` column.
         *
         * The `data` should be a JSON object that includes user-specific info, such as their first and last name.
         */
        data?: object
        /** Verification token received when the user completes the captcha on the site. */
        captchaToken?: string
      }
    }
  | {
      /** The user's phone number. */
      phone: string
      options?: {
        /** If set to false, this method will not create a new user. Defaults to true. */
        shouldCreateUser?: boolean
        /**
         * A custom data object to store the user's metadata. This maps to the `auth.users.raw_user_meta_data` column.
         *
         * The `data` should be a JSON object that includes user-specific info, such as their first and last name.
         */
        data?: object
        /** Verification token received when the user completes the captcha on the site. */
        captchaToken?: string
        /** Messaging channel to use (e.g. whatsapp or sms) */
        channel?: 'sms' | 'whatsapp'
      }
    }

export type SignInWithIdTokenCredentials = {
  /** Provider name or OIDC `iss` value identifying which provider should be used to verify the provided token. Supported names: `google`, `apple`, `azure`, `facebook`, `kakao`, `keycloak` (deprecated). */
  provider: 'google' | 'apple' | 'azure' | 'facebook' | 'kakao' | (string & {})
  /** OIDC ID token issued by the specified provider. The `iss` claim in the ID token must match the supplied provider. Some ID tokens contain an `at_hash` which require that you provide an `access_token` value to be accepted properly. If the token contains a `nonce` claim you must supply the nonce used to obtain the ID token. */
  token: string
  /** If the ID token contains an `at_hash` claim, then the hash of this value is compared to the value in the ID token. */
  access_token?: string
  /** If the ID token contains a `nonce` claim, then the hash of this value is compared to the value in the ID token. */
  nonce?: string
  options?: {
    /** Verification token received when the user completes the captcha on the site. */
    captchaToken?: string
  }
}

export type TelemetryFeatureFlagBody = {
  feature_flag_name: string
  feature_flag_value?: unknown
}

export type TelemetryPageBody = {
  feature_flags?: {
    [key: string]: unknown
  }
  groups?: {
    organization?: string
    project?: string
  }
  page_title: string
  page_url: string
  pathname: string
  ph: {
    language: string
    referrer: string
    search: string
    user_agent: string
    viewport_height: number
    viewport_width: number
  }
}

export type TelemetryEventBody = {
  action: string
  custom_properties: {
    [key: string]: unknown
  }
  groups?: {
    organization?: string
    project?: string
  }
  page_title: string
  page_url: string
  pathname: string
  ph: {
    language: string
    referrer: string
    search: string
    user_agent: string
    viewport_height: number
    viewport_width: number
  }
}

export type TelemetryIdentifyBody = {
  organization_slug?: string
  project_ref?: string
  user_id: string
}

export type MobileOtpType = 'sms' | 'phone_change'
export type EmailOtpType = 'signup' | 'invite' | 'magiclink' | 'recovery' | 'email_change' | 'email'

export interface VerifyTokenHashParams {
  /** The token hash used in an email link */
  token_hash: string

  /** The user's verification type. */
  type: EmailOtpType
}

export interface VerifyEmailOtpParams {
  /** The user's email address. */
  email: string
  /** The otp sent to the user's email address. */
  token: string
  /** The user's verification type. */
  type: EmailOtpType
  options?: {
    /** A URL to send the user to after they are confirmed. */
    redirectTo?: string
    captchaToken?: string
  }
}

export interface VerifyMobileOtpParams {
  /** The user's phone number. */
  phone: string
  /** The otp sent to the user's phone number. */
  token: string
  /** The user's verification type. */
  type: MobileOtpType
  options?: {
    /** A URL to send the user to after they are confirmed. */
    redirectTo?: string
    captchaToken?: string
  }
}

export type VerifyOtpParams = VerifyMobileOtpParams | VerifyEmailOtpParams | VerifyTokenHashParams

export type SignInWithSSO =
  | {
      /** UUID of the SSO provider to invoke single-sign on to. */
      providerId: string

      options?: {
        /** A URL to send the user to after they have signed-in. */
        redirectTo?: string
        /** Verification token received when the user completes the captcha on the site. */
        captchaToken?: string
        /**
         * If set to true, the redirect will not happen on the client side.
         * This parameter is used when you wish to handle the redirect yourself.
         * Defaults to false.
         */
        skipBrowserRedirect?: boolean
      }
    }
  | {
      /** Domain name of the organization for which to invoke single-sign on. */
      domain: string

      options?: {
        /** A URL to send the user to after they have signed-in. */
        redirectTo?: string
        /** Verification token received when the user completes the captcha on the site. */
        captchaToken?: string
        /**
         * If set to true, the redirect will not happen on the client side.
         * This parameter is used when you wish to handle the redirect yourself.
         * Defaults to false.
         */
        skipBrowserRedirect?: boolean
      }
    }

export type ResendParams =
  | {
      type: Extract<EmailOtpType, 'signup' | 'email_change'>
      email: string
      options?: {
        /** A URL to send the user to after they have signed-in. */
        emailRedirectTo?: string
        /** Verification token received when the user completes the captcha on the site. */
        captchaToken?: string
      }
    }
  | {
      type: Extract<MobileOtpType, 'sms' | 'phone_change'>
      phone: string
      options?: {
        /** Verification token received when the user completes the captcha on the site. */
        captchaToken?: string
      }
    }

export type SignInWithOAuthCredentials = {
  /** One of the providers supported by Auth. */
  provider: Provider
  options?: {
    /** A URL to send the user to after they are confirmed. */
    redirectTo?: string
    /** A space-separated list of scopes granted to the OAuth application. */
    scopes?: string
    /** An object of query params */
    queryParams?: { [key: string]: string }
    /** If set to true does not immediately redirect the current browser context to visit the OAuth authorization page for the provider. */
    skipBrowserRedirect?: boolean
  }
}

type MFAVerifyTOTPParamFields = {
  /** Verification code provided by the user. */
  code: string
}

type MFAVerifyParamsBase = {
  /** ID of the factor being verified. Returned in enroll(). */
  factorId: string
  /** ID of the challenge being verified. Returned in challenge(). */
  challengeId: string
}

type MFAVerifyPhoneParamFields = MFAVerifyTOTPParamFields

export type MFAVerifyPhoneParams = Prettify<MFAVerifyParamsBase & MFAVerifyPhoneParamFields>

export type MFAVerifyTOTPParams = Prettify<MFAVerifyParamsBase & MFAVerifyTOTPParamFields>

export type MFAVerifyParams = MFAVerifyTOTPParams | MFAVerifyPhoneParams

type MFAChallengeParamsBase = {
  /** ID of the factor to be challenged. Returned in enroll(). */
  factorId: string
}

export type MFAChallengeTOTPParams = Prettify<MFAChallengeParamsBase>

const MFATOTPChannels = ['sms', 'whatsapp'] as const
export type MFATOTPChannel = (typeof MFATOTPChannels)[number]

type MFAChallengePhoneParamFields<Channel extends MFATOTPChannel = MFATOTPChannel> = {
  /** Messaging channel to use (e.g. whatsapp or sms). Only relevant for phone factors */
  channel: Channel
}

export type MFAChallengePhoneParams = Prettify<
  MFAChallengeParamsBase & MFAChallengePhoneParamFields
>

export type MFAChallengeParams = MFAChallengeTOTPParams | MFAChallengePhoneParams

type MFAChallengeAndVerifyTOTPParamFields = MFAVerifyTOTPParamFields

type MFAChallengeAndVerifyParamsBase = Omit<MFAVerifyParamsBase, 'challengeId'>

type MFAChallengeAndVerifyTOTPParams = Prettify<
  MFAChallengeAndVerifyParamsBase & MFAChallengeAndVerifyTOTPParamFields
>

export type MFAChallengeAndVerifyParams = MFAChallengeAndVerifyTOTPParams

type MFAEnrollTOTPParamFields = {
  /** Domain which the user is enrolled with. */
  issuer?: string
}

type MFAEnrollParamsBase<T extends FactorType> = {
  /** The type of factor being enrolled. */
  factorType: T
  /** Human readable name assigned to the factor. */
  friendlyName?: string
}

type MFAEnrollPhoneParamFields = {
  /** Phone number associated with a factor. Number should conform to E.164 format */
  phone: string
}

export type MFAEnrollPhoneParams = Prettify<
  MFAEnrollParamsBase<'phone'> & MFAEnrollPhoneParamFields
>

export type MFAEnrollTOTPParams = Prettify<MFAEnrollParamsBase<'totp'> & MFAEnrollTOTPParamFields>

export type MFAEnrollParams = MFAEnrollTOTPParams | MFAEnrollPhoneParams

export type MFAUnenrollParams = {
  /** ID of the factor being unenrolled. */
  factorId: string
}

type PasswordCredentialsBase =
  | { email: string; password: string }
  | { phone: string; password: string }

export type SignInWithPasswordCredentials = PasswordCredentialsBase & {
  options?: {
    captchaToken?: string
  }
}

export type SignOut = {
  /**
   * Determines which sessions should be
   * logged out. Global means all
   * sessions by this account. Local
   * means only this session. Others
   * means all other sessions except the
   * current one. When using others,
   * there is no sign-out event fired on
   * the current session!
   */
  scope?: 'global' | 'local' | 'others'
}

export type SignUpWithPasswordCredentials = Prettify<
  PasswordCredentialsBase & {
    options?: {
      emailRedirectTo?: string // only for email
      data?: object
      captchaToken?: string
      channel?: 'sms' | 'whatsapp' // only for phone
    }
  }
>

export type SignInAnonymouslyCredentials = {
  options?: {
    /**
     * A custom data object to store the user's metadata. This maps to the `auth.users.raw_user_meta_data` column.
     *
     * The `data` should be a JSON object that includes user-specific info, such as their first and last name.
     */
    data?: object
    /** Verification token received when the user completes the captcha on the site. */
    captchaToken?: string
  }
}
