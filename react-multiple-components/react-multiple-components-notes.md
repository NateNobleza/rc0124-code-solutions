# react-multiple-components-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the phases in the React design process?
Break the UI into a component hierarchy, build a static version in React, Find the minimal but complete representation of UI state, Identify where the state should live, add inverse data flow
- How does data flow in React?
data flows kind of like a one way street, the data flows from the parent components to the child components through props.
- How can children components modify state in their parents?
it isn't done so directly, but the parents can pass down callback functions as props to the children, the child component can then call the callback function, and in doing so updates the state of the parent.
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
