'use client'

import { motion } from 'framer-motion'
import { 
  Wrench, 
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
  DollarSign,
  Truck
} from 'lucide-react'
import { Button } from '@/components/ui/button'

const challenges = [
  {
    icon: Phone,
    title: "Emergency Calls",
    description: "Miss urgent service calls during busy periods or after hours"
  },
  {
    icon: Calendar,
    title: "Service Scheduling",
    description: "Complex coordination of crews, equipment, and customer availability"
  },
  {
    icon: Clock,
    title: "After-Hours Emergencies",
    description: "Customers need immediate help when you're not available"
  },
  {
    icon: Users,
    title: "Crew Management",
    description: "Difficult to coordinate multiple crews and service areas"
  }
]

const solutions = [
  {
    icon: Wrench,
    title: "24/7 Emergency Dispatch",
    description: "Never miss an emergency call with AI that prioritizes and routes urgent requests",
    features: ["Emergency prioritization", "Crew dispatch", "Customer updates", "Service tracking"]
  },
  {
    icon: Calendar,
    title: "Smart Service Scheduling",
    description: "Intelligent scheduling that optimizes crew routes and customer availability",
    features: ["Route optimization", "Crew assignment", "Customer coordination", "Equipment tracking"]
  },
  {
    icon: MapPin,
    title: "Geographic Service Management",
    description: "Efficiently manage service areas and dispatch crews based on location",
    features: ["Service area mapping", "Crew location tracking", "Travel time optimization", "Territory management"]
  },
  {
    icon: FileText,
    title: "Project Management Integration",
    description: "Seamlessly integrate with your existing contractor management software",
    features: ["Job tracking", "Invoice generation", "Material ordering", "Customer communication"]
  }
]

const benefits = [
  {
    icon: TrendingUp,
    title: "Increase Service Calls",
    description: "Never miss a potential customer with 24/7 availability"
  },
  {
    icon: Clock,
    title: "Save 20+ Hours Weekly",
    description: "Automate scheduling and dispatch tasks"
  },
  {
    icon: DollarSign,
    title: "Boost Revenue",
    description: "Handle more emergency calls and increase service volume"
  },
  {
    icon: Zap,
    title: "Improve Customer Satisfaction",
    description: "Provide immediate response and professional service"
  }
]

const testimonials = [
  {
    name: "Mike Johnson",
    business: "Johnson Construction Co.",
    quote: "Pavro has transformed our emergency response. We never miss urgent calls and our customers appreciate the immediate attention.",
    results: "50% more emergency calls handled, 40% faster response times"
  },
  {
    name: "Sarah Martinez",
    business: "Martinez Home Services",
    quote: "The scheduling optimization is incredible. Our crews are more efficient and we're completing more jobs per day.",
    results: "35% more jobs completed, 25% reduction in travel time"
  }
]

export default function ContractorsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-slate-50 to-zinc-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
            >
              Handle Emergency{' '}
              <span className="bg-gradient-to-r from-gray-600 to-slate-600 bg-clip-text text-transparent">
                Calls 24/7
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-600 mb-8"
            >
              Pavro's AI manages emergency dispatch, service scheduling, and customer service 
              so you can focus on what matters most - delivering quality work and growing your business.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button className="bg-gradient-to-r from-gray-600 to-slate-600 hover:from-gray-700 hover:to-slate-700 text-white px-8 py-4 rounded-xl text-lg font-semibold">
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Common Contractor Challenges</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Running a successful contracting business comes with unique challenges. Here's how Pavro solves them.
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Pavro Solutions for Contractors</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive automation designed specifically for construction and home service contractors.
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
                  <div className="w-16 h-16 bg-gradient-to-r from-gray-600 to-slate-600 rounded-xl flex items-center justify-center flex-shrink-0">
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Proven Results for Contractors</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join successful contractors who have transformed their business with Pavro.
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
                className="text-center p-6 bg-gradient-to-br from-gray-50 to-slate-50 rounded-2xl border border-gray-100"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-gray-600 to-slate-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">What Contractors Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real results from real construction and home service professionals.
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
                  <Wrench className="w-6 h-6 text-gray-500 mr-2" />
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
      <section className="py-20 bg-gradient-to-r from-gray-600 to-slate-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Contracting Business?</h2>
          <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
            Join successful contractors who have automated their service management with Pavro.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-gray-600 hover:bg-gray-100 px-8 py-4 rounded-xl text-lg font-semibold">
              Start Free Trial
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-gray-600 px-8 py-4 rounded-xl text-lg font-semibold">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
