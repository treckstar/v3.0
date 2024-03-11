---
layout: article
title: How Nuxt 3 Fixed My Lighthouse Scores
description: I recently updated my website to Nuxt 3 with static site generation, and it has significantly improved my Lighthouse scores.
badge:
  label: Web Development, Nuxt, Performance, Headless CMS
authors:
  - name: Brandon Trecki
    to: https://twitter.com/treckstar
    avatar:
      src: https://i.pravatar.cc/300
featured: true
toc: true
date: '2023-12-11'
image:
  src: /img/posts/vercel-speed-insight-1.png
  alt: Vercel Speed Insight 1
category: /categories/business
tags:
  - /tags/nuxt
  - /tags/development
  - /tags/vue
  - /tags/headless-cms
  - /tags/content-management
---

## Vercel

I have recently been refreshing my blog, and SEO and page speed are very important to me. Using Vercel Analytics, I was able to see the performance improvements in real-time. The first image below shows the performance of my website before the update. The second image shows the performance after the update.

## Speed Insights

![Vercel Speed Insight 1](/img/posts/vercel-speed-insight-1.png)

At this stage, I have limited data but still can see my website's performance needs to be improved. I set my goal to get a score of 90+ for performance and best practices.

I had been using `nuxt build` to generate my website, but I switched to `nuxt generate` to take advantage of static site generation. This made a huge difference in my website's performance. It is very important when working with Nuxt 3 in SSG mode to have your `routesRules` set up correctly. I had to spend some time to get this right, but it was worth it.

The solution ended up being to use `ISR` to prerender all of my routes. Depending on the client, I set the refresh value anywhere from 1min to 1hr. This is a good balance between performance and freshness; however you can go lower or higher depending on your needs.

 In the end, this is what I used for my Nuxt 3 configuration:

```typescript
import manifestJson from './.blog/context-manifest.json'
import exposeColors from './tailwind/plugin-expose-colors'
import { createResolver } from '@nuxt/kit'
import type { ManifestV2 } from '@uniformdev/context'
const { resolve } = createResolver(import.meta.url)

export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    'pinceau/nuxt',
    '@nuxthq/studio',
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    'nuxt-config-schema',
    'nuxt-icon',
    '@vueuse/nuxt',
    'nuxt-gtag',
    'unplugin-fonts/nuxt',
    '@cssninja/nuxt-toaster',
  ],

  css: [
    resolve('assets/css/main.css'),
    resolve('assets/css/colors.css'),
    '@fontsource-variable/fira-code/index.css',
    '@fontsource-variable/inter/index.css',
    '@fontsource-variable/karla/index.css',
    '@fontsource-variable/recursive/index.css',
    '@fontsource/poppins/index.css',
  ],

  tailwindcss: {
    config: {
      content: [],
      plugins: [exposeColors],
    },
  },

  app: {
    pageTransition: {
      enterActiveClass: 'transition-opacity duration-200 ease-out',
      enterFromClass: 'opacity-0',
      enterToClass: 'opacity-100',
      leaveActiveClass: 'transition-opacity duration-75 ease-in',
      leaveFromClass: 'opacity-100',
      leaveToClass: 'opacity-0',
    },
  },

  uniform: {
    projectId: process.env.UNIFORM_PROJECT_ID,
    readOnlyApiKey: process.env.UNIFORM_CLI_API_KEY,
    apiHost: process.env.UNIFORM_CLI_BASE_URL,
    edgeApiHost: process.env.UNIFORM_CLI_BASE_EDGE_URL,
    outputType: process.env.OUTPUT_TYPE,
    manifest: manifestJson as ManifestV2,
    defaultConsent: true,
    playgroundPath: '/playground',
  },

  colorMode: {
    preference: 'dark', // default value of $colorMode.preference
    fallback: 'dark', // fallback value if not system preference found
  },

  routeRules: {
    '/**': { isr: 3600 },
  },

  content: {
    documentDriven: true,
    experimental: {
      search: true,
    },
    highlight: {
      preload: ['vue', 'vue-html', 'typescript', 'bash', 'diff', 'scss'],
      theme: {
        default: 'one-dark-pro',
        dark: 'one-dark-pro',
      },
    },
  },

  pinceau: {
    configFileName: 'tokens.config',
    preflight: false,
    studio: true,
  },
})
```

![Vercel Speed Insight 2](/img/posts/vercel-speed-insight-2.png)

After the update, my website's performance improved significantly. I was able to achieve a score of 90+ for performance and best practices.

![Vercel Speed Insight 3](/img/posts/vercel-speed-insight-3.png)


## Lighthouse Scores

Iniitially my Lighthouse scores were not great. I was getting a score of 50-60 for performance. After the update, my scores improved to 90-100.

Simply switching from `nuxt build` to `nuxt generate` made a huge difference.

## Stack

I am using the following to refresh my website:

- Nuxt 3
- Vercel
- Tailwind CSS
- Markdown
- Vue 3
- Nuxt Content
- Nuxt Studio
- CSS Ninja Studio
- Uniform
- TypeScript
- Vite
- Vercel & Google Analytics

## Animated Speed Insights

I used ChatGPT to help me create an animated gif to show the difference in performance before and after the update.

![Animated Speed Insights](/img/posts/animated_speed_insights.gif)

I was going to share a link to the prompt I used to generate the gif, but unfortuanately ChatGPT is unable to share questions that contain images. So I took a screenshot of the prompt instead.

![ChatGPT Prompt](/img/posts/chatgpt-created-my-animated-gif.png)
