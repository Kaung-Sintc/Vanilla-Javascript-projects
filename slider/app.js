const leftArrow = document.querySelector('.left')
const rightArrow = document.querySelector('.right')
const slider = document.querySelector('.slider')
const sliderImages = document.querySelectorAll('.slider-img')
const bottom = document.querySelector('.bottom')


let slideCount = 1;
let totalImage = sliderImages.length // number of total images

// create slider indicators
for(let i = 0; i < totalImage; i++ ) {
    let div = document.createElement("div")
    div.className = 'rounded-btn'
    bottom.appendChild(div)
}

// retrieve from DOM
const btns = document.querySelectorAll('.rounded-btn')

btns[slideCount - 1].style.background = 'black'
const resetBtnBg = () => {
    btns.forEach(btn => {
        btn.style.background = 'transparent'
    })
}

// slider indicators click event
btns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        resetBtnBg() 
        slider.style.transform = `translateX(-${(index * 800)}px)`
        slideCount = index + 1

        btns[slideCount - 1].style.background = 'black'
    })
})

const nextSlide = () => {
    slider.style.transform = `translateX(-${slideCount * 800}px)`
    slideCount ++
}
const getFirstSlide = () => {
    slider.style.transform = `translateX(0)`
    slideCount = 1
}
const prevSlide = () => {
    slider.style.transform = `translateX(-${(slideCount - 2) * 800}px)`
    slideCount --
}

const getLastSlide = () => {
    slider.style.transform = `translateX(-${(totalImage - 1) * 800}px)`
    slideCount = 4
}

rightArrow.addEventListener('click', () => {
   slideCount < totalImage ? nextSlide() : getFirstSlide()
   resetBtnBg()
   btns[slideCount - 1].style.background = 'black'
})

leftArrow.addEventListener('click', () => {
    slideCount > 1 ? prevSlide() : getLastSlide()
    resetBtnBg()
    btns[slideCount - 1].style.background = 'black'
})



