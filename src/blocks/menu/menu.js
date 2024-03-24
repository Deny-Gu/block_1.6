const btnMobileMenu = document.querySelector('.btn-mobile-menu')
const btnMenuClose = document.querySelector('.menu__button_close')
const mobileMenu = document.querySelector('.menu')

btnMobileMenu.addEventListener('click', () => {
  mobileMenu.classList.remove('hide')
  mobileMenu.classList.add('show')
  mobileMenu.style.display = 'block'
})

btnMenuClose.addEventListener('click', () => {
  mobileMenu.classList.remove('show')
  mobileMenu.classList.add('hide')
  setTimeout(() => {
    mobileMenu.style.display = 'none'
    mobileMenu.removeAttribute('style')
    mobileMenu.classList.remove('hide')
  }, 600)
})

mobileMenu.addEventListener('click', (event) => {
  if (event.target.classList.contains('menu')) {
    mobileMenu.classList.remove('show')
    mobileMenu.classList.add('hide')
    setTimeout(() => {
      mobileMenu.style.display = 'none'
      mobileMenu.removeAttribute('style')
      mobileMenu.classList.remove('hide')
    }, 600)
  }
})
