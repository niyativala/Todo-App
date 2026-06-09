let taskInput = document.getElementById("taskInput");
let addBtn = document.getElementById("addBtn");
let listBtn = document.getElementById("listBtn");
let updateBtn = document.getElementById("updateBtn");
let deleteBtn = document.getElementById("deleteBtn");
let taskList = document.getElementById("taskList");
let themeBtn = document.getElementById("themeBtn");

let todo = [];

// Function to display tasks
function showTasks() {
    taskList.innerHTML = "";

    for (let i = 0; i < todo.length; i++) {
        let li = document.createElement("li");
        li.innerText = `${i}: ${todo[i]}`;
        taskList.appendChild(li);
    }
}

// Add Task
addBtn.addEventListener("click", () => {
    let task = taskInput.value;

    if (task.trim() === "") {
        alert("Please Enter a Task");
        return;
    }

    todo.push(task);
    taskInput.value = "";
    showTasks();
});

// List Tasks
listBtn.addEventListener("click", () => {
    showTasks();
});

// Update Task
updateBtn.addEventListener("click", () => {
    let index = prompt("Enter Task Index:");
    let newTask = prompt("Enter New Task:");

    if (index >= 0 && index < todo.length && newTask !== null) {
        todo[index] = newTask;
        showTasks();
        alert("Task Updated");
    } else {
        alert("Invalid Index");
    }
});

// Delete Task
deleteBtn.addEventListener("click", () => {
    let index = prompt("Enter Task Index to Delete:");

    if (index >= 0 && index < todo.length) {
        todo.splice(index, 1);
        showTasks();
        alert("Task Deleted");
    } else {
        alert("Invalid Index");
    }
});

// Dark Mode Toggle
themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});
