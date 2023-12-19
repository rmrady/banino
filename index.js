
// hamderger menu
let list = document.querySelector('.list')
let parent_ul = document.querySelector('.parent-ul')

list.addEventListener('click', function () {
    parent_ul.classList.toggle('h-[89vh]')
})

// modal----------------------------
let parent_modal = document.querySelector('.parent-modal')
let close_modal = document.querySelector('.close-modal ')
let register = document.querySelector('.register')

register.addEventListener('click', function () {
    parent_modal.classList.add('h-[100vh]')
})
close_modal.addEventListener('click', function () {
    parent_modal.classList.remove('h-[100vh]')
})

// swiper-------------------------
var swiper = new Swiper(".mySwiper", {
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
      },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
// swiper3-------------------------
var swiper = new Swiper(".mySwiper3", {
    slidesPerView: 4,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

// swiper4-------------------------

var swiper = new Swiper(".mySwiper4", {
  slidesPerView: 6,
  spaceBetween: 30,
  loop:true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  }
});
 

//  ------------------------------
fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(myData => {
        myData.products.map((val, i) => {
            if (i <= 4) {
                let _fig = document.createElement('figure')
                _fig.innerHTML = `
                <img src="${val.thumbnail}" alt="" class="w-28 h-12 rounded-lg"><br>
                <figcaption>${val.title}</figcaption class="mt-2 ">
                `
                document.getElementById('produc1').appendChild(_fig)
            }
            if (i > 4 && i<= 8) {
                let _fig = document.createElement('figure')
                _fig.innerHTML = `
                <img src="${val.thumbnail}" alt="" class="w-28 h-12 rounded-lg"><br>
                <figcaption>${val.title}</figcaption class="mt-2 ">
                `
                document.getElementById('produc2').appendChild(_fig)
            }
            // ----------------------------------------------------------------
            if (i > 4 && i<= 8) {
                let _fig = document.createElement('div')
                _fig.classList.add('swiper-slide')
                _fig.innerHTML = `
                <div class="flex">
                    <div class="w-[50%] p-10 text-[25px] text-end">
                        <p class="text-lg text-gray-300 mt-5">title:${val.title}</p>
                        <p class="text-xs mt-5">description:${val.description}</p>
                        <div class="flex justify-between text-[#940be4] text-[20px] mt-5">
                            <p>price:${val.price}</p>
                            <p>discountPercentage:${val.discountPercentage}</p>
                        </div>
                        <p class="text-white font-bold mt-5">brand:${val.brand}</p>
                        <p class="mt-5">category:${val.category}</p>
                    </div>
                    <img src="${val.images[2]}" alt="" class="w-[50%] rounded-lg">
                </div>
                `
                document.getElementById('produc3').appendChild(_fig)
            }

        })
    })