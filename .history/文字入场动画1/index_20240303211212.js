const titleElements = document.querySelectorAll('.title');
titleElements.forEach(element => {
    let context = element.textContent;
    let spanElements = context.split('').map(letter => `<span>${letter.trim() ? letter : '&nbsp;'}</span>`).join('');
    element.innerHTML = spanElements;
});