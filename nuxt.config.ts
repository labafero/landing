export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  runtimeConfig: {
    public: {
      umamiWebsiteId: '',
      umamiScriptUrl: 'https://cloud.umami.is/script.js',
    },
  },
  app: {
    head: {
      htmlAttrs: { lang: 'pt-BR' },
      title: 'Labafero — estúdio criativo de desenvolvimento',
      meta: [
        {
          name: 'description',
          content:
            'Labafero é um estúdio criativo nascido em Alagoas. Design de interface, desenvolvimento web e experimentações sonoras em projetos e parcerias.',
        },
        { name: 'theme-color', content: '#111319' },
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'pt_BR' },
        { property: 'og:title', content: 'Labafero — estúdio criativo de desenvolvimento' },
        {
          property: 'og:description',
          content: 'Design de interface, desenvolvimento web e experimentações sonoras em projetos e parcerias.',
        },
        { property: 'og:url', content: 'https://labafero.com/' },
        { name: 'twitter:card', content: 'summary' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'canonical', href: 'https://labafero.com/' },
      ],
    },
  },
})
