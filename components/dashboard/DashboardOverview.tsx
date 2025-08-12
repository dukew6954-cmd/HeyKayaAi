'use client'

import { motion } from 'framer-motion'
import { Phone, MessageSquare, Clock, TrendingUp, Users, CheckCircle } from 'lucide-react'

const stats = [
  {
    name: 'Total Calls',
    value: '1,234',
    change: '+12%',
    changeType: 'positive',
    icon: Phone,
    color: 'bg-blue-500',
  },
  {
    name: 'Active Conversations',
    value: '89',
    change: '+5%',
    changeType: 'positive',
    icon: MessageSquare,
    color: 'bg-green-500',
  },
  {
    name: 'Avg Response Time',
    value: '2.3s',
    change: '-8%',
    changeType: 'positive',
    icon: Clock,
    color: 'bg-purple-500',
  },
  {
    name: 'Customer Satisfaction',
    value: '98%',
    change: '+2%',
    changeType: 'positive',
    icon: CheckCircle,
    color: 'bg-teal-500',
  },
  {
    name: 'New Leads',
    value: '45',
    change: '+18%',
    changeType: 'positive',
    icon: Users,
    color: 'bg-orange-500',
  },
  {
    name: 'Conversion Rate',
    value: '23%',
    change: '+7%',
    changeType: 'positive',
    icon: TrendingUp,
    color: 'bg-pink-500',
  },
]

export function DashboardOverview() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {stats.map((stat, index) => {
        const Icon = stat.icon
        return (
          <motion.div
            key={stat.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                <p className="text-3xl font-bold text-gray-900 mt-1">{stat.value}</p>
                <div className="flex items-center mt-2">
                  <span className={`text-sm font-medium ${
                    stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {stat.change}
                  </span>
                  <span className="text-sm text-gray-500 ml-1">from last month</span>
                </div>
              </div>
              <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center`}>
                <Icon className="w-6 h-6 text-white" />
              </div>
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}
