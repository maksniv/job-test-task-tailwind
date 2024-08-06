// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  modules: ["@nuxtjs/tailwindcss", '@nuxtjs/google-fonts'],
  css: ['@/assets/css/main.css'],
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    },
  },
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  googleFonts: {
    families: {
      'Inter': {
        wght: [300, 400, 500, 600,700],
      },
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})