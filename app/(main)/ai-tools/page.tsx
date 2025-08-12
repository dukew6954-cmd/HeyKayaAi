import { Metadata } from 'next'
import { AIToolsHero } from '@/components/sections/AIToolsHero'
import { AIToolsSection } from '@/components/sections/AIToolsSection'
import { AIWorkflowsSection } from '@/components/sections/AIWorkflowsSection'
import { FeaturesCTA } from '@/components/sections/FeaturesCTA'

export const metadata: Metadata = {
  title: 'AI Tools - Intelligent Automation & AI Capabilities | Pavro',
  description: 'Explore Pavro\'s AI tools including voice assistants, chatbots, predictive analytics, and intelligent automation.',
  keywords: 'AI tools, voice assistant, chatbot, predictive analytics, intelligent automation, Pavro AI',
}

export default function AIToolsPage() {
  return (
    <>
      <AIToolsHero />
      <AIToolsSection />
      <AIWorkflowsSection />
      <FeaturesCTA />
    </>
  )
}
