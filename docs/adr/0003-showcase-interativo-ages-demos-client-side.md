# 0003. Showcase Interativo dos Projetos AGES com Demos Client-Side

* Status: Aceita
* Data: 2026-11-05
* Decisores: System Architect, Product Owner, Vítor Jacom

## Contexto
Vítor Jacom possui histórico destacado de liderança técnica na AGES (PUCRS), onde atuou como Arquiteto de Software, Scrum Master e Desenvolvedor Full-Stack em múltiplos projetos de impacto: **Estudify**, **Lucky Draw**, **MeditAmamente** e **Globo Aplausos**.
Apresentar esses projetos em um portfólio tradicional usando apenas blocos de texto estáticos e prints não comunica com eficácia a sofisticação da experiência de usuário, os padrões de interação e a complexidade arquitetural solucionada.
Adicionalmente, manter quatro backends reais ativos para cada um desses projetos acadêmicos e corporativos seria economicamente inviável e desnecessário.

## Decisão
1. **Demos Interativas 100% Client-Side:**
   - Implementação de simulações funcionais no navegador (zero backend) para cada um dos 4 projetos dentro de `site/src/components/showcase/ages/`:
     - **Estudify Demo (`EstudifyDemo.tsx`)**: Gerenciador interativo de metas de estudo, cálculo de horas de dedicação e visualizador de progresso semanal.
     - **Lucky Draw Demo (`LuckyDrawDemo.tsx`)**: Simulador do baralho de cartas com animação fluida de flip 3D em CSS, seleção de cartas e exibição dinâmica de insights ágeis.
     - **MeditAmamente Demo (`MeditAmamenteDemo.tsx`)**: Exercício guiado de mindfulness/respiração com animação vetorial SVG pulsante, ciclo guiado de 3 tempos (Inspiração, Pausa, Expiração) e controle de ciclo.
     - **Globo Aplausos Demo (`GloboAplausosDemo.tsx`)**: Painel de reconhecimento corporativo entre pares, permitindo simulação de envio de elogios com feedback visual de palmas, micro-interações e contador reativo.
2. **Painel Arquitetural Padronizado ("Sob o Capô"):**
   - Criação do componente unificado `ArchitectureUnderTheHood.tsx`, integrado a cada uma das 4 demos.
   - O painel exibe de forma colapsável e escaneável: Desafio Original de Engenharia, Decisão Técnica Adotada, Stack Real (Java/Spring Boot, React Native, AWS, PostgreSQL) e Métricas de Impacto alcançadas.
3. **Isolamento de Estado e Performance:**
   - Cada demo possui estado local estritamente isolado (`useState` / hooks dedicados), sem afetar a árvore principal de renderização da página.
   - Respeito a `prefers-reduced-motion` para acessibilidade em animações contínuas.

## Alternativas Consideradas
- **Vídeos Gravados ou GIFs:** Baixo engajamento interativo, pesados para LCP e sem a possibilidade do visitante experimentar a mecânica em primeira mão.
- **Backends Dedicados em Containers:** Custo financeiro contínuo e risco de downtime ou latência fria (cold start) que prejudicariam a experiência do visitante.
- **Screenshots Estáticos com Links Externos:** Ineficaz quando repositórios corporativos são privados (caso do projeto com a Globo) ou quando ambientes legados estão desativados.

## Consequências

### Positivas
- Apresentação memorável e diferenciada no mercado: recrutadores e líderes técnicos podem "brincar" com os sistemas instantaneamente.
- Total fidelidade técnica: o painel "Sob o Capô" vincula cada experiência interativa à arquitetura corporativa real desenvolvida.
- Zero custo de infraestrutura e performance instantânea (< 50ms de interação, sem chamadas de rede).

### Negativas / Riscos (Trade-offs)
- Requer esforço de codificação front-end para simular os fluxos principais de forma elegante e concisa.
- O bundle do front-end deve manter os assets vetoriais e lógicas leves para não ultrapassar limites de Web Vitals.
