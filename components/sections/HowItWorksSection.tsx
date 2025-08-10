'use client'

import { motion } from 'framer-motion'
import { Phone, Settings, MessageSquare, CheckCircle, Shield, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'

const steps = [
  {
    icon: Phone,
    title: "Connect Your Phone",
    description: "Forward your existing phone number to HeyKayaAI. No new numbers, no complicated setup.",
    details: "We integrate with your current phone system seamlessly. Just forward calls to our number and we'll handle the rest."
  },
  {
    icon: Settings,
    title: "Customize Your AI",
    description: "Tell us about your business, services, and how you want calls handled.",
    details: "Configure your AI's personality, business hours, services offered, and appointment booking preferences in minutes."
  },
  {
    icon: MessageSquare,
    title: "Test & Train",
    description: "Make a test call and fine-tune your AI's responses to match your business perfectly.",
    details: "Our AI learns from every interaction. Test it with real scenarios and watch it improve automatically."
  },
  {
    icon: CheckCircle,
    title: "Go Live",
    description: "Your AI receptionist is ready to handle calls 24/7, book appointments, and grow your business.",
    details: "Start receiving calls immediately. Your AI will handle everything from basic inquiries to complex appointment scheduling."
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const stepVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6
    }
  }
}

export default function HowItWorksSection() {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto">
        {/* Steps Timeline */}
        <motion.div 
          className="grid gap-8 md:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={index}
                className="flex flex-col md:flex-row items-start gap-6 md:gap-8"
                variants={stepVariants}
              >
                {/* Step Number & Icon */}
                <div className="flex-shrink-0">
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center text-white shadow-lg">
                      <Icon className="w-8 h-8" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-lg text-muted-foreground mb-4">
                    {step.description}
                  </p>
                  <p className="text-muted-foreground">
                    {step.details}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Security & Trust Section */}
        <motion.div 
          className="mt-20 bg-gradient-to-br from-primary-50 to-accent-50 rounded-3xl p-8 md:p-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-primary-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Enterprise-Grade Security
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Your data and conversations are protected with bank-level encryption and compliance standards.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">99.9% Uptime</h3>
              <p className="text-sm text-muted-foreground">
                Redundant infrastructure ensures your AI is always available
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-accent-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-accent-600" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">SOC 2 Compliant</h3>
              <p className="text-sm text-muted-foreground">
                Enterprise security standards for data protection
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">HIPAA Ready</h3>
              <p className="text-sm text-muted-foreground">
                Healthcare compliance for sensitive patient data
              </p>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of businesses that never miss a call with HeyKayaAI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="button-primary">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="button-secondary">
              Book a Demo
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
