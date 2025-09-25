"use client"

import { CreditCard, HelpCircle, Home, LogOut, Moon, PiggyBank, Receipt, Settings, Wallet } from "lucide-react"
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarRail, SidebarSeparator } from "../ui/sidebar"
import { Button } from "../ui/button"

const navItems = [
  { label: "Overview", icon: Home },
  { label: "Savings", icon: PiggyBank },
  { label: "Cards", icon: CreditCard },
  { label: "Payments", icon: Receipt },
]

export default function SideMenu() {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <div className="text-lg font-bold p-4 group-data-[collapsible=icon]:invisible">Finance Dashboard</div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.label}>
                  <SidebarMenuButton size="lg">
                    <span><item.icon /></span>
                    <span className="group-data-[collapsible=icon]:hidden">{item.label}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
              <SidebarSeparator />
              <SidebarMenuItem>
                <SidebarMenuButton size="lg">
                  <span><HelpCircle /></span>
                  <span className="group-data-[collapsible=icon]:hidden">Support</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton size="lg">
                  <span><Settings /></span>
                  <span className="group-data-[collapsible=icon]:hidden">Settings</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton size="lg">
                  <span><Moon /></span>
                  <span className="group-data-[collapsible=icon]:hidden">Theme</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <Button variant="ghost" size="lg" className="justify-start">
          <LogOut /> Logout
        </Button>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
