// server.js — SYNCHRON-X backend layer

const express = require("express");
const app = express();

const systemConfig = require("./src/config/system");
const router = require("./src/routes/index");
const errorHandler = require("./src/middlewares/errorHandler");

app.use(express.json());

/* ------------------------------------------
   BASIC ROOT ROUTES (for DO health + testing)
------------------------------------------- */

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

/* ------------------------------------------
   SYSTEM HEARTBEAT (original)
------------------------------------------- */

app.get("/system", (req, res) => {
  res.json({
    system: systemConfig.SYSTEM,
    mission: systemConfig.MISSION,
    status: "ONLINE",
    time: new Date().toISOString(),
  });
});

/* ------------------------------------------
   BASE API ROUTER
------------------------------------------- */

app.use("/api", router);

/* ------------------------------------------
   GLOBAL ERROR HANDLER
------------------------------------------- */

app.use(errorHandler);

/* ------------------------------------------
   SERVER START
------------------------------------------- */

const PORT = process.env.PORT || 8080;
const express = require("express");
const router = express.Router();

const agent = require("../agent/index");

// Base test
router.get("/", (req, res) => {
  res.json({ api: "Novarium backend API is online" });
});

// Agent routes
router.use("/agent", agent);

module.exports = router;
app.listen(PORT, () => {
  console.log(`SYNCHRON-X backend running on port ${PORT}`);
});
app.use("/api", router);
