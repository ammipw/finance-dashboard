"use client"

import { CreditCard, HelpCircle, Home, LogOut, Moon, PiggyBank, Receipt, Settings, Wallet } from "lucide-react"
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarRail, SidebarSeparator } from "../ui/sidebar"
import { Button } from "../ui/button"
import AccountPicker from "./AccountPicker"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ModeToggle } from "../ModeToggle"

const navItems = [
  { label: "Home", url: "/", icon: Home },
  { label: "Savings", url: "/savings", icon: PiggyBank },
  { label: "Cards", url: "/cards", icon: CreditCard },
  { label: "Transactions", url: "/transactions", icon: Receipt },
]

export default function SideMenu() {
  const pathname = usePathname()

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <AccountPicker />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.label}>
                    <SidebarMenuButton asChild isActive={pathname === item.url}>
                    <Link href={item.url}>
                      <item.icon />
                      <span className="group-data-[collapsible=icon]:hidden">{item.label}</span>
                    </Link>
                    </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
              <SidebarSeparator />
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <HelpCircle />
                  <span className="group-data-[collapsible=icon]:hidden">Support</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <Settings />
                  <span className="group-data-[collapsible=icon]:hidden">Settings</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <ModeToggle />
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <Button variant="ghost" className="justify-start">
          <LogOut />
          <span className="group-data-[collapsible=icon]:hidden">Logout</span>
        </Button>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
