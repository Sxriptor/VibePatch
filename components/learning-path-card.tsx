import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronRight, CheckCircle2, Circle } from "lucide-react"

export function LearningPathCard() {
  const pathSteps = [
    {
      id: 1,
      title: "Web Development Fundamentals",
      completed: true,
      courses: ["HTML & CSS Basics", "JavaScript Essentials", "Responsive Design"],
    },
    {
      id: 2,
      title: "Frontend Development",
      completed: false,
      active: true,
      courses: ["React Fundamentals", "Next.js App Router", "State Management"],
    },
    {
      id: 3,
      title: "Backend Development",
      completed: false,
      courses: ["Node.js Basics", "Database Design", "API Development"],
    },
    {
      id: 4,
      title: "Full Stack Integration",
      completed: false,
      courses: ["Authentication", "Deployment", "Performance Optimization"],
    },
  ]

  return (
    <Card className="border-none bg-background/60 backdrop-blur-lg shadow-sm">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle>Your Learning Path</CardTitle>
          <Button variant="ghost" size="sm" className="gap-1 text-sm">
            View All <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="relative">
          <div className="absolute top-0 bottom-0 left-[22px] w-0.5 bg-muted-foreground/20" />
          <div className="space-y-4">
            {pathSteps.map((step) => (
              <div key={step.id} className="relative flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  {step.completed ? (
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                  ) : step.active ? (
                    <div className="h-5 w-5 rounded-full border-2 border-primary bg-background flex items-center justify-center">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                    </div>
                  ) : (
                    <Circle className="h-5 w-5 text-muted-foreground/50" />
                  )}
                </div>
                <div className={`flex-1 pb-4 ${step.active ? "opacity-100" : "opacity-80"}`}>
                  <div className="flex items-center gap-2">
                    <h3 className="font-medium">{step.title}</h3>
                    {step.active && (
                      <Badge variant="outline" className="text-xs bg-primary/10 text-primary border-primary/20">
                        In Progress
                      </Badge>
                    )}
                  </div>
                  <div className="mt-1 text-sm text-muted-foreground">
                    <ul className="space-y-1 mt-2">
                      {step.courses.map((course, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          {step.completed ? (
                            <CheckCircle2 className="h-3 w-3 text-green-500" />
                          ) : step.active && idx === 0 ? (
                            <div className="h-3 w-3 rounded-full bg-primary" />
                          ) : (
                            <Circle className="h-3 w-3 text-muted-foreground/50" />
                          )}
                          <span className="text-xs">{course}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
