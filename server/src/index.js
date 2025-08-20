const express = require("express");
const cors = require("cors");

const app = express();

// Permissive CORS for dev
app.use(cors({
  origin: ["http://localhost:5173", "http://127.0.0.1:5173"],
  credentials: true
}));
app.use(express.json());

// Friendly root
app.get("/", (_req, res) => {
  res.send("Pet Health Logger API is running. Try /api/health");
});

// Health route that ALWAYS returns JSON and avoids cache issues
/*
app.get("/api/health", (_req, res) => {
  res.set("Cache-Control", "no-store");
  res.json({ ok: true, time: new Date().toISOString() });
});
*/
app.get("/api/health", (_req, res) => {
    res.set({
      "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
      Pragma: "no-cache",
      Expires: "0",
      "Surrogate-Control": "no-store",
    });
    res.json({ ok: true, time: new Date().toISOString() });
  });


const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`API on http://localhost:${PORT}`);
});