const addTaskButton = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

var clearText = (newTask) => {
    newTask.value = '';
}

var createDeleteButton = (taskItem) => {
    let deleteButton = document.createElement("button");
    deleteButton.classList.add("Button");
    deleteButton.textContent = "Elimina";
    taskItem.appendChild(deleteButton);
    return deleteButton;
}

var createLabelItem = (taskItem) => {
    let labelItem = document.createElement("label");
    labelItem.textContent = newTask.value;
    labelItem.classList.add("custom-label");
    labelItem.addEventListener("click", function () {
        if (labelItem.style.textDecoration === "none") {
            labelItem.style.textDecoration = 'line-through';
        }
        else {
            labelItem.style.textDecoration = "none";
        }
    });
    taskItem.appendChild(labelItem);
}

var createTaskItem = () => {
    let taskItem = document.createElement("li");
    taskItem.classList.add("custom-li");
    taskList.appendChild(taskItem);
    return taskItem;
}

var deleteTask = (deleteButton, taskItem) => {
    deleteButton.addEventListener("click", function () {
        taskList.removeChild(taskItem);
    });
}

addTaskButton.addEventListener("click", function (event) {
    const newTask = document.getElementById("newTask");
    if (!newTask.value) {
        alert("Inserisci un nome per il task");
        return;
    }
    const taskItem = createTaskItem();
    createLabelItem(taskItem)
    const deleteButton = createDeleteButton(taskItem);
    deleteTask(deleteButton, taskItem);
    clearText(newTask);
});