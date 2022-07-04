class Task {
    constructor(title, description, date, urgency) {
        this.title = title;
        this.description = description;
        this.date = date;
        this.urgency = urgency;
    }

    displayTask() {
        let userDiv = ['usertask', 'usertitle', 'user0', 'userdesc', 'userdate'];
        let userDivEl = ['div', 'h1', 'div', 'div', 'div'];
        let userInner = ['', this.title, '', this.description, this.date];
        for (let i = 0; i < userDiv.length; i++) {
            window[userDiv[i]] = document.createElement(userDivEl[i]);
            window[userDiv[i]].id = `${userDiv[i]}`;
            if (userInner != '') window[userDiv[i]].innerHTML = userInner[i];
        }
        content.appendChild(usertask);
        usertask.appendChild(usertitle);
        usertask.appendChild(user0);
        user0.appendChild(userdesc);
        user0.appendChild(userdate);
    }

    displayConsole() {
        console.log(this.title, this.description, this.date, this.urgency);
    }
}

export default Task