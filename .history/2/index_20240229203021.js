gsap.registerPlugin(ScrollTrigger)
var boxs = document.querySelectorAll(".box")
boxs.forEach((box) => {
    gsap.fromTo(box, {
        backgroundPositionY: `-${window.innerHeight / 100}px`,
    }, {
        backgroundPositionY: `${window.innerHeight / 100}px`,
        ease: "none",
        scrollTrigger: {
            trigger: box,
            scrub: true,
        }
    })
})