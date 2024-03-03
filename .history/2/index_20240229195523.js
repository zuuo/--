gsap.registerPlugin(ScrollTrigger)

gsap.fromTo(".box", {
    backgroundPositionY: "0",
}, {
    backgroundPositionY: "50px",
    ease: "none",
    scrollTrigger: {
        trigger: "body",
        scrub: true,
    }
})