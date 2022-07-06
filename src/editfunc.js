function editFunc() {
    let titles = document.querySelectorAll('.usertitle');
    titles.forEach(title => {
        title.addEventListener('click', () => {
            title.contentEditable = 'true';
        })
    });

    let descriptions = document.querySelectorAll('.userdesc');
    descriptions.forEach(description => {
        description.addEventListener('click', () => {
            description.contentEditable = 'true';
        })
    });

    let dates = document.querySelectorAll('.userdate');
    dates.forEach(date => {
        date.addEventListener('click', () => {
            date.contentEditable = 'true';
        })
    });
}


export default editFunc