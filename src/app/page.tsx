import { Header, SideMenu } from "@/components"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { User } from "@/types"

export default async function Home() {
  const response = await fetch("http://localhost:3000/api/users/u1")
  const user: User = await response.json()
  
  return (
    <SidebarInset>
      <Header username={user.name.split(" ")[0]} />
    </SidebarInset>
  )
}
