'use client'

import { motion } from 'framer-motion'

const logos = [
  { name: 'HubSpot', src: '/logos/hubspot.svg', category: 'CRM' },
  { name: 'Salesforce', src: '/logos/salesforce.svg', category: 'CRM' },
  { name: 'Zapier', src: '/logos/zapier.svg', category: 'Automation' },
  { name: 'Calendly', src: '/logos/calendly.svg', category: 'Scheduling' },
  { name: 'Slack', src: '/logos/slack.svg', category: 'Communication' },
  { name: 'QuickBooks', src: '/logos/quickbooks.svg', category: 'Accounting' },
]

export function LogoCloudSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-gray-600 text-lg">
            Trusted by businesses that integrate with
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center"
        >
          {logos.map((logo, index) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center justify-center w-32 h-16 grayscale hover:grayscale-0 transition-all duration-300"
            >
              <div className="w-full h-full bg-gray-100 rounded-lg flex items-center justify-center">
                <span className="text-gray-500 font-medium text-sm">{logo.name}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
