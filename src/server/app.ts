import { Hono } from 'hono'
import { showRoutes } from 'hono/dev'
import users from '../user/infra/routes.ts'

const app = new Hono().basePath('/api/v1')

app.get('/', c => c.text('Hello World!'))
app.route('/users', users)

showRoutes(app)
export default app
