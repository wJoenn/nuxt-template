// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  components: [
    {
      path: "~/components",
      pathPrefix: false
    }
  ],
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

  devtools: {
    enabled: true
  },
  image: {
    dir: "assets/images",
    quality: 80
  }
})
