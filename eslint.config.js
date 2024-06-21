import { nuxt } from "eslint-config-joenn"
import withNuxt from "./.nuxt/eslint.config.mjs"

export default withNuxt([
  ...nuxt,
  {
    files: ["server/**/*.ts"],
    rules: {
      "import/extensions": "off"
    }
  }
])
