let back = document.getElementById('Back');
let milieu = document.getElementById('Milieu');
let front = document.getElementById('Devant');
let sun = document.getElementById('sun');

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    sun.style.left = value + 'px';
    sun.style.top = -value + 'px';
    Back.style.top = value * 0.5 + 'px';
    Milieu.style.top = value * 0.25 + 'px';
})