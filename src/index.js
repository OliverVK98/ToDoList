import buildPage from './builder'
import './styles/styles.css'
import addTask from './addtask'
import addToday from './addtoday'
import addWeek from './addweek';
import Task from './task';
import displayTask from './displaytask'

let classTrack = [];

buildPage();
// classTrack = localStorage.getItem('userlist');

// if (classTrack != null) {
//     classTrack = JSON.parse(localStorage.getItem('userlist'));
//     displayTask(classTrack);
//     let addtask = document.createElement('button');
//     addtask.id = 'addtask';
//     addtask.innerHTML = '+Add Task';
//     content.appendChild(addtask);
//     for (let k = 0; k < classTrack.length; k++) {
//         document.getElementById(`button${classTrack[k].id}`).addEventListener('click', () => {
//             document.getElementById(classTrack[k].id).remove();
//             classTrack[k].id = null;
//         })
//     }
// } else classTrack = []



document.getElementById('addtask').addEventListener('click', () => {
    addTask(classTrack);
})

document.getElementById('inbox').addEventListener('click', () => {
    document.getElementById('buttondisplay').innerHTML = 'Inbox';
    if (document.getElementById('addtask')) document.getElementById('addtask').remove();
    if (classTrack.length != 0) displayTask(classTrack);
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