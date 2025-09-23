import { dataset as db } from "@/utils/data"

export async function GET(request: Request, { params }: { params: { userId: string } }) {
  const { userId } = await params
  const users = db.users
  const user = users.find(user => user.id === userId)
  
  console.log("Requested user ID:", userId)
  
  if (!user) {
    return new Response(
      JSON.stringify({ message: "User not found" }),
      { status: 404 }
    )
  }
  
  const { id, name, email, accounts = [] } = user
  const accountSummaries = accounts.map(account => ({
    id: account.id,
    type: account.type,
    accountNumber: account.accountNumber,
    currency: account.currency,
    balance: account.balance,
  }))
  const userData = { id, name, email, accounts: accountSummaries }

  return new Response(
    JSON.stringify(userData),
    { status: 200 }
  )
}
