import { Play, Clock, User } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface CourseCardProps {
  title: string
  description: string
  image: string
  progress: number
  category: string
  duration: string
  instructor: string
}

export function CourseCard({ title, description, image, progress, category, duration, instructor }: CourseCardProps) {
  return (
    <Card className="overflow-hidden border-none bg-background/60 backdrop-blur-lg shadow-sm hover:shadow-md transition-all duration-200 group">
      <div className="relative">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
          <Badge variant="secondary" className="bg-primary/90 hover:bg-primary text-white">
            {category}
          </Badge>
        </div>
        {progress > 0 && progress < 100 && (
          <div className="absolute top-4 right-4">
            <div className="bg-black/70 text-white text-xs font-medium rounded-full px-2 py-1 backdrop-blur-sm">
              {progress}% Complete
            </div>
          </div>
        )}
        {progress === 100 && (
          <div className="absolute top-4 right-4">
            <div className="bg-green-500/90 text-white text-xs font-medium rounded-full px-2 py-1 backdrop-blur-sm">
              Completed
            </div>
          </div>
        )}
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg line-clamp-1">{title}</h3>
        <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{description}</p>

        <div className="flex items-center gap-2 mt-3 text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <User className="h-3 w-3" />
            <span>{instructor}</span>
          </div>
          <div className="w-1 h-1 rounded-full bg-muted-foreground/50" />
          <div className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            <span>{duration}</span>
          </div>
        </div>

        {progress > 0 && <Progress value={progress} className="h-1 mt-3" />}
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button className="w-full gap-2" variant={progress > 0 ? "default" : "outline"}>
          <Play className="h-4 w-4" />
          {progress > 0 ? "Continue Learning" : "Start Course"}
        </Button>
      </CardFooter>
    </Card>
  )
}
