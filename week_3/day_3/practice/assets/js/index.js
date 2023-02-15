const addTaskButton = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

addTaskButton.addEventListener("click", function (event) {
    const newTask = document.getElementById("newTask");
    if (!newTask.value) {
        alert("Inserisci un nome per il task");
        return;
    }

    const taskItem = document.createElement("li");
    taskItem.textContent = newTask.value;
    taskList.appendChild(taskItem);

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Elimina";
    taskItem.appendChild(deleteButton);

    deleteButton.addEventListener("click", function () {
        taskList.removeChild(taskItem);
    });
    newTask.value = '';
});