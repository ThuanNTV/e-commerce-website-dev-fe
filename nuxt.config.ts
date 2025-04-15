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
    autoImports: ["defineStore", ["defineStore", "definePiniaStore"]],
  },

  i18n: {
    locales: ["en", "vi"],
    defaultLocale: "vi",
    vueI18n: resolve("./i18n.config.ts"),
    strategy: "no_prefix",
    bundle: {
      optimizeTranslationDirective: false, // Thêm dòng này để loại bỏ cảnh báo
    },
  },

  // @ts-ignore
  runtimeConfig: {
    public: {
      stripeKey: process.env.STRIPE_PUBLIC_KEY || "",
      apiBase: process.env.API_BASE_URL || "",
    },
  },

  css: [
    "@/assets/css/main.css",
    "primeicons/primeicons.css",
    "@/assets/css/primevue/theme.css",
  ],

  compatibilityDate: "2025-04-15",
});
