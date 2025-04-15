import { defineNuxtConfig } from "nuxt/config";
import { resolve } from "path";

export default defineNuxtConfig({
  devtools: {
    enabled: process.env.NODE_ENV === "development",
  },

  modules: [
    "@nuxt/devtools",
    "@pinia/nuxt",
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    "@nuxtjs/i18n",
    "@nuxt/icon",
    // Loại bỏ nuxt-primevue
  ],

  tailwindcss: {
    config: {
      content: [
        "./pages/**/*.{js,ts,vue}",
        "./components/**/*.{js,ts,vue}",
        "./layouts/**/*.{js,ts,vue}",
        "./node_modules/primevue/**/*.{vue,js,ts,jsx,tsx}", // PrimeVue components
      ],
      theme: {
        extend: {
          colors: {
            primary: "#10b981",
          },
        },
      },
    },
  },

  pinia: {
    autoImports: [
      "defineStore",
      "acceptHMRUpdate",
      ["defineStore", "definePiniaStore"],
    ],
  },

  i18n: {
    locales: [
      { code: "en", iso: "en-US", file: "en.json" },
      { code: "vi", iso: "vi-VN", file: "vi.json" },
    ],
    defaultLocale: "vi",
    lazy: true,
    langDir: "locales",
    strategy: "prefix_except_default",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root",
    },
  },

  // @ts-ignore
  runtimeConfig: {
    public: {
      stripeKey: process.env.STRIPE_PUBLIC_KEY || "",
      apiBase: process.env.API_BASE_URL || "",
      baseURL: process.env.NUXT_PUBLIC_BASE_URL || "/",
    },
  },

  css: [
    "@/assets/css/main.css",
    "primeicons/primeicons.css",
    "@/assets/css/primevue/theme.css",
  ],
  // Cấu hình Nitro
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ["/", "/404"],
    },
    compressPublicAssets: true,
  },

  // Cấu hình ứng dụng
  app: {
    baseURL: process.env.NUXT_PUBLIC_BASE_URL || "/",
    buildAssetsDir: "/_nuxt/",
    head: {
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
      link: [
        {
          rel: "icon",
          type: "image/png",
          href: "/favicon.png",
        },
      ],
    },
  },
  compatibilityDate: "2025-04-15",
});
