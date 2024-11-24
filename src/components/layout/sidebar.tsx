'use client'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { usePathname } from 'next/navigation'
import {
  LayoutDashboard,
  Users,
  BarChart,
  ClipboardList,
  FolderKanban,
  MessageSquare,
  Settings,
  Bell,
  Menu,
  ChevronLeft
} from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import Image from 'next/image'

const sidebarItems = [
  {
    title: 'Dashboard',
    icon: LayoutDashboard,
    href: '/dashboard',
  },
  {
    title: 'Clients',
    icon: Users,
    href: '/clients',
  },
  {
    title: 'Reporting',
    icon: BarChart,
    href: '/reporting',
  },
  {
    title: 'Tasks',
    icon: ClipboardList,
    href: '/tasks',
  },
  {
    title: 'Projects',
    icon: FolderKanban,
    href: '/projects',
  },
  {
    title: 'Chat',
    icon: MessageSquare,
    href: '/chat',
  },
]

const bottomItems = [
  {
    title: 'Notifications',
    icon: Bell,
    href: '/notifications',
  },
  {
    title: 'Settings',
    icon: Settings,
    href: '/settings',
  },
]

interface SidebarProps {
  className?: string
}

export function Sidebar({ className }: SidebarProps) {
  const pathname = usePathname()
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <nav className={cn("relative flex flex-col bg-sidebar transition-all duration-300", 
      isExpanded ? "w-64" : "w-16", 
      className
    )}>
      <div className="flex h-16 items-center justify-between px-3">
        <div className={cn(
          "flex items-center gap-3 overflow-hidden",
          isExpanded ? "w-full" : "w-10"
        )}>
          {/* Replace with your logo */}
          <Image
            src="/logo.png" // Add your logo file
            alt="Logo"
            width={40}
            height={40}
            className="rounded-xl"
          />
          <span className={cn(
            "font-semibold transition-all duration-300",
            isExpanded ? "opacity-100" : "opacity-0"
          )}>
            Your Brand
          </span>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsExpanded(!isExpanded)}
          className="h-10 w-10"
        >
          {isExpanded ? <ChevronLeft className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      <div className="flex flex-1 flex-col justify-between overflow-hidden px-3 py-4">
        {/* Main menu items */}
        <div className="space-y-2">
          {sidebarItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex h-10 items-center gap-3 rounded-lg px-3 transition-all',
                pathname === item.href
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:bg-muted hover:text-foreground'
              )}
              title={isExpanded ? undefined : item.title}
            >
              <item.icon className="h-5 w-5" />
              <span className={cn(
                "whitespace-nowrap transition-all duration-300",
                isExpanded ? "opacity-100" : "opacity-0 w-0"
              )}>
                {item.title}
              </span>
            </Link>
          ))}
        </div>

        {/* Bottom items */}
        <div className="space-y-2">
          {bottomItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex h-10 items-center gap-3 rounded-lg px-3 transition-all',
                pathname === item.href
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:bg-muted hover:text-foreground'
              )}
              title={isExpanded ? undefined : item.title}
            >
              <item.icon className="h-5 w-5" />
              <span className={cn(
                "whitespace-nowrap transition-all duration-300",
                isExpanded ? "opacity-100" : "opacity-0 w-0"
              )}>
                {item.title}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
