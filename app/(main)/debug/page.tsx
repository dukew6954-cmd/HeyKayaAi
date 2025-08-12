'use client'

import { useUser } from '@stackframe/stack'

export default function DebugPage() {
  const userData = useUser()

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Stack Auth Debug</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Environment Variables */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Environment Variables</h2>
            <div className="space-y-2">
              <div>
                <strong>Project ID:</strong> 
                <span className="ml-2 font-mono text-sm">
                  {process.env.NEXT_PUBLIC_STACK_PROJECT_ID || 'NOT SET'}
                </span>
              </div>
              <div>
                <strong>Client Key:</strong> 
                <span className="ml-2 font-mono text-sm">
                  {process.env.NEXT_PUBLIC_STACK_PUBLISHABLE_CLIENT_KEY ? 'SET' : 'NOT SET'}
                </span>
              </div>
              <div>
                <strong>Server Key:</strong> 
                <span className="ml-2 font-mono text-sm">
                  {process.env.STACK_SECRET_SERVER_KEY ? 'SET' : 'NOT SET'}
                </span>
              </div>
            </div>
          </div>

          {/* Authentication State */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Authentication State</h2>
            <div className="space-y-2">
              <div>
                <strong>useUser() returns:</strong> 
                <span className="ml-2 font-mono text-sm">
                  {userData ? 'Object' : 'null'}
                </span>
              </div>
              {userData && (
                <>
                  <div>
                    <strong>isLoading:</strong> 
                    <span className="ml-2 font-mono text-sm">
                      {userData.isLoading ? 'true' : 'false'}
                    </span>
                  </div>
                  <div>
                    <strong>User:</strong> 
                    <span className="ml-2 font-mono text-sm">
                      {userData.user ? 'Present' : 'null'}
                    </span>
                  </div>
                  {userData.user && (
                    <div>
                      <strong>User Email:</strong> 
                      <span className="ml-2 font-mono text-sm">
                        {userData.user.email || 'N/A'}
                      </span>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>

          {/* Stack Auth Configuration */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Stack Auth Config</h2>
            <div className="space-y-2">
              <div>
                <strong>Token Store:</strong> 
                <span className="ml-2 font-mono text-sm">nextjs-cookie</span>
              </div>
              <div>
                <strong>Sign In Redirect:</strong> 
                <span className="ml-2 font-mono text-sm">/dashboard</span>
              </div>
              <div>
                <strong>Sign Up Redirect:</strong> 
                <span className="ml-2 font-mono text-sm">/dashboard</span>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Actions</h2>
            <div className="space-y-3">
              <a 
                href="/auth/signin" 
                className="block w-full bg-blue-500 hover:bg-blue-600 text-white text-center py-2 px-4 rounded"
              >
                Go to Sign In
              </a>
              <a 
                href="/dashboard" 
                className="block w-full bg-green-500 hover:bg-green-600 text-white text-center py-2 px-4 rounded"
              >
                Go to Dashboard
              </a>
              <a 
                href="/test-auth" 
                className="block w-full bg-purple-500 hover:bg-purple-600 text-white text-center py-2 px-4 rounded"
              >
                Go to Test Auth
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
