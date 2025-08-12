import { Metadata } from 'next'
import { motion } from 'framer-motion'
import { 
  Utensils, 
  Calendar, 
  Users, 
  Phone, 
  MessageSquare,
  Clock,
  TrendingUp,
  CheckCircle,
  Zap,
  Star,
  Heart,
  Sparkles,
  DollarSign,
  ChefHat
} from 'lucide-react'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Restaurants & Catering - AI Receptionist for Food Service | Pavro',
  description: 'Serve up better customer service. Pavro\'s AI handles reservation management, catering inquiries, and takeout orders for restaurants.',
  keywords: 'restaurant AI, catering receptionist, reservation management, takeout orders, restaurant automation, food service AI',
}

const challenges = [
  {
    icon: Phone,
    title: "Reservation Management",
    description: "Complex booking coordination during peak hours and busy periods"
  },
  {
    icon: Users,
    title: "Catering Inquiries",
    description: "Time-consuming event planning and catering coordination"
  },
  {
    icon: Clock,
    title: "Takeout Orders",
    description: "Managing multiple order channels and delivery coordination"
  },
  {
    icon: ChefHat,
    title: "Staff Coordination",
    description: "Difficult to manage kitchen and front-of-house communication"
  }
]

const solutions = [
  {
    icon: Utensils,
    title: "Smart Reservation System",
    description: "Intelligent booking management that optimizes table availability and staff scheduling",
    features: ["Table management", "Staff scheduling", "Waitlist handling", "Special requests"]
  },
  {
    icon: Users,
    title: "Catering Coordination",
    description: "Streamlined event planning and catering inquiry management",
    features: ["Event planning", "Menu customization", "Quote generation", "Client coordination"]
  },
  {
    icon: Clock,
    title: "Takeout & Delivery Management",
    description: "Automated order processing and delivery coordination",
    features: ["Order processing", "Delivery tracking", "Kitchen coordination", "Customer updates"]
  },
  {
    icon: Sparkles,
    title: "Customer Relationship Management",
    description: "Build lasting relationships with automated follow-ups and loyalty programs",
    features: ["Loyalty programs", "Special offers", "Birthday greetings", "Feedback collection"]
  }
]

const benefits = [
  {
    icon: TrendingUp,
    title: "Increase Table Turnover",
    description: "Better reservation management leads to higher revenue"
  },
  {
    icon: Clock,
    title: "Save 25+ Hours Weekly",
    description: "Automate repetitive booking and order tasks"
  },
  {
    icon: Heart,
    title: "Improve Customer Satisfaction",
    description: "Faster service and better communication increase satisfaction"
  },
  {
    icon: DollarSign,
    title: "Boost Revenue",
    description: "More efficient operations and higher customer retention"
  }
]

const testimonials = [
  {
    name: "Maria Santos",
    business: "Santos Italian Restaurant",
    quote: "Pavro has transformed our reservation system. We never double-book and our customers love the instant confirmation.",
    results: "30% increase in table turnover, 40% higher customer satisfaction"
  },
  {
    name: "David Chen",
    business: "Chen's Catering Co.",
    quote: "The catering coordination is incredible. We can handle multiple events simultaneously and never miss a detail.",
    results: "50% more catering events, 25% faster quote generation"
  }
]

export default function RestaurantsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
            >
              Serve Up Better{' '}
              <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                Customer Service
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-600 mb-8"
            >
              Pavro's AI handles reservation management, catering inquiries, and takeout orders 
              so you can focus on what matters most - creating amazing dining experiences.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-8 py-4 rounded-xl text-lg font-semibold">
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Common Restaurant Challenges</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Running a successful restaurant comes with unique challenges. Here's how Pavro solves them.
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Pavro Solutions for Restaurants</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive automation designed specifically for food service businesses.
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
                  <div className="w-16 h-16 bg-gradient-to-r from-amber-600 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0">
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Proven Results for Restaurants</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join successful restaurants that have transformed their operations with Pavro.
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
                className="text-center p-6 bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl border border-amber-100"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-amber-600 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">What Restaurant Owners Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real results from real food service professionals.
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
                  <Utensils className="w-6 h-6 text-amber-500 mr-2" />
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
      <section className="py-20 bg-gradient-to-r from-amber-600 to-orange-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Restaurant?</h2>
          <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
            Join successful restaurants that have automated their operations with Pavro.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-amber-600 hover:bg-gray-100 px-8 py-4 rounded-xl text-lg font-semibold">
              Start Free Trial
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-amber-600 px-8 py-4 rounded-xl text-lg font-semibold">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
