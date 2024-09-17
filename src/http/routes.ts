import { register } from './controllers/register'
import { FastifyInstance } from 'fastify'

export async function appRoute(app: FastifyInstance) {
  app.post('/users', register)
}
