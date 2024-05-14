"use strict";
/* exported dropRight */
function drop(array, count) {
    // Check if count is greater than or equal to the length of the array
    if (count >= array.length) {
        // Return an empty array
        return [];
    }
    // Return a new array containing the elements after the first count elements
    return array.slice(count);
}
