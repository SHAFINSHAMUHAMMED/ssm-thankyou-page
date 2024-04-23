import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/confirmation',
  server: {
    host: '0.0.0.0' // Listen on all IPv4 addresses
  }
})
