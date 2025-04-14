declare module "nuxt-primevue" {
  interface PrimeVueConfiguration {
    cssLayerOrder?: string;
    components?: {
      include?: string[];
      exclude?: string[];
      prefix?: string;
    };
    options?: {
      ripple?: boolean;
    };
  }
}

declare module "@nuxt/schema" {
  interface NuxtConfig {
    primevue?: PrimeVueConfiguration;
  }
}
