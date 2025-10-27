import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";

export default function SummaryCard({ label, value, caption, color }) {
  return (
    <Card
      sx={{
        backgroundColor: "#1e293b",
        border: "1px solid #334155",
        color: "#f8fafc",
        borderRadius: "12px",
      }}
    >
      <CardContent>
        <Typography
          variant="body2"
          sx={{
            color: "#94a3b8",
            fontWeight: 500,
            textTransform: "uppercase",
            fontSize: "0.7rem",
          }}
        >
          {label}
        </Typography>

        <Typography
          variant="h5"
          component="div"
          sx={{ fontWeight: 600, color: color || "#fff", mt: 0.5 }}
        >
          {value}
        </Typography>

        {caption && (
          <Box
            sx={{
              fontSize: "0.8rem",
              color: "#94a3b8",
              mt: 1,
              lineHeight: 1.4,
            }}
          >
            {caption}
          </Box>
        )}
      </CardContent>
    </Card>
  );
}
