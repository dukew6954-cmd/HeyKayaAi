'use client'

export default function TestEnvPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Environment Test
          </h1>
          <p className="text-gray-600">
            Check if environment variables are loaded
          </p>
        </div>

        <div className="space-y-4">
          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="font-semibold mb-2">Stack Auth Project ID:</h3>
            <p className="text-sm font-mono bg-gray-100 p-2 rounded">
              {process.env.NEXT_PUBLIC_STACK_PROJECT_ID || 'NOT SET'}
            </p>
          </div>
          
          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="font-semibold mb-2">Stack Auth Client Key:</h3>
            <p className="text-sm font-mono bg-gray-100 p-2 rounded">
              {process.env.NEXT_PUBLIC_STACK_PUBLISHABLE_CLIENT_KEY ? 'SET' : 'NOT SET'}
            </p>
          </div>
          
          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="font-semibold mb-2">Stack Auth Server Key:</h3>
            <p className="text-sm font-mono bg-gray-100 p-2 rounded">
              {process.env.STACK_SECRET_SERVER_KEY ? 'SET' : 'NOT SET'}
            </p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <a 
            href="/test-auth" 
            className="text-blue-600 hover:text-blue-700 underline"
          >
            Go to Auth Test
          </a>
        </div>
      </div>
    </div>
  )
}
