import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Beaker, BookOpen, Flame, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold">ResearchBridge</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link 
            href="/discover" 
            className="p-6 border rounded-lg hover:shadow-lg transition-shadow"
          >
            <h2 className="text-2xl font-semibold mb-2">Discover</h2>
            <p className="text-gray-600">Find research projects and collaborators</p>
          </Link>

          <Link 
            href="/collaborate" 
            className="p-6 border rounded-lg hover:shadow-lg transition-shadow"
          >
            <h2 className="text-2xl font-semibold mb-2">Collaborate</h2>
            <p className="text-gray-600">Work together on research projects</p>
          </Link>

          <Link 
            href="/mentors" 
            className="p-6 border rounded-lg hover:shadow-lg transition-shadow"
          >
            <h2 className="text-2xl font-semibold mb-2">Mentors</h2>
            <p className="text-gray-600">Connect with research mentors</p>
          </Link>

          <Link 
            href="/research" 
            className="p-6 border rounded-lg hover:shadow-lg transition-shadow"
          >
            <h2 className="text-2xl font-semibold mb-2">Research</h2>
            <p className="text-gray-600">Access research resources and tools</p>
          </Link>
        </div>
      </div>
    </main>
  )
}

