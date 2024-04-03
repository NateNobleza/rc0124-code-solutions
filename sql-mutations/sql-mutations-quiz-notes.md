# sql-mutations-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the SQL _CRUD_ operations?
  Create would be inserting new rows into a table, Read is retrieving data from a table, Update is modifying existing rows in a table, Deleted is removing rows from a table.
- How do you add a row to a SQL table?
  Insert into and the values to follow
- How do you add multiple rows to a SQL table at once?
  multiple parenthesis (value1), (value2), (value3);
- How do you update rows in a database table?
  using the Update keyword followed by the set and where condition
- How do you delete rows from a database table?
  delete from table name followed by where and the condition
- Why is it important to include a `where` clause in your `update` and `delete` statements?
  it is important to include where because it makes it more specific so that we don't delete more than we need to
- How do you accidentally delete or update all rows in a table?
  when we don't specify the where condition
- How do you get back the modified row without a separate `select` statement?
  using returning or output to retrieve the modified data
- Why did you get an error when trying to delete certain films?
  due to referential integrity, the database system would prevent the deletion to maintain data integrity

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
