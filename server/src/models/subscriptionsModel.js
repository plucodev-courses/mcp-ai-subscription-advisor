import { openDb } from "../db/db.js";

// return all subs
export async function getAllSubscriptions() {
  const db = await openDb();
  const rows = await db.all(`
    SELECT id, name, monthlyCost, renewalDate, usageHoursLast30Days
    FROM subscriptions
    ORDER BY name ASC
  `);
  return rows;
}

// create a new sub
export async function addSubscription({
  name,
  monthlyCost,
  renewalDate,
  usageHoursLast30Days,
}) {
  const db = await openDb();
  const result = await db.run(
    `
    INSERT INTO subscriptions (name, monthlyCost, renewalDate, usageHoursLast30Days)
    VALUES (?, ?, ?, ?)
    `,
    [name, monthlyCost, renewalDate, usageHoursLast30Days]
  );

  return {
    id: result.lastID,
    name,
    monthlyCost,
    renewalDate,
    usageHoursLast30Days,
  };
}

// get upcoming renewals in N days
export async function getUpcomingRenewals(days = 7) {
  const db = await openDb();

  // today's date
  const today = new Date();
  const future = new Date();
  future.setDate(future.getDate() + Number(days));

  const todayStr = today.toISOString().slice(0, 10); // YYYY-MM-DD
  const futureStr = future.toISOString().slice(0, 10); // YYYY-MM-DD

  const rows = await db.all(
    `
    SELECT id, name, monthlyCost, renewalDate, usageHoursLast30Days
    FROM subscriptions
    WHERE renewalDate >= ? AND renewalDate <= ?
    ORDER BY renewalDate ASC
    `,
    [todayStr, futureStr]
  );

  return rows;
}
