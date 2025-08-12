'use client'

import { motion } from 'framer-motion'
import { Check, Star, Zap, Crown, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'

const platformTiers = [
  {
    name: "Starter",
    price: "$249",
    period: "/month",
    description: "Perfect for small businesses getting started with automation",
    features: [
              "Custom Branded Platform",
      "Up to 1,000 contacts",
      "Basic CRM & Pipeline",
      "Email & SMS Marketing",
      "Calendar & Scheduling",
      "Basic Analytics",
      "Email Support"
    ],
    popular: false,
    icon: Zap
  },
  {
    name: "Growth",
    price: "$349",
    period: "/month",
    description: "Ideal for growing businesses that need advanced features",
    features: [
      "Everything in Starter",
      "Up to 10,000 contacts",
      "Advanced CRM & Automation",
      "Custom Funnels & Landing Pages",
      "Advanced Analytics & Reporting",
      "Team Collaboration Tools",
      "Priority Support",
      "API Access"
    ],
    popular: true,
    icon: Star
  },
  {
    name: "Pro",
    price: "$499",
    period: "/month",
    description: "For established businesses that need enterprise-level features",
    features: [
      "Everything in Growth",
      "Unlimited contacts",
      "Advanced Workflow Automation",
      "Custom Integrations",
      "Multi-location Management",
      "Advanced Security Features",
      "Dedicated Account Manager",
      "Custom Training Sessions"
    ],
    popular: false,
    icon: Crown
  }
]

const aiAddOns = [
  {
    name: "AI Essentials",
    price: "$99",
    period: "/month",
    description: "Perfect for businesses new to AI automation",
    features: [
      "200 minutes Voice AI",
      "Conversation AI",
      "Reviews AI",
      "Content AI",
      "Funnel AI",
      "Workflow AI Assistant",
      "Basic AI Analytics"
    ],
    popular: false
  },
  {
    name: "AI Growth",
    price: "$149",
    period: "/month",
    description: "For businesses ready to scale with AI",
    features: [
      "500 minutes Voice AI",
      "All AI tools included",
      "Advanced AI Analytics",
      "Custom AI Training",
      "Priority AI Support",
      "AI Performance Reports"
    ],
    popular: true
  },
  {
    name: "AI Pro",
    price: "$179",
    period: "/month",
    description: "For high-volume businesses",
    features: [
      "750 minutes Voice AI",
      "All AI tools included",
      "Custom AI Models",
      "Advanced Integrations",
      "Dedicated AI Specialist",
      "Monthly AI Strategy Sessions"
    ],
    popular: false
  },
  {
    name: "AI Unlimited",
    price: "$199",
    period: "/month",
    description: "Unlimited AI automation for unlimited growth",
    features: [
      "Unlimited Voice AI minutes",
      "All AI tools included",
      "Custom AI Development",
              "Custom AI Solutions",
      "24/7 AI Support",
      "Quarterly AI Strategy Reviews"
    ],
    popular: false,
    unlimited: true
  }
]

export function PricingSection() {
  return (
         <section className="py-32 bg-gradient-to-br from-teal-50 via-emerald-50 to-teal-100">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
                     <motion.h2
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
           >
             Choose Your{' '}
             <span className="bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
               Automation Stack
             </span>
           </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Pick your platform tier and add AI automation to create the perfect solution for your business.
          </motion.p>
        </div>

        {/* Platform Tiers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mb-32"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Platform Tiers</h3>
            <p className="text-gray-600">Start with the foundation that fits your business</p>
          </div>
          
                     <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto py-16">
            {platformTiers.map((tier, index) => (
                             <motion.div
                 key={tier.name}
                 initial={{ opacity: 0, y: 30, scale: 0.9 }}
                 whileInView={{ opacity: 1, y: 0, scale: 1 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.1 * index, duration: 0.6 }}
                                    whileHover={{ 
                     y: -5, 
                     scale: tier.popular ? 1.03 : 1.01,
                     boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.25)"
                   }}
                 className={`relative bg-white rounded-2xl p-8 shadow-lg transition-all duration-500 overflow-visible group ${
                   tier.popular ? 'ring-2 ring-teal-500' : ''
                 }`}
               >
                {tier.popular && (
                                     <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                     <span className="bg-gradient-to-r from-teal-600 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                       Most Popular
                     </span>
                   </div>
                )}
                
                                 <div className="text-center mb-8 relative z-10">
                   <motion.div 
                     className="w-20 h-20 bg-gradient-to-r from-teal-600 via-emerald-600 to-teal-700 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
                     whileHover={{ rotate: 360 }}
                     transition={{ duration: 0.6 }}
                   >
                     <tier.icon className="w-10 h-10 text-white" />
                   </motion.div>
                   <h4 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors duration-300">
                     {tier.name}
                   </h4>
                   <div className="flex items-baseline justify-center mb-2">
                     <motion.span 
                       className="text-4xl font-bold bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent"
                       animate={{ scale: [1, 1.05, 1] }}
                       transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                     >
                       {tier.price}
                     </motion.span>
                     <span className="text-gray-600 ml-1">{tier.period}</span>
                   </div>
                   <p className="text-gray-600">{tier.description}</p>
                 </div>

                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                                 <Button 
                   className={`w-full py-3 ${
                     tier.popular 
                       ? 'bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white' 
                       : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                   }`}
                 >
                  Choose {tier.name}
                </Button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* AI Add-Ons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mb-32"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">AI Automation Add-Ons</h3>
            <p className="text-gray-600">Supercharge your platform with AI-powered automation</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto py-16">
            {aiAddOns.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                                 className={`relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 overflow-visible ${
                   plan.unlimited ? 'ring-2 ring-emerald-500 bg-gradient-to-br from-emerald-50 to-teal-50' : ''
                 } ${plan.popular ? 'ring-2 ring-teal-500' : ''}`}
              >
                {plan.unlimited && (
                                     <div className="absolute -top-7 left-1/2 transform -translate-x-1/2">
                     <span className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center">
                       <Sparkles className="w-3 h-3 mr-1" />
                       Unlimited
                     </span>
                   </div>
                )}
                {plan.popular && !plan.unlimited && (
                                     <div className="absolute -top-7 left-1/2 transform -translate-x-1/2">
                     <span className="bg-teal-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                       Popular
                     </span>
                   </div>
                )}
                
                <div className="text-center mb-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h4>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-3xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-sm text-gray-600">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                                 <Button 
                   className={`w-full py-2 text-sm ${
                     plan.unlimited 
                       ? 'bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white' 
                       : plan.popular
                       ? 'bg-teal-600 hover:bg-teal-700 text-white'
                       : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                   }`}
                 >
                  Add {plan.name}
                </Button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Combined Pricing CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
                     <div className="bg-gradient-to-r from-teal-600 to-emerald-600 rounded-2xl p-8 text-white max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Build Your Automation Stack?</h3>
                                      <p className="text-teal-100 mb-6">
               Get started with our custom automation platform. Contact us to set up your personalized solution.
             </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
                Get Started
              </Button>
              <Button variant="outline" className="border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Contact Sales
              </Button>
            </div>
            <p className="text-blue-200 text-sm mt-4">
              Save up to $2,400/year by consolidating your tech stack
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
