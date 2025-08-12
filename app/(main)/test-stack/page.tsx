'use client'

import { SignIn, SignUp, UserButton } from "@stackframe/stack";

export default function TestStackPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Stack Auth Test
          </h1>
          <p className="text-gray-600">
            Test your Stack Auth integration
          </p>
        </div>
        
        <div className="space-y-4">
          <SignIn 
            mode="modal"
            redirectUrl="/dashboard"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors"
          >
            Sign In with Stack
          </SignIn>
          
          <SignUp 
            mode="modal"
            redirectUrl="/dashboard"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors"
          >
            Sign Up with Stack
          </SignUp>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-200">
          <UserButton 
            className="w-full bg-gray-800 hover:bg-gray-900 text-white font-semibold py-3 px-4 rounded-lg transition-colors"
          />
        </div>
      </div>
    </div>
  )
}
