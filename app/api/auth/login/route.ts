import { NextRequest, NextResponse } from 'next/server'
import { AuthService } from '@/lib/auth'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validation
    if (!body.email || !body.password) {
      return NextResponse.json(
        { error: 'Email and password are required' },
        { status: 400 }
      )
    }

    // Login user using AuthService
    const { user, token } = await AuthService.login({
      email: body.email,
      password: body.password
    })

    return NextResponse.json({
      message: 'Login successful!',
      user,
      token
    }, {
      headers: {
        'Set-Cookie': `auth-token=${token}; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=${7 * 24 * 60 * 60}`
      }
    })

  } catch (error: any) {
    console.error('Login error:', error)
    
    if (error.message === 'Invalid credentials') {
      return NextResponse.json(
        { error: 'Invalid email or password' },
        { status: 401 }
      )
    }
    
    if (error.message === 'Account is deactivated') {
      return NextResponse.json(
        { error: 'Account is deactivated' },
        { status: 403 }
      )
    }
    
    return NextResponse.json(
      { error: 'Something went wrong' },
      { status: 500 }
    )
  }
}
