import { database as db } from "@/utils/data"

/**
 * Handles GET requests for all transactions of a specific account of a user.
 * @param _req The incoming request object.
 * @param params The route parameters containing userId and accountId.
 * @returns A Response object with the list of transactions or an error message.
 */
export async function GET(_req: Request, { params }: { params: { userId: string, accountId: string } }) {
  const { userId, accountId } = await params

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

  const accountSummary = {
    id: account.id,
    type: account.type,
    accountNumber: account.accountNumber,
    currency: account.currency,
    balance: account.balance,
  }

  return new Response(
    JSON.stringify(accountSummary),
    { status: 200 }
  )
}
