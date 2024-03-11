// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: [process.env.NUXT_UI_PRO_PATH || '@treckstar/ui-pro'],
  modules: [
    '@nuxt/content',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxt/fonts',
    '@nuxthq/studio',
    '@vueuse/nuxt',
    'nuxt-og-image',
  ],
  hooks: {
    // Define `@nuxt/ui` components as global to use them in `.md` (feel free to add those you need)
    'components:extend': (components) => {
      const globals = components.filter((c) => ['UButton'].includes(c.pascalName))

      globals.forEach((c) => c.global = true)
    }
  },
  ui: {
    icons: ['heroicons', 'simple-icons']
  },
  routeRules: {
    '/api/search.json': { prerender: true }
  },
  devtools: {
    enabled: false
  },
  typescript: {
    strict: false
  },
  experimental: {
    headNext: true,
    sharedPrerenderData: true,
    appManifest: true
  },
  nitro: {
    preset: 'vercel',
    prerender: {
      // failOnError: false
      // TODO: investigate
      // Ignore weird url from crawler on some modules readme
      ignore: ['/modules/%3C/span', '/modules/%253C/span', '/docs/getting-started/</span', '/docs/getting-started/%3C/span']
    },
    hooks: {
      'prerender:generate' (route) {
        // TODO: fix issue with recursive fetches with query string, e.g.
        // `/enterprise/agencies?region=europe&amp;amp;amp;service=ecommerce&amp;amp;service=ecommerce&amp;service=content-marketing`
        if (route.route?.includes('&amp;')) {
          route.skip = true
        }
      }
    }
  },
})
