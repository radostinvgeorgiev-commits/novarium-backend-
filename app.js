// app.js — SYNCHRON-X modular Express core

const express = require("express");
const apiRouter = require("./api");
const agentRouter = require("./agent");

const app = express();
app.use(express.json());

// Health endpoints
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

// Backend API
app.use("/api", apiRouter);

// SYNCHRON-X Agent API
app.use("/agent", agentRouter);

module.exports = app;
