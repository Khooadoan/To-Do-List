const newTaskInput = document.getElementById("newtask");
const arr = [];
const restoredArr = JSON.parse(localStorage.getItem("tasks"));

for (let i = 0; i < restoredArr.length; i++) {
    addTask(restoredArr[i]);
}

newTaskInput.addEventListener("keypress", function(event) {
    if(event.key == "Enter") {
        event.preventDefault();
        document.getElementById("submit").click();
    }
})

function addTask(task) {
    const newTask = document.createElement("li");
    const taskList = document.getElementById("tasks");
    newTaskInput.value = "";
    arr.push(task);
    localStorage.setItem("tasks", JSON.stringify(arr));

    newTask.textContent = task;
    taskList.appendChild(newTask);

    newTask.addEventListener("click", function() {
        if (newTask.className !== "deleted") {
        newTask.className = "deleted";
        arr.splice(arr.indexOf(task), 1);
        localStorage.setItem("tasks", JSON.stringify(arr));
        } else {
           taskList.removeChild(this);
        }
    });
};

