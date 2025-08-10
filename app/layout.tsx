import type { Metadata } from 'next'
import { Inter, Manrope } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { AnnouncementBar } from '@/components/AnnouncementBar'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const manrope = Manrope({ 
  subsets: ['latin'],
  variable: '--font-manrope',
})

export const metadata: Metadata = {
  title: {
    default: 'HeyKayaAI - AI Receptionist | Never Miss Another Call',
    template: '%s | HeyKayaAI'
  },
      description: 'HeyKayaAI answers, books, and texts back—24/7. Friendly, bilingual, and ready to work. Start your 30-day free trial today.',
  keywords: ['AI receptionist', 'virtual assistant', 'call answering', 'appointment booking', 'customer service', 'business automation'],
  authors: [{ name: 'HeyKayaAI' }],
  creator: 'HeyKayaAI',
  publisher: 'HeyKayaAI',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://heykaya.ai'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://heykaya.ai',
    title: 'HeyKayaAI - AI Receptionist | Never Miss Another Call',
    description: 'HeyKayaAI answers, books, and texts back—24/7. Friendly, bilingual, and ready to work. Start your 30-day free trial today.',
    siteName: 'HeyKayaAI',
    images: [
      {
        url: '/api/og',
        width: 1200,
        height: 630,
        alt: 'HeyKayaAI - AI Receptionist',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HeyKayaAI - AI Receptionist | Never Miss Another Call',
    description: 'HeyKayaAI answers, books, and texts back—24/7. Friendly, bilingual, and ready to work.',
    images: ['/api/og'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <AnnouncementBar />
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
