/* Compressly — main.js
   Theme toggle + soft scroll-reveal animations. No dependencies. */

(function () {
  'use strict';

  /* Theme toggle ---------------------------------------------------------- */

  var root = document.documentElement;
  var toggle = document.getElementById('theme-toggle');

  function setTheme(theme) {
    if (theme === 'dark') {
      root.setAttribute('data-theme', 'dark');
    } else {
      root.removeAttribute('data-theme');
    }
    try {
      localStorage.setItem('theme', theme);
    } catch (e) {
      /* localStorage unavailable (private mode) — theme still applies for this page */
    }
  }

  if (toggle) {
    toggle.addEventListener('click', function () {
      var isDark = root.getAttribute('data-theme') === 'dark';
      setTheme(isDark ? 'light' : 'dark');
    });
  }

  // Follow OS theme changes when the user hasn't picked one explicitly
  var media = window.matchMedia('(prefers-color-scheme: dark)');
  var saved = null;
  try {
    saved = localStorage.getItem('theme');
  } catch (e) {}

  if (!saved && media.addEventListener) {
    media.addEventListener('change', function (e) {
      if (e.matches) {
        root.setAttribute('data-theme', 'dark');
      } else {
        root.removeAttribute('data-theme');
      }
    });
  }

  /* Scroll reveal ---------------------------------------------------------- */

  var revealEls = document.querySelectorAll('.reveal');
  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!('IntersectionObserver' in window) || reducedMotion) {
    revealEls.forEach(function (el) {
      el.classList.add('visible');
    });
    return;
  }

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  revealEls.forEach(function (el) {
    observer.observe(el);
  });
})();
