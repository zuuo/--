gsap.registerPlugin(ScrollTrigger)

gsap.fromTo(".box", {
    backgroundPositionY: "-20vh",
}, {
    backgroundPositionY: "10vh",
    ease: "none",
    scrollTrigger: {
        trigger: "body",
        scrub: true,
    }
})