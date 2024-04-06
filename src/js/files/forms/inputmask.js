/* Маски для полей (в работе) */

// Подключение функционала "Чертогов Фрилансера"
// Подключение списка активных модулей
import { flsModules } from "../modules.js";

// Подключение модуля
import "inputmask/dist/inputmask.min.js";

const inputMasks = document.querySelectorAll('.form-popup__input-tel');
if (inputMasks.length) {
    const maskOptions = {
        mask: "+7 (999) 999-99-99",
        // другие опции...
    };

	flsModules.inputmask = Inputmask(maskOptions).mask(inputMasks);
}