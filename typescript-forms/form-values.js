'use strict';
const $contactForm = document.querySelector('#contact-form');
function submitListener(event) {
  event.preventDefault();
  const $formElements = $contactForm.elements;
  const $formData = {
    name: $formElements.name.value,
    email: $formElements.email.value,
    message: $formElements.message.value,
  };
  console.log($formData);
  $contactForm.reset();
}
$contactForm.addEventListener('submit', submitListener);
