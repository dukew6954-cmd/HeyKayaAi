'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight, Star, TrendingUp, Zap } from 'lucide-react'
import Link from 'next/link'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Eyebrow */}
          <div className="mb-6">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-100 text-blue-800 border border-blue-200">
              <Star className="w-4 h-4 mr-2 fill-current" />
              The #1 AI-Powered Review Management Platform
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Get More 5-Star
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Google Reviews
            </span>
            <br />
            <span className="text-3xl md:text-4xl lg:text-5xl text-gray-700">
              Automatically
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Stop losing customers to bad reviews. Our AI automatically requests reviews from happy customers 
            and filters out negative feedback before it goes public. 
            <span className="font-semibold text-blue-600">The affordable alternative to Podium, Birdeye & NiceJob.</span>
          </p>

          {/* Social Proof */}
          <div className="flex items-center justify-center gap-8 mb-8 text-sm text-gray-600">
            <div className="flex items-center">
              <div className="flex text-yellow-400 mr-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span>4.9/5 from 500+ businesses</span>
            </div>
            <div className="flex items-center">
              <TrendingUp className="w-4 h-4 mr-2 text-green-500" />
              <span>Average 40% more reviews</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button variant="gradient" size="lg" className="text-lg px-8 py-4" asChild>
              <Link href="/pricing">
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4" asChild>
              <Link href="/contact">
                Book Demo
              </Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-500">
            <div className="flex items-center">
              <Zap className="w-4 h-4 mr-2 text-blue-500" />
              <span>Setup in 5 minutes</span>
            </div>
            <div className="flex items-center">
              <Star className="w-4 h-4 mr-2 text-blue-500" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center">
              <TrendingUp className="w-4 h-4 mr-2 text-blue-500" />
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
