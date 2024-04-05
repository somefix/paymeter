// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // @ts-ignore
  css: ['~/assets/css/main.css'],
  postcss: {
      plugins: {
          tailwindcss: {},
          autoprefixer: {},
      },
  },
  app: {
    head: {
      title: 'Рассчитать Аванс',
      htmlAttrs: {
        lang: 'ru'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Рассчитать аванс онлайн' },
      ],
    },
    baseURL: process.env?.BASE_URL ?? '/',
  },
  plugins: [
    '~/plugins/money3.ts'
  ],
  modules: [
    '@artmizu/yandex-metrika-nuxt',
  ],
  yandexMetrika: {
    // @ts-ignore
    id: process.env.YANDEX_METRIKA_ID,
    initParams: {
      webvisor:true,
      clickmap:true,
      trackLinks:true,
      accurateTrackBounce:true,
    },
  },
})
