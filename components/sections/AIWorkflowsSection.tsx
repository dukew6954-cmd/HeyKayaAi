'use client'

import { motion } from 'framer-motion'
import { 
  ArrowRight, 
  Phone, 
  MessageSquare, 
  Calendar, 
  Mail, 
  CheckCircle,
  TrendingUp,
  Users,
  Zap,
  Brain
} from 'lucide-react'

const workflows = [
  {
    title: "Lead Capture & Qualification",
    description: "Automatically capture and qualify leads 24/7",
    steps: [
      {
        icon: Phone,
        title: "AI Answers Call",
        description: "AI greets caller and identifies intent"
      },
      {
        icon: MessageSquare,
        title: "Smart Qualification",
        description: "Asks targeted questions to qualify lead"
      },
      {
        icon: Calendar,
        title: "Schedule Meeting",
        description: "Books appointment or demo automatically"
      },
      {
        icon: Mail,
        title: "Follow-up Email",
        description: "Sends personalized follow-up immediately"
      }
    ],
    benefits: ["50% faster lead response", "24/7 availability", "Consistent qualification"]
  },
  {
    title: "Customer Support Automation",
    description: "Resolve customer issues instantly with AI",
    steps: [
      {
        icon: MessageSquare,
        title: "Customer Inquiry",
        description: "Customer asks question via chat or call"
      },
      {
        icon: Brain,
        title: "AI Analysis",
        description: "AI understands issue and finds solution"
      },
      {
        icon: CheckCircle,
        title: "Instant Resolution",
        description: "Provides solution or escalates if needed"
      },
      {
        icon: TrendingUp,
        title: "Satisfaction Tracking",
        description: "Measures and improves customer satisfaction"
      }
    ],
    benefits: ["80% faster resolution", "Reduced support costs", "Improved satisfaction"]
  },
  {
    title: "Sales Process Automation",
    description: "Streamline your entire sales pipeline",
    steps: [
      {
        icon: Users,
        title: "Prospect Identification",
        description: "AI identifies high-value prospects"
      },
      {
        icon: Phone,
        title: "Outreach Campaign",
        description: "Automated personalized outreach"
      },
      {
        icon: Calendar,
        title: "Meeting Scheduling",
        description: "Seamless calendar integration"
      },
      {
        icon: TrendingUp,
        title: "Pipeline Management",
        description: "Track and optimize sales pipeline"
      }
    ],
    benefits: ["3x more meetings", "Automated follow-ups", "Pipeline visibility"]
  }
]

export function AIWorkflowsSection() {
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
            AI-Powered{' '}
            <span className="bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
              Business Workflows
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            See how our AI tools work together to automate your most important business processes and drive results.
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
                      <p className="text-gray-600 text-sm">{step.description}</p>
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
                      <Zap className="w-5 h-5 text-teal-600 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{benefit}</span>
                    </motion.div>
                  ))}
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
          <div className="bg-gradient-to-r from-teal-600 to-emerald-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Automate Your Workflows?</h3>
            <p className="text-teal-100 mb-6 max-w-2xl mx-auto">
              Join hundreds of businesses that have transformed their operations with AI-powered workflows.
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
