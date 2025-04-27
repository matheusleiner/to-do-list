const taskList = document.querySelector("ul") as HTMLElement

function addTask(): void {
    const userInput = document.querySelector("input") as HTMLInputElement
    const newTask: string = userInput.value.trim()
    if (newTask === "") {return}

    const checkbox = document.createElement("input")
    checkbox.type = "checkbox"
    checkbox.className = "checkbox"

    const taskSpan = document.createElement("span")
    taskSpan.textContent = newTask
    taskSpan.className = "taskSpan"

    const editInput = document.createElement("input")
    editInput.type = "text"
    editInput.value = newTask
    editInput.className = "editInput"

    const editButton = document.createElement("button")
    editButton.textContent = "edit"
    editButton.className = "editButton"

    const saveButton = document.createElement("button")
    saveButton.textContent = "save"
    saveButton.className = "saveButton"
    
    const cancelButton = document.createElement("button")
    cancelButton.textContent = "cancel"
    cancelButton.className = "cancelButton"

    const deleteButton = document.createElement("button")
    deleteButton.textContent = "delete"
    deleteButton.className = "deleteButton"

    const task = document.createElement("li")
    task.className = "task"

    task.appendChild(checkbox)
    task.appendChild(taskSpan)
    task.appendChild(editInput)
    task.appendChild(editButton)
    task.appendChild(saveButton)
    task.appendChild(cancelButton)
    task.appendChild(deleteButton)

    taskList.appendChild(task)

    checkbox.addEventListener("click", () => toggleComplete(task))
    editInput.addEventListener("keydown", (event: KeyboardEvent) => {
        if (event.key === "Enter") {
            saveEdit(task)
        }
    })
    editButton.addEventListener("click", () => editTask(task))
    saveButton.addEventListener("click", () => saveEdit(task))
    cancelButton.addEventListener("click", () => cancelEdit(task))
    deleteButton.addEventListener("click", () => deleteTask(task))

    userInput.value = ""
}

function toggleComplete(task: HTMLElement): void {
    const checkbox = task.querySelector(".checkbox") as HTMLInputElement
    const taskSpan = task.querySelector(".taskSpan") as HTMLSpanElement
    const editButton = task.querySelector(".editButton") as HTMLButtonElement

    if (checkbox.checked) {
        taskSpan.classList.add("completed")
        editButton.style.display = "none"
    } else {
        taskSpan.classList.remove("completed")
        editButton.style.display = "inline"
    }
}

function editTask(task: HTMLElement): void {
    const checkbox = task.querySelector(".checkbox") as HTMLInputElement
    const taskSpan = task.querySelector(".taskSpan") as HTMLSpanElement
    const editInput = task.querySelector(".editInput") as HTMLInputElement
    const editButton = task.querySelector(".editButton") as HTMLButtonElement
    const saveButton = task.querySelector(".saveButton") as HTMLButtonElement
    const cancelButton = task.querySelector(".cancelButton") as HTMLButtonElement
    const deleteButton = task.querySelector(".deleteButton") as HTMLButtonElement

    editInput.value = taskSpan.textContent!

    checkbox.style.display = "none"
    taskSpan.style.display = "none"
    editInput.style.display = "inline"
    editButton.style.display = "none"
    saveButton.style.display = "inline"
    cancelButton.style.display = "inline"
    deleteButton.style.display = "none"
}

function saveEdit(task: HTMLElement): void {
    const checkbox = task.querySelector(".checkbox") as HTMLInputElement
    const taskSpan = task.querySelector(".taskSpan") as HTMLSpanElement
    const editInput = task.querySelector(".editInput") as HTMLInputElement
    const editButton = task.querySelector(".editButton") as HTMLButtonElement
    const saveButton = task.querySelector(".saveButton") as HTMLButtonElement
    const cancelButton = task.querySelector(".cancelButton") as HTMLButtonElement
    const deleteButton = task.querySelector(".deleteButton") as HTMLButtonElement

    if (editInput.value.trim() === "") {
        cancelEdit(task)
        return
    }

    taskSpan.textContent = editInput.value.trim()

    checkbox.style.display = "inline"
    taskSpan.style.display = "inline"
    editInput.style.display = "none"
    editButton.style.display = "inline"
    saveButton.style.display = "none"
    cancelButton.style.display = "none"
    deleteButton.style.display = "inline"
}

function cancelEdit(task: HTMLElement): void {
    const checkbox = task.querySelector(".checkbox") as HTMLInputElement
    const taskSpan = task.querySelector(".taskSpan") as HTMLSpanElement
    const editInput = task.querySelector(".editInput") as HTMLInputElement
    const editButton = task.querySelector(".editButton") as HTMLButtonElement
    const saveButton = task.querySelector(".saveButton") as HTMLButtonElement
    const cancelButton = task.querySelector(".cancelButton") as HTMLButtonElement
    const deleteButton = task.querySelector(".deleteButton") as HTMLButtonElement

    checkbox.style.display = "inline"
    taskSpan.style.display = "inline"
    editInput.style.display = "none"
    editButton.style.display = "inline"
    saveButton.style.display = "none"
    cancelButton.style.display = "none"
    deleteButton.style.display = "inline"
}

function deleteTask(task: HTMLElement): void {
    taskList.removeChild(task)
}

document.querySelector("input")?.addEventListener("keypress", (event: KeyboardEvent) => {
    if (event.key === "Enter") {
        addTask()
    }
})