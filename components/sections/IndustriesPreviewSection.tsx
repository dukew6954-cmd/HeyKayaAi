'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const industries = [
  { name: 'Law Firms', href: '/industries#law-firms', color: 'from-blue-500 to-indigo-600' },
  { name: 'Barbershops & Salons', href: '/industries#barbershops', color: 'from-purple-500 to-pink-600' },
  { name: 'Garage Door Repair', href: '/industries#garage-door', color: 'from-orange-500 to-red-600' },
  { name: 'Plumbing', href: '/industries#plumbing', color: 'from-cyan-500 to-blue-600' },
  { name: 'HVAC', href: '/industries#hvac', color: 'from-green-500 to-emerald-600' },
  { name: 'Electricians', href: '/industries#electricians', color: 'from-yellow-500 to-orange-600' },
  { name: 'Locksmiths', href: '/industries#locksmiths', color: 'from-gray-500 to-slate-600' },
  { name: 'Medical Clinics', href: '/industries#medical', color: 'from-red-500 to-pink-600' },
  { name: 'Dental', href: '/industries#dental', color: 'from-teal-500 to-cyan-600' },
  { name: 'Chiropractic', href: '/industries#chiropractic', color: 'from-indigo-500 to-purple-600' },
  { name: 'Veterinary', href: '/industries#veterinary', color: 'from-emerald-500 to-green-600' },
  { name: 'Real Estate', href: '/industries#real-estate', color: 'from-blue-500 to-cyan-600' },
  { name: 'Cleaning', href: '/industries#cleaning', color: 'from-purple-500 to-indigo-600' },
  { name: 'Auto Repair', href: '/industries#auto-repair', color: 'from-orange-500 to-yellow-600' },
  { name: 'Spas & Massage', href: '/industries#spas', color: 'from-pink-500 to-rose-600' },
  { name: 'Fitness Studios', href: '/industries#fitness', color: 'from-green-500 to-teal-600' },
  { name: 'Pest Control', href: '/industries#pest-control', color: 'from-brown-500 to-amber-600' },
  { name: 'Security Systems', href: '/industries#security', color: 'from-slate-500 to-gray-600' },
  { name: 'Restaurants', href: '/industries#restaurants', color: 'from-red-500 to-orange-600' },
  { name: 'Daycares & Schools', href: '/industries#daycares', color: 'from-yellow-500 to-green-600' },
  { name: 'Property Management', href: '/industries#property-management', color: 'from-blue-500 to-purple-600' },
  { name: 'IT/MSP', href: '/industries#it-msp', color: 'from-indigo-500 to-blue-600' },
  { name: 'Insurance Agencies', href: '/industries#insurance', color: 'from-emerald-500 to-teal-600' },
  { name: 'Event Planners', href: '/industries#event-planners', color: 'from-purple-500 to-pink-600' },
  { name: 'Travel Agencies', href: '/industries#travel', color: 'from-cyan-500 to-blue-600' },
  { name: 'Nonprofits', href: '/industries#nonprofits', color: 'from-green-500 to-emerald-600' },
]

export function IndustriesPreviewSection() {
  return (
    <section className="py-24 bg-gray-50">
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
            Made for your{' '}
            <span className="gradient-text">business</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            HeyKayaAI works across industries, from law firms to auto repair shops. 
            See how we can help your specific business.
          </p>
        </motion.div>

        {/* Industries Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mb-12"
        >
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="group"
            >
              <Link
                href={industry.href}
                className="block bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 group-hover:border-teal-200"
              >
                <div className={`w-full h-2 rounded-full bg-gradient-to-r ${industry.color} mb-3`}></div>
                <h3 className="font-semibold text-gray-900 text-sm group-hover:text-teal-600 transition-colors duration-300">
                  {industry.name}
                </h3>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            href="/industries"
            className="inline-flex items-center space-x-2 text-teal-600 hover:text-teal-700 font-semibold transition-colors duration-300 group"
          >
            <span>View all industries</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
