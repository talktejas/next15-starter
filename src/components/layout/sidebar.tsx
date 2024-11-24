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
    <nav className={cn(
      "relative flex flex-col bg-sidebar border-r transition-all duration-300", 
      isExpanded ? "w-72" : "w-20", 
      className
    )}>
      <div className="flex h-16 items-center justify-between px-4">
        <div className={cn(
          "flex items-center gap-3 overflow-hidden",
          isExpanded ? "w-full" : "w-12"
        )}>
          {/* Replace with your logo */}
          <Image
            src="/logo.png"
            alt="Logo"
            width={40}
            height={40}
            className={cn(
              "rounded-xl transition-all duration-300",
              isExpanded ? "h-10 w-10 min-w-10" : "h-12 w-12 min-w-12"
            )}
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
          className={cn(
            "transition-all duration-300",
            isExpanded ? "h-10 w-10" : "h-12 w-12"
          )}
        >
          {isExpanded ? 
            <ChevronLeft className="h-5 w-5" /> : 
            <Menu className="h-6 w-6" />
          }
        </Button>
      </div>

      <div className="flex flex-1 flex-col justify-between overflow-hidden p-3">
        {/* Main menu items */}
        <div className="space-y-1">
          {sidebarItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex items-center gap-3 rounded-lg px-3 transition-all',
                !isExpanded && 'justify-center',
                isExpanded ? 'h-10' : 'h-12',
                pathname === item.href
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:bg-muted hover:text-foreground'
              )}
              title={isExpanded ? undefined : item.title}
            >
              <item.icon className={cn(
                "transition-all duration-300",
                isExpanded ? "h-5 w-5 min-w-5" : "h-6 w-6 min-w-6"
              )} />
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
        <div className="space-y-1">
          {bottomItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex items-center gap-3 rounded-lg px-3 transition-all',
                !isExpanded && 'justify-center',
                isExpanded ? 'h-10' : 'h-12',
                pathname === item.href
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:bg-muted hover:text-foreground'
              )}
              title={isExpanded ? undefined : item.title}
            >
              <item.icon className={cn(
                "transition-all duration-300",
                isExpanded ? "h-5 w-5 min-w-5" : "h-6 w-6 min-w-6"
              )} />
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
