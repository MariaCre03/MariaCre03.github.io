/* Collapse the news list to its most recent entries.
 *
 * Progressive enhancement: without JS every item stays visible and there is no
 * button, so the full list is always in the markup for search engines and for
 * readers with scripting disabled. The list is collapsed only once the script
 * runs, and the button reports how many entries are hidden.
 */
(function () {
  'use strict';

  function setup(list) {
    var limit = parseInt(list.getAttribute('data-news-limit'), 10);
    if (!limit || limit < 1) { return; }

    var items = Array.prototype.slice.call(list.querySelectorAll('.news-item'));
    var extra = items.slice(limit);
    if (!extra.length) { return; }

    var button = document.createElement('button');
    button.type = 'button';
    button.className = 'news-toggle';
    button.setAttribute('aria-expanded', 'false');
    if (list.id === '') { list.id = 'news-list'; }
    button.setAttribute('aria-controls', list.id);

    function render(expanded) {
      extra.forEach(function (item) {
        if (expanded) {
          item.removeAttribute('hidden');
        } else {
          item.setAttribute('hidden', '');
        }
      });
      button.setAttribute('aria-expanded', expanded ? 'true' : 'false');
      button.textContent = expanded ? 'Show less' : 'Show ' + extra.length + ' more';
    }

    render(false);
    list.parentNode.insertBefore(button, list.nextSibling);

    button.addEventListener('click', function () {
      var expanded = button.getAttribute('aria-expanded') === 'true';
      render(!expanded);
      if (expanded) {
        // Collapsing can leave the viewport below the list; bring it back into view.
        var top = list.getBoundingClientRect().top;
        if (top < 0) { list.scrollIntoView({ block: 'start' }); }
      }
    });
  }

  function init() {
    var lists = document.querySelectorAll('.news-list[data-news-limit]');
    Array.prototype.forEach.call(lists, setup);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
