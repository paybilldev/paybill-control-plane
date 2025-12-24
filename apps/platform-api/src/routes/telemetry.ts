import type { FastifyPluginAsync } from 'fastify'
import {
  TelemetryCallFeatureFlagsResponse,
  TelemetryEventBody,
  TelemetryFeatureFlagBody,
  TelemetryGroupsIdentityBody,
  TelemetryGroupsResetBody,
  TelemetryIdentifyBody,
} from '../openapi/index.js'

async function sendServerEvent(body: TelemetryEventBody): Promise<void> {
  // Send event to analytics provider (PostHog, Segment, etc.)
}

async function callFeatureFlags(): Promise<TelemetryCallFeatureFlagsResponse> {
  // Fetch flags from PostHog, LaunchDarkly, etc.
  return {} as TelemetryCallFeatureFlagsResponse
}

async function trackFeatureFlag(body: TelemetryFeatureFlagBody): Promise<void> {
  // Send flag usage event to analytics provider
}

async function trackGroupIdentify(body: TelemetryGroupsIdentityBody): Promise<void> {
  // Identify organization/project group in analytics provider
}
async function trackGroupReset(body: TelemetryGroupsResetBody): Promise<void> {
  // Reset group state in analytics provider
}
async function trackIdentifyEvent(body: TelemetryIdentifyBody): Promise<void> {
  // Forward to analytics provider (PostHog, Segment, Rudder, etc.)
}

async function resetTelemetry(): Promise<void> {
  // perform telemetry reset
}

const telemetryRoutes: FastifyPluginAsync = async (app) => {
  app.post<{
    Body: TelemetryEventBody
  }>(
    '/event',
    {
      schema: {
        description: 'Sends analytics server event',
        tags: ['Telemetry'],
        body: { $ref: 'TelemetryEventBody' },
        operationId: 'TelemetryEventController_sendServerEvent',
        response: {
          201: {
            description: 'Analytics server event sent',
          },
          500: {
            description: 'Failed to send analytics server event',
            type: 'null',
          },
        },
      },
    },
    async (request, reply) => {
      await sendServerEvent(request.body)
      return reply.status(201).send()
    }
  )

  app.get<{}>(
    '/feature-flags',
    {
      schema: {
        description: 'Call feature flags',
        tags: ['Telemetry'],
        operationId: 'TelemetryFeatureFlagsController_callFeatureFlag',
        response: {
          200: {
            description: 'Feature flags called',
            $ref: 'TelemetryCallFeatureFlagsResponse',
          },
          500: {
            description: 'Failed to call feature flags',
            type: 'null',
          },
        },
      },
    },
    async (_request, reply) => {
      const flags = await callFeatureFlags()
      return reply.status(200).send(flags)
    }
  )

  app.post<{
    Body: TelemetryFeatureFlagBody
  }>(
    '/feature-flags/track',
    {
      schema: {
        description: 'Track feature flag called',
        tags: ['Telemetry'],
        operationId: 'TelemetryFeatureFlagsController_trackFeatureFlag',
        body: { $ref: 'TelemetryFeatureFlagBody' },
        response: {
          201: { description: 'Feature flag tracked' },
          500: {
            description: 'Failed to track feature flag called',
            type: 'null',
          },
        },
      },
    },
    async (request, reply) => {
      await trackFeatureFlag(request.body)
      return reply.status(201).send()
    }
  )

  app.post<{
    Body: TelemetryGroupsIdentityBody
  }>(
    '/groups/identify',
    {
      schema: {
        description: 'Send analytics group identify event',
        tags: ['Telemetry'],
        operationId: 'TelemetryIdentifyController_identify',
        body: { $ref: 'TelemetryGroupsIdentityBody' },
        response: {
          201: { description: 'Group identify event sent' },
          500: {
            description: 'Failed to send analytics group identify event',
            type: 'null',
          },
        },
      },
    },
    async (request, reply) => {
      await trackGroupIdentify(request.body)
      return reply.status(201).send()
    }
  )

  app.post<{
    Body: TelemetryGroupsResetBody
  }>(
    '/groups/reset',
    {
      schema: {
        description: 'Send analytics group reset event',
        tags: ['Telemetry'],
        operationId: 'TelemetryGroupsController_groupReset',
        body: { $ref: 'TelemetryGroupsResetBody' },
        response: {
          201: { description: 'Group reset event sent' },
          500: {
            description: 'Failed to send analytics group reset event',
            type: 'null',
          },
        },
      },
    },
    async (request, reply) => {
      await trackGroupReset(request.body)
      return reply.status(201).send()
    }
  )

  app.post<{
    Body: TelemetryIdentifyBody
  }>(
    '/identify',
    {
      schema: {
        description: 'Send analytics identify event',
        tags: ['Telemetry'],
        operationId: 'TelemetryIdentifyController_identify',
        body: { $ref: 'TelemetryIdentifyBody' },
        response: {
          201: { description: 'Identify event sent' },
          500: {
            description: 'Failed to send analytics identify event',
            type: 'null',
          },
        },
      },
    },
    async (request, reply) => {
      await trackIdentifyEvent(request.body)
      return reply.status(201).send()
    }
  )

  app.post(
    '/reset',
    {
      schema: {
        description: 'Reset analytics',
        tags: ['Telemetry'],
        operationId: 'TelemetryResetController_reset',
        response: {
          201: {
            description: 'Analytics reset successfully',
            type: 'null',
          },
          500: {
            description: 'Failed to reset analytics',
            type: 'null',
          },
        },
      },
    },
    async (_request, reply) => {
      await resetTelemetry()
      return reply.status(201).send()
    }
  )
}

export default telemetryRoutes
