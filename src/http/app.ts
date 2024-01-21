import { Hono } from 'hono'
import { showRoutes } from 'hono/dev'
import users from '../user/app.ts'

const app = new Hono().basePath('/api/v1')

app.route('/users', users)

showRoutes(app)
export default app
