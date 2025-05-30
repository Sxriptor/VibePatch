import type { LucideIcon } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface StatCardProps {
  title: string
  value: string
  description: string
  icon: LucideIcon
  trend?: string
  trendUp?: boolean
}

export function StatCard({ title, value, description, icon: Icon, trend, trendUp = true }: StatCardProps) {
  return (
    <Card className="overflow-hidden border-none bg-background/60 backdrop-blur-lg shadow-sm hover:shadow-md transition-all duration-200">
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <h3 className="text-2xl font-bold mt-1">{value}</h3>
            <p className="text-xs text-muted-foreground mt-1">{description}</p>
            {trend && (
              <p
                className={cn(
                  "text-xs font-medium mt-2 flex items-center",
                  trendUp ? "text-green-500" : "text-red-500",
                )}
              >
                {trend}
              </p>
            )}
          </div>
          <div className="bg-primary/10 p-2 rounded-full">
            <Icon className="h-5 w-5 text-primary" />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
