let container = document.getElementById('container');

function buildPage() {
    let pageDiv = ['header', 'sidebar', 'contentpage'];
    for (let i = 0; i < pageDiv.length; i++) {
        window[pageDiv[i]] = document.createElement('div');
        window[pageDiv[i]].id = `${pageDiv[i]}`;
        container.appendChild(window[pageDiv[i]]);
    }
    header.innerHTML = 'Todo List';
    let sidebarDiv = ['inbox', 'today', 'thisweek']; //, 'projects', 'addproject'
    let sidebarDivEl = ['button', 'button', 'button', 'h1', 'button', 'p'];
    let sidebarInner = ['Inbox', 'Today', 'This week', 'Projects', '+ Add Project'];
    for (let i = 0; i < sidebarDiv.length; i++) {
        window[sidebarDiv[i]] = document.createElement(sidebarDivEl[i]);
        window[sidebarDiv[i]].id = `${sidebarDiv[i]}`;
        sidebar.appendChild(window[sidebarDiv[i]]);
        window[sidebarDiv[i]].innerHTML = sidebarInner[i];
    }
    let contentDiv = ['buttondisplay', 'content', 'addtask'];
    let contentDivEl = ['h1', 'div', 'button'];
    let contentInner = ['Inbox', '', '+ Add Task']
    for (let i = 0; i < contentDiv.length; i++) {
        window[contentDiv[i]] = document.createElement(contentDivEl[i]);
        window[contentDiv[i]].id = `${contentDiv[i]}`;
        if (contentInner[i] != '') window[contentDiv[i]].innerHTML = contentInner[i];
    }
    contentpage.appendChild(buttondisplay);
    contentpage.appendChild(content);
    content.appendChild(addtask);
}

export default buildPage