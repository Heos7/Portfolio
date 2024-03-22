let stars = document.getElementById('stars');
let back = document.getElementById('Back');
let milieu = document.getElementById('Milieu');
let front = document.getElementById('Devant');
let moon = document.getElementById('moon');

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    stars.style.left = value + 'px';
    moon.style.left = value + 'px';
    moon.style.top = -value + 'px';
    back.style.top = value * 0.5 + 'px';
    milieu.style.top = value * 0.25 + 'px';
})