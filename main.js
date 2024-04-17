// the following code was adapted from lecture 05: Example - Build a coin flip game with high score
//   the following 11 lines were adapted from chatgpt
function saveList() {
  const taskList = document.getElementById("taskulList").innerHTML;
  localStorage.setItem("taskList", taskList);
}

function displayList() {
  const taskInput = document.getElementById("inputbox");
  const taskList = document.getElementById("taskulList");
  taskList.innerHTML = localStorage.getItem("taskList") || "";

  const checkboxes = document.querySelectorAll(".task-checkbox");
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", taskCompleted);
  });

  const deleteButtons = document.querySelectorAll(".delete-button");
  deleteButtons.forEach((button) => {
    button.addEventListener("click", deleteTask);
  });
}
//  the following 22 code line was addaped from https://dev.to/iamcymentho/implementing-to-do-list-using-javascript-32a7

function addTask() {
  const taskInput = document.getElementById("inputbox");
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    const taskList = document.getElementById("taskulList");
    const li = document.createElement("li");
    li.innerText = taskText;

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("task-checkbox");
    checkbox.addEventListener("change", taskCompleted);
    li.appendChild(checkbox);

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "delete";
    deleteBtn.classList.add("delete-button");
    deleteBtn.addEventListener("click", deleteTask);
    li.appendChild(deleteBtn);

    taskList.appendChild(li);
    saveList();
    taskInput.value = "";
  }
}

function taskCompleted(event) {
  const task = event.target.parentElement;
  task.classList.toggle("completed");
  saveList();
}

function deleteTask(event) {
  const task = event.target.parentElement;
  task.remove();
  saveList();
}

function loadHandler() {
  const inputBtn = document.getElementById("addtaskbutton");
  inputBtn.addEventListener("click", addTask);
  displayList();
}

window.addEventListener("load", loadHandler);
