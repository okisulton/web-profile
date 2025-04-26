import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Protect admin routes except login
  if (pathname.startsWith('/admin') && !pathname.includes('/login')) {
    const token = await getToken({ req: request });

    // Redirect to login if not authenticated
    if (!token) {
      const url = new URL('/admin/login', request.url);
      return NextResponse.redirect(url);
    }

    // Check for admin role
    if (token.role !== 'admin') {
      const url = new URL('/', request.url);
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};