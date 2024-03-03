gsap.registerPlugin(ScrollTrigger)
var box = document.querySelectorAll(".box")
gsap.fromTo(box, {
    backgroundPositionY: `-${200}px`,
}, {
    backgroundPositionY: `${200}px`,
    ease: "none",
    scrollTrigger: {
        trigger: box,
        scrub: true,
    }
})