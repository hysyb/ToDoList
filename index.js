let taskBtn = document.getElementById('addTaskBtn');
let taskModalBtn = document.getElementById('addTaskModalBtn');
let taskModal = document.getElementById('addTaskModal');
let taskModalSubmitBtn = document.getElementById('addTaskModalSubmit')
let taskName = document.getElementById('taskName');
let taskDesc = document.getElementById('taskDesc');
let taskDue = document.getElementById('taskDueDate');
let taskPriority = document.getElementById('taskPriority');
let taskNotes = document.getElementById('taskNotes');
let taskGrid = document.querySelector('.taskGrid');
taskBtn.addEventListener('click', addTask);
taskModalSubmitBtn.addEventListener('click',taskModalSubmit)

class Task {
    constructor(name, desc, dueDate, priority, notes){
        this.name = name;
        this.desc = desc;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
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
    console.log(task.name);
    task.desc = taskDesc.value;
    task.Due = taskDue.value;
    task.priority = taskPriority.value;
    task.notes = taskNotes.value;
    let taskBlock = document.createElement('div');
    taskBlock.classList.add('taskBlock');
    taskBlock.innerHTML = task.name + ":<br>Description<br>" + task.desc + "<br>Due Date:<br>" + task.Due + "<br>Priority:<br>" + task.priority + "<br>Notes:<br>" + task.notes;
    taskGrid.appendChild(taskBlock);
    
}

