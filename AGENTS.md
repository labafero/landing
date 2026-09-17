# Diretrizes do Repositório

## Estrutura do Projeto e Organização dos Módulos

Este repositório é um showroom de página única em Nuxt 4. `app/app.vue` contém o conteúdo da página, os dados dos projetos, as interações e os eventos de analytics. Os estilos globais e as regras responsivas ficam em `app/assets/css/main.css`; arquivos estáticos, como o favicon, devem ficar em `public/`. `nuxt.config.ts` define os metadados do site, a folha de estilos e a configuração do Google Analytics. Leia `PRD.md` antes de alterar descrições de projetos ou afirmações sobre parcerias; `README.md` explica a configuração local e o deploy.

## Comandos de Build, Teste e Desenvolvimento

- `npm install` instala as dependências a partir de `package-lock.json`.
- `npm run dev` inicia o site local em `http://localhost:3000`.
- `npm run typecheck` verifica os tipos de Vue e TypeScript.
- `npm run build` cria a saída de produção do Nuxt.
- `npm run generate` gera um build estático quando necessário.

Execute `npm run typecheck` e `npm run build` antes de enviar alterações. Não faça commit dos diretórios gerados `.nuxt/` ou `.output/`.

## Estilo de Código e Convenções de Nomenclatura

Siga o estilo existente dos componentes Vue de arquivo único: indentação de dois espaços, aspas simples em TypeScript e ausência de ponto e vírgula. Mantenha os identificadores dos projetos estáveis, em minúsculas e adequados ao parâmetro de analytics `project_id` (por exemplo, `lockroom`). Use classes CSS descritivas em kebab-case e mantenha as sobrescritas responsivas na folha de estilos global. Não há formatter ou linter configurado; siga o código ao redor e revise os diffs para manter a consistência. Mantenha os textos visíveis em português do Brasil.

## Diretrizes de Teste

Atualmente não há suíte de testes automatizados nem limite de cobertura. Para alterações na página, verifique localmente os layouts para desktop e celular, a navegação pelo teclado e o foco visível, os links externos e o comportamento de movimento reduzido. Para alterações de analytics, confirme que `projects_view`, `project_open` e `project_link` mantêm seus gatilhos e nunca incluem dados pessoais. O analytics fica desativado no desenvolvimento e nos previews da Vercel; quando necessário, valide a coleta real no GA4 após uma publicação em produção.

## Diretrizes para Commits e Pull Requests

Os commits recentes usam assuntos curtos no imperativo, às vezes com prefixos de Conventional Commits como `feat:` ou `chore:`. Mantenha o assunto específico para a alteração. Nos pull requests, descreva o resultado visível para o usuário, inclua o link de uma issue ou requisito do PRD e adicione capturas de tela para mudanças visuais. Informe as verificações de typecheck, build e testes manuais realizadas; destaque explicitamente alterações de analytics ou de texto.
