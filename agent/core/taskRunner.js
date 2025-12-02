// agent/core/taskRunner.js
// SYNCHRON–X Agent: Task Runner Engine

const fs = require("fs");
const path = require("path");

class TaskRunner {
  constructor(systemConfig, logger) {
    this.systemConfig = systemConfig;
    this.logger = logger;
    this.tasks = {};
  }

  // Load all task files from /agent/tasks
  loadTasks(tasksDir) {
    const files = fs.readdirSync(tasksDir);

    files.forEach((file) => {
      if (file.endsWith(".task.js")) {
        const taskName = file.replace(".task.js", "");
        const taskPath = path.join(tasksDir, file);
        this.tasks[taskName] = require(taskPath);

        this.logger.info(`[AGENT] Loaded task: ${taskName}`);
      }
    });
  }

  // Execute a specific task
  async runTask(taskName) {
    const task = this.tasks[taskName];

    if (!task) {
      this.logger.error(`[AGENT] Task not found: ${taskName}`);
      return null;
    }

    this.logger.info(`[AGENT] Running task: ${taskName}`);

    try {
      const result = await task(this.systemConfig, this.logger);
      this.logger.info(`[AGENT] Task result: ${JSON.stringify(result)}`);
      return result;
    } catch (err) {
      this.logger.error(`[AGENT] Task failed: ${taskName}`, err);
      return { status: "ERROR", message: err.message };
    }
  }
}

module.exports = TaskRunner;
