'use client'

import { motion } from 'framer-motion'
import { Heart, Users, Target, Zap, Shield, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'

const values = [
  {
    icon: Heart,
    title: "Customer First",
    description: "Every decision we make starts with our customers' success in mind."
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "We constantly push the boundaries of what AI can do for businesses."
  },
  {
    icon: Shield,
    title: "Trust & Security",
    description: "Your data and conversations are protected with enterprise-grade security."
  },
  {
    icon: Users,
    title: "Human-Centered AI",
    description: "We build AI that enhances human connection, not replaces it."
  }
]

const team = [
  {
    name: "Sarah Chen",
    role: "CEO & Co-Founder",
    bio: "Former VP of Product at Twilio. Passionate about making AI accessible to every business.",
    avatar: "/avatars/sarah.jpg"
  },
  {
    name: "Marcus Rodriguez",
    role: "CTO & Co-Founder",
    bio: "AI researcher with 15+ years building conversational systems. PhD from Stanford.",
    avatar: "/avatars/marcus.jpg"
  },
  {
    name: "Dr. Emily Watson",
    role: "Head of AI",
    bio: "Leading our AI research team. Previously at OpenAI and Google Brain.",
    avatar: "/avatars/emily.jpg"
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

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6
    }
  }
}

export default function AboutSection() {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto">
        {/* Mission Section */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Our Mission
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            We believe every business deserves to never miss a call. Whether you're a solo entrepreneur 
            or a growing company, missed calls mean missed opportunities. That's why we built HeyKayaAI 
            - an AI receptionist that works 24/7, speaks your language, and grows with your business.
          </p>
        </motion.div>

        {/* Values Section */}
        <motion.div 
          className="mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            Our Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={index}
                  className="text-center p-6 rounded-2xl bg-gradient-to-br from-primary-50 to-accent-50 hover:shadow-lg transition-all duration-300"
                  variants={itemVariants}
                >
                  <div className="w-16 h-16 bg-primary-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {value.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            Meet Our Team
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                className="text-center p-6 rounded-2xl bg-card hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="w-24 h-24 bg-gradient-to-br from-primary-400 to-accent-400 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {member.name}
                </h3>
                <p className="text-primary-600 font-semibold mb-3">
                  {member.role}
                </p>
                <p className="text-muted-foreground text-sm">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          className="bg-gradient-to-br from-primary-500 to-accent-500 rounded-3xl p-8 md:p-12 text-white mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">
              Growing Together
            </h2>
            <p className="text-xl opacity-90">
              Join thousands of businesses that trust HeyKayaAI
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">10,000+</div>
              <div className="opacity-90">Businesses Served</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">2M+</div>
              <div className="opacity-90">Calls Handled</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">99.9%</div>
              <div className="opacity-90">Uptime</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">4.9/5</div>
              <div className="opacity-90">Customer Rating</div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Join Our Mission
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Ready to never miss another call? Start your free trial today and see how HeyKayaAI can transform your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="button-primary">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="button-secondary">
              Contact Us
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
