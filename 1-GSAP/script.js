// to = where you should go
// from =witch places to where you should come




// =================================BOX Animation========================================================
// Means: move the box TO x = 500 from its current position


// gsap.to("#box", {
//     x: 500,
//     y:200,
//     duration: 1,
//     delay: 2,
//     rotate:360,
//     backgroundColor:"white",
//     borderRadius:"50%",
//     scale:2 //size will be large when it is moved
// });


// Means: start the box FROM x = 500 and animate back to its original position

// gsap.from("#box2", {
//     x: 500,
//     duration: 1,
//     delay: 2
// });
// gsap.to("#box3", {
//     x: 500,
//     y:-200,
//     duration: 1,
//     delay: 2
// });


// ============================================repeat====================================================
// gsap.to("#repeat", {
//     x:500,
//     duration:2,
//     delay:1,
//     rotate: 360,
//     borderRadius: "50%",
//     // repeat:1  //repeat only one time
//     repeat: -1, //infinite time repeat
//     yoyo: true // back to initial state [age moto hoy back animation kore]
// });


// ============================================TEXT Animation==========================================

// gsap.from("h1" , {
//     color:"crimson",
//     duration:2,
//     delay:1
// })

// gsap.to("h1" , {
//     color:"white",
//     duration:2,
//     delay:1
// })

// gsap.from("h1" , {
//     opacity:0,
//     duration:2,
//     y:50,
//     delay:1,
//     // stagger:1 ,// target one [teg] to do animation then another like loop first one then second one then third one
//     stagger:-1
// })


// ================================================timelines===============================================
// synchronous[one after another]

// ================first example [duration:1 + delay:1 = delay:2 , delay:2 + duration:1 = delay:3]


// gsap.to("#box" ,{
//     x:500,
//     rotate:360,
//     borderRadius: "50%",
//     duration:1,
//     delay:1
// })
// gsap.to("#box2" ,{
//     x:500,
//     rotate:360,
//     borderRadius: "30%",
//     duration:1,
//     delay:2
// })
// gsap.to("#box3" ,{
//     x:500,
//     rotate:360,
//     scale:1,
//     duration:1,
//     delay:3
// })



// ================SECOND Example [same work different way no calculation needed [unlike first example]]

// let tl = gsap.timeline();

// tl.to("#box" ,{
//     x:500,
//     rotate:360,
//     borderRadius: "50%",
//     duration:1,
//     delay:1
// })
// tl.to("#box2" ,{
//     x:500,
//     rotate:360,
//     borderRadius: "30%",
//     duration:1,
//     delay:1
// })
// tl.to("#box3" ,{
//     x:500,
//     rotate:360,
//     scale:1,
//     duration:1,
//     delay:1
// })


// ==============================Third example

let tl = gsap.timeline();

tl.from("h2" ,{
    y:-30,
    opacity:0,
    duration:1,
    delay:1
})

tl.from("h4" ,{
    y:-30,
    opacity:0,
    duration:1,
    stagger: 0.3
})

tl.from("h1" ,{
    y:30,
    opacity:0,
    duration:1,
    scale: 1
})





