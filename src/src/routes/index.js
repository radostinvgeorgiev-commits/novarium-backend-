const express = require("express");
const router = express.Router();

router.get("/status", (req, res) => {
  res.json({
    system: "Novarium Backend Core",
    status: "OK",
    timestamp: new Date().toISOString()
  });
});

module.exports = router;
