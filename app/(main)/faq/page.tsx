'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { ChevronDown, ChevronUp, Star, Zap, Shield, MessageSquare } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const faqCategories = [
  {
    title: "Getting Started",
    icon: Zap,
    questions: [
      {
        question: "How quickly can I start getting more reviews?",
        answer: "Most businesses see their first new reviews within 1-2 weeks of setup. Our AI starts requesting reviews immediately after you complete the 5-minute setup process. The key is that we automatically detect when customers complete services and send personalized review requests at the perfect time."
      },
      {
        question: "Do you offer a free trial?",
        answer: "Yes! We offer a 14-day free trial with no credit card required. You can test all features and see results before committing. During your trial, you'll have access to all Growth plan features so you can experience the full power of our AI-powered review management platform."
      },
      {
        question: "What if I need help setting up?",
        answer: "Our customer success team is here to help! We offer free setup assistance and will walk you through the entire process to ensure you're getting the most out of Pavro. We can help you connect your Google Business Profile, set up automation rules, and customize your messaging templates."
      },
      {
        question: "Can I cancel anytime?",
        answer: "Absolutely. No long-term contracts or cancellation fees. You can cancel your subscription at any time with just a few clicks. We believe in earning your business every month, not locking you into expensive contracts like our competitors."
      }
    ]
  },
  {
    title: "Features & Functionality",
    icon: Star,
    questions: [
      {
        question: "How does the negative review filter work?",
        answer: "Our AI uses advanced sentiment analysis to detect when customers are unhappy with their experience. When negative sentiment is detected, we automatically filter those customers out of review requests, keeping bad reviews private while still allowing you to address their concerns directly."
      },
      {
        question: "What platforms do you integrate with?",
        answer: "We integrate with Google Business Profile, Facebook, Yelp, and other major review platforms. You can manage all your reviews from one simple dashboard, and our AI will automatically post responses to the appropriate platform when you approve them."
      },
      {
        question: "How does the AI reply assistant work?",
        answer: "Our AI analyzes each review and generates a personalized, professional response that matches your brand voice. You can review and edit the response before posting, or set up automatic posting for common scenarios. The AI learns from your preferences to improve over time."
      },
      {
        question: "Can I customize the review request messages?",
        answer: "Yes! You can create custom messaging templates for your brand, including personalized greetings, your business name, and specific service mentions. You can also set different messages for different types of services or customer segments."
      }
    ]
  },
  {
    title: "Pricing & Plans",
    icon: Shield,
    questions: [
      {
        question: "What's the difference between the plans?",
        answer: "Starter ($29.99/mo) is perfect for small businesses with up to 25 review requests per month. Growth ($79.99/mo) includes unlimited requests, negative review filtering, and Facebook integration. Pro ($129.99/mo) adds AI reply assistant, competitor monitoring, and up to 3 locations."
      },
      {
        question: "Are there any setup fees?",
        answer: "No setup fees! Unlike our competitors who charge $200-500 in setup fees, we believe you should be able to start improving your online reputation immediately without any upfront costs."
      },
      {
        question: "Do you offer discounts for annual billing?",
        answer: "We keep our pricing simple and transparent. While we don't offer annual discounts, we also don't require annual contracts like our competitors. You can pay month-to-month and cancel anytime."
      },
      {
        question: "What happens if I exceed my monthly review request limit?",
        answer: "If you're on the Starter plan and exceed 25 review requests, we'll notify you and suggest upgrading to Growth for unlimited requests. There are no overage charges - we want to help you succeed, not penalize you for growth."
      }
    ]
  },
  {
    title: "Support & Success",
    icon: MessageSquare,
    questions: [
      {
        question: "What kind of support do you offer?",
        answer: "We offer email support for all plans, priority support for Growth and Pro plans, and dedicated account management for Pro customers. Our team typically responds within 2 hours during business hours, and we're always happy to help you get the most out of Pavro."
      },
      {
        question: "Do you provide training or onboarding?",
        answer: "Yes! We offer free onboarding sessions for all customers, where we'll walk you through setup, show you how to use all features, and help you create your first automation rules. We also have video tutorials and a comprehensive knowledge base."
      },
      {
        question: "Can I see examples of how other businesses use Pavro?",
        answer: "Absolutely! We have case studies and testimonials from businesses across different industries. We can also connect you with similar businesses in your industry who are willing to share their experience and results with Pavro."
      },
      {
        question: "What if I'm not seeing the results I expected?",
        answer: "We're committed to your success! If you're not seeing the expected results, our team will work with you to optimize your setup, review your messaging, and identify opportunities for improvement. We want every customer to succeed with Pavro."
      }
    ]
  }
]

export default function FAQPage() {
  const [openQuestions, setOpenQuestions] = useState<{ [key: string]: boolean }>({})

  const toggleQuestion = (questionKey: string) => {
    setOpenQuestions(prev => ({
      ...prev,
      [questionKey]: !prev[questionKey]
    }))
  }

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
              Frequently Asked{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Questions
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto mb-8"
            >
              Everything you need to know about getting more 5-star reviews with our 
              AI-powered review management platform.
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
                  Contact Support
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {faqCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * categoryIndex }}
              >
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{category.title}</h2>
                </div>

                <div className="space-y-4">
                  {category.questions.map((faq, questionIndex) => {
                    const questionKey = `${categoryIndex}-${questionIndex}`
                    const isOpen = openQuestions[questionKey]

                    return (
                      <motion.div
                        key={questionIndex}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * questionIndex }}
                        className="bg-gray-50 rounded-2xl overflow-hidden"
                      >
                        <button
                          onClick={() => toggleQuestion(questionKey)}
                          className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
                        >
                          <h3 className="text-lg font-semibold text-gray-900 pr-4">
                            {faq.question}
                          </h3>
                          {isOpen ? (
                            <ChevronUp className="w-6 h-6 text-blue-600 flex-shrink-0" />
                          ) : (
                            <ChevronDown className="w-6 h-6 text-blue-600 flex-shrink-0" />
                          )}
                        </button>
                        
                        {isOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="px-8 pb-6"
                          >
                            <p className="text-gray-600 leading-relaxed">
                              {faq.answer}
                            </p>
                          </motion.div>
                        )}
                      </motion.div>
                    )
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Still Have Questions?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Our team is here to help you get the most out of Pavro and start getting more 5-star reviews.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Live Chat</h3>
                <p className="text-gray-600 text-sm">Get instant help from our support team</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Support</h3>
                <p className="text-gray-600 text-sm">We respond within 2 hours</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Free Demo</h3>
                <p className="text-gray-600 text-sm">See Pavro in action with a personalized demo</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gradient" size="lg" className="text-lg px-8 py-4" asChild>
                <Link href="/contact">
                  Contact Support
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4" asChild>
                <Link href="/pricing">
                  Start Free Trial
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get More 5-Star Reviews?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join 500+ businesses that are already getting more reviews and growing their online reputation with Pavro.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold" asChild>
              <Link href="/pricing">
                Start Free Trial
              </Link>
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold" asChild>
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
