import { Hono } from 'hono'
import { getUser } from '../app/getUser.ts'
import { getUsers } from '../app/getUsers.ts'
import { UserRepositoryImpl } from './UserRepositoryImp.ts'

const users = new Hono()
const userRepository = UserRepositoryImpl

users.get('/', async c => {
  const users = await getUsers(userRepository)()
  return c.json(users)
})

users.get('/:id', async c => {
  const user = await getUser(userRepository)(c.req.param('id'))
  return c.json({ user })
})

export default users
