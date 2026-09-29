# SSA Gestão & Governança Pública — Portal Institucional

Website institucional desenvolvido em **HTML5 Semântico**, **CSS3 Moderno** e **JavaScript Vanilla**, projetado especificamente para empresa de assessoria e consultoria à **Administração Pública** (Prefeituras, Câmaras Municipais, Secretarias e Autarquias).

---

## 🏛️ Propósito e Escopo de Atuação

O portal foi concebido para atender às demandas de gestores públicos (prefeitos, secretários de finanças/fazenda, secretários de planejamento, controladores internos e contadores públicos), com foco nas seguintes áreas de excelência:

1. **Elaboração de Peças de Planejamento Governamental**:
   - **PPA (Plano Plurianual)**: Planejamento quadriênio, programas temáticos, diretrizes e metas físicas e financeiras.
   - **LDO (Lei de Diretrizes Orçamentárias)**: Anexo de Metas Fiscais, Riscos Fiscais, regras de contingenciamento e diretrizes para a LOA.
   - **LOA (Lei Orçamentária Anual)**: Estimativa detalhada de receitas, fixação de despesas por função/subfunção e emendas parlamentares impositivas.
   - **Audiências Públicas**: Condução e metodologia de participação popular em cumprimento à LRF e ao Estatuto da Cidade.

2. **Acompanhamento da Execução Orçamentária e Financeira**:
   - Controle das etapas da despesa (empenho, liquidação e ordem cronológica de pagamentos).
   - Elaboração e consistência dos relatórios fiscais obrigatórios: **RREO (Bimestral)** e **RGF (Quadrimestral/Semestral)**.
   - Monitoramento contínuo dos limites constitucionais: **Saúde (15% mínimo)**, **Educação (25% mínimo / Fundeb 70%)** e **Despesa com Pessoal (LRF - Limites de Alerta, Prudencial e Máximo de 54% no Executivo)**.
   - Saneamento de **Restos a Pagar** e controle do rigoroso **Artigo 42 da LRF** no encerramento de mandatos.

3. **Inteligência de Dados e Business Intelligence (BI)**:
   - Dashboards interativos e preditivos para prefeitos e secretários municipais.
   - Cruzamento de dados de arrecadação própria (IPTU, ISS, ITBI, Taxas) e transferências constitucionais (FPM, ICMS, IPVA).
   - Prevenção contra frustrações de receita e suporte em tempo real.

4. **Apoio Técnico Estratégico na Tomada de Decisões**:
   - Emissão de Notas Técnicas conclusivas para ordenadores de despesas.
   - Estudos de Impacto Orçamentário-Financeiro (Arts. 16 e 17 da LRF).
   - Abertura de Créditos Adicionais (Suplementares, Especiais e Extraordinários) com apuração de fontes legais (superávit financeiro e excesso de arrecadação).
   - Suporte técnico preventivo perante os Tribunais de Contas (TCE / TCM / TCU).

---

## 🎨 Identidade Visual (Tema Azul com Branco)

O design foi estruturado em conformidade com as melhores práticas de identidade visual para o setor público (gov/enterprise), transmitindo **confiança, sobriedade, transparência e alta credibilidade técnica**:

- **Azul Primário Marinho (`#081d36`, `#0d2e54`)**: Transmite autoridade institucional e solidez jurídica.
- **Azul Corporativo / Royal (`#165297`, `#1d68c2`, `#3b82f6`)**: Destaque para elementos de ação, botões e ícones.
- **Branco Puro (`#ffffff`) & Superfícies Claras (`#f0f6ff`, `#f8fafc`)**: Clareza, limpeza visual e legibilidade impecável.
- **Verde de Conformidade (`#059669`)**: Indicador de aprovação e limites fiscais seguros.

---

## ♿ Acessibilidade e Semântica (WCAG 2.1 & e-MAG)

O código foi 100% estruturado com tags semânticas e recursos de acessibilidade:

- **Estrutura Semântica**:
  - `<header>` e `<nav>` com landmarks acessíveis (`aria-label`, `role="banner"`).
  - `<main>` com âncora de salto (`.skip-link`) para navegação por teclado.
  - `<section>` e `<article>` com hierarquia precisa de títulos (`<h1>` a `<h4>`).
  - Formulário acessível utilizando `<fieldset>`, `<legend>`, `<label for="...">`, validação HTML5 e inputs semânticos (`type="tel"`, `type="email"`, autocomplete).
  - `<details>` e `<summary>` para perguntas frequentes sem javascript pesado.
  - `<dialog>` nativo para confirmação de envio sem dependências externas.
- **Recursos Inclusivos**:
  - Botão de **Alto Contraste** com persistência em `localStorage`.
  - Botões de **Aumento e Redução de Fonte** (A+ / A-).
  - Estados de foco visíveis (`:focus-visible`) com contraste aprimorado.
  - Ícones SVG com `aria-hidden="true"` para não poluir leitores de tela.

---

## 💡 Ferramentas Interativas Incluídas

1. **Simulador Dinâmico do Ciclo Orçamentário Municipal**:
   - Permite ao gestor alternar entre o **1º, 2º, 3º e 4º ano do mandato**, visualizando instantaneamente quais peças estão em fase de elaboração (PPA, LDO ou LOA), os prazos constitucionais e as atenções fiscais (como o Art. 42 da LRF no último ano).
2. **Painel Visual de Indicadores Fiscais (Mockup de BI)**:
   - Apresenta na seção Hero os principais termômetros fiscais de uma administração pública modelo (Saúde, Educação, Folha de Pessoal e Eficiência de Arrecadação).
3. **Formulário de Diagnóstico com Modal Acessível**:
   - Coleta de dados com retorno imediato através do elemento nativo `<dialog>`.

---

## 📂 Estrutura de Arquivos

```
SSA/
├── index.html        # Estrutura semântica completa e acessível
├── style.css         # Folha de estilos moderna com CSS Variables, Grid e Flexbox
├── script.js         # Interatividade vanilla (Menu mobile, Simulador, Contraste, Modal)
└── README.md         # Documentação técnica e guia do projeto
```

---

## 🚀 Como Executar

Por ser um projeto puro em tecnologias web padrão (Vanilla HTML/CSS/JS), não requer instalação de dependências ou build steps:

1. Dê um duplo clique no arquivo [`index.html`](file:///g:/Meu%20Drive/VSCode/SSA/index.html) para abri-lo diretamente em qualquer navegador moderno (Chrome, Edge, Firefox, Safari).
2. Se preferir rodar em um servidor web local via Python, basta executar:
   ```bash
   python -m http.server 8000
   ```
   E acessar `http://localhost:8000` no seu navegador.
