var numberOfBubbles = 10
for (let i = 0; i < 10; i++) {
    newBubble() 
}
function newBubble() {
    let bubble = document.createElement("div")
    bubble.classList.add("bubble")
    let x = randomNumber(100)
    let delay = randomNumber(1500)
    let red = randomNumber(255)
    let green = randomNumber(255)
    let blue = randomNumber(255)
    let size = randomNumber(1.7) + 1
    bubble.style.left = `${x}vw`
    bubble.style.animationDelay = `${delay}ms`
    // bubble.style.borderColor = "rgb(" + red + "," + green + "," + blue + ")"
    bubble.style.borderColor = `rgb(${red},${green},${blue})`
    bubble.style.height = bubble.style.width = `${size}em`
    document.querySelector("body").appendChild(bubble)
}
function randomNumber(max) {
    return Math.floor(Math.random() * max);
}