import { MainLayout } from '@/components/layout/main-layout'
import { Suspense } from 'react'
import { headers } from 'next/headers'
import { use } from 'react'

interface HomePageProps {
  params: Promise<{
    locale: string
  }>
}

async function WelcomeMessage({ locale }: { locale: string }) {
  headers()
  return <h1>Welcome to the {locale} version</h1>
}

export default function HomePage({ params }: HomePageProps) {
  // Use React.use to unwrap the Promise
  const { locale } = use(params)
  
  return (
    <MainLayout>
      <div>
        <Suspense fallback={<h1>Loading...</h1>}>
          <WelcomeMessage locale={locale} />
        </Suspense>
      </div>
    </MainLayout>
  )
}

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'ar' }]
}
