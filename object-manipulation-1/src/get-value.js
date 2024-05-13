"use strict";
/* exported getValue */
function getValues(object) {
    const values = [];
    for (const key in object) {
        if (Object.prototype.hasOwnProperty.call(object, key)) {
            values.push(object[key]);
        }
    }
    return values;
}
