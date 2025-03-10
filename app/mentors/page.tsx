import Link from "next/link"
import { BookOpen, Calendar, MessageSquare, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

// Mock data for mentors
const mentors = [
  {
    id: "1",
    name: "Dr. Sarah Johnson",
    avatar: "/placeholder.svg",
    title: "Associate Professor of Biochemistry",
    institution: "Stanford University",
    specialties: ["Molecular Biology", "Genetics", "CRISPR"],
    bio: "Researching novel applications of CRISPR technology in treating genetic disorders. Passionate about mentoring the next generation of scientists.",
    rating: 4.9,
    reviews: 28,
    availability: "2-3 hours/week",
  },
  {
    id: "2",
    name: "Prof. Michael Chen",
    avatar: "/placeholder.svg",
    title: "Assistant Professor of Computer Science",
    institution: "MIT",
    specialties: ["Machine Learning", "Computer Vision", "AI Ethics"],
    bio: "Working at the intersection of AI and healthcare. Interested in guiding students on projects related to ethical AI applications.",
    rating: 4.7,
    reviews: 35,
    availability: "1-2 hours/week",
  },
  {
    id: "3",
    name: "Dr. Amara Patel",
    avatar: "/placeholder.svg",
    title: "Research Scientist",
    institution: "NASA Jet Propulsion Laboratory",
    specialties: ["Astrophysics", "Planetary Science", "Data Analysis"],
    bio: "Currently working on Mars rover data analysis. Excited to help students explore space science and astronomy research.",
    rating: 4.8,
    reviews: 19,
    availability: "3-4 hours/week",
  },
  {
    id: "4",
    name: "Dr. James Wilson",
    avatar: "/placeholder.svg",
    title: "Professor of Environmental Science",
    institution: "UC Berkeley",
    specialties: ["Climate Science", "Sustainability", "Ecology"],
    bio: "Leading research on climate change impacts on coastal ecosystems. Committed to supporting young researchers interested in environmental solutions.",
    rating: 4.6,
    reviews: 31,
    availability: "2-3 hours/week",
  },
  {
    id: "5",
    name: "Dr. Elena Rodriguez",
    avatar: "/placeholder.svg",
    title: "Neuroscientist",
    institution: "Harvard Medical School",
    specialties: ["Neuroscience", "Cognitive Psychology", "Brain Imaging"],
    bio: "Studying the neural basis of learning and memory. Enjoys mentoring students interested in brain science and psychology.",
    rating: 4.9,
    reviews: 24,
    availability: "1-2 hours/week",
  },
  {
    id: "6",
    name: "Prof. David Kim",
    avatar: "/placeholder.svg",
    title: "Associate Professor of Physics",
    institution: "Caltech",
    specialties: ["Quantum Physics", "Theoretical Physics", "Computational Modeling"],
    bio: "Researching quantum computing applications. Looking to mentor students with strong math backgrounds interested in theoretical physics.",
    rating: 4.8,
    reviews: 22,
    availability: "2-3 hours/week",
  },
]

export default function MentorsPage() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Research Mentors</h1>
        <div className="grid gap-6">
          <div className="p-6 border rounded-lg">
            <h2 className="text-2xl font-semibold mb-2">Coming Soon</h2>
            <p className="text-gray-600">
              The mentors feature is currently under development. Check back soon to connect with experienced research mentors.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

