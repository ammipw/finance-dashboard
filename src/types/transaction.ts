export type Transaction = {
  id: string
  date: string
  description?: string
  amount: number
  type: "credit" | "debit"
  category?: string
  paymentMethod: string
}