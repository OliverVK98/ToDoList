import Task from "./displaytask";
import editFunc from './editfunc';
let div = 0;

function addTask(classTrack) {
    let content = document.getElementById('content');
    let addButton = document.getElementById('addtask');

    content.removeChild(addButton);
    let newForm = document.createElement('form');
    newForm.id = 'userform';
    content.appendChild(newForm);

    let inputDiv = ['title', 'description', 'duedate', 'priority'];
    let inputDivEl = ['input', 'textarea', 'input', 'select'];
    let inputDivType = ['text', 'text', 'date', 'select'];
    let legendDiv = ['ltitle', 'ldescription', 'lduedate', 'lpriority'];
    let legendInner = ['Title', 'Description', 'Due Date', 'Priority'];
    let pDiv = ['ptitle', 'pdescription', 'pduedate', 'ppriority'];
    for (let i = 0; i < inputDiv.length; i++) {
        if (i != 1) {
            window[inputDiv[i]] = document.createElement(inputDivEl[i]);
            window[inputDiv[i]].id = `${inputDiv[i]}`;
            if (i < 3) window[inputDiv[i]].type = inputDivType[i];
            window[legendDiv[i]] = document.createElement('legend');
            window[legendDiv[i]].id = `${legendDiv[i]}`;
            window[legendDiv[i]].innerHTML = legendInner[i];
            window[pDiv[i]] = document.createElement('p');
            window[pDiv[i]].id = `${pDiv[i]}`;
            newForm.appendChild(window[legendDiv[i]]);
            window[legendDiv[i]].appendChild(window[pDiv[i]]);
            window[pDiv[i]].appendChild(window[inputDiv[i]]);
        } else {
            window[inputDiv[i]] = document.createElement(inputDivEl[i]);
            window[inputDiv[i]].id = `${inputDiv[i]}`;
            window[legendDiv[i]] = document.createElement('legend');
            window[legendDiv[i]].id = `${legendDiv[i]}`;
            window[legendDiv[i]].innerHTML = legendInner[i];
            window[pDiv[i]] = document.createElement('p');
            window[pDiv[i]].id = `${pDiv[i]}`;
            newForm.appendChild(window[legendDiv[i]]);
            window[legendDiv[i]].appendChild(window[pDiv[i]]);
            window[pDiv[i]].appendChild(window[inputDiv[i]]);
        }
    }
    description.rows = '1';
    let priorityDiv = ['nu', 'u', 'vu'];
    let priorityInner = ['Not Urgent', 'Urgent', 'Very Urgent'];
    let priorityColor = ['rgb(170, 255, 170)', 'rgb(255,250,156)', 'rgb(253,152,0)']
    for (let i = 0; i < priorityDiv.length; i++) {
        window[priorityDiv[i]] = document.createElement('option');
        window[priorityDiv[i]].value = priorityInner[i];
        window[priorityDiv[i]].innerHTML = priorityInner[i];
        window[priorityDiv[i]].style = `background-color: ${priorityColor[i]}`;
        priority.appendChild(window[priorityDiv[i]]);
    }
    priority.addEventListener('change', () => {
        if (priority.value === 'Not Urgent') priority.style.backgroundColor = 'rgb(170, 255, 170)';
        if (priority.value === 'Urgent') priority.style.backgroundColor = 'rgb(255,250,156)';
        if (priority.value === 'Very Urgent') priority.style.backgroundColor = 'rgb(253,152,0)';
    })
    let buttonDiv = ['add', 'cancel'];
    let buttonInner = ['Add', 'Cancel'];
    for (let i = 0; i < buttonDiv.length; i++) {
        window[buttonDiv[i]] = document.createElement('button');
        window[buttonDiv[i]].id = `${buttonDiv[i]}`;
        window[buttonDiv[i]].innerHTML = buttonInner[i];
        newForm.appendChild(window[buttonDiv[i]]);
    }
    add.type = 'submit';
    add.addEventListener('click', () => {
        let task = new Task(title.value, description.value, duedate.value, priority.value, div);
        classTrack.push(task);
        classTrack.sort(function(a, b) {
            return new Date(a.date) - new Date(b.date);
        });
        task.displayTask(classTrack);
        editFunc();
        let rbuttons = document.querySelectorAll('.userbutton');
        rbuttons.forEach(userbutton => {
            userbutton.addEventListener('click', () => {
                classTrack = classTrack.filter(element => {
                        return element.getId() != null;
                    })
                    // console.log(classTrack);
            })
        });

        // console.log(classTrack);
        div++;
        newForm.remove();
        let addtask = document.createElement('button');
        addtask.id = 'addtask';
        addtask.innerHTML = '+Add Task';
        content.appendChild(addtask);
        document.getElementById('addtask').addEventListener('click', () => {
            addTask(classTrack);
        })
    })
    newForm.addEventListener('submit', (event) => {
        event.preventDefault();
    })
    cancel.addEventListener('click', () => {
        newForm.remove();
        let addtask = document.createElement('button');
        addtask.id = 'addtask';
        addtask.innerHTML = '+Add Task';
        content.appendChild(addtask);
        document.getElementById('addtask').addEventListener('click', () => {
            addTask();
        })
    })
}

export default addTask