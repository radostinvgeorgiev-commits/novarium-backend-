// server.js — SYNCHRON-X backend glue layer

const express = require("express");
const app = express();
const systemConfig = require("./src/config/system");
const router = require("./src/routes/index");
const errorHandler = require("./src/middlewares/errorHandler");

app.use(express.json());

// Base API route
app.use("/api", router);

// System heartbeat route (SYNCHRON-X core)
app.get("/system", (req, res) => {
  res.json({
    system: systemConfig.SYSTEM,
    mission: systemConfig.MISSION,
    status: "ONLINE",
    time: new Date().toISOString(),
  });
});

// Global error handler
app.use(errorHandler);

// Server start
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`SYNCHRON-X backend running on port ${PORT}`);
});
