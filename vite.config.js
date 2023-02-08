import { defineConfig } from 'vite';
import * as path from 'path'

export default defineConfig({
  publicDir: '../public',
  resolve: {
    alias: {
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
    }
  },
  root: 'src',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  },
});