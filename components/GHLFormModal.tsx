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
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ type: "spring", duration: 0.3 }}
            className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl h-[711px] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 bg-white/80 hover:bg-white rounded-full shadow-lg transition-all duration-200"
              aria-label="Close form"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>

            {/* GHL Form */}
            <iframe
              src="https://api.leadconnectorhq.com/widget/form/722YqDR6AUUvWfGWY1Lw"
              style={{ width: '100%', height: '100%', border: 'none', borderRadius: '12px' }}
              id="popup-722YqDR6AUUvWfGWY1Lw"
              data-layout="{'id':'POPUP'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="Getting Started Form"
              data-height="711"
              data-layout-iframe-id="popup-722YqDR6AUUvWfGWY1Lw"
              data-form-id="722YqDR6AUUvWfGWY1Lw"
              title="Getting Started Form"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
