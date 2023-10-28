import { resolve } from 'path'

import dts from 'vite-plugin-dts'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: resolve('src/main.ts'),
      formats: ['es'],
      fileName: 'index',
    },
    outDir: resolve('npm/lib'),
  },
  resolve: {
    alias: { '@': resolve('src') },
  },
  plugins: [dts({ insertTypesEntry: true })],
})
