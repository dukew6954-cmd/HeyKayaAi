import { HeroSection } from '@/components/sections/HeroSection'
import { ValuePropsSection } from '@/components/sections/ValuePropsSection'
import { IndustriesPreviewSection } from '@/components/sections/IndustriesPreviewSection'
import { DemoSection } from '@/components/sections/DemoSection'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { PricingSection } from '@/components/sections/PricingSection'
import { FAQSection } from '@/components/sections/FAQSection'
import { FinalCTASection } from '@/components/sections/FinalCTASection'
import { LogoCloudSection } from '@/components/sections/LogoCloudSection'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ValuePropsSection />
      <IndustriesPreviewSection />
      <DemoSection />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <LogoCloudSection />
      <FinalCTASection />
    </>
  )
}
