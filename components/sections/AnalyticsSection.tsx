'use client'

import { motion } from 'framer-motion'
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  DollarSign, 
  Clock, 
  Target,
  PieChart,
  Activity,
  Eye,
  Zap,
  CheckCircle,
  ArrowRight
} from 'lucide-react'
import { Button } from '@/components/ui/button'

const analyticsFeatures = [
  {
    icon: BarChart3,
    title: "Real-Time Dashboards",
    description: "Monitor your business performance with live, interactive dashboards",
    features: [
      "Live data updates",
      "Customizable widgets",
      "Mobile responsive",
      "Role-based access"
    ],
    color: "from-blue-500 to-purple-600"
  },
  {
    icon: TrendingUp,
    title: "Performance Analytics",
    description: "Track key metrics and identify growth opportunities",
    features: [
      "Conversion tracking",
      "ROI measurement",
      "Trend analysis",
      "Goal setting"
    ],
    color: "from-green-500 to-teal-600"
  },
  {
    icon: Users,
    title: "Customer Insights",
    description: "Understand your customers better with detailed behavioral analytics",
    features: [
      "Customer journey mapping",
      "Behavioral analysis",
      "Segmentation",
      "Predictive modeling"
    ],
    color: "from-orange-500 to-red-600"
  },
  {
    icon: Target,
    title: "Campaign Analytics",
    description: "Measure and optimize your marketing campaigns in real-time",
    features: [
      "Campaign performance",
      "A/B testing",
      "Attribution modeling",
      "Budget optimization"
    ],
    color: "from-purple-500 to-pink-600"
  }
]

const keyMetrics = [
  {
    icon: DollarSign,
    title: "Revenue Growth",
    value: "+47%",
    description: "Average revenue increase",
    trend: "up"
  },
  {
    icon: Users,
    title: "Customer Acquisition",
    value: "+89%",
    description: "More leads captured",
    trend: "up"
  },
  {
    icon: Clock,
    title: "Response Time",
    value: "-73%",
    description: "Faster customer service",
    trend: "down"
  },
  {
    icon: Target,
    title: "Conversion Rate",
    value: "+156%",
    description: "Higher conversion rates",
    trend: "up"
  }
]

const reportingFeatures = [
  {
    icon: PieChart,
    title: "Custom Reports",
    description: "Create personalized reports for your specific business needs"
  },
  {
    icon: Activity,
    title: "Automated Insights",
    description: "Get AI-powered recommendations and insights automatically"
  },
  {
    icon: Eye,
    title: "Data Visualization",
    description: "Beautiful charts and graphs that make data easy to understand"
  },
  {
    icon: Zap,
    title: "Real-Time Alerts",
    description: "Get notified instantly when important metrics change"
  }
]

export function AnalyticsSection() {
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
            Powerful Analytics for{' '}
            <span className="bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
              Data-Driven Decisions
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Transform your business data into actionable insights with comprehensive analytics, real-time dashboards, and AI-powered recommendations.
          </motion.p>
        </div>

        {/* Key Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {keyMetrics.map((metric, index) => (
            <motion.div
              key={metric.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
              className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border border-gray-100 text-center hover:border-teal-300 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-teal-600 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <metric.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{metric.value}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">{metric.title}</h3>
              <p className="text-gray-600 text-sm">{metric.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Analytics Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {analyticsFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
              className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-100 hover:border-teal-300 transition-all duration-500 group"
            >
              <div className="flex items-start space-x-4">
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.features.map((item, itemIndex) => (
                      <motion.li
                        key={itemIndex}
                        className="flex items-center text-sm text-gray-700"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 * index + itemIndex * 0.1 }}
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-teal-600 to-emerald-600 rounded-full mr-3" />
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Reporting Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="bg-gradient-to-r from-teal-50 to-emerald-50 rounded-3xl p-12 mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Advanced Reporting & Insights</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get deeper insights with advanced reporting capabilities and AI-powered analytics.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {reportingFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-teal-600 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h4>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-teal-600 to-emerald-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Unlock Your Data's Potential?</h3>
            <p className="text-teal-100 mb-6 max-w-2xl mx-auto">
              Start making data-driven decisions with comprehensive analytics and real-time insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-3 rounded-xl font-semibold transition-colors">
                Start Free Trial
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-teal-600 px-8 py-3 rounded-xl font-semibold transition-colors">
                View Demo
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
