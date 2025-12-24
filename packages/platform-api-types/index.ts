export type { webhooks, $defs } from './types/platform'
import type {
  paths as platformPaths,
  components as platformComponents,
  operations as platformOperations,
} from './types/platform'

export interface paths extends platformPaths {}
export interface operations extends platformOperations {}
export interface components {
  schemas: platformComponents['schemas']
  responses: platformComponents['responses']
  parameters: platformComponents['parameters']
  requestBodies: platformComponents['requestBodies']
  headers: platformComponents['headers']
  pathItems: platformComponents['pathItems']
}
