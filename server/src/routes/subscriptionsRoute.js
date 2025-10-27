import express from "express";
import {
  getAllSubscriptions,
  addSubscription,
} from "../models/subscriptionsModel.js";

const router = express.Router();

// GET /subscriptions
router.get("/", async (req, res) => {
  try {
    const subs = await getAllSubscriptions();
    res.json(subs);
  } catch (err) {
    console.error("GET /subscriptions error:", err);
    res.status(500).json({ error: "Failed to fetch subscriptions" });
  }
});

// POST /subscriptions
router.post("/", async (req, res) => {
  try {
    const { name, monthlyCost, renewalDate, usageHoursLast30Days } = req.body;

    if (!name || !monthlyCost || !renewalDate) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const newSub = await addSubscription({
      name,
      monthlyCost,
      renewalDate,
      usageHoursLast30Days: usageHoursLast30Days ?? 0,
    });

    res.status(201).json(newSub);
  } catch (err) {
    console.error("POST /subscriptions error:", err);
    res.status(500).json({ error: "Failed to add subscription" });
  }
});

export default router;
