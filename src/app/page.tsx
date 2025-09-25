import { SideMenu } from "@/components"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"

export default async function Home() {
  const response = await fetch("http://localhost:3000/api/users/u1")
  const user = await response.json()

  return (
    <SidebarInset>
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Hello {user.name.split(" ")[0]}</h1>
      </div>
    </SidebarInset>
  )
}
