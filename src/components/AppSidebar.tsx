import React from 'react'

import { Home, Inbox, Calendar } from 'lucide-react'
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader } from "@/components/ui/sidebar";

const items = [
  {
    title: "Dashboard",
    url: "/",
    icon: Home,
  },
  {
    title: "Inbox",
    url: "/inbox",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "/calendar",
    icon: Calendar,
  },
];

export const AppSidebar = () => {
  return (
    <Sidebar>
      <SidebarHeader>
      </SidebarHeader>
      <SidebarContent>
      </SidebarContent>
      <SidebarFooter>
      </SidebarFooter>  
    </Sidebar>
  )
}
