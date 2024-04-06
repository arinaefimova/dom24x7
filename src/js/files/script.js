import { isMobile } from "./functions.js";
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


const news = document.querySelector('.news');
if (news) {
    const iconMenu = document.querySelector('.icon-menu');
    if (iconMenu) {
        const menuBody = document.querySelector('.menu-header__body');
        iconMenu.addEventListener("click", function (e) {
            document.body.classList.toggle('_lock');
            iconMenu.classList.toggle('menu-open');
            menuBody.classList.toggle('_active');
        });
    }


    
}
//========================================================================================================================================================
const page = document.querySelector('.page');
if (page) {
    ymaps.ready(init);
    function init() {
        const map = new ymaps.Map("map", {

            center: [56.854478, 35.870915],
            zoom: 14,
            suppressMapOpenBlock: true,
            controls: ["smallMapDefaultSet", "zoomControl"]
        });

        map.controls.get('zoomControl').options.set({
            position: {
                top: 172,
                right: 10
            }
        });
        map.controls.get('geolocationControl').options.set({
            position: {
                top: 240,
                right: 10
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

        map.controls.remove('searchControl'); // удаляем поиск
        map.controls.remove('trafficControl'); // удаляем контроль трафика
        map.controls.remove('typeSelector'); // удаляем тип

        map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим

        map.controls.remove('rulerControl'); // удаляем контрол правил
        map.controls.remove('routeButtonControl'); // удаляем контрол правил
        map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)
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
            item.addEventListener('click', function (e) {

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
}
//========================================================================================================================================================
//Форма
const checkboxWrapper = document.querySelector('.checkbox__text');

function validation(form) {
    let result = true;

    function removeError(input) {
        const parent = input.parentNode;
        if (parent.classList.contains('error')) {
            parent.classList.remove('error')
        }
        form.querySelectorAll('.error-label').forEach(errorLabel => {
            errorLabel.remove();
        });
    }

    function createError(input, text) {
        const nameBox = document.querySelector('.form-popup__name');
        const parent = input.parentNode;
        const errorText = document.createElement('label');
        errorText.classList.add('error-label');
        errorText.textContent = text;
        parent.classList.add('error')
        nameBox.append(errorText)
    }


    form.querySelectorAll('input').forEach(input => {
        input.addEventListener('focus', function () {
            removeError(this);

        });
        if (input.type == 'checkbox') {
            input.addEventListener('click', () => {
                checkboxWrapper.classList.remove('error-wrap')
            })
        }

        checkboxWrapper.classList.remove('error-wrap')
        if (input.dataset.required == "true") {
            if (input.dataset.required == "true") {
                if (input.value == '') {
                    createError(input);
                    result = false;
                } else if (input.dataset.letters === "true" && (!(input.value.match(/^[а-яА-ЯёЁ]*\s{1}[а-яА-ЯёЁ]*$/) || input.value.match(/^[а-яА-ЯёЁ]+$/)))) {
                    removeError(input);
                    createError(input, "Недопустимые символы!");
                    result = false;
                } else if (input.dataset.minLength && input.value.length < input.dataset.minLength) {
                    removeError(input);
                    createError(input, `Минимальное кол-во символов: ${input.dataset.minLength}`);
                    result = false;
                } else if (input.dataset.maxLength && input.value.length > input.dataset.maxLength) {
                    removeError(input);
                    createError(input, `Максимальное кол-во символов: ${input.dataset.maxLength}`);
                    result = false;
                }
            }
            if (input.value == '') {
                createError(input);
                result = false;
            }

            if (input.type == 'checkbox' && !input.checked) {
                checkboxWrapper.classList.add('error-wrap')
                result = false;
            }
        }

    });


    return result;
}

document.querySelector('#add-form').addEventListener('submit', function (event) {
    event.preventDefault();

    if (validation(this)) {
        this.submit();
    }
});



