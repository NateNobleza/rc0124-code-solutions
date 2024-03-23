"use strict";
/* exported sumAll */
function sumAll(numbers) {
    return numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}
