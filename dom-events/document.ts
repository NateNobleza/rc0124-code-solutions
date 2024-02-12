document.addEventListener('DOMContentLoaded', function (event: Event) {
  console.log(event);
  console.log('document loaded');
});

document.addEventListener('keydown', function (event: KeyboardEvent) {
  console.log('key pressed');
  console.log('  event.key:', event.key);
});

document.addEventListener('mousemove', function (event: MouseEvent) {
  console.log('mouse moved');
  console.log('  pageX:', event.pageX, 'pageY:', event.pageY);
});
