let taskInput = document.getElementById("taskInput");
let addBtn = document.getElementById("addBtn");
let listBtn = document.getElementById("listBtn");
let updateBtn = document.getElementById("updateBtn");
let deleteBtn = document.getElementById("deleteBtn");

let todo = [];

//add task
addBtn.addEventListener("click", () => {
    let task = taskInput.value;

    if (task.trim() === "") {
        alert("Please Enter a Task");
        return;
    }

    todo.push(task);
    taskInput.value = "";
});

//list task
listBtn.addEventListener("click", () => {
    taskList.innerHTML = "";

    for (let task of todo) {
        let li = document.createElement("li");
        li.innerText = task;
        taskList.appendChild(li);
    }

});

//update task
updateBtn.addEventListener("click", () => {
    let index = prompt("Enter Task Index : ");
    let newTask = prompt("Enter New Task : ");

    if (index >= 0 && index < todo.length) {
        todo[index] = newTask;
        alert("Task Updated");
    }
});

//delete task
deleteBtn.addEventListener("click", () => {
    todo.pop();
    alert("Task Deleted");
});

// classList.toggle()
themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});