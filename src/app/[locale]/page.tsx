import { MainLayout } from '@/components/layout/main-layout'
import { useTranslations } from 'next-intl';

export default function HomePage() {
  const t = useTranslations('HomePage');
  
  return (
    <MainLayout>
      <div>
        <h1>{t('title')}</h1>
        <p>{t('about')}</p>
      </div>
    </MainLayout>
  )
}
