import {
  createParser,
  createSerializer,
  type inferParserType,
  parseAsString,
  type UseQueryStatesKeysMap,
} from 'nuqs'
// End of third-party imports

import { CATEGORY_OPTIONS } from './Support.constants'

const categoryOptionsLower = CATEGORY_OPTIONS.map((option) => option.value.toLowerCase())
const parseAsCategoryOption = createParser({
  parse(queryValue) {
    const lowerValue = queryValue.toLowerCase()
    const matchingIndex = categoryOptionsLower.indexOf(lowerValue)
    return matchingIndex !== -1 ? CATEGORY_OPTIONS[matchingIndex].value : null
  },
  serialize(value) {
    return value ?? null
  },
})

const supportFormUrlState = {
  projectRef: parseAsString.withDefault(''),
  orgSlug: parseAsString.withDefault(''),
  category: parseAsCategoryOption,
  subject: parseAsString.withDefault(''),
  message: parseAsString.withDefault(''),
  error: parseAsString,
  /** Sentry event ID */
  sid: parseAsString,
} satisfies UseQueryStatesKeysMap
export type SupportFormUrlKeys = inferParserType<typeof supportFormUrlState>

const serializeSupportFormInitialParams = createSerializer(supportFormUrlState)

export function createSupportFormUrl(initialParams: Partial<SupportFormUrlKeys>) {
  const serializedParams = serializeSupportFormInitialParams(initialParams)
  return `/support/new${serializedParams ?? ''}`
}
