import { dataset as db } from "@/utils/data"

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const { id: uid } = await params
  const users = db.users
  const user = users.find(user => user.id === uid)

  if (!user) {
    return new Response(
      JSON.stringify({ message: "User not found" }),
      { status: 404 }
    )
  }

  const transactions = user.accounts.map(account => ({ accountId: account.id, transactions: account.transactions })) || []

  return new Response(
    JSON.stringify({ transactions }),
    { status: 200 }
  )
}
