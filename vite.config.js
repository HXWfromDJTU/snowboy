import { defineConfig } from 'vite'

export default defineConfig({
  base: '/snowboy/',
  build: {
    rollupOptions: {
      output: {
        // Hashed filenames for long-term caching
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash][extname]',
      },
    },
  },
})
