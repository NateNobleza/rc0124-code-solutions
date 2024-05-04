"use strict";
/* exported getElementAtIndex */
function getElementAtIndex(array, index) {
    if (index >= 0 && index < array.length) {
        return array[index];
    }
    else {
        return undefined;
    }
}
