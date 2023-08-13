// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  typescript: {
    shim: false
  },
  app: {
    head: {
      title: "Hello",
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',

    },
    pageTransition: { 
      name: 'page', 
      mode: 'out-in'
    }

  },
  css: ["@/assets/scss/global.scss"],
  modules: [
    '@nuxt/content',
    '@nuxt/image',
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/_vars.scss" as *;',
        },
      },
    },
  },
  image: {
    dir: 'assets/images'
  }
})
