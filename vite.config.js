import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        @use "@/scss/variables" as *;
        @use "@/scss/mixins" as *;
        @use "@/scss/global" as *;
        ` , // Global import example
      },
    },
  },
  theme: {
    defaultTheme: 'lightTheme', // ⬅️ used in toggle
    themes: {
      lightTheme: {
        dark: false,
        colors: {
          primary: '#1976d2',
          background: '#ffffff',
          surface: '#f5f5f5',
          onPrimary: '#ffffff',
        },
      },
      darkTheme: {
        dark: true,
        colors: {
          primary: '#90caf9',
          background: '#121212',
          surface: '#1e1e1e',
          onPrimary: '#000000',
        },
      },
    },
  },
})
