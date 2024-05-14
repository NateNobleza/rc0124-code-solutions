"use strict";
/* exported capitalizeWord */
function capitalizeWords(string) {
    // Split the string into an array of words
    const words = string.split(' ');
    // Capitalize each word
    const capitalizedWords = words.map((word) => {
        // Capitalize the first letter of each word and lowercase the rest
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });
    // Join the capitalized words back into a single string
    return capitalizedWords.join(' ');
}
