import { Metadata } from 'next'
import AboutSection from '@/components/sections/AboutSection'

export const metadata: Metadata = {
  title: 'About HeyKayaAI | Our Mission to Transform Business Communication',
  description: 'Learn about HeyKayaAI\'s mission to help businesses never miss a call. Meet our team and discover our values.',
  keywords: 'about HeyKayaAI, AI receptionist company, business communication, team mission',
  openGraph: {
    title: 'About HeyKayaAI',
    description: 'Our mission to help businesses never miss a call with AI-powered receptionists.',
    type: 'website',
  },
}

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <div className="container-padding pt-24 pb-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
            About HeyKayaAI
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're on a mission to help businesses never miss a call, 
            one conversation at a time.
          </p>
        </div>
        
        <AboutSection />
      </div>
    </main>
  )
}

