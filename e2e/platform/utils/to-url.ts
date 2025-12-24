import { env } from '../env.config'

export function toUrl(path: `/${string}`) {
  return `${env.PLATFORM_URL}${path}`
}
