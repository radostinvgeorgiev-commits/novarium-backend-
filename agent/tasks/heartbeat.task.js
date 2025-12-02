// agent/tasks/heartbeat.task.js
// SYNCHRON–X Agent: Heartbeat Task

module.exports = async function heartbeatTask(systemConfig, logger) {
  try {
    logger.info("[AGENT] Heartbeat task running...");

    return {
      status: "OK",
      time: new Date().toISOString(),
      system: systemConfig.SYSTEM,
      mission: systemConfig.MISSION,
    };
  } catch (err) {
    logger.error("[AGENT] Heartbeat task error:", err);
    return {
      status: "ERROR",
      message: err.message,
    };
  }
};
