// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxt/content',
  ],
  app: {
    pageTransition: { name: 'fade', mode: 'out-in' }
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
    documentDriven: true
  }
})
