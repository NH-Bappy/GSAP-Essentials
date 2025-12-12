var initialPath = `M 80 100 Q 600 100 1200 100`


var finalPath = `M 80 100 Q 600 100 1200 100`


var string = document.querySelector("#string")

// string.addEventListener("mouseenter" ,() => {
//     console.log("entered")
// });

// string.addEventListener("mouseleave" , () => {
//     console.log("mouse leave")
// })

// string.addEventListener("mousemove", (dets) => {
//     console.log(dets)
// })

    // ================================ dets=[you can see all mouse movement]
string.addEventListener("mousemove", (dets) => {
    initialPath = `M 80 100 Q ${dets.x} ${dets.y} 1200 100`

    // console.log(initialPath)

    gsap.to("svg path",{
        attr: { d: initialPath },
        ease: "power3.out",// for more ease type property go [gsap ease] website

    }) 
})

// going to original place
string.addEventListener("mouseleave" , () => {
    gsap.to("svg path" ,{
        attr: { d: finalPath },
        duration:1.5,
        ease: "elastic.out(1, 0.1)", // property like this go to [gsap ease] in website
    })
})

