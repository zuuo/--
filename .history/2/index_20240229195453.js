gsap.registerPlugin(ScrollTrigger)

gsap.fromTo(".box", {
    backgroundPositionY: "400px",
}, {
    backgroundPositionY: "0px",
    ease: "none",
    scrollTrigger: {
        trigger: "body",
        scrub: true,
    }
})