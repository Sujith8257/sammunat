# Sammunat Website

Modern, professional React-based website for Sammunat LLC - Enterprise Digital Solutions Provider.

## Tech Stack

- **Framework**: React 18 + Vite
- **Routing**: React Router DOM
- **Animations**: GSAP + Framer Motion
- **Icons**: Lucide React
- **Styling**: Vanilla CSS with CSS Custom Properties

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start development server:
   ```bash
   npm run dev
   ```

3. Open browser at [http://localhost:5173](http://localhost:5173)

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Project Structure

```
sammunat/
├── src/
│   ├── components/
│   │   ├── layout/      # Header, Footer
│   │   ├── ui/          # Button, Card, Input, etc.
│   │   └── home/        # Homepage sections
│   ├── pages/           # Page components
│   ├── hooks/           # Custom React hooks
│   ├── utils/           # Utility functions
│   ├── styles/          # Global styles
│   ├── assets/          # Images, fonts
│   ├── App.jsx          # Main app component
│   └── main.jsx         # Entry point
├── public/              # Static assets
└── index.html           # HTML template
```

## Building for Production

```bash
npm run build
```

The optimized files will be in the `dist/` directory.

## Deployment

### Deploy to Netlify

This project is configured for easy deployment on Netlify.

#### Option 1: Deploy via Netlify UI

1. Push your code to GitHub, GitLab, or Bitbucket
2. Go to [Netlify](https://www.netlify.com) and sign in
3. Click "Add new site" → "Import an existing project"
4. Connect your repository
5. Netlify will auto-detect the build settings from `netlify.toml`:
   - **Build command**: `npm ci && npm run build`
   - **Publish directory**: `dist`
   - **Node version**: 18
6. Click "Deploy site"

#### Option 2: Deploy via Netlify CLI

1. Install Netlify CLI:
   ```bash
   npm install -g netlify-cli
   ```

2. Build the project:
   ```bash
   npm run build
   ```

3. Deploy:
   ```bash
   netlify deploy --prod
   ```

#### Configuration

The project includes:
- `netlify.toml` - Complete Netlify configuration with build settings, redirects, security headers, and caching
- `public/_redirects` - SPA routing redirects (all routes → index.html)
- `.nvmrc` & `.node-version` - Node.js version specification (18)
- `DEPLOY.md` - Detailed deployment guide with troubleshooting

#### Quick Deploy Checklist

- ✅ Build command configured
- ✅ SPA routing configured
- ✅ Security headers enabled
- ✅ Performance optimizations (caching, compression)
- ✅ Node version specified

#### Environment Variables

If you need environment variables, add them in:
- Netlify Dashboard → Site settings → Environment variables

Or create a `.env` file (don't commit sensitive data):
```env
VITE_API_URL=https://api.example.com
```

## Design System

- **Primary Colors**: Purple/Blue gradients (#6366F1 to #8B5CF6)
- **Secondary**: Cyan accent (#06B6D4)
- **Typography**: Inter (UI) + Plus Jakarta Sans (Headings)
- **Animations**: GSAP for scroll effects, Framer Motion for micro-interactions

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Copyright © 2024 Sammunat LLC. All rights reserved.
