gsap.registerPlugin(ScrollTrigger)

gsap.fromTo(".box", {
    backgroundPositionY: `0px`,
}, {
    backgroundPositionY: `${window.innerHeight / 1}px`,
    ease: "none",
    scrollTrigger: {
        trigger: ".box",
        scrub: true,
    }
})