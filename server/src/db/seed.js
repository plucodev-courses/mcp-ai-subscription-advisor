import { initDb, openDb } from "./db.js";

async function seed() {
  await initDb();
  const db = await openDb();

  // Check if we already have data
  const row = await db.get("SELECT COUNT(*) as count FROM subscriptions");
  if (row && row.count > 0) {
    console.log("[seed] DB already has data, skipping seed.");
    process.exit(0);
  }

  const now = new Date();
  const plusDays = (days) => {
    const d = new Date(now);
    d.setDate(d.getDate() + days);
    return d.toISOString().slice(0, 10); // YYYY-MM-DD
  };

  const sampleData = [
    {
      name: "Netflix",
      monthlyCost: 15.99,
      renewalDate: plusDays(3),
      usageHoursLast30Days: 12.5,
    },
    {
      name: "Spotify",
      monthlyCost: 9.99,
      renewalDate: plusDays(12),
      usageHoursLast30Days: 25,
    },
    {
      name: "Max",
      monthlyCost: 29.99,
      renewalDate: plusDays(2),
      usageHoursLast30Days: 0.5,
    },
    {
      name: "YouTube Premium",
      monthlyCost: 13.99,
      renewalDate: plusDays(28),
      usageHoursLast30Days: 40,
    },
  ];

  for (const sub of sampleData) {
    await db.run(
      `
      INSERT INTO subscriptions (name, monthlyCost, renewalDate, usageHoursLast30Days)
      VALUES (?, ?, ?, ?)
      `,
      [sub.name, sub.monthlyCost, sub.renewalDate, sub.usageHoursLast30Days]
    );
  }

  console.log("[seed] Inserted sample subscriptions.");
  process.exit(0);
}

seed().catch((err) => {
  console.error("[seed] Error:", err);
  process.exit(1);
});
