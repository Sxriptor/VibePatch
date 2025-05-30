"use client"

import { useDashboardContext } from "@/hooks/use-dashboard-context"
import { DashboardTab } from "@/components/tabs/dashboard-tab"
import { LearningPathTab } from "@/components/tabs/learning-path-tab"
import { CodeLabTab } from "@/components/tabs/code-lab-tab"
import { AIPlaygroundTab } from "@/components/tabs/ai-playground-tab"
import { StartupHubTab } from "@/components/tabs/startup-hub-tab"
import { CommunityTab } from "@/components/tabs/community-tab"
import { PortfolioTab } from "@/components/tabs/portfolio-tab"
import { MarketplaceTab } from "@/components/tabs/marketplace-tab"
import { AnalyticsTab } from "@/components/tabs/analytics-tab"

export function DynamicDashboardContent() {
  const { activeTab } = useDashboardContext()

  const renderTabContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <DashboardTab />
      case "learning-path":
        return <LearningPathTab />
      case "code-lab":
        return <CodeLabTab />
      case "ai-playground":
        return <AIPlaygroundTab />
      case "startup-hub":
        return <StartupHubTab />
      case "community":
        return <CommunityTab />
      case "portfolio":
        return <PortfolioTab />
      case "marketplace":
        return <MarketplaceTab />
      case "analytics":
        return <AnalyticsTab />
      default:
        return <DashboardTab />
    }
  }

  return (
    <div className="flex-1 w-full h-[calc(100vh-4rem)] overflow-auto">
      {renderTabContent()}
    </div>
  )
}