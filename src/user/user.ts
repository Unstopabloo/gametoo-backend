export type User = {
  id: string
  username: string
  avatar: string
  email: string
  description: string
  star: number
  verified: boolean
  transactions_quantity: number
  isAllowed: boolean
  created_timestamp: string
}

export type Response = {
  users: User[]
}
