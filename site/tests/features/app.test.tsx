import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import App from '../../src/App';

describe('App Acceptance Suite', () => {
  describe('🟢 Happy Cases (Fluxos Ideais e Renderização Principal)', () => {
    it('deve renderizar a aplicação no DOM sem lançar exceções', () => {
      const { container } = render(<App />);
      expect(container).toBeDefined();
      expect(container.firstChild).not.toBeNull();
    });

    it('deve exibir a identidade profissional "Vítor Jacom" no heading principal h1', () => {
      render(<App />);
      const heading = screen.getByRole('heading', { level: 1 });
      expect(heading).toHaveTextContent(/Vítor Jacom/i);
    });

    it('deve conter os links principais de navegação para GitHub e LinkedIn', () => {
      render(<App />);
      const githubLinks = screen.getAllByRole('link', { name: /github/i });
      expect(githubLinks.length).toBeGreaterThanOrEqual(1);
      expect(githubLinks[0]).toHaveAttribute('href', 'https://github.com/VitorJacom');

      const linkedinLink = screen.getByRole('link', { name: /linkedin/i });
      expect(linkedinLink).toHaveAttribute('href', 'https://linkedin.com/in/vitorjacom');
    });
  });

  describe('🟡 Edge Cases (Acessibilidade, Segurança e Resiliência)', () => {
    it('deve garantir que todos os links externos com target="_blank" possuem rel contendo "noreferrer"', () => {
      const { container } = render(<App />);
      const externalLinks = container.querySelectorAll('a[target="_blank"]');
      expect(externalLinks.length).toBeGreaterThan(0);

      externalLinks.forEach((link) => {
        const rel = link.getAttribute('rel') || '';
        expect(rel).toMatch(/noreferrer/);
      });
    });

    it('deve conter aria-labels válidos em links baseados apenas em ícones para leitores de tela', () => {
      render(<App />);
      const headerNav = screen.getByRole('banner');
      const iconLinks = headerNav.querySelectorAll('a');

      iconLinks.forEach((link) => {
        expect(link.getAttribute('aria-label')).toBeTruthy();
      });
    });

    it('deve renderizar o rodapé com o ano corrente dinamicamente sem valores nulos', () => {
      render(<App />);
      const currentYear = new Date().getFullYear().toString();
      const footer = screen.getByRole('contentinfo');
      expect(footer).toHaveTextContent(currentYear);
    });
  });
});
