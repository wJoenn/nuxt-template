// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  components: [
    {
      path: "~/components",
      pathPrefix: false
    }
  ],

  devtools: {
    enabled: true
  },

  experimental: {
    typedPages: true
  },
  modules: [
    ["@nuxt/eslint", {
      config: {
        standalone: false
      }
    }],
    "@nuxt/image",
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "@vueuse/nuxt"
  ],

  typescript: {
    shim: false,
    strict: true,
    tsConfig: {
      compilerOptions: {
        allowImportingTsExtensions: true,
        moduleDetection: "force"
      }
    }
  },
  image: {
    dir: "assets/images",
    quality: 80
  }
})
