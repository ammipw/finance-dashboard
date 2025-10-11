"use client"

import { useEffect, useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Account, User } from "@/types"
import { useAccount, useUser } from "@/hooks"

export default function AccountPicker() {
  const id = useUser((user:any) => user.id)
  const name = useUser((user:any) => user.name)
  const email = useUser((user:any) => user.email)
  const avatarUrl = useUser((user:any) => user.avatarUrl)
  const accounts = useUser((user:any) => user.accounts)
  const setUser = useUser((user:any) => user.setUser)

  const accountId = useAccount((account:any) => account.id)
  const accountType = useAccount((account:any) => account.type)
  const setAccount = useAccount((account:any) => account.setAccount)

  useEffect(() => {
    async function fetchAccount() {
      const res = await fetch("http://localhost:3000/api/users/u1/accounts")
      const data: Account[] = (await res.json()).accounts
      setAccount(data[0])
    }

    async function fetchUser() {
      const res = await fetch("http://localhost:3000/api/users/u1")
      const data: User = await res.json()
      setUser(data)
    }

    fetchUser()
    fetchAccount()
  }, [])

  // useEffect(() => {
  //   console.log("User updated:", { id, name, email, avatarUrl })
  // }, [id, name, email, avatarUrl])

  // useEffect(() => {
  //   console.log("Account updated:", { accountId, accountType })
  // }, [accountId, accountType])

  return (
    <div className="flex items-center gap-4">
      <Avatar>
        <AvatarImage src={avatarUrl} alt={name} />
        <AvatarFallback>{name[0]}</AvatarFallback>
      </Avatar>
      <div>
        <div className="font-medium">{name}</div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm" className="mt-1">
              {accountId ? `${accountId} - ${accountType}` : "Select Account"}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {accounts.map((account:Account) => (
              <DropdownMenuItem
                key={account.id}
                onClick={() => setAccount(account)}
              >
                {account.id} - {account.type}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}