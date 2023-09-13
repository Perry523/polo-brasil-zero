// https://nuxt.com/docs/api/configuration/nuxt-config
// import { VitePWA } from "vite-plugin-pwa";
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/eslint-module",
    "@nuxt/image-edge",
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    // "vite-plugin-pwa"
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
    devOptions: {
      navigateFallback: "/",
      enabled: true
    },
    workbox: {
      clientsClaim: true,
      skipWaiting: true
    },
    manifest: {
      name: "Polo Brasil Zero",
      short_name: "Site do polo Brasil",
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
    }
  },
  routeRules: {
    "/": { prerender: true },
    "/settings/**": { prerender: false },
    "/api/list-servers": { swr: true },
    "/manifest.webmanifest": {
      headers: {
        "Content-Type": "application/manifest+json",
        "Cache-Control": "public, max-age=0, must-revalidate"
      }
    }
  },
  app: {
    keepalive: true,
    head: {
      viewport: "width=device-width,initial-scale=1,viewport-fit=cover",
      bodyAttrs: {
        class: "overflow-x-hidden"
      },
      link: [
        { rel: "icon", href: "/images/logo-green.svg", sizes: "any" },
        { rel: "icon", type: "image/svg+xml", href: "/images/logo-green.svg" },
        { rel: "apple-touch-icon", href: "/images/logo-green.svg" }
      ],
      meta: [
        {
          name: "apple-mobile-web-app-status-bar-style",
          content: "black-translucent"
        },
        // open graph social image
        {
          property: "og:title",
          content: "Centro sustentável Polo Brasil Zero"
        },
        {
          property: "og:description",
          content:
            "Parque idustrial carbono neutro - Economia circular - Hub tecnológico"
        },
        { property: "og:type", content: "website" },
        {
          property: "og:image",
          content: "https://www.polobrasilzero.com/carousel-images/20.jpg"
        },
        { property: "og:image:width", content: "1200" },
        { property: "og:image:height", content: "630" }
      ]
    }
  }
});
