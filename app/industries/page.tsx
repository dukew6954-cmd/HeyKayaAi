import { Metadata } from 'next'
import { IndustriesGrid } from '@/components/sections/IndustriesGrid'

export const metadata: Metadata = {
  title: 'Industries - Made for Your Business | HeyKayaAI',
  description: 'HeyKayaAI works across industries, from law firms to auto repair shops. See how we can help your specific business.',
  openGraph: {
    title: 'Industries - Made for Your Business | HeyKayaAI',
    description: 'HeyKayaAI works across industries, from law firms to auto repair shops.',
  },
}

export default function IndustriesPage() {
  return (
    <div className="min-h-screen pt-16">
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold font-display text-gray-900 mb-6">
              Made for your{' '}
              <span className="gradient-text">business</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              HeyKayaAI works across industries, from law firms to auto repair shops. 
              See how we can help your specific business never miss another call.
            </p>
          </div>

          <IndustriesGrid />
        </div>
      </div>
    </div>
  )
}
