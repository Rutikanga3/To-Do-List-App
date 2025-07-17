
// const btn = document.getElementById('btn');
// const taskInput = document.getElementById('task-input');
// const taskList = document.getElementById('task-list');

// // Add task on button click
// btn.addEventListener('click', () => {
//     const taskValue = taskInput.value.trim();
//     if (taskValue === '') return; // Prevent empty tasks

//     // Add task to the list
//     const li = document.createElement('li');
//     li.textContent = taskValue;

//     // Add delete button
//     const deleteBtn = document.createElement('button');
//     deleteBtn.textContent = 'Delete';
//     deleteBtn.addEventListener('click', () => {
//         li.remove(); // Remove task from the list
//     });

//     li.appendChild(deleteBtn);
//     taskList.appendChild(li);

//     // Clear input field
//     taskInput.value = '';
// });

// Select elements
const btn = document.getElementById('btn');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

// Load tasks from localStorage on page load
document.addEventListener('DOMContentLoaded', renderTasks);

// Add task event listener
btn.addEventListener('click', function (e) {
    e.preventDefault();

    const taskValue = taskInput.value.trim();
    if (taskValue === '') return; // Prevent empty tasks

    // Create task object
    const task = { value: taskValue };

    // Get existing tasks from localStorage
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    // Add new task to the array
    tasks.push(task);

    // Save updated tasks to localStorage
    localStorage.setItem('tasks', JSON.stringify(tasks));

    // Clear input field
    taskInput.value = '';

    // Render tasks
    renderTasks();
});

// Render tasks function
function renderTasks() {
    // Clear current task list
    taskList.innerHTML = '';

    // Get tasks from localStorage
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    // Loop through tasks and display them
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.textContent = task.value;

        // Add delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', () => {
            deleteTask(index);
        });

        li.appendChild(deleteBtn);
        taskList.appendChild(li);
    });
}

// Delete task function
function deleteTask(index) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.splice(index, 1); // Remove task at the given index
    localStorage.setItem('tasks', JSON.stringify(tasks)); // Update localStorage
    renderTasks(); // Re-render tasks
}