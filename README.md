# Labafero — showroom

Primeira versão da landing page do Labafero, feita com Nuxt 4.

## Desenvolvimento

```bash
npm install
npm run dev
```

O endereço local padrão é `http://localhost:3000`. Use `npm run build` e `npm run typecheck` para validar a aplicação. O escopo e as fontes de conteúdo estão em [PRD.md](./PRD.md).

## Analytics

A página está preparada para [Umami](https://docs.umami.is/docs/guides/track-single-page-apps). Configure `NUXT_PUBLIC_UMAMI_WEBSITE_ID` no ambiente de publicação. `NUXT_PUBLIC_UMAMI_SCRIPT_URL` é opcional e usa Umami Cloud como padrão; altere para a URL da sua instância, se necessário.

O rastreador registra visualizações de página automaticamente. A página registra `projects_view` quando a seção de projetos entra na tela, `project_open` ao expandir um projeto e `project_link` ao seguir um link externo. O identificador do projeto é o único dado adicional enviado nesses eventos.

Sem `NUXT_PUBLIC_UMAMI_WEBSITE_ID`, a página funciona normalmente, mas não envia analytics.

## Deploy na Vercel

O projeto `labafero-landing` está vinculado à Vercel e ao repositório [labafero/landing](https://github.com/labafero/landing). A branch `main` publica em [labafero.com](https://labafero.com/); `www.labafero.com` também está associado. Para publicar manualmente pela CLI, execute `npx vercel deploy --prod`.

Configure `NUXT_PUBLIC_UMAMI_WEBSITE_ID` nas variáveis do projeto Vercel quando houver um site Umami. A pasta `.vercel` e arquivos `.env` locais não entram no repositório.
