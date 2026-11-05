import type { ProjectItem } from '../types/portfolio';

export const projects: ProjectItem[] = [
  {
    id: 'chora-rival',
    title: 'Chora Rival',
    tagline: 'Plataforma SaaS Multi-Tenant de geração multimodal em ambiente produtivo real.',
    category: 'saas',
    metrics: [
      'Scale-to-zero no GCP Cloud Run com zero custo de infraestrutura ociosa',
      'Processamento reativo concorrente com Virtual Threads no Java 21',
      'Validação criptográfica HMAC SHA-256 em webhooks de pagamento PIX',
    ],
    techStack: ['Java 21', 'Spring Boot 3.3', 'React 19', 'Tailwind CSS', 'GCP Cloud Run', 'PostgreSQL'],
    architectureHighlights:
      'Backend reativo com Virtual Threads e Spring Boot 3.3, checkout transparente com Mercado Pago garantindo idempotência e resiliência a picos de tráfego.',
    liveUrl: 'https://chorarival.com.br',
  },
  {
    id: 'my-agents',
    title: 'my-agents',
    tagline: 'Framework de orquestração determinística e governança para agentes autônomos de IA.',
    category: 'cloud',
    metrics: [
      'Máquina de estados finita determinística com 4 papéis especializados',
      'Trava de integridade Test Tamper Guard eliminando mutações fraudulentas',
      'Compatibilidade universal com ferramentas de LLM e Antigravity CLI',
    ],
    techStack: ['TypeScript', 'Node.js', 'Antigravity CLI', 'Bash', 'GitHub Actions'],
    architectureHighlights:
      'Pipeline AIDD desacoplado com transições de estado estritas (Planner, QA, Coder, Gatekeeper), semáforo de execução única e auditoria contínua.',
    githubUrl: 'https://github.com/VitorJacom/my-agents',
  },
  {
    id: 'estudify',
    title: 'Estudify',
    tagline: 'Plataforma mobile de gestão de estudos e cronogramas acadêmicos dinâmicos desenvolvida na AGES.',
    category: 'mobile',
    metrics: [
      'Liderança técnica de 18 desenvolvedores organizados em 4 squads ágeis',
      'Redução de -98% no consumo de memória gráfica em dispositivos móveis',
      'Suíte determinística de testes E2E com Maestro e esteira contínua de CI/CD',
    ],
    techStack: ['React Native', 'TypeScript', 'Java', 'Spring Boot', 'PostgreSQL', 'Docker', 'Maestro'],
    architectureHighlights:
      'Arquitetura mobile reativa com algoritmo dinâmico de redistribuição de horas de estudo e pipeline de cache otimizado para alta performance.',
    githubUrl: 'https://github.com/VitorJacom/estudify',
  },
  {
    id: 'globo-aplausos',
    title: 'Globo Aplausos',
    tagline: 'Painel corporativo de engajamento e reconhecimento mútuo entre colaboradores em parceria com a Globo.',
    category: 'enterprise',
    metrics: [
      'Desenvolvido em parceria institucional de inovação com a Globo na AGES',
      'Processamento atômico e concorrente de contagem de aplausos em tempo real',
      'Design modular baseado em Clean Architecture desacoplando regras corporativas',
    ],
    techStack: ['Java', 'Spring Boot', 'React', 'TypeScript', 'PostgreSQL', 'Docker', 'Tailwind CSS'],
    architectureHighlights:
      'Painel corporativo de reconhecimento entre pares com feedback reativo imediato, contador concorrente thread-safe e arquitetura escalável para grandes equipes.',
    githubUrl: 'https://github.com/VitorJacom/globo-aplausos',
  },
  {
    id: 'meditamamente',
    title: 'MeditAmamente',
    tagline: 'Plataforma de pesquisa clínica e acolhimento materno desenvolvida na PUCRS.',
    category: 'enterprise',
    metrics: [
      'Reconhecido como Destaque Acadêmico PUCRS 2024',
      'Arquitetura em 4 camadas estruturada sob princípios de DDD',
      'Conformidade com segurança de dados de pesquisa e LGPD',
    ],
    techStack: ['Java', 'Spring Boot', 'PostgreSQL', 'Spring Data JPA', 'JWT', 'OpenAPI'],
    architectureHighlights:
      'Arquitetura de microsserviço monolítico modularizado em 4 camadas (Domain, Application, Infrastructure, Interfaces) com autenticação JWT e documentação OpenAPI.',
    githubUrl: 'https://github.com/VitorJacom/meditamamente',
  },
  {
    id: 'lucky-draw',
    title: 'Lucky Draw',
    tagline: 'Aplicação móvel gamificada para facilitação ágil e desbloqueio criativo com cartas de tarô.',
    category: 'mobile',
    metrics: [
      'Backend serverless cloud-native executado sobre AWS Lambda e Amazon S3',
      'Pipeline de entrega contínua com GitLab CI/CD e conteinerização Docker',
      'Cobertura de testes automatizados com JUnit 5 e Mockito',
    ],
    techStack: ['Java 17', 'Spring Boot 3.4', 'AWS Lambda', 'Amazon S3', 'PostgreSQL', 'Docker'],
    architectureHighlights:
      'API serverless cloud-native desenhada para scale-to-zero na AWS, autenticação stateless JWT com Spring Security e testes de integração determinísticos.',
    githubUrl: 'https://github.com/VitorJacom/lucky-draw',
  },
];
