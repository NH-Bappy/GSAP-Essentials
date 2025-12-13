let main = document.querySelector("#main");
let cursor = document.querySelector("#cursor");
let image = document.querySelector("#image")


// main.addEventListener("click" , () => {
//     console.log("event performed")
// })

// main.addEventListener("mousemove" , (MouseEvent) => {
//     console.log(MouseEvent)
// })

// window.addEventListener("keypress" , (keyboardEvent) => {
//     console.log(keyboardEvent)
// })


main.addEventListener("mousemove", (MouseEvent) => {
    gsap.to(cursor, {
        x:MouseEvent.x,
        y:MouseEvent.y
    })
});

image.addEventListener("mouseenter" , () => {
    gsap.to(cursor,{
        scale:3
    })
})

image.addEventListener("mouseleave" , () => {
    gsap.to(cursor,{
        scale:1
    })
})