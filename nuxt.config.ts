// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/eslint-module",
    "@nuxt/image-edge",
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    "@vite-pwa/nuxt"
  ],
  typescript: {
    typeCheck: true
  },
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.scss",
    viewer: true
  },
  devtools: {
    enabled: true
  },
  pinia: {
    autoImports: ["defineStore", "storeToRefs"]
  },
  piniaPersistedstate: {
    storage: "localStorage"
  },
  ssr: false,
  pwa: {
    manifest: {
      name: "Polo Brasil",
      short_name: "Polo brasil",
      description: "Site do polo Brasil",
      lang: "pt-BR",
      theme_color: "#ffffff",
      background_color: "#ffffff",
      icons: [
        {
          src: "/images/logo-green.png",
          type: "image/png",
          sizes: "512x512"
        }
      ],
      id: "/?source=pwa",
      start_url: "/?source=pwa",
      display: "standalone",
      scope: "/",
      shortcuts: [
        {
          name: "Polo Brasil",
          short_name: "Polo Brasil",
          description: "Polo Brasil",
          url: "/",
          icons: [{ src: "/images/logo-green.png", sizes: "192x192" }]
        }
      ]
      // screenshots: [
      //   {
      //     src: "/images/screenshot1.png",
      //     type: "image/png",
      //     sizes: "540x720",
      //   },
      //   {
      //     src: "/images/screenshot2.jpg",
      //     type: "image/jpg",
      //     sizes: "720x540",
      //   }
      // ]
    }
  }
});
