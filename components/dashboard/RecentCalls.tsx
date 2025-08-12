'use client'

import { motion } from 'framer-motion'
import { Phone, PhoneIncoming, PhoneOutgoing, PhoneMissed, Clock, User, MessageSquare } from 'lucide-react'
import Link from 'next/link'

const recentCalls = [
  {
    id: '1',
    callerName: 'John Smith',
    callerNumber: '+1 (555) 123-4567',
    duration: '4m 23s',
    status: 'answered',
    timestamp: '2 minutes ago',
    sentiment: 'positive',
    intent: 'appointment_booking',
  },
  {
    id: '2',
    callerName: 'Sarah Johnson',
    callerNumber: '+1 (555) 987-6543',
    duration: '2m 15s',
    status: 'answered',
    timestamp: '15 minutes ago',
    sentiment: 'neutral',
    intent: 'general_inquiry',
  },
  {
    id: '3',
    callerName: 'Mike Wilson',
    callerNumber: '+1 (555) 456-7890',
    duration: '0s',
    status: 'missed',
    timestamp: '1 hour ago',
    sentiment: null,
    intent: null,
  },
  {
    id: '4',
    callerName: 'Lisa Brown',
    callerNumber: '+1 (555) 321-0987',
    duration: '6m 45s',
    status: 'answered',
    timestamp: '2 hours ago',
    sentiment: 'positive',
    intent: 'complaint_resolution',
  },
  {
    id: '5',
    callerName: 'David Lee',
    callerNumber: '+1 (555) 789-0123',
    duration: '1m 30s',
    status: 'answered',
    timestamp: '3 hours ago',
    sentiment: 'negative',
    intent: 'billing_inquiry',
  },
]

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'answered':
      return PhoneIncoming
    case 'missed':
      return PhoneMissed
    case 'outgoing':
      return PhoneOutgoing
    default:
      return Phone
  }
}

const getStatusColor = (status: string) => {
  switch (status) {
    case 'answered':
      return 'text-green-600 bg-green-100'
    case 'missed':
      return 'text-red-600 bg-red-100'
    case 'outgoing':
      return 'text-blue-600 bg-blue-100'
    default:
      return 'text-gray-600 bg-gray-100'
  }
}

const getSentimentColor = (sentiment: string | null) => {
  switch (sentiment) {
    case 'positive':
      return 'text-green-600'
    case 'negative':
      return 'text-red-600'
    case 'neutral':
      return 'text-yellow-600'
    default:
      return 'text-gray-400'
  }
}

export function RecentCalls() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Recent Calls</h3>
            <p className="text-sm text-gray-600">Latest call activity and conversations</p>
          </div>
          <Link
            href="/dashboard/calls"
            className="text-sm font-medium text-teal-600 hover:text-teal-700 transition-colors"
          >
            View all calls →
          </Link>
        </div>
      </div>

      <div className="divide-y divide-gray-200">
        {recentCalls.map((call, index) => {
          const StatusIcon = getStatusIcon(call.status)
          return (
            <motion.div
              key={call.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-6 hover:bg-gray-50 transition-colors duration-200"
            >
              <div className="flex items-start space-x-4">
                <div className={`w-10 h-10 ${getStatusColor(call.status)} rounded-lg flex items-center justify-center`}>
                  <StatusIcon className="w-5 h-5" />
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        {call.callerName}
                      </p>
                      <p className="text-sm text-gray-500">
                        {call.callerNumber}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-900">{call.duration}</p>
                      <p className="text-xs text-gray-500">{call.timestamp}</p>
                    </div>
                  </div>
                  
                  {call.status === 'answered' && (
                    <div className="mt-3 flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <span className="text-xs text-gray-500">Sentiment:</span>
                        <span className={`text-xs font-medium ${getSentimentColor(call.sentiment)}`}>
                          {call.sentiment}
                        </span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <span className="text-xs text-gray-500">Intent:</span>
                        <span className="text-xs font-medium text-gray-900">
                          {call.intent?.replace('_', ' ')}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              
              {call.status === 'answered' && (
                <div className="mt-4 flex items-center space-x-4">
                  <button className="flex items-center space-x-2 text-sm text-teal-600 hover:text-teal-700 transition-colors">
                    <MessageSquare className="w-4 h-4" />
                    <span>View conversation</span>
                  </button>
                  <button className="flex items-center space-x-2 text-sm text-gray-600 hover:text-gray-700 transition-colors">
                    <Clock className="w-4 h-4" />
                    <span>Call details</span>
                  </button>
                </div>
              )}
            </motion.div>
          )
        })}
      </div>

      <div className="p-6 bg-gray-50 rounded-b-xl">
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-gray-900">4</div>
            <div className="text-sm text-gray-600">Answered today</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-gray-900">1</div>
            <div className="text-sm text-gray-600">Missed today</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-gray-900">14m 33s</div>
            <div className="text-sm text-gray-600">Total talk time</div>
          </div>
        </div>
      </div>
    </div>
  )
}
