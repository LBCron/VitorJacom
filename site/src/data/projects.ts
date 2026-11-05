import type { ProjectItem } from '../types/portfolio';

export const projects: ProjectItem[] = [
  {
    id: 'chora-rival',
    title: 'Chora Rival',
    tagline: 'Plataforma SaaS Multi-Tenant de geração multimodal com IA e pagamentos PIX em tempo real.',
    category: 'saas',
    metrics: [
      'Infraestrutura scale-to-zero (FinOps) provisionada via Terraform no GCP Cloud Run e Cloudflare Pages',
      'Processamento concorrente em Java 21 (Virtual Threads) com rastreamento distribuído OpenTelemetry + Jaeger via MDC',
      'Checkout PIX em tempo real (Mercado Pago) com validação criptográfica HMAC SHA-256 e idempotência',
    ],
    techStack: [
      'Java 21',
      'Spring Boot 3.3',
      'PostgreSQL 16',
      'Flyway',
      'React 19',
      'TypeScript 5',
      'Tailwind CSS',
      'TanStack Query v5',
      'Zustand',
      'Zod',
      'Storybook 8',
      'Terraform',
      'GCP Cloud Run',
      'OpenTelemetry',
      'Jaeger',
    ],
    architectureHighlights:
      'Back-end multi-tenant em Java 21 (Virtual Threads) e Spring Boot 3.3 via Strategy Pattern, autenticação passwordless (Magic Link) com isolamento de tenant, streaming seguro no Google Cloud Storage, padronização de erros RFC 7807 (ProblemDetail) e suíte front-end com ≥ 80% de cobertura V8 (Vitest, RTL, MSW).',
    liveUrl: 'https://chorarival.com.br',
  },
  {
    id: 'my-agents',
    title: 'my-agents',
    tagline: 'Ecossistema de Harness Engineering, orquestração determinística e governança para agentes autônomos de IA.',
    category: 'cloud',
    metrics: [
      'Orquestração determinística de agentes multi-provider (Claude Code, Codex, Antigravity) sob Vertical Slice Architecture',
      'Isolamento de execução efêmera (Zero-State Memory) via Git Worktrees e Test Tamper Guard contra adulteração de testes',
      'Contratos Contract-First (OpenAPI 3.0 → TypeScript) com detecção automatizada de drift via checksum SHA-256 e telemetria FinOps',
    ],
    techStack: ['TypeScript 5', 'Node.js', 'React Ink', 'Zod', 'SQLite (WAL)', 'OpenAPI 3.0', 'Git Worktrees', 'Bash', 'GitHub Actions'],
    architectureHighlights:
      'Ferramenta CLI/TUI reativa e pipeline AIDD com máquina de estados determinística (Planner, QA, Coder, Gatekeeper), Inspetor Estático Anti-Slop (prevenção de any, barrel bridges e complexidade excessiva) e motor de Telemetria/FinOps para controle de tokens e custos em USD.',
    githubUrl: 'https://github.com/VitorJacom/my-agents',
  },
  {
    id: 'estudify',
    title: 'Estudify',
    tagline: 'Plataforma mobile de gestão de estudos e cronogramas acadêmicos dinâmicos desenvolvida na AGES.',
    category: 'mobile',
    metrics: [
      'Liderança técnica de 18 desenvolvedores organizados em 4 squads ágeis',
      'Redução de 98% no consumo de memória de ativos gráficos (sanando erros de Out-of-Memory no build Android)',
      'Automação E2E em dispositivos físicos com Maestro, ADB e reset idempotente de banco em Node.js',
    ],
    techStack: ['React Native', 'TypeScript', 'NestJS', 'Prisma ORM', 'PostgreSQL', 'Node.js', 'Maestro', 'ADB'],
    architectureHighlights:
      'App mobile full-stack com back-end em NestJS e Prisma ORM sobre PostgreSQL, pipeline de otimização de ativos gráficos para erradicação de Out-of-Memory em dispositivos Android e automação E2E determinística em dispositivos físicos.',
    githubUrl: 'https://github.com/VitorJacom/estudify',
  },
  {
    id: 'globo-aplausos',
    title: 'Globo Aplausos',
    tagline: 'Plataforma corporativa de gamificação e reconhecimento mútuo desenvolvida em parceria com a Globo™.',
    category: 'enterprise',
    metrics: [
      'Desenvolvido em parceria institucional de inovação com a Globo™ na AGES (2023)',
      'Automação de rotinas e eventos corporativos utilizando MySQL Event Triggers',
      'Estabilidade de fluxos críticos garantida por suítes automatizadas com Jest e Cypress (E2E)',
    ],
    techStack: ['React', 'Next.js', 'TypeScript', 'NestJS', 'Prisma ORM', 'MySQL', 'Jest', 'Cypress'],
    architectureHighlights:
      'Plataforma corporativa de gamificação full-stack utilizando React, Next.js e TypeScript no front-end, NestJS com Prisma ORM e MySQL (Event Triggers) no back-end, e bateria de testes unitários e E2E com Jest e Cypress.',
    githubUrl: 'https://github.com/VitorJacom/globo-aplausos',
  },
  {
    id: 'meditamamente',
    title: 'MeditAmamente',
    tagline: 'Plataforma de pesquisa clínica e acolhimento materno laureada com o prêmio Destaque Acadêmico PUCRS.',
    category: 'enterprise',
    metrics: [
      'Conquistou a honraria máxima de Projeto Destaque Acadêmico PUCRS (2024)',
      'Arquitetura do back-end estruturada em 4 camadas do Domain-Driven Design (DDD)',
      'Persistência relacional com Spring Data JPA/Hibernate e PostgreSQL',
    ],
    techStack: ['Java', 'Spring Boot', 'Spring Data JPA', 'Hibernate', 'PostgreSQL', 'DDD', 'Clean Architecture'],
    architectureHighlights:
      'Liderança da arquitetura back-end em Java e Spring Boot estruturada em 4 camadas do Domain-Driven Design (Domain, Application, Infrastructure, Interfaces) com Spring Data JPA/Hibernate e PostgreSQL.',
    githubUrl: 'https://github.com/VitorJacom/meditamamente',
  },
  {
    id: 'lucky-draw',
    title: 'Lucky Draw',
    tagline: 'Aplicação gamificada com arquitetura serverless cloud-native na AWS e CI/CD automatizado.',
    category: 'mobile',
    metrics: [
      'Back-end cloud-native em Java 17 (Spring Boot) sobre AWS Lambda, Aurora PostgreSQL e Amazon S3',
      'Autenticação stateless (Spring Security + JWT), análise estática (Checkstyle) e testes (JUnit 5/Mockito)',
      'Deploy automatizado de containers Docker no AWS ECR via pipelines GitLab CI/CD',
    ],
    techStack: [
      'Java 17',
      'Spring Boot',
      'Spring Security',
      'JWT',
      'AWS Lambda',
      'Aurora PostgreSQL',
      'Amazon S3',
      'AWS ECR',
      'Docker',
      'GitLab CI/CD',
      'JUnit 5',
      'Mockito',
    ],
    architectureHighlights:
      'API serverless cloud-native projetada para scale-to-zero na AWS (Lambda, Aurora PostgreSQL e S3), autenticação stateless JWT com Spring Security, gate de qualidade Checkstyle e entrega contínua no AWS ECR via GitLab CI/CD.',
    githubUrl: 'https://github.com/VitorJacom/lucky-draw',
  },
];
