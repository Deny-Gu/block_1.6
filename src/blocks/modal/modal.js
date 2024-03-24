const btnMenuCall = document.querySelector('.menu__footer-nav .btn-call')
const btnMenuMessage = document.querySelector('.menu__footer-nav .btn-message')
const btnCall = document.querySelector('.btn-call')
const btnMessage = document.querySelector('.btn-message')
const call = document.querySelector('.call')
const feedback = document.querySelector('.feedback')

btnMenuCall.addEventListener('click', () => {
  call.classList.remove('hide')
  call.classList.add('show')
  call.style.display = 'block'

  const btnClose = call.querySelector('.modal__btn-close')

  btnClose.addEventListener('click', () => {
    call.classList.remove('show')
    call.classList.add('hide')
    setTimeout(() => {
      call.style.display = 'none'
    }, 600)
  })
})

btnMenuMessage.addEventListener('click', () => {
  feedback.classList.remove('hide')
  feedback.classList.add('show')
  feedback.style.display = 'block'
  const btnClose = feedback.querySelector('.modal__btn-close')

  btnClose.addEventListener('click', () => {
    feedback.classList.remove('show')
    feedback.classList.add('hide')
    setTimeout(() => {
      feedback.style.display = 'none'
    }, 600)
  })
})

btnCall.addEventListener('click', () => {
  call.classList.remove('hide')
  call.classList.add('show')
  call.style.display = 'block'

  const btnClose = call.querySelector('.modal__btn-close')

  btnClose.addEventListener('click', () => {
    call.classList.remove('show')
    call.classList.add('hide')
    setTimeout(() => {
      call.style.display = 'none'
    }, 600)
  })
})

btnMessage.addEventListener('click', () => {
  feedback.classList.remove('hide')
  feedback.classList.add('show')
  feedback.style.display = 'block'
  const btnClose = feedback.querySelector('.modal__btn-close')

  btnClose.addEventListener('click', () => {
    feedback.classList.remove('show')
    feedback.classList.add('hide')
    setTimeout(() => {
      feedback.style.display = 'none'
    }, 600)
  })
})

call.addEventListener('click', (event) => {
  if (event.target.classList.contains('call')) {
    call.classList.remove('show')
    call.classList.add('hide')
    setTimeout(() => {
      call.style.display = 'none'
    }, 600)
  }
})

feedback.addEventListener('click', (event) => {
  if (event.target.classList.contains('feedback')) {
    feedback.classList.remove('show')
    feedback.classList.add('hide')
    setTimeout(() => {
      feedback.style.display = 'none'
    }, 600)
  }
})
