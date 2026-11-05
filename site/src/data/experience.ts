import type { ExperienceItem } from '../types/portfolio';

export const experiences: ExperienceItem[] = [
  {
    id: 'ages-estudify',
    role: 'Líder Técnico & Engenheiro de Software Full-Stack',
    company: 'AGES / PUCRS',
    period: '2024 - Presente',
    location: 'Porto Alegre, RS',
    highlights: [
      'Liderança técnica de 18 desenvolvedores organizados em 4 squads ágeis.',
      'Arquitetura de cache e renderização com redução de -98% no consumo de memória gráfica em mobile.',
      'Implementação de suíte determinística de testes E2E com Maestro e pipelines de CI/CD.',
    ],
    skills: ['Java', 'Spring Boot', 'React Native', 'TypeScript', 'Maestro', 'Docker', 'CI/CD'],
  },
  {
    id: 'tecnova-energia',
    role: 'Engenheiro de Software & Cloud',
    company: 'Tecnova Energia',
    period: '2023 - 2024',
    location: 'Porto Alegre, RS',
    highlights: [
      'Projetou e implementou automações serverless no GCP Cloud Run com arquitetura scale-to-zero.',
      'Eliminou a migração manual de +25k registros para dashboards analíticos no Power BI.',
      'Otimizou pipelines de dados e integrações com zero custo contínuo de infraestrutura ociosa.',
    ],
    skills: ['GCP Cloud Run', 'Python', 'PostgreSQL', 'Docker', 'Power BI', 'Serverless'],
  },
  {
    id: 'monitoria-pucrs',
    role: 'Monitor Acadêmico de POO & Instrutor Docker',
    company: 'PUCRS',
    period: '2023 - 2024',
    location: 'Porto Alegre, RS',
    highlights: [
      'Monitor acadêmico de Programação Orientada a Objetos com Java 21.',
      'Instrutor de workshops técnicos de conteinerização com Docker e Docker Compose.',
      'Orientação individual em arquitetura limpa, princípios SOLID e depuração de código.',
    ],
    skills: ['Java', 'POO', 'Docker', 'Clean Architecture', 'SOLID', 'Mentoria'],
  },
];
