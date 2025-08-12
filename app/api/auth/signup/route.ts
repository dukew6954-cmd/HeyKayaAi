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
    const body = await request.json()
    const { name, email, password, businessName, phoneNumber, industry } = signupSchema.parse(body)

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email }
    })

    if (existingUser) {
      return NextResponse.json(
        { error: 'User with this email already exists' },
        { status: 400 }
      )
    }

    // Check if business phone number already exists
    const existingBusiness = await prisma.business.findUnique({
      where: { phoneNumber }
    })

    if (existingBusiness) {
      return NextResponse.json(
        { error: 'Business with this phone number already exists' },
        { status: 400 }
      )
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12)

    // Create user and business in a transaction
    const result = await prisma.$transaction(async (tx: any) => {
      // Create user
      const user = await tx.user.create({
        data: {
          name,
          email,
          password: hashedPassword,
        }
      })

      // Create business
      const business = await tx.business.create({
        data: {
          name: businessName,
          phoneNumber,
          industry,
          userId: user.id,
        }
      })

      // Create default business settings
      await tx.businessSettings.create({
        data: {
          businessId: business.id,
        }
      })

      return { user, business }
    })

    // Remove password from response
    const { password: _, ...userWithoutPassword } = result.user

    return NextResponse.json({
      message: 'User created successfully',
      user: userWithoutPassword,
      business: result.business
    })

  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Validation error', details: error.errors },
        { status: 400 }
      )
    }

    console.error('Signup error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
