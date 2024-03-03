const cards = document.querySelectorAll(".card");
document.addEventListener("mousemove", function(ev) {
    console.log(ev);
    cards.forEach(card => {
        card.style["--posX"] = `${2}px`;
        card.style["--posY"] = `${1}px`;
    });
})