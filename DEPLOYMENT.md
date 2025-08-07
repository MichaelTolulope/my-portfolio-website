# Deployment Guide

## Render.com Deployment

### 1. Build Settings
- **Build Command**: `npm run build`
- **Start Command**: `npm run start`
- **Node Version**: 20.x

### 2. Environment Variables
Set these in your Render dashboard:
- `NODE_ENV=production`
- `PORT=10000` (or any port Render assigns)

### 3. Port Configuration
The application is configured to:
- Bind to `0.0.0.0` (all interfaces) instead of just localhost
- Use the PORT environment variable provided by Render
- Fall back to default ports if PORT is not set

### 4. Build Process
1. TypeScript compilation (`tsc -b`)
2. Vite build process
3. Static files generated in `dist/` directory
4. Preview server serves the built files

### 5. Troubleshooting

#### Port Binding Issues
If you see "Port scan timeout reached, no open ports detected on 0.0.0.0":
- Ensure your start command is `npm run start`
- Check that the PORT environment variable is set
- Verify the application binds to `0.0.0.0:$PORT`

#### Build Failures
- Check Node.js version compatibility
- Ensure all dependencies are installed
- Review build logs for TypeScript errors

### 6. Alternative Deployment Platforms

#### Vercel
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`

#### Netlify
- Build Command: `npm run build`
- Publish Directory: `dist`
- Node Version: 20

#### Railway
- Start Command: `npm run start`
- Build Command: `npm run build`

## Local Development

### Development Server
```bash
npm run dev
```
Runs on `http://localhost:5173` (or `http://0.0.0.0:5173`)

### Production Preview
```bash
npm run build
npm run preview
```
Builds and serves the production version locally.

## Performance Optimizations

The build includes:
- Tree shaking for smaller bundle sizes
- Code splitting for faster loading
- Optimized assets and images
- Minified CSS and JavaScript
- Modern ES modules for better performance

## SEO and Meta Tags

The application includes:
- Proper meta descriptions and keywords
- Open Graph tags for social media
- Twitter Card support
- Structured data for search engines
- Custom favicon and app icons
