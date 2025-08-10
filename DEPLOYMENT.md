# 🚀 Deploy to Netlify

## Prerequisites
1. Install Git: https://git-scm.com/download/win
2. Create a GitHub account: https://github.com
3. Create a Netlify account: https://netlify.com

## Step-by-Step Deployment

### 1. Initialize Git Repository
```bash
git init
git add .
git commit -m "Initial commit"
```

### 2. Create GitHub Repository
1. Go to https://github.com
2. Click "New repository"
3. Name it: `heykaya-website`
4. Make it public
5. Don't initialize with README (we already have files)

### 3. Push to GitHub
```bash
git remote add origin https://github.com/YOUR_USERNAME/heykaya-website.git
git branch -M main
git push -u origin main
```

### 4. Deploy to Netlify
1. Go to https://netlify.com
2. Sign up/Login with GitHub
3. Click "New site from Git"
4. Choose "GitHub"
5. Select your `heykaya-website` repository
6. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
7. Click "Deploy site"

### 5. Custom Domain (Optional)
1. In Netlify dashboard, go to "Domain settings"
2. Add your custom domain (e.g., heykaya.ai)
3. Follow DNS configuration instructions

## Build Settings for Netlify
- **Build command**: `npm run build`
- **Publish directory**: `.next`
- **Node version**: 18 (or latest LTS)

## Environment Variables (if needed)
Add these in Netlify dashboard under "Environment variables":
- `NEXT_PUBLIC_SITE_URL`: Your site URL
- Any API keys or configuration

## Troubleshooting
- If build fails, check the build logs in Netlify
- Ensure all dependencies are in `package.json`
- Make sure `next.config.js` is properly configured

## Success!
Your site will be live at: `https://your-site-name.netlify.app`
