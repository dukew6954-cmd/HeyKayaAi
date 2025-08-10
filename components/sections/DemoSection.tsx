'use client'

import { motion } from 'framer-motion'
import { DemoAudioPlayer } from '@/components/DemoAudioPlayer'

export function DemoSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-4">
            Hear HeyKayaAI in{' '}
            <span className="gradient-text">action</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Listen to a demo conversation showing how Kaya handles a customer call, from greeting 
            to booking an appointment in under 30 seconds.
          </p>
        </motion.div>

        {/* Demo Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <DemoAudioPlayer />
        </motion.div>

        {/* Demo Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto"
        >
          <div className="text-center">
            <div className="text-2xl font-bold text-teal-600 mb-2">27s</div>
            <div className="text-gray-600">Total Call Time</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-teal-600 mb-2">11</div>
            <div className="text-gray-600">Messages Exchanged</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-teal-600 mb-2">100%</div>
            <div className="text-gray-600">Booking Success</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
