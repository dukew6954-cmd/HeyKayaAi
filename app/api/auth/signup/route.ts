import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import bcrypt from 'bcryptjs'
import { z } from 'zod'

const signupSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  businessName: z.string().min(2, 'Business name must be at least 2 characters'),
  phoneNumber: z.string().min(10, 'Phone number must be at least 10 characters'),
  industry: z.string().optional(),
})

export async function POST(request: NextRequest) {
  try {
    console.log('Signup request received')
    
    const body = await request.json()
    console.log('Request body parsed:', { ...body, password: '[HIDDEN]' })
    
    const { name, email, password, businessName, phoneNumber, industry } = signupSchema.parse(body)
    console.log('Request validated successfully')

    // Check if user already exists
    console.log('Checking if user exists...')
    const existingUser = await prisma.user.findUnique({
      where: { email }
    })

    if (existingUser) {
      console.log('User already exists')
      return NextResponse.json(
        { error: 'User with this email already exists' },
        { status: 400 }
      )
    }

    // Check if business phone number already exists
    console.log('Checking if business exists...')
    const existingBusiness = await prisma.business.findUnique({
      where: { phoneNumber }
    })

    if (existingBusiness) {
      console.log('Business already exists')
      return NextResponse.json(
        { error: 'Business with this phone number already exists' },
        { status: 400 }
      )
    }

    // Hash password
    console.log('Hashing password...')
    const hashedPassword = await bcrypt.hash(password, 12)

    // Create user and business in a transaction
    console.log('Starting database transaction...')
    const result = await prisma.$transaction(async (tx: any) => {
      // Create user
      console.log('Creating user...')
      const user = await tx.user.create({
        data: {
          name,
          email,
          password: hashedPassword,
        }
      })

      // Create business
      console.log('Creating business...')
      const business = await tx.business.create({
        data: {
          name: businessName,
          phoneNumber,
          industry,
          userId: user.id,
        }
      })

      // Create default business settings
      console.log('Creating business settings...')
      await tx.businessSettings.create({
        data: {
          businessId: business.id,
        }
      })

      return { user, business }
    })

    console.log('Transaction completed successfully')

    // Remove password from response
    const { password: _, ...userWithoutPassword } = result.user

    return NextResponse.json({
      message: 'User created successfully',
      user: userWithoutPassword,
      business: result.business
    })

  } catch (error) {
    console.error('Signup error:', error)
    
    if (error instanceof z.ZodError) {
      console.error('Validation error:', error.errors)
      return NextResponse.json(
        { error: 'Validation error', details: error.errors },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { error: 'Internal server error', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    )
  }
}
