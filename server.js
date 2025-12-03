// server.js — SYNCHRON-X unified backend layer

const express = require("express");
const app = express();

const systemConfig = require("./src/config/system");
const apiRouter = require("./src/routes/index");
const errorHandler = require("./src/middlewares/errorHandler");

// AGENT
const agentRouter = require("./agent/index");

app.use(express.json());

/* -----------------------------------------------
   BASIC HEALTH CHECK ROUTES 
------------------------------------------------- */
app.get("/", (req, res) => {
  res.send("Novarium backend is running");
});

app.get("/ping", (req, res) => {
  res.json({
    status: "ok",
    time: new Date().toISOString(),
  });
});

app.get("/health", (req, res) => {
  res.json({
    service: "novarium-backend",
    status: "healthy",
    time: new Date().toISOString(),
  });
});

/* -----------------------------------------------
   SYSTEM HEARTBEAT (original)
------------------------------------------------- */
app.get("/system", (req, res) => {
  res.json({
    system: systemConfig.SYSTEM,
    mission: systemConfig.MISSION,
    status: "ONLINE",
    time: new Date().toISOString(),
  });
});

/* -----------------------------------------------
   API ROUTES
------------------------------------------------- */
app.use("/api", apiRouter);

/* -----------------------------------------------
   AGENT ROUTES
------------------------------------------------- */
app.use("/agent", agentRouter);

/* -----------------------------------------------
   GLOBAL ERROR HANDLER
------------------------------------------------- */
app.use(errorHandler);

/* -----------------------------------------------
   SERVER START
------------------------------------------------- */
const PORT = process.env.PORT || 8080;
app.listen(PORT, () =>
  console.log(`SYNCHRON-X backend running on port ${PORT}`)
);
