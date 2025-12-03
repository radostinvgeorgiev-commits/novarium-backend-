// agent/index.js — SYNCHRON-X Agent API

const express = require("express");
const router = express.Router();

const heartbeatTask = require("./tasks/heartbeat.task");
const diagnosticsTask = require("./tasks/diagnostics.task");   // <-- НОВО

// GET /agent/status
router.get("/status", (req, res) => {
  res.json({
    agent: "SYNCHRON-X Agent",
    status: "online",
    time: new Date().toISOString(),
  });
});

// GET /agent/heartbeat
router.get("/heartbeat", async (req, res) => {
  const result = await heartbeatTask();
  res.json(result);
});

// GET /agent/diagnostics
router.get("/diagnostics", async (req, res) => {
  const result = await diagnosticsTask();
  res.json(result);
});

module.exports = router;
