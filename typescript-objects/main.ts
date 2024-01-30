interface StudentProps {
  firstName: string;
  lastName: string;
  age: number;
  livesInIrvine?: boolean;
  previousOccupation?: string;
}

interface Vehicle {
  make: string;
  model: string;
  year: number;
  color?: string;
  isConvertable?: boolean;
}

interface Pet {
  name: string;
  kind: boolean;
}

const student: StudentProps = {
  firstName: 'Nathaniel',
  lastName: 'Nobleza',
  age: 28,
};
console.log(student);

const fullName = ` ${student.firstName} ${student.lastName}`;
console.log('fullname:', fullName);

student.livesInIrvine = false;
console.log('Lives in Irvine:', student.livesInIrvine);

student.previousOccupation = 'dental assisstant';
console.log('Previous Occupation:', student.previousOccupation);

const vehicle: Vehicle = {
  make: 'Subaru',
  model: 'WRX Sti',
  year: 2014,
};
console.log(vehicle);

vehicle.color = 'blue';
console.log('vehicle color:', vehicle.color);

vehicle.isConvertable = false;
console.log('Is Convertable:', vehicle.isConvertable);

const pet: Pet = {
  name: 'Milo',
  kind: false,
};
delete pet.name;
delete pet.kind;
console.log('my pet:', pet);
