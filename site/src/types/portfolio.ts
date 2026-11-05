export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  highlights: string[];
  skills: string[];
}

export type SkillLevel = 'advanced' | 'proficient' | 'familiar';

export interface SkillItem {
  name: string;
  level: SkillLevel;
  icon?: string;
}

export interface SkillCategory {
  id?: string;
  title?: string;
  category: string;
  skills: SkillItem[];
}

export type ProjectCategory = 'saas' | 'cloud' | 'mobile' | 'enterprise';

export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  category: ProjectCategory;
  metrics: string[];
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  architectureHighlights: string;
}

export interface CertificationItem {
  code: string;
  name: string;
  issuer: string;
  year: number;
  verificationUrl: string;
}
