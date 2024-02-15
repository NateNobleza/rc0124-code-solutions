'use strict';
function handleFocus(event) {
  console.log('focus');
  const eventTarget = event.target;
  console.log(eventTarget.name);
}
function handleBlur(event) {
  console.log('blur');
  const eventTarget = event.target;
  console.log(eventTarget.name);
}
function handleInput(event) {
  const eventTarget = event.target;
  console.log(eventTarget.name, eventTarget.value);
}
const $userName = document.querySelector('#user-name');
if (!$userName) throw new Error('The $userName query failed');
$userName.addEventListener('focus', handleFocus);
$userName.addEventListener('blur', handleBlur);
$userName.addEventListener('input', handleInput);
const $userEmail = document.querySelector('#user-email');
if (!$userEmail) throw new Error('The $userEmail query failed');
$userEmail.addEventListener('focus', handleFocus);
$userEmail.addEventListener('blur', handleBlur);
$userEmail.addEventListener('input', handleInput);
const $userMessage = document.querySelector('#user-message');
if (!$userMessage) throw new Error('The $userMessage query failed');
$userMessage.addEventListener('focus', handleFocus);
$userMessage.addEventListener('blur', handleBlur);
$userMessage.addEventListener('input', handleInput);
