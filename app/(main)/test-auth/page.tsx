'use client'

import { useUser } from '@stackframe/stack'
import { SignIn, SignUp, UserButton } from '@stackframe/stack'

export default function TestAuthPage() {
  const userData = useUser()
  
  // Handle case where useUser returns null
  if (!userData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Auth Test Page
            </h1>
            <p className="text-gray-600">
              Stack Auth is initializing...
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-600">Loading Stack Auth...</p>
          </div>
        </div>
      </div>
    )
  }

  const { user, isLoading } = userData

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Auth Test Page
          </h1>
          <p className="text-gray-600">
            Test your Stack Auth integration
          </p>
        </div>

        {/* Debug Info */}
        <div className="mb-6 p-4 bg-gray-50 rounded-lg">
          <h3 className="font-semibold mb-2">Debug Info:</h3>
          <p><strong>Loading:</strong> {isLoading ? 'Yes' : 'No'}</p>
          <p><strong>User:</strong> {user ? 'Logged In' : 'Not Logged In'}</p>
          {user && (
            <div className="mt-2">
              <p><strong>Name:</strong> {user.name || 'N/A'}</p>
              <p><strong>Email:</strong> {user.email || 'N/A'}</p>
            </div>
          )}
        </div>
        
        <div className="space-y-4">
          <SignIn />
          <SignUp />
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-200">
          <UserButton 
            className="w-full bg-gray-800 hover:bg-gray-900 text-white font-semibold py-3 px-4 rounded-lg transition-colors"
          />
        </div>

        {/* Navigation */}
        <div className="mt-6 text-center">
          <a 
            href="/dashboard" 
            className="text-blue-600 hover:text-blue-700 underline"
          >
            Go to Dashboard
          </a>
        </div>
      </div>
    </div>
  )
}
