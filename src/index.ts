import { serve } from '@hono/node-server'
import app from './http/app.ts'
import dotenv from 'dotenv'
dotenv.config()

const PORT: number = Number(process.env.PORT) ?? 4000
serve({
  fetch: app.fetch,
  port: PORT
})
console.log(`Server running on http://localhost:${PORT}`)
