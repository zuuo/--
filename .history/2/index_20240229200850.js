gsap.registerPlugin(ScrollTrigger)

gsap.fromTo(".box", {
    backgroundPositionY: `0px`,
}, {
    backgroundPositionY: `0px`,
    ease: "none",
    scrollTrigger: {
        trigger: ".box",
        scrub: true,
    }
})