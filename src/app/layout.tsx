import { ThemeProvider } from '@/providers/theme-provider'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      suppressHydrationWarning
    >
      {children}
    </ThemeProvider>
  )
} 