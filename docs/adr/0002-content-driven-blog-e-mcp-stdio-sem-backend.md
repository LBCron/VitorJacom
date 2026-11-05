# 0002. Content-Driven Blog e MCP Server Stdio sem Backend

* Status: Aceita
* Data: 2026-11-05
* Decisores: System Architect, Product Owner, Vítor Jacom

## Contexto
O portfólio web de Vítor Jacom visa estabelecer autoridade técnica, compartilhar reflexões de engenharia em um blog autoral ("Sobre nada muito relevante") e oferecer suporte pioneiro a agentes de IA que consultam suas qualificações profissionais.
Os requisitos fundamentais eram:
1. Manter custo zero absoluto de infraestrutura (scale-to-zero), hospedagem estática no GitHub Pages e ausência de servidores backend continuamente ligados.
2. Permitir escrita de artigos técnicos em Markdown com frontmatter sem necessidade de CMS proprietário ou banco de dados.
3. Disponibilizar os dados de carreira, competências e artigos via Model Context Protocol (MCP) e o padrão `/llms.txt`, permitindo integração com assistentes de IA (Claude Desktop, Cursor, Antigravity, etc.) sem expor APIs pagas ou manter serviços em nuvem.

## Decisão
1. **Content-Driven Blog:**
   - Artigos armazenados como arquivos Markdown em `site/content/blog/*.md` com frontmatter estruturado (`title`, `slug`, `date`, `description`, `tags`, `readTime`).
   - Carregamento e renderização estáticos em tempo de compilação/execução no Vite utilizando `import.meta.glob('.../*.md', { query: '?raw', eager: true })` e parser leve sanitizado.
   - Navegação SPA fluida via estado/hash routing (`#blog`, `#blog/:slug`), garantindo compatibilidade imediata com GitHub Pages sem necessidade de hacks de reescrita 404.
2. **Dados Estruturados e llms.txt:**
   - Criação de `site/public/llms.txt` com resumo semântico, links e contexto profissional formatado para LLMs.
   - Geração de `site/public/profile.json` contendo a consolidação tipada de experiências, projetos, competências e posts de blog para consumo universal.
3. **MCP Server Stdio (`mcp/`):**
   - Implementação de um servidor MCP em TypeScript/Node.js no diretório `mcp/` utilizando `@modelcontextprotocol/sdk`.
   - O servidor opera exclusivamente via **Stdio** (Standard Input/Output), dispensando servidores HTTP/SSE ou portas abertas.
   - Disponibilização de tools semânticas: `get_profile_summary`, `list_skills`, `get_project_details`, `list_blog_posts`.
   - Execução simples via `npx` ou comando local `node mcp/dist/index.js`, consumindo diretamente o modelo canônico de dados.

## Alternativas Consideradas
- **Servidor MCP HTTP/SSE hospedado em nuvem (Fly.io/Render):** Descartado pois violaria a premissa de custo zero e demandaria monitoramento e manutenção de infraestrutura ativa.
- **Headless CMS Externo (Notion API, Sanity, Strapi):** Descartado para manter todo o ciclo de vida do conteúdo versionado no próprio repositório Git, viabilizando revisões por Pull Request e CI/CD unificado.
- **Apenas Profile README sem MCP:** Desperdiçaria a oportunidade de demonstrar inovação em IA generativa e arquitetura de agentes autônomos.

## Consequências

### Positivas
- Custo zero perpétuo de infraestrutura e hospedagem 100% estática via GitHub Pages.
- Blog versionado em Git com workflow simples de edição de markdown.
- Suporte nativo a ferramentas de IA através de MCP Stdio e `/llms.txt`.
- Separação clara entre conteúdo (`site/content/blog/`), dados tipados (`site/src/data/`) e camada de apresentação React.

### Negativas / Riscos (Trade-offs)
- A publicação de um novo artigo requer um commit na branch `main` e acionamento do pipeline de CI/CD.
- O uso do MCP Server requer que o cliente de IA ou usuário possua Node.js instalado localmente para execução do processo stdio.
