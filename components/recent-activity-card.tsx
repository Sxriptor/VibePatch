import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronRight, Code, BookOpen, CheckCircle2, Trophy, MessageSquare } from "lucide-react"

export function RecentActivityCard() {
  const activities = [
    {
      id: 1,
      type: "course_progress",
      title: "Completed lesson: React Hooks Deep Dive",
      course: "Frontend Fundamentals",
      time: "2 hours ago",
      icon: BookOpen,
      iconColor: "text-blue-500",
      iconBg: "bg-blue-500/10",
    },
    {
      id: 2,
      type: "code_submission",
      title: "Submitted code challenge: API Integration",
      course: "Backend Development",
      time: "Yesterday",
      icon: Code,
      iconColor: "text-purple-500",
      iconBg: "bg-purple-500/10",
    },
    {
      id: 3,
      type: "achievement",
      title: "Earned badge: 7-Day Streak",
      description: "Keep up the momentum!",
      time: "2 days ago",
      icon: Trophy,
      iconColor: "text-yellow-500",
      iconBg: "bg-yellow-500/10",
    },
    {
      id: 4,
      type: "forum_post",
      title: "Posted in forum: Next.js Routing Question",
      description: "How do I implement nested dynamic routes?",
      time: "3 days ago",
      icon: MessageSquare,
      iconColor: "text-green-500",
      iconBg: "bg-green-500/10",
    },
    {
      id: 5,
      type: "assessment",
      title: "Passed assessment: JavaScript Fundamentals",
      score: "92%",
      time: "4 days ago",
      icon: CheckCircle2,
      iconColor: "text-green-500",
      iconBg: "bg-green-500/10",
    },
  ]

  return (
    <Card className="border-none bg-background/60 backdrop-blur-lg shadow-sm">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle>Recent Activity</CardTitle>
          <Button variant="ghost" size="sm" className="gap-1 text-sm">
            View All <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex gap-4">
              <div
                className={`flex-shrink-0 ${activity.iconBg} p-2 rounded-full h-10 w-10 flex items-center justify-center`}
              >
                <activity.icon className={`h-5 w-5 ${activity.iconColor}`} />
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-medium">{activity.title}</h4>
                {activity.course && <p className="text-xs text-muted-foreground mt-1">Course: {activity.course}</p>}
                {activity.description && <p className="text-xs text-muted-foreground mt-1">{activity.description}</p>}
                {activity.score && (
                  <p className="text-xs text-muted-foreground mt-1">
                    Score: <span className="text-green-500 font-medium">{activity.score}</span>
                  </p>
                )}
                <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
