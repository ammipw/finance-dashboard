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
      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2">
          {/* Main content goes here */}
          <div className="p-6">
            <Card>
              <CardHeader>
                <CardTitle>Balance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold mb-4">${user.accounts?.[0].balance}</div>
                <div className="flex gap-2">
                  <Button variant="outline">Withdraw</Button>
                  <Button>Deposit</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        <div className="col-span-1">
          {/* Sidebar or secondary content */}
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-4">Sidebar</h2>
            {/* Replace with your sidebar content */}
          </div>
        </div>
      </div>
    </SidebarInset>
  )
}
