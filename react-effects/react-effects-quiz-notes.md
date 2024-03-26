# react-effects-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- When is a component "mounted" to the DOM?
  In React, when a component is mounted it means that the components JSX elements have been rendered to the DOM for the first time
- What is a React Effect?
  It is a function that react executes after flushing changes to the DOM
- When should you use an Effect and when should you not use an Effect?
  We should use it when we fetch the data, if the code is synchronous we shouldn't use it
- When do Effects run?
  after the completed render
- What function is used to declare an Effect?
  the useEffect() hook
- What are Effect dependencies and how do you declare them?
  it is the value that the effect relies on to perform its operations
- Why would you want to clean up from an Effect?
  to prevent memory leaks or to remove event listeners
- How do you clean up from an Effect?
  return a function from the effect also known as a cleanup function
- When does the cleanup function run?
  the cleanup runs when the component unmounts or when the dependencies change and the effect is re-executed

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
