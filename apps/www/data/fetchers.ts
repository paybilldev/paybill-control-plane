import * as Sentry from '@sentry/nextjs'

export class ResponseError extends Error {
  code?: number
  requestId?: string
  retryAfter?: number
  requestPathname?: string

  constructor(
    message: string | undefined,
    code?: number,
    requestId?: string,
    retryAfter?: number,
    requestPathname?: string
  ) {
    super(message || 'API error happened while trying to communicate with the server.')
    this.code = code
    this.requestId = requestId
    this.retryAfter = retryAfter
    this.requestPathname = requestPathname
  }
}

type HandleErrorOptions = {
  alwaysCapture?: boolean
  sentryContext?: Parameters<typeof Sentry.captureException>[1]
}

export const handleError = (error: unknown, options: HandleErrorOptions = {}): never => {
  if (error && typeof error === 'object') {
    if (options.alwaysCapture) {
      Sentry.captureException(error, options.sentryContext)
    }
    const errorMessage =
      'msg' in error && typeof error.msg === 'string'
        ? error.msg
        : 'message' in error && typeof error.message === 'string'
          ? error.message
          : undefined

    const errorCode = 'code' in error && typeof error.code === 'number' ? error.code : undefined
    const requestId =
      'requestId' in error && typeof error.requestId === 'string' ? error.requestId : undefined
    const retryAfter =
      'retryAfter' in error && typeof error.retryAfter === 'number' ? error.retryAfter : undefined
    const requestPathname =
      'requestPathname' in error && typeof error.requestPathname === 'string'
        ? error.requestPathname
        : undefined

    if (errorMessage) {
      throw new ResponseError(errorMessage, errorCode, requestId, retryAfter, requestPathname)
    }
  }

  if (error !== null && typeof error === 'object' && 'stack' in error) {
    console.error(error.stack)
  }

  // the error doesn't have a message or msg property, so we can't throw it as an error. Log it via Sentry so that we can
  // add handling for it.
  Sentry.captureException(error, options.sentryContext)

  // throw a generic error if we don't know what the error is. The message is intentionally vague because it might show
  // up in the UI.
  throw new ResponseError(undefined)
}
