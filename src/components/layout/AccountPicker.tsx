"use client"

import { useEffect, useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"

type Account = {
  id: string
  name: string
}

type User = {
  name: string
  avatarUrl?: string
}

const mockUser: User = {
  name: "Alex Johnson",
  avatarUrl: "https://ui-avatars.com/api/?name=Alex+Johnson",
}

export default function AccountPicker() {
  const [user, setUser] = useState<User>(mockUser)
  const [accounts, setAccounts] = useState<Account[]>([])
  const [selectedAccount, setSelectedAccount] = useState<Account | null>(null)

  useEffect(() => {
    // TODO - implement api route to fetch accounts for a user
    // fetch("/api/u1/accounts")
    //   .then((res) => res.json())
    //   .then((data: Account[]) => {
    //     setAccounts(data)
    //     if (data.length > 0) setSelectedAccount(data[0])
    //   })

    setAccounts([
      { id: "a1", name: "Checking" },
      { id: "a2", name: "Savings" },
      { id: "a3", name: "Credit Card" },
    ])
    setSelectedAccount({ id: "a1", name: "Checking" })
  }, [])

  return (
    <div className="flex items-center gap-4">
      <Avatar>
        <AvatarImage src={user.avatarUrl} alt={user.name} />
        <AvatarFallback>{user.name[0]}</AvatarFallback>
      </Avatar>
      <div>
        <div className="font-medium">{user.name}</div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm" className="mt-1">
              {selectedAccount ? selectedAccount.name : "Select Account"}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {accounts.map((account) => (
              <DropdownMenuItem
                key={account.id}
                onClick={() => setSelectedAccount(account)}
              >
                {account.name}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}