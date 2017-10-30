/* DONE засорять глобальную область видимости — плохо! */
/* DONE всегда в начале файла писать 'use strict'; */

/* TODO javascript не должен зависеть от количества элементов в карусели.
		Новые элементы должны добавляться только посредством добавления HTML кода.
		Стили и скрипты при этом должны оставаться неизменными. */
/* TODO испольовать addEventListener для создания обработчиков событий */
/* TODO вместо свойства className лучше использовать объект classList. */

'use strict';

(function() {
	var btn_next = document.querySelector('#next-slide');
	var btn_prev = document.querySelector('#prev-slide');

	var slide = document.querySelector('.slider__slide.slide1');

	btn_next.onclick = function() {
		if (slide.className === 'slider__slide slide1') {
			slide.className = 'slider__slide slide2';
		}
		else if (slide.className === 'slider__slide slide2') {
			slide.className = 'slider__slide slide3';
		}
		else if (slide.className === 'slider__slide slide3') {
			slide.className = 'slider__slide slide1';
		}
	};

	btn_prev.onclick = function() {
		if (slide.className === 'slider__slide slide1') {
			slide.className = 'slider__slide slide3';
		}
		else if (slide.className === 'slider__slide slide2') {
			slide.className = 'slider__slide slide1';
		}
		else if (slide.className === 'slider__slide slide3') {
			slide.className = 'slider__slide slide2';
		}
	};
})();