"use strict";
/* exported defaults */
function defaults(target, source) {
    for (const key in source) {
        if (!target.hasOwnProperty(key)) {
            target[key] = source[key];
        }
    }
}
// Examples
const target1 = {};
const source1 = {
    foo: 1,
    bar: 2,
    baz: 3,
};
defaults(target1, source1);
console.log(target1); // -> { foo: 1, bar: 2, baz: 3 }
const target2 = {
    foo: 1,
    baz: 3,
};
const source2 = {
    bar: 2,
};
defaults(target2, source2);
console.log(target2); // -> { foo: 1, bar: 2, baz: 3 }
const target3 = {
    foo: 1,
    baz: 3,
};
const source3 = {
    foo: 4,
    bar: 2,
    baz: 5,
};
defaults(target3, source3);
console.log(target3); // -> { foo: 1, bar: 2, baz: 3 }
const target4 = {
    foo: 1,
    baz: 3,
};
const source4 = {};
defaults(target4, source4);
console.log(target4); // -> { foo: 1, baz: 3 }
