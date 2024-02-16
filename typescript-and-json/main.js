'use strict';
const $books = [
  {
    isbn: '0000',
    title: 'Hello World',
    author: 'Good Morning America',
  },
  {
    isbn: '1111',
    title: 'Goodbye World',
    author: 'Good Night America',
  },
  {
    isbn: '2222',
    title: 'Hello Again World',
    author: 'Good Evening America',
  },
];
console.log(typeof $books);
console.log($books);
const $booksJSON = JSON.stringify($books);
console.log(typeof $booksJSON);
console.log($booksJSON);
const $student = '{"ID": "12345", "name": "Nate"}';
console.log(typeof $student);
console.log($student);
const $studentJSON = JSON.parse($student);
console.log(typeof $studentJSON);
console.log($studentJSON);
