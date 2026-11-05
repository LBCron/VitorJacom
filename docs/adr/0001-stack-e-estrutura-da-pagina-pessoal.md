# 0001. Stack e Estrutura da Página Pessoal Web ("Sobre Mim")

* Status: Aceita
* Data: 2026-11-05
* Decisores: System Architect, Product Owner, Vítor Jacom

## Contexto
O repositório `VitorJacom/VitorJacom` é um repositório especial do GitHub cujo arquivo `README.md` na raiz é automaticamente renderizado no perfil público do usuário (`github.com/VitorJacom`).
Para modernizar a presença digital com uma experiência web interativa rica ("Sobre Mim", linha do tempo, vitrine de projetos com arquitetura técnica e download do currículo `main.pdf`), era necessário definir a arquitetura da aplicação web sem:
1. Poluir a raiz do repositório ou comprometer a renderização do Profile README.
2. Criar custos de infraestrutura ou necessidade de servidores backend dedicados (scale-to-zero mandatório).
3. Utilizar tecnologias desalinhadas com o perfil técnico de Engenharia Full-Stack demonstrado no currículo.

## Decisão
1. **Isolamento de Diretório:** A aplicação web viverá isolada dentro do subdiretório `/site`, mantendo a raiz do repositório limpa para o `README.md` especial, documentação técnica (`docs/`) e assets originais (`main.pdf`, `vitor.jpg`).
2. **Stack Tecnológica:** Adoção de **React 19 + TypeScript 5 (Strict Mode) + Vite + Tailwind CSS**.
   - Alinhamento direto com o stack de produção do Vítor (React 19, TypeScript, Tailwind, Vite).
   - Utilização de `lucide-react` para iconografia vetorial limpa e leve.
   - Suíte de testes automatizados com **Vitest + React Testing Library**.
3. **Hospedagem & CI/CD:** Deploy estático automatizado via **GitHub Pages** utilizando as GitHub Actions oficiais (`actions/upload-pages-artifact` e `actions/deploy-pages`).
4. **Otimização de Assets:** Conversão da foto de 5.5MB para WebP responsivo (< 200KB) e inclusão do `main.pdf` em `site/public/curriculo-vitor-jacom.pdf` para download estático confiável.

## Alternativas Consideradas
- **Astro:** Excelente para sites orientados a conteúdo e SSG puro, porém adicionaria abstrações e convenções proprietárias (sintaxe `.astro`) diferentes do core de Engenharia de Software Full-Stack demonstrado no currículo (React/TypeScript).
- **Next.js (Static Export):** Mais pesado para este escopo, com overhead de dependências desnecessário para uma Single Page Application estática e hospedagem no GitHub Pages sem Node.js runtime.
- **HTML/CSS puro sem bundler:** Baixa manutenibilidade para componentes modulares, filtros de categorias interativos e ausência de tipagem estrita com TypeScript.

## Consequências

### Positivas
- Demonstração prática do stack React 19 / TypeScript / Tailwind CSS / Vitest no próprio repositório público.
- Deploy 100% gratuito e automatizado via GitHub Pages a cada commit na `main`.
- Isolamento total entre a aplicação web e o GitHub Profile README.
- Alta velocidade de carregamento com bundle compilado estático e assets otimizados.

### Negativas / Riscos (Trade-offs)
- Requer step de build do Node.js no GitHub Actions antes do deploy. Mitigado pelo cache de dependências (`actions/setup-node` com cache `npm`).
- Configuração de `base: '/VitorJacom/'` no `vite.config.ts` necessária para compatibilidade com o subpath padrão do GitHub Pages (ou `./` para caminhos relativos portáveis).
