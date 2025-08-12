'use client'

import { motion } from 'framer-motion'
import { 
  Scissors, 
  Building2, 
  Stethoscope, 
  Hammer, 
  Home, 
  Scale,
  Car,
  Utensils,
  ShoppingBag,
  Heart
} from 'lucide-react'
import Link from 'next/link'

const industries = [
  {
    name: "Salons & Spas",
    icon: Scissors,
    description: "Automate appointments, follow-ups, and marketing campaigns",
    features: ["Smart scheduling", "Client retention", "Marketing automation"],
    color: "from-pink-500 to-rose-500"
  },
  {
    name: "Law Firms",
    icon: Scale,
    description: "Streamline client intake, case management, and billing",
    features: ["Lead qualification", "Document automation", "Client portal"],
    color: "from-blue-500 to-indigo-500"
  },
  {
    name: "Medical Practices",
    icon: Stethoscope,
    description: "Enhance patient care with automated scheduling and follow-ups",
    features: ["HIPAA compliant", "Patient reminders", "Telehealth integration"],
    color: "from-green-500 to-emerald-500"
  },
  {
    name: "Contractors",
    icon: Hammer,
    description: "Manage projects, quotes, and customer communication",
    features: ["Quote automation", "Project tracking", "Customer service"],
    color: "from-orange-500 to-red-500"
  },
  {
    name: "Real Estate",
    icon: Home,
    description: "Automate lead generation, follow-ups, and client management",
    features: ["Lead nurturing", "Property alerts", "Client portals"],
    color: "from-purple-500 to-pink-500"
  },
  {
    name: "Auto Services",
    icon: Car,
    description: "Streamline service scheduling and customer communication",
    features: ["Service reminders", "Parts tracking", "Customer reviews"],
    color: "from-gray-500 to-slate-500"
  },
  {
    name: "Restaurants",
    icon: Utensils,
    description: "Automate reservations, marketing, and customer feedback",
    features: ["Table management", "Loyalty programs", "Review management"],
    color: "from-red-500 to-pink-500"
  },
  {
    name: "Retail",
    icon: ShoppingBag,
    description: "Enhance customer experience and drive sales",
    features: ["Inventory alerts", "Customer support", "Sales automation"],
    color: "from-indigo-500 to-purple-500"
  },
  {
    name: "Fitness & Wellness",
    icon: Heart,
    description: "Automate class bookings, memberships, and wellness programs",
    features: ["Class scheduling", "Member retention", "Health tracking"],
    color: "from-teal-500 to-cyan-500"
  }
]

export function IndustriesPreviewSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Trusted by Businesses{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Across Industries
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Our All-in-One Automation Platform is designed to work seamlessly across all business types, 
            providing industry-specific solutions that drive growth and efficiency.
          </motion.p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
              className="group bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:border-blue-200"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${industry.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <industry.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                {industry.name}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {industry.description}
              </p>
              
              <ul className="space-y-2 mb-6">
                {industry.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-full h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Don't See Your Industry?</h3>
            <p className="text-blue-100 mb-6">
              Our platform is highly customizable and can be tailored to any business type. 
              Let us show you how we can automate your specific workflows.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/industries" 
                className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors inline-block"
              >
                View All Industries
              </Link>
              <Link 
                href="/contact" 
                className="border border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-block"
              >
                Get Custom Demo
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
