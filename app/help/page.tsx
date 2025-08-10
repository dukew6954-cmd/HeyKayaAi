'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, Search, BookOpen, MessageCircle, Video, FileText, Phone, Mail, Clock, CheckCircle } from 'lucide-react'
import Link from 'next/link'

const helpCategories = [
  {
    icon: BookOpen,
    title: 'Getting Started',
    description: 'Learn the basics of setting up and using HeyKayaAI',
    articles: 12,
    color: 'bg-blue-100 text-blue-700'
  },
  {
    icon: MessageCircle,
    title: 'Account & Billing',
    description: 'Manage your account, billing, and subscription settings',
    articles: 8,
    color: 'bg-green-100 text-green-700'
  },
  {
    icon: Video,
    title: 'Video Tutorials',
    description: 'Step-by-step video guides for common tasks',
    articles: 15,
    color: 'bg-purple-100 text-purple-700'
  },
  {
    icon: FileText,
    title: 'Integrations',
    description: 'Connect HeyKayaAI with your favorite business tools',
    articles: 20,
    color: 'bg-orange-100 text-orange-700'
  },
  {
    icon: CheckCircle,
    title: 'Troubleshooting',
    description: 'Solve common issues and technical problems',
    articles: 10,
    color: 'bg-red-100 text-red-700'
  },
  {
    icon: Clock,
    title: 'Best Practices',
    description: 'Tips and strategies for optimal performance',
    articles: 14,
    color: 'bg-teal-100 text-teal-700'
  }
]

const popularArticles = [
  {
    title: 'How to Set Up Your First AI Receptionist',
    category: 'Getting Started',
    readTime: '5 min read',
    views: '2.3k'
  },
  {
    title: 'Connecting Your Calendar Integration',
    category: 'Integrations',
    readTime: '3 min read',
    views: '1.8k'
  },
  {
    title: 'Customizing Your Greeting Message',
    category: 'Getting Started',
    readTime: '4 min read',
    views: '1.5k'
  },
  {
    title: 'Understanding Your Call Analytics',
    category: 'Best Practices',
    readTime: '6 min read',
    views: '1.2k'
  },
  {
    title: 'Managing Your Billing Information',
    category: 'Account & Billing',
    readTime: '3 min read',
    views: '980'
  },
  {
    title: 'Setting Up SMS Notifications',
    category: 'Integrations',
    readTime: '4 min read',
    views: '850'
  }
]

const supportOptions = [
  {
    icon: MessageCircle,
    title: 'Live Chat',
    description: 'Get instant help from our support team',
    responseTime: 'Usually responds in minutes',
    available: '24/7'
  },
  {
    icon: Mail,
    title: 'Email Support',
    description: 'Send us a detailed message and we\'ll get back to you',
    responseTime: 'Usually responds within 4 hours',
    available: '24/7'
  },
  {
    icon: Phone,
    title: 'Phone Support',
    description: 'Speak directly with our support specialists',
    responseTime: 'Immediate assistance',
    available: 'Mon-Fri, 9AM-6PM PST'
  }
]

export default function HelpPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-teal-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold font-display text-gray-900 mb-6">
              How can we{' '}
              <span className="gradient-text">help?</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Find answers to your questions, learn how to use HeyKayaAI effectively, 
              and get the support you need to succeed.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
              <input
                type="text"
                placeholder="Search for help articles, tutorials, or contact support..."
                className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-lg"
              />
              <Button className="absolute right-2 top-1/2 transform -translate-y-1/2">
                Search
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Help Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold font-display text-gray-900 mb-4">
              Browse Help Topics
            </h2>
            <p className="text-gray-600">
              Find the information you need organized by category
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {helpCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 border border-gray-200 hover:border-teal-300 hover:shadow-md transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${category.color}`}>
                    <category.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {category.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3">
                      {category.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">
                        {category.articles} articles
                      </span>
                      <ArrowRight className="w-4 h-4 text-gray-400" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Articles */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold font-display text-gray-900 mb-4">
              Popular Articles
            </h2>
            <p className="text-gray-600">
              Most viewed help articles and tutorials
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {popularArticles.map((article, index) => (
              <motion.div
                key={article.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 border border-gray-200 hover:border-teal-300 hover:shadow-md transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-teal-600 transition-colors duration-200">
                      {article.title}
                    </h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span className="bg-gray-100 px-2 py-1 rounded-full">
                        {article.category}
                      </span>
                      <span>{article.readTime}</span>
                      <span>{article.views} views</span>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400 mt-1" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold font-display text-gray-900 mb-4">
              Need More Help?
            </h2>
            <p className="text-gray-600">
              Our support team is here to help you succeed
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportOptions.map((option, index) => (
              <motion.div
                key={option.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-300"
              >
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <option.icon className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {option.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {option.description}
                </p>
                <div className="space-y-2 text-sm text-gray-500">
                  <div className="flex items-center justify-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{option.responseTime}</span>
                  </div>
                  <div>
                    <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs">
                      {option.available}
                    </span>
                  </div>
                </div>
                <Button className="mt-4" variant="outline">
                  Contact Support
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 bg-gradient-to-br from-teal-600 to-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              Still Can't Find What You're Looking For?
            </h2>
            <p className="text-teal-100 mb-8 max-w-2xl mx-auto">
              Our support team is ready to help you with any questions or issues you might have.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="default" className="bg-white text-teal-600 hover:bg-gray-100">
                Start Live Chat
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-teal-600">
                Schedule a Call
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
