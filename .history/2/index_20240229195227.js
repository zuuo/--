gsap.registerPlugin(ScrollTrigger)

gsap.fromTo(".box", {
    backgroundPositionY: "400px",
}, {
    backgroundPositionY: "0px",
    duration: 5,
    ease: "none",
})