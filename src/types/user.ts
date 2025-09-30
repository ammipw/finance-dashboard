export type User = {
  id: string
  name: string
  email: string
  accounts?: {
    id: string
    type: string
    accountNumber: string
    currency: string
    balance: number
  }[]
}