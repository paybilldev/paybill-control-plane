'use client'

import { useSyncExternalStore } from 'react'
import type * as React from 'react'
import { API_VERSION_HEADER_NAME, BASE64URL_REGEX } from './constants'
import { JwtHeader, JwtPayload, SupportedStorage, Uint8Array_ } from './@types'
import { AuthInvalidJwtError } from './errors'
import { base64UrlToUint8Array, stringFromBase64URL } from './base64url'
import { User } from 'platform-api-types'

export const detectBrowser = () => {
  if (!navigator) return undefined

  if (navigator.userAgent.indexOf('Chrome') !== -1) {
    return 'Chrome'
  } else if (navigator.userAgent.indexOf('Firefox') !== -1) {
    return 'Firefox'
  } else if (navigator.userAgent.indexOf('Safari') !== -1) {
    return 'Safari'
  }
}

export const isBrowser = typeof window !== 'undefined'

const prefersReducedMotionMediaQuery =
  isBrowser && window.matchMedia('(prefers-reduced-motion: reduce)')

/**
 * @returns boolean value If the user has expressed their preference for reduced motion.
 */
export const useReducedMotion = (): boolean => {
  if (!prefersReducedMotionMediaQuery) return false
  return useSyncExternalStore(
    (callback) => {
      prefersReducedMotionMediaQuery.addEventListener('change', callback)
      return () => {
        prefersReducedMotionMediaQuery.removeEventListener('change', callback)
      }
    },
    () => prefersReducedMotionMediaQuery.matches,
    () => false
  )
}

export function ensurePlatformSuffix(apiUrl: string) {
  return apiUrl.endsWith('/platform') ? apiUrl : `${apiUrl}/platform`
}

export function mergeRefs<T>(...refs: React.Ref<T>[]): React.RefCallback<T> {
  return (value) => {
    refs.forEach((ref) => {
      if (typeof ref === 'function') {
        ref(value)
      } else if (ref !== null) {
        if (typeof ref === 'object' && ref !== null && 'current' in ref) {
          ;(ref as any).current = value
        }
      }
    })
  }
}

const localStorageWriteTests = {
  tested: false,
  writable: false,
}

export const supportsLocalStorage = () => {
  if (!isBrowser) {
    return false
  }

  try {
    if (typeof globalThis.localStorage !== 'object') {
      return false
    }
  } catch (e) {
    // DOM exception when accessing `localStorage`
    return false
  }

  if (localStorageWriteTests.tested) {
    return localStorageWriteTests.writable
  }

  const randomKey = `lswt-${Math.random()}${Math.random()}`

  try {
    globalThis.localStorage.setItem(randomKey, randomKey)
    globalThis.localStorage.removeItem(randomKey)

    localStorageWriteTests.tested = true
    localStorageWriteTests.writable = true
  } catch (e) {
    // localStorage can't be written to
    // https://www.chromium.org/for-testers/bug-reporting-guidelines/uncaught-securityerror-failed-to-read-the-localstorage-property-from-window-access-is-denied-for-this-document

    localStorageWriteTests.tested = true
    localStorageWriteTests.writable = false
  }

  return localStorageWriteTests.writable
}

/** Parses the API version which is 2YYY-MM-DD. */
const API_VERSION_REGEX = /^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i

export const parseResponseAPIVersion = (response: Response) => {
  const apiVersion = response.headers.get(API_VERSION_HEADER_NAME)

  if (!apiVersion) {
    return null
  }

  if (!apiVersion.match(API_VERSION_REGEX)) {
    return null
  }

  try {
    const date = new Date(`${apiVersion}T00:00:00.0Z`)
    return date
  } catch (e: any) {
    return null
  }
}

export function expiresAt(expiresIn: number) {
  const timeNow = Math.round(Date.now() / 1000)
  return timeNow + expiresIn
}

export const removeItemAsync = async (storage: SupportedStorage, key: string): Promise<void> => {
  await storage.removeItem(key)
}

export const setItemAsync = async (
  storage: SupportedStorage,
  key: string,
  data: any
): Promise<void> => {
  await storage.setItem(key, JSON.stringify(data))
}

