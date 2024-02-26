'use strict';
// let count = 4;
//  const $newMessage = document.querySelector('.countdown-display');
//   function timer(): void {
//     console.log ('timer fires')
//     if (!$newMessage) throw new Error('$newMessage query failed');
//     count--;
//     if(count > 0){
//     $newMessage.textContent = count.toString();
//     } else {
//       $newMessage.textContent = 'earth below u'
//       clearInterval(countdown);
//     }
// }
// const countdown = setInterval(timer, 2000)
let count = 4;
const timer = setInterval(() => {
  console.log('timer fires');
  const $newMessage = document.querySelector('.countdown-display');
  if (!$newMessage) throw new Error('$newMessage query failed');
  $newMessage.textContent = count.toString();
  count--;
  if (count > 0) {
    $newMessage.textContent = count.toString();
  } else {
    $newMessage.textContent = 'Earth below u';
    clearInterval(timer);
  }
}, 2000);
