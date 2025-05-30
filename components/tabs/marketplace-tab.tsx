"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ShoppingBag } from "lucide-react"

export function MarketplaceTab() {
  return (
    <div className="h-full pl-4 md:pl-6 pr-0 py-4 md:py-6 space-y-6 overflow-auto">
      <div className="pr-4 md:pr-6">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
          The Wealth Exchange
        </h1>
        <p className="text-muted-foreground mt-2">
          Where skills become significant income
        </p>
      </div>

      <div className="pr-4 md:pr-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ShoppingBag className="h-5 w-5 text-green-500" />
              Premium Service Marketplace
            </CardTitle>
            <CardDescription>
              High-value projects from $5K-$500K with verified clients
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Coming soon: Complete marketplace with AI automation, SaaS development, and consulting opportunities.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 