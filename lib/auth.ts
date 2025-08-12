import { prisma, neonClient } from './prisma'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { NextRequest } from 'next/server'

export interface AuthUser {
  id: string
  email: string
  name: string | null
  role: 'ADMIN' | 'USER' | 'AGENT'
  isActive: boolean
  emailVerified: Date | null
  image: string | null
}

export interface LoginCredentials {
  email: string
  password: string
}

export interface SignupData {
  email: string
  password: string
  name: string
}

export class AuthService {
  /**
   * Register a new user
   */
  static async register(data: SignupData): Promise<{ user: AuthUser; token: string }> {
    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email: data.email }
    })

    if (existingUser) {
      throw new Error('User already exists')
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(data.password, 12)

    // Create user
    const user = await prisma.user.create({
      data: {
        email: data.email,
        name: data.name,
        password: hashedPassword,
        role: 'USER',
        isActive: true
      },
      select: {
        id: true,
        email: true,
        name: true,
        role: true,
        isActive: true,
        emailVerified: true,
        image: true
      }
    })

    // Generate JWT token
    const token = jwt.sign(
      { userId: user.id, email: user.email, role: user.role },
      process.env.NEXTAUTH_SECRET!,
      { expiresIn: '7d' }
    )

    return { user, token }
  }

  /**
   * Authenticate user with email and password
   */
  static async login(credentials: LoginCredentials): Promise<{ user: AuthUser; token: string }> {
    const user = await prisma.user.findUnique({
      where: { email: credentials.email }
    })

    if (!user || !user.password) {
      throw new Error('Invalid credentials')
    }

    if (!user.isActive) {
      throw new Error('Account is deactivated')
    }

    const isPasswordValid = await bcrypt.compare(credentials.password, user.password)

    if (!isPasswordValid) {
      throw new Error('Invalid credentials')
    }

    // Generate JWT token
    const token = jwt.sign(
      { userId: user.id, email: user.email, role: user.role },
      process.env.NEXTAUTH_SECRET!,
      { expiresIn: '7d' }
    )

    return {
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role,
        isActive: user.isActive,
        emailVerified: user.emailVerified,
        image: user.image
      },
      token
    }
  }

  /**
   * Verify JWT token and return user
   */
  static async verifyToken(token: string): Promise<AuthUser | null> {
    try {
      const decoded = jwt.verify(token, process.env.NEXTAUTH_SECRET!) as any
      
      const user = await prisma.user.findUnique({
        where: { id: decoded.userId },
        select: {
          id: true,
          email: true,
          name: true,
          role: true,
          isActive: true,
          emailVerified: true,
          image: true
        }
      })

      if (!user || !user.isActive) {
        return null
      }

      return user
    } catch (error) {
      return null
    }
  }

  /**
   * Get user from request headers
   */
  static async getUserFromRequest(request: NextRequest): Promise<AuthUser | null> {
    const authHeader = request.headers.get('authorization')
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return null
    }

    const token = authHeader.substring(7)
    return this.verifyToken(token)
  }

  /**
   * Update user profile
   */
  static async updateProfile(userId: string, data: Partial<{ name: string; image: string }>): Promise<AuthUser> {
    const user = await prisma.user.update({
      where: { id: userId },
      data,
      select: {
        id: true,
        email: true,
        name: true,
        role: true,
        isActive: true,
        emailVerified: true,
        image: true
      }
    })

    return user
  }

  /**
   * Change user password
   */
  static async changePassword(userId: string, currentPassword: string, newPassword: string): Promise<void> {
    const user = await prisma.user.findUnique({
      where: { id: userId }
    })

    if (!user || !user.password) {
      throw new Error('User not found')
    }

    const isCurrentPasswordValid = await bcrypt.compare(currentPassword, user.password)
    if (!isCurrentPasswordValid) {
      throw new Error('Current password is incorrect')
    }

    const hashedNewPassword = await bcrypt.hash(newPassword, 12)
    
    await prisma.user.update({
      where: { id: userId },
      data: { password: hashedNewPassword }
    })
  }

  /**
   * Deactivate user account
   */
  static async deactivateAccount(userId: string): Promise<void> {
    await prisma.user.update({
      where: { id: userId },
      data: { isActive: false }
    })
  }
}
