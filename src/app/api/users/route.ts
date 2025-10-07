import { database as db } from "@/utils/data"

/**
 * Handles GET requests for all users.
 * @returns A Response object with the list of users.
 */
export async function GET() {
  const users = db.users.map(({ id, name, email }) => ({ id, name, email }))

  return new Response(
    JSON.stringify({ users }),
    { status: 200 }
  )
}