'use client'

import { motion } from 'framer-motion'
import { 
  ArrowRight, 
  Zap, 
  Users, 
  Mail, 
  Calendar, 
  CreditCard,
  MessageSquare,
  BarChart3,
  CheckCircle,
  TrendingUp,
  Phone,
  FileText,
  ShoppingCart
} from 'lucide-react'

const workflows = [
  {
    title: "Lead to Customer Journey",
    description: "Automate the entire customer acquisition process",
    steps: [
      {
        icon: Phone,
        title: "Lead Capture",
        description: "AI answers call and captures lead info",
        tool: "Pavro AI"
      },
      {
        icon: Users,
        title: "CRM Sync",
        description: "Automatically creates contact in CRM",
        tool: "Salesforce/HubSpot"
      },
      {
        icon: Mail,
        title: "Email Campaign",
        description: "Triggers personalized email sequence",
        tool: "Mailchimp"
      },
      {
        icon: Calendar,
        title: "Meeting Booking",
        description: "Schedules demo or consultation",
        tool: "Calendly"
      }
    ],
    benefits: ["50% faster lead processing", "100% data accuracy", "24/7 automation"]
  },
  {
    title: "E-commerce Order Fulfillment",
    description: "Streamline order processing and customer communication",
    steps: [
      {
        icon: ShoppingCart,
        title: "Order Placed",
        description: "Customer places order on website",
        tool: "Shopify/WooCommerce"
      },
      {
        icon: CreditCard,
        title: "Payment Processing",
        description: "Payment processed and confirmed",
        tool: "Stripe/PayPal"
      },
      {
        icon: Mail,
        title: "Order Confirmation",
        description: "Sends confirmation email to customer",
        tool: "Klaviyo"
      },
      {
        icon: MessageSquare,
        title: "Customer Support",
        description: "AI handles order status inquiries",
        tool: "Pavro AI"
      }
    ],
    benefits: ["Faster order processing", "Reduced support tickets", "Better customer experience"]
  },
  {
    title: "Marketing Campaign Automation",
    description: "Create and optimize marketing campaigns automatically",
    steps: [
      {
        icon: Users,
        title: "Audience Segmentation",
        description: "AI segments customers by behavior",
        tool: "Pavro Analytics"
      },
      {
        icon: Mail,
        title: "Campaign Creation",
        description: "Creates personalized email campaigns",
        tool: "ActiveCampaign"
      },
      {
        icon: BarChart3,
        title: "Performance Tracking",
        description: "Monitors campaign performance in real-time",
        tool: "Google Analytics"
      },
      {
        icon: TrendingUp,
        title: "Optimization",
        description: "AI optimizes campaigns for better results",
        tool: "Pavro AI"
      }
    ],
    benefits: ["3x higher engagement", "Automated optimization", "Better ROI tracking"]
  }
]

const integrationBenefits = [
  {
    icon: Zap,
    title: "Time Savings",
    description: "Save 20+ hours per week with automated workflows"
  },
  {
    icon: CheckCircle,
    title: "Error Reduction",
    description: "Eliminate manual data entry errors with automatic sync"
  },
  {
    icon: TrendingUp,
    title: "Increased Revenue",
    description: "Boost conversions with personalized, timely interactions"
  },
  {
    icon: Users,
    title: "Better Customer Experience",
    description: "Provide seamless, consistent customer service across all channels"
  }
]

export function IntegrationWorkflows() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Powerful{' '}
            <span className="bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
              Integration Workflows
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            See how Pavro connects with your favorite tools to create seamless, automated business processes.
          </motion.p>
        </div>

        {/* Workflows */}
        <div className="space-y-16">
          {workflows.map((workflow, workflowIndex) => (
            <motion.div
              key={workflow.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * workflowIndex }}
              className="bg-white rounded-3xl p-8 shadow-lg"
            >
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">{workflow.title}</h3>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">{workflow.description}</p>
              </div>

              {/* Workflow Steps */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
                {workflow.steps.map((step, stepIndex) => (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * workflowIndex + stepIndex * 0.1 }}
                    className="relative"
                  >
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-teal-600 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <step.icon className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h4>
                      <p className="text-gray-600 text-sm mb-2">{step.description}</p>
                      <div className="inline-block bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-xs font-medium">
                        {step.tool}
                      </div>
                    </div>
                    
                    {/* Arrow connector */}
                    {stepIndex < workflow.steps.length - 1 && (
                      <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-teal-600 to-emerald-600 transform translate-x-4">
                        <ArrowRight className="absolute right-0 top-1/2 transform -translate-y-1/2 w-4 h-4 text-teal-600" />
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Benefits */}
              <div className="bg-gradient-to-r from-teal-50 to-emerald-50 rounded-2xl p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-4 text-center">Key Benefits</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {workflow.benefits.map((benefit, benefitIndex) => (
                    <motion.div
                      key={benefit}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 * workflowIndex + benefitIndex * 0.1 }}
                      className="flex items-center space-x-3"
                    >
                      <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Integration Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Integrated Workflows?</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover the benefits of connecting your tools with Pavro's intelligent automation platform.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {integrationBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-teal-600 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h4>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-teal-600 to-emerald-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Automate Your Workflows?</h3>
            <p className="text-teal-100 mb-6 max-w-2xl mx-auto">
              Start connecting your tools and create powerful automated workflows that save time and boost revenue.
            </p>
            <button className="bg-white text-teal-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
              Get Started Today
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
