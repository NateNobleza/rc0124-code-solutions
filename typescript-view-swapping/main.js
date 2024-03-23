'use strict';
const $tabContainer = document.querySelector('.tab-container');
const $tabs = document.querySelectorAll('.tab');
const $views = document.querySelectorAll('.view');
if (!$tabContainer) throw new Error('$tabContainer query failed');
$tabContainer.addEventListener('click', (event) => {
  const $eventTarget = event.target;
  if (!$eventTarget.matches('.tab')) {
    return;
  }
  for (let tabIndex = 0; tabIndex < $tabs.length; tabIndex++) {
    if ($tabs[tabIndex] === $eventTarget) {
      $tabs[tabIndex].className = 'tab active';
    } else {
      $tabs[tabIndex].className = 'tab';
    }
  }
  const $viewName = $eventTarget.dataset.view;
  for (let viewIndex = 0; viewIndex < $views.length; viewIndex++) {
    if ($views[viewIndex].getAttribute('data-view') !== $viewName) {
      $views[viewIndex].className = 'view hidden';
    } else {
      $views[viewIndex].className = 'view';
    }
  }
});
