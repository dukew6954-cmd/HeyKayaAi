'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { DashboardLayout } from '@/components/dashboard/DashboardLayout'
import { DashboardOverview } from '@/components/dashboard/DashboardOverview'
import { CallAnalytics } from '@/components/dashboard/CallAnalytics'
import { RecentCalls } from '@/components/dashboard/RecentCalls'
import { QuickActions } from '@/components/dashboard/QuickActions'

export default function DashboardPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (status === 'loading') return

    if (!session) {
      router.push('/auth/signin')
    } else {
      setIsLoading(false)
    }
  }, [session, status, router])

  if (status === 'loading' || isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-teal-50 via-emerald-50 to-teal-100 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <div className="w-16 h-16 border-4 border-teal-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading your dashboard...</p>
        </motion.div>
      </div>
    )
  }

  if (!session) {
    return null
  }

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-teal-500 to-emerald-500 rounded-2xl p-8 text-white"
        >
          <h1 className="text-3xl font-bold mb-2">
            Welcome back, {session.user?.name || 'User'}! 👋
          </h1>
          <p className="text-teal-100 text-lg">
            Your AI receptionist is ready to handle calls 24/7. Here's what's happening today.
          </p>
        </motion.div>

        {/* Dashboard Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <DashboardOverview />
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Call Analytics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2"
          >
            <CallAnalytics />
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <QuickActions />
          </motion.div>
        </div>

        {/* Recent Calls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <RecentCalls />
        </motion.div>
      </div>
    </DashboardLayout>
  )
}
