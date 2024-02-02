'use strict';
/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            getKeys,
            getValues
 */
function getNumbersToTen() {
  let numbers = [];
  let currentNumber = 1;
  while (currentNumber < 10) {
    numbers.push(currentNumber);
    currentNumber++;
  }
  return numbers;
}
console.log(getNumbersToTen(), 'numbers');
function getEvenNumbersToTwenty() {
  let evenNumbers = [];
  let currentNumber = 2;
  while (currentNumber < 20) {
    evenNumbers.push(currentNumber);
    currentNumber += 2;
  }
  return evenNumbers;
}
console.log(getEvenNumbersToTwenty());
function repeatWord(word, time) {
  let count = 1;
  let repeated = '';
  while (count < 10) {
    repeated += word;
    count++;
  }
  return repeated;
}
console.log(repeatWord('hi', 6));
function logEachCharacter(string) {
  for (let i = 0; i < string.length; i++) {
    console.log(string[i]);
  }
}
console.log(logEachCharacter('nate'));
function doubleAll(numbers) {
  let doubled = [];
  for (let i = 0; i < numbers.length; i++) {
    doubled.push(numbers[i] * 2);
  }
  return doubled;
}
console.log(doubleAll([1, 4, 5, 6, 7]));
let idk = {
  name: 'nate',
  age: '28',
  hobby: 'keyboards',
};
function getKeys(object) {
  let keys = [];
  for (let key in object) {
    keys.push(key);
  }
  return keys;
}
console.log(getKeys(idk));
function getValues(object) {
  let values = [];
  for (let key in object) {
    values.push(object[key]);
  }
  return values;
}
console.log(getValues(idk));
