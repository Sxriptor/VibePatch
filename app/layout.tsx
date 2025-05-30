import type React from "react"
import type { Metadata } from "next"
import { Mona_Sans as FontSans } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import { SidebarProvider } from "@/components/ui/sidebar"
import { DashboardSidebar } from "@/components/dashboard-sidebar"
import { DashboardProvider } from "@/hooks/use-dashboard-context"
import { Toaster } from "@/components/ui/toaster"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Vibe Coding Academy",
  description: "Learn coding, startup development, and AI integration",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <DashboardProvider>
            <SidebarProvider>
              <div className="flex min-h-screen">
                <DashboardSidebar />
                <div className="flex-1">{children}</div>
              </div>
              <Toaster />
            </SidebarProvider>
          </DashboardProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
