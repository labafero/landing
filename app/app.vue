<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

type Project = {
  id: string
  index: string
  name: string
  kind: string
  summary: string
  detail: string
  note: string
  url?: string
  color: string
}

const projects: Project[] = [
  {
    id: 'nave',
    index: '01',
    name: 'Nave',
    kind: 'Mobilidade / Konton',
    summary: 'Informação para quem se move entre cidades.',
    detail:
      'Uma plataforma de mobilidade para transporte intermunicipal por vans e micro-ônibus. Reúne linhas, horários e informações de viagem para reduzir a incerteza de quem está no caminho.',
    note: 'Produto do ecossistema Konton.',
    url: 'https://nave.konton.pro',
    color: 'lime',
  },
  {
    id: 'streeetch',
    index: '02',
    name: 'Streeetch',
    kind: 'Cultura / Em construção',
    summary: 'Um jeito de reencontrar cenas que ficam com a gente.',
    detail:
      'Plataforma em desenvolvimento para descobrir e contextualizar cenas de filmes e séries, reunindo cada momento com sua origem, contexto e relações.',
    note: 'Projeto em fase de fundação. Ainda não é um produto concluído.',
    color: 'blue',
  },
  {
    id: 'lockroom',
    index: '03',
    name: 'Lockroom',
    kind: 'Segurança / Konton',
    summary: 'Um espaço seguro para guardar credenciais.',
    detail:
      'Cofre virtual de credenciais com criptografia realizada na interface. Um produto do ecossistema Konton ainda em evolução.',
    note: 'Protótipo do ecossistema Konton.',
    url: 'https://lockroom.konton.pro',
    color: 'orange',
  },
  {
    id: 'konton',
    index: '04',
    name: 'Konton',
    kind: 'Parceria / Design',
    summary: 'Uma marca, diferentes produtos em movimento.',
    detail:
      'A Konton abriga Nave e Lockroom. O Labafero colabora com a marca em design, em uma parceria que conecta visão de produto e construção digital.',
    note: 'Nave e Lockroom pertencem ao ecossistema Konton.',
    color: 'pink',
  },
  {
    id: 'vpn',
    index: '05',
    name: 'VPN Roleplay',
    kind: 'Interface / Comunidade',
    summary: 'Uma linguagem visual para notícias dentro de outro mundo.',
    detail:
      'Projeto de interface para matérias jornalísticas em uma experiência de roleplay, pensado para leitura, navegação e personalização.',
    note: 'Projeto em evolução.',
    color: 'violet',
  },
]

const projectsSection = ref<HTMLElement | null>(null)
let projectsObserver: IntersectionObserver | undefined

function track(name: string, data?: Record<string, string>) {
  useTrackEvent(name, data)
}

function onProjectToggle(event: Event, id: string) {
  if ((event.target as HTMLDetailsElement).open) {
    track('project_open', { project_id: id })
  }
}

onMounted(() => {
  if (!projectsSection.value || !('IntersectionObserver' in window)) return
  projectsObserver = new IntersectionObserver(
    (entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        track('projects_view')
        projectsObserver?.disconnect()
      }
    },
    { threshold: 0.2 },
  )
  projectsObserver.observe(projectsSection.value)
})

onUnmounted(() => projectsObserver?.disconnect())

</script>

