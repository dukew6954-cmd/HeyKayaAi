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
          className="fixed inset-0 z-50 bg-white"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-10 p-3 bg-white/90 hover:bg-white rounded-full shadow-lg transition-all duration-200 border border-gray-200"
            aria-label="Close form"
          >
            <X className="w-6 h-6 text-gray-600" />
          </button>

          {/* GHL Form - Full Screen */}
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
        </motion.div>
      )}
    </AnimatePresence>
  )
}
