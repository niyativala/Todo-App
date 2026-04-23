let todoList = [];

// Add Task
function addTodo() {
    let input = document.getElementById("todo-input");
    let date = document.getElementById("todo-date");

    let task = input.value.trim();
    let dueDate = date.value;

    // Validation
    if (task === "" || dueDate === "") {
        alert("Please enter task and date");
        return;
    }

    todoList.push({
        item: task,
        dueDate: dueDate
    });

    input.value = "";
    date.value = "";

    displayTodos();
}

// Display Tasks
function displayTodos() {
    let container = document.getElementById("todo-list");
    container.innerHTML = "";

    todoList.forEach((todo, index) => {
        let div = document.createElement("div");
        div.className = "todo-item";

        div.innerHTML = `
            <span>${todo.item} (${todo.dueDate})</span>
            <button class="delete-btn" onclick="deleteTodo(${index})">Delete</button>
        `;

        container.appendChild(div);
    });
}

// Delete Task
function deleteTodo(index) {
    todoList.splice(index, 1);
    displayTodos();
}

