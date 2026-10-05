/* Prev/next buttons for the "More publications" carousel.
 *
 * Progressive enhancement: the carousel is a native horizontal scroller and
 * the <details> expander needs no script, so everything works without JS.
 * This script only reveals the arrow buttons (kept `hidden` in the markup)
 * and keeps their disabled state in sync with the scroll position.
 */
(function () {
  'use strict';

  function setup(wrap) {
    var track = wrap.querySelector('.pub-carousel');
    var prev = wrap.querySelector('.pub-carousel-nav--prev');
    var next = wrap.querySelector('.pub-carousel-nav--next');
    if (!track || !prev || !next) { return; }

    function step() {
      var card = track.querySelector('.pub-card');
      return card ? card.getBoundingClientRect().width + 14 : track.clientWidth;
    }

    function sync() {
      var max = track.scrollWidth - track.clientWidth;
      prev.disabled = track.scrollLeft <= 1;
      next.disabled = track.scrollLeft >= max - 1;
      // Nothing to scroll (few cards / wide screen): keep the buttons hidden.
      var useless = max <= 1;
      prev.hidden = useless;
      next.hidden = useless;
    }

    prev.addEventListener('click', function () {
      track.scrollBy({ left: -step(), behavior: 'smooth' });
    });
    next.addEventListener('click', function () {
      track.scrollBy({ left: step(), behavior: 'smooth' });
    });
    track.addEventListener('scroll', sync, { passive: true });
    window.addEventListener('resize', sync);

    sync();
  }

  function init() {
    var wraps = document.querySelectorAll('.pub-carousel-wrap');
    Array.prototype.forEach.call(wraps, setup);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
