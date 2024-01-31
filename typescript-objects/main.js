'use strict';
let student = {
  firstName: 'Nathaniel',
  lastName: 'Nobleza',
  age: 28,
};
console.log(student);
let fullName = ` ${student.firstName} ${student.lastName}`;
console.log('fullname:', fullName);
student.livesInIrvine = false;
console.log('Lives in Irvine:', student.livesInIrvine);
student.previousOccupation = 'dental assisstant';
console.log('Previous Occupation:', student.previousOccupation);
let vehicle = {
  make: 'Subaru',
  model: 'WRX Sti',
  year: 2014,
};
console.log(vehicle);
vehicle['color'] = 'blue';
console.log('vehicle color:', vehicle['color']);
vehicle['isConvertable'] = false;
console.log('Is Convertable:', vehicle['isConvertable']);
let pet = {
  name: 'Milo',
  kind: false,
};
delete pet.name;
delete pet.kind;
console.log('my pet:', pet);
