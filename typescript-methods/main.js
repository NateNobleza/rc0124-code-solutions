"use strict";
const heroes = ['Batman', 'Superman', 'Wonder Woman', 'Spider-Man'];
const randomNumber = Math.random();
const randomIndex = Math.floor(randomNumber * heroes.length);
console.log('Random Index:', randomIndex);
const randomHero = heroes[randomIndex];
console.log('Random Hero:', randomHero);
const library = [
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee' },
    { title: '1984', author: 'George Orwell' },
];
const lastBook = library.pop();
console.log('Last Book:', lastBook);
const firstBook = library.shift();
console.log('First Book:', firstBook);
const js = {
    title: 'JavaScript for Impatient Programmers',
    author: 'Dr. Axel Rauschmayer',
};
const css = {
    title: 'CSS Secrets',
    author: 'Lea Verou',
};
library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('Updated Library:', library);
const fullName = 'John Doe';
const firstAndLastName = fullName.split(' ');
console.log('First and Last Name:', firstAndLastName);
const firstName = firstAndLastName[0];
const sayMyName = firstName.toUpperCase();
console.log('Say My Name:', sayMyName);
const employee = {
    name: 'John Doe',
    age: 30,
    position: 'Software Engineer',
};
const employeeKeys = Object.keys(employee);
console.log('Employee Keys:', employeeKeys);
const employeeValues = Object.values(employee);
console.log('Employee Values:', employeeValues);
const employeePairs = Object.entries(employee);
console.log('Employee Pairs:', employeePairs);
