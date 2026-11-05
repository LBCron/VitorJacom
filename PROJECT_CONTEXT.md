# Contexto do Projeto: VitorJacom (GitHub Profile & Portfólio Web)

## 📌 Visão Geral
Repositório especial de perfil do GitHub (`VitorJacom/VitorJacom`) contendo a identidade profissional, GitHub Profile README executivo, a aplicação web da página pessoal "Sobre Mim" / Portfólio, Showcase interativo de projetos AGES, Blog Markdown autoral e servidor MCP Stdio para agentes de IA.

- **Dono:** Vítor Jacom de Souza (Engenheiro de Software Full-Stack | Java, TypeScript, React & Cloud Architecture)
- **Email:** vjds.vitor@gmail.com
- **LinkedIn:** https://linkedin.com/in/vitorjacom
- **GitHub:** https://github.com/VitorJacom

---

## 🏗️ Estrutura do Repositório

- `AGENTS.md`: Diretrizes canônicas de qualidade, cobertura (>= 85%), testes (happy/edge) e provas visuais (prints e vídeos).
- `README.md`: GitHub Profile README renderizado publicamente em `github.com/VitorJacom`.
- `main.pdf`: Currículo profissional canônico atualizado.
- `vitor.jpg`: Foto em alta resolução original.
- `docs/ARCHITECTURE.md`: Fonte única da verdade arquitetural.
- `docs/adr/`: Architecture Decision Records (ADRs 0001 a 0003).
- `site/`: Aplicação web do portfólio (React 19, TypeScript, Vite, Tailwind CSS).
  - `site/content/blog/`: Artigos do blog em Markdown com frontmatter.
  - `site/src/data/`: Fonte da verdade tipada do portfólio (Content-Driven).
  - `site/public/llms.txt` & `profile.json`: Endpoints estáticos para LLMs e agentes.
- `mcp/`: Servidor Model Context Protocol (MCP) via Stdio em TypeScript/Node.js.
- `.github/workflows/`: Pipelines de CI e deploy contínuo para GitHub Pages.

---

## 🛠️ Tecnologias Principais

- **Front-end Portfólio:** React 19, TypeScript 5, Vite, Tailwind CSS, Lucide React
- **MCP Server:** TypeScript, Node.js, `@modelcontextprotocol/sdk` (Stdio)
- **Testes:** Vitest, React Testing Library, jsdom
- **CI/CD & Hosting:** GitHub Actions (`actions/deploy-pages`), GitHub Pages (Custo Zero / Scale-to-Zero)
- **Estilo & Governança:** Conventional Commits, TDD estrito, Atomic Issues (max 3 passos por issue AIDD)
- **Regras Mandatórias de Qualidade e Governança:**
  - **Code Coverage Mínimo:** 85% obrigatório em todas as suítes (linhas, statements, funções e branches).
  - **Happy & Edge Cases:** Testes automatizados cobrindo explicitamente fluxos ideais e casos de borda/erro com logs anexados ao PR.
  - **Prova Visual em Front-end:** Screenshots/prints das interfaces renderizadas anexados obrigatoriamente no corpo do Pull Request (`walkthrough.md`).

---
*Orientações*: Proibido varrer o repositório cegamente. Respeite as estruturas canônicas e as regras do Duplo Gate.
