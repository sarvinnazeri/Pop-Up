const div = document.getElementById('div')
const span = document.querySelectorAll('span')
const p = document.querySelector('p')
const i = document.querySelector('i')
div.addEventListener('click', () => {
    span[1].style.transform = 'rotatex(180deg)'
    span[1].style.transform = 'perspective(800)'
    span[1].style.zIndex = '0'

    setTimeout(() => {
        p.style.transform = 'translatey(-110px)'
    }, 1500);
    setTimeout(() => {
        p.style.transform = 'scale(2)'
        p.style.zIndex = '5'
        p.classList.add('shadow')
    }, 3500);
})
i.addEventListener('click', () => {
    location.reload()
})
