'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, MessageSquare, Clock, MapPin, Star, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import ContactForm from '@/components/ContactForm'

const contactInfo = [
  {
    icon: Phone,
    title: "Phone Support",
    details: "+1 (555) 123-4567",
    description: "Available Mon-Fri, 9AM-6PM EST"
  },
  {
    icon: Mail,
    title: "Email Support",
    details: "hello@pavro.com",
    description: "We respond within 2 hours"
  },
  {
    icon: MessageSquare,
    title: "Live Chat",
    details: "Available 24/7",
    description: "Get instant help from our team"
  },
  {
    icon: Clock,
    title: "Setup Support",
    details: "5-minute setup",
    description: "We'll help you get started quickly"
  }
]

const faqs = [
  {
    question: "How quickly can I start getting more reviews?",
    answer: "Most businesses see their first new reviews within 1-2 weeks of setup. Our AI starts requesting reviews immediately after you complete the 5-minute setup process."
  },
  {
    question: "Do you offer a free trial?",
    answer: "Yes! We offer a 14-day free trial with no credit card required. You can test all features and see results before committing."
  },
  {
    question: "Can I cancel anytime?",
    answer: "Absolutely. No long-term contracts or cancellation fees. You can cancel your subscription at any time with just a few clicks."
  },
  {
    question: "What if I need help setting up?",
    answer: "Our customer success team is here to help! We offer free setup assistance and will walk you through the entire process to ensure you're getting the most out of Pavro."
  }
]

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
            >
              Get in{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Touch
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto mb-8"
            >
              Ready to get more 5-star reviews? Our team is here to help you get started 
              and answer any questions about our AI-powered review management platform.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button variant="gradient" size="lg" className="text-lg px-8 py-4" asChild>
                <a href="tel:+15551234567">
                  <Phone className="mr-2 w-5 h-5" />
                  Call Us Now
                </a>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4" asChild>
                <a href="mailto:hello@pavro.com">
                  <Mail className="mr-2 w-5 h-5" />
                  Send Email
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <info.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{info.title}</h3>
                <p className="text-blue-600 font-semibold mb-2">{info.details}</p>
                <p className="text-gray-600 text-sm">{info.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Let's Get You More 5-Star Reviews
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Fill out the form and our team will get back to you within 2 hours. 
                We'll help you understand how Pavro can transform your online reputation.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <Star className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Free Consultation</h3>
                    <p className="text-gray-600">Get personalized advice for your business</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <Zap className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Quick Setup</h3>
                    <p className="text-gray-600">We'll help you get started in 5 minutes</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                    <MessageSquare className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Ongoing Support</h3>
                    <p className="text-gray-600">We're here to help you succeed</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about getting started with Pavro
            </p>
          </div>
          
          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                className="bg-gray-50 rounded-2xl p-8"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Getting More Reviews?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join 500+ businesses that are already getting more 5-star reviews with Pavro.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold" asChild>
              <a href="/pricing">
                Start Free Trial
              </a>
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold" asChild>
              <a href="tel:+15551234567">
                Call Us Now
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
