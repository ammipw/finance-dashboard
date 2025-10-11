import { Account } from "./account"

export type User = {
  id: string
  name: string
  email: string
  avatarUrl?: string
  accounts: Account[]
}