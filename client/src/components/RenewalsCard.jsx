import React from "react";
import { Card, CardContent, Typography, Stack } from "@mui/material";

export default function RenewalsCard({ renewals = [] }) {
  return (
    <Card
      sx={{
        backgroundColor: "#1e293b",
        border: "1px solid #334155",
        color: "#f8fafc",
        borderRadius: "12px",
        height: "100%",
      }}
    >
      <CardContent>
        <Typography
          variant="h6"
          sx={{ fontWeight: 600, color: "#f8fafc", mb: 1 }}
        >
          Renewals (Next 7 Days)
        </Typography>

        {renewals.length === 0 && (
          <Typography sx={{ fontSize: "0.9rem", color: "#94a3b8" }}>
            No upcoming renewals in the next 7 days.
          </Typography>
        )}

        <Stack spacing={1}>
          {renewals.map((r) => (
            <Card
              key={r.id}
              variant="outlined"
              sx={{
                backgroundColor: "#0f172a",
                borderColor: "#334155",
                borderRadius: "8px",
                p: 1.25,
              }}
            >
              <Typography sx={{ color: "#f8fafc", fontWeight: 500 }}>
                {r.name} — ${Number(r.monthlyCost).toFixed(2)}
              </Typography>
              <Typography sx={{ color: "#94a3b8", fontSize: "0.8rem" }}>
                Renews on {r.renewalDate}
              </Typography>
            </Card>
          ))}
        </Stack>
      </CardContent>
    </Card>
  );
}
