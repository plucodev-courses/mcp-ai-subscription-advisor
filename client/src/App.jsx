import React, { useEffect, useState } from "react";

export default function App() {
  const [status, setStatus] = useState("Checking backend...");

  useEffect(() => {
    fetch("http://localhost:4000/health")
      .then((res) => res.json())
      .then((data) => setStatus(`✅ Server OK (${data.service})`))
      .catch(() => setStatus("⚠️ Backend not reachable"));
  }, []);

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>MCP AI Subscription Advisor</h1>
      <p>{status}</p>
    </div>
  );
}
