function convertMinutesToSeconds(minutes: number): number {
  const seconds: number = minutes * 60;
  return seconds;
}
console.log('thats a lot of seconds:', convertMinutesToSeconds(5));

function greet(name: string): string {
  const hello: any = `hi there ${name}`;
  return hello;
}
console.log(greet('nate'));

const getArea: any = (width: number, height: number): number => width * height;
console.log(getArea(6, 98));

const person: any = (firstName: string, lastName: string): string =>
  `${firstName} ${lastName}`;
console.log(person('Nate', 'Nobleza'));

// let getLast: number = (numbers: number[]): number => {
// let lastIndex: number = numbers.length - 1
// return numbers[lastIndex]
// }

function callOtherFunctions(otherFunction: any, params: unknown): any {
  return otherFunction(params);
}
const callOtherFunctionsResult: number = callOtherFunctions(greet, 'nate');
console.log(callOtherFunctionsResult);
