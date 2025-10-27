import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import { initDb } from "./db/db.js";
import subscriptionsRoute from "./routes/subscriptionsRoute.js";
import renewalsRoute from "./routes/renewalsRoute.js";

dotenv.config();

const app = express();

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

// healthcheck stays for the frontend widget
app.get("/health", (req, res) => {
  res.json({
    status: "ok",
    service: "server",
    timestamp: new Date().toISOString(),
  });
});

// new routes
app.use("/subscriptions", subscriptionsRoute);
app.use("/renewals", renewalsRoute);

// startup
const PORT = process.env.PORT || 4000;

async function start() {
  await initDb();
  app.listen(PORT, () => {
    console.log(`[server] listening on http://localhost:${PORT}`);
  });
}

start();
