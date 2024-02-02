'use strict';
function convertMinutesToSeconds(minutes) {
  const seconds = minutes * 60;
  return seconds;
}
console.log('thats a lot of seconds:', convertMinutesToSeconds(5));
function greet(name) {
  const hello = `hi there ${name}`;
  return hello;
}
console.log(greet('nate'));
let getArea = (width, height) => width * height;
console.log(getArea(6, 98));
let person = (firstName, lastName) => `${firstName} ${lastName}`;
console.log(person('Nate', 'Nobleza'));
let getLast = [1, 2, 3, 4],
  any;
getLast;
console.log(getLast.length - 1);
function callOtherFunctions(otherFunction, params) {
  return otherFunction(params);
}
const callOtherFunctionsResult = callOtherFunctions(greet, 'nate');
console.log(callOtherFunctionsResult);
