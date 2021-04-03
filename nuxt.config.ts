import { NuxtConfig } from '@nuxt/types';

const config: NuxtConfig = {
  target: 'static',
  components: true,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Tanpopo',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'A cross-platform desktop app built with Electron.'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/styles/index.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa'
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        'postcss-simple-vars': {},
        'postcss-nested': {}
      },
      preset: {
        autoprefixer: {
          grid: 'autoplace'
        }
      }
    }
  }
};

export default config;
