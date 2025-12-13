let menu = document.querySelector("#nav i")
let close = document.querySelector("#bar i")


let tl = gsap.timeline()

tl.to("#bar",{
    right:0,
    duration:0.5,
})

tl.from("#bar h4" ,{
    x:200,
    duration:0.5,
    stagger:0.2, //one after another
    opacity:0,
})

tl.from("#bar i",{
    x:10,
    opacity:0
})

tl.pause()// this will stop my time line


menu.addEventListener("click" , () => {
    tl.play()// this will continue work my time line
});

close.addEventListener("click" , () => {
    tl.reverse()// this will reverse time line effect
})