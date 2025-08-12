'use client'

import { motion } from 'framer-motion'

export function IntegrationsHero() {
  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 via-red-50 to-pink-100">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Integrations Hero
          </h1>
          <p className="text-xl text-gray-600">
            Integrations content coming soon...
          </p>
        </motion.div>
      </div>
    </section>
  )
}
