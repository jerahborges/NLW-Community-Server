import { FastifyInstance } from 'fastify'
import { z } from 'zod'
import axios from 'axios'

export async function authRoutes(app: FastifyInstance) {
  app.post('/register', async (request) => {
    const bodySchema = z.object({
      code: z.string(),
    })

    const { code } = bodySchema.parse(request.body)

    const accessTokenResponse = await axios.post(
      'http://github.com/login/oauth/acess_token',
      null,
      {
        params: {
          client_id: process.env.GITHUB_CLIENT_ID as string,
          client_secret: process.env.GITHUB_CLIENT_SECRET as string,
          code,
        },
        headers: {
          Accept: 'application/json',
        },
      },
    )

    const { access_token } = accessTokenResponse.data

    return {
      access_token,
    }
  })
}
