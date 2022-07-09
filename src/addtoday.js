import formatDate from "./formatdate";
import displayTask from "./displaytask";

function addToday() {

    let today = formatDate(new Date());

    let classTrack = JSON.parse(localStorage.getItem('classTrack'));

    let newClassTrack = classTrack.filter(element => {
        return element.date === today;
    })

    localStorage.setItem('classTrack', JSON.stringify(newClassTrack));

    displayTask();

    localStorage.setItem('classTrack', JSON.stringify(classTrack));

}

export default addToday