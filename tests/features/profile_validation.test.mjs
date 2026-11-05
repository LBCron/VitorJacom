import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const REPO_ROOT = process.cwd();
const WEBP_PATH = path.join(REPO_ROOT, 'site', 'public', 'vitor.webp');
const README_PATH = path.join(REPO_ROOT, 'README.md');

describe('Profile and Static Assets Validation Suite', () => {
  describe('Static Asset: site/public/vitor.webp', () => {
    it('should exist physically in site/public/ directory', () => {
      assert.ok(
        fs.existsSync(WEBP_PATH),
        `Expected file to exist at ${WEBP_PATH}, but it was not found.`
      );
    });

    it('should have an optimized file size between 5KB and 150KB (153,600 bytes)', () => {
      assert.ok(
        fs.existsSync(WEBP_PATH),
        `Cannot verify size: file does not exist at ${WEBP_PATH}`
      );
      const stats = fs.statSync(WEBP_PATH);
      const minSize = 5 * 1024; // 5KB
      const maxSize = 150 * 1024; // 150KB (153,600 bytes)

      assert.ok(
        stats.size >= minSize,
        `Expected file size to be >= ${minSize} bytes (5KB), got ${stats.size} bytes`
      );
      assert.ok(
        stats.size <= maxSize,
        `Expected file size to be <= ${maxSize} bytes (150KB), got ${stats.size} bytes`
      );
    });
  });

  describe('Executive GitHub Profile: README.md', () => {
    let readmeContent = '';

    it('should load README.md successfully', () => {
      assert.ok(
        fs.existsSync(README_PATH),
        `README.md not found at ${README_PATH}`
      );
      readmeContent = fs.readFileSync(README_PATH, 'utf-8');
      assert.ok(readmeContent.length > 0, 'README.md is empty');
    });

    it('should contain the executive positioning headline', () => {
      const expectedHeadline =
        'Engenheiro de Software Full-Stack | Especialista em Microsserviços Java, React 19 e Governança de IA';
      assert.ok(
        readmeContent.includes(expectedHeadline),
        `README.md must contain the positioning headline: "${expectedHeadline}"`
      );
    });

    it('should reference the circular avatar image targeting site/public/vitor.webp', () => {
      assert.ok(
        readmeContent.includes('site/public/vitor.webp'),
        'README.md must reference the optimized avatar image at "site/public/vitor.webp"'
      );
    });

    it('should contain all required executive contact and social links', () => {
      const requiredLinks = [
        'linkedin.com/in/vitorjacom',
        'github.com/VitorJacom',
        'vjds.vitor@gmail.com',
        'chorarival.com.br'
      ];

      for (const link of requiredLinks) {
        assert.ok(
          readmeContent.includes(link),
          `README.md must contain the required link: "${link}"`
        );
      }
    });

    it('should highlight the 4 strategic flagship projects', () => {
      const strategicProjects = [
        'Chora Rival',
        'my-agents',
        'MeditAmamente',
        'Lucky Draw'
      ];

      for (const project of strategicProjects) {
        assert.ok(
          readmeContent.includes(project),
          `README.md must highlight the strategic project: "${project}"`
        );
      }
    });

    it('should include quantified impact metrics in career history (Estudify & Tecnova)', () => {
      // Estudify metrics: 18 devs, 4 squads, -98%
      assert.match(
        readmeContent,
        /18\s+devs/i,
        'README.md must mention impact metric: 18 devs'
      );
      assert.match(
        readmeContent,
        /4\s+squads/i,
        'README.md must mention impact metric: 4 squads'
      );
      assert.match(
        readmeContent,
        /-98%/i,
        'README.md must mention memory reduction metric: -98%'
      );

      // Tecnova metrics: +25k registros, custo zero
      assert.match(
        readmeContent,
        /\+?25k\s+registros/i,
        'README.md must mention metric: +25k registros'
      );
      assert.match(
        readmeContent,
        /custo\s+zero/i,
        'README.md must mention metric: custo zero'
      );
    });

    it('should not contain empty markdown links like [text]()', () => {
      const emptyLinkPattern = /\[[^\]]+\]\(\s*\)/g;
      const emptyLinks = readmeContent.match(emptyLinkPattern);
      assert.strictEqual(
        emptyLinks,
        null,
        `Found broken empty Markdown links in README.md: ${JSON.stringify(emptyLinks)}`
      );
    });
  });
});
