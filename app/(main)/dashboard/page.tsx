'use client'

import { motion } from 'framer-motion'
import { useUser } from '@stackframe/stack'
import { DashboardLayout } from '@/components/dashboard/DashboardLayout'
import { DashboardOverview } from '@/components/dashboard/DashboardOverview'
import { CallAnalytics } from '@/components/dashboard/CallAnalytics'
import { RecentCalls } from '@/components/dashboard/RecentCalls'
import { QuickActions } from '@/components/dashboard/QuickActions'

export default function DashboardPage() {
  const userData = useUser()
  
  // Show loading state while checking authentication
  if (!userData || userData.isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-teal-50 via-emerald-50 to-teal-100 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-teal-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading your dashboard...</p>
        </div>
      </div>
    )
  }

  const { user } = userData

  // If not authenticated, show a simple message
  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-teal-50 via-emerald-50 to-teal-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Please sign in</h1>
          <p className="text-gray-600 mb-6">You need to be signed in to view the dashboard</p>
          <a 
            href="/auth/signin" 
            className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            Sign In
          </a>
        </div>
      </div>
    )
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
            Welcome back, {user.name || user.email || 'User'}! 👋
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
