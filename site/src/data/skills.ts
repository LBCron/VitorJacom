import type { SkillCategory } from '../types/portfolio';

export const skillCategories: SkillCategory[] = [
  {
    category: 'Back-end & Arquitetura',
    skills: [
      { name: 'Java 21 (Virtual Threads)', level: 'advanced' },
      { name: 'Spring Boot 3.3', level: 'advanced' },
      { name: 'PostgreSQL', level: 'advanced' },
      { name: 'Domain-Driven Design (DDD)', level: 'advanced' },
      { name: 'Clean Architecture', level: 'advanced' },
      { name: 'Microsserviços Resilientes', level: 'advanced' },
      { name: 'Redis', level: 'proficient' },
      { name: 'NestJS', level: 'proficient' },
      { name: 'Python', level: 'proficient' },
      { name: 'Event-Driven Architecture', level: 'proficient' },
    ],
  },
  {
    category: 'Front-end & Mobile',
    skills: [
      { name: 'React 19', level: 'advanced' },
      { name: 'TypeScript 5', level: 'advanced' },
      { name: 'Tailwind CSS', level: 'advanced' },
      { name: 'Vite', level: 'advanced' },
      { name: 'React Native', level: 'proficient' },
      { name: 'TanStack Query', level: 'proficient' },
      { name: 'Next.js', level: 'proficient' },
      { name: 'Expo', level: 'proficient' },
      { name: 'Maestro (E2E)', level: 'proficient' },
      { name: 'Zustand', level: 'familiar' },
    ],
  },
  {
    category: 'Cloud & DevOps',
    skills: [
      { name: 'Docker', level: 'advanced' },
      { name: 'GCP Cloud Run', level: 'proficient' },
      { name: 'GitHub Actions', level: 'proficient' },
      { name: 'Linux', level: 'proficient' },
      { name: 'AWS (Lambda, S3)', level: 'proficient' },
      { name: 'OpenTelemetry', level: 'familiar' },
      { name: 'Terraform', level: 'familiar' },
      { name: 'Grafana & Prometheus', level: 'familiar' },
    ],
  },
  {
    category: 'IA & Qualidade',
    skills: [
      { name: 'AIDD Framework', level: 'advanced' },
      { name: 'TDD (Vitest / RTL / JUnit 5)', level: 'advanced' },
      { name: 'Model Context Protocol (MCP)', level: 'proficient' },
      { name: 'Orquestração Multiagente', level: 'proficient' },
      { name: 'Test Tamper Guard', level: 'proficient' },
      { name: 'Prompt Engineering & Grounding', level: 'proficient' },
    ],
  },
];
