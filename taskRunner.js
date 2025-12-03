// agent/core/taskRunner.js – Task execution layer

class TaskRunner {
  async execute(task) {
    console.log(`⚙️ AGENT: Executing task → ${task.name}`);

    // изчакване ако задачата връща Promise
    await task.run();

    console.log(`✅ AGENT: Task finished → ${task.name}`);
  }
}

module.exports = new TaskRunner();
