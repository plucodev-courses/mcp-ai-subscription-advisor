const API_BASE = "http://localhost:4000";

export async function fetchSubscriptions() {
  const res = await fetch(`${API_BASE}/subscriptions`);
  if (!res.ok) throw new Error("Failed to fetch subscriptions");
  return res.json();
}

export async function fetchUpcomingRenewals(days = 7) {
  const res = await fetch(`${API_BASE}/renewals/upcoming?days=${days}`);
  if (!res.ok) throw new Error("Failed to fetch renewals");
  return res.json();
}

export async function createSubscription(subData) {
  const res = await fetch(`${API_BASE}/subscriptions`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(subData),
  });
  if (!res.ok) throw new Error("Failed to create subscription");
  return res.json();
}
