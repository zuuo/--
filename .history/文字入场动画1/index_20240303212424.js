const titleElements = document.querySelectorAll('.title');
titleElements.forEach((element, index) => {
    let context = element.textContent;
    let spanElements = context.split('').map(letter => `<span>${letter.trim() ? letter : '&nbsp;'}</span>`).join('');
    element.innerHTML = spanElements;
});

document.querySelectorAll('.title span').forEach((span, index) => {
    span.style.setProperty('--delayIndex', index);
    console.log(span);
})