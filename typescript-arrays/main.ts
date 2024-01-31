const color: string[] = ['red', 'white', 'blue'];
color[0] = 'red';
color[1] = 'white';
color[2] = 'blue';
console.log(color[0]);
console.log(color[1]);
console.log(color[2]);
console.log('America is' + ' ' + color[0], color[1] + ' ' + 'and', color[2]);
color[2] = 'green';
console.log('Mexico is' + ' ' + color[0], color[1] + ' ' + color[2]);
console.log(color);

const students = ['Mathew', 'Mark', 'John', 'Luke'];
const numberOfStudents = students.length;
console.log('there are' + ' ' + numberOfStudents + ' ' + 'students');
const lastIndex = numberOfStudents - 1;
const lastStudent = students[lastIndex];
console.log('the last student in the array' + ' ' + lastStudent);
console.log(students);
