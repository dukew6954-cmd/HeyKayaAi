'use client'


import { motion } from 'framer-motion'
import { 
  Home, 
  Calendar, 
  Users, 
  Phone, 
  MessageSquare,
  Clock,
  TrendingUp,
  CheckCircle,
  Zap,
  MapPin,
  FileText,
  Star,
  DollarSign
} from 'lucide-react'
import { Button } from '@/components/ui/button'

// Metadata moved to layout or handled by parent component

const challenges = [
  {
    icon: Phone,
    title: "Missed Lead Calls",
    description: "Lose potential buyers when you can't answer calls during showings"
  },
  {
    icon: Calendar,
    title: "Showing Coordination",
    description: "Complex scheduling between buyers, sellers, and multiple properties"
  },
  {
    icon: Clock,
    title: "After-Hours Inquiries",
    description: "Clients want information when you're not available"
  },
  {
    icon: Users,
    title: "Lead Qualification",
    description: "Time-consuming process to identify serious buyers from tire-kickers"
  }
]

const solutions = [
  {
    icon: Home,
    title: "24/7 Lead Capture",
    description: "Never miss a potential buyer with AI that qualifies leads and schedules showings",
    features: ["Lead qualification", "Property information", "Showing scheduling", "Follow-up coordination"]
  },
  {
    icon: Calendar,
    title: "Smart Showing Management",
    description: "Intelligent scheduling that coordinates buyers, sellers, and property availability",
    features: ["Showing coordination", "Calendar integration", "Automated confirmations", "Rescheduling assistance"]
  },
  {
    icon: MapPin,
    title: "Property Information Hub",
    description: "Instant access to property details, pricing, and availability for clients",
    features: ["Property details", "Pricing information", "Availability status", "Photo galleries"]
  },
  {
    icon: FileText,
    title: "CRM Integration",
    description: "Seamlessly integrate with your existing real estate CRM and marketing tools",
    features: ["Follow Up Boss integration", "Lead tracking", "Client management", "Marketing automation"]
  }
]

const benefits = [
  {
    icon: TrendingUp,
    title: "Increase Lead Conversion",
    description: "Qualify and nurture leads 24/7 for higher conversion rates"
  },
  {
    icon: Clock,
    title: "Save 30+ Hours Weekly",
    description: "Automate repetitive tasks and focus on closing deals"
  },
  {
    icon: DollarSign,
    title: "Boost Commission Revenue",
    description: "Never miss a potential client and close more deals"
  },
  {
    icon: Zap,
    title: "Improve Client Experience",
    description: "Provide instant responses and professional service"
  }
]

const testimonials = [
  {
    name: "Lisa Thompson",
    business: "Thompson Real Estate Group",
    quote: "Pavro has transformed our lead management. We never miss calls and our clients love the instant property information.",
    results: "45% more qualified leads, 35% faster closing times"
  },
  {
    name: "David Rodriguez",
    business: "Rodriguez Properties",
    quote: "The showing coordination is incredible. Our clients can schedule viewings instantly, and we never double-book.",
    results: "60% more showings scheduled, 50% reduction in no-shows"
  }
]

export default function RealEstatePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
            >
              Close Deals,{' '}
              <span className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                Not Miss Calls
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-600 mb-8"
            >
              Pavro's AI handles lead qualification, showing scheduling, and client inquiries 
              so you can focus on what matters most - closing deals and growing your business.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button className="bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white px-8 py-4 rounded-xl text-lg font-semibold">
                Start Free Trial
              </Button>
              <Button variant="outline" className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 rounded-xl text-lg font-semibold">
                Watch Demo
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Common Real Estate Challenges</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Running a successful real estate business comes with unique challenges. Here's how Pavro solves them.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {challenges.map((challenge, index) => (
              <motion.div
                key={challenge.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                className="text-center p-6 bg-red-50 rounded-2xl border border-red-100"
              >
                <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <challenge.icon className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{challenge.title}</h3>
                <p className="text-gray-600">{challenge.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Pavro Solutions for Real Estate</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive automation designed specifically for real estate professionals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-600 to-amber-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <solution.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{solution.title}</h3>
                    <p className="text-gray-600 mb-6">{solution.description}</p>
                    <ul className="space-y-2">
                      {solution.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                          <CheckCircle className="w-4 h-4 text-green-600 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Proven Results for Real Estate</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join successful real estate professionals who have transformed their business with Pavro.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                className="text-center p-6 bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl border border-orange-100"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-orange-600 to-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">What Real Estate Professionals Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real results from real estate agents and brokers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                className="bg-white p-8 rounded-2xl shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <Home className="w-6 h-6 text-orange-500 mr-2" />
                  <div className="flex text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
                <div className="border-t border-gray-200 pt-4">
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-600">{testimonial.business}</div>
                  <div className="text-sm text-green-600 font-medium mt-2">{testimonial.results}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-amber-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Real Estate Business?</h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Join successful real estate professionals who have automated their lead management with Pavro.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 rounded-xl text-lg font-semibold">
              Start Free Trial
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 rounded-xl text-lg font-semibold">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
