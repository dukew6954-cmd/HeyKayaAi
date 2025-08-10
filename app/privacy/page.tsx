import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy - HeyKayaAI | How We Protect Your Data',
  description: 'Learn how HeyKayaAI protects your privacy and handles your data. Read our comprehensive privacy policy.',
  keywords: 'privacy policy, data protection, GDPR, CCPA, HeyKayaAI privacy',
  openGraph: {
    title: 'Privacy Policy - HeyKayaAI',
    description: 'How we protect your privacy and handle your data.',
    type: 'website',
  },
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen">
      <div className="container-padding pt-24 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              Privacy Policy
            </h1>
            <p className="text-lg text-muted-foreground">
              Last updated: {new Date().toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">Introduction</h2>
              <p className="text-muted-foreground mb-4">
                HeyKayaAI ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI receptionist service.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">Information We Collect</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Personal Information</h3>
                  <p className="text-muted-foreground">
                    We collect information you provide directly to us, such as when you create an account, contact us, or use our services. This may include:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1">
                    <li>Name and contact information</li>
                    <li>Business information and preferences</li>
                    <li>Phone numbers and call data</li>
                    <li>Payment information</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Usage Information</h3>
                  <p className="text-muted-foreground">
                    We automatically collect certain information about your use of our services, including:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1">
                    <li>Call logs and transcripts</li>
                    <li>Service usage patterns</li>
                    <li>Device and browser information</li>
                    <li>IP addresses and location data</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">How We Use Your Information</h2>
              <p className="text-muted-foreground mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Provide and improve our AI receptionist services</li>
                <li>Process payments and manage your account</li>
                <li>Communicate with you about our services</li>
                <li>Train and improve our AI models</li>
                <li>Ensure security and prevent fraud</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">Data Security</h2>
              <p className="text-muted-foreground mb-4">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. This includes:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>End-to-end encryption for all communications</li>
                <li>Regular security audits and updates</li>
                <li>Access controls and authentication</li>
                <li>Secure data centers and infrastructure</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">Data Sharing</h2>
              <p className="text-muted-foreground mb-4">
                We do not sell your personal information. We may share your information only in the following circumstances:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>With your explicit consent</li>
                <li>To comply with legal requirements</li>
                <li>With service providers who assist in our operations</li>
                <li>In connection with a business transfer or merger</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">Your Rights</h2>
              <p className="text-muted-foreground mb-4">
                Depending on your location, you may have certain rights regarding your personal information:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Access and review your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Delete your personal information</li>
                <li>Restrict or object to processing</li>
                <li>Data portability</li>
                <li>Withdraw consent</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">Contact Us</h2>
              <p className="text-muted-foreground mb-4">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="bg-card p-6 rounded-lg">
                <p className="text-muted-foreground">
                  <strong>Email:</strong> privacy@heykaya.ai<br />
                  <strong>Address:</strong> HeyKayaAI, Inc.<br />
                  123 AI Street, Suite 100<br />
                  San Francisco, CA 94105<br />
                  United States
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  )
}

