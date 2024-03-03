gsap.registerPlugin(ScrollTrigger)

gsap.fromTo(".box", {
    backgroundPositionY: "100vh",
}, {
    backgroundPositionY: "0px",
    ease: "none",
    scrollTrigger: {
        trigger: "body",
        scrub: true,
    }
})