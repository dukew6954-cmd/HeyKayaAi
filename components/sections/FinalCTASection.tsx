'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, Clock, CheckCircle } from 'lucide-react'
import Link from 'next/link'

export function FinalCTASection() {
  return (
    <section className="py-24 bg-gradient-to-br from-teal-600 via-emerald-600 to-teal-700 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="floating-blob bg-white/10 w-96 h-96 -top-20 -left-20"
          animate={{
            y: [0, -30, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="floating-blob bg-white/10 w-64 h-64 -bottom-16 -right-16"
          animate={{
            y: [0, 20, 0],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Eyebrow */}
          <div className="mb-6">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-white/20 text-white border border-white/30">
              <Clock className="w-4 h-4 mr-2" />
              We Handle Everything
            </span>
          </div>

          {/* Main Headline */}
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            We'll have you{' '}
            <span className="text-yellow-300">ready in 24 hours</span>
          </h2>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-teal-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            Start your 30-day free trial today. No credit card required. 
            We handle the setup so you don't have to do anything.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button 
              variant="default" 
              size="lg" 
              className="text-lg px-10 py-5 bg-gradient-to-r from-teal-500 to-emerald-500 text-white hover:from-teal-600 hover:to-emerald-600 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 font-bold rounded-full border-0" 
              asChild
            >
              <Link href="/contact" className="flex items-center">
                Start Free Trial
                <ArrowRight className="ml-3 w-6 h-6" />
              </Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-10 py-5 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white hover:text-teal-600 hover:border-white shadow-xl hover:shadow-2xl transform hover:-translate-y-1 font-bold rounded-full" 
              asChild
            >
              <Link href="/contact?demo=true" className="flex items-center">
                Book a Demo
                <ArrowRight className="ml-3 w-6 h-6" />
              </Link>
            </Button>
          </div>

          {/* Features List */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-3 text-teal-100">
              <CheckCircle className="w-6 h-6 text-yellow-300 flex-shrink-0" />
              <span className="text-lg">No credit card required</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-teal-100">
              <CheckCircle className="w-6 h-6 text-yellow-300 flex-shrink-0" />
              <span className="text-lg">Cancel anytime</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-teal-100">
              <CheckCircle className="w-6 h-6 text-yellow-300 flex-shrink-0" />
              <span className="text-lg">Full support included</span>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-8 border-t border-white/20">
            <p className="text-teal-100 text-sm">
              Trusted by 500+ businesses • 99.9% uptime • SOC 2 compliant
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
