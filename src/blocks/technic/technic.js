const technicMain = document.querySelector('.technic__main')
const readMoreShow = document.querySelector('.technic__read-more_show')
const readMoreHide = document.querySelector('.technic__read-more_hide')

readMoreShow.addEventListener('click', () => {
  technicMain.style.height = '100%'
  readMoreShow.style.display = 'none'
  readMoreHide.style.display = 'inline'
})

readMoreHide.addEventListener('click', () => {
  technicMain.style.height = '150px'
  technicMain.removeAttribute('style')
  readMoreShow.style.display = 'inline'
  readMoreHide.style.display = 'none'
})
