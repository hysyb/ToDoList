let taskBtn = document.getElementById('addTaskBtn');
let taskModalBtn = document.getElementById('addTaskModalBtn');
let taskModal = document.getElementById('addTaskModal');
taskBtn.addEventListener('click', addTask);

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
   // makeTask();
   // clearForm();
}

