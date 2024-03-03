gsap.registerPlugin(ScrollTrigger)
var boxs = document.querySelectorAll(".box")
boxs.forEach((box) => {
    gsap.fromTo(box, {
        backgroundPositionY: `-${window.innerHeight}px`,
    }, {
        backgroundPositionY: `${window.innerHeight}px`,
        ease: "none",
        scrollTrigger: {
            trigger: box,
            scrub: true,
        }
    })
})