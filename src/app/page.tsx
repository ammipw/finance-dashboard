import { Header, OverviewCard, SideMenu, TransactionsList } from "@/components"
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-6 gap-6 max-w-5xl">
        <div className="col-span-1 md:col-span-2">
          <OverviewCard />
        </div>
        <div className="col-span-1">
          <TransactionsList />
        </div>
      </div>
    </SidebarInset>
  )
}
