// Create an empty array to store all tasks
var tasks = [];

/**
 * Adds a new task to the task list.
 * @param {string} title - The name of the task
 * @param {string} [description] - The optional description (default is "")
 */
function addTask(title, description) {
    if (description === void 0) { description = ""; }

    var newTask = {
        title: title,
        description: description,
        isCompleted: false, // All tasks start as incomplete
    };

    tasks.push(newTask);
    console.log("Task added: ".concat(title));
}

/**
 * Toggles the completion status of a task at a given index.
 * @param {number} index - The position of the task in the array
 */
function toggleTaskCompletion(index) {
    var task = tasks[index];
    if (task) {
        task.isCompleted = !task.isCompleted; // Switch between true and false
        console.log("Task \"".concat(task.title, "\" marked as ").concat(task.isCompleted ? "completed" : "incomplete", "."));
    } else {
        console.log("Task not found!");
    }
}

/**
 * Displays all tasks with their status in the console.
 */
function showTasks() {
    if (tasks.length === 0) {
        console.log("No tasks available.");
        return;
    }

    tasks.forEach(function (task, index) {
        // Shows task number, completion status, title, and description
        console.log("".concat(index + 1, ". [").concat(task.isCompleted ? "✔️" : "❌", "] ").concat(task.title, ": ").concat(task.description));
    });
}

/**
 * Deletes a task at the specified index.
 * @param {number} index - The index of the task to remove
 */
function deleteTask(index) {
    if (index < 0 || index >= tasks.length) {
        console.log("Invalid task index!");
        return;
    }

    tasks.splice(index, 1); // Remove one item at given position
    console.log("Task deleted.");
}

// === Example usage ===
addTask("Buy groceries", "Milk, bread, eggs"); // Add first task
addTask("Clean the house");                    // Add second task
showTasks();                                   // Show all tasks

toggleTaskCompletion(0);                       // Mark first task as completed
showTasks();                                   // Show tasks again

deleteTask(1);                                 // Delete second task
showTasks();                                   // Show remaining tasks
