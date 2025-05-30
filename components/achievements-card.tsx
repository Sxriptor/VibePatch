import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

export function AchievementsCard() {
  const achievements = [
    {
      id: 1,
      name: "Code Streak",
      description: "Coded for 7 consecutive days",
      icon: "🔥",
      progress: 7,
      total: 7,
      completed: true,
    },
    {
      id: 2,
      name: "Bug Hunter",
      description: "Fixed 10 bugs in your projects",
      icon: "🐛",
      progress: 8,
      total: 10,
      completed: false,
    },
    {
      id: 3,
      name: "AI Explorer",
      description: "Completed 5 AI integration exercises",
      icon: "🤖",
      progress: 3,
      total: 5,
      completed: false,
    },
    {
      id: 4,
      name: "Team Player",
      description: "Participated in 3 group projects",
      icon: "👥",
      progress: 2,
      total: 3,
      completed: false,
    },
  ]

  return (
    <Card className="border-none bg-background/60 backdrop-blur-lg shadow-sm">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle>Achievements</CardTitle>
          <Button variant="ghost" size="sm" className="gap-1 text-sm">
            View All <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-3">
          {achievements.map((achievement) => (
            <div
              key={achievement.id}
              className={`flex flex-col items-center justify-center p-3 rounded-lg border ${
                achievement.completed ? "bg-primary/5 border-primary/20" : "bg-card border-border"
              }`}
            >
              <div className="text-2xl mb-1">{achievement.icon}</div>
              <h4 className="font-medium text-sm text-center">{achievement.name}</h4>
              <p className="text-xs text-muted-foreground text-center mt-1 line-clamp-2">{achievement.description}</p>
              <div className="w-full mt-2 flex items-center justify-center gap-1">
                <span className="text-xs font-medium">
                  {achievement.progress}/{achievement.total}
                </span>
                {achievement.completed && <span className="text-xs text-green-500">✓</span>}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
