var formEl = document.querySelector('#task-form');
var tasksToDoEl = document.querySelector("#tasks-to-do");

// creating a function to pull data from from.
var taskFormHandler = function(event) {
    event.preventDefault();

    var taskNameInput = document.querySelector("input[name = 'task-name']") .value;
    var taskTypeInput = document.querySelector("select[name= 'task-type']").value;
    
    // package data as object
    var taskDataObj = {
        name: taskNameInput,
        type: taskTypeInput
    };
    // send data as an argument to createTaskEl
    createTaskEl(taskDataObj);
}

// created a function to use form data to update list.
var createTaskEl = function(taskDataObj) {
    // create list item
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    // create div to hold task info and add to list item
    var taskInfoEl = document.createElement("div");
    taskInfoEl.className = "task-info";    
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3> <span class='task-type'>" + taskDataObj.type + "</span>";    
    listItemEl.appendChild(taskInfoEl);

    tasksToDoEl.appendChild(listItemEl);
};

// Create a new task item using event listener.
formEl.addEventListener("submit", taskFormHandler);

