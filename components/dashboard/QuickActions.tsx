'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  Plus, 
  Settings, 
  FileText, 
  Users, 
  Phone, 
  MessageSquare,
  BarChart3,
  Download
} from 'lucide-react'

const actions = [
  {
    name: 'Add FAQ',
    description: 'Create new frequently asked questions',
    icon: FileText,
    href: '/dashboard/faqs/new',
    color: 'bg-blue-500',
  },
  {
    name: 'Create Workflow',
    description: 'Set up automated call handling rules',
    icon: Users,
    href: '/dashboard/workflows/new',
    color: 'bg-green-500',
  },
  {
    name: 'View Analytics',
    description: 'Check detailed performance metrics',
    icon: BarChart3,
    href: '/dashboard/analytics',
    color: 'bg-purple-500',
  },
  {
    name: 'Call Settings',
    description: 'Configure AI greeting and behavior',
    icon: Phone,
    href: '/dashboard/settings/calls',
    color: 'bg-orange-500',
  },
  {
    name: 'Export Data',
    description: 'Download call logs and reports',
    icon: Download,
    href: '/dashboard/export',
    color: 'bg-teal-500',
  },
  {
    name: 'System Settings',
    description: 'Manage integrations and preferences',
    icon: Settings,
    href: '/dashboard/settings',
    color: 'bg-gray-500',
  },
]

export function QuickActions() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Quick Actions</h3>
          <p className="text-sm text-gray-600">Common tasks and shortcuts</p>
        </div>
        <div className="w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center">
          <Plus className="w-4 h-4 text-teal-600" />
        </div>
      </div>

      <div className="space-y-3">
        {actions.map((action, index) => {
          const Icon = action.icon
          return (
            <motion.div
              key={action.name}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                href={action.href}
                className="flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200 group"
              >
                <div className={`w-10 h-10 ${action.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 group-hover:text-teal-600 transition-colors">
                    {action.name}
                  </p>
                  <p className="text-xs text-gray-500 truncate">
                    {action.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          )
        })}
      </div>

      {/* Recent Activity */}
      <div className="mt-8 pt-6 border-t border-gray-200">
        <h4 className="text-sm font-medium text-gray-900 mb-4">Recent Activity</h4>
        <div className="space-y-3">
          <div className="flex items-center space-x-3 text-sm">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-gray-600">New FAQ added: "Business Hours"</span>
            <span className="text-gray-400">2m ago</span>
          </div>
          <div className="flex items-center space-x-3 text-sm">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span className="text-gray-600">Workflow "VIP Callers" updated</span>
            <span className="text-gray-400">15m ago</span>
          </div>
          <div className="flex items-center space-x-3 text-sm">
            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
            <span className="text-gray-600">Call volume report generated</span>
            <span className="text-gray-400">1h ago</span>
          </div>
        </div>
      </div>
    </div>
  )
}
