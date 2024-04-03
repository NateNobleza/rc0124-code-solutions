
function isUnderFive(number: number): boolean {
  return number < 5;

}
 console.log(isUnderFive(2));

function isEven(number: number): boolean {
  return number % 2 === 0;
}
console.log(isEven(43))

function startsWithJ(string: string): boolean {
  return string.charAt(0) === 'J';
}
console.log(startsWithJ('fave'))

interface Person {
  name: string;
  age: number;
}

interface Person {
    name: string;
    age: number;
}

function isOldEnoughToDrink(person: Person): boolean {
    return person.age >= 21;
}

const person: Person = { name: 'John', age: 25 };
console.log(isOldEnoughToDrink(person)); // Output: true

function isOldEnoughToDrive(person: Person): boolean {
  return person.age >= 16;
}
console.log(isOldEnoughToDrive(person))


function isOldEnoughToDrinkAndDrive(person: Person): boolean {
  return false;
}
console.log(isOldEnoughToDrinkAndDrive(person))

function categorizeAcidity(pH: number): string {
  if (pH === 7) {
    return 'neutral';
  } else if (pH > 0 && pH < 7) {
    return 'acid';
  } else if (pH >= 7 && pH < 14) {
    return 'base';
  } else {
    return 'invalid pH level';
  }
}
console.log(categorizeAcidity(9))

function introduceWarnerBro(name: string): string {
  switch (name) {
    case 'yakko':
    case 'wakko':
      return "We're the warner brothers!";
    case 'dot':
      return "I'm cute~";
    default:
      return 'Goodnight everybody!';
  }
}
console.log(introduceWarnerBro('yakko'))

function recommendMovie(genre: string): string {
  switch (genre) {
    case 'action':
      return 'Die Hard';
    case 'comedy':
      return 'The Big Lebowski';
    case 'horror':
      return 'The Shining';
    case 'drama':
      return 'The Shawshank Redemption';
    case 'musical':
      return 'The Sound of Music';
    case 'sci-fi':
      return 'Blade Runner';
    default:
      return 'Genre not recognized. Choose between action, comedy, horror, drama, musical, or sci-fi';
  }
}
console.log(recommendMovie('horror'))
