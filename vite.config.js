import { defineConfig } from 'vite'

export default defineConfig({
  // Development server configuration
  server: {
    port: 3000,           // Custom port (default is 5173)
    host: true,           // Allow external connections
    open: true,           // Auto-open browser
    // open: '/design-system.html', // Open specific page
    strictPort: false,    // Try next port if current is busy
    cors: true,           // Enable CORS
    // https: true,       // Enable HTTPS (uncomment if needed)
  },

  // Build configuration
  build: {
    outDir: 'dist',       // Output directory
    assetsDir: 'assets',  // Assets directory inside dist
    sourcemap: false,     // No source maps for production
    minify: 'esbuild',    // Use esbuild for faster minification
    rollupOptions: {
      // Configure rollup options as needed
    }
  },

  // Base path for deployment
  base: '/',              // Change if deploying to subdirectory

  // CSS configuration
  css: {
    devSourcemap: true,   // CSS source maps in development
  },
})