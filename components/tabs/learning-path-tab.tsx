"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { BookOpen, Clock, Star, Trophy, Users, Zap } from "lucide-react"

export function LearningPathTab() {
  const signaturePathways = [
    {
      title: "The AI Empire Builder",
      description: "0-$100K in 12 months through AI mastery",
      progress: 45,
      level: "Intermediate",
      duration: "12 months",
      roi: "$100K+",
      color: "from-purple-600 to-blue-500"
    },
    {
      title: "No-Code Automation Mogul",
      description: "n8n mastery to 6-figures",
      progress: 30,
      level: "Beginner",
      duration: "8 months",
      roi: "$50K+",
      color: "from-green-600 to-teal-500"
    },
    {
      title: "Vibe Coding Virtuoso",
      description: "Intuitive development mastery",
      progress: 60,
      level: "Advanced",
      duration: "10 months",
      roi: "$75K+",
      color: "from-orange-600 to-red-500"
    },
    {
      title: "Digital Product Tycoon",
      description: "From concept to $1M exits",
      progress: 15,
      level: "Expert",
      duration: "18 months",
      roi: "$1M+",
      color: "from-yellow-600 to-orange-500"
    }
  ]

  const premiumFeatures = [
    {
      icon: Users,
      title: "Live Mastermind Calls",
      description: "Weekly sessions with 8-figure entrepreneurs"
    },
    {
      icon: Zap,
      title: "Personal AI Assistant",
      description: "Trained on your specific goals and progress"
    },
    {
      icon: Trophy,
      title: "Custom Curriculum",
      description: "Based on your portfolio analysis"
    },
    {
      icon: Star,
      title: "Exclusive Case Studies",
      description: "From members who've scaled to millions"
    }
  ]

  const progressionTiers = [
    { tier: "Bronze", requirement: "Complete 3 pathways", current: true },
    { tier: "Silver", requirement: "Generate $10K revenue", current: false },
    { tier: "Gold", requirement: "Build 5 projects", current: false },
    { tier: "Platinum", requirement: "$100K portfolio value", current: false },
    { tier: "Diamond", requirement: "Mentor 10 students", current: false }
  ]

  return (
    <div className="h-full pl-4 md:pl-6 pr-0 py-4 md:py-6 space-y-6 overflow-auto">
      <div className="pr-4 md:pr-6">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
          The Millionaire Maker
        </h1>
        <p className="text-muted-foreground mt-2">
          Curated progression for high-net-worth skill development
        </p>
      </div>

      {/* Overall Progress */}
      <div className="pr-4 md:pr-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="h-5 w-5 text-yellow-500" />
              Your Learning ROI Progress
            </CardTitle>
            <CardDescription>
              Track your journey to financial freedom through skill mastery
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-500">$12,450</div>
                <div className="text-sm text-muted-foreground">Net Learning ROI</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-500">85</div>
                <div className="text-sm text-muted-foreground">Skill Velocity Index</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-500">$45K</div>
                <div className="text-sm text-muted-foreground">Portfolio Valuation</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Signature Pathways */}
      <div className="pr-4 md:pr-6">
        <h2 className="text-2xl font-semibold mb-4">Signature Pathways</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {signaturePathways.map((pathway, index) => (
            <Card key={index} className="overflow-hidden">
              <div className={`h-2 bg-gradient-to-r ${pathway.color}`} />
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg">{pathway.title}</CardTitle>
                    <CardDescription className="mt-1">
                      {pathway.description}
                    </CardDescription>
                  </div>
                  <Badge variant="secondary">{pathway.level}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Progress</span>
                      <span>{pathway.progress}%</span>
                    </div>
                    <Progress value={pathway.progress} className="h-2" />
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      {pathway.duration}
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="h-4 w-4 text-yellow-500" />
                      {pathway.roi}
                    </div>
                  </div>
                  <Button className="w-full" variant={pathway.progress > 0 ? "default" : "outline"}>
                    {pathway.progress > 0 ? "Continue Learning" : "Start Pathway"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Premium Features */}
      <div className="pr-4 md:pr-6">
        <h2 className="text-2xl font-semibold mb-4">Premium Learning Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {premiumFeatures.map((feature, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-purple-600/20 to-blue-500/20">
                    <feature.icon className="h-6 w-6 text-purple-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Progression Tracking */}
      <div className="pr-4 md:pr-6">
        <Card>
          <CardHeader>
            <CardTitle>Progression Tracking</CardTitle>
            <CardDescription>
              Unlock exclusive tiers based on your achievements
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {progressionTiers.map((tier, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className={`w-3 h-3 rounded-full ${
                    tier.current ? "bg-gradient-to-r from-purple-600 to-blue-500" : "bg-muted"
                  }`} />
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className={`font-medium ${
                        tier.current ? "text-purple-500" : "text-muted-foreground"
                      }`}>
                        {tier.tier}
                      </span>
                      {tier.current && <Badge variant="default">Current</Badge>}
                    </div>
                    <p className="text-sm text-muted-foreground">{tier.requirement}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 