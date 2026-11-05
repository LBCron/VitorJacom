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
  describe('🟢 Happy Cases (Estrutura Canônica, Entrypoints e Tooling Base)', () => {
    it('deve existir fisicamente o manifesto site/package.json com scripts dev, build e test', () => {
      assert.ok(fs.existsSync(PACKAGE_JSON_PATH), `site/package.json deve existir em ${PACKAGE_JSON_PATH}`);
      const pkg = JSON.parse(fs.readFileSync(PACKAGE_JSON_PATH, 'utf-8'));
      assert.ok(pkg.scripts?.dev, 'site/package.json deve conter script "dev"');
      assert.ok(pkg.scripts?.build, 'site/package.json deve conter script "build"');
      assert.ok(pkg.scripts?.test, 'site/package.json deve conter script "test"');
    });

    it('deve declarar as dependências fundamentais de runtime (React 19, Lucide)', () => {
      const pkg = JSON.parse(fs.readFileSync(PACKAGE_JSON_PATH, 'utf-8'));
      const deps = pkg.dependencies || {};
      assert.ok(deps['react'], 'Deve conter dependência "react"');
      assert.ok(deps['react-dom'], 'Deve conter dependência "react-dom"');
      assert.ok(deps['lucide-react'], 'Deve conter dependência "lucide-react"');
    });

    it('deve possuir os entrypoints da SPA: index.html, main.tsx e App.tsx com identidade Vítor Jacom', () => {
      assert.ok(fs.existsSync(INDEX_HTML_PATH), `index.html não encontrado em ${INDEX_HTML_PATH}`);
      assert.ok(fs.existsSync(MAIN_TSX_PATH), `main.tsx não encontrado em ${MAIN_TSX_PATH}`);
      assert.ok(fs.existsSync(APP_TSX_PATH), `App.tsx não encontrado em ${APP_TSX_PATH}`);

      const html = fs.readFileSync(INDEX_HTML_PATH, 'utf-8');
      assert.match(html, /<!doctype\s+html>/i, 'index.html deve conter DOCTYPE HTML5');
      assert.match(html, /id=["']root["']/, 'index.html deve conter container com id root');

      const appCode = fs.readFileSync(APP_TSX_PATH, 'utf-8');
      assert.match(appCode, /Vítor\s+Jacom/i, 'App.tsx deve renderizar o nome Vítor Jacom');
    });

    it('deve possuir o arquivo de testes de aceitação site/tests/features/app.test.tsx', () => {
      assert.ok(fs.existsSync(APP_TEST_PATH), `app.test.tsx não encontrado em ${APP_TEST_PATH}`);
    });
  });

  describe('🟡 Edge Cases (Configurações Estritas, Coverage >= 85% e Integridade de CI)', () => {
    it('deve configurar Vitest com threshold de cobertura >= 85% no vite.config.ts', () => {
      assert.ok(fs.existsSync(VITE_CONFIG_PATH), `vite.config.ts não encontrado`);
      const viteConfig = fs.readFileSync(VITE_CONFIG_PATH, 'utf-8');
      assert.match(viteConfig, /coverage/i, 'vite.config.ts deve configurar coverage');
      assert.match(viteConfig, /85/, 'vite.config.ts deve definir threshold mínimo de 85%');
    });

    it('deve conter configuração estrita de TypeScript em site/tsconfig.json', () => {
      assert.ok(fs.existsSync(TSCONFIG_PATH), `tsconfig.json não encontrado`);
      const tsconfig = JSON.parse(fs.readFileSync(TSCONFIG_PATH, 'utf-8'));
      assert.equal(
        tsconfig.compilerOptions?.strict,
        true,
        'tsconfig.json deve conter strict: true'
      );
    });

    it('deve conter configuração válida de Tailwind CSS ou PostCSS', () => {
      const hasTailwind =
        fs.existsSync(TAILWIND_CONFIG_PATH) ||
        fs.existsSync(POSTCSS_CONFIG_PATH);
      assert.ok(hasTailwind, 'Configuração do Tailwind ou PostCSS deve existir em site/');
    });

    it('deve conter workflow de CI validando checkout, npm ci, npm test e build', () => {
      assert.ok(fs.existsSync(CI_WORKFLOW_PATH), `Workflow do CI não encontrado em ${CI_WORKFLOW_PATH}`);
      const ciYaml = fs.readFileSync(CI_WORKFLOW_PATH, 'utf-8');
      assert.match(ciYaml, /actions\/checkout/i, 'CI deve realizar checkout');
      assert.match(ciYaml, /npm\s+(ci|install)/i, 'CI deve instalar dependências');
      assert.match(ciYaml, /npm\s+test/i, 'CI deve rodar testes');
      assert.match(ciYaml, /npm\s+run\s+build/i, 'CI deve validar build');
    });
  });
});
