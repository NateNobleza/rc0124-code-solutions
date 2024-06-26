# fetch-in-react-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What browser function can be used to make HTTP requests to a server in React?
  we can use a fetch request
- What two things need to be done to properly handle HTTP request errors? Why?
  catch statement followed by an error message letting know what went wrong
- How can `useEffect` be used to load data for a component?
  we can use useEffect to execute code that loads data when the component mounts or when dependencies change
- How do you use `useEffect` to load component data just once when the component mounts?
  using an empty dependency array
- How do you use `useEffect` to load component data every time the data key changes?
  include the key in the dependency array passed as a second argument to useEffect
- In a large-scale production app, what are some better alternatives for loading and managing backend data?
  using a third party data management library like React Query or Vercel SWR

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
