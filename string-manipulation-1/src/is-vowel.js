"use strict";
/* exported isVowel */
function isVowel(char) {
    const lowerCaseChar = char.toLocaleLowerCase();
    return lowerCaseChar === 'a' || lowerCaseChar === 'e' || lowerCaseChar === 'i' || lowerCaseChar === 'o' || lowerCaseChar === 'u';
}
