/*
Документація по роботі у шаблоні: 
Документація слайдера: https://swiperjs.com/
Сніппет(HTML): swiper
*/

// Підключаємо слайдер Swiper з node_modules
// При необхідності підключаємо додаткові модулі слайдера, вказуючи їх у {} через кому
// Приклад: { Navigation, Autoplay }
import Swiper from 'swiper';
import { Navigation, Scrollbar } from 'swiper/modules';
/*
Основні модулі слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Детальніше дивись https://swiperjs.com/
*/

// Стилі Swiper
// Базові стилі
//  import "../../scss/base/swiper.scss";
// Повний набір стилів з scss/libs/swiper.scss
import "../../scss/libs/swiper.scss";
// Повний набір стилів з node_modules
// import 'swiper/css';

// Ініціалізація слайдерів
//  function initSliders() {
    // Список слайдерів
    // Перевіряємо, чи є слайдер на сторінці
    if (document.querySelector('.documents')) { // Вказуємо склас потрібного слайдера
        // Створюємо слайдер
        const mySwiper = new Swiper('.documents', { // Вказуємо склас потрібного слайдера
            // Підключаємо модулі слайдера
            // для конкретного випадку
            modules: [Navigation, Scrollbar],
            observer: true,
            observeParents: true,
            slidesPerView: 3,
            spaceBetween: 70,
            autoHeight: true,
            speed: 800,

            //touchRatio: 0,
            //simulateTouch: false,
            loop: true,
            //preloadImages: false,
            //lazy: true,

            /*
            // Ефекти
            effect: 'fade',
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            */

            // Пагінація
            /*
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            */

            // Скроллбар

            scrollbar: {
                el: '.swiper-scrollbar-doc',
                draggable: true,
                snapOnRelease: true,
                dragSize: 215,
            },


            // Кнопки "вліво/вправо"
            // navigation: {
            // 	nextEl: '.swiper-btn',
            // },


            breakpoints: {
                320:{
                    slidesPerView: 1,
                    spaceBetween: 0,
                },
                360: {
                    slidesPerView: 1.5,
                    spaceBetween: 70,
                    // autoHeight: true,
                },
                875: {
                    slidesPerView: 2,
                    spaceBetween: 70,
                },
                992: {
                    slidesPerView: 2.5,
                    spaceBetween: 70,
                    scrollbar: {
                       
                        dragSize: 148,
                    },
                },
                1200: {
                    slidesPerView: 3,
                    spaceBetween: 70,
                    scrollbar: {
                       
                        dragSize: 215,
                    },
                },
                1900: {
                    slidesPerView: 3,
                    spaceBetween: 70,
                    scrollbar: {
                       
                        dragSize: 215,
                    },
                },
            },

            // Події
            on: {

            }
        });
        // const swiperPrev = document.getElementById('swiperPrev')
        const swiperNext = document.getElementById('swiperNext')

        // swiperPrev.addEventListener('click', () => {
        //     mySwiper.slidePrev();
        // })
        swiperNext.addEventListener('click', () => {
            mySwiper.slideNext();
        })
       
    }
    if (document.querySelector('.reports')) { // Вказуємо склас потрібного слайдера
        // Створюємо слайдер
        const mySwiper2 = new Swiper('.reports', { // Вказуємо склас потрібного слайдера
            // Підключаємо модулі слайдера
            // для конкретного випадку
            modules: [Navigation, Scrollbar],
            observer: true,
            observeParents: true,
            slidesPerView: 3,
            spaceBetween: 70,
            autoHeight: true,
            speed: 800,

            //touchRatio: 0,
            //simulateTouch: false,
            loop: true,
            //preloadImages: false,
            //lazy: true,

            /*
            // Ефекти
            effect: 'fade',
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            */

            // Пагінація
            /*
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            */

            // Скроллбар

            scrollbar: {
                el: '.swiper-scrollbar-rep',
                draggable: true,
                snapOnRelease: true,
                dragSize: 215,
            },


            // Кнопки "вліво/вправо"
            // navigation: {
            // 	nextEl: '.swiper-btn',
            // },


            breakpoints: {
                320:{
                    slidesPerView: 1,
                    spaceBetween: 0,
                },
                360: {
                    slidesPerView: 1.5,
                    spaceBetween: 70,
                    // autoHeight: true,
                },
                875: {
                    slidesPerView: 2,
                    spaceBetween: 70,
                },
                992: {
                    slidesPerView: 2.5,
                    spaceBetween: 70,
                    scrollbar: {
                       
                        dragSize: 148,
                    },
                },
                1200: {
                    slidesPerView: 3,
                    spaceBetween: 70,
                    scrollbar: {
                       
                        dragSize: 215,
                    },
                },
                1900: {
                    slidesPerView: 3,
                    spaceBetween: 70,
                    scrollbar: {
                       
                        dragSize: 215,
                    },
                },
            },

            // Події
            on: {

            }
        });
        // const swiperPrev = document.getElementById('swiperPrev')
        const swiperNext2 = document.getElementById('swiperNext2')

        // swiperPrev.addEventListener('click', () => {
        //     mySwiper.slidePrev();
        // })
        swiperNext2.addEventListener('click', () => {
            mySwiper2.slideNext();
        })
        mySwiper2.update();
    }
// }
// Скролл на базі слайдера (за класом swiper scroll для оболонки слайдера)
function initSlidersScroll() {
    let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
    if (sliderScrollItems.length > 0) {
        for (let index = 0; index < sliderScrollItems.length; index++) {
            const sliderScrollItem = sliderScrollItems[index];
            const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
            const sliderScroll = new Swiper(sliderScrollItem, {
                observer: true,
                observeParents: true,
                direction: 'vertical',
                slidesPerView: 'auto',
                freeMode: {
                    enabled: true,
                },
                scrollbar: {
                    el: sliderScrollBar,
                    draggable: true,
                    snapOnRelease: false
                },
                mousewheel: {
                    releaseOnEdges: true,
                },
            });
            sliderScroll.scrollbar.updateSize();
        }
    }
}
