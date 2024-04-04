import express from 'express';

const app = express();

app.use((req, res, next) => {
  console.log('Hello, World!');
  console.log('The date is', new Date());
  next();
});

app.get('/', (req, res) => {
  res.send('This is the root route');
  next();
});

app.get('/notes', (req, res) => {
  res.send('This is the notes route');
});

app.post('/notes/123', (req, res) => {
  res.send('This is the notes/123 route');
});

app.use((req, res) => {
  res.status(404).send('404 Not Found');
});

app.listen(8080, () => {
  console.log('Express server listening on port 8080');
});
