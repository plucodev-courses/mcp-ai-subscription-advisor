import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";

export default function SubscriptionsTable({ subscriptions = [] }) {
  return (
    <Paper
      sx={{
        backgroundColor: "#1e293b",
        border: "1px solid #334155",
        borderRadius: "12px",
        color: "#f8fafc",
        overflowX: "auto",
      }}
    >
      <Typography
        variant="h6"
        sx={{
          color: "#f8fafc",
          fontWeight: 600,
          p: 2,
          pb: 1.5,
          borderBottom: "1px solid #334155",
        }}
      >
        Subscriptions
      </Typography>

      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow>
            <TableCell sx={{ color: "#94a3b8" }}>Name</TableCell>
            <TableCell sx={{ color: "#94a3b8" }}>Monthly Cost</TableCell>
            <TableCell sx={{ color: "#94a3b8" }}>Renewal Date</TableCell>
            <TableCell sx={{ color: "#94a3b8" }}>
              Usage (hrs last 30d)
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {subscriptions.map((sub) => (
            <TableRow key={sub.id}>
              <TableCell sx={{ color: "#f8fafc" }}>{sub.name}</TableCell>
              <TableCell sx={{ color: "#f8fafc" }}>
                ${Number(sub.monthlyCost).toFixed(2)}
              </TableCell>
              <TableCell sx={{ color: "#f8fafc" }}>{sub.renewalDate}</TableCell>
              <TableCell sx={{ color: "#f8fafc" }}>
                {sub.usageHoursLast30Days}h
              </TableCell>
            </TableRow>
          ))}

          {subscriptions.length === 0 && (
            <TableRow>
              <TableCell
                colSpan={4}
                sx={{ color: "#94a3b8", textAlign: "center", py: 4 }}
              >
                No subscriptions yet.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </Paper>
  );
}
