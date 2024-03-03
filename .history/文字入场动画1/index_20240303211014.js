const titleElements = document.querySelectorAll('.title p');
titleElements.forEach(element => {
    let context = element.textContent;
    let spanElements = context.split('').map(letter => `<span>${letter ? letter : '&nbsp;'}</span>`).join('');
    element.innerHTML = spanElements;
});