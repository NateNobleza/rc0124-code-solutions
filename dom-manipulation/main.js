'use strict';
document.querySelector('.hot-button');
const $hotButton = document.querySelector('.hot-button');
document.querySelector('.click-count');
const $clickCount = document.querySelector('.click-count');
if (!$hotButton) throw new Error('The $hotButton query failed');
let numberOfClicks = 0;
$hotButton.addEventListener('click', function () {
  numberOfClicks++;
  if (!$hotButton || !$clickCount)
    throw new Error('The $hotButton or $clickCount query failed');
  $clickCount.textContent = 'Clicks:' + numberOfClicks;
  $hotButton.className = 'Hot Button';
  if (numberOfClicks < 4) {
    $hotButton.className = 'hot-button cold';
  } else if (numberOfClicks < 7) {
    $hotButton.className = 'hot-button cool';
  } else if (numberOfClicks < 10) {
    $hotButton.className = 'hot-button tepid';
  } else if (numberOfClicks < 13) {
    $hotButton.className = 'hot-button warm';
  } else if (numberOfClicks < 16) {
    $hotButton.className = 'hot-button hot';
  } else {
    $hotButton.className = 'hot-button nuclear';
  }
});
