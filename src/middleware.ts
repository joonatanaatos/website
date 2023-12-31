import { NextRequest, NextResponse } from 'next/server';
import { fallbackLng, locales } from './i18n/settings';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  if (
    pathname.startsWith(`/${fallbackLng}/`) ||
    pathname === `/${fallbackLng}`
  ) {
    return NextResponse.redirect(
      new URL(
        pathname.replace(
          `/${fallbackLng}`,
          pathname === `/${fallbackLng}` ? '/' : '',
        ),
        request.url,
      ),
    );
  }

  const pathnameIsMissingLocale = locales.every(
    (locale) =>
      !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
  );

  if (pathnameIsMissingLocale && !pathname.startsWith('/documents')) {
    return NextResponse.rewrite(
      new URL(`/${fallbackLng}${pathname}`, request.url),
    );
  }
}

export const config = {
  matcher:
    '/((?!api|_next/static|_next/image|manifest.json|assets|favicon.ico).*)',
};
