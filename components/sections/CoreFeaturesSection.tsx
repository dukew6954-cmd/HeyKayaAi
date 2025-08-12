'use client'

import { motion } from 'framer-motion'
import { 
  Database, 
  Zap, 
  CheckCircle, 
  Shield,
  Clock,
  Users,
  Settings,
  Globe,
  Smartphone,
  Monitor,
  Cloud,
  Lock
} from 'lucide-react'

const coreFeatures = [
  {
    icon: Database,
    title: "Centralized Database",
    description: "All your business data in one secure, organized location",
    features: [
      "Customer profiles and history",
      "Lead management system",
      "Appointment scheduling",
      "Payment processing"
    ],
    benefits: ["Single source of truth", "Easy data access", "No data silos", "Improved efficiency"]
  },
  {
    icon: Users,
    title: "Team Management",
    description: "Built-in tools to manage your team and workflows",
    features: [
      "User roles and permissions",
      "Task assignment",
      "Performance tracking",
      "Communication tools"
    ],
    benefits: ["Streamlined collaboration", "Clear accountability", "Better productivity", "Reduced confusion"]
  },
  {
    icon: Smartphone,
    title: "Mobile App",
    description: "Full-featured mobile app included with every plan",
    features: [
      "iOS and Android apps",
      "Real-time notifications",
      "Offline capability",
      "Touch-optimized interface"
    ],
    benefits: ["Work from anywhere", "Stay connected", "Quick responses", "Professional appearance"]
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description: "Enterprise-grade security built into the platform",
    features: [
      "Bank-level encryption",
      "GDPR compliance",
      "SOC 2 certified",
      "Regular security audits"
    ],
    benefits: ["Data protection", "Regulatory compliance", "Customer trust", "Risk mitigation"]
  },
  {
    icon: Globe,
    title: "Multi-language Support",
    description: "Built-in support for multiple languages and regions",
    features: [
      "20+ languages supported",
      "Local currency support",
      "Regional compliance",
      "Cultural customization"
    ],
    benefits: ["Global reach", "Local relevance", "Customer satisfaction", "Market expansion"]
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    description: "Reliable, scalable cloud infrastructure included",
    features: [
      "99.9% uptime guarantee",
      "Automatic backups",
      "Global CDN",
      "Auto-scaling"
    ],
    benefits: ["Always available", "Data safety", "Fast performance", "Cost efficiency"]
  }
]

export function CoreFeaturesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Core Platform{' '}
            <span className="bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
              Features
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Everything you need to run your business is built into the Pavro platform. No additional costs, no hidden fees.
          </motion.p>
        </motion.div>

        {/* Core Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coreFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index, duration: 0.6 }}
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
              }}
              className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-100 hover:border-teal-300 transition-all duration-500 relative overflow-hidden group"
            >
              {/* Animated background gradient */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-teal-500/5 via-emerald-500/5 to-teal-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                animate={{ 
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] 
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              
              <div className="relative z-10">
                <motion.div 
                  className="w-16 h-16 bg-gradient-to-r from-teal-600 via-emerald-600 to-teal-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </motion.div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>
                
                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <Zap className="w-4 h-4 text-teal-600 mr-2" />
                    What's Included
                  </h4>
                  <ul className="space-y-2">
                    {feature.features.map((item, itemIndex) => (
                      <motion.li 
                        key={itemIndex} 
                        className="flex items-center text-sm text-gray-700"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 * index + itemIndex * 0.1 }}
                      >
                        <motion.div 
                          className="w-2 h-2 bg-gradient-to-r from-teal-600 to-emerald-600 rounded-full mr-3"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity, delay: itemIndex * 0.2 }}
                        />
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Benefits */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <CheckCircle className="w-4 h-4 text-emerald-600 mr-2" />
                    Business Benefits
                  </h4>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <motion.li 
                        key={benefitIndex} 
                        className="flex items-center text-sm text-gray-700"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 * index + benefitIndex * 0.1 }}
                      >
                        <motion.div 
                          className="w-2 h-2 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full mr-3"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity, delay: benefitIndex * 0.2 }}
                        />
                        {benefit}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-teal-600 to-emerald-600 rounded-2xl p-8 text-white max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">All Core Features Included</h3>
            <p className="text-teal-100 mb-6">
              Every Pavro plan includes all these core features. No hidden costs, no surprise fees.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-teal-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
                View All Plans
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-teal-600 transition-colors">
                Start Free Trial
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
