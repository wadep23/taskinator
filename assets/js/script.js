var formEl = document.querySelector('#task-form');
var tasksToDoEl = document.querySelector("#tasks-to-do");

// creating a function to duplicate the anonymous function in event listener.
var createTaskHandler = function() {
    event.preventDefault();

    var taskNameInput = document.querySelector("input[name = 'task-name']") .value;
    var taskTypeInput = document.querySelector("select[name= 'task-type']").value;
    

    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";

    var taskInfoEl = document.createElement("div");
    taskInfoEl.className = "task-info";

    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskNameInput + "</h3> <span class='task-type'>" + taskTypeInput + "</span>";

    listItemEl.appendChild(taskInfoEl);
    
    tasksToDoEl.appendChild(listItemEl);
    
}

// Create a new task item using event listener.
formEl.addEventListener("submit", createTaskHandler);

