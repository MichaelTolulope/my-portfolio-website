import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const isProduction = mode === 'production'

  return {
    plugins: [react()],
    server: {
      host: '0.0.0.0',
      port: 5173,
      allowedHosts: isProduction ? true : [
        'localhost',
        '127.0.0.1',
        '0.0.0.0',
        'tolulope-dev.onrender.com',
        '.onrender.com',
        '.vercel.app',
        '.netlify.app',
      ],
    },
    preview: {
      host: '0.0.0.0',
      port: process.env.PORT ? parseInt(process.env.PORT) : 4173,
      allowedHosts: true, // Allow all hosts in preview mode (production)
    },
  }
})
