import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      // Add this configuration for better HMR support
      fastRefresh: true,
      // You can also add the following line if you're using JSX runtime
      // jsxRuntime: 'automatic',
    }),
  ],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  // Add this to force full reload on custom hooks changes
  server: {
    hmr: {
      overlay: false,
    },
  },
  // Add this section
  optimizeDeps: {
    exclude: ['src/Utilities/SmoothScroll/useLenisScroll.jsx'],
  },
})
