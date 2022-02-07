const forest = document.querySelector(".forest")
const solovey = document.querySelector(".solovey")
const drozd = document.querySelector(".drozd")
const zarynka = document.querySelector(".zarynka")
const javoronok = document.querySelector(".javoronok")
const slavka = document.querySelector(".slavka")
const main = document.querySelector(".main")
const play = document.querySelector(".play")
const pause = document.querySelector(".pause")
const a1 = document.getElementById("forest")
const a2 = document.getElementById("solovey")
const a3 = document.getElementById("drozd")
const a4 = document.getElementById("zarynka")
const a5 = document.getElementById("javoronok")
const a6 = document.getElementById("slavka")
var current=a1

forest.addEventListener('click', () => {
    main.style.backgroundImage = "url(/assets/img/forest.jpg)"
    current.pause()
    current=a1
    a1.play()
    pause.style.display = "block"
    play.style.display = "none"
})
solovey.addEventListener('click', () => {
    main.style.backgroundImage = "url(/assets/img/solovey.jpg)"
    a2.play()
    current.pause()
    current=a2
    pause.style.display = "block"
    play.style.display = "none"
})
drozd.addEventListener('click', () => {
    main.style.backgroundImage = "url(/assets/img/drozd.jpg)"
    a3.play()
    current.pause()
    current=a3
    pause.style.display = "block"
    play.style.display = "none"
})
zarynka.addEventListener('click', () => {
    main.style.backgroundImage = "url(/assets/img/zarynka.jpg)"
    a4.play()
    current.pause()
    current=a4
    pause.style.display = "block"
    play.style.display = "none"
})
javoronok.addEventListener('click', () => {
    main.style.backgroundImage = "url(/assets/img/javoronok.jpg)"
    a5.play()
    current.pause()
    current=a5
    pause.style.display = "block"
    play.style.display = "none"
})
slavka.addEventListener('click', () => {
    main.style.backgroundImage = "url(/assets/img/slavka.jpg)"
    a6.play()
    current.pause()
    current=a6
    pause.style.display = "block"
    play.style.display = "none"
})

play.addEventListener('click', () => {
    current.play()
    pause.style.display = "block"
    play.style.display = "none"
})

pause.addEventListener('click', () => {
    current.pause()
    play.style.display = "block"
    pause.style.display = "none"
})