/**
 * Deep clones a JSON-serializable object using JSON.parse(JSON.stringify(obj)).
 * Note: Only works for JSON-safe data.
 */
export function deepClone<T>(obj: T): T {
  return JSON.parse(JSON.stringify(obj))
}

export function decodeJWT(token: string): {
  header: JwtHeader
  payload: JwtPayload
  signature: Uint8Array_
  raw: {
    header: string
    payload: string
  }
} {
  const parts = token.split('.')

  if (parts.length !== 3) {
    throw new AuthInvalidJwtError('Invalid JWT structure')
  }

  // Regex checks for base64url format
  for (let i = 0; i < parts.length; i++) {
    if (!BASE64URL_REGEX.test(parts[i] as string)) {
      throw new AuthInvalidJwtError('JWT not in base64url format')
    }
  }
  const data = {
    // using base64url lib
    header: JSON.parse(stringFromBase64URL(parts[0])),
    payload: JSON.parse(stringFromBase64URL(parts[1])),
    signature: base64UrlToUint8Array(parts[2]),
    raw: {
      header: parts[0],
      payload: parts[1],
    },
  }
  return data
}

/**
 * Returns a localStorage-like object that stores the key-value pairs in
 * memory.
 */
export function memoryLocalStorageAdapter(store: { [key: string]: string } = {}): SupportedStorage {
  return {
    getItem: (key) => {
      return store[key] || null
    },

    setItem: (key, value) => {
      store[key] = value
    },

    removeItem: (key) => {
      delete store[key]
    },
  }
}

export function generateCallbackId(): symbol {
  return Symbol('auth-callback')
}

function dec2hex(dec: number) {
  return ('0' + dec.toString(16)).substr(-2)
}

export function generatePKCEVerifier() {
  const verifierLength = 56
  const array = new Uint32Array(verifierLength)
  if (typeof crypto === 'undefined') {
    const charSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~'
    const charSetLen = charSet.length
    let verifier = ''
    for (let i = 0; i < verifierLength; i++) {
      verifier += charSet.charAt(Math.floor(Math.random() * charSetLen))
    }
    return verifier
  }
  crypto.getRandomValues(array)
  return Array.from(array, dec2hex).join('')
}

async function sha256(randomString: string) {
  const encoder = new TextEncoder()
  const encodedData = encoder.encode(randomString)
  const hash = await crypto.subtle.digest('SHA-256', encodedData)
  const bytes = new Uint8Array(hash)

  return Array.from(bytes)
    .map((c) => String.fromCharCode(c))
    .join('')
}

export async function generatePKCEChallenge(verifier: string) {
  const hashed = await sha256(verifier)
  return btoa(hashed).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')
}

export async function getCodeChallengeAndMethod(
  storage: SupportedStorage,
  storageKey: string,
  isPasswordRecovery = false
) {
  const codeVerifier = generatePKCEVerifier()
  let storedCodeVerifier = codeVerifier
  if (isPasswordRecovery) {
    storedCodeVerifier += '/PASSWORD_RECOVERY'
  }
  await setItemAsync(storage, `${storageKey}-code-verifier`, storedCodeVerifier)
  const codeChallenge = await generatePKCEChallenge(codeVerifier)
  const codeChallengeMethod = codeVerifier === codeChallenge ? 'plain' : 's256'
  return [codeChallenge, codeChallengeMethod]
}

export const getItemAsync = async (storage: SupportedStorage, key: string): Promise<unknown> => {
  const value = await storage.getItem(key)

  if (!value) {
    return null
  }

  try {
    return JSON.parse(value)
  } catch {
    return value
  }
}

