import { Metadata } from 'next'
import { motion } from 'framer-motion'
import { 
  Scissors, 
  Calendar, 
  Users, 
  Star, 
  Phone, 
  MessageSquare,
  Clock,
  TrendingUp,
  CheckCircle,
  Zap,
  Heart,
  Sparkles
} from 'lucide-react'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Salons & Spas - AI Receptionist for Beauty & Wellness | Pavro',
  description: 'Transform your salon or spa with AI-powered appointment booking, customer service, and marketing automation. Never miss a booking again.',
  keywords: 'salon AI, spa automation, beauty appointment booking, salon receptionist, spa management, beauty business automation',
}

const challenges = [
  {
    icon: Phone,
    title: "Missed Calls & Bookings",
    description: "Lose revenue when you can't answer calls during busy periods or after hours"
  },
  {
    icon: Calendar,
    title: "Manual Scheduling",
    description: "Time-consuming appointment booking and rescheduling processes"
  },
  {
    icon: Users,
    title: "Customer Retention",
    description: "Difficulty following up with clients and maintaining relationships"
  },
  {
    icon: Star,
    title: "Review Management",
    description: "Missing opportunities to collect and respond to customer reviews"
  }
]

const solutions = [
  {
    icon: Phone,
    title: "24/7 AI Receptionist",
    description: "Never miss a call with AI that books appointments, answers questions, and handles cancellations",
    features: ["Instant appointment booking", "Service recommendations", "Pricing inquiries", "Cancellation handling"]
  },
  {
    icon: Calendar,
    title: "Smart Scheduling",
    description: "Automated appointment management with intelligent calendar integration",
    features: ["Real-time availability", "Automatic reminders", "Rescheduling assistance", "Waitlist management"]
  },
  {
    icon: Users,
    title: "Customer Relationship Management",
    description: "Build lasting relationships with automated follow-ups and personalized communication",
    features: ["Post-service follow-ups", "Birthday greetings", "Special offers", "Loyalty programs"]
  },
  {
    icon: Star,
    title: "Review & Reputation Management",
    description: "Automatically collect and respond to customer reviews to build your online reputation",
    features: ["Review requests", "Response automation", "Social media integration", "Reputation monitoring"]
  }
]

const benefits = [
  {
    icon: TrendingUp,
    title: "Increase Bookings by 40%",
    description: "Never miss a potential client with 24/7 availability"
  },
  {
    icon: Clock,
    title: "Save 15+ Hours Weekly",
    description: "Automate repetitive tasks and focus on your clients"
  },
  {
    icon: Heart,
    title: "Improve Customer Satisfaction",
    description: "Provide instant responses and personalized service"
  },
  {
    icon: Zap,
    title: "Boost Revenue",
    description: "Increase repeat bookings and referrals through better service"
  }
]

const testimonials = [
  {
    name: "Sarah Johnson",
    business: "Bliss Beauty Salon",
    quote: "Pavro has transformed our booking process. We never miss calls and our clients love the instant booking experience.",
    results: "40% more bookings, 5-star reviews increased"
  },
  {
    name: "Mike Chen",
    business: "Serenity Spa",
    quote: "The automated follow-ups have dramatically improved our client retention. Our repeat booking rate is up 60%.",
    results: "60% higher retention, 25% more revenue"
  }
]

export default function SalonsSpasPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-pink-50 via-purple-50 to-teal-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
            >
              Transform Your{' '}
              <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                Salon or Spa
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-600 mb-8"
            >
              Never miss a booking again. Pavro's AI receptionist handles appointments, customer service, and marketing 
              so you can focus on what you do best - making your clients beautiful and relaxed.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl text-lg font-semibold">
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Common Salon & Spa Challenges</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Running a successful salon or spa comes with unique challenges. Here's how Pavro solves them.
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Pavro Solutions for Salons & Spas</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive automation designed specifically for beauty and wellness businesses.
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
                  <div className="w-16 h-16 bg-gradient-to-r from-pink-600 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Proven Results for Salons & Spas</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join hundreds of successful salons and spas that have transformed their business with Pavro.
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
                className="text-center p-6 bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl border border-pink-100"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">What Salon & Spa Owners Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real results from real beauty and wellness businesses.
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
                  <Sparkles className="w-6 h-6 text-yellow-500 mr-2" />
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
      <section className="py-20 bg-gradient-to-r from-pink-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Salon or Spa?</h2>
          <p className="text-xl text-pink-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of successful beauty and wellness businesses that have automated their operations with Pavro.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-pink-600 hover:bg-gray-100 px-8 py-4 rounded-xl text-lg font-semibold">
              Start Free Trial
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-pink-600 px-8 py-4 rounded-xl text-lg font-semibold">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
