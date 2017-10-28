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