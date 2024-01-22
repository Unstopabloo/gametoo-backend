import { UserRepository } from 'user/domain/UserRepository'

export const getUser =
  (userRepository: UserRepository) => async (id: string) => {
    return userRepository.getUser(id)
  }
