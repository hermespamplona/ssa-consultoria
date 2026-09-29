/**
 * SSA GESTÃO PÚBLICA - COMPORTAMENTO INTERATIVO & ACESSIBILIDADE
 * Vanilla JavaScript sem dependências externas.
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileNavigation();
  initAccessibilityControls();
  initStickyHeader();
  initBudgetSimulator();
  initContactForm();
  initBackToTop();
});

/* --------------------------------------------------------------------------
   1. MENU MOBILE COM ACESSIBILIDADE
   -------------------------------------------------------------------------- */
function initMobileNavigation() {
  const menuToggle = document.querySelector('.menu-toggle');
  const mainNav = document.querySelector('.main-nav');
  const navLinks = document.querySelectorAll('.nav-link, .btn-nav-cta');

  if (!menuToggle || !mainNav) return;

  function toggleMenu(open) {
    const isExpanded = open !== undefined ? open : menuToggle.getAttribute('aria-expanded') !== 'true';
    menuToggle.setAttribute('aria-expanded', isExpanded);
    mainNav.classList.toggle('is-open', isExpanded);
    
    // Atualiza o ícone
    const icon = menuToggle.querySelector('svg');
    if (icon) {
      if (isExpanded) {
        icon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />`;
      } else {
        icon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />`;
      }
    }
  }

  menuToggle.addEventListener('click', () => toggleMenu());

  // Fechar menu ao clicar em qualquer link de navegação
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 768) {
        toggleMenu(false);
      }
    });
  });

  // Fechar com tecla ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mainNav.classList.contains('is-open')) {
      toggleMenu(false);
      menuToggle.focus();
    }
  });
}

/* --------------------------------------------------------------------------
   2. CONTROLES DE ACESSIBILIDADE (ALTO CONTRASTE E FONTE)
   -------------------------------------------------------------------------- */
function initAccessibilityControls() {
  const contrastBtn = document.getElementById('toggle-contrast');
  const fontIncBtn = document.getElementById('font-increase');
  const fontDecBtn = document.getElementById('font-decrease');

  // Recupera preferência de contraste
  const savedContrast = localStorage.getItem('ssa_contrast');
  if (savedContrast === 'high') {
    document.body.classList.add('high-contrast');
  }

  if (contrastBtn) {
    contrastBtn.addEventListener('click', () => {
      document.body.classList.toggle('high-contrast');
      const isHigh = document.body.classList.contains('high-contrast');
      localStorage.setItem('ssa_contrast', isHigh ? 'high' : 'normal');
      contrastBtn.setAttribute('aria-pressed', isHigh);
    });
  }

  // Controle de Tamanho de Fonte
  let currentZoom = 100;
  if (fontIncBtn) {
    fontIncBtn.addEventListener('click', () => {
      if (currentZoom < 130) {
        currentZoom += 10;
        document.documentElement.style.fontSize = `${currentZoom}%`;
      }
    });
  }

  if (fontDecBtn) {
    fontDecBtn.addEventListener('click', () => {
      if (currentZoom > 90) {
        currentZoom -= 10;
        document.documentElement.style.fontSize = `${currentZoom}%`;
      }
    });
  }
}

/* --------------------------------------------------------------------------
   3. HEADER FIXO COM SOMBRA NO SCROLL
   -------------------------------------------------------------------------- */
function initStickyHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.classList.add('is-scrolled');
    } else {
      header.classList.remove('is-scrolled');
    }
  }, { passive: true });
}

/* --------------------------------------------------------------------------
   4. SIMULADOR E GUIA DO CICLO ORÇAMENTÁRIO (PPA, LDO, LOA)
   -------------------------------------------------------------------------- */
