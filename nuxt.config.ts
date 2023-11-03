// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxt/image",
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt"
  ],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "~/assets/stylesheets/config/variables" as *;
            @use "~/assets/stylesheets/config/mixins" as *;
          `
        }
      }
    }
  },

  devtools: {
    enabled: true
  },
  image: {
    dir: "assets/images",
    quality: 80
  },
  typescript: {
    shim: false,
    typeCheck: true
  }
})
