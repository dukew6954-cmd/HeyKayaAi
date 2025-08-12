import { Metadata } from 'next'
import { IntegrationsHero } from '@/components/sections/IntegrationsHero'
import { IntegrationsSection } from '@/components/sections/IntegrationsSection'
import { IntegrationWorkflows } from '@/components/sections/IntegrationWorkflows'
import { FeaturesCTA } from '@/components/sections/FeaturesCTA'

export const metadata: Metadata = {
  title: 'Integrations - Connect Your Business Tools | Pavro',
  description: 'Connect Pavro with 100+ popular business tools. Seamless integrations for CRM, marketing, payment, and productivity tools.',
  keywords: 'integrations, business tools, CRM integration, marketing tools, payment integration, Pavro integrations',
}

export default function IntegrationsPage() {
  return (
    <>
      <IntegrationsHero />
      <IntegrationsSection />
      <IntegrationWorkflows />
      <FeaturesCTA />
    </>
  )
}
