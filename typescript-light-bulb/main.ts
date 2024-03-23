let isOn = true;

const $ceiling = document.querySelector('.ceiling');
const $bulb = document.querySelector('.bulb');

if (!$ceiling) throw new Error('$ceiling does not exist');
if (!$bulb) throw new Error('$bulb does not exist');

$bulb.addEventListener('click', (event: Event) => {
  isOn = !isOn;
  if (isOn) {
    $ceiling.className = 'ceiling is-lit';
    $bulb.className = 'bulb is-on';
  } else {
    $ceiling.className = 'ceiling';
    $bulb.className = 'bulb';
  }
});
