'use strict';
const values = [10, 1, 22, 23, 41, 5, 18, 7, 80, 9];
values.forEach((num) => console.log(num));
for (let i = values.length - 1; i >= 0; i--) {
  console.log('reverse', values[i]);
}
