"use client"

import Link from "next/link"
import { useState } from "react"
import { usePathname } from "next/navigation"
import { Beaker, BookOpen, Compass, Edit, Flame, Menu, MessageSquare, Search, Users, X } from "lucide-react"

import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"

const navItems = [
  {
    name: "Discover",
    href: "/discover",
    icon: <Compass className="h-5 w-5" />,
  },
  {
    name: "Research",
    href: "/research",
    icon: <Beaker className="h-5 w-5" />,
  },
  {
    name: "Collaborators",
    href: "/collaborators",
    icon: <Users className="h-5 w-5" />,
  },
  {
    name: "Collaborate",
    href: "/collaborate",
    icon: <Edit className="h-5 w-5" />,
  },
  {
    name: "Mentors",
    href: "/mentors",
    icon: <BookOpen className="h-5 w-5" />,
  },
  {
    name: "Guilds",
    href: "/guilds",
    icon: <Flame className="h-5 w-5" />,
  },
  {
    name: "Messages",
    href: "/messages",
    icon: <MessageSquare className="h-5 w-5" />,
  },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Button variant="ghost" className="md:hidden" size="icon" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            <span className="sr-only">Toggle menu</span>
          </Button>
          <Link href="/" className="flex items-center gap-2">
            <Beaker className="h-6 w-6 text-primary" />
            <span className="font-bold text-xl">ResearchNexus</span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary",
                pathname === item.href ? "text-primary" : "text-muted-foreground",
              )}
            >
              {item.icon}
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="hidden md:flex">
            <Search className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Button>
          <ModeToggle />
          <Avatar>
            <AvatarImage src="/placeholder.svg" alt="User" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden container py-4 animate-fade-in">
          <nav className="grid gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary p-2 rounded-md",
                  pathname === item.href ? "bg-secondary text-primary" : "text-muted-foreground",
                )}
                onClick={() => setIsOpen(false)}
              >
                {item.icon}
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}

