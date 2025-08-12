import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    return NextResponse.json({
      message: 'Logout successful!'
    }, {
      headers: {
        'Set-Cookie': 'auth-token=; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=0'
      }
    })
  } catch (error) {
    console.error('Logout error:', error)
    return NextResponse.json(
      { error: 'Something went wrong' },
      { status: 500 }
    )
  }
}
