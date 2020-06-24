var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({
    triggerElement: ".aboutpic",
    triggerHook: 0.8,
    duration: "110%",
})
.setClassToggle(".aboutpic", "visible")

.addTo(controller);

var scene2 = new ScrollMagic.Scene({
    triggerElement: ".bio",
    triggerHook: 0.8,
    duration: "110%",
    
})
.setClassToggle(".bio", "visible")

.addTo(controller);

var scene3 = new ScrollMagic.Scene({
    triggerElement: ".description",
    triggerHook: 0.8,
    duration: "110%",
})
.setClassToggle(".description", "visible")

.addTo(controller);

var scene4 = new ScrollMagic.Scene({
    triggerElement: ".ptitle",
    triggerHook: 0.8,
    duration: "110%",
    
})
.setClassToggle(".ptitle", "visible")

.addTo(controller);

var scene5 = new ScrollMagic.Scene({
    triggerElement: ".ptext",
    triggerHook: 0.8,
    duration: "110%",
})
.setClassToggle(".ptext", "visible")

.addTo(controller);


var scene6 = new ScrollMagic.Scene({
    triggerElement: ".instasec",
    triggerHook: 1,
    duration: "2000%",
    offset: 0
})
.setClassToggle(".insta", "visible")

.addTo(controller);

var scene7 = new ScrollMagic.Scene({
    triggerElement: ".contact h1",
    triggerHook: 0.8,
    duration: "100%",
})
.setClassToggle(".contact h1", "visible")

.addTo(controller);

var scene8 = new ScrollMagic.Scene({
    triggerElement: ".contact h1",
    triggerHook: 0.8,
    duration: "110%",
})
.setClassToggle(".contact button", "visible")

.addTo(controller);

var scene9 = new ScrollMagic.Scene({
    triggerElement: ".tagline h1",
    triggerHook: 0.8,
    duration: "110%",
})
.setClassToggle(".tagline h1", "visible")

.addTo(controller);


var scene10 = new ScrollMagic.Scene({
    triggerElement: "h3:nth-child(2)",
    triggerHook: 0.8,
    duration: "100%",
})
.setClassToggle("h3:nth-child(2)", "visible")

.addTo(controller);

var scene11 = new ScrollMagic.Scene({
    triggerElement: "h3:nth-child(3)",
    triggerHook: 0.8,
    duration: "110%",
})
.setClassToggle("h3:nth-child(3)", "visible")

.addTo(controller);

var scene12 = new ScrollMagic.Scene({
    triggerElement: "h3:nth-child(4)",
    triggerHook: 0.8,
    duration: "110%",
})
.setClassToggle("h3:nth-child(4)", "visible")

.addTo(controller);

var scene13 = new ScrollMagic.Scene({
    triggerElement: ".ptext",
    triggerHook: 0.8,
    duration: "220%",
})
.setClassToggle(".w", "visible")

.addTo(controller);

var scene14 = new ScrollMagic.Scene({
    triggerElement: ".ptext",
    triggerHook: 0.8,
    duration: "220%",
})
.setClassToggle(".n", "visible")

.addTo(controller);

var scene15 = new ScrollMagic.Scene({
    triggerElement: ".contactformcontainer",
    triggerHook: 0.8,
    duration: "1000%",
})
.setClassToggle(".contactformbox", "visible")

.addTo(controller);



