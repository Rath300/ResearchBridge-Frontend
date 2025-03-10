"use client"

import { useState } from "react"
import { Search, Edit, Phone, Video, Info, Paperclip, Send, Smile, ImageIcon, MessageSquare } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { formatDate } from "@/lib/utils"

interface Conversation {
  id: string;
  type: 'direct' | 'group';
  name?: string;
  with?: {
    id: string;
    name: string;
    avatar?: string;
  };
  lastMessage?: {
    text: string;
    timestamp: string;
  };
  unread?: number;
}

// Mock data for conversations
const conversations: Conversation[] = [
  {
    id: "1",
    type: "direct",
    with: {
      id: "user1",
      name: "Alex Chen",
      avatar: "/placeholder.svg",
      status: "online",
      lastSeen: new Date(),
    },
    messages: [
      {
        id: "msg1",
        sender: "user1",
        content: "Hey, have you reviewed the latest data from our microplastics samples?",
        timestamp: new Date(Date.now() - 3600000 * 2),
        read: true,
      },
      {
        id: "msg2",
        sender: "current-user",
        content: "Yes, I've been analyzing it. The concentration levels are higher than we expected.",
        timestamp: new Date(Date.now() - 3600000),
        read: true,
      },
      {
        id: "msg3",
        sender: "user1",
        content: "That's concerning. Do you think we should expand our sampling locations?",
        timestamp: new Date(Date.now() - 1800000),
        read: true,
      },
      {
        id: "msg4",
        sender: "current-user",
        content: "Definitely. I'm thinking we should add at least 3 more collection points downstream.",
        timestamp: new Date(Date.now() - 900000),
        read: true,
      },
    ],
    unread: 0,
  },
  {
    id: "2",
    type: "direct",
    with: {
      id: "user2",
      name: "Maya Patel",
      avatar: "/placeholder.svg",
      status: "offline",
      lastSeen: new Date(Date.now() - 86400000),
    },
    messages: [
      {
        id: "msg5",
        sender: "user2",
        content: "I've updated the methodology section in our paper. Could you review it?",
        timestamp: new Date(Date.now() - 86400000 * 2),
        read: true,
      },
    ],
    unread: 0,
  },
  {
    id: "3",
    type: "group",
    name: "Microplastics Research Team",
    members: [
      { id: "user1", name: "Alex Chen", avatar: "/placeholder.svg" },
      { id: "user2", name: "Maya Patel", avatar: "/placeholder.svg" },
      { id: "user3", name: "Jordan Taylor", avatar: "/placeholder.svg" },
      { id: "current-user", name: "You", avatar: "/placeholder.svg" },
    ],
    messages: [
      {
        id: "msg6",
        sender: "user1",
        content: "Team meeting tomorrow at 4pm to discuss our findings.",
        timestamp: new Date(Date.now() - 86400000),
        read: true,
      },
      {
        id: "msg7",
        sender: "user3",
        content: "I'll prepare the presentation with our latest results.",
        timestamp: new Date(Date.now() - 43200000),
        read: false,
      },
      {
        id: "msg8",
        sender: "user2",
        content: "Great! I'll review the statistical analysis section.",
        timestamp: new Date(Date.now() - 21600000),
        read: false,
      },
    ],
    unread: 2,
  },
  {
    id: "4",
    type: "direct",
    with: {
      id: "user3",
      name: "Jordan Taylor",
      avatar: "/placeholder.svg",
      status: "online",
      lastSeen: new Date(),
    },
    messages: [
      {
        id: "msg9",
        sender: "user3",
        content: "I've created a new visualization for our data. Check it out when you have time.",
        timestamp: new Date(Date.now() - 7200000),
        read: false,
      },
    ],
    unread: 1,
  },
  {
    id: "5",
    type: "group",
    name: "ML Algorithm Development",
    members: [
      { id: "user4", name: "Sophia Chen", avatar: "/placeholder.svg" },
      { id: "user5", name: "Marcus Johnson", avatar: "/placeholder.svg" },
      { id: "current-user", name: "You", avatar: "/placeholder.svg" },
    ],
    messages: [
      {
        id: "msg10",
        sender: "user4",
        content: "I've pushed the updated model to our repository. It's achieving 87% accuracy now.",
        timestamp: new Date(Date.now() - 172800000),
        read: true,
      },
    ],
    unread: 0,
  },
]

export default function MessagesPage() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Messages</h1>
        <div className="grid gap-6">
          <div className="p-6 border rounded-lg">
            <h2 className="text-2xl font-semibold mb-2">Coming Soon</h2>
            <p className="text-gray-600">
              The messaging feature is currently under development. Check back soon to communicate with other researchers.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

