"use strict";
/* exported tail */
function tail(array) {
    if (array.length <= 1) {
        return [];
    }
    const tailArray = [];
    for (let i = 1; i < array.length; i++) {
        tailArray.push(array[i]);
    }
    return tailArray;
}
