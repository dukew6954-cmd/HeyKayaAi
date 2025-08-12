'use client'

import { motion } from 'framer-motion'
import { 
  Cpu, 
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
  Lock,
  Database,
  BarChart3,
  Workflow
} from 'lucide-react'

const platformCapabilities = [
  {
    icon: Cpu,
    title: "Advanced Processing Engine",
    description: "High-performance processing for complex business operations",
    capabilities: [
      "Real-time data processing",
      "Multi-threaded operations",
      "Intelligent caching",
      "Load balancing"
    ],
    technical: ["99.9% uptime", "Sub-second response", "Auto-scaling", "Fault tolerance"]
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description: "Sophisticated workflow engine for business process automation",
    capabilities: [
      "Visual workflow builder",
      "Conditional logic",
      "Multi-step processes",
      "Error handling"
    ],
    technical: ["Drag-and-drop interface", "API integrations", "Webhook support", "Custom triggers"]
  },
  {
    icon: Database,
    title: "Advanced Data Management",
    description: "Enterprise-grade data handling and storage capabilities",
    capabilities: [
      "Real-time synchronization",
      "Data validation",
      "Backup and recovery",
      "Data encryption"
    ],
    technical: ["ACID compliance", "Data compression", "Indexing", "Query optimization"]
  },
  {
    icon: BarChart3,
    title: "Real-time Analytics Engine",
    description: "Live analytics and reporting capabilities built into the platform",
    capabilities: [
      "Live dashboards",
      "Custom reports",
      "Data visualization",
      "Performance metrics"
    ],
    technical: ["Real-time processing", "Custom queries", "Export capabilities", "Scheduled reports"]
  },
  {
    icon: Shield,
    title: "Enterprise Security Framework",
    description: "Comprehensive security and compliance features",
    capabilities: [
      "Role-based access control",
      "Audit logging",
      "Data encryption",
      "Compliance monitoring"
    ],
    technical: ["SOC 2 Type II", "GDPR compliance", "HIPAA ready", "Regular audits"]
  },
  {
    icon: Cloud,
    title: "Scalable Infrastructure",
    description: "Cloud-native architecture for unlimited scalability",
    capabilities: [
      "Auto-scaling",
      "Global distribution",
      "Load balancing",
      "Disaster recovery"
    ],
    technical: ["Multi-region deployment", "CDN integration", "Container orchestration", "Microservices"]
  }
]

export function PlatformCapabilities() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
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
            Advanced Platform{' '}
            <span className="bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
              Capabilities
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Built on enterprise-grade technology, Pavro's platform capabilities ensure reliability, 
            performance, and scalability for businesses of any size.
          </motion.p>
        </motion.div>

        {/* Platform Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {platformCapabilities.map((capability, index) => (
            <motion.div
              key={capability.title}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index, duration: 0.6 }}
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
              }}
              className="bg-white p-8 rounded-2xl border border-gray-100 hover:border-teal-300 transition-all duration-500 relative overflow-hidden group shadow-lg hover:shadow-2xl"
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
                  <capability.icon className="w-8 h-8 text-white" />
                </motion.div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors duration-300">
                  {capability.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">{capability.description}</p>
                
                {/* Capabilities */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <Zap className="w-4 h-4 text-teal-600 mr-2" />
                    Key Capabilities
                  </h4>
                  <ul className="space-y-2">
                    {capability.capabilities.map((item, itemIndex) => (
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

                {/* Technical Features */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <CheckCircle className="w-4 h-4 text-emerald-600 mr-2" />
                    Technical Features
                  </h4>
                  <ul className="space-y-2">
                    {capability.technical.map((feature, featureIndex) => (
                      <motion.li 
                        key={featureIndex} 
                        className="flex items-center text-sm text-gray-700"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 * index + featureIndex * 0.1 }}
                      >
                        <motion.div 
                          className="w-2 h-2 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full mr-3"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity, delay: featureIndex * 0.2 }}
                        />
                        {feature}
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
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 text-white max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Enterprise-Grade Technology</h3>
            <p className="text-gray-300 mb-6">
              Built on the latest technology stack, Pavro's platform is designed to handle the most demanding business requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-teal-600 to-emerald-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-teal-700 hover:to-emerald-700 transition-all">
                View Technical Specs
              </button>
              <button className="border border-gray-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-gray-700 transition-colors">
                Contact Engineering
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
