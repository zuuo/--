const titleElements = document.querySelectorAll('.title');
titleElements.forEach((element, index) => {
    let context = element.textContent;
    let spanElements = context.split('').map(letter => `<span>${letter.trim() ? letter : '&nbsp;'}</span>`).join('');
    element.innerHTML = spanElements;
});

let letterNum = 0;
titleElements.forEach((title, titleIndex) => {
    title.querySelectorAll('span').forEach((span, index) => {
        letterNum++
        span.style.setProperty('--delayIndex', (letterNum + titleIndex));
        console.log(span);
    })
})