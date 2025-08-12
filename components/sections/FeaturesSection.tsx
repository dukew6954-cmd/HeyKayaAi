'use client'

import { motion } from 'framer-motion'
import { 
  MessageSquare, 
  Shield, 
  Bot, 
  BarChart3, 
  Zap, 
  Star,
  Smartphone,
  Mail,
  Filter,
  TrendingUp,
  Clock,
  Users
} from 'lucide-react'

const features = [
  {
    icon: MessageSquare,
    title: "Automatic Review Requests",
    description: "Send personalized review requests via SMS and email after every job or visit. No manual work required.",
    benefits: ["Increase review volume by 40%", "Personalized messaging", "Perfect timing"]
  },
  {
    icon: Shield,
    title: "Negative Review Filter",
    description: "Our AI detects negative sentiment and keeps bad reviews private. Only happy customers get asked to leave public reviews.",
    benefits: ["Protect your rating", "Smart sentiment analysis", "Maintain 5-star reputation"]
  },
  {
    icon: Bot,
    title: "AI Reply Assistant",
    description: "Instantly respond to reviews with AI-generated, personalized responses that sound human and professional.",
    benefits: ["Respond in seconds", "Professional tone", "Personalized messages"]
  },
  {
    icon: BarChart3,
    title: "Review Analytics Dashboard",
    description: "Track your review performance, monitor trends, and see exactly how your reputation is growing over time.",
    benefits: ["Real-time insights", "Performance tracking", "Growth metrics"]
  },
  {
    icon: Zap,
    title: "5-Minute Setup",
    description: "Connect your Google Business Profile and start requesting reviews immediately. No complex configuration needed.",
    benefits: ["Instant activation", "No technical skills", "Ready in minutes"]
  },
  {
    icon: Star,
    title: "Multi-Platform Integration",
    description: "Manage Google, Facebook, and other review platforms from one simple dashboard.",
    benefits: ["Unified management", "Cross-platform", "Consistent messaging"]
  }
]

const stats = [
  {
    icon: TrendingUp,
    value: "40%",
    label: "More Reviews"
  },
  {
    icon: Clock,
    value: "5 min",
    label: "Setup Time"
  },
  {
    icon: Users,
    value: "500+",
    label: "Happy Businesses"
  },
  {
    icon: Star,
    value: "4.9/5",
    label: "Customer Rating"
  }
]

export function FeaturesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Powerful Features That{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Actually Work
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Everything you need to get more 5-star reviews and build your online reputation, 
            without the complexity or high costs of enterprise solutions.
          </motion.p>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 mb-6">{feature.description}</p>
              
              <ul className="space-y-2">
                {feature.benefits.map((benefit, benefitIndex) => (
                  <li key={benefitIndex} className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></div>
                    {benefit}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Get More 5-Star Reviews?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Join 500+ businesses that are already getting more reviews and growing their online reputation with Pavro.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
                Start Free Trial
              </button>
              <button className="border border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors">
                Watch Demo
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
