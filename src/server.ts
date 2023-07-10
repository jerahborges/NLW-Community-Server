import fastify from 'fastify'
import Cors from '@fastify/cors'
import { memoriesRoutes } from './routes/memories'
import { authRoutes } from './routes/auth'

const app = fastify()

app.register(Cors, {
  origin: 'http://localhost:3333',
})

app.register(authRoutes)
app.register(memoriesRoutes)

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('🐱‍🏍 HTTP server running on http://localhost:3333')
  })
