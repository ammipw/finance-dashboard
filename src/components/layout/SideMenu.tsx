"use client"

import { CreditCard, HelpCircle, Home, LogOut, Moon, PiggyBank, Receipt, Settings, Wallet } from "lucide-react"
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarRail, SidebarSeparator } from "../ui/sidebar"
import { Button } from "../ui/button"
import AccountPicker from "./AccountPicker"
import Link from "next/link"
import { usePathname } from "next/navigation"

const navItems = [
  { label: "Overview", url: "/overview", icon: Home },
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
                      {item.label}
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
                <SidebarMenuButton>
                  <Moon />
                  <span className="group-data-[collapsible=icon]:hidden">Theme</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <Button variant="ghost" className="justify-start">
          <LogOut /> Logout
        </Button>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