<template>
  <div class="site-shell">
    <a class="skip-link" href="#conteudo">Pular para o conteúdo</a>

    <header class="site-header">
      <a class="brand" href="#inicio" aria-label="Labafero, início">
        <span class="brand-mark" aria-hidden="true"><span></span><i></i></span>
        <span>Labafero<span class="brand-period">.</span></span>
      </a>
      <nav aria-label="Navegação principal">
        <a href="#sobre">Sobre</a>
        <a href="#projetos">Projetos</a>
        <a href="#conexoes">Conexões</a>
      </nav>
      <span class="header-tag">Alagoas, Brasil <span aria-hidden="true">↗</span></span>
    </header>

    <main id="conteudo">
      <section id="inicio" class="hero" aria-labelledby="hero-title">
        <div class="hero-orbit orbit-one" aria-hidden="true"></div>
        <div class="hero-orbit orbit-two" aria-hidden="true"></div>
        <div class="hero-topline"><span class="signal-dot"></span> Estúdio criativo de desenvolvimento <span>001 / 2026</span></div>
        <div class="hero-content">
          <p class="eyebrow">Ideias em estado de criação.</p>
          <h1 id="hero-title">Entre o<br /><em>design</em> e o<br /><span>código.</span></h1>
          <div class="hero-bottom">
            <p>Uma plataforma e estúdio criativo nascido em Alagoas, onde interfaces, desenvolvimento web e experimentações sonoras se encontram.</p>
            <a class="round-link" href="#projetos" aria-label="Explorar projetos">
              <span aria-hidden="true">↘</span>
            </a>
          </div>
        </div>
        <div class="hero-foot"><span>Independente por natureza</span><span>Role para explorar ↓</span></div>
      </section>

      <div class="ticker" aria-hidden="true">
        <div class="ticker-inner">INTERFACE <span>✳</span> DESENVOLVIMENTO <span>✳</span> SOM <span>✳</span> INTERFACE <span>✳</span> DESENVOLVIMENTO <span>✳</span> SOM <span>✳</span></div>
      </div>

      <section id="sobre" class="about section-wrap" aria-labelledby="about-title">
        <div class="section-kicker"><span>01 / SOBRE</span><span>O que nos move</span></div>
        <div class="about-grid">
          <h2 id="about-title">Um laboratório<br />para o que <span>vem.</span></h2>
          <div class="about-copy">
            <p>O Labafero é um espaço para criar produtos digitais, desenhar experiências e testar novas formas de expressão.</p>
            <p>Trabalhamos entre disciplinas e em parceria com outras pessoas e marcas. Cada projeto abre uma pergunta diferente — e uma oportunidade de construir algo com intenção.</p>
            <div class="capabilities" aria-label="Áreas de atuação">
              <span>Design de interface</span><span>Desenvolvimento web</span><span>Experimentações sonoras</span>
            </div>
            <p class="founder-note">Por trás da ideia: <a href="https://quila.dev" target="_blank" rel="noopener noreferrer">conheça o idealizador <span aria-hidden="true">↗</span></a></p>
          </div>
        </div>
      </section>

      <section id="projetos" ref="projectsSection" class="projects section-wrap" aria-labelledby="projects-title">
        <div class="section-kicker"><span>02 / SHOWROOM</span><span>Projetos e parcerias</span></div>
        <div class="projects-heading">
          <h2 id="projects-title">Coisas que<br /><em>ganham forma.</em></h2>
          <p>Uma seleção do que estamos construindo e das iniciativas que fazem parte do nosso caminho.</p>
        </div>
        <div class="project-list">
          <details v-for="project in projects" :key="project.id" class="project-row" :class="`accent-${project.color}`" @toggle="onProjectToggle($event, project.id)">
            <summary>
              <span class="project-index">{{ project.index }}</span>
              <span class="project-name">{{ project.name }}</span>
              <span class="project-kind">{{ project.kind }}</span>
              <span class="project-toggle" aria-hidden="true">↗</span>
            </summary>
            <div class="project-detail">
              <div class="project-art" aria-hidden="true"><span>{{ project.name.slice(0, 1) }}</span><i></i></div>
              <div class="project-info">
                <p class="project-lead">{{ project.summary }}</p>
                <p>{{ project.detail }}</p>
                <span class="project-note">{{ project.note }}</span>
                <a v-if="project.url" :href="project.url" target="_blank" rel="noopener noreferrer" class="text-link" @click="track('project_link', { project_id: project.id })">Visitar projeto <span aria-hidden="true">↗</span></a>
              </div>
            </div>
          </details>
        </div>
      </section>

      <section id="conexoes" class="connections section-wrap" aria-labelledby="connections-title">
        <div class="section-kicker"><span>03 / CONEXÕES</span><span>Juntos, mais longe</span></div>
        <div class="connections-grid">
          <div>
            <h2 id="connections-title">Criar também<br />é <em>colaborar.</em></h2>
            <p>O Labafero se conecta a marcas e coletivos que compartilham o desejo de experimentar e construir.</p>
          </div>
          <div class="connection-cards">
            <div class="connection-card"><span>Parceria em design</span><strong>Konton</strong><p>Marca que abriga Nave e Lockroom.</p></div>
            <div class="connection-card"><span>Coletivo criativo</span><strong>Avalanche</strong><p>Atuação do fundador em desenvolvimento e design.</p></div>
          </div>
        </div>
      </section>
    </main>

    <footer class="site-footer">
      <div class="footer-top"><span class="footer-asterisk" aria-hidden="true">✳</span><p>Feito para continuar<br />em movimento.</p></div>
      <div class="footer-bottom"><span>© {{ new Date().getFullYear() }} Labafero</span><span>Nascido em Alagoas</span><a href="https://www.linkedin.com/company/labafero82" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a><a href="#inicio">Voltar ao topo ↑</a></div>
    </footer>
  </div>
</template>
