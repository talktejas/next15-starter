import { ReactNode } from 'react'

interface LocaleLayoutProps {
  children: ReactNode
  params: {
    locale: string
  }
}

export default async function LocaleLayout({
  children,
  params
}: LocaleLayoutProps) {
  return children
}

// Generate static params for locales
export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'fr' }] // add more locales as needed
}