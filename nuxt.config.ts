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
      ],
      link: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    },
  },
})
