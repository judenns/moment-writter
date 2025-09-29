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
    minify: 'terser',     // Use terser for better minification
    terserOptions: {
      compress: {
        drop_console: true,    // Remove console.log in production
        drop_debugger: true,   // Remove debugger statements
        pure_funcs: ['console.log'] // Remove specific functions
      }
    },

    // Asset optimization
    assetsInlineLimit: 4096, // Inline assets smaller than 4kb

    // CSS code splitting
    cssCodeSplit: true,

    rollupOptions: {
      output: {
        // Asset naming for better caching
        assetFileNames: 'assets/[name]-[hash][extname]',
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',

        // Manual chunks for better code splitting
        manualChunks: {
          // Add vendor chunks here when you have dependencies
          // 'vendor': ['package-name']
        }
      }
    }
  },

  // Base path for deployment
  base: '/',              // Change if deploying to subdirectory

  // CSS configuration
  css: {
    devSourcemap: true,   // CSS source maps in development
  },
})