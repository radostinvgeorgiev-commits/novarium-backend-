// api/index.js — backend API endpoints

const express = require("express");
const router = express.Router();

// simple test route
router.get("/", (req, res) => {
  res.json({
    api: "Novarium backend API",
    status: "online",
    time: new Date().toISOString(),
  });
});

module.exports = router;
