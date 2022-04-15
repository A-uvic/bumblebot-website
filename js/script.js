
// Global Variables
const container = document.getElementById("particle-container")
const accordion = document.getElementsByClassName("acordion-item")
const icon = document.querySelector(".menu-icon")
var counter = 0


//Event listeners to sticky navbar
window.addEventListener("scroll", function (e) {
    const navbar = document.getElementById("navbar");

    navbar.classList.toggle("sticky", window.scrollY > 0)
});

//Event listeners to reveal elements on screen
window.addEventListener("scroll", function () {
    var reveals = document.querySelectorAll(".reveal")
    for (var i = 0; i < reveals.length; i++) {
        var windowheight = window.innerHeight
        var revealtop = reveals[i].getBoundingClientRect().top
        var revealpoint = 150

        if (revealtop < windowheight - revealpoint) {
            reveals[i].classList.add("active")
        } else {
            reveals[i].classList.remove("active")
        }
    }
})

//Event listeners for change classlist in FAQs container
for (let i = 0; i < accordion.length; i++) {

    accordion[i].addEventListener("click", function () {
        this.classList.toggle("active");
        this.childNodes[1].lastElementChild.classList.toggle("active")
    });
}
//
icon.addEventListener("click", function(){
    let menu = document.querySelector(".menu")
    menu.classList.toggle("active")
})




// Function to generate aleatory number
const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Function to create the particles on header
const createParticle = () => {
    counter++
    const createParticle = document.createElement("div")
    const sizeNumber = randomNumber(1.5, 2)


    createParticle.className = "particle"
    createParticle.style.cssText = `visibility: hidden; right: ${randomNumber(1, 98)}%; animation-duration: ${randomNumber(12, 25)}s; animation-delay: ${randomNumber(0.5, 1.5)}s; filter: blur(${randomNumber(0, 3)}px); width: ${sizeNumber}px; height: ${sizeNumber}px;`
    container.appendChild(createParticle)
}

//Function to check the limit of particles on screen
const checkContainer = () => {
    if (container.childNodes.length < 80) {
        createParticle()
    }
}





setInterval(checkContainer, 100);