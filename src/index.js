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
    document.getElementById('buttondisplay').innerHTML = 'Inbox';
    if (document.getElementById('addtask')) document.getElementById('addtask').remove();
    let task = new Task('', '', '', '', '');
    if (classTrack.length != 0) task.displayTask(classTrack);
    let addtask = document.createElement('button');
    addtask.id = 'addtask';
    addtask.innerHTML = '+ Add Task';
    content.appendChild(addtask);
    document.getElementById('addtask').addEventListener('click', () => {
        addTask(classTrack);
    })
})

document.getElementById('today').addEventListener('click', () => {
    document.getElementById('buttondisplay').innerHTML = 'Today';
    if (document.getElementById('addtask')) document.getElementById('addtask').remove();
    addToday(classTrack);
})

document.getElementById('thisweek').addEventListener('click', () => {
    document.getElementById('buttondisplay').innerHTML = 'This Week';
    if (document.getElementById('addtask')) document.getElementById('addtask').remove();
    addWeek(classTrack);
})