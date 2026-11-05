# Arquitetura Técnica — Presença Digital e Portfólio Vítor Jacom

Este documento é a **fonte única da verdade arquitetural** para o repositório especial `VitorJacom/VitorJacom`, detalhando a convivência harmônica entre o **GitHub Profile README**, a **Página Pessoal "Sobre Mim" / Portfólio Web**, o **Showcase Interativo AGES**, o **Blog Técnico Markdown** e o **MCP Server Stdio**.

---

## 1. Visão Geral e Topologia

O repositório é projetado sob os princípios de **zero custo contínuo (scale-to-zero)**, **conteúdo orientado a dados (content-driven)**, **alta performance estática** e **suporte nativo a agentes de IA**.

```
VitorJacom/VitorJacom (Repositório Especial)
├── README.md                      # GitHub Profile README renderizado no perfil público
├── main.pdf                       # Currículo profissional original (fonte canônica de dados)
├── vitor.jpg                      # Foto original em alta resolução (5.5MB)
├── PROJECT_CONTEXT.md             # Contexto rápido e restrições AIDD
├── docs/
│   ├── ARCHITECTURE.md            # Fonte única da verdade arquitetural (este documento)
│   └── adr/
│       ├── 0001-stack-e-estrutura-da-pagina-pessoal.md
│       ├── 0002-content-driven-blog-e-mcp-stdio-sem-backend.md
│       └── 0003-showcase-interativo-ages-demos-client-side.md
├── .github/
│   └── workflows/
│       ├── ci-site.yml            # CI: Lint, Typecheck e testes Vitest
│       └── deploy-pages.yml       # Deploy automatizado do /site para GitHub Pages
├── mcp/                           # Servidor MCP Stdio para Agentes de IA
│   ├── package.json
│   ├── tsconfig.json
│   └── src/
│       ├── index.ts               # Entrypoint do servidor stdio (@modelcontextprotocol/sdk)
│       └── tools/                 # Definição e execução das ferramentas MCP
│           ├── getProfileSummary.ts
│           ├── listSkills.ts
│           ├── getProjectDetails.ts
│           └── listBlogPosts.ts
└── site/                          # Aplicação Web (React 19 + TypeScript + Vite + Tailwind)
    ├── package.json
    ├── vite.config.ts
    ├── tailwind.config.ts
    ├── tsconfig.json
    ├── content/
    │   └── blog/                  # Artigos em Markdown autoral ("Sobre nada muito relevante")
    │       ├── 2026-01-escalando-saas-com-multitenancy.md
    │       └── 2026-02-aidd-metodo-sobre-modelo.md
    ├── public/
    │   ├── curriculo-vitor-jacom.pdf  # Cópia estática do currículo para download
    │   ├── vitor.webp                 # Foto otimizada para Web Vitals (< 150KB)
    │   ├── favicon.svg
    │   ├── llms.txt                   # Documentação semântica para LLMs e crawlers
    │   └── profile.json               # Dados canônicos consolidados para consumo externo
    ├── src/
    │   ├── types/
    │   │   ├── portfolio.ts           # Interfaces de Experiência, Projetos, Skills e Certs
    │   │   ├── ages.ts                # Interfaces das Demos e Metadados AGES
    │   │   └── blog.ts                # Interfaces de Frontmatter e Post de Blog
    │   ├── data/                      # Fonte da verdade tipada do portfólio
    │   │   ├── experience.ts
    │   │   ├── skills.ts
    │   │   ├── projects.ts
    │   │   ├── agesProjects.ts
    │   │   └── certifications.ts
    │   ├── components/
    │   │   ├── layout/
    │   │   │   ├── Navbar.tsx
    │   │   │   └── Footer.tsx
    │   │   ├── home/
    │   │   │   ├── Hero.tsx
    │   │   │   ├── CareerTimeline.tsx
    │   │   │   ├── SkillsMatrix.tsx
    │   │   │   ├── HonorsAndCerts.tsx
    │   │   │   └── ContactSection.tsx
    │   │   ├── showcase/
    │   │   │   ├── ProjectShowcase.tsx
    │   │   │   ├── ArchitectureUnderTheHood.tsx # Painel colapsável reutilizável
    │   │   │   └── ages/
    │   │   │       ├── EstudifyDemo.tsx
    │   │   │       ├── LuckyDrawDemo.tsx
    │   │   │       ├── MeditAmamenteDemo.tsx
    │   │   │       └── GloboAplausosDemo.tsx
    │   │   └── blog/
    │   │       ├── BlogList.tsx
    │   │       └── BlogPostView.tsx
    │   ├── utils/
    │   │   ├── blogLoader.ts          # Parser de Markdown com Vite import.meta.glob
    │   │   └── analytics.ts
    │   ├── App.tsx                    # Roteador SPA leve com suporte a hash routing
    │   ├── main.tsx
    │   └── index.css
    └── tests/
        ├── components/
        ├── demos/
        └── blog/
```

