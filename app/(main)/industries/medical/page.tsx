import { Metadata } from 'next'
import { motion } from 'framer-motion'
import { 
  Heart, 
  Calendar, 
  Users, 
  Phone, 
  MessageSquare,
  Clock,
  TrendingUp,
  CheckCircle,
  Zap,
  Shield,
  FileText,
  Star,
  Activity
} from 'lucide-react'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Medical Practices - AI Receptionist for Healthcare | Pavro',
  description: 'Patient care starts with the first call. Pavro\'s HIPAA-compliant AI handles patient scheduling, insurance verification, and emergency calls.',
  keywords: 'medical AI, healthcare receptionist, patient scheduling, HIPAA compliant, medical practice automation, doctor office AI',
}

const challenges = [
  {
    icon: Phone,
    title: "Patient Scheduling",
    description: "Complex appointment booking with insurance verification and medical history"
  },
  {
    icon: Clock,
    title: "Emergency Calls",
    description: "Urgent patient needs require immediate attention and proper triage"
  },
  {
    icon: Shield,
    title: "HIPAA Compliance",
    description: "Strict privacy requirements for all patient communications"
  },
  {
    icon: Users,
    title: "Insurance Verification",
    description: "Time-consuming insurance checks and coverage verification"
  }
]

const solutions = [
  {
    icon: Heart,
    title: "HIPAA-Compliant Patient Intake",
    description: "Secure, compliant patient scheduling with automatic insurance verification",
    features: ["HIPAA-compliant conversations", "Insurance verification", "Medical history collection", "Appointment scheduling"]
  },
  {
    icon: Activity,
    title: "Emergency Triage System",
    description: "Intelligent emergency call handling with proper escalation protocols",
    features: ["Emergency assessment", "Urgency classification", "Provider notification", "Patient reassurance"]
  },
  {
    icon: Calendar,
    title: "Smart Medical Scheduling",
    description: "Intelligent scheduling that considers patient needs and provider availability",
    features: ["Appointment optimization", "Follow-up scheduling", "Insurance pre-authorization", "Reminder system"]
  },
  {
    icon: FileText,
    title: "Practice Management Integration",
    description: "Seamless integration with your existing medical practice software",
    features: ["EHR integration", "Patient portal sync", "Billing integration", "Document management"]
  }
]

const benefits = [
  {
    icon: TrendingUp,
    title: "Increase Patient Satisfaction",
    description: "Provide immediate, professional care from the first contact"
  },
  {
    icon: Clock,
    title: "Save 25+ Hours Weekly",
    description: "Automate repetitive scheduling and verification tasks"
  },
  {
    icon: Shield,
    title: "Ensure HIPAA Compliance",
    description: "Built-in compliance with all healthcare privacy regulations"
  },
  {
    icon: Zap,
    title: "Improve Patient Outcomes",
    description: "Faster scheduling leads to better patient care and outcomes"
  }
]

const testimonials = [
  {
    name: "Dr. Sarah Williams",
    business: "Williams Family Practice",
    quote: "Pavro has revolutionized our patient intake. The HIPAA compliance gives us peace of mind, and our patients love the immediate response.",
    results: "40% faster patient scheduling, 95% patient satisfaction"
  },
  {
    name: "Dr. Michael Rodriguez",
    business: "Rodriguez Medical Group",
    quote: "The emergency triage system is invaluable. We never miss urgent cases and our patients get the care they need immediately.",
    results: "60% faster emergency response, 100% urgent case capture"
  }
]

export default function MedicalPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
            >
              Patient Care Starts{' '}
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                With the First Call
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-600 mb-8"
            >
              Pavro's HIPAA-compliant AI handles patient scheduling, insurance verification, and emergency calls 
              so you can focus on providing exceptional patient care.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-4 rounded-xl text-lg font-semibold">
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Common Medical Practice Challenges</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Running a successful medical practice comes with unique challenges. Here's how Pavro solves them.
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Pavro Solutions for Medical Practices</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive, HIPAA-compliant automation designed specifically for healthcare providers.
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
                  <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0">
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Proven Results for Medical Practices</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join successful medical practices that have transformed their patient care with Pavro.
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
                className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border border-green-100"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">What Medical Professionals Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real results from real healthcare providers.
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
                  <Heart className="w-6 h-6 text-green-500 mr-2" />
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
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Medical Practice?</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Join successful medical practices that have automated their patient care with Pavro.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-xl text-lg font-semibold">
              Start Free Trial
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 rounded-xl text-lg font-semibold">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
