# Deployment Guide for Ambifo Technology Website

This guide covers multiple deployment options for your Node.js website.

## Quick Start (Local Development)

```bash
npm install
npm start
# Visit http://localhost:3000
```

## Option 1: Cloudflare Pages + Workers

### Prerequisites
- Cloudflare account
- GitHub account (for continuous deployment)

### Steps

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/ambifo.git
   git push -u origin main
   ```

2. **Connect to Cloudflare Pages:**
   - Go to Cloudflare Dashboard
   - Pages > Create a project > Connect to Git
   - Select your GitHub repository
   - Build settings:
     - Framework: None
     - Build command: `npm install && node server.js`
     - Build output directory: leave empty
   - Click Deploy

3. **Configure with Cloudflare Workers (if needed):**
   ```bash
   npm install -g wrangler
   wrangler login
   wrangler deploy
   ```

## Option 2: Vercel (Recommended)

### Steps

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel
   ```

3. **Follow the prompts:**
   - Set project name: `ambifo-technology`
   - Framework: `Node.js`
   - Root directory: `./`

### For Continuous Deployment:
- Push code to GitHub
- Import project in Vercel Dashboard
- Auto-deploys on every push to main branch

## Option 3: Heroku

### Steps

1. **Install Heroku CLI:**
   ```bash
   npm install -g heroku
   ```

2. **Login to Heroku:**
   ```bash
   heroku login
   ```

3. **Create app:**
   ```bash
   heroku create ambifo-technology
   ```

4. **Deploy:**
   ```bash
   git push heroku main
   ```

5. **View logs:**
   ```bash
   heroku logs --tail
   ```

## Option 4: Railway.app

### Steps

1. **Go to Railway.app** - https://railway.app
2. **Create new project**
3. **Select "Deploy from GitHub"**
4. **Connect your GitHub repo**
5. **Railway auto-detects Node.js and deploys**

## Option 5: Render

### Steps

1. **Go to Render.com** - https://render.com
2. **New > Web Service**
3. **Connect GitHub repository**
4. **Configuration:**
   - Environment: Node
   - Build command: `npm install`
   - Start command: `npm start`
5. **Deploy**

## Option 6: DigitalOcean App Platform

### Steps

1. **Create DigitalOcean account**
2. **Apps > Create App**
3. **Connect GitHub**
4. **Select repository and branch**
5. **DigitalOcean auto-configures Node.js**
6. **Deploy**

## Environment Variables

For production, set up environment variables:

```bash
PORT=3000
NODE_ENV=production
```

### On Cloudflare:
- Settings > Environment Variables > Add variables

### On Vercel:
- Settings > Environment Variables > Add variables

### On Heroku:
```bash
heroku config:set NODE_ENV=production
heroku config:set PORT=3000
```

## Custom Domain Setup

### For Cloudflare Pages:
1. Go to project settings
2. Custom domains > Add custom domain
3. Update your domain DNS to point to Cloudflare

### For Vercel:
1. Go to project settings
2. Domains > Add domain
3. Follow DNS configuration

### For Heroku:
1. App settings > Add domain
2. Follow DNS setup instructions

## SSL/TLS Certificate

- **Cloudflare**: Automatic (included)
- **Vercel**: Automatic (included)
- **Heroku**: Free tier includes SSL
- **Railway**: Automatic (included)

## Performance Tips

1. **Enable Caching:**
   - Set Cache-Control headers in Express
   - Use CDN (Cloudflare recommended)

2. **Optimize Images:**
   - Compress PNG/JPEG files
   - Use WebP format where supported

3. **Minify Code:**
   - Use build tools like webpack or Vite
   - Minify CSS and JavaScript

4. **Monitor Performance:**
   - Use Lighthouse
   - Monitor with Sentry or similar

## Monitoring & Logs

### Cloudflare:
- Dashboard > Analytics

### Vercel:
- Dashboard > Analytics tab

### Heroku:
```bash
heroku logs --tail
```

### Railway:
- Dashboard > Logs

## Troubleshooting

### Port Issues:
```bash
# Cloudflare will assign a port automatically
# For local testing on different port:
PORT=8000 npm start
```

### Module Not Found:
```bash
npm install
npm ci  # Clean install
```

### Build Fails:
- Check `package.json` dependencies
- Verify Node version matches platform requirements
- Check build logs for specific errors

## Rollback

### Vercel:
- Deployments > Select previous deployment > Redeploy

### Heroku:
```bash
heroku releases
heroku rollback v<number>
```

### GitHub:
- Revert commit and push
```bash
git revert <commit-hash>
git push
```

## Cost Estimates

| Platform | Free Tier | Paid Starting |
|----------|-----------|---------------|
| Vercel | Yes (up to 100GB bandwidth) | $20/month |
| Cloudflare | Yes | $200/month |
| Railway | Yes ($5 credits) | Pay as you go |
| Render | Yes | $7/month |
| Heroku | Removed | $7/month |

## Recommended Setup

**Best for beginners:** Vercel or Railway
**Best for control:** Cloudflare Workers + GitHub Pages
**Best for scale:** Cloudflare or Vercel

## Need Help?

Check the deployment platform's documentation:
- Vercel: https://vercel.com/docs
- Cloudflare: https://developers.cloudflare.com/pages
- Railway: https://docs.railway.app
- Render: https://render.com/docs

---

Happy deploying! 🚀
