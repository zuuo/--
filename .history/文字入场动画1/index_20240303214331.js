const titleElements = document.querySelectorAll('.title');
// 遍历title元素
titleElements.forEach((element, index) => {
    // 获取title元素的文本内容
    let context = element.textContent;
    // 将文本内容拆分成字符，并将其转换成span标签
    let spanElements = context.split('').map(letter => `<span>${letter.trim() ? letter : '&nbsp;'}</span>`).join('');
    // 将span标签替换title元素中的文本内容
    element.innerHTML = spanElements;
});

// 定义一个变量letterNum，用于记录当前字符的索引
let letterNum = 0;
// 遍历title元素
titleElements.forEach((title, titleIndex) => {
    // 遍历title元素中的span标签
    title.querySelectorAll('span').forEach((span, index) => {
        // 为span标签设置属性，用于控制动画播放的延迟时间
        span.style.setProperty('--delayIndex', (letterNum + titleIndex * 5));
        // 每次循环letterNum变量加1
        letterNum++
    })
})