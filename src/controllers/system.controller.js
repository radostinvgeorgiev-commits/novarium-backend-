const systemService = require("../services/system.service");

exports.status = (req, res) => {
  const result = systemService.getStatus();
  res.json(result);
};
