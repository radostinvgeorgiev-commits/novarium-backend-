// agent/index.js
// SYNCHRON–X Agent Launcher

const path = require("path");
const systemConfig = require("../src/config/system");
const logger = require("../src/utils/logger");
const TaskRunner = require("./core/taskRunner");

async function launchAgent() {
  logger.info("🟦 SYNCHRON–X Agent starting…");

  const taskRunner = new TaskRunner(systemConfig, logger);

  // Load tasks folder
  const tasksDir = path.join(__dirname, "tasks");
  taskRunner.loadTasks(tasksDir);

  // Run heartbeat task every 10 seconds
  setInterval(async () => {
    await taskRunner.runTask("heartbeat");
  }, 10 * 1000);

  logger.info("🟩 Agent is online and running tasks.");
}

launchAgent();
