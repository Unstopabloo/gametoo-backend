import { Hono } from 'hono'
import sql from '../db/connection.ts'
import { Response, User } from './user'

const users = new Hono()

const getUser = async (id: string): Promise<User> => {
  const result = await sql`SELECT * FROM users WHERE id = ${id}`
  const user = result[0] as User
  return user
}

const getUsers = async (): Promise<Response> => {
  const result: User[] = await sql`SELECT * FROM users`
  return { users: result }
}

users.get('/', async c => {
  const users = await getUsers()
  return c.json(users)
})

users.get('/:id', async c => {
  const user = await getUser(c.req.param('id'))
  return c.json({ user })
})

export default users
