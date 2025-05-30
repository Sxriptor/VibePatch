import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronRight, Calendar, Users, Video, Clock } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function UpcomingEventsCard() {
  const events = [
    {
      id: 1,
      title: "Live Q&A: Building AI-Powered Apps",
      date: "Today",
      time: "3:00 PM",
      duration: "1 hour",
      type: "webinar",
      participants: 128,
    },
    {
      id: 2,
      title: "Study Group: React Performance",
      date: "Tomorrow",
      time: "5:30 PM",
      duration: "1.5 hours",
      type: "group",
      participants: 12,
    },
    {
      id: 3,
      title: "Workshop: Startup Pitch Deck",
      date: "May 30",
      time: "2:00 PM",
      duration: "2 hours",
      type: "workshop",
      participants: 45,
    },
  ]

  const getEventIcon = (type: string) => {
    switch (type) {
      case "webinar":
        return <Video className="h-4 w-4" />
      case "group":
        return <Users className="h-4 w-4" />
      case "workshop":
        return <Calendar className="h-4 w-4" />
      default:
        return <Calendar className="h-4 w-4" />
    }
  }

  const getEventBadge = (type: string) => {
    switch (type) {
      case "webinar":
        return (
          <Badge variant="outline" className="bg-blue-500/10 text-blue-500 border-blue-500/20">
            Webinar
          </Badge>
        )
      case "group":
        return (
          <Badge variant="outline" className="bg-green-500/10 text-green-500 border-green-500/20">
            Study Group
          </Badge>
        )
      case "workshop":
        return (
          <Badge variant="outline" className="bg-purple-500/10 text-purple-500 border-purple-500/20">
            Workshop
          </Badge>
        )
      default:
        return <Badge variant="outline">Event</Badge>
    }
  }

  return (
    <Card className="border-none bg-background/60 backdrop-blur-lg shadow-sm">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle>Upcoming Events</CardTitle>
          <Button variant="ghost" size="sm" className="gap-1 text-sm">
            View All <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {events.map((event) => (
            <div key={event.id} className="flex flex-col gap-2 p-3 rounded-lg border bg-card">
              <div className="flex items-start justify-between">
                <h4 className="font-medium text-sm">{event.title}</h4>
                {getEventBadge(event.type)}
              </div>
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  <span>{event.time}</span>
                </div>
              </div>
              <div className="flex items-center justify-between mt-1">
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Users className="h-3 w-3" />
                  <span>{event.participants} participants</span>
                </div>
                <Button size="sm" variant="outline" className="h-7 text-xs">
                  Join
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
