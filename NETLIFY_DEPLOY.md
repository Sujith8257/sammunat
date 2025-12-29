# Netlify Deployment Guide

This guide will help you deploy the Sammunat website to Netlify.

## Quick Deploy

### Method 1: GitHub Integration (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Connect to Netlify**
   - Go to [app.netlify.com](https://app.netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect your GitHub repository
   - Netlify will auto-detect the settings from `netlify.toml`

3. **Deploy**
   - Click "Deploy site"
   - Wait for the build to complete
   - Your site will be live!

### Method 2: Netlify CLI

1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login to Netlify**
   ```bash
   netlify login
   ```

3. **Initialize Site**
   ```bash
   netlify init
   ```
   - Choose "Create & configure a new site"
   - Follow the prompts

4. **Deploy**
   ```bash
   npm run build
   netlify deploy --prod
   ```

### Method 3: Drag & Drop

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy**
   - Go to [app.netlify.com/drop](https://app.netlify.com/drop)
   - Drag and drop the `dist` folder
   - Your site is live!

## Configuration

The project is pre-configured with:

- ✅ **Build command**: `npm run build`
- ✅ **Publish directory**: `dist`
- ✅ **SPA routing**: All routes redirect to `index.html`
- ✅ **Security headers**: XSS protection, frame options, etc.
- ✅ **Caching**: Optimized cache headers for assets

All settings are in `netlify.toml`.

## Environment Variables

If you need environment variables:

1. Go to Netlify Dashboard → Site settings → Environment variables
2. Add your variables (e.g., `VITE_API_URL`)
3. Redeploy the site

## Custom Domain

1. Go to Site settings → Domain management
2. Add your custom domain
3. Follow DNS configuration instructions

## Continuous Deployment

With GitHub integration, every push to your main branch automatically triggers a new deployment.

## Troubleshooting

### Build Fails

- Check Node.js version (should be 18+)
- Run `npm install` locally to check for dependency issues
- Check Netlify build logs for specific errors

### Routes Not Working

- Ensure `netlify.toml` and `public/_redirects` are present
- Check that redirects are configured correctly

### Assets Not Loading

- Verify `assetsDir` in `vite.config.js` is set to `assets`
- Check that paths in your code use relative paths

## Support

For more help, check:
- [Netlify Docs](https://docs.netlify.com)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)

