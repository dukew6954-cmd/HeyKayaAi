import type { Metadata } from 'next'
import { Inter, Manrope } from 'next/font/google'
import './globals.css'

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
    default: 'Pavro - All-in-One Business Automation Platform',
    template: '%s | Pavro'
  },
  description: 'Pavro automates your entire business workflow - from lead capture to customer service. Save hours daily and scale your operations with intelligent automation.',
  keywords: ['business automation', 'workflow automation', 'lead capture', 'customer service', 'business platform', 'automation tools'],
  authors: [{ name: 'Pavro' }],
  creator: 'Pavro',
  publisher: 'Pavro',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://pavro.ai'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://pavro.ai',
    title: 'Pavro - All-in-One Business Automation Platform',
    description: 'Pavro automates your entire business workflow - from lead capture to customer service. Save hours daily and scale your operations with intelligent automation.',
    siteName: 'Pavro',
    images: [
      {
        url: '/api/og',
        width: 1200,
        height: 630,
        alt: 'Pavro - Business Automation Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pavro - All-in-One Business Automation Platform',
    description: 'Pavro automates your entire business workflow - from lead capture to customer service. Save hours daily and scale your operations with intelligent automation.',
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
        {children}
      </body>
    </html>
  )
}
