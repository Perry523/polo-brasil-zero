// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/eslint-module",
    "@nuxt/image-edge",
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
  ],
  typescript: {
    typeCheck: true,
  },
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.scss",
    viewer: true,
  },
  devtools: {
    enabled: true,
  },
  pinia: {
    autoImports: ["defineStore", "storeToRefs"],
  },
  piniaPersistedstate: {
    storage: "localStorage",
  },
  ssr: false,
});
