//DOM
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

//Global Vars
let toDoInbox = [];
let inboxMapIndex = 0;
let leftBarBtns = [inboxBtn,todayBtn,projectsBtn];
let activeBtn = leftBarBtns[0]; //to track which array to put the Task objects
let inboxItems = [];
let todayItems = [];
let projectItems = [];
var arrObj = {
    inboxBtn:inboxItems,
    taskBtn:todayItems,
    projectsBtn:projectItems
};

//Event Listeners
taskBtn.addEventListener('click', addTask);
taskModalSubmitBtn.addEventListener('click',taskModalSubmit)
inboxBtn.addEventListener('click',(e) => handleLeftBarBtn(e));
todayBtn.addEventListener('click',(e) => handleLeftBarBtn(e));
projectsBtn.addEventListener('click',(e) => handleLeftBarBtn(e));

//Object to hold Indivdual to do items
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
    setLeftBarActiveBtn(e.target.id);
}
function setLeftBarActiveBtn(btn){
 for (i=0;i<leftBarBtns.length;i++){
    leftBarBtns[i].classList.remove('active');
    if (leftBarBtns[i].id==btn){
        leftBarBtns[i].classList.add('active');
        activeBtn = leftBarBtns[i];
    }
 }
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
    drawTask(task);
    toDoInbox.push(task);
}

function drawTask(task){
    let taskBlock = document.createElement('div');
    taskBlock.classList.add('taskBlock');
    taskBlock.innerHTML ="<div class = 'taskBlockName'>"+ task.name + "</div><br>Description: <br>" + task.desc + "<br>Due Date:<br>" + task.Due + "<br>Priority:<br>" + task.priority + "<br>Notes:<br>" + task.notes;
    taskGrid.appendChild(taskBlock);
}

function populateTasks(array){
    for (i=0;i<array.length;i++){
        let taskBlock = document.createElement('div');
        taskBlock.classList.add('taskBlock');
        taskBlock.innerHTML ="<div class = 'taskBlockName'>"+ array[i].name + "</div><br>Description: <br>" + array[i].desc + "<br>Due Date:<br>" + array[i].Due + "<br>Priority:<br>" + array[i].priority + "<br>Notes:<br>" + array[i].notes;
        taskGrid.appendChild(taskBlock);
    }
}

