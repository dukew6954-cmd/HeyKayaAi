'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, Users, Heart, Zap, Globe, Award, Coffee } from 'lucide-react'
import Link from 'next/link'

const openPositions = [
  {
    title: 'Senior Full Stack Engineer',
    department: 'Engineering',
    location: 'San Francisco, CA (Hybrid)',
    type: 'Full-time',
    description: 'Build the next generation of AI-powered communication tools that help businesses never miss a call.',
    requirements: [
      '5+ years of experience with React, Node.js, and TypeScript',
      'Experience with AI/ML technologies and APIs',
      'Strong understanding of scalable architecture',
      'Experience with real-time communication systems'
    ]
  },
  {
    title: 'AI/ML Engineer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    description: 'Develop cutting-edge AI models for natural language processing and voice recognition.',
    requirements: [
      '3+ years of experience in machine learning and NLP',
      'Experience with Python, TensorFlow, and PyTorch',
      'Knowledge of speech recognition and synthesis',
      'Experience deploying ML models in production'
    ]
  },
  {
    title: 'Product Marketing Manager',
    department: 'Marketing',
    location: 'San Francisco, CA (Hybrid)',
    type: 'Full-time',
    description: 'Drive product adoption and market expansion for our AI receptionist platform.',
    requirements: [
      '3+ years of B2B product marketing experience',
      'Experience in SaaS or AI/ML products',
      'Strong analytical and communication skills',
      'Experience with go-to-market strategies'
    ]
  },
  {
    title: 'Customer Success Manager',
    department: 'Customer Success',
    location: 'Remote',
    type: 'Full-time',
    description: 'Help customers maximize the value of HeyKayaAI and drive product adoption.',
    requirements: [
      '2+ years of customer success experience',
      'Experience with CRM systems and analytics',
      'Strong problem-solving and communication skills',
      'Experience in B2B SaaS preferred'
    ]
  }
]

const benefits = [
  {
    icon: Heart,
    title: 'Health & Wellness',
    description: 'Comprehensive health, dental, and vision coverage for you and your family'
  },
  {
    icon: Zap,
    title: 'Flexible Work',
    description: 'Remote-first culture with flexible hours and unlimited PTO'
  },
  {
    icon: Users,
    title: 'Team Events',
    description: 'Regular team building, happy hours, and company retreats'
  },
  {
    icon: Globe,
    title: 'Remote Work',
    description: 'Work from anywhere with our distributed team setup'
  },
  {
    icon: Award,
    title: 'Professional Growth',
    description: 'Learning budget, conference attendance, and career development'
  },
  {
    icon: Coffee,
    title: 'Great Culture',
    description: 'Inclusive, collaborative environment where everyone has a voice'
  }
]

export default function CareersPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-teal-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold font-display text-gray-900 mb-6">
              Join our{' '}
              <span className="gradient-text">mission</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Help us revolutionize how businesses communicate. We're building the future of AI-powered customer service, 
              and we need passionate people to join our team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="#open-positions">
                  View Open Positions
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/contact">
                  Contact Us
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-6">
              Our Culture
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe in creating an environment where innovation thrives, collaboration is celebrated, 
              and every team member can make a meaningful impact.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-300"
              >
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-6 h-6 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="open-positions" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-6">
              Open Positions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to make a difference? Check out our current openings and find your perfect role.
            </p>
          </motion.div>

          <div className="space-y-6">
            {openPositions.map((position, index) => (
              <motion.div
                key={position.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {position.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <span className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full">
                        {position.department}
                      </span>
                      <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                        {position.location}
                      </span>
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">
                        {position.type}
                      </span>
                    </div>
                  </div>
                  <Button className="mt-4 lg:mt-0" asChild>
                    <Link href={`/contact?position=${encodeURIComponent(position.title)}`}>
                      Apply Now
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </div>
                
                <p className="text-gray-600 mb-6">
                  {position.description}
                </p>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Requirements:</h4>
                  <ul className="space-y-2">
                    {position.requirements.map((requirement, reqIndex) => (
                      <li key={reqIndex} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600">{requirement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <div className="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-2xl p-8 border border-teal-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Don't see the right fit?
              </h3>
              <p className="text-gray-600 mb-6">
                We're always looking for talented people to join our team. Send us your resume and let's talk about how you can contribute to our mission.
              </p>
              <Button size="lg" asChild>
                <Link href="/contact">
                  Send Your Resume
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
