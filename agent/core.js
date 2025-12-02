// agent/core.js — SYNCHRON-X Agent Kernel

module.exports = {
  name: "SYNCHRON-X Agent Core",
  version: "1.0",
  tasks: [],

  register(task) {
    this.tasks.push(task);
    console.log(`[AGENT] Registered task: ${task.name}`);
  },

  async runAll() {
    console.log("[AGENT] Starting all tasks...");
    for (const task of this.tasks) {
      try {
        console.log(`[AGENT] Running: ${task.name}`);
        await task.run();
      } catch (err) {
        console.error(`[AGENT] Task failed: ${task.name}`, err);
      }
    }
  },
};
