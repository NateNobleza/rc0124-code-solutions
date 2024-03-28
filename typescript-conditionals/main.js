"use strict";
function isUnderFive(number) {
    return number < 5;
}
console.log(isUnderFive(2));
function isEven(number) {
    return number % 2 === 0;
}
console.log(isEven(43));
function startsWithJ(string) {
    return string.charAt(0) === 'J';
}
console.log(startsWithJ('fave'));
function isOldEnoughToDrink(person) {
    return person.age >= 21;
}
const person = { name: 'John', age: 25 };
console.log(isOldEnoughToDrink(person)); // Output: true
function isOldEnoughToDrive(person) {
    return person.age >= 16;
}
console.log(isOldEnoughToDrive(person));
function isOldEnoughToDrinkAndDrive(person) {
    return false;
}
console.log(isOldEnoughToDrinkAndDrive(person));
function categorizeAcidity(pH) {
    if (pH === 7) {
        return 'neutral';
    }
    else if (pH > 0 && pH < 7) {
        return 'acid';
    }
    else if (pH >= 7 && pH < 14) {
        return 'base';
    }
    else {
        return 'invalid pH level';
    }
}
console.log(categorizeAcidity(9));
function introduceWarnerBro(name) {
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
console.log(introduceWarnerBro('yakko'));
function recommendMovie(genre) {
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
console.log(recommendMovie('horror'));
