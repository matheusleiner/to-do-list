"use strict";
var _a;
const taskList = document.querySelector("ul");
function addTask() {
    const userInput = document.querySelector("input");
    const newTask = userInput.value.trim();
    if (newTask === "") {
        return;
    }
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "checkbox";
    const taskSpan = document.createElement("span");
    taskSpan.textContent = newTask;
    taskSpan.className = "taskSpan";
    const editInput = document.createElement("input");
    editInput.type = "text";
    editInput.value = newTask;
    editInput.className = "editInput";
    const editButton = document.createElement("button");
    editButton.textContent = "edit";
    editButton.className = "editButton";
    const saveButton = document.createElement("button");
    saveButton.textContent = "save";
    saveButton.className = "saveButton";
    const cancelButton = document.createElement("button");
    cancelButton.textContent = "cancel";
    cancelButton.className = "cancelButton";
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "delete";
    deleteButton.className = "deleteButton";
    const task = document.createElement("li");
    task.className = "task";
    task.appendChild(checkbox);
    task.appendChild(taskSpan);
    task.appendChild(editInput);
    task.appendChild(editButton);
    task.appendChild(saveButton);
    task.appendChild(cancelButton);
    task.appendChild(deleteButton);
    taskList.appendChild(task);
    checkbox.addEventListener("click", () => toggleComplete(task));
    editInput.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            saveEdit(task);
        }
    });
    editButton.addEventListener("click", () => editTask(task));
    saveButton.addEventListener("click", () => saveEdit(task));
    cancelButton.addEventListener("click", () => cancelEdit(task));
    deleteButton.addEventListener("click", () => deleteTask(task));
    userInput.value = "";
}
function toggleComplete(task) {
    const checkbox = task.querySelector(".checkbox");
    const taskSpan = task.querySelector(".taskSpan");
    const editButton = task.querySelector(".editButton");
    if (checkbox.checked) {
        taskSpan.classList.add("completed");
        editButton.style.display = "none";
    }
    else {
        taskSpan.classList.remove("completed");
        editButton.style.display = "inline";
    }
}
function editTask(task) {
    const checkbox = task.querySelector(".checkbox");
    const taskSpan = task.querySelector(".taskSpan");
    const editInput = task.querySelector(".editInput");
    const editButton = task.querySelector(".editButton");
    const saveButton = task.querySelector(".saveButton");
    const cancelButton = task.querySelector(".cancelButton");
    const deleteButton = task.querySelector(".deleteButton");
    editInput.value = taskSpan.textContent;
    checkbox.style.display = "none";
    taskSpan.style.display = "none";
    editInput.style.display = "inline";
    editButton.style.display = "none";
    saveButton.style.display = "inline";
    cancelButton.style.display = "inline";
    deleteButton.style.display = "none";
}
function saveEdit(task) {
    const checkbox = task.querySelector(".checkbox");
    const taskSpan = task.querySelector(".taskSpan");
    const editInput = task.querySelector(".editInput");
    const editButton = task.querySelector(".editButton");
    const saveButton = task.querySelector(".saveButton");
    const cancelButton = task.querySelector(".cancelButton");
    const deleteButton = task.querySelector(".deleteButton");
    if (editInput.value.trim() === "") {
        cancelEdit(task);
        return;
    }
    taskSpan.textContent = editInput.value.trim();
    checkbox.style.display = "inline";
    taskSpan.style.display = "inline";
    editInput.style.display = "none";
    editButton.style.display = "inline";
    saveButton.style.display = "none";
    cancelButton.style.display = "none";
    deleteButton.style.display = "inline";
}
function cancelEdit(task) {
    const checkbox = task.querySelector(".checkbox");
    const taskSpan = task.querySelector(".taskSpan");
    const editInput = task.querySelector(".editInput");
    const editButton = task.querySelector(".editButton");
    const saveButton = task.querySelector(".saveButton");
    const cancelButton = task.querySelector(".cancelButton");
    const deleteButton = task.querySelector(".deleteButton");
    checkbox.style.display = "inline";
    taskSpan.style.display = "inline";
    editInput.style.display = "none";
    editButton.style.display = "inline";
    saveButton.style.display = "none";
    cancelButton.style.display = "none";
    deleteButton.style.display = "inline";
}
function deleteTask(task) {
    taskList.removeChild(task);
}
(_a = document.querySelector("input")) === null || _a === void 0 ? void 0 : _a.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        addTask();
    }
});
