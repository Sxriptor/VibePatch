import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronRight, BookOpen, Video, FileText, ArrowUpRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function RecommendedResourcesCard() {
  const resources = [
    {
      id: 1,
      title: "Advanced React Patterns",
      type: "article",
      icon: FileText,
      category: "Frontend",
    },
    {
      id: 2,
      title: "Building AI-Powered Features",
      type: "video",
      icon: Video,
      category: "AI",
    },
    {
      id: 3,
      title: "Database Optimization Guide",
      type: "guide",
      icon: BookOpen,
      category: "Backend",
    },
    {
      id: 4,
      title: "Startup Financial Modeling",
      type: "template",
      icon: FileText,
      category: "Business",
    },
  ]

  const getResourceBadge = (type: string) => {
    switch (type) {
      case "article":
        return (
          <Badge variant="outline" className="bg-blue-500/10 text-blue-500 border-blue-500/20">
            Article
          </Badge>
        )
      case "video":
        return (
          <Badge variant="outline" className="bg-red-500/10 text-red-500 border-red-500/20">
            Video
          </Badge>
        )
      case "guide":
        return (
          <Badge variant="outline" className="bg-green-500/10 text-green-500 border-green-500/20">
            Guide
          </Badge>
        )
      case "template":
        return (
          <Badge variant="outline" className="bg-purple-500/10 text-purple-500 border-purple-500/20">
            Template
          </Badge>
        )
      default:
        return <Badge variant="outline">Resource</Badge>
    }
  }

  return (
    <Card className="border-none bg-background/60 backdrop-blur-lg shadow-sm">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle>Recommended For You</CardTitle>
          <Button variant="ghost" size="sm" className="gap-1 text-sm">
            View All <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {resources.map((resource) => (
            <div
              key={resource.id}
              className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors group"
            >
              <div className="flex-shrink-0 w-8 h-8 rounded-md bg-primary/10 flex items-center justify-center">
                <resource.icon className="h-4 w-4 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium text-sm truncate">{resource.title}</h4>
                  {getResourceBadge(resource.type)}
                </div>
                <p className="text-xs text-muted-foreground mt-0.5">Category: {resource.category}</p>
              </div>
              <Button
                size="icon"
                variant="ghost"
                className="h-7 w-7 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <ArrowUpRight className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
