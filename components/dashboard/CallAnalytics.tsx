'use client'

import { motion } from 'framer-motion'
import { BarChart3, TrendingUp, Phone, Clock } from 'lucide-react'

// Mock data for the chart
const callData = [
  { day: 'Mon', calls: 45, answered: 42, missed: 3 },
  { day: 'Tue', calls: 52, answered: 48, missed: 4 },
  { day: 'Wed', calls: 38, answered: 35, missed: 3 },
  { day: 'Thu', calls: 61, answered: 58, missed: 3 },
  { day: 'Fri', calls: 49, answered: 46, missed: 3 },
  { day: 'Sat', calls: 23, answered: 22, missed: 1 },
  { day: 'Sun', calls: 18, answered: 17, missed: 1 },
]

const maxCalls = Math.max(...callData.map(d => d.calls))

export function CallAnalytics() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Call Volume</h3>
          <p className="text-sm text-gray-600">Last 7 days call activity</p>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <div className="flex items-center space-x-1">
            <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
            <span>Answered</span>
          </div>
          <div className="flex items-center space-x-1">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <span>Missed</span>
          </div>
        </div>
      </div>

      {/* Chart */}
      <div className="space-y-4">
        {callData.map((data, index) => (
          <motion.div
            key={data.day}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center space-x-4"
          >
            <div className="w-12 text-sm font-medium text-gray-600">
              {data.day}
            </div>
            <div className="flex-1 flex items-center space-x-2">
              {/* Answered calls bar */}
              <div className="flex-1 bg-gray-200 rounded-full h-8 relative overflow-hidden">
                <div
                  className="bg-teal-500 h-full rounded-full transition-all duration-500"
                  style={{ width: `${(data.answered / maxCalls) * 100}%` }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xs font-medium text-white">
                    {data.answered}
                  </span>
                </div>
              </div>
              
              {/* Missed calls bar */}
              {data.missed > 0 && (
                <div className="flex-1 bg-gray-200 rounded-full h-8 relative overflow-hidden">
                  <div
                    className="bg-red-500 h-full rounded-full transition-all duration-500"
                    style={{ width: `${(data.missed / maxCalls) * 100}%` }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xs font-medium text-white">
                      {data.missed}
                    </span>
                  </div>
                </div>
              )}
            </div>
            <div className="w-16 text-right">
              <div className="text-sm font-semibold text-gray-900">{data.calls}</div>
              <div className="text-xs text-gray-500">total</div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Summary stats */}
      <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-gray-200">
        <div className="text-center">
          <div className="text-2xl font-bold text-gray-900">286</div>
          <div className="text-sm text-gray-600">Total Calls</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-teal-600">268</div>
          <div className="text-sm text-gray-600">Answered</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-red-600">18</div>
          <div className="text-sm text-gray-600">Missed</div>
        </div>
      </div>

      {/* Performance indicators */}
      <div className="mt-6 grid grid-cols-2 gap-4">
        <div className="bg-teal-50 rounded-lg p-4">
          <div className="flex items-center space-x-2">
            <TrendingUp className="w-5 h-5 text-teal-600" />
            <span className="text-sm font-medium text-teal-900">Answer Rate</span>
          </div>
          <div className="text-2xl font-bold text-teal-900 mt-1">93.7%</div>
        </div>
        <div className="bg-blue-50 rounded-lg p-4">
          <div className="flex items-center space-x-2">
            <Clock className="w-5 h-5 text-blue-600" />
            <span className="text-sm font-medium text-blue-900">Avg Duration</span>
          </div>
          <div className="text-2xl font-bold text-blue-900 mt-1">4m 23s</div>
        </div>
      </div>
    </div>
  )
}
