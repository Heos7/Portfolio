let back = document.getElementById('back');
let milieu = document.getElementById('milieu');
let front = document.getElementById('devant');
let sun = document.getElementById('sun');
let cloud_1 = document.getElementById('nuages-1')
let cloud_2 = document.getElementById('nuages-2')
let cloud_3 = document.getElementById('nuages-3')
let cloud_4 = document.getElementById('nuages-4')
let cloud_5 = document.getElementById('nuages-5')

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    sun.style.left = value + 'px';
    sun.style.top = value * 1.5 + 'px';
    back.style.top = value * 0.5 + 'px';
    milieu.style.top = value * 0.25 + 'px';
    cloud_1.style.left = value + 'px';
    cloud_2.style.left = value + 'px';
    cloud_3.style.left = value + 'px';
    cloud_4.style.left = value + 'px';
    cloud_5.style.left = value + 'px';
})