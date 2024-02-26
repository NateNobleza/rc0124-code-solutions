'use strict';
setTimeout(() => {
  const $newHeading = document.querySelector('.message');
  if (!$newHeading) throw new Error('the $newHeading query failed');
  $newHeading.textContent = 'Hello World';
}, 2000);
