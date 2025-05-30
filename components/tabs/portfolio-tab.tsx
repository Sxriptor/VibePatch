"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase } from "lucide-react"

export function PortfolioTab() {
  return (
    <div className="h-full pl-4 md:pl-6 pr-0 py-4 md:py-6 space-y-6 overflow-auto">
      <div className="pr-4 md:pr-6">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
          The Success Showcase
        </h1>
        <p className="text-muted-foreground mt-2">
          Your million-dollar track record
        </p>
      </div>

      <div className="pr-4 md:pr-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Briefcase className="h-5 w-5 text-orange-500" />
              Professional Portfolio Builder
            </CardTitle>
            <CardDescription>
              AI-optimized project presentations and revenue tracking
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Coming soon: Complete portfolio management with project valuations, client testimonials, and investor-ready presentations.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 