import { Header, SideMenu } from "@/components"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Transaction, User } from "@/types"
import { BanknoteArrowDown, BanknoteArrowUp } from "lucide-react"

export default async function Home() {
  const user: User = await fetch("http://localhost:3000/api/users/u1").then(res => res.json())
  const transactions: Transaction[] = (await fetch("http://localhost:3000/api/users/u1/accounts/a1/transactions?limit=5&sort=desc").then(res => res.json())).transactions

  return (
    <SidebarInset>
      <Header username={user.name.split(" ")[0]} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-6 gap-6">
        <div className="col-span-1 md:col-span-2">
          {/* Main content goes here */}
          <div className="">
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
          <div className="">
            <Card>
              <CardHeader>
                <CardTitle>Transactions</CardTitle>
              </CardHeader>
              {
                transactions.length > 0 ? (
                  <CardContent>
                    {transactions.map((tx: Transaction) => (
                      <div key={tx.id} className="flex flex-row items-center gap-3 py-2">
                        {tx.amount > 0 ? (
                          <BanknoteArrowUp className="text-green-500" />
                        ) : (
                          <BanknoteArrowDown className="text-red-500" />
                        )}
                        <div className="flex-1">
                          <div className="text-sm">{tx.description}</div>
                          <div className="text-xs text-muted-foreground">
                            {new Date(tx.date).toLocaleDateString()}
                          </div>
                        </div>
                        <div className="text-lg font-medium">${Math.abs(tx.amount)}</div>
                      </div>
                    ))}
                  </CardContent>
                ) : (
                  <p>No recent transactions.</p>
                )
              }
            </Card>
          </div>
        </div>
      </div>
    </SidebarInset>
  )
}
