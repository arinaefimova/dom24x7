
import Swiper from 'swiper';
import { Navigation, Scrollbar } from 'swiper/modules';

import "../../scss/libs/swiper.scss";

if (document.querySelector('.documents')) {
    const mySwiper = new Swiper('.documents', {
        modules: [Navigation, Scrollbar],
        observer: true,
        observeParents: true,
        slidesPerView: 3,
        spaceBetween: 70,
        autoHeight: true,
        speed: 800,
        loop: true,
        scrollbar: {
            el: '.swiper-scrollbar-doc',
            draggable: true,
            snapOnRelease: true,
            dragSize: 215,
        },
        breakpoints: {
            320: {
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

        on: {

        }
    });
    const swiperNext = document.getElementById('swiperNext')


    swiperNext.addEventListener('click', () => {
        mySwiper.slideNext();
    })

}
if (document.querySelector('.reports')) {

    const mySwiper2 = new Swiper('.reports', {

        modules: [Navigation, Scrollbar],
        observer: true,
        observeParents: true,
        slidesPerView: 3,
        spaceBetween: 70,
        autoHeight: true,
        speed: 800,

        loop: true,

        scrollbar: {
            el: '.swiper-scrollbar-rep',
            draggable: true,
            snapOnRelease: true,
            dragSize: 215,
        },
        breakpoints: {
            320: {
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

      
        on: {

        }
    });
    const swiperNext2 = document.getElementById('swiperNext2')

    swiperNext2.addEventListener('click', () => {
        mySwiper2.slideNext();
    })
    mySwiper2.update();
}
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
