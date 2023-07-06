// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: 'Osicko Pizza',
      viewport: 'width=device-width, initial-scale=1',
    },
  },
  css: [
    '@/assets/styles/main.scss'
  ],
  modules: [
    '@nuxtjs/google-fonts'
  ],
  googleFonts: {
    families: {
      'Kolker+Brush': true,
      'Open+Sans': true,
      'Old+Standard+TT': true,
      'Inter': true
    },
  },
})
