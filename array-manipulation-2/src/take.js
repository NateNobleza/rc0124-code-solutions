"use strict";
/* exported take */
function take(array, count) {
    // Check if count is greater than the length of the array
    if (count >= array.length) {
        // Return a copy of the entire array
        return array.slice();
    }
    // Return a new array containing the first count elements
    return array.slice(0, count);
}
