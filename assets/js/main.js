//Padrão camelCase
//Manipilação do DOM -> Document Object Model

const menuHotDog = document.querySelector("#menu-hotdog")
const body = document.querySelector("body")

menuHotDog.addEventListener("click", (e) => {

    e.preventDefault()

    //body.classList.add("open")
    body.classList.toggle("open")
})