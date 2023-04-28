const myCircle = document.getElementById('circle');
const container = document.getElementById('container');

window.addEventListener('mousemove', (e) => {
    console.log(e.pageX, e.pageY);
    myCircle.style.left = e.pageX + "px";
    myCircle.style.top = e.pageY + "px";
    checkMouse();
})

window.addEventListener('mousedown', (e) => {
    myCircle.style.transform = "scale(2) translate(-25%, -25%)";
})

window.addEventListener('mouseup', (e) => {
    myCircle.style.transform = "scale(1) translate(-50%, -50%)";
})

function checkMouse() {

    container.addEventListener('mouseenter', (e) => {
        myCircle.style.border = "4px solid red";
    })

    container.addEventListener('mouseleave', (e) => {
        myCircle.style.border = "4px solid black";
    })
}



const keypress = document.getElementById('keypress');
const key = document.getElementById('key');
const ring = () => {
    const audio = new Audio();
    audio.src = "./enter.mp3";
    audio.play();
}

function rand(max) {
    return Math.floor(Math.random() * max);
}

document.addEventListener('keypress', (e) => {
    console.log(e.key);
    key.style.color = `rgb(${rand(255)}, ${rand(255)}, ${rand(255)})`
    key.innerText += e.key;
})

document.body.onkeyup = function (e) {
    if (e.key == " " || e.code == "Space" || e.keyCode == 32) {
        ring();
    }
}