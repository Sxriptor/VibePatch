"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart3 } from "lucide-react"

export function AnalyticsTab() {
  return (
    <div className="h-full pl-4 md:pl-6 pr-0 py-4 md:py-6 space-y-6 overflow-auto">
      <div className="pr-4 md:pr-6">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          The Intelligence Center
        </h1>
        <p className="text-muted-foreground mt-2">
          Data-driven wealth building
        </p>
      </div>

      <div className="pr-4 md:pr-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-purple-500" />
              Advanced Analytics Dashboard
            </CardTitle>
            <CardDescription>
              Personal performance metrics and predictive wealth analytics
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Coming soon: Complete analytics suite with learning velocity optimization, skill ROI analysis, and investment opportunities.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 