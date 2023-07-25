"use strict";

const $ = jQuery;


function eventHandler() {

	JSCCommon.init()


	function whenResize() {
		JSCCommon.setFixedNav();
	}

	window.addEventListener('scroll', () => {
		JSCCommon.setFixedNav();

	}, { passive: true })
	window.addEventListener('resize', () => {
		whenResize();
	}, { passive: true });

	whenResize();


	// let defaultSl = {
	// 	spaceBetween: 0,
	// 	lazy: {
	// 		loadPrevNext: true,
	// 	},
	// 	watchOverflow: true,
	// 	loop: true,
	// 	navigation: {
	// 		nextEl: '.swiper-button-next',
	// 		prevEl: '.swiper-button-prev',
	// 	},
	// 	pagination: {
	// 		el: ' .swiper-pagination',
	// 		type: 'bullets',
	// 		clickable: true,
	// 		// renderBullet: function (index, className) {
	// 		// 	return '<span class="' + className + '">' + (index + 1) + '</span>';
	// 		// }
	// 	},
	// }

	// new Swiper('.breadcrumb-slider--js', {
	// 	slidesPerView: 'auto',
	// 	freeMode: true,
	// 	watchOverflow: true
	// });

	// let slider = document.querySelector('.headerBlock__slider--js');


	const splide = new Splide('.headerBlock__slider--js', {
		type: 'loop',
		drag: 'free',
		focus: 'center',
		// perPage: 1, 
		autoWidth: true,
		items: false,
		arrows: false,
		autoScroll: {
			autoStart: true,
			pauseOnHover: false,
			pauseOnFocus: false,
			speed: 1,
		},
	}).mount(window.splide.Extensions);
	// if (window.matchMedia('(min-width: 992px)').matches) {


// 		let slide = slider.querySelector(".swiper-slide");
// 	for (let i = 0; i < 20; i++) {
// 		slide.parentNode.appendChild(slide.cloneNode(true));
// 	}
// // }
// 	new Swiper(slider, { // если не используешь методы 
// 		slidesPerView: 'auto',
// 		spaceBetween: 100, 
// 		longSwipesMs: 0, 
// 		slidesPerGroup: 1,
// 		loopedSlides: 10,
// 		roundLengths: true,
// 		loopFillGroupWithBlank: true,
// 		speed: 80000,
// 		loop: true,
// 		allowTouchMove: false, // можно ещё отключить свайп
// 		autoplay: {
// 			// waitForTransition: false,
// 			delay: 0,
// 			disableOnInteraction: false // или сделать так, чтобы восстанавливался autoplay после взаимодействия
// 		},

// 	});


	let animateBlocks = document.querySelectorAll('[data-json]');
	if (animateBlocks) {
		for (const animateBlock of animateBlocks) {
			lottie.loadAnimation({
				container: animateBlock, // the dom element that will contain the animation
				// renderer: 'canvas',
				loop: true,
				autoplay: true,
				path: animateBlock.dataset.json, // the path to the animation json
			});
		}
	}

	let links = document.querySelectorAll('.top-nav li a');
	for (const link of links) {
			let content = link.innerHTML;
			link.insertAdjacentHTML('beforeend', content);
			
	}


	$(document).on('click', ".cookie-block .icon", function () {

		writeCookie('cookie-block', 'hide', 30);
		$(document.querySelector(".cookie-block")).fadeOut();
	})

	function writeCookie(name, val, expires) {
		var date = new Date;
		date.setDate(date.getDate() + expires);
		document.cookie = name + "=" + val + "; path=/; expires=" + date.toUTCString();
	}


	function readCookie(name) {
		var matches = document.cookie.match(new RegExp(
			"(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
		));
		return matches ? decodeURIComponent(matches[1]) : undefined;
	}
	let test = readCookie('cookie-block');
	if (!test) document.querySelector(".cookie-block").style.display = 'block';
};
if (document.readyState !== 'loading') {
	eventHandler();
} else {
	document.addEventListener('DOMContentLoaded', eventHandler);
}

// window.onload = function () {
// 	document.body.classList.add('loaded_hiding');
// 	window.setTimeout(function () {
// 		document.body.classList.add('loaded');
// 		document.body.classList.remove('loaded_hiding');
// 	}, 500);
// }