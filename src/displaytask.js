function displayTask(array) {
    content.innerHTML = '';
    for (let k = 0; k < array.length; k++) {

        let userDiv = ['usertask', 'usertitle', 'userhead', 'userdesc', 'userdate', 'userbutton'];
        let userDivEl = ['div', 'h1', 'div', 'div', 'div', 'button'];
        let userInner = ['', array[k].title, '', array[k].description, array[k].date, 'Remove'];
        for (let i = 0; i < userDiv.length; i++) {
            window[userDiv[i]] = document.createElement(userDivEl[i]);
            window[userDiv[i]].classList.add(`${userDiv[i]}`);
            if (userInner != '') window[userDiv[i]].innerHTML = userInner[i];
        }

        usertask.id = array[k].id;
        userbutton.id = `button${array[k].id}`;
        content.appendChild(usertask);
        usertask.appendChild(userhead);
        usertask.appendChild(userdesc);
        userhead.appendChild(usertitle);
        userhead.appendChild(userdate);
        usertask.appendChild(userbutton);

        if (array[k].urgency === 'Not Urgent') usertask.style.backgroundColor = 'rgb(170, 255, 170)';
        if (array[k].urgency === 'Urgent') usertask.style.backgroundColor = 'rgb(255,250,156)';
        if (array[k].urgency === 'Very Urgent') usertask.style.backgroundColor = 'rgb(253,152,0)';
        // localStorage.setItem('userlist', JSON.stringify(array));
    }
}

export default displayTask

// let rbuttons = document.querySelectorAll('.userbutton');
// rbuttons.forEach(userbutton => {
//     userbutton.addEventListener('click', () => {
//         classTrack = classTrack.filter(element => {
//                 return element.getId() != null;
//             })
//             // console.log(classTrack);
//     })
// });