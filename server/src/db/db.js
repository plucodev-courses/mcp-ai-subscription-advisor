import sqlite3 from "sqlite3";
import { open } from "sqlite";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

dotenv.config();

// Resolve DB path (so it works no matter where you run node from)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Get from env, fallback
const DB_PATH =
  process.env.DB_PATH || path.resolve(__dirname, "subscriptions.db");

// openDb returns a ready-to-use db connection each time
export async function openDb() {
  return open({
    filename: DB_PATH,
    driver: sqlite3.Database,
  });
}

// Initialize schema if it doesn't exist
export async function initDb() {
  const db = await openDb();

  await db.exec(`
    CREATE TABLE IF NOT EXISTS subscriptions (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      monthlyCost REAL NOT NULL,
      renewalDate TEXT NOT NULL,
      usageHoursLast30Days REAL NOT NULL
    );
  `);

  return db;
}
