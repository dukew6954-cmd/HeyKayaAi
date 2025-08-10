'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Check, Star, ArrowRight, Sparkles } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

const plans = [
  {
    name: 'Starter',
    monthlyPrice: 29.99,
    annualPrice: 299.99, // 10 months worth (2 months free)
    description: 'Perfect for small businesses that just need someone to always pick up the phone.',
    features: [
      '24/7 AI Receptionist (inbound calls only)',
      'Caller name & details captured in CRM',
      'Spam/Robo-call filtering',
      'Custom greeting & business info',
      'Appointment booking via integrated calendar',
      'Instant SMS & email confirmations to customers',
      'Call summaries sent to your inbox',
      '(All powered natively in GHL\'s AI Employee)'
    ],
    cta: 'Start Free Trial',
    href: '/contact',
    popular: false
  },
  {
    name: 'Professional',
    monthlyPrice: 59.99,
    annualPrice: 599.99, // 10 months worth (2 months free)
    description: 'For growing businesses that want more than just call answering.',
    features: [
      'Everything in Starter, plus:',
      'Multi-channel messaging (SMS, email, webchat)',
      'CRM + pipeline automation for follow-up',
      'Custom logic workflows (e.g., route VIP clients to owner)',
      'Real-time dashboard with call volume & booking data',
      'Multi-calendar & CRM sync (Clio, Housecall Pro, Booksy, etc.)',
      'Industry-specific FAQ handling for up to 50 questions'
    ],
    cta: 'Start Free Trial',
    href: '/contact',
    popular: true
  },
  {
    name: 'Growth',
    monthlyPrice: 149.99,
    annualPrice: 1499.99, // 10 months worth (2 months free)
    description: 'For busy, multi-location businesses that want full automation.',
    features: [
      'Everything in Professional, plus:',
      'Advanced workflow automation (lead nurturing, upsells)',
      'AI review requests & response management',
      'Content AI for automated blog posts or promos',
      'Funnel AI for building sales/booking pages',
      'Multi-user roles & team notifications (Slack/Teams)',
      'Deeper analytics (conversion tracking, sentiment)'
    ],
    cta: 'Start Free Trial',
    href: '/contact',
    popular: false
  }
]

export function PricingSection() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly')

  const getPrice = (plan: typeof plans[0]) => {
    return billingCycle === 'monthly' ? plan.monthlyPrice : plan.annualPrice
  }

  const getPeriod = () => {
    return billingCycle === 'monthly' ? '/month' : '/year'
  }

  const getSavings = (plan: typeof plans[0]) => {
    const monthlyTotal = plan.monthlyPrice * 12
    const annualPrice = plan.annualPrice
    return monthlyTotal - annualPrice
  }

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
          <h1 className="text-4xl md:text-5xl font-bold font-display text-gray-900 mb-6">
            Simple, fair pricing—{' '}
            <span className="gradient-text">unlimited calls</span>{' '}
            on every plan
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Start with our 30-day free trial. No credit card required. 
            Cancel anytime.
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center mb-8">
            <div className="bg-white rounded-full p-1 shadow-lg border border-gray-200">
              <div className="flex items-center space-x-1">
                <button
                  onClick={() => setBillingCycle('monthly')}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    billingCycle === 'monthly'
                      ? 'bg-teal-500 text-white shadow-md'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setBillingCycle('annual')}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 relative ${
                    billingCycle === 'annual'
                      ? 'bg-teal-500 text-white shadow-md'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Annual
                  {billingCycle === 'annual' && (
                    <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
                      Save 2 months
                    </span>
                  )}
                </button>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
            <div className="flex items-center space-x-2">
              <Check className="w-4 h-4 text-teal-500" />
              <span>No setup fees</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="w-4 h-4 text-teal-500" />
              <span>No contracts</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="w-4 h-4 text-teal-500" />
              <span>Cancel anytime</span>
            </div>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative ${plan.popular ? 'lg:scale-105' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-teal-500 to-emerald-500 text-white shadow-lg">
                    <Star className="w-4 h-4 mr-1" />
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 ${
                plan.popular 
                  ? 'border-teal-500 shadow-xl' 
                  : 'border-gray-100'
              }`}>
                {/* Plan Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {plan.description}
                  </p>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-gray-900">
                      ${getPrice(plan)}
                    </span>
                    <span className="text-gray-600">
                      {getPeriod()}
                    </span>
                  </div>
                  
                  {/* Annual Savings Badge */}
                  {billingCycle === 'annual' && (
                    <div className="mb-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-orange-100 text-orange-700">
                        <Sparkles className="w-3 h-3 mr-1" />
                        Save ${getSavings(plan).toFixed(0)}
                      </span>
                    </div>
                  )}
                  
                  {/* Monthly Equivalent for Annual */}
                  {billingCycle === 'annual' && (
                    <p className="text-sm text-gray-500">
                      ${(getPrice(plan) / 12).toFixed(0)}/month when billed annually
                    </p>
                  )}
                </div>

                {/* Features List */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      {feature.startsWith('Everything in') || feature.includes('(All powered') || feature.includes('(Uses GHL') ? (
                        <span className="text-gray-500 text-sm font-medium">{feature}</span>
                      ) : (
                        <>
                          <Check className="w-5 h-5 text-teal-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </>
                      )}
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button 
                  variant={plan.popular ? "gradient" : "outline"}
                  size="lg"
                  className="w-full"
                  asChild
                >
                  <Link href={plan.href}>
                    {plan.cta}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Annual Plan Benefits */}
        {billingCycle === 'annual' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="bg-gradient-to-r from-teal-50 to-emerald-50 rounded-2xl p-8 border border-teal-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Why choose annual billing?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-gray-900">Save 2 Months</h4>
                    <p className="text-gray-600 text-sm">Get 12 months for the price of 10</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-gray-900">Lock in Pricing</h4>
                    <p className="text-gray-600 text-sm">Protect against future price increases</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center">
                    <Star className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-gray-900">Priority Support</h4>
                    <p className="text-gray-600 text-sm">Faster response times for annual customers</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              All plans include our core features
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="w-6 h-6 text-teal-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">24/7 Availability</h4>
                <p className="text-gray-600 text-sm">Never miss a call, even on weekends and holidays</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="w-6 h-6 text-teal-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">GHL Integration</h4>
                <p className="text-gray-600 text-sm">Seamlessly integrated with GoHighLevel CRM</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="w-6 h-6 text-teal-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">AI-Powered</h4>
                <p className="text-gray-600 text-sm">Advanced AI handles calls with human-like conversations</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
