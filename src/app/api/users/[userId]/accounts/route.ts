import { database as db } from "@/utils/data"

/**
 * Handles GET requests for all accounts of a specific user.
 * @param _req The incoming request object.
 * @param params The route parameters containing userId.
 * @returns A Response object with the list of accounts or an error message.
 */
export async function GET(_req: Request, { params }: { params: { userId: string } }) {
  const { userId } = await params
  
  const user = db.users.find(user => user.id === userId)
  if (!user) {
    return new Response(
      JSON.stringify({ message: "User not found" }),
      { status: 404 }
    )
  }
  
  const accounts = user.accounts.map(account => ({
    id: account.id,
    type: account.type,
    accountNumber: account.accountNumber,
    currency: account.currency,
    balance: account.balance,
  }))

  return new Response(
    JSON.stringify({ accounts }),
    { status: 200 }
  )
}