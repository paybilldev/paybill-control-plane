import cors from '@fastify/cors'
import Fastify from 'fastify'
import platformRoutes from './routes/platform.js'
import { registerOpenAPI } from './openapi/plugin.js'

const server = Fastify({
  logger: {
    level: process.env.LOG_LEVEL ?? 'info',
  },
})

await registerOpenAPI(server, {
  title: 'Platform API',
  version: '1.0.0',
  description: 'This is a Paybill API for the Platform.',
})

const port = Number.parseInt(process.env.PORT ?? '4000', 10)
const host = process.env.HOST ?? '0.0.0.0'

async function start() {
  try {
    await server.register(cors, {
      origin: true,
      credentials: true,
    })

    await server.register(
      async (instance) => {
        await instance.register(platformRoutes)
      },
      { prefix: '/platform' }
    )

    await server.listen({ port, host })

    server.log.info(`Platform API listening on http://${host}:${port}`)
  } catch (err) {
    server.log.error(err)
    process.exit(1)
  }
}

void start()

export type { FastifyInstance } from 'fastify'
export default server
