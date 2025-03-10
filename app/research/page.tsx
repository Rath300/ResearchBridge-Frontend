import Link from "next/link"
import { Plus } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { formatDate } from "@/lib/utils"

// Mock data for research projects
const researchProjects = [
  {
    id: "1",
    title: "Effects of Microplastics on Freshwater Ecosystems",
    status: "In Progress",
    description:
      "Investigating the concentration and effects of microplastics in local lake ecosystems, with a focus on impact to fish populations.",
    members: 3,
    lastUpdated: "2023-12-10",
    progress: 65,
    category: "Environmental Science",
  },
  {
    id: "2",
    title: "Machine Learning for Early Disease Detection",
    status: "Planning",
    description:
      "Developing an algorithm to analyze patterns in medical data that could indicate early signs of cardiovascular disease.",
    members: 2,
    lastUpdated: "2023-12-15",
    progress: 20,
    category: "Computer Science & Medicine",
  },
  {
    id: "3",
    title: "Psychological Effects of Social Media Usage Patterns",
    status: "Data Collection",
    description:
      "Surveying high school students to analyze correlations between different social media usage patterns and mental health indicators.",
    members: 4,
    lastUpdated: "2023-12-08",
    progress: 45,
    category: "Psychology",
  },
  {
    id: "4",
    title: "Novel Approaches to Biodegradable Plastics",
    status: "Testing",
    description:
      "Testing new formulations of biodegradable plastics made from agricultural waste products for durability and decomposition rates.",
    members: 3,
    lastUpdated: "2023-12-12",
    progress: 80,
    category: "Materials Science",
  },
]

export default function ResearchPage() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Research Resources</h1>
        <div className="grid gap-6">
          <div className="p-6 border rounded-lg">
            <h2 className="text-2xl font-semibold mb-2">Coming Soon</h2>
            <p className="text-gray-600">
              The research resources feature is currently under development. Check back soon to access tools and resources for your research.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}

