document.addEventListener("DOMContentLoaded", () => {
  const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  savedTasks.forEach(task => addTaskToDOM(task));
});

function addTask() {
  const input = document.getElementById("taskInput");
  const task = input.value.trim();
  if (!task) return;

  addTaskToDOM(task);
  saveTask(task);
  input.value = "";
}

function addTaskToDOM(task) {
  const li = document.createElement("li");
  li.textContent = task;

  const btn = document.createElement("button");
  btn.textContent = "❌";
  btn.onclick = () => {
    li.remove();
    removeTask(task);
  };

  li.appendChild(btn);
  document.getElementById("taskList").appendChild(li);
}

function saveTask(task) {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function removeTask(task) {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const updated = tasks.filter(t => t !== task);
  localStorage.setItem("tasks", JSON.stringify(updated));
}
