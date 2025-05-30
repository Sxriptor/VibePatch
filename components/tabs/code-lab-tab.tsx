"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { 
  Code, 
  Cloud, 
  Zap, 
  Rocket, 
  DollarSign, 
  Users, 
  GitBranch, 
  Server,
  Sparkles,
  Target,
  TrendingUp,
  FileCode
} from "lucide-react"

export function CodeLabTab() {
  const developmentEnvironment = [
    {
      icon: Cloud,
      title: "Cloud Development",
      description: "Unlimited resources, zero setup time",
      status: "Active"
    },
    {
      icon: FileCode,
      title: "Premium Templates",
      description: "High-ROI project starters",
      status: "Available"
    },
    {
      icon: Sparkles,
      title: "AI Pair Programming",
      description: "GPT-4+ models integrated",
      status: "Beta"
    },
    {
      icon: Rocket,
      title: "One-Click Deploy",
      description: "Premium hosting included",
      status: "Available"
    }
  ]

  const signatureProjects = [
    {
      title: "SaaS Starter Template",
      description: "Full-stack application with authentication, payments, and admin panel",
      potential: "$10K+",
      difficulty: "Intermediate",
      time: "2-4 weeks",
      tech: ["Next.js", "TypeScript", "Stripe", "Prisma"],
      color: "from-blue-600 to-purple-600"
    },
    {
      title: "E-commerce Automation",
      description: "Complete dropshipping automation with AI-powered product research",
      potential: "$25K+",
      difficulty: "Advanced",
      time: "4-6 weeks",
      tech: ["React", "Node.js", "Shopify API", "AI Models"],
      color: "from-green-600 to-teal-600"
    },
    {
      title: "AI Service Business",
      description: "White-label AI consultation platform with client dashboard",
      potential: "$50K+",
      difficulty: "Expert",
      time: "6-8 weeks",
      tech: ["Python", "FastAPI", "OpenAI", "React"],
      color: "from-purple-600 to-pink-600"
    },
    {
      title: "No-Code App Builder",
      description: "Drag-and-drop app builder with monetization features",
      potential: "$100K+",
      difficulty: "Expert",
      time: "8-12 weeks",
      tech: ["Vue.js", "Supabase", "Stripe", "WebAssembly"],
      color: "from-orange-600 to-red-600"
    }
  ]

  const innovationFeatures = [
    {
      icon: Target,
      title: "Idea Validation",
      description: "AI-powered market analysis and opportunity scoring",
      score: 92
    },
    {
      icon: TrendingUp,
      title: "Market Opportunity",
      description: "Real-time trend analysis and competition mapping",
      score: 87
    },
    {
      icon: DollarSign,
      title: "Revenue Projections",
      description: "ML-based income forecasting with confidence intervals",
      score: 94
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Real-time coding with elite developer network",
      score: 89
    }
  ]

  const activeProjects = [
    { name: "AI Chat Widget", progress: 75, revenue: "$2,450" },
    { name: "Task Automation Tool", progress: 45, revenue: "$890" },
    { name: "Analytics Dashboard", progress: 90, revenue: "$5,200" }
  ]

  return (
    <div className="h-full pl-4 md:pl-6 pr-0 py-4 md:py-6 space-y-6 overflow-auto">
      <div className="pr-4 md:pr-6">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          The Innovation Vault
        </h1>
        <p className="text-muted-foreground mt-2">
          Where million-dollar ideas come to life
        </p>
      </div>

      {/* Development Environment Status */}
      <div className="pr-4 md:pr-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Server className="h-5 w-5 text-blue-500" />
              Premium Development Environment
            </CardTitle>
            <CardDescription>
              Enterprise-grade tools for serious builders
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {developmentEnvironment.map((env, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-blue-600/20 to-purple-600/20">
                    <env.icon className="h-5 w-5 text-blue-500" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-medium text-sm">{env.title}</h3>
                      <Badge variant={env.status === "Active" ? "default" : env.status === "Beta" ? "secondary" : "outline"} className="text-xs">
                        {env.status}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">{env.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Active Projects */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pr-4 md:pr-6">
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-semibold mb-4">Signature Projects Library</h2>
          <div className="space-y-4">
            {signatureProjects.map((project, index) => (
              <Card key={index} className="overflow-hidden">
                <div className={`h-1 bg-gradient-to-r ${project.color}`} />
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-lg">{project.title}</CardTitle>
                      <CardDescription className="mt-1">
                        {project.description}
                      </CardDescription>
                    </div>
                    <Badge variant="outline" className="text-green-600 border-green-600">
                      {project.potential}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div>
                        <span className="text-muted-foreground">Difficulty</span>
                        <div className="font-medium">{project.difficulty}</div>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Timeline</span>
                        <div className="font-medium">{project.time}</div>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Potential</span>
                        <div className="font-medium text-green-600">{project.potential}</div>
                      </div>
                    </div>
                    <div>
                      <span className="text-sm text-muted-foreground mb-2 block">Tech Stack</span>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <Separator />
                    <div className="flex gap-2">
                      <Button className="flex-1" size="sm">
                        Start Building
                      </Button>
                      <Button variant="outline" size="sm">
                        Preview Demo
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          {/* Innovation Features */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Innovation Tools</CardTitle>
              <CardDescription>
                AI-powered development assistance
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {innovationFeatures.map((feature, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center gap-2">
                      <feature.icon className="h-4 w-4 text-purple-500" />
                      <span className="text-sm font-medium">{feature.title}</span>
                      <Badge variant="outline" className="ml-auto text-xs">
                        {feature.score}%
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground pl-6">
                      {feature.description}
                    </p>
                    <Progress value={feature.score} className="h-1" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Active Projects */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Your Active Projects</CardTitle>
              <CardDescription>
                Current development pipeline
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {activeProjects.map((project, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">{project.name}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-green-600 font-medium">
                          {project.revenue}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {project.progress}%
                        </span>
                      </div>
                    </div>
                    <Progress value={project.progress} className="h-1.5" />
                  </div>
                ))}
                <Button variant="outline" size="sm" className="w-full mt-4">
                  <GitBranch className="h-4 w-4 mr-2" />
                  Create New Project
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Quick Stats */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Development Stats</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-500">127</div>
                  <div className="text-xs text-muted-foreground">Hours Coded This Month</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-500">$8,540</div>
                  <div className="text-xs text-muted-foreground">Revenue Generated</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-500">15</div>
                  <div className="text-xs text-muted-foreground">Projects Completed</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
} 