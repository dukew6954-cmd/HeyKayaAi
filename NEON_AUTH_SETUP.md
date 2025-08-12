# Neon Auth Integration Guide

## Overview

This project now includes a comprehensive authentication system built with Neon database integration. The system provides secure user authentication, authorization, and session management optimized for Netlify's serverless environment.

## Features

### ✅ **Authentication Features**
- User registration with email/password
- Secure login with JWT tokens
- Password hashing with bcrypt
- Session management with cookies
- Role-based access control (ADMIN, USER, AGENT)
- Account deactivation
- Password change functionality

### ✅ **Security Features**
- JWT token-based authentication
- HTTP-only secure cookies
- Password hashing with salt rounds
- CSRF protection
- Rate limiting ready
- Input validation and sanitization

### ✅ **Database Integration**
- Neon PostgreSQL optimized
- Prisma ORM with serverless driver
- Connection pooling for performance
- Automatic migrations

## Architecture

### Core Components

1. **AuthService** (`lib/auth.ts`)
   - Central authentication logic
   - User registration and login
   - Token verification
   - Profile management

2. **useAuth Hook** (`lib/hooks/useAuth.ts`)
   - React state management with Zustand
   - Persistent authentication state
   - Client-side auth operations

3. **ProtectedRoute Component** (`components/auth/ProtectedRoute.tsx`)
   - Route protection wrapper
   - Role-based access control
   - Loading states

4. **Middleware** (`middleware.ts`)
   - Server-side route protection
   - Token validation
   - User context injection

### API Routes

- `POST /api/auth/signup` - User registration
- `POST /api/auth/login` - User authentication
- `POST /api/auth/logout` - Session termination

## Usage

### 1. User Registration

```typescript
import { useAuth } from '@/lib/hooks/useAuth'

const { signup, isLoading } = useAuth()

const handleSignup = async () => {
  try {
    await signup(email, password, name)
    // User is automatically logged in
  } catch (error) {
    console.error('Signup failed:', error.message)
  }
}
```

### 2. User Login

```typescript
import { useAuth } from '@/lib/hooks/useAuth'

const { login, isLoading } = useAuth()

const handleLogin = async () => {
  try {
    await login(email, password)
    // User is automatically redirected to dashboard
  } catch (error) {
    console.error('Login failed:', error.message)
  }
}
```

### 3. Protected Routes

```typescript
import ProtectedRoute from '@/components/auth/ProtectedRoute'

// Basic protection
<ProtectedRoute>
  <YourComponent />
</ProtectedRoute>

// Role-based protection
<ProtectedRoute requiredRole="ADMIN">
  <AdminComponent />
</ProtectedRoute>
```

### 4. Accessing User Data

```typescript
import { useAuth } from '@/lib/hooks/useAuth'

const { user, isAuthenticated, logout } = useAuth()

if (isAuthenticated) {
  console.log('User:', user.name, user.email, user.role)
}
```

## Environment Variables

### Required Variables

```env
# Database
DATABASE_URL=your_neon_pooled_connection_string
DIRECT_URL=your_neon_direct_connection_string

# Authentication
NEXTAUTH_SECRET=your_jwt_secret_key
NEXTAUTH_URL=http://localhost:3000

# Stack (if using)
NEXT_PUBLIC_STACK_PROJECT_ID=your_stack_project_id
NEXT_PUBLIC_STACK_PUBLISHABLE_CLIENT_KEY=your_stack_client_key
STACK_SECRET_SERVER_KEY=your_stack_server_key
```

### Production Configuration

For production, update `NEXTAUTH_URL` to your Netlify domain:
```env
NEXTAUTH_URL=https://your-site-name.netlify.app
```

## Database Schema

The authentication system uses the following Prisma schema:

```prisma
model User {
  id            String    @id @default(cuid())
  email         String    @unique
  name          String?
  password      String
  role          UserRole  @default(USER)
  isActive      Boolean   @default(true)
  emailVerified DateTime?
  image         String?
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt
}

enum UserRole {
  ADMIN
  USER
  AGENT
}
```

## Security Best Practices

### 1. Password Security
- Passwords are hashed using bcrypt with 12 salt rounds
- Never store plain text passwords
- Implement password strength requirements

### 2. Token Security
- JWT tokens expire after 7 days
- Tokens are stored in HTTP-only cookies
- Secure and SameSite flags enabled

### 3. Input Validation
- All inputs are validated server-side
- SQL injection protection via Prisma
- XSS protection with proper escaping

### 4. Rate Limiting
Consider implementing rate limiting for auth endpoints:
```typescript
// Example with express-rate-limit
import rateLimit from 'express-rate-limit'

const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5 // limit each IP to 5 requests per windowMs
})
```

## Deployment

### Netlify Deployment

1. **Set Environment Variables** in Netlify dashboard
2. **Deploy** your application
3. **Run Migrations**:
   ```bash
   npx prisma db push
   ```

### Local Development

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Set up Environment**:
   ```bash
   cp env.example .env
   # Edit .env with your Neon credentials
   ```

3. **Run Migrations**:
   ```bash
   npx prisma db push
   ```

4. **Start Development Server**:
   ```bash
   npm run dev
   ```

## Troubleshooting

### Common Issues

1. **Database Connection Errors**
   - Verify `DATABASE_URL` and `DIRECT_URL` are correct
   - Check Neon dashboard for connection status
   - Ensure SSL mode is enabled

2. **Authentication Failures**
   - Verify `NEXTAUTH_SECRET` is set
   - Check token expiration
   - Ensure cookies are enabled

3. **Middleware Issues**
   - Check route matching patterns
   - Verify token format
   - Review console for errors

### Debug Mode

Enable debug logging by adding to your `.env`:
```env
DEBUG=prisma:*
```

## Performance Optimization

### Neon Database
- Uses connection pooling for better performance
- Serverless driver optimized for Netlify
- Automatic connection management

### Caching
Consider implementing Redis for session caching:
```typescript
// Example with Redis
import Redis from 'ioredis'

const redis = new Redis(process.env.REDIS_URL)
```

## Future Enhancements

### Planned Features
- [ ] Email verification
- [ ] Password reset functionality
- [ ] Two-factor authentication
- [ ] OAuth providers (Google, GitHub)
- [ ] Session management dashboard
- [ ] Audit logging

### Integration Opportunities
- [ ] Stack integration for additional features
- [ ] Webhook notifications
- [ ] Analytics tracking
- [ ] Multi-tenant support

## Support

For issues or questions:
1. Check the troubleshooting section
2. Review Neon documentation
3. Check Prisma documentation
4. Review Next.js authentication patterns
