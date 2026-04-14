<!--
Sync Impact Report
========================================
Version change: 1.0.0 → 1.1.0
Modified principles: None
Added principles:
  - VI. Brazilian Portuguese Language (new)
Added sections: None
Removed sections: None
Templates requiring updates:
  ✅ .specify/templates/plan-template.md (Constitution Check updated)
  ✅ .specify/templates/spec-template.md (Constitution-Derived Requirements updated)
  ✅ .specify/templates/tasks-template.md (language requirement added)
Follow-up TODOs:
  - TODO(RATIFICATION_DATE): Set ratification date when project officially adopts this constitution
========================================
-->
# Artesanato Constitution

## Core Principles

### I. Beleza e Experiencia do Usuario

Cada feature DEVE ser projetada com beleza e experiencia excepcional do usuario como objetivos primarios. Design visual nao e um pensamento tardio, mas um requisito fundamental. A interface deve ser intuitiva, esteticamente agradavel e acessivel.

**Racional**: A confianca e o engajamento do usuario dependem da qualidade visual e usabilidade. UX ruim impacta diretamente os resultados do negocio.

---

### II. Garantia de Desempenho

Os tempos de carregamento das paginas NAO PODEM exceder 3 segundos em condicoes normais de rede. Orcamentos de desempenho sao obrigatorios para cada pagina. Pontuacao Lighthouse DEVE ser 90+ para desempenho.

**Racional**: Estudos consistentemente mostram que usuarios abandonam paginas lentas. 3 segundos e o limite maximo aceitavel para manter usuarios engajados.

---

### III. Prontidao para Automacao de Testes

Todo codigo enviado DEVE ser testavel. Cada feature requer testes automatizados cobrindo: testes unitarios, testes de integracao e testes end-to-end. Cobertura de testes DEVE ser 80%+ para caminhos criticos. Todas as interacoes com o usuario DEVEM ter cobertura de testes automatizados.

**Racional**: Sem testes automatizados, regrescoes passam despercebidas. Testabilidade garante que a qualidade do codigo seja verificavel e sustentavel.

---

### IV. Codigo Limpo e Sustentavel

O codigo DEVE ser limpo, auto-documentado e seguir diretrizes de estilo consistentes. Cada modulo DEVE ter responsabilidades claras. Complexidade DEVE ser justificada e documentada. Divida tecnica DEVE ser rastreada e abordada.

**Racional**: Codigo e lido mais frequentemente do que escrito. Sustentabilidade impacta diretamente a velocidade e a frequencia de bugs.

---

### V. Leveza e Deploy Rapido

Dependencias DEVEM ser minimas. Tamanhos de bundle DEVEM ser mantidos pequenos. Pipelines de deploy DEVEM ser otimizados para velocidade. O sistema DEVE suportar iteracao rapida com friccao minima.

**Racional**: Dependencias pesadas ralentam desenvolvimento e deploy. Arquitetura leve permite iteracoes mais rapidas e menores custos de infraestrutura.

---

### VI. Idioma Portugues Brasileiro

Toda a documentacao gerada e os codigos DEVEM estar em Portugues Brasileiro, exceto o que for obrigatorio manter no idioma da tecnologia. Nomes de variaveis, funcoes, classes e comentarios DEVEM usar terminologia coerente em Portugues Brasileiro. Termos tecnicos obrigatorios em Ingles (APIs, URLs, palavras-chave de linguagem) sao permitidos.

**Racional**: Projeto brasileiro requer documentacao e codigo em Portugues Brasileiro para manutenibilidade pela equipe local. Excecoes tecnicas sao necessarias para interoperabilidade.

---

## Restricoes Adicionais

### Padroes de Desempenho

- **First Contentful Paint (FCP)**: < 1,5s
- **Largest Contentful Paint (LCP)**: < 2,5s
- **Time to Interactive (TTI)**: < 3s
- **Cumulative Layout Shift (CLS)**: < 0,1
- **Orcamento de tamanho de bundle**: < 250KB carga inicial (gzipped)

### Requisitos de Testes

- **Testes unitarios**: Obrigatorios para todas as funcoes utilitarias e componentes
- **Testes de integracao**: Obrigatorios para todos os endpoints de API e fluxos de dados
- **Testes E2E**: Obrigatorios para todas as jornadas criticas do usuario
- **Testes de acessibilidade**: Obrigatorios para todos os componentes de interface (WCAG 2.1 AA)
- **Testes de regressao visual**: Obrigatorios para todos os componentes de interface

### Requisitos de Acessibilidade

- Todos os elementos interativos DEVEM ser navegaveis por teclado
- Contraste de cores DEVE atender aos padroes WCAG 2.1 AA (4,5:1 para texto normal)
- Todas as imagens DEVEM ter texto alternativo apropriado
- Compatibilidade com leitores de tela DEVE ser verificada

---

## Fluxo de Desenvolvimento

### Pontos de Controle de Qualidade de Codigo

1. **Lint**: Codigo DEVE passar todas as regras de linting antes do merge do PR
2. **Verificacao de Tipo**: Anotacoes de tipo DEVEM estar corretas (TypeScript/mypy)
3. **Testes**: Todos os testes DEVEM passar (unitario, integracao, E2E)
4. **Desempenho**: Auditoria Lighthouse DEVE mostrar pontuacao 90+
5. **Acessibilidade**: Verificacoes axe-core DEVEM passar com 0 violacoes

### Requisitos de Revisao de Codigo

- Todos os PRs DEVEM ter pelo menos uma aprovacao de revisor
- Revisores DEVEM verificar: testes, desempenho, acessibilidade, consistencia de UX
- Nao sao permitidos commits diretos na branch main (apenas via PRs)

### Pipeline de Deploy

1. Todos os testes verdes
2. Orcamento de desempenho atendido
3. Pontuacao Lighthouse 90+
4. Auditoria de acessibilidade aprovada
5. Aprovacao manual de QA para releases principais

---

## Governanca

Esta constituicao sobrepoe todas as outras praticas de desenvolvimento. Conformidade e OBRIGATORIA para todas as contribuicoes de codigo.

### Procedimento de Emenda

1. Propor mudanca com analise de impacto e racional
2. Revisao pelos mantenedores do projeto
3. Plano de migracao se houver quebra
4. Minimo de 2 aprovacoes obrigatorias
5. Incremento de versao seguindo versionamento semantico

### Politica de Versao

- **MAJOR**: Mudancas retro-incompativeis em principios ou praticas obrigatorias
- **MINOR**: Novos principios, restricoes expandidas ou adicoes materiais de orientacao
- **PATCH**: Clarificacoes, correcoes de redacao, refinamentos nao semanticos

### Revisao de Conformidade

Todos os PRs DEVEM verificar conformidade com:
- Orcamentos de desempenho
- Requisitos de cobertura de testes
- Padroes de acessibilidade
- Pontos de controle de qualidade de codigo

**Versao**: 1.1.0 | **Ratificada**: TODO | **Ultima Alteracao**: 2026-04-13