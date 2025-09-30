import { Header, SideMenu } from "@/components"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { User } from "@/types"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default async function Home() {
  const response = await fetch("http://localhost:3000/api/users/u1")
  const user: User = await response.json()
  
  return (
    <SidebarInset>
      <Header username={user.name.split(" ")[0]} />
      <Card className="mx-8 mt-8">
        <CardHeader>
          <CardTitle>
            <div className="flex items-center justify-between">
              <span>Transactions</span>
              <div className="flex gap-2">
                <Button variant="outline">Export</Button>
                <Button>Add Transaction</Button>
              </div>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="all">
            <TabsList>
              <TabsTrigger value="all">All Transactions</TabsTrigger>
              <TabsTrigger value="spending">Spending</TabsTrigger>
              <TabsTrigger value="statements">Statements</TabsTrigger>
            </TabsList>
            <TabsContent value="all">
              <div className="flex items-center justify-between mb-4">
                <input
                  type="text"
                  placeholder="Search transactions..."
                  className="border rounded px-3 py-2 w-1/3"
                />
                <div className="flex gap-2">
                  <Button variant="outline">Date</Button>
                  <Button variant="outline">Category</Button>
                  <Button variant="outline">Amount</Button>
                </div>
              </div>
              {/* Replace with your DataTable component */}
              <div className="border rounded p-4 bg-muted text-muted-foreground text-center">
                DataTable goes here
              </div>
            </TabsContent>
            <TabsContent value="spending">
              <div className="p-4 text-muted-foreground text-center">
                Spending analytics coming soon.
              </div>
            </TabsContent>
            <TabsContent value="statements">
              <div className="p-4 text-muted-foreground text-center">
                Statements will be available here.
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </SidebarInset>
  )
}
