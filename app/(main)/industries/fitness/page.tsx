'use client'

import { motion } from 'framer-motion'
import { 
  Dumbbell, 
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
  Target
} from 'lucide-react'
import { Button } from '@/components/ui/button'

const challenges = [
  {
    icon: Phone,
    title: "Class Scheduling",
    description: "Complex coordination of classes, instructors, and member availability"
  },
  {
    icon: Users,
    title: "Membership Management",
    description: "Time-consuming membership inquiries and enrollment processes"
  },
  {
    icon: Clock,
    title: "After-Hours Inquiries",
    description: "Members want information when you're not available"
  },
  {
    icon: Target,
    title: "Personal Training",
    description: "Difficult to coordinate personal training sessions and client schedules"
  }
]

const solutions = [
  {
    icon: Dumbbell,
    title: "Smart Class Booking",
    description: "Intelligent class scheduling that optimizes instructor and member availability",
    features: ["Class registration", "Instructor assignment", "Capacity management", "Waitlist handling"]
  },
  {
    icon: Users,
    title: "Membership Management",
    description: "Automated membership inquiries, enrollment, and account management",
    features: ["Membership inquiries", "Enrollment assistance", "Account updates", "Billing support"]
  },
  {
    icon: Target,
    title: "Personal Training Coordination",
    description: "Streamlined personal training session scheduling and client management",
    features: ["Session scheduling", "Client coordination", "Progress tracking", "Goal setting"]
  },
  {
    icon: Sparkles,
    title: "Member Engagement",
    description: "Automated member communication and engagement programs",
    features: ["Welcome sequences", "Class reminders", "Achievement celebrations", "Community building"]
  }
]

const benefits = [
  {
    icon: TrendingUp,
    title: "Increase Class Attendance",
    description: "Better scheduling leads to higher class participation"
  },
  {
    icon: Clock,
    title: "Save 20+ Hours Weekly",
    description: "Automate repetitive scheduling and membership tasks"
  },
  {
    icon: Heart,
    title: "Improve Member Retention",
    description: "Better communication and engagement increase member loyalty"
  },
  {
    icon: DollarSign,
    title: "Boost Revenue",
    description: "More efficient operations and higher member satisfaction"
  }
]

const testimonials = [
  {
    name: "Alex Rodriguez",
    business: "PowerFit Studio",
    quote: "Pavro has transformed our class scheduling. Members can book instantly and we never have empty classes.",
    results: "40% increase in class attendance, 30% higher member retention"
  },
  {
    name: "Sarah Johnson",
    business: "Elite Fitness Club",
    quote: "The membership management is incredible. New members can join 24/7 and our staff can focus on training.",
    results: "50% faster enrollment process, 25% more new members"
  }
]

export default function FitnessPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
            >
              Build Strength in{' '}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Customer Service
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-600 mb-8"
            >
              Pavro's AI handles class scheduling, membership management, and personal training coordination 
              so you can focus on what matters most - helping members achieve their fitness goals.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl text-lg font-semibold">
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Common Fitness Studio Challenges</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Running a successful fitness business comes with unique challenges. Here's how Pavro solves them.
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Pavro Solutions for Fitness Studios</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive automation designed specifically for fitness and wellness businesses.
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
                  <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Proven Results for Fitness Studios</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join successful fitness businesses that have transformed their operations with Pavro.
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
                className="text-center p-6 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl border border-indigo-100"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">What Fitness Studio Owners Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real results from real fitness and wellness professionals.
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
                  <Dumbbell className="w-6 h-6 text-indigo-500 mr-2" />
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
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Fitness Studio?</h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Join successful fitness businesses that have automated their operations with Pavro.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-4 rounded-xl text-lg font-semibold">
              Start Free Trial
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-indigo-600 px-8 py-4 rounded-xl text-lg font-semibold">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
