const taskInput = document.getElementById("inputbox");
const taskList = document.querySelector(".taskulList");

function addTask() {
  const text = taskInput.value.trim();
  if (text !== "") {
    const li = document.createElement("li");
    li.textContent = text;
    taskList.appendChild(li);
    taskInput.value = "";
  }
}
function taskCompleted(event) {}
