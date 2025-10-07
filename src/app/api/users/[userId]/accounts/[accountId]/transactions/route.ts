import { database as db } from "@/utils/data"
import { NextRequest } from "next/server"

/**
 * Handles GET requests for all transactions of a specific account of a user.
 * @param request The incoming request object.
 * @param params The route parameters containing userId and accountId.
 * @returns A Response object with the list of transactions or an error message.
 */
export async function GET(request: NextRequest, { params }: { params: { userId: string, accountId: string } }) {
  const { userId, accountId } = await params
  const searchParams = request.nextUrl.searchParams
  const { limit, offset, sort }: { limit?: number, offset?: number, sort?: "asc" | "desc" } = Object.fromEntries(searchParams.entries())

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

  let transactions = account.transactions
  if (sort) {
    transactions = transactions.sort((a, b) => {
      if (sort === "asc") {
        return a.date.localeCompare(b.date)
      } else {
        return b.date.localeCompare(a.date)
      }
    })
  }

  const limitVal = limit ? Math.max(1, Math.min(100, limit)) : 10
  const offsetVal = offset ? Math.max(0, offset) : 0
  const total = transactions.length
  const paginated = transactions.slice(offsetVal, offsetVal + limitVal)
  const hasNextPage = offsetVal + limitVal < total
  const hasPrevPage = offsetVal > 0

  const data = {
    transactions: paginated,
    total,
    limit: limitVal,
    offset: offsetVal,
    hasNextPage,
    hasPrevPage
  }

  return new Response(
    JSON.stringify(data),
    { status: 200 }
  )
}
