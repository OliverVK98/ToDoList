import buildPage from './builder'
import './styles/styles.css'
import addTask from './addtask'
import addToday from './addtoday'
import addWeek from './addweek';
import displayTask from './displaytask'

let classTrack = [];

buildPage();

if (JSON.parse(localStorage.getItem('classTrack')) != null) {
    displayTask();
    let addtask = document.createElement('button');
    addtask.id = 'addtask';
    addtask.innerHTML = '+Add Task';
    content.appendChild(addtask);
} else localStorage.setItem('classTrack', JSON.stringify(classTrack));

document.getElementById('addtask').addEventListener('click', () => {
    addTask();
})

document.getElementById('today').addEventListener('click', () => {
    document.getElementById('buttondisplay').innerHTML = 'Today';
    if (document.getElementById('addtask')) document.getElementById('addtask').remove();
    addToday();
})

document.getElementById('thisweek').addEventListener('click', () => {
    document.getElementById('buttondisplay').innerHTML = 'This Week';
    if (document.getElementById('addtask')) document.getElementById('addtask').remove();
    addWeek();
})

document.getElementById('inbox').addEventListener('click', () => {
    document.getElementById('buttondisplay').innerHTML = 'Inbox';
    if (JSON.parse(localStorage.getItem('classTrack')) != null) {
        displayTask();
        let addtask = document.createElement('button');
        addtask.id = 'addtask';
        addtask.innerHTML = '+Add Task';
        content.appendChild(addtask);
        document.getElementById('addtask').addEventListener('click', () => {
            addTask();
        })
    } else {
        document.getElementById('container').innerHTML = '';
        buildPage();
        document.getElementById('addtask').addEventListener('click', () => {
            addTask();
        })
    }
})