import express from "express";
import { getUpcomingRenewals } from "../models/subscriptionsModel.js";

const router = express.Router();

// GET /renewals/upcoming?days=7
router.get("/upcoming", async (req, res) => {
  try {
    const { days = 7 } = req.query;
    const rows = await getUpcomingRenewals(days);
    res.json(rows);
  } catch (err) {
    console.error("GET /renewals/upcoming error:", err);
    res.status(500).json({ error: "Failed to fetch renewals" });
  }
});

export default router;
