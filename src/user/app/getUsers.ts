import { UserRepository } from 'user/domain/UserRepository'

export const getUsers = (userRepository: UserRepository) => async () => {
  return userRepository.getUsers()
}
