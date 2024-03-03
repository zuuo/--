const cards = document.querySelectorAll(".card");
document.addEventListener("mousemove", function(ev) {
    cards.forEach(card => {
        let rect = card.getBoundingClientRect();
        let x = ev.clientX - rect.left;
        let y = ev.clientY - rect.top;
        card.style.setProperty("--posX", `${x}px`);
        card.style.setProperty("--posY", `${y}px`);
    });
})

document.addEventListener("mouseleave", function(ev) {
    cards.forEach(card => {
        card.style.removeProperty("--posX");
        card.style.removeProperty("--posY");
    });
})