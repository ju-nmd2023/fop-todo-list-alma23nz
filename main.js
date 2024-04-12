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
    checkbox.addEventListener("change", taskCompleted);
    li.appendChild(checkbox);

    const deletebtn = document.createElement("button");
    deletebtn.textContent = "delete";
    deletebtn.addEventListener("click", deleteTask);
    li.appendChild(deletebtn);
  }
}

function taskCompleted(event) {
  const task = event.target;
  task.classList.toggle("completed");
}

function deleteTask(event) {
  const task = event.target.parentElement;
  taskList.removeChild(task);
}
