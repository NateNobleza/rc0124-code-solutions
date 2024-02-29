# typescript-async-await-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the `async` and `await` keywords used for?
  used for promises, async returns a promise, and await is used to pause a function until it is resolved
- How do `async` and `await` differ from `Promise.then` and `Promise.catch`?
  async and a await method makes it easier to read the code rather than having multiple then and catch
- When do you use `async`?
  when we want to use asynchronous functions
- When do you use `await`? When do you _not_ use `await`? (What happens if you `await` a synchronous function?)
  only inside an async function, we would not use it in a synchronous function, if it is done so the return value would be available instantly rather than waiting for a promise to resolve
- How do you handle errors with `await`?
  using try and catch inside the async function
- What do `try`, `catch` and `throw` do? When do you use them?
  try is used for code that might throw an error, catch is used to handle the errors, throw is used to terminate the function
- What happens if you forget to use `await` on a Promise? In that case, what happens to the Promise rejection?
  the function will continue to execute immediately.
- Which style of asynchronous programming do you prefer — callbacks, `Promise.then`, or `async/await`? Why?
  async and await since it looks cleaner overall and less code to worry for.

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
