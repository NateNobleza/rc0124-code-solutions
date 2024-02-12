document.querySelector('.click-button');
const $clickButton = document.querySelector('.click-button');
if (!$clickButton) throw new Error('The $clickButton query Failed');

function handleClick(event: any): any {
  console.log('button clicked');
  console.log(event);
  console.log(event.property);
}

$clickButton.addEventListener('click', handleClick);

document.querySelector('.hover-button');
const $hoverButton = document.querySelector('.hover-button');
if (!$hoverButton) throw new Error('The $hoverButton query Failed');

function handleMouseover(event: any): any {
  console.log('button hovered');
  console.log(event);
  console.log(event.property);
}

$hoverButton.addEventListener('mouseover', handleMouseover);

document.querySelector('.double-click-button');
const $doubleClickButton = document.querySelector('.double-click-button');
if (!$doubleClickButton) throw new Error('The $doubleClickButton query failed');

function handleDoubleClick(event: any): any {
  console.log('button double-clicked');
  console.log(event);
  console.log(event.property);
}

$doubleClickButton.addEventListener('dblclick', handleDoubleClick);
