# Labafero — showroom

Primeira versão da landing page do Labafero, feita com Nuxt 4.

## Desenvolvimento

```bash
npm install
npm run dev
```

O endereço local padrão é `http://localhost:3000`. Use `npm run build` e `npm run typecheck` para validar a aplicação. O escopo e as fontes de conteúdo estão em [PRD.md](./PRD.md).

## Analytics

A página usa [Google Analytics 4](https://developers.google.com/analytics/devguides/collection/ga4) por meio do módulo [nuxt-gtag](https://nuxt.com/modules/gtag), com o ID de medição `G-DQ10F88M3W` configurado em `nuxt.config.ts`. A coleta fica ativa em builds de produção e desativada em desenvolvimento e previews da Vercel. O ID é público e não exige variável de ambiente.

O Google tag registra `page_view` ao carregar a página. A landing envia `projects_view` quando a seção de projetos entra na tela, `project_open` ao expandir um card e `project_link` ao seguir um link externo. `project_id` identifica o projeto, sem dados pessoais. Para usar `project_id` em relatórios personalizados, cadastre esse parâmetro como dimensão personalizada no GA4.

Use UTMs nos links divulgados em redes sociais para acompanhar a origem das visitas. Para acompanhar futuras mudanças de rota em Nuxt, habilite a medição aprimorada de alterações no histórico do navegador no fluxo Web do GA4.

## Deploy na Vercel

O projeto `labafero-landing` está vinculado à Vercel e ao repositório [labafero/landing](https://github.com/labafero/landing). A branch `main` publica em [labafero.com](https://labafero.com/); `www.labafero.com` também está associado. Para publicar manualmente pela CLI, execute `npx vercel deploy --prod`.

A pasta `.vercel` e arquivos `.env` locais não entram no repositório.
