import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA({
    registerType: 'autoUpdate',
    devOptions: {
      enabled: true,      
    },
    manifest: {
      name: 'Mi prueba App PWA React',
      short_name: 'MiPWA',
      description: 'Esta es una app PWA',
      theme_color: '#ffffff',
    display: 'standalone', 
      start_url: '/',
      icons:[
        {
        src: 'icons/icon-128.png',
        sizes: '128x128',
        type: 'image/png'
      },
      {
        src: 'icons/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png'
      }
      ]

    },
    workbox:{
      globPatterns:['**/*.{js,css,html,png,jpg,jpeg,svg}'],
    }
  })],
})
