'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Salon Owner",
    business: "Elegance Salon & Spa",
    avatar: "/avatars/sarah.jpg",
    rating: 5,
    quote: "Pavro helped us increase our Google reviews by 60% in just 3 months. The AI reply assistant saves us hours every week, and the negative review filter is brilliant - we only ask happy customers to leave reviews.",
    improvement: "60% more reviews"
  },
  {
    name: "Mike Chen",
    role: "General Contractor",
    business: "Chen Construction Co.",
    avatar: "/avatars/mike.jpg",
    rating: 5,
    quote: "Finally, an affordable alternative to Podium! Setup was incredibly easy and the negative review filter is a game-changer. Our online reputation has never been better.",
    improvement: "40% more reviews"
  },
  {
    name: "Lisa Rodriguez",
    role: "Med Spa Owner",
    business: "Glow Med Spa",
    avatar: "/avatars/lisa.jpg",
    rating: 5,
    quote: "Our online reputation has never been better. Pavro's AI automatically handles all our review requests and responses. It's like having a full-time reputation manager.",
    improvement: "50% more reviews"
  },
  {
    name: "David Thompson",
    role: "HVAC Contractor",
    business: "Thompson Heating & Air",
    avatar: "/avatars/david.jpg",
    rating: 5,
    quote: "The setup was so simple - just 5 minutes and we were requesting reviews. The AI reply assistant is incredibly smart and saves us tons of time responding to reviews.",
    improvement: "45% more reviews"
  },
  {
    name: "Jennifer Park",
    role: "Dental Practice Manager",
    business: "Park Family Dentistry",
    avatar: "/avatars/jennifer.jpg",
    rating: 5,
    quote: "As a dental practice, we need to be careful about patient privacy. Pavro's negative review filter ensures only satisfied patients are asked for reviews, protecting our reputation.",
    improvement: "55% more reviews"
  },
  {
    name: "Robert Martinez",
    role: "Restaurant Owner",
    business: "Martinez Mexican Grill",
    avatar: "/avatars/robert.jpg",
    rating: 5,
    quote: "The automated review requests have been a game-changer for our restaurant. We're getting more 5-star reviews than ever, and the AI responses are always professional and timely.",
    improvement: "70% more reviews"
  }
]

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Trusted by{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              500+ Businesses
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            See how local businesses are transforming their online reputation and getting more customers 
            with AI-powered review management.
          </motion.p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Quote */}
              <div className="mb-6">
                <Quote className="w-8 h-8 text-blue-500 mb-4" />
                <p className="text-gray-700 leading-relaxed">"{testimonial.quote}"</p>
              </div>

              {/* Improvement Badge */}
              <div className="inline-block bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-sm font-semibold mb-4">
                {testimonial.improvement}
              </div>

              {/* Author */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                  <div className="text-sm text-blue-600">{testimonial.business}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Join 500+ Happy Businesses</h3>
            <p className="text-blue-100 mb-6">
              Start your free trial today and see how AI-powered review management can transform your business.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-bold mb-2">4.9/5</div>
                <div className="text-blue-100">Customer Rating</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">40%</div>
                <div className="text-blue-100">Average Review Increase</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">5 min</div>
                <div className="text-blue-100">Average Setup Time</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
