import buildPage from './builder'
import './styles/styles.css'
import addTask from './addtask'
import addToday from './addtoday'
import addWeek from './addweek';
import Task from './displaytask'

let classTrack = [];

buildPage();

document.getElementById('addtask').addEventListener('click', () => {
    addTask(classTrack);
})

document.getElementById('inbox').addEventListener('click', () => {
    if (document.getElementById('addtask')) document.getElementById('addtask').remove();
    let addtask = document.createElement('button');
    addtask.id = 'addtask';
    addtask.innerHTML = '+ Add Task';
    content.appendChild(addtask);
    let task = new Task('', '', '', '', '');
    task.displayTask(classTrack);
    document.getElementById('addtask').addEventListener('click', () => {
        addTask(classTrack);
    })
})

document.getElementById('today').addEventListener('click', () => {
    if (document.getElementById('addtask')) document.getElementById('addtask').remove();
    addToday(classTrack);
})

document.getElementById('thisweek').addEventListener('click', () => {
    if (document.getElementById('addtask')) document.getElementById('addtask').remove();
    addWeek(classTrack);
})