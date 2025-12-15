// let h1 = document.querySelector("h1");
// // console.log(h1)
// let h1Text = h1.textContent //textContent use for showing text in teg without full tag showing
// console.log(h1Text)


function breakTheText(){
    let h1 = document.querySelector("h1")
    let name = document.querySelector("h1").textContent
    let splittedText = name.split("")

    let middleValue = Math.floor(splittedText.length / 2)
    // console.log(middleValue)

    let store = "";

    splittedText.forEach((e , index) => {
        if(index < middleValue){
            store += `<span class="first">${e}</span>`
        }else{
            store += `<span class="second">${e}</span>`
        }


    
    })
    // console.log(store)

    h1.innerHTML = store
}

breakTheText()

// gsap.from("h1 span" , {
//     y:70,
//     opacity:0,
//     duration:0.8,
//     delay:0.5,
//     stagger:0.2,
// })

gsap.from("h1 .first" ,{
    y: 80,
    duration:0.6,
    delay: 0.5,
    stagger: 0.15, //one after another at start
    opacity: 0
})

gsap.from("h1 .second" ,{
    y: 80,
    duration:0.6,
    delay: 0.5,
    stagger: -0.15, //one after another at end
    opacity: 0
})
