// Define a Task interface to enforce structure
interface Task {
  title: string;
  description: string;
  isCompleted: boolean;
}

// Create an empty array to store tasks
let tasks: Task[] = [];

/**
 * Adds a new task to the list.
 * @param title - The title of the task
 * @param description - Optional description (default is an empty string)
 */
function addTask(title: string, description: string = ""): void {
  const newTask: Task = {
    title,
    description,
    isCompleted: false,
  };
  tasks.push(newTask);
  console.log(`Task added: ${title}`);
}

/**
 * Toggles the completion status of a task.
 * @param index - Index of the task in the array
 */
function toggleTaskCompletion(index: number): void {
  const task = tasks[index];
  if (task) {
    task.isCompleted = !task.isCompleted;
    console.log(`Task "${task.title}" marked as ${task.isCompleted ? "completed" : "incomplete"}.`);
  } else {
    console.log("Task not found!");
  }
}

/**
 * Displays all tasks in the console.
 */
function showTasks(): void {
  if (tasks.length === 0) {
    console.log("No tasks available.");
    return;
  }

  tasks.forEach((task, index) => {
    console.log(`${index + 1}. [${task.isCompleted ? "✔️" : "❌"}] ${task.title}: ${task.description}`);
  });
}

/**
 * Deletes a task at a given index.
 * @param index - Index of the task to delete
 */
function deleteTask(index: number): void {
  if (index < 0 || index >= tasks.length) {
    console.log("Invalid task index!");
    return;
  }

  tasks.splice(index, 1);
  console.log("Task deleted.");
}

// Example usage
