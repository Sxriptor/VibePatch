"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Rocket } from "lucide-react"

export function StartupHubTab() {
  return (
    <div className="h-full pl-4 md:pl-6 pr-0 py-4 md:py-6 space-y-6 overflow-auto">
      <div className="pr-4 md:pr-6">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
          The Wealth Accelerator
        </h1>
        <p className="text-muted-foreground mt-2">
          From idea to IPO-ready venture
        </p>
      </div>

      <div className="pr-4 md:pr-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Rocket className="h-5 w-5 text-green-500" />
              Elite Entrepreneurship Program
            </CardTitle>
            <CardDescription>
              Weekly pitch sessions with active VCs and startup accelerator partnerships
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Coming soon: Full startup hub with VC connections, legal frameworks, and wealth building tools.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 