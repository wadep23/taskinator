var formEl = document.querySelector('#task-form');
var tasksToDoEl = document.querySelector("#tasks-to-do");

// creating a function to duplicate the anonymous function in event listener.
var createTaskHandler = function() {
    event.preventDefault();
    
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.textContent = "This is a new task.";
    tasksToDoEl.appendChild(listItemEl);
    
}

// Create a new task item using event listener for button click.
formEl.addEventListener("submit", createTaskHandler);

