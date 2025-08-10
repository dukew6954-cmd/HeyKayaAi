'use client'

'use client'

import { motion } from 'framer-motion'
import { 
  Clock, 
  Calendar, 
  Languages, 
  Shield, 
  Zap, 
  MessageSquare,
  Phone,
  CheckCircle,
  Users,
  Bell,
  BarChart3,
  Mail
} from 'lucide-react'

const valueProps = [
  {
    icon: Clock,
    title: "Unlimited Calls, Day or Night",
    description: "Never miss a call again. Our AI answers 24/7, even on weekends and holidays.",
    color: "from-teal-500 to-emerald-500"
  },
  {
    icon: Calendar,
    title: "Appointments, Not Voicemail",
    description: "Automatically book appointments in seconds. No more missed opportunities.",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Languages,
    title: "English + Spanish Friendly",
    description: "Serve your diverse customer base with natural bilingual conversations.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Shield,
    title: "Spam Calls? Not on Our Watch",
    description: "Advanced filtering blocks robocalls and spam while letting real customers through.",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Zap,
    title: "Works With Your Tools",
    description: "Seamlessly integrates with Clio, Booksy, Housecall Pro, HubSpot, and more.",
    color: "from-orange-500 to-red-500"
  },
  {
    icon: MessageSquare,
    title: "Instant Summaries, Clear Next Steps",
    description: "Get email and SMS summaries after every call with action items and follow-ups.",
    color: "from-indigo-500 to-purple-500"
  }
]

export function ValuePropsSection() {
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
            Everything you need to{' '}
            <span className="gradient-text">never miss a call</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From answering calls to booking appointments, HeyKayaAI handles it all 
            with the warmth and efficiency of a professional receptionist.
          </p>
        </motion.div>

        {/* Value Props Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {valueProps.map((prop, index) => (
            <motion.div
              key={prop.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 card-hover border border-gray-100">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${prop.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <prop.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-teal-600 transition-colors duration-300">
                  {prop.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {prop.description}
                </p>

                {/* Hover Effect */}
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-full h-1 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-teal-600 mb-2">24/7</div>
            <div className="text-gray-600">Availability</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-teal-600 mb-2">2+</div>
            <div className="text-gray-600">Languages</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-teal-600 mb-2">24hr</div>
            <div className="text-gray-600">We Handle Setup</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-teal-600 mb-2">99%</div>
            <div className="text-gray-600">Call Answer Rate</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
