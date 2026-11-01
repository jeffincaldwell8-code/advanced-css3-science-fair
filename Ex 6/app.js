// Each task has a name and a true/false value to show if it is finished.
let tasks = JSON.parse(localStorage.getItem("scienceTasks")) || [
  { name: "Choose a science question", done: false },
  { name: "Plan an experiment", done: false },
  { name: "Try the experiment", done: false },
  { name: "Show what I learned", done: false },
];

let currentFilter = "all";

const taskForm = document.querySelector("#taskForm");
const taskInput = document.querySelector("#taskInput");
const taskList = document.querySelector("#taskList");
const taskCount = document.querySelector("#taskCount");

function createTask(name) {
  return { name: name, done: false };
}

function addTask(name) {
  tasks.push(createTask(name));
  saveAndRender();
}

function toggleTask(index) {
  tasks[index].done = !tasks[index].done;
  saveAndRender();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  saveAndRender();
}

function getVisibleTasks() {
  if (currentFilter === "open") {
    return tasks.filter(function (task) {
      return !task.done;
    });
  }

  if (currentFilter === "done") {
    return tasks.filter(function (task) {
      return task.done;
    });
  }

  return tasks;
}

function renderTasks() {
  taskList.innerHTML = "";

  getVisibleTasks().forEach(function (task) {
    const index = tasks.indexOf(task);
    const item = document.createElement("li");
    const checkbox = document.createElement("input");
    const name = document.createElement("span");
    const deleteButton = document.createElement("button");

    checkbox.type = "checkbox";
    checkbox.checked = task.done;
    checkbox.addEventListener("change", function () {
      toggleTask(index);
    });

    name.textContent = task.name;
    if (task.done) {
      name.className = "done";
    }

    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function () {
      deleteTask(index);
    });

    item.append(checkbox, name, deleteButton);
    taskList.append(item);
  });

  taskCount.textContent = tasks.filter(function (task) {
    return !task.done;
  }).length;
}

function saveAndRender() {
  localStorage.setItem("scienceTasks", JSON.stringify(tasks));
  renderTasks();
}

taskForm.addEventListener("submit", function (event) {
  event.preventDefault();
  addTask(taskInput.value.trim());
  taskInput.value = "";
});

document.querySelectorAll(".filters button").forEach(function (button) {
  button.addEventListener("click", function () {
    currentFilter = button.dataset.filter;
    renderTasks();
  });
});

renderTasks();
