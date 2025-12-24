import type { FastifyPluginAsync } from 'fastify'

import authRoutes from './auth.js'
import cliRoutes from './cli.js'
import databaseRoutes from './database.js'
import feedbackRoutes from './feedback.js'
import integrationsRoutes from './integrations.js'
import notificationsRoutes from './notifications.js'
import oauthRoutes from './oauth.js'
import organizationRoutes from './organizations.js'
import profileRoutes from './profile.js'
import projectRoutes from './projects.js'
import workflowRunsRoutes from './workflow-runs.js'
import stripeRoutes from './stripe.js'
import telemetryRoutes from './telemetry.js'
import storageRoutes from './storage.js'
import statusRoutes from './status.js'
import replicationRoutes from './replication.js'

const platformRoutes: FastifyPluginAsync = async (app) => {
  app.register(authRoutes, { prefix: '/auth' })
  app.register(cliRoutes, { prefix: '/cli' })
  app.register(databaseRoutes, { prefix: '/database' })
  app.register(feedbackRoutes, { prefix: '/feedback' })
  app.register(integrationsRoutes, { prefix: '/integrations' })
  app.register(notificationsRoutes, { prefix: '/notifications' })
  app.register(oauthRoutes, { prefix: '/oauth' })
  app.register(organizationRoutes, { prefix: '/organizations' })
  app.register(profileRoutes, { prefix: '/profile' })
  app.register(projectRoutes, { prefix: '/projects' })
  app.register(workflowRunsRoutes, { prefix: '/workflow-runs' })
  app.register(stripeRoutes, { prefix: '/stripe' })
  app.register(telemetryRoutes, { prefix: '/telemetry' })
  app.register(storageRoutes, { prefix: '/storage' })
  app.register(replicationRoutes, { prefix: '/replication' })
  app.register(statusRoutes, { prefix: '/status' })
}

export default platformRoutes
