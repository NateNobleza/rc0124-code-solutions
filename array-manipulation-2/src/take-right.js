"use strict";
/* exported takeRight */
function takeRight(array, count) {
    // If count is greater than or equal to the length of the array, return a shallow copy of the entire array
    if (count >= array.length) {
        return array.slice();
    }
    // Return a new array containing the last count elements
    return array.slice(array.length - count);
}
