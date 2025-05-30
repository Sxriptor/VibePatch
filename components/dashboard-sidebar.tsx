"use client"

import { useDashboardContext } from "@/hooks/use-dashboard-context"
import {
  BookOpen,
  Code,
  Cpu,
  Rocket,
  Users,
  Briefcase,
  ShoppingBag,
  BarChart3,
  Home,
  Settings,
  ChevronDown,
} from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { cn } from "@/lib/utils"

export function DashboardSidebar() {
  const { activeTab, setActiveTab } = useDashboardContext()

  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: Home },
    { id: "learning-path", label: "Learning Path", icon: BookOpen },
    { id: "code-lab", label: "Code Lab", icon: Code },
    { id: "ai-playground", label: "AI Playground", icon: Cpu },
    { id: "startup-hub", label: "Startup Hub", icon: Rocket },
    { id: "community", label: "Community", icon: Users },
    { id: "portfolio", label: "Portfolio", icon: Briefcase },
    { id: "marketplace", label: "Marketplace", icon: ShoppingBag },
    { id: "analytics", label: "Analytics", icon: BarChart3 },
  ]

  return (
    <Sidebar variant="sidebar" collapsible="icon">
      <SidebarHeader className="py-4">
        <div className="flex items-center px-4 gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center">
            <span className="text-white font-bold">V</span>
          </div>
          <div className="font-bold text-lg">Vibe Coding</div>
        </div>
        <div className="px-4 mt-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-muted-foreground">Overall Progress</span>
            <span className="text-xs font-medium">68%</span>
          </div>
          <Progress value={68} className="h-1.5" />
        </div>
      </SidebarHeader>
      <SidebarSeparator />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Main Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.id}>
                  <SidebarMenuButton
                    isActive={activeTab === item.id}
                    onClick={() => setActiveTab(item.id as any)}
                    tooltip={item.label}
                  >
                    <item.icon
                      className={cn(
                        "transition-all duration-200",
                        activeTab === item.id ? "text-primary" : "text-muted-foreground",
                      )}
                    />
                    <span>{item.label}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarSeparator className="my-2" />

        <SidebarGroup>
          <SidebarGroupLabel>Recent Courses</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton tooltip="Frontend Fundamentals">
                  <div className="w-4 h-4 rounded-sm bg-blue-500 flex-shrink-0" />
                  <span>Frontend Fundamentals</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton tooltip="AI/ML Integration">
                  <div className="w-4 h-4 rounded-sm bg-purple-500 flex-shrink-0" />
                  <span>AI/ML Integration</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton tooltip="Startup Strategy">
                  <div className="w-4 h-4 rounded-sm bg-green-500 flex-shrink-0" />
                  <span>Startup Strategy</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton tooltip="Settings">
              <Settings size={18} />
              <span>Settings</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton tooltip="Help & Support">
              <div className="flex items-center gap-2 w-full">
                <Avatar className="h-6 w-6">
                  <AvatarImage src="/placeholder.svg?height=32&width=32" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className="flex flex-col text-left">
                  <span className="text-sm">John Doe</span>
                  <span className="text-xs text-muted-foreground">Pro Plan</span>
                </div>
                <ChevronDown className="ml-auto h-4 w-4" />
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarTrigger className="absolute top-4 right-4" />
    </Sidebar>
  )
}
