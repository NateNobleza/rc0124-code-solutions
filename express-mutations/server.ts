import express from 'express';
import pg from 'pg';
import { ClientError, errorMiddleware } from './lib/index.js';

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/pagila',
  ssl: {
    // Allow non-SSL traffic to localhost
    rejectUnauthorized: false,
  },
});

const app = express();

// middleware to parse JSON requests
app.use(express.json());
// Endpoint for testing
app.get('/api/actors/:actorId', async (req, res, next) => {
  try {
    const { actorId } = req.params;
    if (!Number.isInteger(+actorId)) {
      throw new ClientError(400, `Non-integer actorId: ${actorId}`);
    }
    const sql = `
      select * from "actors"
      where "actorId" = $1;
    `;
    const params = [actorId];
    const result = await db.query(sql, params);
    const actor = result.rows[0];
    if (!actor) throw new ClientError(404, `actor ${actorId} not found`);
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});

// POST route to insert a new actor
app.post('/api/actors', async (req, res, next) => {
  try {
    const { firstName, lastName } = req.body;

    // checks if first and lastname are provided
    if (!firstName || !lastName) {
      throw new ClientError(400, 'Both firstName and lastName are required');
    }
    // Inserts the new actor into the database
    const sql = `
      INSERT INTO "actors" ("firstName", "lastName")
      VALUES ($1, $2)
      RETURNING *;
    `;
    const params = [firstName, lastName];
    const result = await db.query(sql, params);
    const newActor = result.rows[0];
    // Return the newly created actor with status 201
    res.status(201).json(newActor);
  } catch (error) {
    next(error);
  }
});

app.put('/api/actors/:actorId', async (req, res, next) => {
  try {
    const { actorId } = req.params;
    const { firstName, lastName } = req.body;
    // Check if firstName and lastName are provided
    if (!firstName || !lastName) {
      throw new ClientError(400, 'Both firstName and lastName are required');
    }
    // Update the actor in the database
    const sql = `
      UPDATE "actors"
      SET "firstName" = $1, "lastName" = $2
      WHERE "actorId" = $3
      RETURNING *;
    `;
    const params = [firstName, lastName, actorId];
    const result = await db.query(sql, params);
    const updatedActor = result.rows[0];
    // returns client error
    if (!updatedActor) {
      throw new ClientError(404, `Actor ${actorId} not found`);
    }
    // returns the updated actor with status update
    res.status(200).json(updatedActor);
  } catch (error) {
    next(error);
  }
});

// Route to delete an actor
app.delete('/api/actors/:actorId', async (req, res, next) => {
  try {
    const { actorId } = req.params;
    // deletse  the actor from the database
    const sql = `
      DELETE FROM "actors"
      WHERE "actorId" = $1
      RETURNING *;
    `;
    const params = [actorId];
    const result = await db.query(sql, params);
    const deletedActor = result.rows[0];
    console.log(deletedActor);
    //  returns error if actor not found
    if (!deletedActor) {
      throw new ClientError(404, `Actor ${actorId} not found`);
    }
    // retunr status for updated deletion
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
});

app.use(errorMiddleware);

app.listen(8080, () => {
  console.log('listening on port 8080');
});
