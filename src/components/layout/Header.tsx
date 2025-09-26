import { Bell, MessageCircleMore, Search, Settings, Speech } from "lucide-react"
import { Button } from "../ui/button"
import { Separator } from "../ui/separator"
import { SidebarTrigger } from "../ui/sidebar"

export default function Header({username}: {username: string}) {
  return (
    <header className="border-b">
      <div className="flex justify-between items-center p-4 h-16">
        <SidebarTrigger />
        <Separator orientation="vertical" className="mx-4" />
        <div className="flex-1">
          <h1 className="text-2xl font-bold">Hello {username}</h1>
        </div>
        <div className="flex">
          <Search className="w-5 h-5 text-gray-500 mr-4" />
          <Bell className="w-5 h-5 text-gray-500 mr-4" />
          <MessageCircleMore className="w-5 h-5 text-gray-500 mr-4" />
          <Settings className="w-5 h-5 text-gray-500 mr-4" />
        </div>
      </div>
    </header>
  )
}
