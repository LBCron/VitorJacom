import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const REPO_ROOT = process.cwd();
const SITE_DIR = path.join(REPO_ROOT, 'site');
const PACKAGE_JSON_PATH = path.join(SITE_DIR, 'package.json');
const VITE_CONFIG_PATH = path.join(SITE_DIR, 'vite.config.ts');
const TSCONFIG_PATH = path.join(SITE_DIR, 'tsconfig.json');
const TAILWIND_CONFIG_PATH = path.join(SITE_DIR, 'tailwind.config.ts');
const POSTCSS_CONFIG_PATH = path.join(SITE_DIR, 'postcss.config.js');
const INDEX_HTML_PATH = path.join(SITE_DIR, 'index.html');
const MAIN_TSX_PATH = path.join(SITE_DIR, 'src', 'main.tsx');
const APP_TSX_PATH = path.join(SITE_DIR, 'src', 'App.tsx');
const APP_TEST_PATH = path.join(SITE_DIR, 'tests', 'features', 'app.test.tsx');
const CI_WORKFLOW_PATH = path.join(REPO_ROOT, '.github', 'workflows', 'ci-site.yml');

describe('Site Foundation & Tooling Scaffold Suite (Issue #2)', () => {
  describe('Package Manifest: site/package.json', () => {
    it('should exist physically in site/ directory', () => {
      assert.ok(
        fs.existsSync(PACKAGE_JSON_PATH),
        `Expected file to exist at ${PACKAGE_JSON_PATH}, but it was not found.`
      );
    });

    it('should define required scripts: dev, build, test', () => {
      assert.ok(
        fs.existsSync(PACKAGE_JSON_PATH),
        `Cannot verify scripts: site/package.json does not exist.`
      );
      const pkg = JSON.parse(fs.readFileSync(PACKAGE_JSON_PATH, 'utf-8'));
      assert.ok(pkg.scripts, 'site/package.json must contain a "scripts" section');
      assert.ok(pkg.scripts.dev, 'site/package.json must contain "dev" script');
      assert.ok(pkg.scripts.build, 'site/package.json must contain "build" script');
      assert.ok(pkg.scripts.test, 'site/package.json must contain "test" script');
    });

    it('should declare required dependencies (React 19, Tailwind CSS, Lucide)', () => {
      assert.ok(
        fs.existsSync(PACKAGE_JSON_PATH),
        `Cannot verify dependencies: site/package.json does not exist.`
      );
      const pkg = JSON.parse(fs.readFileSync(PACKAGE_JSON_PATH, 'utf-8'));
      const allDeps = { ...pkg.dependencies, ...pkg.devDependencies };

      const requiredDeps = ['react', 'react-dom'];
      for (const dep of requiredDeps) {
        assert.ok(
          allDeps[dep],
          `site/package.json missing required dependency: ${dep}`
        );
      }
    });

    it('should declare required devDependencies (Vite, Vitest, Testing Library, jsdom)', () => {
      assert.ok(
        fs.existsSync(PACKAGE_JSON_PATH),
        `Cannot verify devDependencies: site/package.json does not exist.`
      );
      const pkg = JSON.parse(fs.readFileSync(PACKAGE_JSON_PATH, 'utf-8'));
      const allDeps = { ...pkg.dependencies, ...pkg.devDependencies };

      const requiredDevDeps = [
        'vite',
        'vitest',
        '@testing-library/react',
        'jsdom',
        'typescript',
      ];
      for (const dep of requiredDevDeps) {
        assert.ok(
          allDeps[dep],
          `site/package.json missing required devDependency: ${dep}`
        );
      }
    });
  });

  describe('Tooling Configuration Files', () => {
    it('should have site/vite.config.ts with Vitest and React configuration', () => {
      assert.ok(
        fs.existsSync(VITE_CONFIG_PATH),
        `Expected Vite configuration file at ${VITE_CONFIG_PATH}`
      );
      const content = fs.readFileSync(VITE_CONFIG_PATH, 'utf-8');
      assert.match(
        content,
        /react/i,
        'vite.config.ts should import and use React plugin'
      );
    });

    it('should have site/tsconfig.json with strict TypeScript configuration', () => {
      assert.ok(
        fs.existsSync(TSCONFIG_PATH),
        `Expected TypeScript configuration file at ${TSCONFIG_PATH}`
      );
    });

    it('should have Tailwind CSS configuration (tailwind.config.ts or postcss.config.js)', () => {
      const hasTailwindConfig =
        fs.existsSync(TAILWIND_CONFIG_PATH) ||
        fs.existsSync(path.join(SITE_DIR, 'tailwind.config.js')) ||
        fs.existsSync(POSTCSS_CONFIG_PATH);

      assert.ok(
        hasTailwindConfig,
        `Expected Tailwind/PostCSS configuration file in ${SITE_DIR}`
      );
    });
  });

  describe('SPA Entrypoints & Components', () => {
    it('should have site/index.html with HTML5 semantic doctype and title', () => {
      assert.ok(
        fs.existsSync(INDEX_HTML_PATH),
        `Expected HTML entrypoint at ${INDEX_HTML_PATH}`
      );
      const content = fs.readFileSync(INDEX_HTML_PATH, 'utf-8');
      assert.match(content, /<!doctype\s+html>/i, 'index.html must have HTML5 doctype');
      assert.match(content, /id=["']root["']/, 'index.html must contain root mounting element');
    });

    it('should have site/src/main.tsx as React entrypoint', () => {
      assert.ok(
        fs.existsSync(MAIN_TSX_PATH),
        `Expected React entrypoint at ${MAIN_TSX_PATH}`
      );
    });

    it('should have site/src/App.tsx with Vítor Jacom identity', () => {
      assert.ok(
        fs.existsSync(APP_TSX_PATH),
        `Expected App component at ${APP_TSX_PATH}`
      );
      const content = fs.readFileSync(APP_TSX_PATH, 'utf-8');
      assert.match(
        content,
        /Vítor\s+Jacom/i,
        'App.tsx should display the professional identity "Vítor Jacom"'
      );
    });

    it('should have acceptance test site/tests/features/app.test.tsx', () => {
      assert.ok(
        fs.existsSync(APP_TEST_PATH),
        `Expected acceptance test at ${APP_TEST_PATH}`
      );
    });
  });

  describe('Continuous Integration: .github/workflows/ci-site.yml', () => {
    it('should exist physically in .github/workflows/ directory', () => {
      assert.ok(
        fs.existsSync(CI_WORKFLOW_PATH),
        `Expected CI workflow at ${CI_WORKFLOW_PATH}`
      );
    });

    it('should configure build and test jobs for site', () => {
      assert.ok(
        fs.existsSync(CI_WORKFLOW_PATH),
        `Cannot verify workflow: file does not exist at ${CI_WORKFLOW_PATH}`
      );
      const content = fs.readFileSync(CI_WORKFLOW_PATH, 'utf-8');
      assert.match(content, /actions\/checkout/i, 'Workflow should checkout code');
      assert.match(content, /npm\s+(ci|install)/i, 'Workflow should install dependencies');
      assert.match(content, /npm\s+test/i, 'Workflow should run npm test');
      assert.match(content, /npm\s+run\s+build/i, 'Workflow should run npm run build');
    });
  });
});
