let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", () => {

    if (inp.value.trim() === "") {
        return;
    }

    let item = document.createElement("li");
    item.innerText = inp.value;

    let delBtn = document.createElement("button");
    delBtn.innerText = "Delete";
    delBtn.classList.add("delete");

    item.appendChild(delBtn);
    ul.appendChild(item);

    inp.value = "";
});


// Event Delegation for Delete Button
ul.addEventListener("click", (event) => {

    // Check if clicked element is delete button
    if (event.target.classList.contains("delete")) {

        let listItem = event.target.parentElement;
        listItem.remove();

        console.log("Task Deleted");
    }
});