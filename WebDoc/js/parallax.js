let bg = document.getElementById("Background");
let ulla = document.getElementById("ulla");
let sol = document.getElementById("Sol");
let sleven = document.getElementById("Sleven");
let text = document.getElementById("text");
let animation = document.getElementById("circle_animation");

window.addEventListener('scroll', function(){
    var value = window.scrollY;
    ulla.style.left = value * 1 + 'px';
    text.style.top = value * 1 + 'px';
    sleven.style.top = value * 0.5 + 'px';
    animation.style.left = value * 1 + 'px'
})