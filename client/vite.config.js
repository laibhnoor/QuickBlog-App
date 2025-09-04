import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  server: {
    proxy: {
      // String shorthand for proxying requests to another server
      '/api': {
        target: 'http://localhost:3000', // Replace with your backend server's URL
        changeOrigin: true,
      }
    }
  }
})
