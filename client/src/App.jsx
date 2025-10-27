import React, { useEffect, useState, useMemo } from "react";
import { Container, Box, Grid, Button, Typography } from "@mui/material";

import {
  fetchSubscriptions,
  fetchUpcomingRenewals,
  createSubscription,
} from "./api/apiClient.js";

import SummaryCard from "./components/SummaryCard.jsx";
import SubscriptionsTable from "./components/SubscriptionsTable.jsx";
import RenewalsCard from "./components/RenewalsCard.jsx";
import AddSubscriptionDialog from "./components/AddSubscriptionDialog.jsx";

export default function App() {
  const [subscriptions, setSubscriptions] = useState([]);
  const [renewals, setRenewals] = useState([]);
  const [dialogOpen, setDialogOpen] = useState(false);

  // load data on mount
  useEffect(() => {
    async function load() {
      const subs = await fetchSubscriptions();
      const rn = await fetchUpcomingRenewals(7);
      setSubscriptions(subs);
      setRenewals(rn);
    }
    load();
  }, []);

  // derived total monthly spend
  const totalSpend = useMemo(() => {
    return subscriptions.reduce((sum, sub) => {
      const cost = parseFloat(sub.monthlyCost || 0);
      return sum + (isNaN(cost) ? 0 : cost);
    }, 0);
  }, [subscriptions]);

  async function handleAddSubscription(newSub) {
    await createSubscription(newSub);
    // reload after submit
    const subs = await fetchSubscriptions();
    const rn = await fetchUpcomingRenewals(7);
    setSubscriptions(subs);
    setRenewals(rn);
  }

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#0f172a",
        color: "#f8fafc",
        py: 4,
      }}
    >
      <Container maxWidth="lg">
        {/* Header Row */}
        <Box sx={{ mb: 3 }}>
          <Typography variant="h4" sx={{ fontWeight: 600, color: "#f8fafc" }}>
            Subscription Dashboard
          </Typography>
          <Typography sx={{ color: "#94a3b8", fontSize: "0.9rem", mt: 1 }}>
            Track spend, catch renewals, and get ready for AI assistance.
          </Typography>
        </Box>

        {/* KPI / Summary Row */}
        <Grid container spacing={2} sx={{ mb: 3 }}>
          <Grid item xs={12} md={4}>
            <SummaryCard
              label="Total Monthly Spend"
              value={`$${totalSpend.toFixed(2)}/mo`}
              caption="Sum of all active subscriptions"
              color="#4ade80"
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <SummaryCard
              label="Upcoming Renewals"
              value={`${renewals.length} soon`}
              caption="Within the next 7 days"
              color="#facc15"
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <SummaryCard
              label="AI Assistant"
              value="Coming soon"
              caption="We'll add MCP-powered advice"
              color="#3b82f6"
            />
          </Grid>
        </Grid>

        {/* Middle Row: Renewals card + Add button */}
        <Grid container spacing={2} sx={{ mb: 3 }}>
          <Grid item xs={12} md={8}>
            <Button
              onClick={() => setDialogOpen(true)}
              sx={{
                backgroundColor: "#3b82f6",
                color: "#fff",
                textTransform: "none",
                fontWeight: 600,
                borderRadius: "10px",
                px: 2,
                py: 1,
                "&:hover": { backgroundColor: "#1d4ed8" },
              }}
            >
              + Add Subscription
            </Button>
          </Grid>

          <Grid item xs={12} md={4}>
            <RenewalsCard renewals={renewals} />
          </Grid>
        </Grid>

        {/* Table Row */}
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <SubscriptionsTable subscriptions={subscriptions} />
          </Grid>
        </Grid>
      </Container>

      <AddSubscriptionDialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        onSave={handleAddSubscription}
      />
    </Box>
  );
}
