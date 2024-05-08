"use strict";
function capitalize(word) {
    // Convert the word to lowercase
    const lowerCaseWord = word.toLowerCase();
    // Capitalize the first character
    const capitalizedWord = lowerCaseWord.charAt(0).toUpperCase() + lowerCaseWord.slice(1);
    return capitalizedWord;
}
