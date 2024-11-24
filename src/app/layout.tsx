import { ThemeProvider } from '@/providers/theme-provider'
import { headers } from 'next/headers'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Force dynamic rendering to avoid hydration mismatch
  headers()
  
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          suppressHydrationWarning
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
} 