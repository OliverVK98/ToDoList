import formatDate from "./formatdate";
import Task from "./task";
import displayTask from "./displaytask";

function addWeek() {
    let newDays;
    let day = moment().startOf('isoWeek');
    let endOfWeek = moment().endOf('isoWeek');
    let days = [];

    while (day <= endOfWeek) {
        days.push(day.toDate());
        day = day.clone().add(1, 'd');
    }

    newDays = days.map(formatDate);

    let classTrack = JSON.parse(localStorage.getItem('classTrack'));

    let newClassTrack = classTrack.filter(element => {
        return newDays.includes(element.date);
    })

    localStorage.setItem('classTrack', JSON.stringify(newClassTrack));

    displayTask();

    localStorage.setItem('classTrack', JSON.stringify(classTrack));
}

export default addWeek