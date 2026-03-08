import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pages base URL configuration.
  // Assuming the user's repository will be named `portfolio`.
  // If deploying to a user/org page (username.github.io), this should be base: '/'.
  // We'll leave it as default '/' to cover the standard usage, but typically it would be `base: '/portfolio/'`.
  base: './',
})
