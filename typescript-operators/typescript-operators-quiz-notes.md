# typescript-operators-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the `&&` (logical AND) and `||` (logical OR) operators and how can they be used outside of `if` statements?
  the && operators returns the boolean value of either true or false, its true for both if both statements are true and false if one of them is false, the || operator is similar where it returns a boolean value of true or false, but returns true if either statement is true or false if none of the statements are true
- What is "short-circuit evaluation" and how does it apply to `&&` and `||`?
  its when the evaluation of an expression stops as soon as the result of the expression is determined, for the && operator if the first expression is false then it will return false, in || if the first expression is false it will read the second expression to see if its true resulting in a true statement
- What is the `??` (nullish coalescing) operator and how does it differ from `||`?
  nullish coalescing provides a way to give a default value to an expression that is either null or undefined, the ?? only looks for values that are null or undefined while the || looks for 0 false or NaN
- What is the `?:` (ternary) operator? How does it differ from `if/else`?
  it is a way to use conditional logic, it is a statement that does not return a value where as if else would return a value
- What is the `?.` (optional chaining) operator? When would you use it?
  it is a way to access properties that are either null or undefined,
  in an expression if the left side of the expression is undefined it will return undefined and would not need to access the right hand side of the property
- What is `...` (spread) syntax? How do you use it with arrays and objects?
  it is a way to expand arrays or objects into individual elements, in regards to the array its shorthand syntax for the array to access specific items in the array, it is similar fashion for the object literal
- What data types can be spread into an array? Into an object?
  arrays, strings, objects for an array and for an object it is objects and iterables
- How does spread syntax differ from rest syntax?
  spread syntax is used to spread an iterable into individual items, while rest syntax is used for collecting multiple items or values in an array or object

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```js
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
