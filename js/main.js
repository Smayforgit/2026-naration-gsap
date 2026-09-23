/* Import ------------------------------------ */

gsap.registerPlugin(ScrollTrigger, Observer, ScrollToPlugin,Draggable,MotionPathPlugin,InertiaPlugin);

/* variables ----------------------------------------- */

/* Fonctions ----------------------------------------- */

/* Animation premier bloc ---------------------------- */
gsap.from("#movingBlock1", {
    x: '-400px', 
    rotation: 360, 
    duration: 2,
    repeat: true, 
   
})

/* Animation deuxieme bloc ---------------------------- */
gsap.from("#movingBlock2", {

    scrollTrigger: {
        trigger: "#section2",
        start: 'top 50%', 
        end: 'top 10%', 
        markers:true,
        id: 'section2', 
        scrub: 1, 
        toggleActions: 'play none reverse reset', 
    },

    
    y: '50vh', 
    rotation: 1200, 
    duration: 2,
   
})

/* Animation trsoisième bloc ---------------------------- */
let tl = gsap.timeline({
    repeat:-1,
    yoyo: true,
})

tl.to("#movingBlock3",{x:100,})
.to("#movingBlock3",{y:100,})
.to("#movingBlock3",{x:-100,})
.to("#movingBlock3",{y:-100,})

/* Animation quatrieme bloc - Draggable ---------------------------- */

Draggable.create("#movingBlock4",{
    type: "y,x",
    imertia: true,
    dragRestistance: 0.5
    //type: "rotation",//


})
