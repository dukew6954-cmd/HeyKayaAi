import { Metadata } from 'next'
import { ContactForm } from '@/components/ContactForm'
import { ContactInfo } from '@/components/ContactInfo'

export const metadata: Metadata = {
  title: 'Contact Us - Get Started with HeyKayaAI',
  description: 'Ready to get started? Contact our team to begin your 30-day free trial or schedule a demo.',
  openGraph: {
    title: 'Contact Us - Get Started with HeyKayaAI',
    description: 'Ready to get started? Contact our team to begin your 30-day free trial.',
  },
}

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-16">
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold font-display text-gray-900 mb-6">
              Ready to get{' '}
              <span className="gradient-text">started?</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Start your 30-day free trial today or schedule a demo to see HeyKayaAI in action. 
              Our team is here to help you succeed.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </div>
    </div>
  )
}
