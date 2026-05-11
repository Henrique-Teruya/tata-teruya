// ============================================
// 🧶 Tatá Teruya — Bolsas de Crochê
// Main JavaScript — Premium Edition
// ============================================

(function () {
  'use strict';

  // ---------- CONFIG ----------
  const WHATSAPP_NUMBER = '5511998387082';

  // ---------- DOM ELEMENTS ----------
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
    document.querySelectorAll('[data-whatsapp]').forEach(function (el) {
      const msg = encodeURIComponent("Olá! Conheci o trabalho da Tatá Teruya Atelier e gostaria de saber mais sobre as bolsas artesanais.");
      el.href = 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + msg;
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
          var targetId = link.getAttribute('data-section');
          var targetEl = document.getElementById(targetId);

          if (targetEl) {
            e.preventDefault();
            closeDrawer();
            setTimeout(function () { scrollToSection(targetId); }, 320);
          } else {
            closeDrawer();
          }
        });
      });
    }

    // Close drawer on Escape
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        closeDrawer();
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
