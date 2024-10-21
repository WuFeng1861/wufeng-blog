import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  mode: 'development',
  build: {
    sourcemap: true,
  },
})