"use client"

import { BookOpen, Code, Users, Star, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RecentActivityCard } from "@/components/recent-activity-card"
import { CourseCard } from "@/components/course-card"
import { StatCard } from "@/components/stat-card"
import { LearningPathCard } from "@/components/learning-path-card"
import { UpcomingEventsCard } from "@/components/upcoming-events-card"
import { AchievementsCard } from "@/components/achievements-card"
import { RecommendedResourcesCard } from "@/components/recommended-resources-card"

export function DashboardTab() {
  return (
    <div className="h-full pl-4 md:pl-6 pr-0 py-4 md:py-6 space-y-6 overflow-auto">
      <div className="flex flex-col gap-2 pr-4 md:pr-6">
        <h1 className="text-2xl font-bold tracking-tight">Welcome back, John!</h1>
        <p className="text-muted-foreground">Continue your learning journey and track your progress.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pr-4 md:pr-6">
        <StatCard
          title="Course Progress"
          value="68%"
          description="12 of 18 courses completed"
          icon={BookOpen}
          trend="+5% from last week"
          trendUp={true}
        />
        <StatCard
          title="Coding Hours"
          value="42h"
          description="This month"
          icon={Code}
          trend="+8h from last month"
          trendUp={true}
        />
        <StatCard
          title="Achievements"
          value="24"
          description="8 badges this month"
          icon={Star}
          trend="3 new this week"
          trendUp={true}
        />
        <StatCard
          title="Community Rank"
          value="#42"
          description="Top 5% of all users"
          icon={Users}
          trend="Up 12 positions"
          trendUp={true}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pr-4 md:pr-6">
        <div className="lg:col-span-2 space-y-6">
          <Tabs defaultValue="in-progress" className="w-full">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">Your Courses</h2>
              <TabsList>
                <TabsTrigger value="in-progress">In Progress</TabsTrigger>
                <TabsTrigger value="completed">Completed</TabsTrigger>
                <TabsTrigger value="bookmarked">Bookmarked</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="in-progress" className="m-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <CourseCard
                  title="Frontend Fundamentals"
                  description="Master modern web development with React and Next.js"
                  image="/placeholder.svg?height=200&width=400"
                  progress={75}
                  category="Web Development"
                  duration="12h remaining"
                  instructor="Sarah Johnson"
                />
                <CourseCard
                  title="AI/ML Integration"
                  description="Learn to integrate AI models into your applications"
                  image="/placeholder.svg?height=200&width=400"
                  progress={45}
                  category="Artificial Intelligence"
                  duration="8h remaining"
                  instructor="Michael Chen"
                />
                <CourseCard
                  title="Startup Strategy"
                  description="Build and scale your tech startup from zero to one"
                  image="/placeholder.svg?height=200&width=400"
                  progress={30}
                  category="Business"
                  duration="15h remaining"
                  instructor="Alex Rivera"
                />
                <CourseCard
                  title="Database Design"
                  description="Design efficient and scalable database architectures"
                  image="/placeholder.svg?height=200&width=400"
                  progress={60}
                  category="Backend"
                  duration="6h remaining"
                  instructor="Lisa Wong"
                />
              </div>
            </TabsContent>

            <TabsContent value="completed" className="m-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <CourseCard
                  title="HTML & CSS Basics"
                  description="Learn the fundamentals of web development"
                  image="/placeholder.svg?height=200&width=400"
                  progress={100}
                  category="Web Development"
                  duration="Completed"
                  instructor="David Miller"
                />
                <CourseCard
                  title="JavaScript Essentials"
                  description="Master the core concepts of JavaScript"
                  image="/placeholder.svg?height=200&width=400"
                  progress={100}
                  category="Programming"
                  duration="Completed"
                  instructor="Emma Wilson"
                />
              </div>
            </TabsContent>

            <TabsContent value="bookmarked" className="m-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <CourseCard
                  title="Product Development"
                  description="Learn to build products users will love"
                  image="/placeholder.svg?height=200&width=400"
                  progress={0}
                  category="Product"
                  duration="Not started"
                  instructor="James Peterson"
                />
                <CourseCard
                  title="Marketing & Growth"
                  description="Strategies for growing your user base"
                  image="/placeholder.svg?height=200&width=400"
                  progress={0}
                  category="Marketing"
                  duration="Not started"
                  instructor="Sophia Garcia"
                />
              </div>
            </TabsContent>
          </Tabs>

          <LearningPathCard />

          <RecentActivityCard />
        </div>

        <div className="space-y-6">
          <UpcomingEventsCard />

          <AchievementsCard />

          <RecommendedResourcesCard />
        </div>
      </div>

      <div className="fixed bottom-6 right-6 z-40">
        <div className="relative">
          <Button
            size="icon"
            className="h-14 w-14 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
          >
            <Sparkles className="h-6 w-6" />
          </Button>
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
            3
          </span>
        </div>
      </div>
    </div>
  )
} 