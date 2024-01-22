import { User } from './User'

export interface UserRepository {
  getUser: (id: string) => Promise<User | null>
  getUsers: () => Promise<User[]>
}
