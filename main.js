// the following code was adapted from lecture 05: Example - Build a coin flip game with high score
//   the following 11 lines were adapted from chatgpt accessed 17-04-2024
function saveList() {
  const taskListItems = document.querySelectorAll("#taskulList li");
  const tasks = [];
  taskListItems.forEach((item) => {
    tasks.push({
      text: item.querySelector(".task-text").innerText,
      completed: item.querySelector(".task-checkbox").checked,
    });
  });
  localStorage.setItem("taskList", JSON.stringify(tasks));
}

function displayList() {
  const taskInput = document.getElementById("inputbox");
  const taskList = document.getElementById("taskulList");
  //   the following 3 lines were adapted from chatgpt accessed 17-04-2024
  taskList.innerHTML = "";
  const storedTasks = JSON.parse(localStorage.getItem("taskList")) || [];
  storedTasks.forEach((task) => {
    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("task-checkbox");
    checkbox.checked = task.completed;
    checkbox.addEventListener("change", taskCompleted);
    li.appendChild(checkbox);

    const taskText = document.createElement("span");
    taskText.innerText = task.text;
    taskText.classList.add("task-text");
    taskText.classList.toggle("completed", task.completed);
    li.appendChild(taskText);

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "delete";
    deleteBtn.classList.add("delete-button");
    deleteBtn.addEventListener("click", deleteTask);
    li.appendChild(deleteBtn);

    taskList.appendChild(li);
  });
}
//  the following 20 code line was addaped from https://dev.to/iamcymentho/implementing-to-do-list-using-javascript-32a7
function addTask() {
  const taskInput = document.getElementById("inputbox");
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    const taskList = document.getElementById("taskulList");
    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("task-checkbox");
    checkbox.addEventListener("change", taskCompleted);
    li.appendChild(checkbox);

    const taskTextElem = document.createElement("span");
    taskTextElem.innerText = taskText;
    taskTextElem.classList.add("task-text");
    li.appendChild(taskTextElem);

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
  const taskTextElem = task.querySelector(".task-text");
  taskTextElem.classList.toggle("completed");
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
