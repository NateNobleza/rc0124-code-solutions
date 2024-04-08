import express from 'express';
import pg from 'pg';
import { errorMiddleware } from './lib/index.js';

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/pagila',
  ssl: {
    // Allow non-SSL traffic to localhost
    rejectUnauthorized: false,
  },
});

const app = express();

app.use(errorMiddleware);

app.get('/api/films', async (req, res, next) => {
  try {
    // query to get the 2 films with the  highest replacement cost
    const result = await db.query(
      'SELECT * FROM "films" ORDER BY "replacementCost" DESC LIMIT 2'
    );
    const films = result.rows;
    res.json(films);
  } catch (error) {
    console.error('error grabbing films', error);
    res.status(500).json({ error: 'internal server error' });
    next(error);
  }
});

app.get('/api/films/:filmId', async (req, res) => {
  const filmId = req.params.filmId;
  // to check to see if filmID is an integer
  if (!Number.isInteger(+filmId)) {
    return res.status(400).json({ error: 'Film ID needs to be an integer' });
  }
  try {
    // query to get the film by the ID
    const result = await db.query('SELECT * FROM "films" WHERE "filmId" = $1', [
      filmId,
    ]);
    const films = result.rows[0];
    // if film is not found
    if (!films) {
      return res.status(404).json({ error: 'film not found' });
    }
    res.json(films);
  } catch (error) {
    console.error('error fetching film', error);
    res.status(500).json({ error: 'internal server error' });
  }
});

app.listen(8080, () => {
  console.log('listening on port 8080');
});
