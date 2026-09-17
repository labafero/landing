# PRD — Showroom e portfólio do Labafero

**Status:** primeira versão em Nuxt publicada em `labafero.com`

**Data:** 17/09/2026

**Contexto confirmado:** Labafero é uma plataforma e estúdio criativo de desenvolvimento, nascido em Alagoas. Design de interface, desenvolvimento web e experimentações sonoras convergem na marca. A empresa inicia sua presença de marca enquanto seus projetos já estão em execução.

**Fontes existentes:** o [knowledge do Konton](https://github.com/konton-pro/knowledge/tree/main/Projects) documenta contexto e links oficiais de Nave e Lockroom.

**Outras fontes:** os repositórios de [Streeetch](https://github.com/labafero/streeetch) e [VPN Roleplay](https://github.com/anilsonlopes/vpn) descrevem esses projetos. A grafia “Streeetch” segue o README do projeto.

**Escopo da primeira versão:** apresentação do Labafero, showroom com Nave, Streeetch, Lockroom, Konton e VPN, menção à parceria com Avalanche e analytics básico.

**Idealizador:** o site pessoal informado é [quila.dev](https://quila.dev). A primeira versão inclui um link discreto na seção “Sobre”, sem transformar o portfólio do estúdio em perfil pessoal.
**Decisões pendentes de operação:** ID do site no Umami, textos e visuais finais de cada card, orçamento e prazo. O papel do Labafero só será declarado quando estiver confirmado; a ausência dessa informação não impede um card descritivo.

## 1. Executive Summary

**Problem Statement:** O Labafero já atua em projetos e parcerias, mas precisa de uma presença própria que apresente o conjunto do trabalho e esclareça seu papel em cada iniciativa. O link será divulgado em redes sociais, especialmente Instagram e [LinkedIn](https://www.linkedin.com/company/labafero82), para iniciar o reconhecimento da marca.

**Proposed Solution:** Publicar uma landing page que funcione como showroom e portfólio: apresentar o Labafero, listar projetos com descrições breves, distinguir projetos e parcerias quando isso for relevante e permitir a exploração do trabalho. Adicionar analytics básico para observar origem do tráfego e interesse pelos projetos, orientando o posicionamento futuro da marca.

**Success Criteria:**

- **Alcance:** registrar sessões e visitantes por origem de tráfego, com destaque para Instagram e LinkedIn. Linha de base e meta numérica serão definidas após as primeiras quatro semanas de publicação.
- **Descoberta:** medir `sessões com abertura de ao menos um projeto / sessões da landing page`. Meta numérica `TBD` após a linha de base inicial.
- **Profundidade de exploração:** medir a distribuição de aberturas por projeto e a parcela de sessões que abre dois ou mais projetos. Meta numérica `TBD` após a linha de base inicial.
- **Integridade:** 100% dos cards publicados têm descrição apoiada em fonte existente e não atribuem ao Labafero trabalhos ainda não realizados. Links presentes funcionam em celular e desktop; cards sem destino público podem permanecer informativos.
- **Qualidade técnica:** LCP ≤ 2,5 s e CLS ≤ 0,1 no percentil 75 quando houver dados reais suficientes; sem problemas críticos ou sérios em verificação automatizada de acessibilidade e com percurso principal operável por teclado.

## 2. User Experience & Functionality

**User Personas:**

- **Visitante vindo de Instagram ou LinkedIn:** quer entender rapidamente o que é o Labafero e ver trabalhos concretos.
- **Representante de empresa de tecnologia ou desenvolvimento:** quer avaliar a atuação do estúdio em produto, código e design, inclusive em parcerias.
- **Responsável pelo Labafero:** quer apresentar trabalhos com atribuição correta e acompanhar sinais iniciais de reconhecimento da marca.

**User Flow:** link em perfil ou publicação → primeira dobra com identidade do Labafero e chamada “Explorar projetos” → showroom de projetos → abertura de detalhes ou destino aprovado → exploração de outros projetos. A página também oferece um caminho discreto para os canais oficiais do Labafero.

**User Stories e Acceptance Criteria:**

1. **Como visitante, quero entender o que é o Labafero para reconhecer a marca ao ver seus projetos.**
   - A primeira dobra apresenta o Labafero como plataforma e estúdio criativo nascido em Alagoas.
   - A narrativa mostra design de interface, desenvolvimento web e experimentações sonoras sem afirmar que todas as disciplinas foram aplicadas a todos os projetos.
   - A seção “Sobre” oferece um link identificável para o site do idealizador, `https://quila.dev`, mantendo a apresentação dos projetos como foco da página.
   - O texto apresenta Konton e Avalanche como contextos de parceria sem sugerir autoria exclusiva do Labafero sobre os projetos dessas iniciativas.
   - A página funciona em larguras de 320 px a 1440 px sem rolagem horizontal causada pelo conteúdo.
2. **Como visitante, quero explorar projetos para compreender o trabalho e as colaborações do Labafero.**
   - A chamada “Explorar projetos” na primeira dobra leva à seção de projetos da mesma página.
   - Cada item tem nome e resumo; ao ser selecionado, revela um detalhe breve na própria página e dispara `project_open`. Visual e link externo entram quando houver recurso adequado; um card textual é válido na primeira versão. Capturas das aplicações existentes podem compor o visual.
   - Nave é apresentado como plataforma de mobilidade para transporte intermunicipal por vans e micro-ônibus, com foco em linhas, horários e informações de viagem, conforme o [knowledge do Nave](https://github.com/konton-pro/knowledge/blob/main/Projects/nave/README.md). O link público da aplicação é [nave.konton.pro](https://nave.konton.pro).
   - Lockroom é apresentado como cofre virtual de credenciais com criptografia na interface, conforme o [knowledge do Lockroom](https://github.com/konton-pro/knowledge/blob/main/Projects/lockroom/README.md). O link público é [lockroom.konton.pro](https://lockroom.konton.pro). O protótipo atual foi feito por outro desenvolvedor; o Labafero ainda não participou da implementação. A elaboração de roadmap e o planejamento de features são uma participação futura, que pode ser mencionada como plano, nunca como entrega concluída.
   - A apresentação de Konton deixa clara a relação informada pelo fundador: é a marca que abriga Nave e Lockroom e um contexto de parceria de design do Labafero. A primeira versão pode usar essa formulação geral, sem detalhar entregas não documentadas.
   - Avalanche aparece como coletivo formado por ex-colegas de trabalho do fundador do Labafero; o fundador atua em desenvolvimento e design no coletivo. A primeira versão pode apresentar a parceria sem estudo de caso detalhado.
   - Streeetch pode ser descrito como plataforma para descobrir e contextualizar cenas de filmes e séries; o [README](https://github.com/labafero/streeetch/blob/main/README.md) registra que o produto está em fase de fundação, portanto a landing não deve apresentá-lo como concluído.
   - VPN Roleplay pode ser descrito como projeto de interface para matérias jornalísticas de roleplay, conforme seu [README](https://github.com/anilsonlopes/vpn/blob/main/README.md).
   - O visitante consegue fechar o detalhe e explorar outro projeto.
3. **Como responsável, quero observar o uso do showroom para orientar o posicionamento da marca.**
   - Analytics registra visualização da página, origem de tráfego quando disponível e abertura de projeto com identificador estável.
   - Links usados em campanhas sociais podem carregar parâmetros UTM documentados; a página não depende deles para funcionar.
   - Um relatório permite consultar visitas por origem, projetos mais abertos e evolução semanal, sem tratar esses sinais como prova isolada de reconhecimento de marca.
   - Eventos são validados em celular e desktop antes da publicação, sem incluir dados pessoais nos parâmetros.

**Non-Goals (MVP):** captar leads, vender serviços, oferecer orçamento, criar checkout, área autenticada, blog, testes de variantes ou uma experiência sonora interativa. Um canal de contato pode aparecer de forma secundária, sem ser a conversão principal.

## 3. AI System Requirements (If Applicable)

Não se aplica ao escopo atual.

## 4. Technical Specifications

**Architecture Overview:** aplicação Nuxt pública e responsiva, inicialmente com conteúdo local estruturado e sem CMS. A chamada principal leva à seção de projetos; cada card pode revelar um detalhe breve na própria página e oferecer um link externo opcional. O Umami registra visualizações e interações com os projetos quando configurado por variável de ambiente. A hospedagem será na Vercel, com `labafero.com` como domínio de produção.

**Modelo de conteúdo por projeto:** identificador, nome, resumo, relação com Labafero e Konton quando pertinente; visual, link e créditos detalhados são campos opcionais. O modelo deve permitir relações como `Konton → Nave` e `Konton → Lockroom` sem apresentar os três como trabalhos independentes de autoria exclusiva do Labafero.

**Integration Points:**

- **Redes sociais:** o endereço da landing page deve poder ser usado nos perfis e publicações do Instagram e LinkedIn. O URL da página do LinkedIn foi fornecido pelo usuário; seu conteúdo não pôde ser verificado por acesso público nesta revisão.
- **Projetos:** Nave e Lockroom já têm links públicos documentados no knowledge. Streeetch e VPN têm contexto em seus repositórios locais. Links inexistentes ou ainda não selecionados não bloqueiam seus cards.
- **Analytics:** Umami, com ID do site configurado no ambiente de publicação; visualizações de página automáticas e eventos `projects_view`, `project_open` e `project_link`, com identificador do projeto quando aplicável. Registrar origem quando disponível e usar UTMs nos links de campanhas.
- **Conteúdo:** dados locais no projeto Nuxt; sem CMS, banco de dados ou autenticação na primeira versão.

**Security & Privacy:** usar HTTPS na publicação; coletar apenas os dados necessários para medir uso agregado; não enviar nomes, e-mails ou outros dados pessoais em eventos; definir configuração de privacidade conforme a ferramenta escolhida. Usar texto e visuais dos projetos com a atribuição correta.

**Qualidade e validação:** testar âncora, links presentes, métricas e UTMs; revisar textos sobre contribuições efetivas e futuras; testar teclado, foco, contraste, textos alternativos e movimento reduzido quando houver animação; medir desempenho em celular e desktop. Mídias de som, se incluídas, têm controles explícitos e não iniciam automaticamente.

**Stack:** Nuxt 4. **Domínio e hospedagem:** `labafero.com` na Vercel; usar a URL de preview da Vercel enquanto a associação e o DNS do domínio são verificados. **Orçamento e prazo:** `TBD`.

## 5. Risks & Roadmap

**Phased Rollout:**

- **MVP:** criar scaffold Nuxt; apresentar a marca, cinco projetos e a parceria com Avalanche; usar o knowledge e os READMEs locais para os resumos; implementar analytics básico; testar e publicar na Vercel com `labafero.com`.
- **v1.1:** após quatro semanas, revisar origem do tráfego e exploração dos projetos; ajustar hierarquia, textos e ordem dos itens com base nos dados e no feedback recebido.
- **v2.0:** considerar estudos de caso mais completos, páginas individuais, novas parcerias e uma estratégia de posicionamento mais explícita quando houver material e aprendizado suficientes.

**Technical Risks:**

- **Atribuição imprecisa:** relações entre Labafero, Konton, Nave, Lockroom e Avalanche podem ser interpretadas como autoria exclusiva. Usar formulações gerais de parceria e descrever entregas específicas somente quando confirmadas. Em Lockroom, explicitar que a contribuição do Labafero ainda é planejada.
- **Mídia pesada:** imagens, vídeo e som podem prejudicar o carregamento em redes móveis. Otimizar arquivos, carregar conteúdo pesado sob demanda e medir desempenho.
- **Dados iniciais escassos:** tráfego de uma marca nova pode ser insuficiente para conclusões sobre posicionamento. Usar analytics como linha de base e combinar com feedback qualitativo.
- **Origem de tráfego incompleta:** aplicativos sociais podem não enviar referência. Usar UTMs nos links divulgados e registrar limitações da medição.

**Próximo passo:** configurar o ID do Umami para iniciar a coleta de métricas e usar os primeiros dados para revisar o posicionamento da marca.
