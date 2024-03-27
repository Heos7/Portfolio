let back = document.getElementById('back');
let milieu = document.getElementById('milieu');
let front = document.getElementById('devant');
let sun = document.getElementById('sun');

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    sun.style.left = value + 'px';
    sun.style.top = value * 0.6 + 'px';
    back.style.top = value * 0.5 + 'px';
    milieu.style.top = value * 0.25 + 'px';
})