/* exported defaults */
function defaults(target: { [key: string]: any }, source: { [key: string]: any }): void {
    for (const key in source) {
        if (!target.hasOwnProperty(key)) {
            target[key] = source[key];
        }
    }
}

// Examples
const target1: { [key: string]: any } = {};
const source1: { [key: string]: any } = {
    foo: 1,
    bar: 2,
    baz: 3,
};
defaults(target1, source1);
console.log(target1); // -> { foo: 1, bar: 2, baz: 3 }

const target2: { [key: string]: any } = {
    foo: 1,
    baz: 3,
};
const source2: { [key: string]: any } = {
    bar: 2,
};
defaults(target2, source2);
console.log(target2); // -> { foo: 1, bar: 2, baz: 3 }

const target3: { [key: string]: any } = {
    foo: 1,
    baz: 3,
};
const source3: { [key: string]: any } = {
    foo: 4,
    bar: 2,
    baz: 5,
};
defaults(target3, source3);
console.log(target3); // -> { foo: 1, bar: 2, baz: 3 }

const target4: { [key: string]: any } = {
    foo: 1,
    baz: 3,
};
const source4: { [key: string]: any } = {};
defaults(target4, source4);
console.log(target4); // -> { foo: 1, baz: 3 }
