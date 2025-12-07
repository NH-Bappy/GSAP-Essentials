
// =====================================ScrollTrigger==============================
// when you scroll then animation will be click
// gsap.from("#page1 .box" ,{
//     scale:0,
//     delay:1,
//     duration:2,
//     rotate:360,
// })

// gsap.from("#page2 .box" ,{
//     scale:0,
//     delay:1,
//     duration:2,
//     rotate:360,
//     scrollTrigger: "#page2 .box"
// })

// -=====================other way to do that
// gsap.to("#page2 .box" ,{
//     duration:2,
//     rotate:360,
//     borderRadius:"50%",
//     scrollTrigger:{
//         trigger: "#page2 .box", // when to start
//         scroller: "body",
//         // markers: true,// scroll-start  writing show in display if you went you cancel it
//         start: "top 60%", //where to start
//         scrub: 3, //when we scroll the animation will be started without loading the page [Value = true ,false ,1-5]
//     }
// })


// gsap.from("#page3 h1" , {
//     opacity:0,
//     duration:3,
//     x:500,
//     scrollTrigger:{
//         trigger:"#page3 h1",
//         scroller: "body",
//         // start: "top 50%",
//         // scrub: 3,
//     }
// })
// gsap.from("#page3 h2" , {
//     opacity:0,
//     duration:3,
//     x:-500,
//     scrollTrigger:{
//         trigger:"#page3 h2",
//         scroller: "body",
//         // scrub:3
//     }
// })

// ==============================SECOND EXAMPLE=================================

// when you use[pin] always trigger parent property like[ #page 2]


gsap.to("#page2 h2", {
    x: "-60%",
    scrollTrigger: {
        trigger: "#page2",
        start: "top top",
        end: "bottom top",
        scrub: 2,
        pin: true,
    }
});

