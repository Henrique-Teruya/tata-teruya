// ============================================
// 🧶 Tatá Teruya — Bolsas de Crochê
// Main JavaScript — Premium Edition
// ============================================

(function () {
  'use strict';

  // ---------- CONFIG ----------
  const PIX_KEY = 'sua-chave-pix@email.com';
  const WHATSAPP_NUMBER = '5511998387082';
  const QR_CODE_IMAGE = 'img/qrcode-pix.png';

  // ---------- DOM ELEMENTS ----------
  const modalOverlay = document.getElementById('pix-modal');
  const modalProductName = document.getElementById('modal-product-name');
  const modalProductPrice = document.getElementById('modal-product-price');
  const modalClose = document.getElementById('modal-close');
  const btnCopy = document.getElementById('btn-copy-pix');
  const pixKeyValue = document.getElementById('pix-key-value');
  const toast = document.getElementById('toast');
  const header = document.querySelector('.site-header');
  const heroSection = document.querySelector('.hero-landing');
  const btnCta = document.getElementById('btn-cta');
  // Hamburger drawer
  const hamburger = document.getElementById('hamburger');
  const navDrawer = document.getElementById('nav-drawer');
  const navDrawerOverlay = document.getElementById('nav-drawer-overlay');
  const navDrawerClose = document.getElementById('nav-drawer-close');

  // ---------- INIT ----------
  function init() {
    if (pixKeyValue) pixKeyValue.textContent = PIX_KEY;

    var qrImg = document.getElementById('qr-code-img');
    if (qrImg) qrImg.src = QR_CODE_IMAGE;

    document.querySelectorAll('[data-whatsapp]').forEach(function (el) {
      el.href = 'https://wa.me/' + WHATSAPP_NUMBER;
      el.target = '_blank';
      el.rel = 'noopener noreferrer';
    });

    bindEvents();
    initScrollReveal();
    initCarousel();

    // Initial header state
    if (header && !heroSection) {
      header.classList.add('scrolled');
    }
  }

  // ---------- EVENTS ----------
  function bindEvents() {
    // Pix buttons
    document.querySelectorAll('.btn-pix').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var card = btn.closest('.product-card');
        var name = card.querySelector('.product-name').textContent;
        var price = card.querySelector('.product-price').textContent;
        openModal(name, price);
      });
    });

    // Close modal
    if (modalClose) modalClose.addEventListener('click', closeModal);
    if (modalOverlay) {
      modalOverlay.addEventListener('click', function (e) {
        if (e.target === modalOverlay) closeModal();
      });
    }
    // (Escape is handled globally below alongside drawer)

    // Copy Pix key
    if (btnCopy) btnCopy.addEventListener('click', copyPixKey);

    // Header scroll effect + hero visibility
    window.addEventListener('scroll', function () {
      if (header) {
        if (heroSection) {
          const heroBottom = heroSection.getBoundingClientRect().bottom;
          header.classList.toggle('scrolled', heroBottom <= 60);
        } else {
          header.classList.add('scrolled');
        }
      }
    }, { passive: true });

    // CTA button → scroll to lookbook
    if (btnCta) {
      btnCta.addEventListener('click', function () {
        scrollToSection('lookbook');
      });
    }

    // Hamburger toggle
    if (hamburger) hamburger.addEventListener('click', openDrawer);
    if (navDrawerClose) navDrawerClose.addEventListener('click', closeDrawer);
    if (navDrawerOverlay) navDrawerOverlay.addEventListener('click', closeDrawer);

    // Drawer links — scroll + close
    if (navDrawer) {
      navDrawer.querySelectorAll('.nav-drawer-link').forEach(function (link) {
        link.addEventListener('click', function (e) {
          var href = link.getAttribute('href');
          var targetId = link.getAttribute('data-section');
          var targetEl = document.getElementById(targetId);

          if (targetEl) {
            e.preventDefault();
            closeDrawer();
            setTimeout(function () { scrollToSection(targetId); }, 320);
          } else {
            // Se o elemento não existe aqui, deixa o link seguir (ex: ir para index.html#lookbook de outra página)
            closeDrawer();
          }
        });
      });
    }

    // Close drawer on Escape
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        closeDrawer();
        closeModal();
      }
    });
  }

  // ---------- SCROLL TO SECTION ----------
  function scrollToSection(id) {
    var el = document.getElementById(id);
    if (!el) return;
    var offset = 20;
    var top = el.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top: top, behavior: 'smooth' });
  }

  // ---------- SCROLL REVEAL ----------
  function initScrollReveal() {
    var elements = document.querySelectorAll('.reveal-on-scroll');
    if (!elements.length) return;

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    elements.forEach(function (el) { observer.observe(el); });
  }

  // ---------- CAROUSEL ----------
  function initCarousel() {
    const carousel = document.querySelector('.lookbook-carousel');
    if (!carousel) return;

    const track = carousel.querySelector('.carousel-track');
    const slides = Array.from(track.children);
    const nextButton = carousel.querySelector('.carousel-next');
    const prevButton = carousel.querySelector('.carousel-prev');
    const dotsNav = carousel.querySelector('.carousel-dots');

    if (!track || !nextButton || !prevButton || !dotsNav) return;

    let currentIndex = 0;
    let interval;

    // Create dots
    slides.forEach((_, index) => {
      const dot = document.createElement('button');
      dot.classList.add('carousel-dot');
      if (index === 0) dot.classList.add('active');
      dot.setAttribute('aria-label', `Ver slide ${index + 1}`);
      dotsNav.appendChild(dot);
    });

    const dots = Array.from(dotsNav.children);

    const updateCarousel = (index) => {
      track.style.transform = `translateX(-${index * 100}%)`;
      dots.forEach(dot => dot.classList.remove('active'));
      dots[index].classList.add('active');
      currentIndex = index;
    };

    const nextSlide = () => {
      const nextIndex = (currentIndex + 1) % slides.length;
      updateCarousel(nextIndex);
    };

    const prevSlide = () => {
      const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
      updateCarousel(prevIndex);
    };

    nextButton.addEventListener('click', () => {
      nextSlide();
      resetInterval();
    });

    prevButton.addEventListener('click', () => {
      prevSlide();
      resetInterval();
    });

    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        updateCarousel(index);
        resetInterval();
      });
    });

    function startInterval() {
      interval = setInterval(nextSlide, 5000);
    }

    function resetInterval() {
      clearInterval(interval);
      startInterval();
    }

    startInterval();

    carousel.addEventListener('mouseenter', () => clearInterval(interval));
    carousel.addEventListener('mouseleave', startInterval);

    // Touch support (simple swipe)
    let touchStartX = 0;
    let touchEndX = 0;

    carousel.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    carousel.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    }, { passive: true });

    function handleSwipe() {
      const swipeThreshold = 50;
      if (touchEndX < touchStartX - swipeThreshold) {
        nextSlide();
        resetInterval();
      }
      if (touchEndX > touchStartX + swipeThreshold) {
        prevSlide();
        resetInterval();
      }
    }
  }


  // ---------- MODAL ----------
  function openModal(name, price) {
    if (modalProductName) modalProductName.textContent = name;
    if (modalProductPrice) modalProductPrice.textContent = price;
    if (modalOverlay) {
      modalOverlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeModal() {
    if (modalOverlay) {
      modalOverlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  // ---------- HAMBURGER DRAWER ----------
  function openDrawer() {
    if (!navDrawer) return;
    navDrawer.classList.add('active');
    navDrawerOverlay.classList.add('active');
    hamburger.classList.add('open');
    hamburger.setAttribute('aria-expanded', 'true');
    navDrawer.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    if (!navDrawer) return;
    navDrawer.classList.remove('active');
    navDrawerOverlay.classList.remove('active');
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    navDrawer.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }


  function copyPixKey() {
    navigator.clipboard.writeText(PIX_KEY).then(function () {
      btnCopy.classList.add('copied');
      btnCopy.innerHTML = '✓ Copiada!';
      showToast('Chave Pix copiada!');
      setTimeout(function () {
        btnCopy.classList.remove('copied');
        btnCopy.innerHTML = '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg> Copiar';
      }, 2000);
    }).catch(function () {
      var textarea = document.createElement('textarea');
      textarea.value = PIX_KEY;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      showToast('Chave Pix copiada!');
    });
  }

  // ---------- TOAST ----------
  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(function () {
      toast.classList.remove('show');
    }, 2500);
  }

  // ---------- START ----------
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
