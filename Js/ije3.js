gsap.registerPlugin(ScrollTrigger);


/*ScrollTrigger.create({
    start:"-20% top",
    duration:20,
    scrub:1,
    trigger:"..grad",
    toggleClass:{targets:".grad", className:"visible"},
    toggleActions:"play pause reverse reset",
})*/

/*ScrollTrigger.create({
    start:"-20% center",
    duration:20,
    scrub:1,
    trigger:".description",
    toggleClass:{targets:".description", className:"visible"},
    toggleActions:"play pause reverse reset",
})*/

ScrollTrigger.create({
    start:"top center",
    duration:4,
    scrub:1,
    trigger:".expertise",
    toggleClass:{targets:".expertise", className:"visible"},
})


ScrollTrigger.create({
    start:"-20% center",
    end:"100% center",
    duration:4,
    scrub:1,
    trigger:".diaporama",
    toggleClass:{targets:".diaporama", className:"visible"},
})