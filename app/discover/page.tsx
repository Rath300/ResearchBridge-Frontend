import Image from "next/image"
import { BookmarkPlus, MessageSquare, ThumbsUp } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { formatDate } from "@/lib/utils"

// Mock data for research posts
const researchPosts = [
  {
    id: "1",
    title: "The Effects of Climate Change on Butterfly Migration Patterns",
    excerpt:
      "Our study tracked monarch butterfly migration over three years, revealing significant shifts in timing and routes due to changing climate conditions.",
    author: {
      name: "Alex Chen",
      avatar: "/placeholder.svg",
      school: "Oakridge High School",
    },
    image: "/placeholder.svg?height=300&width=600",
    likes: 124,
    comments: 32,
    date: "2023-11-15",
    tags: ["Climate Change", "Ecology", "Migration"],
  },
  {
    id: "2",
    title: "Developing a Machine Learning Algorithm to Predict Protein Folding",
    excerpt:
      "We created a novel ML approach that predicts protein structures with 87% accuracy, potentially accelerating drug discovery processes.",
    author: {
      name: "Maya Patel",
      avatar: "/placeholder.svg",
      school: "Westview Academy",
    },
    image: "/placeholder.svg?height=300&width=600",
    likes: 98,
    comments: 17,
    date: "2023-12-02",
    tags: ["Machine Learning", "Biochemistry", "Proteins"],
  },
  {
    id: "3",
    title: "The Psychological Impact of Social Media on Adolescents",
    excerpt:
      "Our research surveyed 500 high school students to analyze correlations between social media usage patterns and reported anxiety levels.",
    author: {
      name: "Jordan Taylor",
      avatar: "/placeholder.svg",
      school: "Riverside High",
    },
    image: "/placeholder.svg?height=300&width=600",
    likes: 156,
    comments: 45,
    date: "2023-10-28",
    tags: ["Psychology", "Social Media", "Mental Health"],
  },
  {
    id: "4",
    title: "Developing Biodegradable Plastics from Agricultural Waste",
    excerpt:
      "We successfully created a biodegradable plastic alternative using corn husks and other agricultural byproducts that decomposes in under 6 months.",
    author: {
      name: "Liam Johnson",
      avatar: "/placeholder.svg",
      school: "Greenfield Academy",
    },
    image: "/placeholder.svg?height=300&width=600",
    likes: 112,
    comments: 29,
    date: "2023-11-05",
    tags: ["Materials Science", "Sustainability", "Bioplastics"],
  },
]

export default function DiscoverPage() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Discover Research Projects</h1>
        <div className="grid gap-6">
          <div className="p-6 border rounded-lg">
            <h2 className="text-2xl font-semibold mb-2">Coming Soon</h2>
            <p className="text-gray-600">
              The discover feature is currently under development. Check back soon to explore research projects and find collaborators.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}

