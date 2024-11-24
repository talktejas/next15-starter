'use client'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
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
  Plus,
  Menu
} from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

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
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className={cn("flex flex-col bg-sidebar", className)}>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="lg:hidden">
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-[240px] p-0">
          <SidebarContent />
        </SheetContent>
      </Sheet>
      <aside className="hidden lg:flex">
        <SidebarContent />
      </aside>
    </nav>
  )
}

function SidebarContent() {
  const pathname = usePathname()
  
  return (
    <div className="flex h-screen w-16 flex-col justify-between border-r bg-background py-3">
      {/* Top section */}
      <div className="flex flex-col items-center space-y-4">
        {/* Logo */}
        <div className="flex h-12 w-12 items-center justify-center">
          <Button variant="ghost" size="icon" className="h-12 w-12 rounded-xl">
            <Plus className="h-6 w-6" />
          </Button>
        </div>

        {/* Main menu items */}
        <div className="flex flex-col items-center space-y-2">
          {sidebarItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex h-10 w-10 items-center justify-center rounded-xl transition-colors',
                pathname === item.href
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:bg-muted hover:text-foreground'
              )}
              title={item.title}
            >
              <item.icon className="h-5 w-5" />
            </Link>
          ))}
        </div>
      </div>

      {/* Bottom section */}
      <div className="flex flex-col items-center space-y-2">
        {bottomItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              'flex h-10 w-10 items-center justify-center rounded-xl transition-colors',
              pathname === item.href
                ? 'bg-primary text-primary-foreground'
                : 'text-muted-foreground hover:bg-muted hover:text-foreground'
            )}
            title={item.title}
          >
            <item.icon className="h-5 w-5" />
          </Link>
        ))}
      </div>
    </div>
  )
}
