const brandsMain = document.querySelector('.brands__main')
const readMoreShow = document.querySelector('.brands__read-more_show')
const readMoreHide = document.querySelector('.brands__read-more_hide')

readMoreShow.addEventListener('click', () => {
  brandsMain.style.height = '100%'
  readMoreShow.style.display = 'none'
  readMoreHide.style.display = 'inline'
})

readMoreHide.addEventListener('click', () => {
  brandsMain.style.height = '150px'
  brandsMain.removeAttribute('style')
  readMoreShow.style.display = 'inline'
  readMoreHide.style.display = 'none'
})
