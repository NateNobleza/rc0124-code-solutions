"use strict";
// Selects the container element that holds all the tabs.
const $tabContainer = document.querySelector('.tab-container');
// Selects all individual tab elements.
const $tabs = document.querySelectorAll('.tab');
// Selects all view elements that correspond to each tab.
const $views = document.querySelectorAll('.view');
// Checks if the tab container exists to prevent errors in the following code.
if (!$tabContainer)
    throw new Error('$tabContainer query failed');
// Adds an event listener to the tab container for click events.
$tabContainer.addEventListener('click', (event) => {
    // Casts the event target to an HTMLDivElement to ensure type safety.
    const $eventTarget = event.target;
    // Checks if the clicked element is not a tab and exits the function if true.
    if (!$eventTarget.matches('.tab')) {
        return;
    }
    // Loops through all tabs to update their active status based on the clicked tab.
    for (let tabIndex = 0; tabIndex < $tabs.length; tabIndex++) {
        // If the current tab in the loop is the clicked tab, it sets it as active.
        if ($tabs[tabIndex] === $eventTarget) {
            $tabs[tabIndex].className = 'tab active';
        }
        else {
            // Otherwise, it removes the active class, making the tab inactive.
            $tabs[tabIndex].className = 'tab';
        }
    }
    // Retrieves the name of the view associated with the clicked tab.
    const $viewName = $eventTarget.dataset.view;
    // Loops through all views to show or hide them based on the clicked tab.
    for (let viewIndex = 0; viewIndex < $views.length; viewIndex++) {
        // If the current view's data-view attribute does not match the clicked tab's view, it hides the view.
        if ($views[viewIndex].getAttribute('data-view') !== $viewName) {
            $views[viewIndex].className = 'view hidden';
        }
        else {
            // If it matches, it removes the hidden class, making the view visible.
            $views[viewIndex].className = 'view';
        }
    }
});
