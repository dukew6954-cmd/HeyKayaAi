'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Shield, Lock, Eye, Server, CheckCircle, Award, FileText, Download } from 'lucide-react'
import Link from 'next/link'

const securityFeatures = [
  {
    icon: Lock,
    title: 'End-to-End Encryption',
    description: 'All data is encrypted in transit and at rest using industry-standard AES-256 encryption',
    details: [
      'TLS 1.3 encryption for all communications',
      'AES-256 encryption for stored data',
      'Secure key management practices'
    ]
  },
  {
    icon: Shield,
    title: 'SOC 2 Type II Compliance',
    description: 'We maintain the highest security standards with SOC 2 Type II certification',
    details: [
      'Annual third-party security audits',
      'Comprehensive security controls',
      'Regular penetration testing'
    ]
  },
  {
    icon: Eye,
    title: 'Privacy by Design',
    description: 'Privacy is built into every aspect of our platform from the ground up',
    details: [
      'GDPR and CCPA compliance',
      'Data minimization practices',
      'User consent management'
    ]
  },
  {
    icon: Server,
    title: 'Secure Infrastructure',
    description: 'Enterprise-grade infrastructure with multiple layers of security',
    details: [
      'AWS/Azure cloud infrastructure',
      'Multi-region redundancy',
      '24/7 security monitoring'
    ]
  }
]

const complianceCertifications = [
  {
    name: 'SOC 2 Type II',
    description: 'Service Organization Control 2 certification for security, availability, and confidentiality',
    status: 'Certified',
    icon: Award
  },
  {
    name: 'GDPR',
    description: 'General Data Protection Regulation compliance for EU data protection',
    status: 'Compliant',
    icon: FileText
  },
  {
    name: 'CCPA',
    description: 'California Consumer Privacy Act compliance for California residents',
    status: 'Compliant',
    icon: FileText
  },
  {
    name: 'HIPAA',
    description: 'Health Insurance Portability and Accountability Act for healthcare data',
    status: 'Available',
    icon: Shield
  }
]

const securityPractices = [
  {
    title: 'Access Controls',
    description: 'Multi-factor authentication, role-based access, and session management',
    features: [
      'Multi-factor authentication (MFA)',
      'Role-based access controls (RBAC)',
      'Session timeout and management',
      'IP whitelisting capabilities'
    ]
  },
  {
    title: 'Data Protection',
    description: 'Comprehensive data protection measures and privacy controls',
    features: [
      'Data encryption at rest and in transit',
      'Automatic data backup and recovery',
      'Data retention policies',
      'Secure data deletion processes'
    ]
  },
  {
    title: 'Monitoring & Detection',
    description: 'Continuous monitoring and threat detection systems',
    features: [
      '24/7 security monitoring',
      'Real-time threat detection',
      'Automated incident response',
      'Security event logging and analysis'
    ]
  },
  {
    title: 'Vendor Security',
    description: 'Rigorous security requirements for all third-party vendors',
    features: [
      'Vendor security assessments',
      'Data processing agreements',
      'Regular vendor audits',
      'Subprocessor transparency'
    ]
  }
]

export default function SecurityPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-teal-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-10 h-10 text-teal-600" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold font-display text-gray-900 mb-6">
              Enterprise-Grade{' '}
              <span className="gradient-text">Security</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Your data security is our top priority. We implement industry-leading security measures 
              and maintain the highest compliance standards to protect your business communications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="#security-features">
                  Learn More
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/contact">
                  Request Security Review
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Security Features */}
      <section id="security-features" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-6">
              Security Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive security measures designed to protect your data and ensure compliance
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {securityFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl p-8 hover:bg-gray-100 transition-colors duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-teal-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {feature.description}
                    </p>
                    <ul className="space-y-2">
                      {feature.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-teal-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600 text-sm">{detail}</span>
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

      {/* Compliance Certifications */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-6">
              Compliance & Certifications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We maintain the highest industry standards and regulatory compliance
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {complianceCertifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <cert.icon className="w-6 h-6 text-teal-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {cert.name}
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  {cert.description}
                </p>
                <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${
                  cert.status === 'Certified' ? 'bg-green-100 text-green-700' :
                  cert.status === 'Compliant' ? 'bg-blue-100 text-blue-700' :
                  'bg-yellow-100 text-yellow-700'
                }`}>
                  {cert.status}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Practices */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-6">
              Security Practices
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive security framework ensures your data is protected at every level
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {securityPractices.map((practice, index) => (
              <motion.div
                key={practice.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="border border-gray-200 rounded-xl p-6 hover:border-teal-300 transition-colors duration-300"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {practice.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {practice.description}
                </p>
                <ul className="space-y-2">
                  {practice.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-teal-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Resources */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-6">
              Security Resources
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Access our security documentation and compliance reports
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <FileText className="w-12 h-12 text-teal-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Security Whitepaper
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Detailed overview of our security architecture and practices
              </p>
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <Award className="w-12 h-12 text-teal-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                SOC 2 Report
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Our latest SOC 2 Type II compliance report
              </p>
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Request Access
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <Shield className="w-12 h-12 text-teal-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Security FAQ
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Common security questions and answers
              </p>
              <Button variant="outline" size="sm" asChild>
                <Link href="/help">
                  View FAQ
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-teal-600 to-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              Have Security Questions?
            </h2>
            <p className="text-teal-100 mb-8 max-w-2xl mx-auto">
              Our security team is available to answer your questions and provide detailed information about our security practices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="default" className="bg-white text-teal-600 hover:bg-gray-100">
                Contact Security Team
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-teal-600">
                Schedule Security Review
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
