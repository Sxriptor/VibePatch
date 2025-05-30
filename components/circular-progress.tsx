"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface CircularProgressIndicatorProps {
  value: number
  size?: number
  strokeWidth?: number
  className?: string
  showValue?: boolean
  valueClassName?: string
}

export function CircularProgressIndicator({
  value,
  size = 40,
  strokeWidth = 4,
  className,
  showValue = true,
  valueClassName,
}: CircularProgressIndicatorProps) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(value)
    }, 100)

    return () => clearTimeout(timer)
  }, [value])

  const radius = (size - strokeWidth) / 2
  const circumference = radius * 2 * Math.PI
  const strokeDashoffset = circumference - (progress / 100) * circumference

  return (
    <div className={cn("relative inline-flex", className)} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="rotate-[-90deg]">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          className="text-muted-foreground/20"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className="text-primary transition-all duration-500 ease-out"
        />
      </svg>
      {showValue && (
        <div className={cn("absolute inset-0 flex items-center justify-center text-xs font-medium", valueClassName)}>
          {progress}%
        </div>
      )}
    </div>
  )
}
