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
import { Link } from '@/i18n/routing'
import { useState } from 'react'
import { useTranslations } from 'next-intl'

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
  const t = useTranslations('Navigation')

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
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground font-semibold">
            YB
          </div>
          <span className={cn(
            "font-semibold transition-all duration-300",
            isExpanded ? "opacity-100" : "opacity-0"
          )}>
            {t('brand')}
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

      <div className="flex flex-1 flex-col justify-between overflow-hidden p-3">
        {/* Main menu items */}
        <div className="space-y-1">
          {sidebarItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex h-10 items-center gap-3 rounded-lg px-3 transition-all',
                !isExpanded && 'justify-center',
                pathname === item.href
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:bg-muted hover:text-foreground'
              )}
              title={isExpanded ? undefined : t(item.title.toLowerCase())}
            >
              <item.icon className="h-5 w-5 min-w-5" />
              <span className={cn(
                "whitespace-nowrap transition-all duration-300",
                isExpanded ? "opacity-100" : "opacity-0 w-0"
              )}>
                {t(item.title.toLowerCase())}
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
                'flex h-10 items-center gap-3 rounded-lg px-3 transition-all',
                !isExpanded && 'justify-center',
                pathname === item.href
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:bg-muted hover:text-foreground'
              )}
              title={isExpanded ? undefined : t(item.title.toLowerCase())}
            >
              <item.icon className="h-5 w-5 min-w-5" />
              <span className={cn(
                "whitespace-nowrap transition-all duration-300",
                isExpanded ? "opacity-100" : "opacity-0 w-0"
              )}>
                {t(item.title.toLowerCase())}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
