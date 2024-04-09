import express from 'express';
import pg from 'pg';
import { errorMiddleware } from './lib/index.js';
import { ClientError } from './lib/client-error.js';

type Grade = {
  gradeId?: number;
  name: string;
  course: string;
  score: number; // A number between 0 and 100
};

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false,
  },
});

const app = express();

app.use(express.json());

// get the api grades
app.get('/api/grades', async (req, res, next) => {
  try {
    const result = await db.query('SELECT * FROM "grades"');
    const grades = result.rows;
    res.status(200).json(grades);
  } catch (error) {
    next(error);
  }
});

// GET grade by ID
app.get('/api/grades/:gradeId', async (req, res, next) => {
  const { gradeId } = req.params;
  //turns the string into a number
const gradeIdAsNumber = parseInt(gradeId);
  // Check if gradeId is not a number
  if (isNaN(gradeIdAsNumber)) {
    throw new ClientError(400, 'Grade ID must be a number');

  } else {
    try {
      const result = await db.query(
        'SELECT * FROM "grades" WHERE "gradeId" = $1',
        [gradeId]
      );
      const grade = result.rows[0];
      if (!grade) {
        throw new ClientError(404, `Grade with ID ${gradeId} not found`);
      }
      res.status(200).json(grade);
    } catch (error) {
      next(error);
    }
  }
});


// PUT grade
app.put('/api/grades/:gradeId', async (req, res, next) => {
  const { gradeId } = req.params;
  const { name, course, score } = req.body;
  try {

    if (
      !name ||
      !course ||
      !score ||
      typeof score !== 'number' ||
      score < 0 ||
      score > 100
    ) {
      throw new ClientError(400, 'Invalid input for grade');
    }
    const result = await db.query(
      'UPDATE "grades" SET "name" = $1, "course" = $2, "score" = $3 WHERE "gradeId" = $4 RETURNING *',
      [name, course, score, gradeId]
    );
    const updatedGrade = result.rows[0];
    if (!updatedGrade) {
      throw new ClientError(404, `Grade with ID ${gradeId} not found`);
    }
    res.status(200).json(updatedGrade);
  } catch (error) {
    next(error);
  }
});

app.delete('/api/grades/:gradeId', async (req, res, next) => {
  const { gradeId } = req.params;
  try {
    const result = await db.query('DELETE FROM "grades" WHERE "gradeId" = $1', [
      gradeId,
    ]);
    if (result.rowCount === 0) {
      throw new ClientError(404, `Grade with ID ${gradeId} not found`);
    }
    res.sendStatus(204)
  } catch (error) {
 next(error)
  }
});

app.use(errorMiddleware);

app.listen(8080, () => {
  console.log('listening on port 8080');
});
