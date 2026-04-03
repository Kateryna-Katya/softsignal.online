import Swiper from 'swiper';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

let swiper = null;

function initSwiper() {
  if (window.innerWidth < 1440 && !swiper) {
    swiper = new Swiper('.mySwiper', {
      modules: [Autoplay, Pagination],

      slidesPerView: 1.2,
      spaceBetween: 16,

      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
loop:true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,

        // 🔥 КАСТОМ
        renderBullet: function (index, className) {
          return `<span class="${className}">
                    <span class="dot"></span>
                  </span>`;
        },
      },
    });
  }
}

function destroySwiper() {
  if (window.innerWidth >= 1440 && swiper) {
    swiper.destroy(true, true);
    swiper = null;
  }
}

function handleResize() {
  if (window.innerWidth < 1440) {
    initSwiper();
  } else {
    destroySwiper();
  }
}

handleResize();
window.addEventListener('resize', handleResize);