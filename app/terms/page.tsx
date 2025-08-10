import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service - HeyKayaAI | Service Agreement',
  description: 'Read HeyKayaAI\'s terms of service and user agreement. Understand your rights and responsibilities when using our AI receptionist service.',
  keywords: 'terms of service, user agreement, HeyKayaAI terms, service agreement',
  openGraph: {
    title: 'Terms of Service - HeyKayaAI',
    description: 'Your agreement with HeyKayaAI for using our AI receptionist service.',
    type: 'website',
  },
}

export default function TermsPage() {
  return (
    <main className="min-h-screen">
      <div className="container-padding pt-24 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              Terms of Service
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
              <h2 className="text-2xl font-bold text-foreground mb-4">Agreement to Terms</h2>
              <p className="text-muted-foreground mb-4">
                By accessing or using HeyKayaAI's services, you agree to be bound by these Terms of Service ("Terms"). If you disagree with any part of these terms, you may not access our service.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">Description of Service</h2>
              <p className="text-muted-foreground mb-4">
                HeyKayaAI provides an AI-powered receptionist service that can:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Answer incoming phone calls</li>
                <li>Schedule appointments and manage calendars</li>
                <li>Provide information about your business</li>
                <li>Handle customer inquiries and support requests</li>
                <li>Integrate with your existing business tools</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">User Accounts</h2>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  When you create an account with us, you must provide accurate and complete information. You are responsible for:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Maintaining the security of your account credentials</li>
                  <li>All activities that occur under your account</li>
                  <li>Notifying us immediately of any unauthorized use</li>
                  <li>Ensuring your account information is up to date</li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">Acceptable Use</h2>
              <p className="text-muted-foreground mb-4">
                You agree not to use our service to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe on intellectual property rights</li>
                <li>Transmit harmful, offensive, or inappropriate content</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Interfere with the service or other users</li>
                <li>Use the service for spam or unsolicited communications</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">Payment Terms</h2>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Our service is offered on a subscription basis. By subscribing, you agree to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Pay all fees associated with your chosen plan</li>
                  <li>Provide accurate billing information</li>
                  <li>Authorize recurring charges to your payment method</li>
                  <li>Pay any applicable taxes</li>
                </ul>
                <p className="text-muted-foreground">
                  We offer a 30-day free trial. You may cancel your subscription at any time.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">Intellectual Property</h2>
              <p className="text-muted-foreground mb-4">
                The service and its original content, features, and functionality are owned by HeyKayaAI and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">Privacy</h2>
              <p className="text-muted-foreground mb-4">
                Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the service, to understand our practices.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">Limitation of Liability</h2>
              <p className="text-muted-foreground mb-4">
                In no event shall HeyKayaAI, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of the service.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">Disclaimer</h2>
              <p className="text-muted-foreground mb-4">
                The service is provided on an "AS IS" and "AS AVAILABLE" basis. HeyKayaAI makes no warranties, expressed or implied, and hereby disclaims all warranties, including without limitation, warranties of merchantability, fitness for a particular purpose, and non-infringement.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">Termination</h2>
              <p className="text-muted-foreground mb-4">
                We may terminate or suspend your account and access to the service immediately, without prior notice, for any reason, including breach of these Terms. Upon termination, your right to use the service will cease immediately.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">Changes to Terms</h2>
              <p className="text-muted-foreground mb-4">
                We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days notice prior to any new terms taking effect.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">Contact Information</h2>
              <p className="text-muted-foreground mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-card p-6 rounded-lg">
                <p className="text-muted-foreground">
                  <strong>Email:</strong> legal@heykaya.ai<br />
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
