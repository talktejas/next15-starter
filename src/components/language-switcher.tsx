'use client';

import { usePathname, useRouter } from 'next/navigation';
import { locales } from '@/middleware';

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();

  const currentLocale = pathname.split('/')[1];

  return (
    <select
      value={currentLocale}
      onChange={(e) => {
        const newLocale = e.target.value;
        const newPath = pathname.replace(`/${currentLocale}`, `/${newLocale}`);
        router.push(newPath);
      }}
    >
      {locales.map((locale) => (
        <option key={locale} value={locale}>
          {locale.toUpperCase()}
        </option>
      ))}
    </select>
  );
} 