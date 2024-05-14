"use strict";
/* exported pick */
function pick(source, keys) {
    const result = {};
    for (const key of keys) {
        if (source.hasOwnProperty(key)) {
            const value = source[key];
            if (value !== undefined) {
                result[key] = value;
            }
        }
    }
    return result;
}
