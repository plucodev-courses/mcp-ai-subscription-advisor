import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Stack,
} from "@mui/material";

export default function AddSubscriptionDialog({ open, onClose, onSave }) {
  const [name, setName] = useState("");
  const [monthlyCost, setMonthlyCost] = useState("");
  const [renewalDate, setRenewalDate] = useState("");
  const [usageHoursLast30Days, setUsageHoursLast30Days] = useState("");

  function handleSubmit() {
    onSave({
      name,
      monthlyCost: parseFloat(monthlyCost),
      renewalDate,
      usageHoursLast30Days: parseFloat(usageHoursLast30Days) || 0,
    });

    // reset and close
    setName("");
    setMonthlyCost("");
    setRenewalDate("");
    setUsageHoursLast30Days("");
    onClose();
  }

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="sm"
      PaperProps={{
        sx: {
          backgroundColor: "#1e293b",
          border: "1px solid #334155",
          color: "#f8fafc",
          borderRadius: "12px",
        },
      }}
    >
      <DialogTitle sx={{ color: "#f8fafc", fontWeight: 600 }}>
        Add Subscription
      </DialogTitle>

      <DialogContent>
        <Stack spacing={2} sx={{ mt: 1 }}>
          <TextField
            label="Name"
            variant="filled"
            size="small"
            value={name}
            onChange={(e) => setName(e.target.value)}
            InputProps={{ sx: { color: "#f8fafc" } }}
            InputLabelProps={{ sx: { color: "#94a3b8" } }}
          />
          <TextField
            label="Monthly Cost (USD)"
            variant="filled"
            size="small"
            type="number"
            value={monthlyCost}
            onChange={(e) => setMonthlyCost(e.target.value)}
            InputProps={{ sx: { color: "#f8fafc" } }}
            InputLabelProps={{ sx: { color: "#94a3b8" } }}
          />
          <TextField
            label="Next Renewal Date"
            helperText="YYYY-MM-DD"
            variant="filled"
            size="small"
            value={renewalDate}
            onChange={(e) => setRenewalDate(e.target.value)}
            InputProps={{ sx: { color: "#f8fafc" } }}
            InputLabelProps={{ sx: { color: "#94a3b8" } }}
          />
          <TextField
            label="Hours Watched Last 30 Days"
            variant="filled"
            size="small"
            type="number"
            value={usageHoursLast30Days}
            onChange={(e) => setUsageHoursLast30Days(e.target.value)}
            InputProps={{ sx: { color: "#f8fafc" } }}
            InputLabelProps={{ sx: { color: "#94a3b8" } }}
          />
        </Stack>
      </DialogContent>

      <DialogActions sx={{ p: 2, pt: 0 }}>
        <Button
          onClick={onClose}
          sx={{ color: "#94a3b8", textTransform: "none" }}
        >
          Cancel
        </Button>
        <Button
          onClick={handleSubmit}
          sx={{
            backgroundColor: "#3b82f6",
            color: "#fff",
            textTransform: "none",
            fontWeight: 600,
            "&:hover": { backgroundColor: "#1d4ed8" },
          }}
        >
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}
