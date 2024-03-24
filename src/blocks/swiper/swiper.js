import Swiper from 'swiper'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/swiper.scss'
import 'swiper/modules/pagination.scss'

let init = false
let swiper1
let swiper2
let swiper3
function swiperCard() {
  if (window.innerWidth < 768) {
    if (!init) {
      init = true
      swiper1 = new Swiper('.swiper.brands__swiper', {
        modules: [Navigation, Pagination],
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        loop: true,
        spaceBetween: 20,
        breakpoints: {
          320: {
            slidesPerView: 1.3
          },
          380: {
            slidesPerView: 1.5
          },
          420: {
            slidesPerView: 1.7
          },
          460: {
            slidesPerView: 1.9
          },
          540: {
            slidesPerView: 2
          },
          580: {
            slidesPerView: 2.4
          },
          620: {
            slidesPerView: 2.5
          },
          700: {
            slidesPerView: 2.8
          }
        }
      })
      swiper2 = new Swiper('.swiper.technic__swiper', {
        modules: [Navigation, Pagination],
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        loop: true,
        spaceBetween: 20,
        breakpoints: {
          320: {
            slidesPerView: 1.3
          },
          380: {
            slidesPerView: 1.5
          },
          420: {
            slidesPerView: 1.7
          },
          460: {
            slidesPerView: 1.9
          },
          540: {
            slidesPerView: 2
          },
          580: {
            slidesPerView: 2.4
          },
          620: {
            slidesPerView: 2.5
          },
          700: {
            slidesPerView: 2.8
          }
        }
      })
      swiper3 = new Swiper('.swiper.price__swiper', {
        modules: [Navigation, Pagination],
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        loop: true,
        spaceBetween: 20,
        breakpoints: {
          320: {
            slidesPerView: 1.3
          },
          380: {
            slidesPerView: 1.5
          },
          420: {
            slidesPerView: 1.7
          },
          460: {
            slidesPerView: 1.9
          },
          540: {
            slidesPerView: 2
          },
          580: {
            slidesPerView: 2.4
          },
          620: {
            slidesPerView: 2.5
          },
          700: {
            slidesPerView: 2.8
          }
        }
      })
    }
  } else if (init) {
    swiper1.destroy()
    swiper2.destroy()
    swiper3.destroy()
    init = false
  }
}
swiperCard()
window.addEventListener('resize', swiperCard)
