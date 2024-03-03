const cards = document.querySelectorAll(".card");
document.addEventListener("mousemove", function(ev) {
    console.log(ev);
    cards.forEach(card => {
        let rect = card.getBoundingClientRect();
        console.log(rect);
        let x = ev.clientX - rect.left;
        let y = ev.clientY - rect.top;
        card.style["--posX"] = `${x}px`;
        card.style["--posY"] = `${y}px`;
    });
})