gsap.registerPlugin(ScrollTrigger)

gsap.fromTo(".box", {
    backgroundPositionY: `-${window.innerHeight / 2}px`,
}, {
    backgroundPositionY: `${window.innerHeight / 1}px`,
    ease: "none",
    scrollTrigger: {
        trigger: "body",
        scrub: true,
    }
})