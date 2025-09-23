"use client"

import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarRail } from "../ui/sidebar"

export default function SideMenu() {
  return (
    <Sidebar>
      <SidebarHeader>Finance Dashboard</SidebarHeader>
      <SidebarContent>
        <SidebarGroup title="Main">
          <SidebarGroupLabel>Main</SidebarGroupLabel>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton>Home</SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton>Users</SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>© 2024 Finance Inc.</SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
