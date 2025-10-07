import { Transaction } from "./transaction"

export type Account = {
  id: string
  type: string
  accountNumber: string
  currency: string
  balance: number
  transactions: Transaction[]
}