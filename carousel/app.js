const carouselSlide = document.querySelector('.carousel-slide');

const carouselImages = document.querySelectorAll(".carousel-slide img");

const prevBtn = document.querySelector('#prev-button');

const nextBtn = document.querySelector('#next-button');

const listOne = document.querySelector("#pic1")
const listTwo = document.querySelector("#pic2")
const listThree = document.querySelector("#pic3")
const size = 922;

carouselSlide.style.transition = "transform 0.6s ease-in-out";

const slideCount = carouselImages.length-1
let counter = 0;

function update() {
    carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)"
    if(counter === 0) {
        prevBtn.style.display = 'none'
    }else{
        prevBtn.style.display = 'block'
    }
    if(counter >= slideCount) {
        nextBtn.style.display = 'none'
    }else{
        nextBtn.style.display = 'block'
    }
}

update()

nextBtn.addEventListener('click', () => {
    if(counter >= slideCount) return
    counter++
    update()
})

prevBtn.addEventListener('click', () => {
    if(counter <= 0) return
    counter--
    update()
})

listOne.addEventListener('click', () => {
    counter = 0
    update()
})
listTwo.addEventListener('click', () => {
    counter = 1
    update()
})
listThree.addEventListener('click', () => {
    counter = 2
    update()
})