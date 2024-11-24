import { Sidebar } from './sidebar'
import { Header } from './header'

export function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex min-h-screen">
      <Sidebar className="fixed left-0 top-0 z-20 h-screen" />
      <div className="flex-1 pl-16">
        <Header />
        <main className="container mt-16 px-4 py-6">
          {children}
        </main>
      </div>
    </div>
  )
} 