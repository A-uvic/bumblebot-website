
// Global Variables
const container = document.getElementById("particle-container")
const accordion = document.getElementsByClassName("acordion-item")
var counter = 0


// Function to generate aleatory number
const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Function to create the particles on header
const createParticle = () => {
    counter++
    const createParticle = document.createElement("div")
    const sizeNumber = randomNumber(1.5,2)

    
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

//Event listeners for change classlist in FAQs container
for (let i = 0; i < accordion.length; i++) {

    accordion[i].addEventListener("click", function(){
        this.classList.toggle("active");
        this.childNodes[1].lastElementChild.classList.toggle("active")
    });
}

setInterval(checkContainer, 100);