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
