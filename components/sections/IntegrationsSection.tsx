'use client'

import { motion } from 'framer-motion'
import { 
  Zap, 
  Link, 
  Settings, 
  Shield, 
  Clock, 
  CheckCircle,
  ArrowRight,
  Users,
  Mail,
  Calendar,
  CreditCard,
  MessageSquare,
  BarChart3,
  ShoppingCart,
  FileText
} from 'lucide-react'
import { Button } from '@/components/ui/button'

const integrationCategories = [
  {
    icon: Users,
    title: "CRM & Sales",
    description: "Connect with your customer relationship management tools",
    integrations: [
      { name: "Salesforce", status: "Available" },
      { name: "HubSpot", status: "Available" },
      { name: "Pipedrive", status: "Available" },
      { name: "Zoho CRM", status: "Available" }
    ],
    color: "from-blue-500 to-purple-600"
  },
  {
    icon: Mail,
    title: "Email & Marketing",
    description: "Integrate with your email marketing and automation platforms",
    integrations: [
      { name: "Mailchimp", status: "Available" },
      { name: "ConvertKit", status: "Available" },
      { name: "ActiveCampaign", status: "Available" },
      { name: "Klaviyo", status: "Available" }
    ],
    color: "from-green-500 to-teal-600"
  },
  {
    icon: Calendar,
    title: "Scheduling & Calendar",
    description: "Sync with your calendar and scheduling tools",
    integrations: [
      { name: "Google Calendar", status: "Available" },
      { name: "Outlook", status: "Available" },
      { name: "Calendly", status: "Available" },
      { name: "Acuity Scheduling", status: "Available" }
    ],
    color: "from-orange-500 to-red-600"
  },
  {
    icon: CreditCard,
    title: "Payment & E-commerce",
    description: "Connect with payment processors and e-commerce platforms",
    integrations: [
      { name: "Stripe", status: "Available" },
      { name: "PayPal", status: "Available" },
      { name: "Shopify", status: "Available" },
      { name: "WooCommerce", status: "Available" }
    ],
    color: "from-purple-500 to-pink-600"
  }
]

const popularIntegrations = [
  {
    name: "Slack",
    description: "Get instant notifications and updates in your Slack channels",
    icon: MessageSquare,
    status: "Popular"
  },
  {
    name: "Google Analytics",
    description: "Track website performance and user behavior seamlessly",
    icon: BarChart3,
    status: "Popular"
  },
  {
    name: "Shopify",
    description: "Sync orders, customers, and inventory data automatically",
    icon: ShoppingCart,
    status: "Popular"
  },
  {
    name: "QuickBooks",
    description: "Automatically sync financial data and transactions",
    icon: FileText,
    status: "Popular"
  }
]

const integrationFeatures = [
  {
    icon: Zap,
    title: "One-Click Setup",
    description: "Connect your tools with just a few clicks - no coding required"
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level security with encrypted data transmission"
  },
  {
    icon: Clock,
    title: "Real-Time Sync",
    description: "Data syncs instantly across all your connected platforms"
  },
  {
    icon: Settings,
    title: "Custom Workflows",
    description: "Create custom automation workflows between your tools"
  }
]

export function IntegrationsSection() {
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
            Connect with{' '}
            <span className="bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
              100+ Business Tools
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Seamlessly integrate Pavro with your existing business tools and create powerful automated workflows.
          </motion.p>
        </div>

        {/* Integration Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {integrationCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
              className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-100 hover:border-teal-300 transition-all duration-500 group"
            >
              <div className="flex items-start space-x-4 mb-6">
                <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors duration-300">
                    {category.title}
                  </h3>
                  <p className="text-gray-600">
                    {category.description}
                  </p>
                </div>
              </div>
              
              <div className="space-y-3">
                {category.integrations.map((integration, integrationIndex) => (
                  <motion.div
                    key={integration.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 * index + integrationIndex * 0.1 }}
                    className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-100"
                  >
                    <span className="font-medium text-gray-900">{integration.name}</span>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="text-sm text-green-600 font-medium">{integration.status}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Popular Integrations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-r from-teal-50 to-emerald-50 rounded-3xl p-12 mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Most Popular Integrations</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These are the integrations our customers use most to automate their workflows.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularIntegrations.map((integration, index) => (
              <motion.div
                key={integration.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-teal-600 to-emerald-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <integration.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{integration.name}</h4>
                <p className="text-gray-600 text-sm mb-3">{integration.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs bg-teal-100 text-teal-800 px-2 py-1 rounded-full font-medium">
                    {integration.status}
                  </span>
                  <ArrowRight className="w-4 h-4 text-teal-600 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Integration Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {integrationFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-teal-600 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h4>
              <p className="text-gray-600">{feature.description}</p>
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
          <div className="bg-gradient-to-r from-teal-600 to-emerald-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Connect Your Tools?</h3>
            <p className="text-teal-100 mb-6 max-w-2xl mx-auto">
              Start integrating your favorite business tools and create powerful automated workflows.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-3 rounded-xl font-semibold transition-colors">
                View All Integrations
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-teal-600 px-8 py-3 rounded-xl font-semibold transition-colors">
                Start Free Trial
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
