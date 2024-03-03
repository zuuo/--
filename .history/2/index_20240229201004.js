gsap.registerPlugin(ScrollTrigger)

gsap.fromTo(".box", {
    // backgroundPositionY: `-${630 / 2}px`,
}, {
    backgroundPositionY: `${630 / 1}px`,
    ease: "none",
    scrollTrigger: {
        trigger: ".box",
        scrub: true,
    }
})