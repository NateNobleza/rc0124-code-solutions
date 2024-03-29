# dom-events-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Why do we log things to the console?
  so we can debug and trouble shoot if errors occur
- What is the purpose of events and event handling?
  lets us know that something is about to happen, and that handling it interacts accordingly to what is happening for example if we hover over something that we have set to hover, a reaction would happen.
- Are all possible parameters required to use a JavaScript method or function?
  yes as long as we pass the function
- What method of element objects lets you set up a function to be called when a specific type of event occurs?
  addeventlistener() method.
- What is a callback function?
  a callback function is whats passed into another function as an argument
- What object is passed into an event listener callback when the event fires?
  the function
- What is the `event.target`? If you weren't sure, how would you check? Where could you get more information about it?
  lets us get the element that we want to target specifically, we would use event.currenttarget
- What is the difference between these two snippets of code?
  ```js
  element.addEventListener('click', handleClick);
  ```
  ```js
  element.addEventListener('click', handleClick());
  ```
  the first one is that the function is not being called, the second one is that the function is being called

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
