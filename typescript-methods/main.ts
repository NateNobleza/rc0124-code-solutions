const heroes: string[] = ['Batman', 'Superman', 'Wonder Woman', 'Spider-Man'];

const randomNumber: number = Math.random();
const randomIndex: number = Math.floor(randomNumber * heroes.length);

console.log('Random Index:', randomIndex);

const randomHero: string = heroes[randomIndex];
console.log('Random Hero:', randomHero);


interface Book {
  title: string;
  author: string;
}

const library: Book[] = [
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
  { title: 'To Kill a Mockingbird', author: 'Harper Lee' },
  { title: '1984', author: 'George Orwell' },
];

const lastBook: Book = library.pop();
console.log('Last Book:', lastBook);

const firstBook: Book = library.shift();
console.log('First Book:', firstBook);

const js: Book = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer',
};

const css: Book = {
  title: 'CSS Secrets',
  author: 'Lea Verou',
};

library.push(js);
library.unshift(css);

library.splice(1, 1);

console.log('Updated Library:', library);


const fullName: string = 'John Doe';
const firstAndLastName: string[] = fullName.split(' ');

console.log('First and Last Name:', firstAndLastName);

const firstName: string = firstAndLastName[0];
const sayMyName: string = firstName.toUpperCase();

console.log('Say My Name:', sayMyName);


const employee = {
  name: 'John Doe',
  age: 30,
  position: 'Software Engineer',
};

const employeeKeys: string[] = Object.keys(employee);
console.log('Employee Keys:', employeeKeys);

const employeeValues: any[] = Object.values(employee);
console.log('Employee Values:', employeeValues);

const employeePairs: [string, any][] = Object.entries(employee);
console.log('Employee Pairs:', employeePairs);
