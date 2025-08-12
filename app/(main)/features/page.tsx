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
  Users,
  CheckCircle,
  ArrowRight
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const mainFeatures = [
  {
    icon: MessageSquare,
    title: "Automatic Review Requests",
    description: "Send personalized review requests via SMS and email after every job or visit. No manual work required.",
    benefits: ["Increase review volume by 40%", "Personalized messaging", "Perfect timing"],
    details: [
      "Automatically detect when a customer completes a service",
      "Send personalized review requests via SMS and email",
      "Customizable messaging templates for your brand",
      "Smart timing to maximize review response rates"
    ]
  },
  {
    icon: Shield,
    title: "Negative Review Filter",
    description: "Our AI detects negative sentiment and keeps bad reviews private. Only happy customers get asked to leave public reviews.",
    benefits: ["Protect your rating", "Smart sentiment analysis", "Maintain 5-star reputation"],
    details: [
      "Advanced AI sentiment analysis to detect negative feedback",
      "Automatically filter out unhappy customers from review requests",
      "Keep negative feedback private while addressing concerns",
      "Maintain your 5-star rating by only asking satisfied customers"
    ]
  },
  {
    icon: Bot,
    title: "AI Reply Assistant",
    description: "Instantly respond to reviews with AI-generated, personalized responses that sound human and professional.",
    benefits: ["Respond in seconds", "Professional tone", "Personalized messages"],
    details: [
      "AI-generated responses that sound natural and professional",
      "Personalized based on your business and review content",
      "One-click approval and posting to review platforms",
      "Maintain consistent brand voice across all responses"
    ]
  },
  {
    icon: BarChart3,
    title: "Review Analytics Dashboard",
    description: "Track your review performance, monitor trends, and see exactly how your reputation is growing over time.",
    benefits: ["Real-time insights", "Performance tracking", "Growth metrics"],
    details: [
      "Real-time dashboard showing review performance",
      "Track review volume, ratings, and response rates",
      "Monitor trends and identify growth opportunities",
      "Export reports for team meetings and analysis"
    ]
  }
]

const additionalFeatures = [
  {
    icon: Zap,
    title: "5-Minute Setup",
    description: "Connect your Google Business Profile and start requesting reviews immediately. No complex configuration needed."
  },
  {
    icon: Star,
    title: "Multi-Platform Integration",
    description: "Manage Google, Facebook, and other review platforms from one simple dashboard."
  },
  {
    icon: Smartphone,
    title: "Mobile App",
    description: "Manage your reviews on the go with our mobile app for iOS and Android."
  },
  {
    icon: Mail,
    title: "Email Automation",
    description: "Set up automated email sequences to follow up with customers who haven't left reviews."
  },
  {
    icon: Filter,
    title: "Smart Filtering",
    description: "Filter reviews by rating, date, platform, and keywords for better organization."
  },
  {
    icon: TrendingUp,
    title: "Competitor Monitoring",
    description: "Track your competitors' review performance and identify opportunities to improve."
  }
]

const workflowSteps = [
  {
    step: "1",
    title: "Connect Your Business",
    description: "Link your Google Business Profile and other review platforms in just a few clicks."
  },
  {
    step: "2",
    title: "Set Up Automation",
    description: "Configure when and how often to send review requests to your customers."
  },
  {
    step: "3",
    title: "AI Goes to Work",
    description: "Our AI automatically detects completed services and sends personalized review requests."
  },
  {
    step: "4",
    title: "Monitor & Respond",
    description: "Track your new reviews and respond instantly with AI-generated, personalized messages."
  }
]

export default function FeaturesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
            >
              Powerful Features That{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Actually Work
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto mb-8"
            >
              Everything you need to get more 5-star reviews and build your online reputation, 
              without the complexity or high costs of enterprise solutions.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button variant="gradient" size="lg" className="text-lg px-8 py-4" asChild>
                <Link href="/pricing">
                  Start Free Trial
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4" asChild>
                <Link href="/contact">
                  Schedule Demo
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Core Features That Drive Results
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI-powered platform handles everything from requesting reviews to responding to them
            </p>
          </div>

          <div className="space-y-20">
            {mainFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                    <feature.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-xl text-gray-600 mb-6">{feature.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-sm font-medium text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <ul className="space-y-3">
                    {feature.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={`bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 ${
                  index % 2 === 1 ? 'lg:col-start-1' : ''
                }`}>
                  <div className="w-full h-64 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                    <feature.icon className="w-16 h-16 text-white opacity-80" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Everything You Need to Succeed
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Additional features that make Pavro the complete review management solution
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalFeatures.map((feature, index) => (
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
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get started in 5 minutes and start seeing results within days
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {workflowSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                className="text-center relative"
              >
                {index < workflowSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 z-0"></div>
                )}
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Proven Results
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              See how our features help businesses get more reviews and grow their online reputation
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">40%</div>
              <div className="text-blue-100">Average Review Increase</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">5 min</div>
              <div className="text-blue-100">Average Setup Time</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">500+</div>
              <div className="text-blue-100">Happy Businesses</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">4.9/5</div>
              <div className="text-blue-100">Customer Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Get More 5-Star Reviews?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Start your free trial today and see how our AI-powered features can transform your online reputation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="gradient" size="lg" className="text-lg px-8 py-4" asChild>
              <Link href="/pricing">
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4" asChild>
              <Link href="/contact">
                Schedule Demo
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