export function userNotAvailableProxy(): User {
  const proxyTarget = {} as User

  return new Proxy(proxyTarget, {
    get: (target: any, prop: string) => {
      if (prop === '__isUserNotAvailableProxy') {
        return true
      }
      // Preventative check for common problematic symbols during cloning/inspection
      // These symbols might be accessed by structuredClone or other internal mechanisms.
      if (typeof prop === 'symbol') {
        const sProp = (prop as symbol).toString()
        if (
          sProp === 'Symbol(Symbol.toPrimitive)' ||
          sProp === 'Symbol(Symbol.toStringTag)' ||
          sProp === 'Symbol(util.inspect.custom)'
        ) {
          // Node.js util.inspect
          return undefined
        }
      }
      throw new Error(
        `auth: client was created with userStorage option and there was no user stored in the user storage. Accessing the "${prop}" property of the session object is not supported. Please use getUser() instead.`
      )
    },
    set: (_target: any, prop: string) => {
      throw new Error(
        `auth: client was created with userStorage option and there was no user stored in the user storage. Setting the "${prop}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`
      )
    },
    deleteProperty: (_target: any, prop: string) => {
      throw new Error(
        `auth: client was created with userStorage option and there was no user stored in the user storage. Deleting the "${prop}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`
      )
    },
  })
}

/**
 * Converts the provided async function into a retryable function. Each result
 * or thrown error is sent to the isRetryable function which should return true
 * if the function should run again.
 */
export function retryable<T>(
  fn: (attempt: number) => Promise<T>,
  isRetryable: (attempt: number, error: any | null, result?: T) => boolean
): Promise<T> {
  const promise = new Promise<T>((accept, reject) => {
    // eslint-disable-next-line @typescript-eslint/no-extra-semi
    ;(async () => {
      for (let attempt = 0; attempt < Infinity; attempt++) {
        try {
          const result = await fn(attempt)

          if (!isRetryable(attempt, null, result)) {
            accept(result)
            return
          }
        } catch (e: any) {
          if (!isRetryable(attempt, e)) {
            reject(e)
            return
          }
        }
      }
    })()
  })

  return promise
}

/**
 * Creates a promise that resolves to null after some time.
 */
export async function sleep(time: number): Promise<null> {
  return await new Promise((accept) => {
    setTimeout(() => accept(null), time)
  })
}

/**
 * Extracts parameters encoded in the URL both in the query and fragment.
 */
export function parseParametersFromURL(href: string) {
  const result: { [parameter: string]: string } = {}

  const url = new URL(href)

  if (url.hash && url.hash[0] === '#') {
    try {
      const hashSearchParams = new URLSearchParams(url.hash.substring(1))
      hashSearchParams.forEach((value, key) => {
        result[key] = value
      })
    } catch (e: any) {
      // hash is not a query string
    }
  }

  // search parameters take precedence over hash parameters
  url.searchParams.forEach((value, key) => {
    result[key] = value
  })

  return result
}

/**
 * Creates a proxy around a user object that warns when properties are accessed on the server.
 * This is used to alert developers that using user data from getSession() on the server is insecure.
 *
 * @param user The actual user object to wrap
 * @param suppressWarningRef An object with a 'value' property that controls warning suppression
 * @returns A proxied user object that warns on property access
 */
export function insecureUserWarningProxy(user: User, suppressWarningRef: { value: boolean }): User {
  return new Proxy(user, {
    get: (target: any, prop: string | symbol, receiver: any) => {
      // Allow internal checks without warning
      if (prop === '__isInsecureUserWarningProxy') {
        return true
      }

      // Preventative check for common problematic symbols during cloning/inspection
      // These symbols might be accessed by structuredClone or other internal mechanisms
      if (typeof prop === 'symbol') {
        const sProp = prop.toString()
        if (
          sProp === 'Symbol(Symbol.toPrimitive)' ||
          sProp === 'Symbol(Symbol.toStringTag)' ||
          sProp === 'Symbol(util.inspect.custom)' ||
          sProp === 'Symbol(nodejs.util.inspect.custom)'
        ) {
          // Return the actual value for these symbols to allow proper inspection
          return Reflect.get(target, prop, receiver)
        }
      }

      // Emit warning on first property access
      if (!suppressWarningRef.value && typeof prop === 'string') {
        console.warn(
          'Using the user object as returned from paybill.auth.getSession() or from some paybill.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and may not be authentic. Use paybill.auth.getUser() instead which authenticates the data by contacting the Auth server.'
        )
        suppressWarningRef.value = true
      }

      return Reflect.get(target, prop, receiver)
    },
  })
}
