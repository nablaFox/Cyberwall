// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxt/content',
    'nuxt-icon',
    'nuxt-mapbox'
  ],
  vite: {
    vue: {
      script: {
        defineModel: true
      }
    }
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'page', mode: 'out-in' }
  },
  mapbox: {
    accessToken: process.env.NUXT_MAPBOX_ACCESS_TOKEN
  },
  googleFonts: {
    families: { 'Montserrat': [300, 400, 500, 600, 700] },
    download: false
  },
  css: ['~/assets/css/main.css'],
  vue: {
    compilerOptions: {
      isCustomElement: tag => tag.startsWith('swiper-')
    }
  },
  content: {
    documentDriven: {
      globals: {
        theme: {
          where: [{ _id: 'content:_theme.yml' }],
          without: ['_']
        }
      }
    }
  }
})
