//  the following code was addaped from https://dev.to/iamcymentho/implementing-to-do-list-using-javascript-32a7

const taskInput = document.getElementById("inputbox");
const taskList = document.getElementById("taskulList");

// the following 5 lines were adapted from chatgpt
document.addEventListener("DOMContentLoaded", () => {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach((task) => {
    if (!task.deleted) {
      addTaskToDOM(task.text, task.completed);
    }
  });
});

function addTaskToDOM(text, completed = false) {
  const li = document.createElement("li");
  li.textContent = text;
  if (completed) {
    li.classList.add("completed");
  }

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.classList.add("task-checkbox");
  checkbox.checked = completed;
  checkbox.addEventListener("change", taskCompleted);

  li.appendChild(checkbox);

  const deletebtn = document.createElement("button");
  deletebtn.textContent = "delete";
  deletebtn.classList.add("delete-button");
  deletebtn.addEventListener("click", deleteTask);
  li.appendChild(deletebtn);

  taskList.appendChild(li);
}

function addTask() {
  const text = taskInput.value.trim();
  if (text !== "") {
    addTaskToDOM(text);
    saveTasksToLocalStorage(text, false);
    taskInput.value = "";
  }
}

function taskCompleted(event) {
  const task = event.target.parentElement;
  task.classList.toggle("completed");
  saveTasksToLocalStorage(task.textContent, true);
}

function deleteTask(event) {
  const task = event.target.parentElement;
  taskList.removeChild(task);
  saveTasksToLocalStorage(task.textContent, false, true);
}
// the following  lines were adapted from chatgpt

function saveTasksToLocalStorage(text, completed, deleted = false) {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const existingTaskIndex = tasks.findIndex((task) => task.text === text);

  if (existingTaskIndex !== -1) {
    tasks.splice(existingTaskIndex, 1);
  }

  localStorage.setItem("tasks", JSON.stringify(tasks));
}
