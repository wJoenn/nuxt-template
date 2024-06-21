// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  components: [
    { path: "~/components", pathPrefix: false }
  ],

  devtools: {
    enabled: true
  },

  future: {
    compatibilityVersion: 4
  },

  modules: [
    "@nuxt/image",
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "@vueuse/nuxt",

    ["@nuxt/eslint", {
      config: {
        standalone: false
      }
    }],

    ["@nuxtjs/i18n", {
      defaultLocale: "en",
      locales: ["en"]
    }]
  ],

  typescript: {
    tsConfig: {
      compilerOptions: {
        allowImportingTsExtensions: true
      }
    }
  }
})
