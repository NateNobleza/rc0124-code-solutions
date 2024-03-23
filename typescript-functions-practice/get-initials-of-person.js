"use strict";
function getInitialsOfPerson(person) {
    const firstInitial = person.firstName.charAt(0);
    const lastInitial = person.lastName.charAt(0);
    return `${firstInitial}${lastInitial}`;
}
