'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Phone, Play, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-50 via-emerald-50 to-teal-100">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Eyebrow */}
          <div className="mb-6">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-teal-100 text-teal-800 border border-teal-200">
              <span className="w-2 h-2 bg-teal-500 rounded-full mr-2 animate-pulse"></span>
              Pavro - Business Automation Platform
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-display text-gray-900 mb-6 leading-tight">
            Replace 10+ Business
            <br />
            <span className="bg-gradient-to-r from-teal-500 via-emerald-500 to-teal-600 bg-clip-text text-transparent">
              Tools With One Platform
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Pavro automates your entire business workflow - from lead capture to customer service. 
            Save hours daily and scale your operations with intelligent automation.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button variant="gradient" size="lg" className="text-lg px-8 py-4" asChild>
              <Link href="/contact">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4" asChild>
              <Link href="/pricing">
                See Pricing
              </Link>
            </Button>
          </div>

          {/* Demo Button */}
          <div className="flex items-center justify-center gap-3 text-gray-600 hover:text-teal-600 transition-colors cursor-pointer group">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
              <Play className="w-5 h-5 text-teal-600 ml-1" />
            </div>
            <span className="font-medium">See Pavro in action</span>
          </div>
        </div>
      </div>
    </section>
  )
}
