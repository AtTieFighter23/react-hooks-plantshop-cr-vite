import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/__tests__/setup.jsx',
    // Run tests in a single process instead of multiple parallel workers.
    // Prevents "JavaScript heap out of memory" crashes on memory-constrained
    // environments (e.g. WSL) where several 2GB worker processes can't all fit.
    pool: 'forks',
    poolOptions: {
      forks: {
        singleFork: true,
      },
    },
  }
})