// //  the following code was addaped from https://dev.to/iamcymentho/implementing-to-do-list-using-javascript-32a7

const taskInput = document.getElementById("inputbox");
const taskList = document.getElementById("taskulList");

function addTask() {
  const text = taskInput.value.trim();
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
  saveListToLocalstorage();
}

function taskCompleted(event) {
  const task = event.target.parentElement;
  task.classList.toggle("completed");
  saveListToLocalstorage();
}

function deleteTask(event) {
  const task = event.target.parentElement;
  taskList.removeChild(task);
  saveListToLocalstorage();
}

function saveListToLocalstorage() {
  const tasks = [];
  const items = taskList.getElementsByTagName("li");
  for (let i = 0; i < items.length; i++) {
    tasks.push(items[i].textContent);
  }
  localStorage.setItem("taskList", JSON.stringify(tasks));
}

function loadListfromLocalstorage() {
  const tasks = JSON.parse(localStorage.getItem("taskList"));
  if (tasks) {
    tasks.forEach((taskText) => {
      const li = document.createElement("li");
      li.textContent = taskText;
      taskList.appendChild(li);

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
    });
  }
}
loadListfromLocalstorage();
