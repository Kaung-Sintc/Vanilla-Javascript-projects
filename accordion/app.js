const accordions = document.querySelectorAll('.question')

accordions.forEach((accordion) => {
    const btn = accordion.querySelector('.question-btn')

    btn.addEventListener('click', () => {
        accordions.forEach((item) => {
            if(item !== accordion) item.classList.remove('show-text')
        })
        accordion.classList.toggle('show-text')
    })
})