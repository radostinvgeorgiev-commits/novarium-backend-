const config = require("../config/system");

exports.getStatus = () => {
  return {
    system: config.SYSTEM.NAME,
    mode: config.SYSTEM.MODE,
    version: config.SYSTEM.VERSION,
    mission: config.MISSION.MASTER,
    timestamp: new Date().toISOString()
  };
};
