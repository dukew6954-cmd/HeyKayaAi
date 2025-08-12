import { Metadata } from 'next'
import { CoreFeaturesHero } from '@/components/sections/CoreFeaturesHero'
import { CoreFeaturesSection } from '@/components/sections/CoreFeaturesSection'
import { PlatformCapabilities } from '@/components/sections/PlatformCapabilities'
import { FeaturesCTA } from '@/components/sections/FeaturesCTA'

export const metadata: Metadata = {
  title: 'Core Features - Built-in Platform Capabilities | Pavro',
  description: 'Discover Pavro\'s core features and built-in capabilities. Everything you need to automate your business is included in the platform.',
  keywords: 'core features, platform capabilities, business automation, Pavro features',
}

export default function FeaturesPage() {
  return (
    <>
      <CoreFeaturesHero />
      <CoreFeaturesSection />
      <PlatformCapabilities />
      <FeaturesCTA />
    </>
  )
}