---

## 2. Decisões Arquiteturais Fundamentais

### 2.1. Arquitetura Orientada a Conteúdo (Content-Driven)
- **Zero JSX Edit para Atualizações de Dados:** Informações de carreira, habilidades, certificações e projetos residem em `site/src/data/*.ts`. Atualizar um cargo ou nova certificação é feito apenas alterando o arquivo de dados tipado.
- **Blog Desacoplado em Markdown:** Artigos são redigidos diretamente em `site/content/blog/*.md` com cabeçalho YAML frontmatter. O utilitário `blogLoader.ts` utiliza `import.meta.glob` do Vite (`query: '?raw'`) para compilar a lista de posts e conteúdo em tempo de compilação sem necessidade de requisições de rede ou APIs de terceiros.

### 2.2. Demos AGES 100% Client-Side e Painel "Sob o Capô"
Para comprovar a senioridade técnica demonstrada nos projetos da AGES (PUCRS) sem custos de servidores:
1. **Estudify Demo:** Interface reativa para adicionar disciplinas, definir metas semanais de estudo e recalcular cronograma dinamicamente com feedback visual.
2. **Lucky Draw Demo:** Baralho interativo de cartas com animação fluida 3D via classes CSS (transform/perspective), tiragem randômica e exibição de insights de facilitação ágil.
3. **MeditAmamente Demo:** Exercício respiratório guiado com animação vetorial SVG pulsante, ciclo de respiração (Inspirar 4s, Segurar 7s, Expirar 8s) e controles de pausa/reinício.
4. **Globo Aplausos Demo:** Painel corporativo simulado de reconhecimento entre colegas de time, com animação reativa de aplausos e contador em tempo real mockado.
5. **Painel "Arquitetura sob o Capô":** Componente colapsável padronizado acoplado a cada demo contendo:
   - **Desafio de Engenharia** enfrentado na época.
   - **Decisão Arquitetural** tomada por Vítor.
   - **Stack Original de Produção** (Java/Spring Boot, React Native, PostgreSQL, AWS).
   - **Impacto e Métricas Reais** alcançadas no cliente/usuários.

### 2.3. Integração com IA: MCP Server Stdio & llms.txt
- **Zero Backend Ativo:** Em vez de manter uma API HTTP exposta na web, o suporte a agentes de IA é fornecido por duas vias estáticas/locais:
  1. **`/llms.txt` e `/profile.json` (`site/public/`):** Servidos estaticamente pelo GitHub Pages para crawlers e LLMs na web.
  2. **MCP Server Stdio (`mcp/`):** Pacote Node.js CLI baseado no `@modelcontextprotocol/sdk` que executa via Standard Input/Output. Usuários ou assistentes locais (Claude Desktop, Cursor, Antigravity) podem rodar `npx` apontando para o pacote ou configurá-lo no JSON de ferramentas.
- **Ferramentas do Servidor MCP:**
  - `get_profile_summary`: Resumo executivo, senioridade, bio e links de contato.
  - `list_skills(category?: string)`: Lista categorizada de competências técnicas e níveis.
  - `get_project_details(projectId: string)`: Detalhes aprofundados, métricas, stack e arquitetura de um projeto (ex: Chora Rival, Estudify, Globo Aplausos).
  - `list_blog_posts()`: Lista de artigos publicados no blog com data, tempo de leitura e resumo.

