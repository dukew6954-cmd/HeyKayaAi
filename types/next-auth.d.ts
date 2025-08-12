import NextAuth from 'next-auth'

declare module 'next-auth' {
  interface User {
    id: string
    email: string
    name?: string | null
    role: 'ADMIN' | 'USER' | 'AGENT'
    isActive: boolean
    emailVerified?: Date | null
    image?: string | null
  }

  interface Session {
    user: {
      id: string
      email: string
      name?: string | null
      role: 'ADMIN' | 'USER' | 'AGENT'
      image?: string | null
    }
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    id: string
    role: 'ADMIN' | 'USER' | 'AGENT'
  }
}
