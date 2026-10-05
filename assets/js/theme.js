/* Light/dark theme toggle.
 *
 * The site is light by default and deliberately ignores the OS
 * prefers-color-scheme setting: dark mode applies only when the visitor asks
 * for it. The choice is stored in localStorage and re-applied on load by a
 * small inline script in <head> (so there is no flash of the wrong theme).
 */
(function () {
  'use strict';

  var STORAGE_KEY = 'theme';
  var root = document.documentElement;

  function current() {
    return root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
  }

  function favicons() {
    return {
      light: root.getAttribute('data-favicon-light'),
      dark: root.getAttribute('data-favicon-dark')
    };
  }

  function applyFavicon(theme) {
    var icons = favicons();
    var href = theme === 'dark' ? icons.dark : icons.light;
    if (!href) { return; }

    var link = document.querySelector('link[rel="icon"]');
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'icon');
      link.setAttribute('type', 'image/png');
      document.head.appendChild(link);
    }
    link.setAttribute('href', href);
  }

  function apply(theme, persist) {
    if (theme === 'dark') {
      root.setAttribute('data-theme', 'dark');
    } else {
      root.removeAttribute('data-theme');
    }
    root.style.colorScheme = theme;
    applyFavicon(theme);

    if (persist) {
      try { localStorage.setItem(STORAGE_KEY, theme); } catch (e) { /* private mode */ }
    }

    var button = document.querySelector('.theme-toggle');
    if (button) {
      var next = theme === 'dark' ? 'light' : 'dark';
      button.setAttribute('aria-pressed', theme === 'dark' ? 'true' : 'false');
      button.setAttribute('title', 'Switch to ' + next + ' mode');
      button.setAttribute('aria-label', 'Switch to ' + next + ' mode');
    }
  }

  function init() {
    var button = document.querySelector('.theme-toggle');
    if (!button) { return; }

    button.removeAttribute('hidden');
    apply(current(), false);

    button.addEventListener('click', function () {
      apply(current() === 'dark' ? 'light' : 'dark', true);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
