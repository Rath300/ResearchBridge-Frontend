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
    <div className="container py-8">
      <div className="flex flex-col gap-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">My Research Projects</h1>
            <p className="text-muted-foreground">Track and manage your ongoing research projects</p>
          </div>
          <Button asChild>
            <Link href="/research/new">
              <Plus className="h-4 w-4 mr-2" />
              New Project
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {researchProjects.map((project) => (
            <Card key={project.id} className="card-hover">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="line-clamp-2">{project.title}</CardTitle>
                    <CardDescription>{project.category}</CardDescription>
                  </div>
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      project.status === "In Progress"
                        ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
                        : project.status === "Planning"
                          ? "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300"
                          : project.status === "Data Collection"
                            ? "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300"
                            : "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground line-clamp-3 mb-4">{project.description}</p>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Progress</span>
                      <span>{project.progress}%</span>
                    </div>
                    <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                      <div className="h-full bg-primary" style={{ width: `${project.progress}%` }} />
                    </div>
                  </div>
                  <div className="flex justify-between text-sm">
                    <div>
                      <span className="text-muted-foreground">Team:</span> {project.members} members
                    </div>
                    <div>
                      <span className="text-muted-foreground">Updated:</span> {formatDate(project.lastUpdated)}
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <Link href={`/research/${project.id}`}>View Project</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

