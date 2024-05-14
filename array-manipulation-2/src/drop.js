"use strict";
/* exported drop */
function dropRight(array, count) {
    // If count is greater than or equal to the length of the array, return an empty array
    if (count >= array.length) {
        return [];
    }
    // Return a new array containing the elements before the last count elements
    return array.slice(0, array.length - count);
}
