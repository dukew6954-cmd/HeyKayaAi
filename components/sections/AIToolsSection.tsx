'use client'

import { motion } from 'framer-motion'
import { 
  Brain, 
  MessageSquare, 
  Phone, 
  Bot, 
  Zap, 
  TrendingUp,
  Users,
  Clock,
  CheckCircle,
  ArrowRight
} from 'lucide-react'
import { Button } from '@/components/ui/button'

const aiTools = [
  {
    icon: Phone,
    title: "AI Voice Assistant",
    description: "Natural-sounding AI that handles calls 24/7 with human-like conversation skills",
    features: [
      "Natural language processing",
      "Multi-language support",
      "Emotion detection",
      "Call recording & transcription"
    ],
    color: "from-blue-500 to-purple-600"
  },
  {
    icon: MessageSquare,
    title: "Smart Chatbot",
    description: "Intelligent chatbot that provides instant customer support and lead qualification",
    features: [
      "Instant responses",
      "Lead qualification",
      "FAQ handling",
      "Seamless handoff to humans"
    ],
    color: "from-green-500 to-teal-600"
  },
  {
    icon: Brain,
    title: "Predictive Analytics",
    description: "AI-powered insights that predict customer behavior and optimize your business",
    features: [
      "Customer behavior prediction",
      "Sales forecasting",
      "Churn prevention",
      "Personalized recommendations"
    ],
    color: "from-orange-500 to-red-600"
  },
  {
    icon: Bot,
    title: "Workflow Automation",
    description: "Automate complex business processes with intelligent decision-making",
    features: [
      "Process automation",
      "Decision trees",
      "Task routing",
      "Performance optimization"
    ],
    color: "from-purple-500 to-pink-600"
  }
]

const capabilities = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Process requests in milliseconds with real-time AI responses"
  },
  {
    icon: Users,
    title: "Scalable",
    description: "Handle thousands of conversations simultaneously without degradation"
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Never miss a customer interaction, even outside business hours"
  },
  {
    icon: CheckCircle,
    title: "Accurate",
    description: "99.9% accuracy rate with continuous learning and improvement"
  }
]

export function AIToolsSection() {
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
            Powerful AI Tools for{' '}
            <span className="bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
              Every Business Need
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            From voice assistants to predictive analytics, our AI tools transform how you interact with customers and run your business.
          </motion.p>
        </div>

        {/* AI Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {aiTools.map((tool, index) => (
            <motion.div
              key={tool.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
              className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-100 hover:border-teal-300 transition-all duration-500 group"
            >
              <div className="flex items-start space-x-4">
                <div className={`w-16 h-16 bg-gradient-to-r ${tool.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <tool.icon className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors duration-300">
                    {tool.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {tool.description}
                  </p>
                  <ul className="space-y-2">
                    {tool.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        className="flex items-center text-sm text-gray-700"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 * index + featureIndex * 0.1 }}
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-teal-600 to-emerald-600 rounded-full mr-3" />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* AI Capabilities */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-r from-teal-50 to-emerald-50 rounded-3xl p-12 mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Pavro AI?</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our AI tools are built with enterprise-grade technology and designed for real-world business applications.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((capability, index) => (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-teal-600 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <capability.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{capability.title}</h4>
                <p className="text-gray-600">{capability.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-teal-600 to-emerald-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Experience AI-Powered Business?</h3>
            <p className="text-teal-100 mb-6 max-w-2xl mx-auto">
              See how our AI tools can transform your customer interactions and business operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-3 rounded-xl font-semibold transition-colors">
                Start Free Trial
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-teal-600 px-8 py-3 rounded-xl font-semibold transition-colors">
                Schedule Demo
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
