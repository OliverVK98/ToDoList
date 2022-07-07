import formatDate from "./formatdate";
import Task from "./task";
import displayTask from "./displaytask";

function addToday(classTrack) {

    let today = formatDate(new Date());

    let newClassTrack = classTrack.filter(element => {
        return element.date === today;
    })

    displayTask(newClassTrack);

}

export default addToday