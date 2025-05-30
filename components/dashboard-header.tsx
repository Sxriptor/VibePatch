"use client"

import { useState, useEffect } from "react"
import { Bell, Search, Sun, Moon, Menu } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { useTheme } from "next-themes"
import { CircularProgressIndicator } from "@/components/circular-progress"

export function DashboardHeader() {
  const { theme, setTheme } = useTheme()
  const [searchOpen, setSearchOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  // Prevent hydration mismatch by only rendering theme-dependent content after mounting
  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <header className="sticky top-0 z-30 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center justify-between px-4 md:px-6 w-full">
        <div className="flex items-center gap-2 md:hidden">
          <Button variant="ghost" size="icon">
            <Menu className="h-5 w-5" />
          </Button>
          <div className="font-bold">Vibe Coding</div>
        </div>

        <div className="hidden md:flex md:flex-1 md:items-center md:gap-4 md:px-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search courses, resources..." className="pl-8 bg-muted/50 border-none" />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="relative md:hidden" onClick={() => setSearchOpen(!searchOpen)}>
            <Search className="h-5 w-5" />
          </Button>

          <div className="hidden md:block">
            <CircularProgressIndicator value={68} size={36} strokeWidth={3} />
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                <Badge className="absolute -top-1 -right-1 h-4 w-4 p-0 flex items-center justify-center text-[10px]">
                  3
                </Badge>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-80">
              <DropdownMenuLabel>Notifications</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <div className="max-h-80 overflow-auto">
                {[1, 2, 3].map((i) => (
                  <DropdownMenuItem key={i} className="flex flex-col items-start py-2 cursor-pointer">
                    <div className="font-medium">New course available</div>
                    <div className="text-sm text-muted-foreground">Check out the new AI Integration course</div>
                    <div className="text-xs text-muted-foreground mt-1">2 hours ago</div>
                  </DropdownMenuItem>
                ))}
              </div>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            disabled={!mounted}
          >
            {mounted ? (
              theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />
            ) : (
              <div className="h-5 w-5" /> // Placeholder to maintain layout
            )}
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Log out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {searchOpen && (
        <div className="p-4 border-b md:hidden">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search courses, resources..."
              className="pl-8 bg-muted/50 border-none w-full"
            />
          </div>
        </div>
      )}
    </header>
  )
}
