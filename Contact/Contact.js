let back = document.getElementById('back');
let milieu = document.getElementById('milieu');
let front = document.getElementById('devant');
let sun = document.getElementById('sun');
let cloud_1 = document.getElementById('nuages-1')
let cloud_2 = document.getElementById('nuages-2')
let cloud_3 = document.getElementById('nuages-3')
let cloud_4 = document.getElementById('nuages-4')
let cloud_5 = document.getElementById('nuages-5')
let initial1 = cloud_1.offsetLeft;
let initial2 = cloud_2.offsetLeft;
let initial3 = cloud_3.offsetLeft;
let initial4 = cloud_4.offsetLeft;
let initial5 = cloud_5.offsetLeft;
let initial1_1 = cloud_1.offsetTop;
let initial2_1 = cloud_2.offsetTop;
let initial3_1 = cloud_3.offsetTop;
let initial4_1 = cloud_4.offsetTop;
let initial5_1 = cloud_5.offsetTop;

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    sun.style.left = value + 'px';
    sun.style.top = value * 0.6 + 'px';
    back.style.top = value * 0.5 + 'px';
    milieu.style.top = value * 0.25 + 'px';
    cloud_1.style.left = initial1 + value * 0.7 + 'px';
    cloud_2.style.left = initial2 + value * 0.5 + 'px';
    cloud_3.style.left = initial3 + value * 0.3 + 'px';
    cloud_4.style.left = initial4 + value * 0.2 + 'px';
    cloud_5.style.left = initial5 + value * 0.25 + 'px';
    cloud_1.style.top = initial1_1 + value * 0.3 + 'px';
    cloud_2.style.top = initial2_1 + value * 0.25 + 'px';
    cloud_3.style.top = initial3_1 + value * 0.25 + 'px';
    cloud_4.style.top = initial4_1 + value * 0.5 + 'px';
    cloud_5.style.top = initial5_1 + value * 0.25 + 'px';
})