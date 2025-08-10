'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, MessageSquare, Users } from 'lucide-react'

export function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="space-y-8"
    >
      {/* Contact Details */}
      <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
        
        <div className="space-y-6">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
              <Phone className="w-6 h-6 text-teal-600" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">Phone</h4>
              <p className="text-gray-600">1-800-HEYKAYA</p>
              <p className="text-sm text-gray-500">24/7 support line</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
              <Mail className="w-6 h-6 text-teal-600" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">Email</h4>
              <p className="text-gray-600">hello@heykaya.ai</p>
              <p className="text-sm text-gray-500">General inquiries</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
              <MessageSquare className="w-6 h-6 text-teal-600" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">Support</h4>
              <p className="text-gray-600">support@heykaya.ai</p>
              <p className="text-sm text-gray-500">Technical support</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
              <MapPin className="w-6 h-6 text-teal-600" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">Office</h4>
              <p className="text-gray-600">Phoenix, Arizona</p>
              <p className="text-sm text-gray-500">Headquarters</p>
            </div>
          </div>
        </div>
      </div>

      {/* Support SLA */}
      <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Support Response Times</h3>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center space-x-3">
              <Clock className="w-5 h-5 text-teal-600" />
              <span className="font-medium text-gray-900">Email Support</span>
            </div>
            <span className="text-sm text-gray-600">Within 24 hours</span>
          </div>

          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-teal-600" />
              <span className="font-medium text-gray-900">Phone Support</span>
            </div>
            <span className="text-sm text-gray-600">24/7 availability</span>
          </div>

          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center space-x-3">
              <Users className="w-5 h-5 text-teal-600" />
              <span className="font-medium text-gray-900">Priority Support</span>
            </div>
            <span className="text-sm text-gray-600">Within 4 hours</span>
          </div>
        </div>
      </div>

      {/* Map Placeholder */}
      <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Visit Our Office</h3>
        
        <div className="bg-gray-100 rounded-lg h-48 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600">Interactive map coming soon</p>
            <p className="text-sm text-gray-500">San Francisco, CA</p>
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-2xl p-8 border border-teal-100">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Links</h3>
        
        <div className="space-y-3">
          <a 
            href="/pricing" 
            className="block text-teal-600 hover:text-teal-700 font-medium transition-colors"
          >
            View Pricing Plans
          </a>
          <a 
            href="/how-it-works" 
            className="block text-teal-600 hover:text-teal-700 font-medium transition-colors"
          >
            How It Works
          </a>
          <a 
            href="/industries" 
            className="block text-teal-600 hover:text-teal-700 font-medium transition-colors"
          >
            Industry Solutions
          </a>
          <a 
            href="/about" 
            className="block text-teal-600 hover:text-teal-700 font-medium transition-colors"
          >
            About HeyKayaAI
          </a>
        </div>
      </div>
    </motion.div>
  )
}
