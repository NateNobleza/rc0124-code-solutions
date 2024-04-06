import express from 'express';
import { ClientError, errorMiddleware } from './lib/index.js';
import pg from 'pg';

const app = express();

// Create a PostgreSQL pool
const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/pagila',
  ssl: {
    rejectUnauthorized: false,
  },
});

// Route to fetch all actors
app.get('/api/actors', async (req, res, next) => {
  try {
    const sql = `
      SELECT *
      FROM actors;
    `;
    const result = await db.query(sql);
    const actors = result.rows;
    res.json(actors);
  } catch (err) {
    next(err);
  }
});

// Route to fetch a single actor by ID copied this from
app.get('/api/actors/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const sql = `
      SELECT *
      FROM actors
      WHERE "actorId" = $1;
    `;
    const result = await db.query(sql, [id]);
    const actor = result.rows[0];
    if (!actor) {
      throw new ClientError(404, 'Actor Not Found');
    }
    res.json(actor);
  } catch (err) {
    next(err);
  }
});

// Route to fetch all films copied this from actors
app.get('/api/films', async (req, res, next) => {
  try {
    const sql = `
      SELECT "filmId", title
      FROM films
      ORDER BY "replacementCost" DESC;
    `;
    const result = await db.query(sql);
    const films = result.rows;
    res.json(films);
  } catch (err) {
    next(err);
  }
});

// Route to fetch a single film by filmId copied this from actors
app.get('/api/films/:filmId', async (req, res, next) => {
  const filmId = req.params.filmId;
  try {
    const sql = `
      SELECT *
      FROM films
      WHERE "filmId" = $1;
    `;
    const result = await db.query(sql, [filmId]);
    const film = result.rows[0];
    if (!film) {
      throw new ClientError(404, `Film Not Found`);
    }
    res.json(film);
  } catch (err) {
    next(err);
  }
});

app.put('/api/films', async (req, res, next) => {
  const { filmId, title } = req.query;
  try {
    if (!filmId || !title) {
      throw new ClientError(400, 'Both filmId and title are required');
    }

    const sql = `
      UPDATE films
      SET title = $2
      WHERE "filmId" = $1;
    `;
    const params = [filmId as string, title as string];
    await db.query(sql, params);
    res.send(`Title updated for film`);
  } catch (err) {
    next(err);
  }
});

// Error handling middleware
app.use((err: any, req, res: any) => {
  console.error(err);
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  res.status(statusCode).json({ error: message });
});

app.use(errorMiddleware);

app.listen(8080, () => {
  console.log('listening on port 8080');
});
