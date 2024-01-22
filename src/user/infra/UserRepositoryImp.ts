import { User } from '../domain/User.ts'
import { UserRepository } from '../domain/UserRepository.ts'
import sql from '../../db/connection.ts'

const getUser: UserRepository['getUser'] = async id => {
  const result = await sql`SELECT * FROM users WHERE id = ${id}`
  const user = result[0] as User
  return user || null
}

const getUsers: UserRepository['getUsers'] = async () => {
  const result = await sql`SELECT * FROM users`
  return result as unknown as User[]
}

export const UserRepositoryImpl: UserRepository = {
  getUser,
  getUsers
}
