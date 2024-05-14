"use strict";
/* exported capitalizeWords */
function capitalizeWord(word) {
    // If the word is empty, return it as is
    if (word.length === 0) {
        return word;
    }
    // If the word is 'JavaScript', return it as 'JavaScript'
    if (word.toLowerCase() === 'javascript') {
        return 'JavaScript';
    }
    // Capitalize the first letter and lowercase the rest
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}
