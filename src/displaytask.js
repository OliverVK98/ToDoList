class Task {
    constructor(title, description, date, urgency, id) {
        this.title = title;
        this.description = description;
        this.date = date;
        this.urgency = urgency;
        this.id = id;
    }

    getId() {
        return this.id;
    }

    displayTask() {
        let userDiv = ['usertask', 'usertitle', 'userhead', 'userdesc', 'userdate', 'userbutton'];
        let userDivEl = ['div', 'h1', 'div', 'div', 'div', 'button'];
        let userInner = ['', this.title, '', this.description, `Due date: ${this.date}`, 'Remove'];
        for (let i = 0; i < userDiv.length; i++) {
            window[userDiv[i]] = document.createElement(userDivEl[i]);
            window[userDiv[i]].classList.add(`${userDiv[i]}`);
            if (userInner != '') window[userDiv[i]].innerHTML = userInner[i];
        }
        usertask.id = this.id;
        userbutton.id = `button${this.id}`;
        content.appendChild(usertask);
        usertask.appendChild(userhead);
        usertask.appendChild(userdesc);
        userhead.appendChild(usertitle);
        userhead.appendChild(userdate);
        usertask.appendChild(userbutton);
        if (this.urgency === 'Not Urgent') usertask.style.backgroundColor = 'rgb(170, 255, 170)';
        if (this.urgency === 'Urgent') usertask.style.backgroundColor = 'rgb(255,250,156)';
        if (this.urgency === 'Very Urgent') usertask.style.backgroundColor = 'rgb(253,152,0)';
        document.getElementById(`button${this.id}`).addEventListener('click', () => {
            document.getElementById(this.id).remove();
            this.title = null;
            this.description = null;
            this.date = null;
            this.urgency = null;
            this.id = null;
        })
    }
}

export default Task