import { Metadata } from 'next'
import { PricingSection } from '@/components/sections/PricingSection'
import { FAQSection } from '@/components/sections/FAQSection'

export const metadata: Metadata = {
  title: 'Pricing - Simple, Fair Pricing | HeyKayaAI',
  description: 'Simple, fair pricing—unlimited calls on every plan. Start with our 30-day free trial. No credit card required.',
  openGraph: {
    title: 'Pricing - Simple, Fair Pricing | HeyKayaAI',
    description: 'Simple, fair pricing—unlimited calls on every plan.',
  },
}

export default function PricingPage() {
  return (
    <div className="min-h-screen pt-16">
      <PricingSection />
      <FAQSection />
    </div>
  )
}
