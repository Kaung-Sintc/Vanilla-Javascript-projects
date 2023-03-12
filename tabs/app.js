const btns = document.querySelectorAll('.tab-btn')
const about = document.querySelector('.about')
const contents = document.querySelectorAll('.content')

about.addEventListener('click', (e) => {
    const id = e.target.dataset.id

   if(id) {
    // btns
    btns.forEach(btn => {
        btn.classList.remove('active')
        // ** not current target--- just target
        e.target.classList.add('active')
    })

    // contents
    contents.forEach(content => {
        content.classList.remove('active')
        const el = document.getElementById(id)
        el.classList.add('active')
    })
   }
})