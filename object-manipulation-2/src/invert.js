"use strict";
/* exported invert */
function invert(source) {
    const result = {};
    for (const key in source) {
        const value = source[key].toString();
        result[value] = key;
    }
    return result;
}
