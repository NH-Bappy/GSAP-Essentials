
// event = click , wheel ,mousemove ,


function wheelAnimation (){
    window.addEventListener("wheel", (e) => {
        if (e.deltaY > 0) {
            // console.log("forward scrolling")
            gsap.to("#all", {
                transform: 'translateX(-200%)',
                duration: 4,
                repeat: -1,
                ease: "none"
            })

            gsap.to("#all img", {
                rotate: 180
            })
        } else {
            // console.log("backword scrolling")
            gsap.to("#all", {
                transform: 'translateX(0%)',
                duration: 4,
                repeat: -1,
                ease: "none"
            })

            gsap.to("#all img", {
                rotate: 0
            })
        }
    })

}

wheelAnimation()