const budgetCyclesData = {
  ano1: {
    yearLabel: '1º Ano de Mandato Municipal',
    tagAction: 'Ano Chave: Construção Estratégica do PPA',
    description: 'Neste ano a administração executa o último ano da LOA da gestão anterior e elabora o novo Plano Plurianual (PPA) para os 4 anos subsequentes, além da LDO e da LOA.',
    steps: [
      {
        tag: 'Peça Principal',
        title: 'Elaboração do PPA (Plano Plurianual)',
        desc: 'Construção participativa através de audiências públicas, definindo diretrizes, objetivos e metas da administração para os próximos 4 anos (do 2º ano deste mandato até o 1º ano da próxima gestão).',
        deadline: 'Prazo LRF/Constituição: Envio até 31 de Agosto'
      },
      {
        tag: 'Diretrizes',
        title: 'LDO (Lei de Diretrizes Orçamentárias)',
        desc: 'Sintoniza o futuro PPA com a LOA, fixa metas fiscais e prioridades para o exercício seguinte, dispondo sobre alterações tributárias e despesas com pessoal.',
        deadline: 'Envio ao Legislativo: Envio em Abril/Maio'
      },
      {
        tag: 'Orçamento Anual',
        title: 'LOA (Lei Orçamentária Anual)',
        desc: 'Primeira LOA de autoria plena do novo governo, estimando as receitas e fixando despesas alinhadas aos novos programas e ações públicas desenhadas no PPA recém-criado.',
        deadline: 'Envio ao Legislativo: Até 30 de Setembro'
      }
    ]
  },
  ano2: {
    yearLabel: '2º Ano de Mandato Municipal',
    tagAction: 'Consolidação e Execução Plena',
    description: 'Início da vigência do novo PPA. Foco em alavancar projetos estruturantes, calibrar arrecadação e acompanhar as metas fiscais bimestrais.',
    steps: [
      {
        tag: 'Revisão Legal',
        title: 'Revisão e Avaliação do PPA',
        desc: 'Análise de desempenho do primeiro ano de execução dos programas, metas físicas e readequação de ações conforme a realidade da arrecadação.',
        deadline: 'Acompanhamento Bimestral (RREO) e Quadrimestral'
      },
      {
        tag: 'Diretrizes Anuais',
        title: 'LDO com Anexo de Metas Fiscais',
        desc: 'Elaboração técnica com critérios para limitação de empenho e movimentação financeira, margem de expansão das despesas e riscos fiscais.',
        deadline: 'Envio ao Legislativo: Em torno de 15 de Abril'
      },
      {
        tag: 'Programação LOA',
        title: 'LOA e Emendas Parlamentares',
        desc: 'Detalhamento das fontes de recursos, reserva de contingência e compatibilização com as emendas impositivas dos vereadores.',
        deadline: 'Envio ao Legislativo: Até 30 de Setembro'
      }
    ]
  },
  ano3: {
    yearLabel: '3º Ano de Mandato Municipal',
    tagAction: 'Maturidade Fiscal & Investimentos',
    description: 'Período estratégico para acelerar obras e investimentos públicos mantendo o rigoroso equilíbrio fiscal e o controle dos limites de pessoal.',
    steps: [
      {
        tag: 'Planejamento Médio Prazo',
        title: 'Monitoramento Físico e Financeiro do PPA',
        desc: 'Verificação da efetividade dos programas e projetos. Auditoria preventiva para assegurar o cumprimento dos percentuais de Saúde e Educação.',
        deadline: 'Relatórios de Gestão e Avaliação das Metas'
      },
      {
        tag: 'LDO Atualizada',
        title: 'LDO para o Último Ano Pleno',
        desc: 'Fixação de parâmetros orçamentários, critérios de contingenciamento e projeções de receita com base na série histórica e inflação.',
        deadline: 'Audiência Pública e Envio até Abril'
      },
      {
        tag: 'LOA Equilibrada',
        title: 'LOA com foco em Conclusão de Metas',
        desc: 'Alocação precisa para finalização de obras e custeio das políticas públicas sem gerar déficits ou restos a pagar sem lastro.',
        deadline: 'Envio ao Legislativo: Até 30 de Setembro'
      }
    ]
  },
  ano4: {
    yearLabel: '4º Ano de Mandato Municipal',
    tagAction: 'Encerramento de Mandato & Transição Republicana',
    description: 'Ano de extremo cuidado com as vedações do Art. 42 da LRF (proibição de contrair despesas nos dois últimos quadrimestres sem disponibilidade de caixa) e preparação da transição.',
    steps: [
      {
        tag: 'Atenção LRF Art. 42',
        title: 'Controle Rígido de Restos a Pagar',
        desc: 'Auditoria contínua de fluxo de caixa para evitar inscrição de restos a pagar sem lastro financeiro, prevenindo reprovação de contas e improbidade.',
        deadline: 'Vigilância contínua durante todo o exercício'
      },
      {
        tag: 'LDO de Transição',
        title: 'LDO para a Gestão Subsequente',
        desc: 'Elaboração técnica das diretrizes que regerão o primeiro ano do próximo prefeito, assegurando continuidade dos serviços essenciais.',
        deadline: 'Envio regular ao Legislativo'
      },
      {
        tag: 'LOA de Transição',
        title: 'LOA para o 1º Ano da Próxima Gestão',
        desc: 'Projeção responsável e conservadora de receitas e fixação de despesas para o ano seguinte, baseada no último ano do PPA vigente.',
        deadline: 'Aprovação antes do recesso parlamentar'
      }
    ]
  }
};

