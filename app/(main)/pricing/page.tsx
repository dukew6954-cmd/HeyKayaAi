'use client'

import { motion } from 'framer-motion'
import { Check, X, Star, Zap, Crown, Sparkles, Shield, TrendingUp, MessageSquare, Bot, BarChart3 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const pricingTiers = [
  {
    name: "Starter",
    price: "$29.99",
    period: "/month",
    description: "Perfect for small businesses just getting started with review management",
    popular: false,
    icon: Star,
    features: [
      { text: "Up to 25 review requests/month", included: true },
      { text: "SMS & email review requests", included: true },
      { text: "Google review link integration", included: true },
      { text: "Basic monthly review report", included: true },
      { text: "1 location", included: true },
      { text: "Email support", included: true },
      { text: "Negative review filter", included: false },
      { text: "AI reply assistant", included: false },
      { text: "Facebook review integration", included: false },
      { text: "Weekly performance reports", included: false },
      { text: "Branded message templates", included: false },
      { text: "Priority support", included: false },
      { text: "Website review widget", included: false },
      { text: "Competitor review monitoring", included: false },
      { text: "Sentiment analysis dashboard", included: false },
      { text: "Advanced analytics", included: false },
      { text: "Dedicated account manager", included: false },
      { text: "Up to 3 locations", included: false }
    ]
  },
  {
    name: "Growth",
    price: "$79.99",
    period: "/month",
    description: "Ideal for growing businesses that need unlimited review requests",
    popular: true,
    icon: Zap,
    features: [
      { text: "Unlimited review requests", included: true },
      { text: "SMS & email review requests", included: true },
      { text: "Facebook review integration", included: true },
      { text: "Negative review filter", included: true },
      { text: "Weekly performance reports", included: true },
      { text: "Branded message templates", included: true },
      { text: "Priority support", included: true },
      { text: "1 location", included: true },
      { text: "AI reply assistant", included: false },
      { text: "Website review widget", included: false },
      { text: "Competitor review monitoring", included: false },
      { text: "Sentiment analysis dashboard", included: false },
      { text: "Advanced analytics", included: false },
      { text: "Dedicated account manager", included: false },
      { text: "Up to 3 locations", included: false }
    ]
  },
  {
    name: "Pro",
    price: "$129.99",
    period: "/month",
    description: "For established businesses that need advanced AI features",
    popular: false,
    icon: Crown,
    features: [
      { text: "All Growth features", included: true },
      { text: "AI-powered review reply assistant", included: true },
      { text: "Website review widget", included: true },
      { text: "Competitor review monitoring", included: true },
      { text: "Sentiment analysis dashboard", included: true },
      { text: "Advanced analytics", included: true },
      { text: "Dedicated account manager", included: true },
      { text: "Up to 3 locations", included: true }
    ]
  }
]

const features = [
  {
    icon: MessageSquare,
    title: "Automatic Review Requests",
    description: "Send personalized review requests via SMS and email after every job or visit"
  },
  {
    icon: Shield,
    title: "Negative Review Filter",
    description: "Our AI detects negative sentiment and keeps bad reviews private"
  },
  {
    icon: Bot,
    title: "AI Reply Assistant",
    description: "Instantly respond to reviews with AI-generated, personalized responses"
  },
  {
    icon: BarChart3,
    title: "Review Analytics",
    description: "Track your review performance and monitor trends over time"
  }
]

export default function PricingPage() {
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
              Simple, Transparent{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Pricing
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto mb-8"
            >
              No setup fees, no contracts, no surprises. Start your free trial today and see the difference 
              AI-powered review management can make for your business.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button variant="gradient" size="lg" className="text-lg px-8 py-4">
                Start Free Trial
                <Sparkles className="ml-2 w-5 h-5" />
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

      {/* Pricing Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                      {feature.included ? (
                        <Check className={`w-5 h-5 mr-3 mt-0.5 flex-shrink-0 ${
                          tier.popular ? 'text-green-300' : 'text-green-500'
                        }`} />
                      ) : (
                        <X className={`w-5 h-5 mr-3 mt-0.5 flex-shrink-0 ${
                          tier.popular ? 'text-red-300' : 'text-red-500'
                        }`} />
                      )}
                      <span className="text-sm">{feature.text}</span>
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

          {/* Feature Highlights */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Powerful Features That Actually Work
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to get more 5-star reviews and build your online reputation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Choose Pavro Over the Competition?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get the same powerful features without the hefty price tag
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Pavro</h3>
              <div className="text-4xl font-bold text-blue-600 mb-2">$79.99</div>
              <div className="text-gray-600 mb-6">/month</div>
              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-center">
                  <Check className="w-5 h-5 text-green-500 mr-2" />
                  <span>No setup fees</span>
                </div>
                <div className="flex items-center justify-center">
                  <Check className="w-5 h-5 text-green-500 mr-2" />
                  <span>No contracts</span>
                </div>
                <div className="flex items-center justify-center">
                  <Check className="w-5 h-5 text-green-500 mr-2" />
                  <span>Cancel anytime</span>
                </div>
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Podium</h3>
              <div className="text-3xl font-bold text-gray-900 mb-2">$289</div>
              <div className="text-gray-600 mb-6">/month</div>
              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-center">
                  <X className="w-5 h-5 text-red-500 mr-2" />
                  <span>$500 setup fee</span>
                </div>
                <div className="flex items-center justify-center">
                  <X className="w-5 h-5 text-red-500 mr-2" />
                  <span>Annual contracts</span>
                </div>
                <div className="flex items-center justify-center">
                  <X className="w-5 h-5 text-red-500 mr-2" />
                  <span>Complex pricing</span>
                </div>
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Birdeye</h3>
              <div className="text-3xl font-bold text-gray-900 mb-2">$199</div>
              <div className="text-gray-600 mb-6">/month</div>
              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-center">
                  <X className="w-5 h-5 text-red-500 mr-2" />
                  <span>$300 setup fee</span>
                </div>
                <div className="flex items-center justify-center">
                  <X className="w-5 h-5 text-red-500 mr-2" />
                  <span>Annual contracts</span>
                </div>
                <div className="flex items-center justify-center">
                  <X className="w-5 h-5 text-red-500 mr-2" />
                  <span>Overkill for small biz</span>
                </div>
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-4">NiceJob</h3>
              <div className="text-3xl font-bold text-gray-900 mb-2">$149</div>
              <div className="text-gray-600 mb-6">/month</div>
              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-center">
                  <X className="w-5 h-5 text-red-500 mr-2" />
                  <span>$200 setup fee</span>
                </div>
                <div className="flex items-center justify-center">
                  <X className="w-5 h-5 text-red-500 mr-2" />
                  <span>Annual contracts</span>
                </div>
                <div className="flex items-center justify-center">
                  <X className="w-5 h-5 text-red-500 mr-2" />
                  <span>Limited features</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Start Your Free Trial Today
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            No credit card required • Setup in 5 minutes • Cancel anytime
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
              Start Free Trial
              <Sparkles className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold" asChild>
              <Link href="/contact">
                Schedule Demo
              </Link>
            </Button>
          </div>
          <p className="text-blue-200 text-sm mt-6">
            Save $200-400/month compared to the competition
          </p>
        </div>
      </section>
    </div>
  )
}
