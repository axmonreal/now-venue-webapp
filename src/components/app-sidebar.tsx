import { Home, BarChart2, Settings } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const items = [
  {
    title: "Home",
    url: "/dashboard",
    icon: Home,
  },
  {
    title: "Analytics",
    url: "#",
    icon: BarChart2,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
]

export function AppSidebar() {
  return (
    <Sidebar variant="inset">
      <SidebarContent>
        <div className="w-full text-center py-[1vh] font-bold text-[#276100] text-xl">
          NOW
        </div>
        <SidebarGroup className="h-[calc(100vh-4vh)] flex items-center justify-center">
          <SidebarGroupContent>
            <SidebarMenu>
              <div className="flex flex-col items-center space-y-[9vh]">
                {items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      tooltip={item.title}
                      className="text-[#276100]"
                      asChild
                    >
                      <a href={item.url}>
                        <item.icon className="h-[2vh] w-[2vh]" />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </div>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}