'use strict';
document.querySelector('.open-modal');
const $openModal = document.querySelector('.open-modal');
if (!$openModal) throw new Error('The $openModal query failed');
document.querySelector('.dismiss-modal');
const $dismissModal = document.querySelector('.dismiss-modal');
if (!$dismissModal) throw new Error('The $dismissModal query failed');
document.querySelector('dialog');
const $dialog = document.querySelector('dialog');
if (!$dialog) throw new Error('The $dialog query failed');
$openModal.addEventListener('click', () => {
  $dialog.showModal();
});
$dismissModal.addEventListener('click', () => {
  $dialog.close();
});
