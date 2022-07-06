import formatDate from "./formatdate";
import Task from "./displaytask";

function addToday(classTrack) {

    let today = formatDate(new Date());

    let newClassTrack = classTrack.filter(element => {
        return element.date === today;
    })

    let task = new Task('', '', '', '', '');
    task.displayTask(newClassTrack);

}

export default addToday