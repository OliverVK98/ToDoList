let divId = 0;

class Task {
    constructor(title, description, date, urgency) {
        this.title = title;
        this.description = description;
        this.date = date;
        this.urgency = urgency;
    }

    displayTask() {
        console.log(divId);
        let userDiv = ['usertask', 'usertitle', 'userhead', 'userdesc', 'userdate', 'userbutton'];
        let userDivEl = ['div', 'h1', 'div', 'div', 'div', 'button'];
        let userInner = ['', this.title, '', this.description, `Due date: ${this.date}`, 'Remove'];
        for (let i = 0; i < userDiv.length; i++) {
            window[userDiv[i]] = document.createElement(userDivEl[i]);
            window[userDiv[i]].classList.add(`${userDiv[i]}`);
            if (userInner != '') window[userDiv[i]].innerHTML = userInner[i];
        }
        usertask.id = divId;
        content.appendChild(usertask);
        usertask.appendChild(userhead);
        usertask.appendChild(userdesc);
        userhead.appendChild(usertitle);
        userhead.appendChild(userdate);
        usertask.appendChild(userbutton);
        if (this.urgency === 'Not Urgent') usertask.style.backgroundColor = 'rgb(170, 255, 170)';
        if (this.urgency === 'Urgent') usertask.style.backgroundColor = 'rgb(255,250,156)';
        if (this.urgency === 'Very Urgent') usertask.style.backgroundColor = 'rgb(253,152,0)';
        console.log(document.getElementById(divId));
        console.log(userbutton);
        userbutton.addEventListener('click', () => {
            document.getElementById(divId).remove();
        })
        divId++;
    }

}

export default Task