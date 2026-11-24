import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteSingleFile } from 'vite-plugin-singlefile'

// `npm run build`         → GitHub Pages build in /dist: index.html (public funnel) + tools.html (toolkit) + inner-circle.html (members-only, unlisted)
// `npm run build:single`  → self-contained preview files in /dist-single (one HTML file per page)
export default defineConfig(({ mode }) => {
  const single = mode === 'single'
  const page = process.env.PAGE ?? 'index'
  return {
    base: './',
    plugins: [react(), ...(single ? [viteSingleFile()] : [])],
    build: single
      ? { outDir: 'dist-single', emptyOutDir: page === 'index', rollupOptions: { input: resolve(__dirname, `${page}.html`) } }
      : {
          outDir: 'dist',
          rollupOptions: { input: { index: resolve(__dirname, 'index.html'), tools: resolve(__dirname, 'tools.html'), 'inner-circle': resolve(__dirname, 'inner-circle.html'), roadmap: resolve(__dirname, 'roadmap.html') } },
        },
  }
})
