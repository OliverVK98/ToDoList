import formatDate from "./formatdate";
import displayTask from "./displaytask";

function addToday(classTrack) {

    let today = formatDate(new Date());

    let newClassTrack = classTrack.filter(element => {
        return element.date === today;
    })

    displayTask(newClassTrack);

    for (let k = 0; k < classTrack.length; k++) {
        if (document.getElementById(`button${classTrack[k].id}`)) document.getElementById(`button${classTrack[k].id}`).addEventListener('click', () => {
            document.getElementById(classTrack[k].id).remove();
            classTrack[k].id = null;
        })
    }

    document.getElementById('inbox').addEventListener('click', () => {
        document.getElementById('buttondisplay').innerHTML = 'Inbox';
        if (document.getElementById('addtask')) document.getElementById('addtask').remove();
        if (classTrack.length != 0) displayTask(JSON.parse(localStorage.getItem('classTrack')));
    })

}

export default addToday