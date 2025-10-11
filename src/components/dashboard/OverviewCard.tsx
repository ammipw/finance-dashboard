"use client"

import { useAccount } from "@/hooks"
import { Button } from "../ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"

export default function OverviewCard() {
  const accountBalance = useAccount((account:any) => account.balance)

  return (
    <Card>
      <CardHeader>
        <CardTitle>Balance</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-bold mb-4">${Number(accountBalance).toFixed(2)}</div>
        <div className="flex gap-2">
          <Button variant="outline">Withdraw</Button>
          <Button>Deposit</Button>
        </div>
      </CardContent>
    </Card>
  )
}