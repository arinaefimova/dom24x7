// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";


//========================================================================================================================================================




//========================================================================================================================================================

function ibg() {
    let ibg = document.querySelectorAll(".ibg");
    for (var i = 0; i < ibg.length; i++) {
        if (ibg[i].querySelector('img')) {
            ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
        }
    }
}

ibg();

document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab-pane');

    tabs.forEach(function (tab) {
        tab.addEventListener('click', function () {
            const tabId = this.getAttribute('data-tab');

            tabs.forEach(function (tab) {
                tab.classList.remove('active');
            });
            tabContents.forEach(function (tabContent) {
                tabContent.classList.remove('active');
            });

            this.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });
});
//========================================================================================================================================================

ymaps.ready(init);
function init() {

    // Создание карты.
    const map = new ymaps.Map("map", {
        // Координаты центра карты.
        // Порядок по умолчанию: «широта, долгота».
        // Чтобы не определять координаты центра карты вручную,
        // воспользуйтесь инструментом Определение координат.
        center: [56.854478, 35.870915],

        // Уровень масштабирования. Допустимые значения:
        // от 0 (весь мир) до 19.
        zoom: 14,
        suppressMapOpenBlock: true,
        controls: ["smallMapDefaultSet", "zoomControl"]
    });

    // Задание опций для элемента управления масштабированием.
    map.controls.get('zoomControl').options.set({
        position: {
            top: 172, // отступ сверху
            right: 10 // отступ справа (можете изменить по вашему усмотрению)
        }
    });
    map.controls.get('geolocationControl').options.set({
        position: {
            top: 240, // отступ сверху
            right: 10 // отступ справа (можете изменить по вашему усмотрению)
        }
    });


    const myPlacemark = new ymaps.Placemark([56.854478, 35.870915], {
       
    }, {
        iconLayout: 'default#image',
        iconImageHref:
            './img/contacts/pin.png',
        iconImageSize: [63, 67],
        iconImageOffset: [-40, -32]
    });
    document.querySelectorAll('[class$="ymaps-2-1-79-map-copyrights-promo"]')[0].style.display = 'none';
    document.querySelectorAll('[class$="ymaps-2-1-79-copyright__wrap"]')[0].style.display = 'none';
    // map.controls.remove('geolocationControl'); // удаляем геолокацию
    // map.controls.remove('goto'); // удаляем геолокацию
    map.controls.remove('searchControl'); // удаляем поиск
    map.controls.remove('trafficControl'); // удаляем контроль трафика
    map.controls.remove('typeSelector'); // удаляем тип

    map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    // map.controls.remove('zoomControl'); // удаляем контрол зуммирования
    map.controls.remove('rulerControl'); // удаляем контрол правил
    map.controls.remove('routeButtonControl'); // удаляем контрол правил
    map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

    // myPlacemark.balloon.open();

    map.geoObjects.add(myPlacemark);
}
//========================================================================================================================================================

const tabsWrapper = document.querySelector('[data-tabs]');
const titlesTabs = tabsWrapper.querySelectorAll('.tabs__title'); //id 1,2,3
const tabsBody = tabsWrapper.querySelector('[data-tabs-body]')
const bodyContent = tabsBody.querySelectorAll('.tabs__body')// data-numb 1 2 3
function tabs() {
    bodyContent.forEach((i) => {
        i.style.display = 'none';
    });
    titlesTabs.forEach((item) => {
      
        if (item.classList.contains('tab-active')) {
           
            const targetId = item.id;
            const correspondingContent = document.querySelector(`[data-numb="${targetId}"]`);
            if (correspondingContent) {
                correspondingContent.style.display = 'block';
            }
        }
        item.addEventListener('click', function(e) {
            
            const targetId = e.target.id;
            bodyContent.forEach((inner) => {
                inner.style.display = 'none';
            });

            const correspondingContent = document.querySelector(`[data-numb="${targetId}"]`);
            if (correspondingContent) {
                correspondingContent.style.display = 'block';
            }
            titlesTabs.forEach((tab) => {
                tab.classList.remove('tab-active');
            });
            item.classList.add('tab-active');
        });
    });
}

tabs();
