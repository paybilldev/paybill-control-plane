export const DEFAULT_FALLBACK_PATH = '/org'

export const validateReturnTo = (
  returnTo: string,
  fallback: string = DEFAULT_FALLBACK_PATH
): string => {
  // Block protocol-relative URLs and external URLs
  if (returnTo.startsWith('//') || returnTo.includes('://')) {
    return fallback
  }

  // For internal paths:
  // 1. Must start with /
  // 2. Only allow alphanumeric chars, slashes, hyphens, underscores
  // 3. For query params, also allow =, &, and ?
  const safePathPattern = /^\/[a-zA-Z0-9/\-_]*(?:\?[a-zA-Z0-9\-_=&]*)?$/
  return safePathPattern.test(returnTo) ? returnTo : fallback
}
/**
 * Transfers the search params from the current location path to a newly built path
 */
export const buildPathWithParams = (pathname: string) => {
  const [basePath, existingParams] = pathname.split('?', 2)

  const pathnameSearchParams = new URLSearchParams(existingParams || '')

  // Merge the parameters, with pathname parameters taking precedence
  // over the current location's search parameters
  const mergedParams = new URLSearchParams(location.search)
  for (const [key, value] of pathnameSearchParams.entries()) {
    mergedParams.set(key, value)
  }

  const queryString = mergedParams.toString()
  return queryString ? `${basePath}?${queryString}` : basePath
}

export const getReturnToPath = (fallback = DEFAULT_FALLBACK_PATH) => {
  // If we're in a server environment, return the fallback
  if (typeof location === 'undefined') {
    return fallback
  }

  const searchParams = new URLSearchParams(location.search)

  let returnTo = searchParams.get('returnTo') ?? fallback

  if (process.env.NEXT_PUBLIC_BASE_PATH) {
    returnTo = returnTo.replace(process.env.NEXT_PUBLIC_BASE_PATH, '')
  }

  searchParams.delete('returnTo')

  const remainingSearchParams = searchParams.toString()
  const validReturnTo = validateReturnTo(returnTo, fallback)

  const [path, existingQuery] = validReturnTo.split('?')

  const finalSearchParams = new URLSearchParams(existingQuery || '')

  // Add all remaining search params to the final search params
  if (remainingSearchParams) {
    const remainingParams = new URLSearchParams(remainingSearchParams)
    remainingParams.forEach((value, key) => {
      finalSearchParams.append(key, value)
    })
  }

  const finalQuery = finalSearchParams.toString()
  return path + (finalQuery ? `?${finalQuery}` : '')
}
