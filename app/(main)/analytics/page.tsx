import { Metadata } from 'next'
import { AnalyticsHero } from '@/components/sections/AnalyticsHero'
import { AnalyticsSection } from '@/components/sections/AnalyticsSection'
import { ReportingFeatures } from '@/components/sections/ReportingFeatures'
import { FeaturesCTA } from '@/components/sections/FeaturesCTA'

export const metadata: Metadata = {
  title: 'Analytics - Business Intelligence & Reporting | Pavro',
  description: 'Get comprehensive analytics and business intelligence with Pavro. Real-time dashboards, performance metrics, and actionable insights.',
  keywords: 'analytics, business intelligence, reporting, dashboards, performance metrics, Pavro analytics',
}

export default function AnalyticsPage() {
  return (
    <>
      <AnalyticsHero />
      <AnalyticsSection />
      <ReportingFeatures />
      <FeaturesCTA />
    </>
  )
}
