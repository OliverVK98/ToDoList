import formatDate from "./formatdate";
import Task from "./displaytask";

function addWeek(classTrack) {
    let newDays;
    let day = moment().startOf('isoWeek');
    let endOfWeek = moment().endOf('isoWeek');
    let days = [];

    while (day <= endOfWeek) {
        days.push(day.toDate());
        day = day.clone().add(1, 'd');
    }

    newDays = days.map(formatDate);

    let newClassTrack = classTrack.filter(element => {
        return newDays.includes(element.date);
    })

    let task = new Task('', '', '', '', '');
    task.displayTask(newClassTrack);
}

export default addWeek