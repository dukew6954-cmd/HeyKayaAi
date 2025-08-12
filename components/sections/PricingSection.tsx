'use client'

import { motion } from 'framer-motion'
import { Check, Star, Zap, Crown, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'

const pricingTiers = [
  {
    name: "Starter",
    price: "$29.99",
    period: "/month",
    description: "Perfect for small businesses just getting started with review management",
    features: [
      "Up to 25 review requests/month",
      "SMS & email review requests",
      "Google review link integration",
      "Basic monthly review report",
      "1 location",
      "Email support"
    ],
    popular: false,
    icon: Star
  },
  {
    name: "Growth",
    price: "$79.99",
    period: "/month",
    description: "Ideal for growing businesses that need unlimited review requests",
    features: [
      "Unlimited review requests",
      "SMS & email review requests",
      "Facebook review integration",
      "Negative review filter",
      "Weekly performance reports",
      "Branded message templates",
      "Priority support",
      "1 location"
    ],
    popular: true,
    icon: Zap
  },
  {
    name: "Pro",
    price: "$129.99",
    period: "/month",
    description: "For established businesses that need advanced AI features",
    features: [
      "All Growth features",
      "AI-powered review reply assistant",
      "Website review widget",
      "Competitor review monitoring",
      "Sentiment analysis dashboard",
      "Advanced analytics",
      "Dedicated account manager",
      "Up to 3 locations"
    ],
    popular: false,
    icon: Crown
  }
]

export function PricingSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Simple, Transparent{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Pricing
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            No setup fees, no contracts, no surprises. Start your free trial today and see the difference 
            AI-powered review management can make for your business.
          </motion.p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
              className={`relative rounded-2xl p-8 ${
                tier.popular 
                  ? 'bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-2xl scale-105' 
                  : 'bg-gray-50 text-gray-900 border border-gray-200'
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-yellow-400 text-yellow-900 px-4 py-2 rounded-full text-sm font-bold">
                    MOST POPULAR
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <tier.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                <div className="text-4xl font-bold mb-1">{tier.price}</div>
                <div className={`text-lg ${tier.popular ? 'text-blue-100' : 'text-gray-600'}`}>
                  {tier.period}
                </div>
                <p className={`text-sm mt-4 ${tier.popular ? 'text-blue-100' : 'text-gray-600'}`}>
                  {tier.description}
                </p>
              </div>

              <ul className="space-y-4 mb-8">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className={`w-5 h-5 mr-3 mt-0.5 flex-shrink-0 ${
                      tier.popular ? 'text-green-300' : 'text-green-500'
                    }`} />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                className={`w-full py-3 font-semibold ${
                  tier.popular 
                    ? 'bg-white text-blue-600 hover:bg-gray-100' 
                    : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700'
                }`}
              >
                {tier.popular ? 'Start Free Trial' : 'Get Started'}
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Start Your Free Trial Today</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              No credit card required • Setup in 5 minutes • Cancel anytime
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
                Start Free Trial
                <Sparkles className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold">
                Schedule Demo
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
