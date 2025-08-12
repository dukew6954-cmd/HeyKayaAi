'use client'

import { motion } from 'framer-motion'
import { 
  FileText, 
  Download, 
  Share2, 
  Calendar, 
  BarChart3, 
  PieChart,
  TrendingUp,
  Users,
  DollarSign,
  Target,
  CheckCircle,
  Zap
} from 'lucide-react'

const reportTypes = [
  {
    icon: BarChart3,
    title: "Performance Reports",
    description: "Track key performance indicators and business metrics",
    features: ["Revenue tracking", "Conversion rates", "Customer acquisition", "ROI analysis"],
    color: "from-blue-500 to-purple-600"
  },
  {
    icon: Users,
    title: "Customer Reports",
    description: "Understand customer behavior and satisfaction",
    features: ["Customer journey", "Satisfaction scores", "Churn analysis", "Lifetime value"],
    color: "from-green-500 to-teal-600"
  },
  {
    icon: TrendingUp,
    title: "Growth Reports",
    description: "Monitor business growth and expansion metrics",
    features: ["Growth trends", "Market analysis", "Expansion opportunities", "Competitive insights"],
    color: "from-orange-500 to-red-600"
  },
  {
    icon: Target,
    title: "Campaign Reports",
    description: "Measure marketing campaign effectiveness",
    features: ["Campaign performance", "A/B test results", "Attribution modeling", "Budget optimization"],
    color: "from-purple-500 to-pink-600"
  }
]

const reportingFeatures = [
  {
    icon: FileText,
    title: "Custom Report Builder",
    description: "Create personalized reports with drag-and-drop interface"
  },
  {
    icon: Download,
    title: "Export Options",
    description: "Export reports in PDF, Excel, CSV, and other formats"
  },
  {
    icon: Share2,
    title: "Automated Sharing",
    description: "Schedule and automatically share reports with stakeholders"
  },
  {
    icon: Calendar,
    title: "Scheduled Reports",
    description: "Set up recurring reports delivered on your schedule"
  }
]

const reportExamples = [
  {
    title: "Daily Sales Summary",
    description: "Track daily revenue, conversions, and top-performing products",
    metrics: ["Revenue", "Orders", "Conversion Rate", "Top Products"]
  },
  {
    title: "Weekly Customer Insights",
    description: "Monitor customer behavior, satisfaction, and retention metrics",
    metrics: ["New Customers", "Churn Rate", "Satisfaction Score", "LTV"]
  },
  {
    title: "Monthly Business Review",
    description: "Comprehensive monthly overview of all business metrics",
    metrics: ["Revenue Growth", "Customer Growth", "Market Share", "ROI"]
  }
]

export function ReportingFeatures() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Advanced{' '}
            <span className="bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
              Reporting & Insights
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Create beautiful, actionable reports that help you make informed business decisions and track your success.
          </motion.p>
        </div>

        {/* Report Types */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {reportTypes.map((report, index) => (
            <motion.div
              key={report.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 group"
            >
              <div className="flex items-start space-x-4">
                <div className={`w-16 h-16 bg-gradient-to-r ${report.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <report.icon className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors duration-300">
                    {report.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {report.description}
                  </p>
                  <ul className="space-y-2">
                    {report.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        className="flex items-center text-sm text-gray-700"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 * index + featureIndex * 0.1 }}
                      >
                        <CheckCircle className="w-4 h-4 text-teal-600 mr-3 flex-shrink-0" />
                        {feature}
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
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-r from-teal-50 to-emerald-50 rounded-3xl p-12 mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Powerful Reporting Features</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to create, customize, and share professional reports.
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

        {/* Report Examples */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Pre-Built Report Templates</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get started quickly with our library of professional report templates.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reportExamples.map((example, index) => (
              <motion.div
                key={example.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-teal-600 to-emerald-600 rounded-xl flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{example.title}</h4>
                <p className="text-gray-600 mb-4">{example.description}</p>
                <div className="space-y-2">
                  {example.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-teal-600 rounded-full mr-3" />
                      {metric}
                    </div>
                  ))}
                </div>
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
            <h3 className="text-2xl font-bold mb-4">Ready to Create Amazing Reports?</h3>
            <p className="text-teal-100 mb-6 max-w-2xl mx-auto">
              Start building professional reports that drive better business decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-teal-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
                Start Free Trial
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-teal-600 transition-colors">
                View Templates
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
