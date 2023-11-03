// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxt/image",
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt"
  ],
  devtools: {
    enabled: true
  },
  image: {
    dir: "assets/images",
    quality: 80
  }
})
