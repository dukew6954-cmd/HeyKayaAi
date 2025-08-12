'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, CheckCircle, Star, Users, Zap } from 'lucide-react'
import Link from 'next/link'

const benefits = [
  "All core features included",
  "No hidden fees or add-ons",
  "Enterprise-grade security",
  "24/7 customer support",
  "99.9% uptime guarantee",
  "Mobile apps included"
]

const stats = [
  { number: "10,000+", label: "Active Users" },
  { number: "99.9%", label: "Uptime" },
  { number: "24/7", label: "Support" },
  { number: "50+", label: "Integrations" }
]

export function FeaturesCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-teal-600 via-emerald-600 to-teal-700 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
      
      {/* Floating Elements */}
      <motion.div 
        className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full mix-blend-multiply filter blur-xl"
        animate={{ 
          y: [0, -30, 0],
          x: [0, 20, 0],
          scale: [1, 1.1, 1],
          rotate: [0, 180, 360]
        }}
        transition={{ 
          duration: 20, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />
      <motion.div 
        className="absolute bottom-20 right-10 w-72 h-72 bg-white/10 rounded-full mix-blend-multiply filter blur-xl"
        animate={{ 
          y: [0, 30, 0],
          x: [0, -20, 0],
          scale: [1, 0.9, 1],
          rotate: [360, 180, 0]
        }}
        transition={{ 
          duration: 25, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          {/* Main CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              Ready to Transform Your{' '}
              <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Business?
              </span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-teal-100 mb-8 max-w-3xl mx-auto"
            >
              Join thousands of businesses that have already automated their operations with Pavro. 
              Get started today and see the difference our platform can make.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-6 justify-center mb-12"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg" 
                  className="bg-white text-teal-700 hover:bg-gray-100 px-10 py-5 text-lg font-bold rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 relative overflow-hidden group"
                  asChild
                >
                  <Link href="/contact" className="relative z-10 flex items-center">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-transparent"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.6 }}
                    />
                    Get Started Free
                    <motion.div
                      className="ml-2"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="w-5 h-5" />
                    </motion.div>
                  </Link>
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-2 border-white text-white hover:bg-white hover:text-teal-700 px-10 py-5 text-lg font-bold rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl"
                  asChild
                >
                  <Link href="/pricing">
                    View Pricing
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Benefits Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-16"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="flex items-center text-white group"
              >
                <motion.div
                  className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-3 group-hover:bg-white/30 transition-colors"
                  whileHover={{ scale: 1.2 }}
                >
                  <CheckCircle className="w-4 h-4 text-white" />
                </motion.div>
                <span className="text-sm font-medium">{benefit}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="text-center"
              >
                <motion.div
                  className="text-3xl md:text-4xl font-bold text-white mb-2"
                  whileInView={{ scale: [1, 1.1, 1] }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-teal-100 text-sm font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-8 text-white/80"
          >
            <div className="flex items-center">
              <Star className="w-5 h-5 text-yellow-300 mr-2" />
              <span className="text-sm">4.9/5 Customer Rating</span>
            </div>
            <div className="flex items-center">
              <Users className="w-5 h-5 text-teal-200 mr-2" />
              <span className="text-sm">10,000+ Happy Customers</span>
            </div>
            <div className="flex items-center">
              <Zap className="w-5 h-5 text-yellow-300 mr-2" />
              <span className="text-sm">99.9% Uptime Guarantee</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
