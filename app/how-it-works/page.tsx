import { Metadata } from 'next'
import HowItWorksSection from '@/components/sections/HowItWorksSection'

export const metadata: Metadata = {
  title: 'How It Works - HeyKayaAI | AI Receptionist Setup in Minutes',
  description: 'See how HeyKayaAI works in 4 simple steps. Get your AI receptionist up and running in minutes, not days.',
  keywords: 'how it works, AI receptionist setup, phone system integration, business automation',
  openGraph: {
    title: 'How It Works - HeyKayaAI',
    description: 'Get your AI receptionist up and running in minutes, not days.',
    type: 'website',
  },
}

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen">
      <div className="container-padding pt-24 pb-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
            How It Works
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get your AI receptionist up and running in minutes, not days. 
            Here's how HeyKayaAI transforms your phone system.
          </p>
        </div>
        
        <HowItWorksSection />
      </div>
    </main>
  )
}

