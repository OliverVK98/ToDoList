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

// document.getElementById('inbox').addEventListener('click', () => {
//     document.getElementById('buttondisplay').innerHTML = 'Inbox';
//     if (document.getElementById('addtask')) document.getElementById('addtask').remove();
//     if (classTrack.length != 0) displayTask(JSON.parse(localStorage.getItem('classTrack')));

//     let addtask = document.createElement('button');
//     addtask.id = 'addtask';
//     addtask.innerHTML = '+ Add Task';
//     content.appendChild(addtask);
//     document.getElementById('addtask').addEventListener('click', () => {
//         addTask(classTrack);
//     })

//     for (let k = 0; k < classTrack.length; k++) {
//         if (document.getElementById(`button${classTrack[k].id}`)) document.getElementById(`button${classTrack[k].id}`).addEventListener('click', () => {
//             document.getElementById(classTrack[k].id).remove();
//             classTrack[k].id = null;
//         })
//     }
// })

document.getElementById('today').addEventListener('click', () => {
    document.getElementById('buttondisplay').innerHTML = 'Today';
    if (document.getElementById('addtask')) document.getElementById('addtask').remove();
    addToday(JSON.parse(localStorage.getItem('classTrack')));


})

document.getElementById('thisweek').addEventListener('click', () => {
    document.getElementById('buttondisplay').innerHTML = 'This Week';
    if (document.getElementById('addtask')) document.getElementById('addtask').remove();
    addWeek(classTrack);

    for (let k = 0; k < classTrack.length; k++) {
        if (document.getElementById(`button${classTrack[k].id}`)) document.getElementById(`button${classTrack[k].id}`).addEventListener('click', () => {
            document.getElementById(classTrack[k].id).remove();
            classTrack[k].id = null;
        })
    }
})