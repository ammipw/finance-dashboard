import { database as db } from "@/utils/data"

/**
 * Handles GET requests for a specific transaction of a user's account.
 * @param _req The incoming request object.
 * @param params The route parameters containing userId, accountId, and transactionId.
 * @returns A Response object with the transaction details or an error message.
 */
export async function GET(_req: Request, { params }: { params: { userId: string, accountId: string, transactionId: string } }) {
  const { userId, accountId, transactionId } = await params
  
  const user = db.users.find(user => user.id === userId)
  if (!user) {
    return new Response(
      JSON.stringify({ message: "User not found" }),
      { status: 404 }
    )
  }

  const account = user.accounts.find(account => account.id === accountId)
  if (!account) {
    return new Response(
      JSON.stringify({ message: "Account not found" }),
      { status: 404 }
    )
  }

  const transaction = account.transactions.find(tx => tx.id === transactionId)
  if (!transaction) {
    return new Response(
      JSON.stringify({ message: "Transaction not found" }),
      { status: 404 }
    )
  }

  return new Response(
    JSON.stringify({ transaction }),
    { status: 200 }
  )
}
