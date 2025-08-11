'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, Lock, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface OnboardingPageProps {
  params: {
    token: string
  }
}

export default function OnboardingPage({ params }: OnboardingPageProps) {
  const [isValidToken, setIsValidToken] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [isScriptLoaded, setIsScriptLoaded] = useState(false)

  useEffect(() => {
    // Simulate token validation (you can replace this with actual validation logic)
    const validateToken = async () => {
      // For now, we'll accept any token that's not empty
      // In production, you'd validate against your database
      if (params.token && params.token.length > 0) {
        setIsValidToken(true)
      }
      setIsLoading(false)
    }

    validateToken()
  }, [params.token])

  useEffect(() => {
    if (isValidToken) {
      // Load the GHL form script
      const script = document.createElement('script')
      script.src = 'https://link.msgsndr.com/js/form_embed.js'
      script.async = true
      script.onload = () => setIsScriptLoaded(true)
      document.body.appendChild(script)

      return () => {
        document.body.removeChild(script)
      }
    }
  }, [isValidToken])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-teal-50 via-emerald-50 to-teal-100 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <div className="w-16 h-16 border-4 border-teal-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Verifying your access...</p>
        </motion.div>
      </div>
    )
  }

  if (!isValidToken) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-teal-50 via-emerald-50 to-teal-100 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center"
        >
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Lock className="w-8 h-8 text-red-500" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Access Denied</h1>
          <p className="text-gray-600 mb-6">
            This onboarding page requires a valid invitation link. Please check your email or SMS for the correct link.
          </p>
          <Button asChild>
            <a href="/" className="inline-flex items-center">
              Return to Homepage
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </Button>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-emerald-50 to-teal-100">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white shadow-sm border-b border-gray-100"
      >
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">HeyKayaAI Onboarding</h1>
                <p className="text-sm text-gray-600">Complete your setup to get started</p>
              </div>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <Lock className="w-4 h-4" />
              <span>Private Access</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Form Container */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          {/* Form Header */}
          <div className="bg-gradient-to-r from-teal-500 to-emerald-500 px-8 py-6">
            <h2 className="text-2xl font-bold text-white mb-2">Welcome to HeyKayaAI!</h2>
            <p className="text-teal-100">
              Let's get your AI receptionist set up and ready to handle your calls 24/7.
            </p>
          </div>

          {/* GHL Form */}
          <div className="p-8">
            <iframe
              src="https://api.leadconnectorhq.com/widget/form/Xi7sX1sGKeSA6DipszjZ"
              style={{ width: '100%', height: '2474px', border: 'none', borderRadius: '3px' }}
              id="inline-Xi7sX1sGKeSA6DipszjZ"
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="Onboarding Form"
              data-height="2474"
              data-layout-iframe-id="inline-Xi7sX1sGKeSA6DipszjZ"
              data-form-id="Xi7sX1sGKeSA6DipszjZ"
              title="Onboarding Form"
            />
          </div>
        </motion.div>

        {/* Footer Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-center mt-8 text-sm text-gray-500"
        >
          <p>Need help? Contact our support team at support@heykaya.ai</p>
        </motion.div>
      </div>
    </div>
  )
}
