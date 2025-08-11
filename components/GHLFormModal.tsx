'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

interface GHLFormModalProps {
  isOpen: boolean
  onClose: () => void
}

export function GHLFormModal({ isOpen, onClose }: GHLFormModalProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    if (isOpen) {
      // Load the GHL form script
      const script = document.createElement('script')
      script.src = 'https://link.msgsndr.com/js/form_embed.js'
      script.async = true
      script.onload = () => setIsLoaded(true)
      document.body.appendChild(script)

      return () => {
        document.body.removeChild(script)
      }
    }
  }, [isOpen])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ 
              type: "spring", 
              duration: 0.5,
              bounce: 0.2
            }}
            className="relative w-full max-w-4xl h-[90vh] bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="absolute top-0 left-0 right-0 z-20 bg-gradient-to-r from-teal-500 to-emerald-500 px-6 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">🎯</span>
                  </div>
                  <div>
                    <h2 className="text-white font-bold text-lg">Start Your Free Trial</h2>
                    <p className="text-white/80 text-sm">Get started with HeyKayaAI in minutes</p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 bg-white/20 hover:bg-white/30 rounded-full transition-all duration-200 group"
                  aria-label="Close form"
                >
                  <X className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-200" />
                </button>
              </div>
            </div>

            {/* Form Container */}
            <div className="pt-20 h-full">
              <iframe
                src="https://api.leadconnectorhq.com/widget/form/722YqDR6AUUvWfGWY1Lw"
                style={{ width: '100%', height: '100%', border: 'none' }}
                id="popup-722YqDR6AUUvWfGWY1Lw"
                data-layout="{'id':'POPUP'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="Getting Started Form"
                data-height="100%"
                data-layout-iframe-id="popup-722YqDR6AUUvWfGWY1Lw"
                data-form-id="722YqDR6AUUvWfGWY1Lw"
                title="Getting Started Form"
              />
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-4 left-4 w-2 h-2 bg-white/30 rounded-full animate-pulse"></div>
            <div className="absolute top-8 right-8 w-1 h-1 bg-white/40 rounded-full animate-ping"></div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
