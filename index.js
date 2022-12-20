let taskBtn = document.getElementById('addTaskBtn');
let taskModalBtn = document.getElementById('addTaskModalBtn');
let taskModal = document.getElementById('addTaskModal');
let inboxBtn = document.getElementById('inbox');
let todayBtn = document.getElementById('today');
let projectsBtn = document.getElementById('projects');
let taskModalSubmitBtn = document.getElementById('addTaskModalSubmit')
let taskName = document.getElementById('taskName');
let taskDesc = document.getElementById('taskDesc');
let taskDue = document.getElementById('taskDueDate');
let taskPriority = document.getElementById('taskPriority');
let taskNotes = document.getElementById('taskNotes');
let taskGrid = document.querySelector('.taskGrid');

let toDoInbox = new Map();
let inboxMapIndex = 0;
let leftBarBtns = [inboxBtn,todayBtn,projectsBtn];

taskBtn.addEventListener('click', addTask);
taskModalSubmitBtn.addEventListener('click',taskModalSubmit)
inboxBtn.addEventListener('click',(e) => handleLeftBarBtn(e));
todayBtn.addEventListener('click',(e) => handleLeftBarBtn(e));
projectsBtn.addEventListener('click',(e) => handleLeftBarBtn(e));

class Task {
    constructor(name, desc, dueDate, priority, notes){
        this.name = name;
        this.desc = desc;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
    }
   


}
function handleLeftBarBtn(e){
    console.log(inboxBtn.id);
    console.log(e.target.id);
    console.log(e.target);
    setLeftBarActiveBtn(e.target.id);
}
function setLeftBarActiveBtn(btn){
 //   clearLeftBarActiveBtns();
}

function addTask(){
    taskModal.classList.remove('hide');
}
function taskModalSubmit(){
    taskModal.classList.add('hide');
    makeTask();
   // clearForm();
}
function makeTask(){
    let task = new Task();
    task.name = taskName.value;
    task.desc = taskDesc.value;
    task.Due = taskDue.value;
    task.priority = taskPriority.value;
    task.notes = taskNotes.value;
    let taskBlock = document.createElement('div');
    taskBlock.classList.add('taskBlock');
    taskBlock.innerHTML ="<div class = 'taskBlockName'>"+ task.name + "</div><br>Description: <br>" + task.desc + "<br>Due Date:<br>" + task.Due + "<br>Priority:<br>" + task.priority + "<br>Notes:<br>" + task.notes;
    taskGrid.appendChild(taskBlock);
    toDoInbox.set(inboxMapIndex, task);
    console.log(toDoInbox.get(0));
}

