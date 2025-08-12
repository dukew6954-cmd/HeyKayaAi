'use client'

import { motion } from 'framer-motion'

export function ReportingFeatures() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Reporting Features
          </h2>
          <p className="text-xl text-gray-600">
            Reporting Features content coming soon...
          </p>
        </motion.div>
      </div>
    </section>
  )
}
