const iconMenu = document.querySelector("#iconMenu");
const menu = document.querySelector("#menu");

iconMenu.addEventListener("click", function () {
    menu.classList.toggle("menu__show");
});

const swiper = new Swiper('.swiper', {
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev', 

},
    breakpoints: {         
320: {       
slidesPerView: 3,       
spaceBetween: 20     
},       
680: {       
slidesPerView: 4,
spaceBetween: 5     
}, 
loop: true,
loopFillGroupWithBlank: true,

}
});
const swiper1 = new Swiper ('.swiper1', {
breakpoints: {         
320: {       
slidesPerView: 1,       
spaceBetween: 30     
},       
680: {       
slidesPerView: 4,
spaceBetween: 10     
}, 

}});