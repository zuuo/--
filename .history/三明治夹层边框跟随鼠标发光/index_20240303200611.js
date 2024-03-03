const cards = document.querySelectorAll(".card");
document.addEventListener("mousemove", function(ev) {
    console.log(ev);
    cards.forEach(card => {
        let rect = card.getBoundingClientRect();
        console.log(rect);
        // card.style["--posX"] = `${2}px`;
        // card.style["--posY"] = `${1}px`;
    });
})