function initBudgetSimulator() {
  const buttons = document.querySelectorAll('.simulator-btn');
  const titleEl = document.getElementById('sim-current-title');
  const tagEl = document.getElementById('sim-current-tag');
  const descEl = document.getElementById('sim-current-desc');
  const gridEl = document.getElementById('sim-cards-container');

  if (!buttons.length || !gridEl) return;

  function renderCycle(key) {
    const data = budgetCyclesData[key];
    if (!data) return;

    if (titleEl) titleEl.textContent = data.yearLabel;
    if (tagEl) tagEl.textContent = data.tagAction;
    if (descEl) descEl.textContent = data.description;

    gridEl.innerHTML = data.steps.map(step => `
      <article class="sim-card-step">
        <span class="sim-step-tag">${step.tag}</span>
        <h4 class="sim-step-title">${step.title}</h4>
        <p class="sim-step-desc">${step.desc}</p>
        <div class="sim-step-deadline">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 6 12 12 16 14"></polyline>
          </svg>
          <span>${step.deadline}</span>
        </div>
      </article>
    `).join('');
  }

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
      const cycleKey = btn.dataset.cycle;
      renderCycle(cycleKey);
    });
  });

  // Render inicial com ano 1
  renderCycle('ano1');
}

/* --------------------------------------------------------------------------
   5. FORMULÁRIO DE CONTATO & DIALOG MODAL
   -------------------------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById('form-contato');
  const modal = document.getElementById('modal-sucesso');
  const btnCloseModal = document.getElementById('btn-fechar-modal');

  if (!form || !modal) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Validação básica nativa
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    // Coleta dos dados do formulário
    const formData = new FormData(form);
    const gestorNome = formData.get('nome') || 'Gestor Público';
    const orgaoNome = formData.get('orgao') || 'Administração Pública';

    // Personaliza mensagem de sucesso no modal
    const modalTexto = modal.querySelector('.modal-text');
    if (modalTexto) {
      modalTexto.innerHTML = `Obrigado pelo contato, <strong>${gestorNome}</strong> (${orgaoNome}). Nossa equipe especializada em planejamento e gestão pública entrará em contato em até 24 horas úteis com o seu diagnóstico fiscal preliminar.`;
    }

    // Exibe o diálogo nativo acessível
    if (typeof modal.showModal === 'function') {
      modal.showModal();
    } else {
      modal.setAttribute('open', '');
    }

    // Reseta o formulário
    form.reset();
  });

  if (btnCloseModal) {
    btnCloseModal.addEventListener('click', () => {
      if (typeof modal.close === 'function') {
        modal.close();
      } else {
        modal.removeAttribute('open');
      }
    });
  }

  // Fechar ao clicar fora (backdrop)
  modal.addEventListener('click', (e) => {
    const dialogDimensions = modal.getBoundingClientRect();
    if (
      e.clientX < dialogDimensions.left ||
      e.clientX > dialogDimensions.right ||
      e.clientY < dialogDimensions.top ||
      e.clientY > dialogDimensions.bottom
    ) {
      modal.close();
    }
  });
}

/* --------------------------------------------------------------------------
   6. BOTÃO VOLTAR AO TOPO
   -------------------------------------------------------------------------- */
function initBackToTop() {
  const backToTopBtn = document.querySelector('.back-to-top');
  if (!backToTopBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      backToTopBtn.classList.add('is-visible');
    } else {
      backToTopBtn.classList.remove('is-visible');
    }
  }, { passive: true });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}
