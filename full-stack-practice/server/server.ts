import 'dotenv/config';
import express from 'express';
import pg from 'pg';
import { errorMiddleware } from './lib/index.js';

const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

const app = express();
app.use(express.json());

// GET all products
app.get('/api/products', async (req, res) => {
  try {
    const { rows } = await db.query('SELECT * FROM "public"."products"');
    res.json(rows);
  } catch (err) {
    console.error('Error executing query', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// POST a new product
app.post('/api/products', async (req, res) => {
  const { name, price, imageUrl, shortDescription, longDescription } = req.body;
  try {
    const { rows } = await db.query(
      'INSERT INTO "public"."products" ("name", "price", "imageUrl", "shortDescription", "longDescription") VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [name, price, imageUrl, shortDescription, longDescription]
    );
    res.status(201).json(rows[0]);
  } catch (err) {
    console.error('Error executing query', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// PUT (update) an existing product
app.put('/api/products/:productId', async (req, res) => {
  const productId = req.params.productId;
  const { name, price, imageUrl, shortDescription, longDescription } = req.body;
  try {
    const { rows } = await db.query(
      'UPDATE "public"."products" SET "name"=$1, "price"=$2, "imageUrl"=$3, "shortDescription"=$4, "longDescription"=$5 WHERE "productId"=$6 RETURNING *',
      [name, price, imageUrl, shortDescription, longDescription, productId]
    );
    res.json(rows[0]);
  } catch (err) {
    console.error('Error executing query', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.use(errorMiddleware);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
});
