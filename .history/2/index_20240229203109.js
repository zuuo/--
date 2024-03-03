gsap.registerPlugin(ScrollTrigger)
var boxs = document.querySelectorAll(".box")
boxs.forEach((box) => {
    gsap.fromTo(box, {
        backgroundPositionY: `-${2000}px`,
    }, {
        backgroundPositionY: `${2000}px`,
        ease: "none",
        scrollTrigger: {
            trigger: box,
            scrub: true,
        }
    })
})