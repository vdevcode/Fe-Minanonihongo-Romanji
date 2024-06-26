export default defineNuxtConfig({
  ssr: false,

  devtools: {
    enabled: true,
  },

  app: {
    head: {
      title: 'Minanonihongo Romanji',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      htmlAttrs: { lang: 'en' },
      meta: [{ name: 'description', content: 'Total token management' }],
    },
  },

  css: ['~/assets/css/main.css', 'nprogress/nprogress.css'],

  modules: [
    // Pinia: https://pinia.vuejs.org/ssr/nuxt.html
    [
      '@pinia/nuxt',
      {
        autoImports: [
          'defineStore',
          ['defineStore', 'definePiniaStore'],
          'acceptHMRUpdate',
        ],
      },
    ],

    // Tailwind & Nuxt 2/3: https://tailwindcss.com/docs/guides/nuxtjs
    '@nuxtjs/tailwindcss',
  ],

  imports: {
    dirs: ['stores'],
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  build: {
    transpile: [
      'yup',
      'lodash',
      '@vee-validate/rules',
      '@vuepic/vue-datepicker',
    ],
  },

  runtimeConfig: {
    public: {
      environment: process.env,
    },
  },

  devServer: {
    port: 4000,
  },
})
