/*
import { useEffect, useState } from "react";

type Health = { ok?: boolean; time?: string; error?: string };

export default function App() {
  const [data, setData] = useState<Health | null>(null);

  useEffect(() => {
    fetch("/api/health")
  .then(r => r.json())
  .then(setData)
  .catch(e => setData({ error: String(e) }));
  }, []);

  return (
    <div style={{ padding: 24 }}>
      <h1>Pet Health Logger (PERN)</h1>
      <p>API health: {data ? JSON.stringify(data) : "loading..."}</p>
    </div>
  );
}
  */

//new code
import { useEffect, useState } from "react";

export default function App() {
  const [health, setHealth] = useState<any>(null);

  useEffect(() => {
    fetch("/api/health")               // ← no env var; Vite proxy handles it
      .then((r) => r.json())
      .then(setHealth)
      .catch((e) => setHealth({ error: String(e) }));
  }, []);

  return (
    <div style={{ padding: 24 }}>
      <h1>Pet Health Logger (PERN)</h1>
      <p>API health: {health ? JSON.stringify(health) : "loading..."}</p>
    </div>
  );
}