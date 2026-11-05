import { describe, it, expect } from 'vitest';
import {
  experiences,
  skillCategories,
  projects,
  certifications,
} from '../../src/data';
import { experiences as experiencesDirect } from '../../src/data/experience';
import { skillCategories as skillsDirect } from '../../src/data/skills';
import { projects as projectsDirect } from '../../src/data/projects';
import { certifications as certificationsDirect } from '../../src/data/certifications';

describe('Canonical Data Contracts (Acceptance Tests)', () => {
  describe('Barrel Export Integrity (site/src/data/index.ts)', () => {
    it('should export all datasets from the centralized barrel file', () => {
      expect(experiences).toBeDefined();
      expect(skillCategories).toBeDefined();
      expect(projects).toBeDefined();
      expect(certifications).toBeDefined();

      expect(experiences).toBe(experiencesDirect);
      expect(skillCategories).toBe(skillsDirect);
      expect(projects).toBe(projectsDirect);
      expect(certifications).toBe(certificationsDirect);
    });
  });

  describe('Experience Dataset (site/src/data/experience.ts)', () => {
    it('happy case: should contain at least 3 career entries with all required fields', () => {
      expect(Array.isArray(experiences)).toBe(true);
      expect(experiences.length).toBeGreaterThanOrEqual(3);

      for (const exp of experiences) {
        expect(exp.id).toBeDefined();
        expect(typeof exp.id).toBe('string');
        expect(exp.id.trim().length).toBeGreaterThan(0);

        expect(exp.role).toBeDefined();
        expect(typeof exp.role).toBe('string');
        expect(exp.role.trim().length).toBeGreaterThan(0);

        expect(exp.company).toBeDefined();
        expect(typeof exp.company).toBe('string');
        expect(exp.company.trim().length).toBeGreaterThan(0);

        expect(exp.period).toBeDefined();
        expect(typeof exp.period).toBe('string');
        expect(exp.period.trim().length).toBeGreaterThan(0);

        expect(exp.location).toBeDefined();
        expect(typeof exp.location).toBe('string');
        expect(exp.location.trim().length).toBeGreaterThan(0);

        expect(Array.isArray(exp.highlights)).toBe(true);
        expect(exp.highlights.length).toBeGreaterThan(0);
        for (const highlight of exp.highlights) {
          expect(typeof highlight).toBe('string');
          expect(highlight.trim().length).toBeGreaterThan(0);
        }

        expect(Array.isArray(exp.skills)).toBe(true);
        expect(exp.skills.length).toBeGreaterThan(0);
        for (const skill of exp.skills) {
          expect(typeof skill).toBe('string');
          expect(skill.trim().length).toBeGreaterThan(0);
        }
      }
    });

    it('edge case: should have strictly unique IDs across all experiences', () => {
      const ids = experiences.map((exp) => exp.id);
      const uniqueIds = new Set(ids);
      expect(uniqueIds.size).toBe(ids.length);
    });

    it('edge case: should not contain empty or whitespace-only values in any text property', () => {
      for (const exp of experiences) {
        expect(exp.id).toBe(exp.id.trim());
        expect(exp.role.trim().length).toBeGreaterThan(0);
        expect(exp.company.trim().length).toBeGreaterThan(0);
        expect(exp.period.trim().length).toBeGreaterThan(0);
        expect(exp.location.trim().length).toBeGreaterThan(0);
        expect(exp.highlights.every((h) => h.trim().length > 0)).toBe(true);
        expect(exp.skills.every((s) => s.trim().length > 0)).toBe(true);
      }
    });
  });

  describe('Skills Dataset (site/src/data/skills.ts)', () => {
    const validLevels = ['advanced', 'proficient', 'familiar'] as const;

    it('happy case: should contain the 4 canonical categories with items and valid levels', () => {
      expect(Array.isArray(skillCategories)).toBe(true);
      expect(skillCategories.length).toBe(4);

      for (const categoryGroup of skillCategories) {
        expect(typeof categoryGroup.category).toBe('string');
        expect(categoryGroup.category.trim().length).toBeGreaterThan(0);

        expect(Array.isArray(categoryGroup.skills)).toBe(true);
        expect(categoryGroup.skills.length).toBeGreaterThan(0);

        for (const skill of categoryGroup.skills) {
          expect(typeof skill.name).toBe('string');
          expect(skill.name.trim().length).toBeGreaterThan(0);
          expect(validLevels).toContain(skill.level);

          if (skill.icon !== undefined) {
            expect(typeof skill.icon).toBe('string');
            expect(skill.icon.trim().length).toBeGreaterThan(0);
          }
        }
      }
    });

    it('edge case: should reject invalid skill levels outside the canonical union', () => {
      for (const categoryGroup of skillCategories) {
        for (const skill of categoryGroup.skills) {
          expect(['advanced', 'proficient', 'familiar']).toContain(skill.level);
          expect(['expert', 'beginner', 'intermediate']).not.toContain(skill.level);
        }
      }
    });

    it('edge case: should not have duplicate skill names within the same category', () => {
      for (const categoryGroup of skillCategories) {
        const skillNames = categoryGroup.skills.map((s) => s.name.toLowerCase());
        const uniqueNames = new Set(skillNames);
        expect(uniqueNames.size).toBe(skillNames.length);
      }
    });
  });

  describe('Projects Dataset (site/src/data/projects.ts)', () => {
    const validCategories = ['saas', 'cloud', 'mobile', 'enterprise'] as const;

    it('happy case: should contain the 4 flagship projects with all required metadata', () => {
      expect(Array.isArray(projects)).toBe(true);
      expect(projects.length).toBeGreaterThanOrEqual(4);

      for (const project of projects) {
        expect(typeof project.id).toBe('string');
        expect(project.id.trim().length).toBeGreaterThan(0);

        expect(typeof project.title).toBe('string');
        expect(project.title.trim().length).toBeGreaterThan(0);

        expect(typeof project.tagline).toBe('string');
        expect(project.tagline.trim().length).toBeGreaterThan(0);

        expect(validCategories).toContain(project.category);

        expect(Array.isArray(project.metrics)).toBe(true);
        expect(project.metrics.length).toBeGreaterThan(0);
        for (const metric of project.metrics) {
          expect(typeof metric).toBe('string');
          expect(metric.trim().length).toBeGreaterThan(0);
        }

        expect(Array.isArray(project.techStack)).toBe(true);
        expect(project.techStack.length).toBeGreaterThan(0);
        for (const tech of project.techStack) {
          expect(typeof tech).toBe('string');
          expect(tech.trim().length).toBeGreaterThan(0);
        }

        expect(typeof project.architectureHighlights).toBe('string');
        expect(project.architectureHighlights.trim().length).toBeGreaterThan(0);
      }
    });

    it('edge case: should have strictly unique IDs across all projects', () => {
      const ids = projects.map((p) => p.id);
      const uniqueIds = new Set(ids);
      expect(uniqueIds.size).toBe(ids.length);
    });

    it('edge case: should contain valid URLs for githubUrl and liveUrl when defined', () => {
      for (const project of projects) {
        if (project.githubUrl) {
          expect(() => new URL(project.githubUrl!)).not.toThrow();
          const parsed = new URL(project.githubUrl);
          expect(['http:', 'https:']).toContain(parsed.protocol);
        }
        if (project.liveUrl) {
          expect(() => new URL(project.liveUrl!)).not.toThrow();
          const parsed = new URL(project.liveUrl);
          expect(['http:', 'https:']).toContain(parsed.protocol);
        }
      }
    });

    it('edge case: should reject project categories outside the canonical union', () => {
      for (const project of projects) {
        expect(['saas', 'cloud', 'mobile', 'enterprise']).toContain(project.category);
        expect(['web', 'desktop', 'game']).not.toContain(project.category);
      }
    });
  });

  describe('Certifications Dataset (site/src/data/certifications.ts)', () => {
    it('happy case: should contain GitHub Foundations certification with valid metadata', () => {
      expect(Array.isArray(certifications)).toBe(true);
      expect(certifications.length).toBeGreaterThanOrEqual(1);

      const ghCert = certifications.find((c) => c.code.includes('GH-900') || c.name.includes('GitHub Foundations'));
      expect(ghCert).toBeDefined();
      expect(ghCert!.issuer).toBe('GitHub');
      expect(ghCert!.year).toBeGreaterThanOrEqual(2024);
      expect(typeof ghCert!.verificationUrl).toBe('string');
    });

    it('edge case: should validate that all certification URLs are valid and secure https', () => {
      for (const cert of certifications) {
        expect(cert.name.trim().length).toBeGreaterThan(0);
        expect(cert.code.trim().length).toBeGreaterThan(0);
        expect(cert.issuer.trim().length).toBeGreaterThan(0);
        expect(cert.year).toBeGreaterThan(2000);

        expect(cert.verificationUrl.startsWith('https://')).toBe(true);
        expect(() => new URL(cert.verificationUrl)).not.toThrow();
        const parsed = new URL(cert.verificationUrl);
        expect(parsed.protocol).toBe('https:');
      }
    });
  });
});
