import { dataset as db } from "@/utils/data"

export async function GET() {
  const users = db.users
  const data = users.map(({ id, name, email }) => ({ id, name, email }))

  return new Response(
    JSON.stringify({ users: data }),
    { status: 200 }
  )
}