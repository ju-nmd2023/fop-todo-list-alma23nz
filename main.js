//  the following 22 code line was addaped from https://dev.to/iamcymentho/implementing-to-do-list-using-javascript-32a7

const taskInput = document.getElementById("inputbox");
const taskList = document.getElementById("taskulList");

function clickHandlar() {
  const text = taskInput.value;
  if (text !== "") {
    const li = document.createElement("li");
    li.textContent = text;
    taskList.appendChild(li);
    taskInput.value = "";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("task-checkbox");
    checkbox.addEventListener("change", taskCompleted);
    li.appendChild(checkbox);

    const deletebtn = document.createElement("button");
    deletebtn.textContent = "delete";
    deletebtn.classList.add("delete-button");
    deletebtn.addEventListener("click", deleteTask);
    li.appendChild(deletebtn);
  }
}

function taskCompleted(event) {
  const task = event.target.parentElement;
  task.classList.toggle("completed");
}

function deleteTask(event) {
  const task = event.target.parentElement;
  taskList.removeChild(task);
}

function saveList() {}

function loadHandlar() {
  const inputBtn = document.getElementById("addtaskbutton");
  inputBtn.addEventListener("click", clickHandlar);
}

window.addEventListener("load", loadHandlar);
