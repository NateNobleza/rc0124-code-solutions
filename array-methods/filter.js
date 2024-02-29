'use strict';
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const names = [
  'Ada',
  'Hedy',
  'Jean',
  'Grace',
  'Evelyn',
  'Joan',
  'Elizabeth',
  'Janese',
  'Donna',
];
const even = numbers.filter((number) => number % 2 === 0);
console.log('Evens');
console.log(even);
const filteredNames = names.filter((name) => !name.toLowerCase().includes('d'));
console.log('names without D or d');
console.log(filteredNames);
