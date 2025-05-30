"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users } from "lucide-react"

export function CommunityTab() {
  return (
    <div className="h-full pl-4 md:pl-6 pr-0 py-4 md:py-6 space-y-6 overflow-auto">
      <div className="pr-4 md:pr-6">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
          The Inner Circle
        </h1>
        <p className="text-muted-foreground mt-2">
          Network with tomorrow's billionaires
        </p>
      </div>

      <div className="pr-4 md:pr-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-blue-500" />
              Exclusive Community Access
            </CardTitle>
            <CardDescription>
              VIP mentorship, elite masterminds, and premium networking opportunities
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Coming soon: Full community platform with verified members, deal-sharing channels, and global meetups.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 