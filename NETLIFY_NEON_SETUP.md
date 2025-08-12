# Netlify + Neon Database Setup Guide

## Prerequisites
- Netlify account
- Neon account
- GitHub repository with your code

## Step 1: Set up Neon Database

1. **Create a Neon account** at [neon.tech](https://neon.tech)
2. **Create a new project** in Neon
3. **Get your connection strings**:
   - Go to your project dashboard
   - Click on "Connection Details"
   - Copy both the pooled connection string and direct connection string

## Step 2: Configure Environment Variables in Netlify

In your Netlify dashboard, go to Site Settings > Environment Variables and add:

```
DATABASE_URL=your_neon_pooled_connection_string
DIRECT_URL=your_neon_direct_connection_string
NEXTAUTH_SECRET=your_nextauth_secret_key
NEXTAUTH_URL=https://your-site-name.netlify.app
```

### Example Neon connection strings:
```
DATABASE_URL=postgresql://username:password@ep-xxx-xxx-xxx.region.aws.neon.tech/database?sslmode=require&pgbouncer=true
DIRECT_URL=postgresql://username:password@ep-xxx-xxx-xxx.region.aws.neon.tech/database?sslmode=require
```

## Step 3: Deploy to Netlify

### Option A: Deploy from Git
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `.next`
4. Deploy

### Option B: Deploy manually
```bash
# Build locally
npm run build

# Deploy to Netlify
netlify deploy --prod --dir=.next
```

## Step 4: Run Database Migrations

After deployment, run your Prisma migrations:

```bash
# Generate Prisma client
npx prisma generate

# Run migrations
npx prisma db push
```

## Step 5: Verify Setup

1. Check your Netlify function logs for any database connection issues
2. Test your API endpoints
3. Verify that your authentication system works

## Troubleshooting

### Common Issues:

1. **Database connection errors**: Ensure both `DATABASE_URL` and `DIRECT_URL` are set correctly
2. **Prisma client issues**: Make sure `PRISMA_GENERATE_DATAPROXY=true` is set in build environment
3. **NextAuth issues**: Verify `NEXTAUTH_SECRET` and `NEXTAUTH_URL` are configured

### Environment Variables Reference:

| Variable | Description | Required |
|----------|-------------|----------|
| `DATABASE_URL` | Neon pooled connection string | Yes |
| `DIRECT_URL` | Neon direct connection string | Yes |
| `NEXTAUTH_SECRET` | Secret key for NextAuth | Yes |
| `NEXTAUTH_URL` | Your Netlify app URL | Yes |

## Performance Optimization

- Neon's connection pooling helps with serverless function performance
- The `directUrl` is used for migrations and direct database access
- The pooled `DATABASE_URL` is used for regular application queries

## Security Notes

- Never commit your connection strings to version control
- Use environment variables for all sensitive data
- Neon automatically handles SSL connections
- Consider using Neon's branch feature for staging environments
