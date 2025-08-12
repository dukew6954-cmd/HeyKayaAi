'use client'

import { motion } from 'framer-motion'
import { 
  Zap, 
  Clock, 
  DollarSign, 
  Users, 
  Shield, 
  BarChart3,
  MessageSquare,
  Calendar,
  Mail,
  Smartphone,
  Target,
  TrendingUp
} from 'lucide-react'

const valueProps = [
  {
    icon: Zap,
    title: "All-in-One Platform",
    description: "Replace 10+ business tools with one comprehensive platform. No more juggling between Calendly, Mailchimp, Podium, and other subscriptions.",
            features: ["Custom branded platform", "Unified dashboard", "Single login"]
  },
  {
    icon: Clock,
    title: "Save 40+ Hours Weekly",
    description: "Automate repetitive tasks and focus on what matters most. Our AI handles calls, scheduling, follow-ups, and customer service 24/7.",
    features: ["AI voice automation", "Smart scheduling", "Auto follow-ups"]
  },
  {
    icon: DollarSign,
    title: "Boost Revenue by 300%",
    description: "Never miss a lead again. Our AI captures every opportunity, books appointments instantly, and follows up automatically to close more deals.",
    features: ["Lead capture", "Instant booking", "Revenue tracking"]
  },
  {
    icon: Users,
    title: "Scale Without Limits",
    description: "Grow your business without hiring more staff. Our automation handles increased call volume, customer inquiries, and marketing campaigns.",
    features: ["Unlimited scalability", "Multi-location support", "Team collaboration"]
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level security with SOC 2 compliance. Your data is protected with encryption, backups, and enterprise-grade infrastructure.",
    features: ["SOC 2 compliant", "Data encryption", "Regular backups"]
  },
  {
    icon: BarChart3,
    title: "Real-Time Analytics",
    description: "Track performance, monitor ROI, and make data-driven decisions. Get insights into calls, conversions, and customer behavior.",
    features: ["Live dashboards", "ROI tracking", "Performance reports"]
  }
]

const toolsReplaced = [
  { name: "Calendly", icon: Calendar, description: "Smart scheduling" },
  { name: "Mailchimp", icon: Mail, description: "Email marketing" },
  { name: "Podium", icon: MessageSquare, description: "Review management" },
  { name: "ClickFunnels", icon: Target, description: "Sales funnels" },
  { name: "Tidio", icon: Smartphone, description: "Live chat" },
  { name: "CallRail", icon: TrendingUp, description: "Call tracking" }
]

export function ValuePropsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Pavro Platform,{' '}
            <span className="bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
              Unlimited Automation
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Stop juggling multiple tools. Pavro gives you everything you need to automate and scale your business in one powerful platform.
          </motion.p>
        </div>

        {/* Tools Replaced Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Replace These Tools</h3>
            <p className="text-gray-600">Consolidate your tech stack and save thousands annually</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {toolsReplaced.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                className="text-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
              >
                <tool.icon className="w-8 h-8 text-teal-600 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-1">{tool.name}</h4>
                <p className="text-sm text-gray-600">{tool.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Value Props Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {valueProps.map((prop, index) => (
                           <motion.div
                 key={prop.title}
                 initial={{ opacity: 0, y: 30, scale: 0.9 }}
                 whileInView={{ opacity: 1, y: 0, scale: 1 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.1 * index, duration: 0.6 }}
                 whileHover={{ 
                   y: -10, 
                   scale: 1.02,
                   boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                 }}
                 className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-100 hover:border-teal-300 transition-all duration-500 relative overflow-hidden group"
               >
                 {/* Animated background gradient */}
                 <motion.div
                   className="absolute inset-0 bg-gradient-to-r from-teal-500/5 via-emerald-500/5 to-teal-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                   animate={{ 
                     backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] 
                   }}
                   transition={{ duration: 3, repeat: Infinity }}
                 />
                 
                 <div className="relative z-10">
                   <motion.div 
                     className="w-16 h-16 bg-gradient-to-r from-teal-600 via-emerald-600 to-teal-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                     whileHover={{ rotate: 360 }}
                     transition={{ duration: 0.6 }}
                   >
                     <prop.icon className="w-8 h-8 text-white" />
                   </motion.div>
                   
                   <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-teal-600 transition-colors duration-300">
                     {prop.title}
                   </h3>
                   
                   <p className="text-gray-600 mb-6 leading-relaxed">{prop.description}</p>
                   
                   <ul className="space-y-3">
                     {prop.features.map((feature, featureIndex) => (
                       <motion.li 
                         key={featureIndex} 
                         className="flex items-center text-sm text-gray-700"
                         initial={{ opacity: 0, x: -20 }}
                         whileInView={{ opacity: 1, x: 0 }}
                         transition={{ delay: 0.2 * index + featureIndex * 0.1 }}
                       >
                         <motion.div 
                           className="w-2 h-2 bg-gradient-to-r from-teal-600 to-emerald-600 rounded-full mr-3"
                           animate={{ scale: [1, 1.2, 1] }}
                           transition={{ duration: 2, repeat: Infinity, delay: featureIndex * 0.2 }}
                         />
                         {feature}
                       </motion.li>
                     ))}
                   </ul>
                 </div>
               </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-teal-600 to-emerald-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="text-teal-100 mb-6 max-w-2xl mx-auto">
              Join 500+ businesses that have automated their operations and scaled their revenue with Pavro.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-teal-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
                Get Started
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-teal-600 transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
