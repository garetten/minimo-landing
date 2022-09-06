let offset = 0;
const sliderLine = document.querySelector('.slider-line');

let next = document.querySelector('.next');
console.log(sliderLine);
next.addEventListener('click',(e)=>{
    offset+=100;
    if(offset === 400){
        offset = 0
    }
    sliderLine.style.right = offset+'%';
})

document.querySelector('.prev').addEventListener('click',(e)=>{
    offset-=100;
    if(offset < 0){
        offset = 300
    }
    sliderLine.style.right = offset+'%';
})


// Burger menu


let burger = document.querySelector('.burger--menu');

burger.addEventListener('click',(e)=>{
    let nav = document.querySelector('.navigate');
    burger.classList.toggle('active');
    nav.classList.toggle('active');
})