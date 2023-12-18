
// hamderger menu
let list = document.querySelector('.list')
let parent_ul = document.querySelector('.parent-ul')

list.addEventListener('click', function(){
    parent_ul.classList.toggle('h-[500px]')
})

// modal----------------------------
let parent_modal = document.querySelector('.parent-modal')
let close_modal = document.querySelector('.close-modal ')
let register = document.querySelector('.register')

register.addEventListener('click', function(){
    parent_modal.classList.add('h-[100vh]')
})
close_modal.addEventListener('click', function(){
    parent_modal.classList.remove('h-[100vh]')
})

// swiper-------------------------
var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });