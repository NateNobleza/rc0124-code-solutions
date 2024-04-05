# express-postgres-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the purpose of the `pg` NPM package?
  allows Node to interact with postgres
- How do you tell `pg` which database to connect to?
  by providing the connection pool when we do new Pool
- How do you send SQL to PostgreSQL from your Express server?
  using the query method
- How do you get the rows return from the SQL query?
  using the result.rows method
- What must you always remember to put around your asynchronous route handlers? Why?
  a try and catch block, prevents the server from crashing
- What is a SQL Injection Attack and how do you avoid it in `pg`?
  A SQL Injection Attack is a security vulnerability that occurs when an attacker is able to inject malicious SQL code into a SQL statement executed by your application.

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
