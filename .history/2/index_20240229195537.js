gsap.registerPlugin(ScrollTrigger)

gsap.fromTo(".box", {
    backgroundPositionY: "0",
}, {
    backgroundPositionY: "5000px",
    ease: "none",
    scrollTrigger: {
        trigger: "body",
        scrub: true,
    }
})