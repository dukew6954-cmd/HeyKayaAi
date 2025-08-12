'use client'

import { motion } from 'framer-motion'

export function AnalyticsHero() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Analytics Hero
          </h1>
          <p className="text-xl text-gray-600">
            Analytics content coming soon...
          </p>
        </motion.div>
      </div>
    </section>
  )
}
