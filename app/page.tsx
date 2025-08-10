import { Metadata } from 'next'
import { HeroSection } from '@/components/sections/HeroSection'
import { ValuePropsSection } from '@/components/sections/ValuePropsSection'
import { DemoSection } from '@/components/sections/DemoSection'
import { IndustriesPreviewSection } from '@/components/sections/IndustriesPreviewSection'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { FinalCTASection } from '@/components/sections/FinalCTASection'
import { LogoCloudSection } from '@/components/sections/LogoCloudSection'

export const metadata: Metadata = {
  title: 'HeyKayaAI - Never Miss Another Call | AI Receptionist',
  description: 'HeyKayaAI answers, books, and texts back—24/7. Friendly, bilingual, and ready to work. Start your 30-day free trial today.',
  openGraph: {
    title: 'HeyKayaAI - Never Miss Another Call',
    description: 'HeyKayaAI answers, books, and texts back—24/7. Friendly, bilingual, and ready to work.',
  },
}

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <LogoCloudSection />
      <ValuePropsSection />
      <DemoSection />
      <IndustriesPreviewSection />
      <TestimonialsSection />
      <FinalCTASection />
    </div>
  )
}
