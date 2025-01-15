import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/MedEZZOUAK.github.io/',
  plugins: [react()],
  build: {
    outDir: 'dist'
  }
})