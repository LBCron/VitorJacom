import type { SkillCategory } from '../types/portfolio';

export const skillCategories: SkillCategory[] = [
  {
    category: 'Back-end, Arquitetura & Dados',
    skills: [
      { name: 'Java (11/17/21 & Virtual Threads)', level: 'advanced' },
      { name: 'Spring Boot 3.3 & Spring Security', level: 'advanced' },
      { name: 'NestJS & Node.js', level: 'advanced' },
      { name: 'PostgreSQL 16 & Flyway', level: 'advanced' },
      { name: 'Domain-Driven Design (DDD) & Clean Architecture', level: 'advanced' },
      { name: 'Vertical Slice Architecture (VSA)', level: 'advanced' },
      { name: 'Contract-First (OpenAPI 3.0) & RFC 7807', level: 'advanced' },
      { name: 'SaaS Multi-Tenant & Idempotência (HMAC SHA-256)', level: 'advanced' },
      { name: 'Spring Data JPA / Hibernate & Prisma ORM', level: 'advanced' },
      { name: 'Python', level: 'proficient' },
      { name: 'MySQL, SQLite (WAL) & Redis', level: 'proficient' },
      { name: 'Kotlin', level: 'familiar' },
    ],
  },
  {
    category: 'Front-end & Mobile',
    skills: [
      { name: 'React 19', level: 'advanced' },
      { name: 'TypeScript 5 (Strict Mode)', level: 'advanced' },
      { name: 'Next.js', level: 'advanced' },
      { name: 'Vite & Tailwind CSS', level: 'advanced' },
      { name: 'TanStack Query v5 & Zustand', level: 'advanced' },
      { name: 'Zod & Storybook 8 (SDD)', level: 'advanced' },
      { name: 'React Native', level: 'proficient' },
      { name: 'Biome', level: 'proficient' },
    ],
  },
  {
    category: 'Cloud, IaC & DevOps',
    skills: [
      { name: 'GCP (Cloud Run, Cloud SQL, Cloud Storage, Cloud Trace)', level: 'advanced' },
      { name: 'Terraform (IaC)', level: 'advanced' },
      { name: 'Docker (Multi-stage)', level: 'advanced' },
      { name: 'CI/CD (GitHub Actions & GitLab CI)', level: 'advanced' },
      { name: 'AWS (Lambda, Aurora, S3, ECR)', level: 'proficient' },
      { name: 'Cloudflare Pages', level: 'proficient' },
      { name: 'Linux', level: 'proficient' },
    ],
  },
  {
    category: 'Qualidade, Observabilidade & IA Agêntica',
    skills: [
      { name: 'TDD Estrito (JUnit 5, Mockito, Testcontainers)', level: 'advanced' },
      { name: 'Vitest, React Testing Library & MSW', level: 'advanced' },
      { name: 'OpenTelemetry, Jaeger & MDC (Virtual Threads)', level: 'advanced' },
      { name: 'Orquestração Determinística de Agentes (CLI/TUI React Ink)', level: 'advanced' },
      { name: 'Git Worktree Sandboxing & Test Tamper Guard', level: 'advanced' },
      { name: 'Contract Drift Detection (SHA-256) & Análise Anti-Slop', level: 'advanced' },
      { name: 'LLM FinOps & Model Context Protocol (MCP)', level: 'proficient' },
      { name: 'Cypress & Maestro (Mobile E2E)', level: 'proficient' },
    ],
  },
];
