gsap.registerPlugin(ScrollTrigger)
var box = document.querySelectorAll(".box")
gsap.fromTo(box, {
    backgroundPositionY: `-${window.innerHeight / 2}px`,
}, {
    backgroundPositionY: `${window.innerHeight / 2}px`,
    ease: "none",
    scrollTrigger: {
        trigger: box,
        scrub: true,
    }
})