'use client'

import { useUser, UserButton } from '@stackframe/stack'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function AuthNavbar() {
  const userData = useUser()
  
  // If Stack Auth is not ready, show sign-in buttons by default
  if (!userData) {
    return (
      <div className="hidden md:flex items-center space-x-4">
        <Button variant="outline" size="sm" asChild>
          <Link href="/pricing">See Pricing</Link>
        </Button>
        <Button variant="gradient" size="sm" asChild>
          <Link href="/auth/signin">Sign In</Link>
        </Button>
      </div>
    )
  }

  const { user, isLoading } = userData

  // Show loading state only briefly
  if (isLoading) {
    return (
      <div className="hidden md:flex items-center space-x-4">
        <div className="w-20 h-8 bg-gray-200 rounded animate-pulse"></div>
        <div className="w-20 h-8 bg-gray-200 rounded animate-pulse"></div>
      </div>
    )
  }

  if (user) {
    return (
      <div className="hidden md:flex items-center space-x-4">
        <Button variant="outline" size="sm" asChild>
          <Link href="/dashboard">Dashboard</Link>
        </Button>
        <UserButton 
          className="bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
        />
      </div>
    )
  }

  return (
    <div className="hidden md:flex items-center space-x-4">
      <Button variant="outline" size="sm" asChild>
        <Link href="/pricing">See Pricing</Link>
      </Button>
      <Button variant="gradient" size="sm" asChild>
        <Link href="/auth/signin">Sign In</Link>
      </Button>
    </div>
  )
}

export function AuthNavbarMobile({ onClose }: { onClose: () => void }) {
  const userData = useUser()
  
  // If Stack Auth is not ready, show sign-in buttons by default
  if (!userData) {
    return (
      <div className="pt-4 space-y-3">
        <Button variant="outline" className="w-full" asChild>
          <Link href="/pricing" onClick={onClose}>
            See Pricing
          </Link>
        </Button>
        <Button variant="gradient" className="w-full" asChild>
          <Link href="/auth/signin" onClick={onClose}>
            Sign In
          </Link>
        </Button>
      </div>
    )
  }

  const { user, isLoading } = userData

  // Show loading state only briefly
  if (isLoading) {
    return (
      <div className="pt-4 space-y-3">
        <div className="w-full h-10 bg-gray-200 rounded animate-pulse"></div>
        <div className="w-full h-10 bg-gray-200 rounded animate-pulse"></div>
      </div>
    )
  }

  if (user) {
    return (
      <div className="pt-4 space-y-3">
        <Button variant="outline" className="w-full" asChild>
          <Link href="/dashboard" onClick={onClose}>
            Dashboard
          </Link>
        </Button>
        <UserButton 
          className="w-full bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors"
        />
      </div>
    )
  }

  return (
    <div className="pt-4 space-y-3">
      <Button variant="outline" className="w-full" asChild>
        <Link href="/pricing" onClick={onClose}>
          See Pricing
        </Link>
      </Button>
      <Button variant="gradient" className="w-full" asChild>
        <Link href="/auth/signin" onClick={onClose}>
          Sign In
        </Link>
      </Button>
    </div>
  )
}
