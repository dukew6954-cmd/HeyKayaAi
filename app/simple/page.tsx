import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Simple Test Page',
  description: 'A simple test page',
}

export default function SimplePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-white text-6xl font-bold mb-4">Hello World!</h1>
        <p className="text-white text-xl">If you can see this, the basic setup is working.</p>
        <a href="/" className="inline-block mt-8 bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
          Go to Home
        </a>
      </div>
    </div>
  )
}




