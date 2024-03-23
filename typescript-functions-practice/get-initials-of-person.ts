/* exported getInitialsOfPerson */
interface Person {
  firstName: string;
  lastName: string;
}

function getInitialsOfPerson(person: Person): string {
  const firstInitial = person.firstName.charAt(0);
  const lastInitial = person.lastName.charAt(0);
  return `${firstInitial}${lastInitial}`;
}
