# Netlify Deployment Guide

## Quick Deploy (3 Methods)

### Method 1: GitHub Integration (Recommended) ⭐

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Ready for Netlify deployment"
   git push origin main
   ```

2. **Deploy via Netlify Dashboard**
   - Go to [app.netlify.com](https://app.netlify.com)
   - Click **"Add new site"** → **"Import an existing project"**
   - Connect your GitHub repository
   - Netlify will auto-detect settings from `netlify.toml`
   - Click **"Deploy site"**

3. **Done!** Your site will be live in ~2 minutes

### Method 2: Netlify CLI

```bash
# Install Netlify CLI globally
npm install -g netlify-cli

# Login to Netlify
netlify login

# Build and deploy
npm run build
netlify deploy --prod
```

### Method 3: Drag & Drop

1. Build the project:
   ```bash
   npm run build
   ```

2. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
3. Drag and drop the `dist` folder
4. Your site is live!

## Configuration Files

The project includes these Netlify-ready files:

- ✅ **`netlify.toml`** - Complete Netlify configuration
- ✅ **`public/_redirects`** - SPA routing support
- ✅ **`.nvmrc`** - Node.js version specification
- ✅ **`.node-version`** - Alternative Node version file

## Build Settings (Auto-detected)

- **Build command**: `npm ci && npm run build`
- **Publish directory**: `dist`
- **Node version**: 18

## Features Configured

### ✅ SPA Routing
All routes redirect to `index.html` for React Router to work correctly.

### ✅ Security Headers
- XSS Protection
- Frame Options
- Content Type Options
- Referrer Policy
- HSTS

### ✅ Performance
- Long-term caching for static assets (1 year)
- No caching for HTML files
- Gzip compression

### ✅ SEO
- Proper meta tags in `index.html`
- Open Graph tags
- Twitter Card tags

## Environment Variables

If you need environment variables:

1. Go to **Netlify Dashboard** → **Site settings** → **Environment variables**
2. Add variables with `VITE_` prefix (e.g., `VITE_API_URL`)
3. Redeploy the site

## Custom Domain

1. Go to **Site settings** → **Domain management**
2. Click **"Add custom domain"**
3. Follow DNS configuration instructions
4. Netlify will automatically provision SSL certificate

## Continuous Deployment

With GitHub integration:
- Every push to `main` branch = automatic deployment
- Pull requests = preview deployments
- Branch deploys for feature branches

## Build Optimization

The project is optimized for production:

- ✅ Code splitting (React vendor, animation vendor)
- ✅ Minification with esbuild
- ✅ Asset optimization
- ✅ Tree shaking

## Troubleshooting

### Build Fails

**Check Node version:**
- Netlify uses Node 18 (specified in `.nvmrc`)
- If issues, check build logs in Netlify dashboard

**Check dependencies:**
```bash
npm ci  # Clean install
npm run build  # Test build locally
```

### Routes Not Working

- Ensure `netlify.toml` has redirects configured
- Check `public/_redirects` file exists
- Verify React Router is set up correctly

### Assets Not Loading

- Check that paths use relative URLs
- Verify `assetsDir` in `vite.config.js` is `assets`
- Check browser console for 404 errors

### Performance Issues

- Enable Netlify's Edge Functions if needed
- Check bundle size in build logs
- Use Netlify Analytics for insights

## Support

- [Netlify Documentation](https://docs.netlify.com)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
- [React Router Deployment](https://reactrouter.com/en/main/start/overview#deployment)

## Post-Deployment Checklist

- [ ] Test all routes work correctly
- [ ] Verify images and assets load
- [ ] Check mobile responsiveness
- [ ] Test form submissions (if any)
- [ ] Verify analytics tracking (if configured)
- [ ] Check SSL certificate is active
- [ ] Test custom domain (if configured)

---

**Ready to deploy?** Just push to GitHub and connect to Netlify! 🚀

