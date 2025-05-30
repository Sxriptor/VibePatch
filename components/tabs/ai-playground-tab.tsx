"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { 
  Brain, 
  Cpu, 
  Mic, 
  Video, 
  Bot, 
  Zap, 
  DollarSign, 
  Globe,
  Key,
  Settings,
  TrendingUp,
  Users,
  Sparkles,
  Target
} from "lucide-react"

export function AIPlaygroundTab() {
  const aiArsenal = [
    {
      icon: Brain,
      title: "Custom GPT Training",
      description: "Train models on your specific data and use cases",
      status: "Available",
      usage: 85
    },
    {
      icon: Settings,
      title: "Prompt Engineering",
      description: "Advanced prompt optimization masterclasses",
      status: "Active",
      usage: 72
    },
    {
      icon: Zap,
      title: "Automation Workflows",
      description: "n8n integration for AI-powered automation",
      status: "Beta",
      usage: 94
    },
    {
      icon: Mic,
      title: "Voice AI Tools",
      description: "Speech synthesis and recognition systems",
      status: "Available",
      usage: 67
    },
    {
      icon: Video,
      title: "Video Generation",
      description: "AI-powered video creation and editing",
      status: "Coming Soon",
      usage: 0
    },
    {
      icon: Bot,
      title: "Personal AI Assistant",
      description: "Custom AI assistant development platform",
      status: "Active",
      usage: 91
    }
  ]

  const revenueProjects = [
    {
      title: "AI Consulting Service",
      description: "Complete business consultation powered by AI",
      revenue: "$15K/month",
      clients: 12,
      status: "Active",
      color: "from-green-600 to-emerald-600"
    },
    {
      title: "Content Creation Business",
      description: "Automated blog and social media content generation",
      revenue: "$8K/month",
      clients: 24,
      status: "Growing",
      color: "from-blue-600 to-cyan-600"
    },
    {
      title: "AI SaaS Product",
      description: "White-label AI solution for small businesses",
      revenue: "$25K/month",
      clients: 156,
      status: "Scaling",
      color: "from-purple-600 to-pink-600"
    },
    {
      title: "Training & Certification",
      description: "AI education programs for professionals",
      revenue: "$12K/month",
      clients: 89,
      status: "Active",
      color: "from-orange-600 to-red-600"
    }
  ]

  const exclusiveFeatures = [
    {
      icon: Key,
      title: "Direct API Access",
      description: "Cutting-edge models before public release",
      value: "Early Access"
    },
    {
      icon: Globe,
      title: "White-Label Solutions",
      description: "Rebrand AI tools for your clients",
      value: "$50K+ Value"
    },
    {
      icon: Target,
      title: "Business Validation",
      description: "AI-powered market opportunity analysis",
      value: "92% Accuracy"
    },
    {
      icon: Users,
      title: "Client Acquisition",
      description: "Automated lead generation systems",
      value: "300+ Leads/mo"
    }
  ]

  const currentProjects = [
    { name: "GPT-4 Fine-tuning", progress: 78, type: "Model Training" },
    { name: "Voice Clone Setup", progress: 45, type: "Audio AI" },
    { name: "Workflow Automation", progress: 92, type: "n8n Integration" },
    { name: "Client Dashboard", progress: 67, type: "SaaS Development" }
  ]

  return (
    <div className="h-full pl-4 md:pl-6 pr-0 py-4 md:py-6 space-y-6 overflow-auto">
      <div className="pr-4 md:pr-6">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          The Future Factory
        </h1>
        <p className="text-muted-foreground mt-2">
          Master the tools that will make you irreplaceable
        </p>
      </div>

      {/* AI Arsenal Overview */}
      <div className="pr-4 md:pr-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Cpu className="h-5 w-5 text-purple-500" />
              Premium AI Arsenal
            </CardTitle>
            <CardDescription>
              Enterprise AI tools and cutting-edge capabilities
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {aiArsenal.map((tool, index) => (
                <div key={index} className="p-4 rounded-lg border bg-card">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-purple-600/20 to-pink-600/20">
                      <tool.icon className="h-5 w-5 text-purple-500" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-medium text-sm">{tool.title}</h3>
                        <Badge 
                          variant={
                            tool.status === "Active" ? "default" : 
                            tool.status === "Beta" ? "secondary" : 
                            tool.status === "Coming Soon" ? "outline" : "default"
                          } 
                          className="text-xs"
                        >
                          {tool.status}
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground mb-2">{tool.description}</p>
                      {tool.usage > 0 && (
                        <div className="space-y-1">
                          <div className="flex justify-between text-xs">
                            <span>Usage</span>
                            <span>{tool.usage}%</span>
                          </div>
                          <Progress value={tool.usage} className="h-1" />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Revenue-Generating Projects */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pr-4 md:pr-6">
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-semibold mb-4">Revenue-Generating AI Projects</h2>
          <div className="space-y-4">
            {revenueProjects.map((project, index) => (
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
                      {project.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="text-center">
                      <div className="text-xl font-bold text-green-500">{project.revenue}</div>
                      <div className="text-xs text-muted-foreground">Monthly Revenue</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl font-bold text-blue-500">{project.clients}</div>
                      <div className="text-xs text-muted-foreground">Active Clients</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl font-bold text-purple-500">{project.status}</div>
                      <div className="text-xs text-muted-foreground">Status</div>
                    </div>
                  </div>
                  <Separator className="mb-4" />
                  <div className="flex gap-2">
                    <Button className="flex-1" size="sm">
                      <TrendingUp className="h-4 w-4 mr-2" />
                      Scale Up
                    </Button>
                    <Button variant="outline" size="sm">
                      View Analytics
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          {/* Exclusive Features */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Exclusive Features</CardTitle>
              <CardDescription>
                Premium AI capabilities for elite members
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {exclusiveFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="p-1.5 rounded-lg bg-gradient-to-br from-purple-600/20 to-pink-600/20">
                      <feature.icon className="h-4 w-4 text-purple-500" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="font-medium text-sm">{feature.title}</h3>
                        <Badge variant="secondary" className="text-xs">
                          {feature.value}
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Current Projects */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Active AI Projects</CardTitle>
              <CardDescription>
                Your current development pipeline
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {currentProjects.map((project, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-sm font-medium">{project.name}</span>
                        <div className="text-xs text-muted-foreground">{project.type}</div>
                      </div>
                      <span className="text-xs font-medium">{project.progress}%</span>
                    </div>
                    <Progress value={project.progress} className="h-1.5" />
                  </div>
                ))}
                <Button variant="outline" size="sm" className="w-full mt-4">
                  <Sparkles className="h-4 w-4 mr-2" />
                  Start New AI Project
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* AI Performance Stats */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">AI Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-500">2.4M</div>
                  <div className="text-xs text-muted-foreground">Tokens Processed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-500">$60K</div>
                  <div className="text-xs text-muted-foreground">AI Revenue Generated</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-500">847</div>
                  <div className="text-xs text-muted-foreground">Automation Hours Saved</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
} 