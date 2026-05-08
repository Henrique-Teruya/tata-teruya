// ============================================
// 🧶 Tatá Teruya — Shop SPA Controller
// ============================================

(function () {
  'use strict';

  // ===== PRODUCT CATALOG =====
  const PRODUCTS = [
    {
      slug: 'bolsa-amor',
      name: 'Bolsa Amor',
      price: 'R$ 89,90',
      description: 'Feita à mão em crochê vermelho vibrante, a Bolsa Amor carrega personalidade e delicadeza em cada ponto. Seu tamanho compacto é ideal para o dia a dia, cabendo o essencial com estilo.',
      measurements: [
        ['Largura', '28 cm'],
        ['Altura', '22 cm'],
        ['Profundidade', '8 cm'],
        ['Alça', '110 cm (ajustável)'],
        ['Material', 'Fio de algodão 100%'],
      ],
      images: [
        'data/images/vermelhaprincipal.png',
        'data/images/vermelhaaberta.png',
        'data/images/vermelhaalca.png',
        'data/images/vermelhaembaixo.png',
      ],
    },
    {
      slug: 'bolsa-aura',
      name: 'Bolsa Aura',
      price: 'R$ 109,90',
      description: 'A Bolsa Aura é a combinação perfeita entre elegância e versatilidade. Em tom azul profundo, seu acabamento artesanal revela a textura única do crochê feito à mão.',
      measurements: [
        ['Largura', '32 cm'],
        ['Altura', '24 cm'],
        ['Profundidade', '10 cm'],
        ['Alça', '120 cm (ajustável)'],
        ['Material', 'Fio de algodão 100%'],
      ],
      images: [
        'data/images/azulprincipal.jpeg',
        'data/images/azulaberta.png',
        'data/images/azulembaixo.jpeg',
      ],
    },
    {
      slug: 'bolsa-carta',
      name: 'Bolsa Carta',
      price: 'R$ 129,90',
      description: 'Inspirada no formato clássico de envelope, a Bolsa Carta é sofisticação em cada detalhe. Ideal para ocasiões especiais ou para quem quer se destacar no cotidiano.',
      measurements: [
        ['Largura', '30 cm'],
        ['Altura', '20 cm'],
        ['Profundidade', '6 cm'],
        ['Alça', '115 cm (ajustável)'],
        ['Material', 'Fio de algodão 100%'],
      ],
      images: [
        'data/images/cartaprincipal.jpeg',
        'data/images/cartaaberta.jpeg',
        'data/images/cartafrente.jpeg',
        'data/images/cartaalca.jpeg',
      ],
    },
    {
      slug: 'bolsa-textura',
      name: 'Bolsa Textura',
      price: 'R$ 139,90',
      description: 'A Bolsa Textura é uma ode ao trabalho manual. Seus pontos diferenciados criam um relevo tátil único, tornando cada peça verdadeiramente irrepetível.',
      measurements: [
        ['Largura', '34 cm'],
        ['Altura', '26 cm'],
        ['Profundidade', '12 cm'],
        ['Alça', '125 cm (ajustável)'],
        ['Material', 'Fio de algodão 100%'],
      ],
      images: [
        'data/images/texturaalca.jpeg',
        'data/images/texturaberta.png',
        'data/images/texturaembaixo.jpeg',
      ],
    },
  ];

  // ===== CONFIG =====
  const PIX_KEY = 'sua-chave-pix@email.com';
  const WHATSAPP_NUMBER = '5511998387082';

  // ===== STATE =====
  let currentView = 'shop';
  let currentProduct = null;
  let scrollPositions = {};

  // ===== DOM REFS =====
  const viewEls = {};
  let toastEl;

  // ===== INIT =====
  function init() {
    viewEls.shop = document.getElementById('view-shop');
    viewEls.product = document.getElementById('view-product');
    viewEls.payment = document.getElementById('view-payment');
    toastEl = document.getElementById('toast');

    if (!viewEls.shop) return;

    renderShop();

    // Browser back/forward
    window.addEventListener('popstate', function (e) {
      if (e.state && e.state.view) {
        switchView(e.state.view, e.state.params, true);
      } else {
        switchView('shop', null, true);
      }
    });

    history.replaceState({ view: 'shop' }, '', window.location.pathname);
  }

  // ===== VIEW ROUTER =====
  function navigateTo(view, params) {
    scrollPositions[currentView] = window.scrollY;
    history.pushState({ view: view, params: params }, '', buildUrl(view, params));
    switchView(view, params, false);
  }

  function buildUrl(view, params) {
    var base = window.location.pathname;
    if (view === 'product' && params) return base + '?p=' + params;
    if (view === 'payment' && params) return base + '?pagamento=' + params;
    return base;
  }

  function switchView(view, params, isPopState) {
    if (!isPopState) scrollPositions[currentView] = window.scrollY;

    // Prepare content
    if (view === 'product' && params) {
      renderProduct(params);
    } else if (view === 'payment' && params) {
      var product = PRODUCTS.find(function (p) { return p.slug === params; });
      if (product) renderPayment(product);
    }

    var outEl = viewEls[currentView];
    var inEl = viewEls[view];

    // Animate out
    if (outEl) {
      outEl.classList.add('view--exiting');
      outEl.classList.remove('view--active');
    }

    setTimeout(function () {
      if (outEl) outEl.classList.remove('view--exiting');

      if (inEl) {
        inEl.classList.add('view--entering', 'view--active');
        var savedScroll = scrollPositions[view];
        window.scrollTo(0, isPopState && savedScroll ? savedScroll : 0);

        requestAnimationFrame(function () {
          requestAnimationFrame(function () {
            inEl.classList.remove('view--entering');
          });
        });
      }

      currentView = view;
    }, 280);
  }

  // ===== SHOP VIEW =====
  function renderShop() {
    var grid = document.getElementById('product-grid');
    var countEl = document.getElementById('product-count');
    if (!grid) return;

    if (countEl) {
      countEl.textContent = PRODUCTS.length + ' produtos disponíveis';
    }

    var html = '';
    PRODUCTS.forEach(function (product, index) {
      html += '<article class="product-card reveal-on-scroll" data-slug="' + product.slug + '">' +
        '<div class="product-image-wrapper">' +
          '<img class="img-primary" src="' + product.images[0] + '" alt="' + product.name + '" loading="lazy">' +
          (product.images[1] ? '<img class="img-hover" src="' + product.images[1] + '" alt="' + product.name + ' — detalhe" loading="lazy" aria-hidden="true">' : '') +
          '<div class="product-card-overlay">' +
            '<span class="btn btn-pix">Ver produto</span>' +
          '</div>' +
        '</div>' +
        '<div class="product-info">' +
          '<h3 class="product-name">' + product.name + '</h3>' +
          '<span class="product-price">' + product.price + '</span>' +
        '</div>' +
      '</article>';
    });
    grid.innerHTML = html;

    // Bind card clicks
    grid.querySelectorAll('.product-card').forEach(function (card) {
      card.style.cursor = 'pointer';
      card.addEventListener('click', function () {
        navigateTo('product', card.getAttribute('data-slug'));
      });
    });

    initReveal('#view-shop');
  }

  function initReveal(scope) {
    var els = document.querySelectorAll(scope + ' .reveal-on-scroll:not(.revealed)');
    if (!els.length) return;
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    els.forEach(function (el) { obs.observe(el); });
  }

  // ===== PRODUCT DETAIL VIEW =====
  function renderProduct(slug) {
    var product = PRODUCTS.find(function (p) { return p.slug === slug; });
    if (!product) return;
    currentProduct = product;

    var measHtml = '';
    product.measurements.forEach(function (m) {
      measHtml += '<div class="pdp-meta-row"><dt>' + m[0] + '</dt><dd>' + m[1] + '</dd></div>';
    });

    var thumbsHtml = '';
    product.images.forEach(function (img, i) {
      thumbsHtml += '<button class="pdp-thumb' + (i === 0 ? ' pdp-thumb--active' : '') + '" data-index="' + i + '" aria-label="Ver imagem ' + (i + 1) + '">' +
        '<img src="' + img + '" alt="' + product.name + ' — foto ' + (i + 1) + '" loading="lazy">' +
      '</button>';
    });

    viewEls.product.innerHTML =
      '<div class="container pdp-container">' +
        '<nav class="breadcrumb" aria-label="Navegação">' +
          '<a href="#" class="breadcrumb-link" data-nav="shop">Home</a>' +
          '<span class="breadcrumb-sep">/</span>' +
          '<a href="#" class="breadcrumb-link" data-nav="shop">Produtos</a>' +
          '<span class="breadcrumb-sep">/</span>' +
          '<span class="breadcrumb-current">' + product.name + '</span>' +
        '</nav>' +
        '<div class="pdp">' +
          '<div class="pdp-gallery">' +
            '<div class="pdp-gallery-main">' +
              '<img src="' + product.images[0] + '" alt="' + product.name + '" id="pdp-main-img" class="pdp-main-image">' +
            '</div>' +
            '<div class="pdp-gallery-thumbs">' + thumbsHtml + '</div>' +
          '</div>' +
          '<div class="pdp-info">' +
            '<span class="pdp-label">Feito à mão</span>' +
            '<h1 class="pdp-name">' + product.name + '</h1>' +
            '<p class="pdp-price">' + product.price + '</p>' +
            '<div class="pdp-divider"></div>' +
            '<p class="pdp-description">' + product.description + '</p>' +
            '<div class="pdp-meta">' +
              '<h4 class="pdp-meta-title">Medidas & Detalhes</h4>' +
              '<dl class="pdp-meta-list">' + measHtml + '</dl>' +
            '</div>' +
            '<div class="pdp-actions">' +
              '<button class="btn pdp-btn-buy" id="pdp-buy">Comprar — ' + product.price + '</button>' +
              '<button class="pdp-btn-back" data-nav="shop">← Voltar aos produtos</button>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</div>';

    // Bind events
    bindNavLinks(viewEls.product);
    initGallery(viewEls.product, product);

    var buyBtn = document.getElementById('pdp-buy');
    if (buyBtn) {
      buyBtn.addEventListener('click', function () {
        navigateTo('payment', product.slug);
      });
    }
  }

  function initGallery(container, product) {
    var mainImg = container.querySelector('#pdp-main-img');
    var thumbs = container.querySelectorAll('.pdp-thumb');
    if (!mainImg || !thumbs.length) return;

    var currentIdx = 0;

    thumbs.forEach(function (thumb) {
      thumb.addEventListener('click', function () {
        var idx = parseInt(thumb.getAttribute('data-index'));
        if (idx === currentIdx) return;
        currentIdx = idx;

        mainImg.classList.add('pdp-main-image--fading');
        setTimeout(function () {
          mainImg.src = product.images[idx];
          mainImg.classList.remove('pdp-main-image--fading');
        }, 200);

        thumbs.forEach(function (t) { t.classList.remove('pdp-thumb--active'); });
        thumb.classList.add('pdp-thumb--active');
      });
    });

    // Touch swipe on main image
    var mainWrap = container.querySelector('.pdp-gallery-main');
    var touchStartX = 0;

    if (mainWrap) {
      mainWrap.addEventListener('touchstart', function (e) {
        touchStartX = e.changedTouches[0].screenX;
      }, { passive: true });

      mainWrap.addEventListener('touchend', function (e) {
        var diff = e.changedTouches[0].screenX - touchStartX;
        if (Math.abs(diff) > 50) {
          if (diff < 0 && currentIdx < product.images.length - 1) {
            thumbs[currentIdx + 1].click();
          } else if (diff > 0 && currentIdx > 0) {
            thumbs[currentIdx - 1].click();
          }
        }
      }, { passive: true });
    }
  }

  // ===== PAYMENT VIEW =====
  function renderPayment(product) {
    currentProduct = product;

    viewEls.payment.innerHTML =
      '<div class="container payment-container">' +
        '<nav class="breadcrumb" aria-label="Navegação">' +
          '<a href="#" class="breadcrumb-link" data-nav="shop">Home</a>' +
          '<span class="breadcrumb-sep">/</span>' +
          '<a href="#" class="breadcrumb-link" data-nav="shop">Produtos</a>' +
          '<span class="breadcrumb-sep">/</span>' +
          '<span class="breadcrumb-current">Pagamento</span>' +
        '</nav>' +
        '<div class="payment-card">' +
          '<div class="payment-header">' +
            '<span class="section-label">Pagamento via Pix</span>' +
            '<h2 class="payment-title">' + product.name + '</h2>' +
            '<p class="payment-price">' + product.price + '</p>' +
          '</div>' +
          '<div class="payment-body" id="payment-body">' +
            '<div class="payment-qr">' +
              '<div class="payment-qr-frame">' +
                '<svg class="payment-qr-icon" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" stroke-width="1">' +
                  '<rect x="3" y="3" width="7" height="7" rx="1"/>' +
                  '<rect x="14" y="3" width="7" height="7" rx="1"/>' +
                  '<rect x="3" y="14" width="7" height="7" rx="1"/>' +
                  '<rect x="14" y="14" width="4" height="4" rx="1"/>' +
                  '<path d="M21 14v3a2 2 0 01-2 2h-3"/>' +
                '</svg>' +
                '<span class="payment-qr-label">QR Code Pix</span>' +
              '</div>' +
            '</div>' +
            '<div class="payment-pix-key">' +
              '<p class="payment-pix-label">Chave Pix</p>' +
              '<div class="payment-pix-row">' +
                '<code class="payment-pix-value">' + PIX_KEY + '</code>' +
                '<button class="btn payment-btn-copy" id="payment-copy">' +
                  '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg>' +
                  ' Copiar' +
                '</button>' +
              '</div>' +
            '</div>' +
            '<div class="payment-instruction">' +
              '<p>📲 <strong>Após o pagamento,</strong> envie o comprovante pelo ' +
                '<a href="https://wa.me/' + WHATSAPP_NUMBER + '" target="_blank" rel="noopener noreferrer">WhatsApp</a>' +
                ' para confirmar seu pedido.</p>' +
            '</div>' +
            '<button class="btn payment-btn-confirm" id="payment-confirm">✓ Já paguei</button>' +
          '</div>' +
          '<div class="payment-success" id="payment-success" style="display:none;">' +
            '<div class="payment-success-icon">' +
              '<svg viewBox="0 0 52 52" width="72" height="72"><circle cx="26" cy="26" r="24" fill="none" stroke="var(--success)" stroke-width="2" class="payment-check-circle"/><path d="M15 26l7 7 15-15" fill="none" stroke="var(--success)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="payment-check-mark"/></svg>' +
            '</div>' +
            '<h3 class="payment-success-title">Compra realizada com sucesso!</h3>' +
            '<p class="payment-success-text">Envie o comprovante pelo WhatsApp para confirmarmos seu pedido.</p>' +
            '<a href="https://wa.me/' + WHATSAPP_NUMBER + '" target="_blank" rel="noopener noreferrer" class="btn payment-btn-whatsapp">' +
              '<svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>' +
              ' Enviar comprovante' +
            '</a>' +
            '<button class="pdp-btn-back" data-nav="shop" style="margin-top:var(--space-lg);">← Voltar para loja</button>' +
          '</div>' +
          '<div class="payment-footer">' +
            '<button class="pdp-btn-back" data-nav="shop">← Voltar para loja</button>' +
          '</div>' +
        '</div>' +
      '</div>';

    // Bind events
    bindNavLinks(viewEls.payment);

    var copyBtn = document.getElementById('payment-copy');
    if (copyBtn) copyBtn.addEventListener('click', copyPixKey);

    var confirmBtn = document.getElementById('payment-confirm');
    if (confirmBtn) {
      confirmBtn.addEventListener('click', function () {
        document.getElementById('payment-body').style.display = 'none';
        document.querySelector('.payment-footer').style.display = 'none';
        var successEl = document.getElementById('payment-success');
        successEl.style.display = '';
        successEl.classList.add('payment-success--visible');
      });
    }
  }

  // ===== UTILITIES =====
  function bindNavLinks(container) {
    container.querySelectorAll('[data-nav="shop"]').forEach(function (el) {
      el.addEventListener('click', function (e) {
        e.preventDefault();
        navigateTo('shop');
      });
    });
  }

  function copyPixKey() {
    var btn = document.getElementById('payment-copy');
    navigator.clipboard.writeText(PIX_KEY).then(function () {
      btn.classList.add('copied');
      btn.innerHTML = '✓ Copiada!';
      showToast('Chave Pix copiada!');
      setTimeout(function () {
        btn.classList.remove('copied');
        btn.innerHTML = '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg> Copiar';
      }, 2000);
    }).catch(function () {
      var ta = document.createElement('textarea');
      ta.value = PIX_KEY;
      ta.style.cssText = 'position:fixed;opacity:0';
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      showToast('Chave Pix copiada!');
    });
  }

  function showToast(msg) {
    if (!toastEl) return;
    toastEl.textContent = msg;
    toastEl.classList.add('show');
    setTimeout(function () { toastEl.classList.remove('show'); }, 2500);
  }

  // ===== START =====
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