---

## 3. Contratos de Dados e Modelos TypeScript

### 3.1. Modelo do Portfólio (`site/src/types/portfolio.ts`)
```typescript
export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  highlights: string[];
  skills: string[];
}

export interface SkillCategory {
  category: string;
  skills: { name: string; level: 'advanced' | 'proficient' | 'familiar'; icon?: string }[];
}

export interface CertificationItem {
  name: string;
  code: string;
  issuer: string;
  year: number;
  verificationUrl: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  category: 'saas' | 'cloud' | 'mobile' | 'enterprise';
  metrics: string[];
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  architectureHighlights: string;
}
```

### 3.2. Modelo do Showcase AGES (`site/src/types/ages.ts`)
```typescript
export interface AgesArchitectureDetails {
  challenge: string;
  solution: string;
  originalStack: string[];
  metrics: string[];
}

export interface AgesProject {
  id: 'estudify' | 'lucky-draw' | 'meditamamente' | 'globo-aplausos';
  title: string;
  subtitle: string;
  role: string;
  period: string;
  description: string;
  architecture: AgesArchitectureDetails;
}
```

### 3.3. Modelo do Blog (`site/src/types/blog.ts`)
```typescript
export interface BlogFrontmatter {
  title: string;
  slug: string;
  date: string;
  description: string;
  tags: string[];
  readTime: string;
}

export interface BlogPost extends BlogFrontmatter {
  content: string;
}
```

### 3.4. Contratos do MCP Server (`mcp/src/tools/types.ts`)
```typescript
export interface ProfileSummaryResponse {
  name: string;
  headline: string;
  yearsOfExperience: number;
  location: string;
  contact: { email: string; linkedin: string; github: string };
  keyHighlights: string[];
}

export interface SkillItemResponse {
  name: string;
  category: string;
  level: string;
}
```

---

## 4. Estratégia de Qualidade e TDD

- **Diretrizes Mandatórias de Cobertura e Provas:**
  - **Code Coverage >= 85%**: Todas as suítes de testes de frontend e MCP devem manter cobertura mínima de 85% em linhas, branches, funções e statements.
  - **Happy & Edge Cases**: Todo módulo sob teste deve possuir especificação de casos de sucesso (Happy Cases) e casos de exceção/borda/valores nulos (Edge Cases), com logs registrados no relatório de entrega.
  - **Prova Visual de Front-End**: Qualquer entrega envolvendo telas ou componentes React exige a captura de screenshots renderizados, anexados diretamente no PR.
- **Camadas de Testes:**
  - `site/tests/components/`: Testes de componentes visuais básicos (Hero, Navbar com links, Timeline, SkillsMatrix).
  - `site/tests/demos/`: Testes determinísticos das 4 demos AGES (cálculo de horas no Estudify, flip de carta no Lucky Draw, transição de estado de respiração no MeditAmamente, incremento de aplausos no Globo Aplausos e expansão do painel "Sob o Capô").
  - `site/tests/blog/`: Teste do loader de markdown, renderização de listagem e roteamento por hash (`#blog/:slug`).
  - `mcp/tests/`: Testes de execução das tools MCP via stdio simulado.
- **Acessibilidade & Boas Práticas:**
  - `aria-expanded` e `aria-controls` nos painéis colapsáveis "Sob o Capô".
  - `prefers-reduced-motion` respeitado em todas as animações CSS (especialmente pulso da respiração e flip de cartas).
  - Contraste WCAG AA verificado para paleta escura (Dark Theme executivo).

---

## 5. Pipeline de CI/CD e Publicação

1. **Validação Contínua (`ci-site.yml`):**
   - Disparado em todo Pull Request e push para `main`.
   - Executa lint, checagem de tipos estrita (`tsc --noEmit`) e suíte Vitest em `site/`.
2. **Deploy Estático no GitHub Pages (`deploy-pages.yml`):**
   - Compila a aplicação Vite (`npm run build` dentro de `site/`).
   - Copia e sincroniza `site/public/profile.json` e `site/public/llms.txt`.
   - Publica os artefatos estáticos através da action oficial do GitHub Pages.
