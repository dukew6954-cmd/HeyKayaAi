import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { AuthService } from '@/lib/auth'

// Define protected routes
const protectedRoutes = [
  '/dashboard',
  '/api/dashboard',
  '/api/business',
  '/api/calls'
]

// Define auth routes
const authRoutes = [
  '/auth/signin',
  '/auth/signup'
]

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Check if route is protected
  const isProtectedRoute = protectedRoutes.some(route => 
    pathname.startsWith(route)
  )

  // Check if route is auth route
  const isAuthRoute = authRoutes.some(route => 
    pathname.startsWith(route)
  )

  // Get token from cookies
  const token = request.cookies.get('auth-token')?.value

  // If accessing protected route without token, redirect to login
  if (isProtectedRoute && !token) {
    const loginUrl = new URL('/auth/signin', request.url)
    loginUrl.searchParams.set('callbackUrl', pathname)
    return NextResponse.redirect(loginUrl)
  }

  // If accessing auth routes with valid token, redirect to dashboard
  if (isAuthRoute && token) {
    try {
      const user = await AuthService.verifyToken(token)
      if (user) {
        return NextResponse.redirect(new URL('/dashboard', request.url))
      }
    } catch (error) {
      // Token is invalid, continue to auth page
    }
  }

  // Add user info to headers for API routes
  if (pathname.startsWith('/api/') && token) {
    try {
      const user = await AuthService.verifyToken(token)
      if (user) {
        const requestHeaders = new Headers(request.headers)
        requestHeaders.set('x-user-id', user.id)
        requestHeaders.set('x-user-email', user.email)
        requestHeaders.set('x-user-role', user.role)

        return NextResponse.next({
          request: {
            headers: requestHeaders,
          },
        })
      }
    } catch (error) {
      // Token is invalid, continue without user headers
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!_next/static|_next/image|favicon.ico|public/).*)',
  ],
}
