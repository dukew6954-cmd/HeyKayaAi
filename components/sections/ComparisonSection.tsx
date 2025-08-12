'use client'

import { motion } from 'framer-motion'
import { Check, X, Star, DollarSign, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'

const competitors = [
  {
    name: 'Podium',
    price: '$289',
    period: '/month',
    features: [
      { text: 'Review management', included: true },
      { text: 'SMS marketing', included: true },
      { text: 'Payment processing', included: true },
      { text: 'Website chat', included: true },
      { text: 'Setup fee', included: false },
      { text: 'Contract required', included: false },
    ],
    cons: ['$500 setup fee', 'Annual contracts', 'Complex pricing']
  },
  {
    name: 'Birdeye',
    price: '$199',
    period: '/month',
    features: [
      { text: 'Review management', included: true },
      { text: 'Reputation monitoring', included: true },
      { text: 'Social media integration', included: true },
      { text: 'Analytics dashboard', included: true },
      { text: 'Setup fee', included: false },
      { text: 'Contract required', included: false },
    ],
    cons: ['$300 setup fee', 'Annual contracts', 'Overkill for small businesses']
  },
  {
    name: 'NiceJob',
    price: '$149',
    period: '/month',
    features: [
      { text: 'Review management', included: true },
      { text: 'Video testimonials', included: true },
      { text: 'Social media posting', included: true },
      { text: 'Basic analytics', included: true },
      { text: 'Setup fee', included: false },
      { text: 'Contract required', included: false },
    ],
    cons: ['$200 setup fee', 'Annual contracts', 'Limited features']
  }
]

export function ComparisonSection() {
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
            Why Choose{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Pavro
            </span>
            {' '}Over the Competition?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Get the same powerful review management features without the hefty price tag, 
            setup fees, or long-term contracts.
          </motion.p>
        </div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-4 gap-8"
        >
          {/* Pavro Column */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-6 text-white relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <span className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-bold">
                  BEST VALUE
                </span>
              </div>
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">Pavro</h3>
                <div className="text-4xl font-bold mb-1">$79.99</div>
                <div className="text-blue-100">/month</div>
                <p className="text-sm text-blue-100 mt-2">No setup fees • No contracts</p>
              </div>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <Check className="w-5 h-5 mr-3 text-green-300" />
                  <span className="text-sm">Unlimited review requests</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 mr-3 text-green-300" />
                  <span className="text-sm">AI reply assistant</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 mr-3 text-green-300" />
                  <span className="text-sm">Negative review filter</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 mr-3 text-green-300" />
                  <span className="text-sm">Setup in 5 minutes</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 mr-3 text-green-300" />
                  <span className="text-sm">Cancel anytime</span>
                </div>
              </div>

              <Button className="w-full bg-white text-blue-600 hover:bg-gray-100 font-semibold">
                Start Free Trial
              </Button>
            </div>
          </div>

          {/* Competitors */}
          {competitors.map((competitor, index) => (
            <div key={competitor.name} className="lg:col-span-1">
              <div className="bg-gray-50 rounded-2xl p-6 h-full">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{competitor.name}</h3>
                  <div className="text-3xl font-bold text-gray-900 mb-1">{competitor.price}</div>
                  <div className="text-gray-600">{competitor.period}</div>
                </div>
                
                <div className="space-y-3 mb-6">
                  {competitor.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      {feature.included ? (
                        <Check className="w-5 h-5 mr-3 text-green-500" />
                      ) : (
                        <X className="w-5 h-5 mr-3 text-red-500" />
                      )}
                      <span className="text-sm text-gray-600">{feature.text}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-2">
                  {competitor.cons.map((con, conIndex) => (
                    <div key={conIndex} className="flex items-center">
                      <X className="w-4 h-4 mr-2 text-red-500" />
                      <span className="text-xs text-red-600">{con}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-lg text-gray-600 mb-6">
            <span className="font-semibold text-blue-600">Save $200-400/month</span> compared to the competition
          </p>
          <Button variant="gradient" size="lg" className="text-lg px-8 py-4">
            Start Your Free Trial Today
            <Zap className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
