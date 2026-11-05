# Diretrizes de Governança, Qualidade e Engenharia — Repositório VitorJacom

Este documento define os padrões mandatórios de qualidade, testes e evidências visuais aplicáveis a todo desenvolvimento neste repositório.

---

## 🔒 1. Princípio de Confinamento Estrito de Workspace (Zero Intrusão Externa)

- **Jurisdição Exclusivamente Local**: Qualquer agente executando tarefas neste repositório atua estritamente dentro da árvore de arquivos de `VitorJacom`.
- **Proibição de Bypass Upstream**: É estritamente proibido editar arquivos, comitar ou dar push em outros repositórios (incluindo `my-agents`).
- **Protocolo de Proposta de Regras**: Caso uma nova regra universal seja aprendida via `/learn`, o agente deve limitar-se a abrir uma Issue via `publish-rule-issue` no GitHub para que o mantenedor e agente daquele repositório processem a demanda em sua própria esteira AIDD via Pull Request.

---

## 📊 2. Cobertura de Código Mínima Mandatória (Code Coverage >= 85%)

- **Threshold Estrito de 85%**: Todas as suítes de testes de frontend (`site/`), componentes interativos, demos AGES e servidor MCP devem manter cobertura mínima de **85%** em:
  - Statements
  - Branches
  - Functions
  - Lines
- **Verificação Automatizada**: Validada via engine de cobertura configurada no `site/vite.config.ts` (`@vitest/coverage-v8`). Entregas com cobertura inferior a 85% são sumariamente reprovadas no Gatekeeper.

---

## 🧪 3. Testes Automatizados com Happy Cases & Edge Cases

- Toda especificação e execução de testes automatizados deve segregar explicitamente:
  - **🟢 Happy Cases**: Cenários de sucesso, renderização ideal e fluxos principais de negócio.
  - **🟡 Edge Cases**: Cenários de borda, entradas vazias/inválidas, integridade de segurança (ex: `rel="noreferrer"` em links externos), acessibilidade (`aria-label`, leitores de tela), estados de erro e resiliência de dados.
- **Evidência Obrigatória**: Os relatórios e logs de execução demonstrando ambos os cenários devem ser gravados e anexados no corpo oficial do Pull Request (`walkthrough.md`).

---

## 📸 4. Prova Visual Estática (Screenshots de Front-End no PR)

- **Anti-Cegueira Visual**: Sempre que a tarefa envolver componentes visuais, layout ou páginas web, testes unitários não são suficientes.
- **Captura em Navegador**: É obrigatório gerar screenshots de alta resolução da aplicação renderizada (via Chromium headless ou navegador) e anexá-los diretamente no corpo do Pull Request.

---

## 🎥 5. Prova Visual Dinâmica (Gravações em Vídeo de Interações da Feature)

- **Interações e Comportamento Reativo**: Sempre que a feature envolver interação com o usuário (ex: **botão sendo acionado**, abertura de modais, menus suspensos, flip de cartas no Lucky Draw, cálculo de horas no Estudify, transições de estado ou animações), é **obrigatória a gravação de vídeo** (`.webm`, `.mp4` ou GIF animado leve).
- **Anexo no PR**: O vídeo/animação demonstrando a ação e o feedback visual em tempo real deve ser anexado na documentação de entrega e no corpo do Pull Request, comprovando a experiência do usuário final.
