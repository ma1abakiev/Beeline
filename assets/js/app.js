// Header
let header = document.querySelector('.header')

window.onscroll = function () {
  let posTop = window.pageYOffset
  if (posTop > 0) {
    header.classList.add('header_active')
  } else {
    header.classList.remove('header_active')
  }
}

// Select

let title = document.querySelectorAll('.footer-top__title')

for (let i = 0; i < title.length; i++) {
  title[i].onclick = function () {

    // Создаем новый observer (наблюдатель)


    this.nextElementSibling.classList.toggle('visible')
  }
}
