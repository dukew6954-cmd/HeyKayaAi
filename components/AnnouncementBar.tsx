'use client'

import { motion } from 'framer-motion'
import { Sparkles, X } from 'lucide-react'
import { useState } from 'react'

export function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-60 bg-gradient-to-r from-teal-500 via-emerald-500 to-teal-600 text-white text-center py-2 px-4 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="floating-blob bg-white/10 w-32 h-32 -top-8 -left-8"></div>
        <div className="floating-blob bg-white/10 w-24 h-24 -bottom-6 -right-6" style={{ animationDelay: '2s' }}></div>
        <div className="floating-blob bg-white/10 w-16 h-16 top-1/2 left-1/4" style={{ animationDelay: '4s' }}></div>
      </div>
      
      <div className="relative z-10 flex items-center justify-center gap-2 text-sm font-medium">
        <Sparkles className="w-4 h-4 animate-pulse" />
                  <span>30-day free trial • Unlimited calls • Cancel anytime</span>
        <button
          onClick={() => setIsVisible(false)}
          className="ml-4 p-1 hover:bg-white/20 rounded-full transition-colors"
          aria-label="Close announcement"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </motion.div>
  )
}
