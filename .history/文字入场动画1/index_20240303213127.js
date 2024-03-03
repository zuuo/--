const titleElements = document.querySelectorAll('.title');
titleElements.forEach((element, index) => {
    let context = element.textContent;
    let spanElements = context.split('').map(letter => `<span>${letter.trim() ? letter : '&nbsp;'}</span>`).join('');
    element.innerHTML = spanElements;
});


titleElements.forEach((title, titleIndex) => {
    title.querySelectorAll('span').forEach((span, index) => {
        span.style.setProperty('--delayIndex', (index + titleIndex));
        console.log(span);
    })
})