const titleElements = document.querySelectorAll('.title p');
titleElements.forEach(element => {
    const span = document.createElement('span');
    element.appendChild(span);
});