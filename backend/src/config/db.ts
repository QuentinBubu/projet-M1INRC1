import pg from 'pg';
import 'dotenv/config';

const { Pool } = pg;

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL est manquant dans le dotenv');
}

export const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

export async function checkDatabaseConnection(): Promise<boolean> {
  const client = await pool.connect();
  try {
    await client.query('SELECT 1');
    return true;
  } finally {
    client.release();
  }
}