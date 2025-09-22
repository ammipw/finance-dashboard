export async function GET() {
  return new Response(
    JSON.stringify({ name: "Finance Dashboard API", version: "1.0.0" }),
    { status: 200 }
  )
}