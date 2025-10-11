"use client"

import { useAccount } from "@/hooks"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { Transaction } from "@/types"
import { BanknoteArrowDown, BanknoteArrowUp } from "lucide-react"
import { useEffect } from "react"

export default function TransactionsList() {
  const id = useAccount((account:any) => account.id)
  const transactions = useAccount((account:any) => account.transactions)
  const setTransactions = useAccount((account:any) => account.setTransactions)

  useEffect(() => {
    async function fetchTransactions() {
      if (!id) return
      const res = await fetch(`http://localhost:3000/api/users/u1/accounts/${id}/transactions?limit=5&sort=desc`)
      const data = await res.json()
      setTransactions(data.transactions || [])
    }

    fetchTransactions()
  }, [id])
  
  // useEffect(() => {
  //   console.log("Account updated:", { id, transactions })
  // }, [id, transactions])

  return (
    <Card>
      <CardHeader>
        <CardTitle>Transactions</CardTitle>
      </CardHeader>
      <CardContent>
      {
        transactions.length > 0 ? (
          <>
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
          </>
        ) : (
          <p>No recent transactions.</p>
        )
      }
      </CardContent>
    </Card>
  )
}