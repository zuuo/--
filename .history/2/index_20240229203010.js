gsap.registerPlugin(ScrollTrigger)
var boxs = document.querySelectorAll(".box")
boxs.forEach((box) => {
    gsap.fromTo(box, {
        backgroundPositionY: `-${window.innerHeight / 3}px`,
    }, {
        backgroundPositionY: `${window.innerHeight / 3}px`,
        ease: "none",
        scrollTrigger: {
            trigger: box,
            scrub: true,
        }
    })
})