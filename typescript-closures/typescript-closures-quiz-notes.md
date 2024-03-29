# javascript-conditionals-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- In JavaScript, when is scope determined?
  scope in JS is determined statically, and during the code compilation phase
- What allows JavaScript functions to "remember" variables from their surroundings?
  closures allows functions to retain access to the variable and parameters of the parent scope
- What values does a closure contain?
  the closure contains the function itself and the environment in which it was created
- When is a closure created?
  a closure is created when a function is nested inside another function, the closure captures the outer functions variables and retains them even after the outer function has finished executing
- How can you tell if a function will be created with a closure?
  you can determine if a function will be created with a closure by determining if a function is nested inside another and accesses variables or parameters from the outer functions
- In React, what is one important case where you need to know if a closure was created?
  when defining event handlers and callbacks within a function component

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
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
