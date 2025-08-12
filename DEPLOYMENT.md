# InfluBridge - Fly.io Deployment Guide

## Prerequisites
- [Fly.io account](https://fly.io/app/sign-up)
- [Fly CLI installed](https://fly.io/docs/hands-on/install-flyctl/)

## Quick Deploy to Fly.io

1. **Install Fly CLI:**
   ```bash
   # macOS/Linux
   curl -L https://fly.io/install.sh | sh
   
   # Windows
   iwr https://fly.io/install.ps1 -useb | iex
   ```

2. **Login to Fly.io:**
   ```bash
   fly auth login
   ```

3. **Deploy the app:**
   ```bash
   fly deploy
   ```

The app will be deployed with these settings:
- **Auto-scaling:** 0-1 machines (cost-efficient)
- **Region:** Dallas (dfw)
- **Memory:** 1GB
- **HTTPS:** Enabled
- **Custom domain ready**

## Alternative Deployment Options

### Option 1: GitHub + Fly.io (Recommended)
1. Push code to GitHub repository
2. Connect GitHub repo to Fly.io
3. Enable auto-deployments

### Option 2: Direct Upload
1. Download project as ZIP
2. Extract locally
3. Run `fly deploy` from project directory

### Option 3: Other Platforms
- **Vercel:** `vercel --prod`
- **Netlify:** Drag & drop build folder
- **Railway:** Connect GitHub repo

## Configuration Files Included
- ✅ `fly.toml` - Fly.io configuration
- ✅ `Dockerfile` - Container setup
- ✅ `next.config.js` - Production build config
- ✅ `.dockerignore` - Optimized builds

## Expected URL Format
Once deployed, your app will be available at:
`https://influbridge-homepage.fly.dev`

## Environment Variables (if needed)
```bash
fly secrets set NODE_ENV=production
```

## Monitoring
```bash
fly logs        # View logs
fly status      # Check app status
fly open        # Open in browser
```
