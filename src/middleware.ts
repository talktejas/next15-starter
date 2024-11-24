import createMiddleware from 'next-intl/middleware';

// Specify the supported locales
export const locales = ['en', 'ar'];
export const defaultLocale = 'en';

export default createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'ar'],
  // If this locale is matched, pathnames work without a prefix (e.g. `/about`)
  defaultLocale: 'en',
  // Prefix all locales with their identifier (e.g. `/en/about`)
  localePrefix: 'always'
});

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(ar|en)/:path*']
};