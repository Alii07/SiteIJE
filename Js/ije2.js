gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
    start:"70% center",
    duration:4,
    scrub:1,
    trigger:".center",
    toggleClass: "bdt",
    toggleClass:{targets:".barredetaches", className:"bdt"},
})

ScrollTrigger.create({
    start:"70% center",
    duration:4,
    scrub:1,
    trigger:".center",
    toggleClass:{targets:".img", className:"vis"},
})