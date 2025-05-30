"use client"

import React, { createContext, useContext, useState } from "react"

type DashboardTab = 
  | "dashboard"
  | "learning-path"
  | "code-lab"
  | "ai-playground"
  | "startup-hub"
  | "community"
  | "portfolio"
  | "marketplace"
  | "analytics"

interface DashboardContextType {
  activeTab: DashboardTab
  setActiveTab: (tab: DashboardTab) => void
}

const DashboardContext = createContext<DashboardContextType | undefined>(undefined)

export function DashboardProvider({ children }: { children: React.ReactNode }) {
  const [activeTab, setActiveTab] = useState<DashboardTab>("dashboard")

  return (
    <DashboardContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </DashboardContext.Provider>
  )
}

export function useDashboardContext() {
  const context = useContext(DashboardContext)
  if (context === undefined) {
    throw new Error("useDashboardContext must be used within a DashboardProvider")
  }
  return context
} 