/*--------------------------------------------------------*/
/* TABLE OF CONTENTS: */
/*--------------------------------------------------------*/
/* 01 - variables */
/* 02 - page calculations */
/* 03 - function on document ready */
/* 04 - function on page resize */
/* 05 - function on page scroll */
/* 06 - swiper sliders */
/* 07 - buttons, clicks, hovers */
/* 08 - pop-up */
/* 09 - counter slider */
/* 10 - tabs */
/* 11 - smooth scroll*/
/* 12 - hover Star */

var _functions = {};

jQuery(function($) {
	"use strict";
	var	isTouchScreen = navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i);

	if (isTouchScreen) $('html').addClass('touch-screen');

	if (navigator.userAgent.indexOf("Firefox") >= 0) {
		$('body').addClass('firefox');
	}
	if (navigator.userAgent.indexOf('Edge') >= 0) {
		$('body').addClass('edge');
	}
	if (navigator.userAgent.indexOf("Trident") >= 0) {
		$('body').addClass('ie');
	}
	if (navigator.userAgent.indexOf('Safari') >= 0 && navigator.userAgent.indexOf('Chrome') < 0) {
		$('body').addClass('safari');
	}
	if (navigator.userAgent.indexOf('Chrome') >= 0 && navigator.userAgent.indexOf('Edge') < 0) {
		$('body').addClass('chrome');
	}

	/*================*/
	/* 01 - variables */
	/*================*/
	var swipers = [],
		winW,
		winH,
		headerH = $('header').outerHeight(),
		winScr,
		$container,
		footerTop,
		_isresponsive,
		_ismobile = navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i);

	/*========================*/
	/* 02 - page calculations */
	/*========================*/
	_functions.pageCalculations = function() {
			winW = $(window).width();
			winH = $(window).height();
	};

	/*=================================*/
	/* 03 - function on document ready */
	/*=================================*/
	if (_ismobile) {
			$('body').addClass('mobile');
			_functions.pageCalculations();
	}

	pageScrolled();
	ratingStars();

	setTimeout(function() {
		$('#loader-wrapper').fadeOut(0);
		$('.SelectBox').SumoSelect();
		_functions.initSwiper();
	}, 100);

	/*==============================*/
	/* 04 - function on page resize */
	/*==============================*/
	_functions.resizeCall = function() {
			_functions.pageCalculations();
	};
	if (!_ismobile) {
			$(window).resize(function() {
					_functions.resizeCall();
			});
	} else {
			window.addEventListener("orientationchange", function() {
					_functions.resizeCall();
			}, false);
	}

	/*==============================*/
	/* 05 - function on page scroll */
	/*==============================*/
	$(window).scroll(function() {
			_functions.scrollCall();
	});

	_functions.scrollCall = function() {
			winScr = $(window).scrollTop();
			pageScrolled();
	};

	function pageScrolled() {
		if ($(window).scrollTop() > headerH) {
			$("header").addClass('scrolled');
		} else {
			$("header").removeClass('scrolled');
		}
	};

	/*=====================*/
	/* 06 - swiper sliders */
	/*=====================*/
	var initIterator = 0;
	_functions.initSwiper = function() {
		$('.swiper-container').not('.initialized').each(function() {
			var $t = $(this);

			var index = 'swiper-unique-id-' + initIterator;

			$t.addClass('swiper-' + index + ' initialized').attr('id', index);
			$t.find('.swiper-pagination').addClass('swiper-pagination-' + index);
			$t.find('.swiper-button-prev').addClass('swiper-button-prev-' + index);
			$t.find('.swiper-button-next').addClass('swiper-button-next-' + index);

			var slidesPerViewVar = ($t.data('slides-per-view')) ? $t.data('slides-per-view') : 1;
			if (slidesPerViewVar != 'auto') slidesPerViewVar = parseInt(slidesPerViewVar, 10);

			swipers['swiper-' + index] = new Swiper('.swiper-' + index, {
				pagination: '.swiper-pagination-' + index,
				paginationType: ($t.is('[data-pagination-type]')) ? ($t.data('pagination-type'), 10) : 'bullets',
				paginationClickable: true,
				nextButton: '.swiper-button-next-' + index,
				prevButton: '.swiper-button-prev-' + index,
				slidesPerView: slidesPerViewVar,
				autoHeight: ($t.is('[data-auto-height]')) ? parseInt($t.data('auto-height'), 10) : 0,
				loop: ($t.is('[data-loop]')) ? parseInt($t.data('loop'), 10) : 0,
				autoplay: ($t.is('[data-autoplay]')) ? parseInt($t.data('autoplay'), 10) : 0,
				breakpoints: ($t.is('[data-breakpoints]')) ? {
					767: {
						slidesPerView: parseInt($t.attr('data-xs-slides'), 10),
						direction: ($t.is('[data-xs-direction]')) ? $t.data('xs-direction') : 'horizontal'
					},
					991: {
						slidesPerView: parseInt($t.attr('data-sm-slides'), 10),
						direction: ($t.is('[data-sm-direction]')) ? $t.data('sm-direction') : 'horizontal'
					},
					1199: {
						slidesPerView: parseInt($t.attr('data-md-slides'), 10),
						direction: ($t.is('[data-md-direction]')) ? $t.data('md-direction') : 'horizontal'
					}
				} : {},
				initialSlide: ($t.is('[data-ini]')) ? parseInt($t.data('ini'), 10) : 0,
				speed: ($t.is('[data-speed]')) ? parseInt($t.data('speed'), 10) : 500,
				keyboardControl: false,
				preloadImages: false,
				lazyLoading: true,
				parallax: ($t.is('[data-parallax]'))?parseInt($t.data('parallax'), 10):0,
				mousewheelControl: ($t.is('[data-mousewheel]')) ? parseInt($t.data('mousewheel'), 10) : 0,
				mousewheelReleaseOnEdges: true,
				noSwipingClass: 'no-swipe',
				direction: ($t.is('[data-direction]')) ? $t.data('direction') : 'horizontal',
				spaceBetween: ($t.is('[data-space-between]')) ? parseInt($t.data('space-between'), 10) : 0,
				centeredSlides: ($t.is('[data-centered]')) ? parseInt($t.data('centered'), 10) : 0,
				effect: ($t.is('[data-effect]')) ? ($t.data('effect'), 'fade') : 0,
				fade: {
					crossFade: true
				},
				onTransitionEnd: function(swiper) {
					$t.find('.swiper-slide-current').text(swiper.activeIndex + 1);
				},
				paginationFractionRender: function (swiper, currentClassName, totalClassName) {
					if ($t.parent().hasClass('swipers-wrapper')) {
						return '<span class="' + currentClassName + '"></span><span class="' + totalClassName + '"></span>';
					}
				},
				onSlideChangeStart: function(swiper) {
					if ($t.hasClass('swiper-control-top')) {
						var activeIndex = swiper.activeIndex,
								slidersWrapper = $t.closest('.swipers-wrapper');
						swipers['swiper-' + slidersWrapper.find('.swiper-control-bottom').attr('id')].slideTo(activeIndex);
						slidersWrapper.find('.swiper-control-bottom').find('.active').removeClass('active');
						slidersWrapper.find('.swiper-control-bottom').find('.swiper-slide').eq(activeIndex).addClass('active');
					}
				}
			});
			swipers['swiper-' + index].update();
			initIterator++;

			if ($($t).find('.swiper-slide:not(.swiper-slide-duplicate)').length == 1) {
				$t.addClass('no-swipe');
			}

			if ($($t).hasClass('items-slider') && $($t).find('.swiper-slide:not(.swiper-slide-duplicate)').length < 4) {
				$t.addClass('no-swipe');
			}
		});
	};

	/* two sliders control: control bottom slider to top slider */
	$('.swiper-control-bottom .swiper-slide').on('click', function() {
		var index = $(this).index();

		swipers['swiper-' + $(this).closest('.swipers-wrapper').find('.swiper-control-top').attr('id')].slideTo(index);
	});

	/* counter slider */
	var top_banner_slides = $('.swiper-control-top').find('.swiper-wrapper .swiper-slide').length;
	$('.swiper-slide-total').html(top_banner_slides);

	/*==============================*/
	/* 07 - buttons, clicks, hovers */
	/*==============================*/
	// Language dropdown

	// $('.lang > span, .tel span').on('click', function() {
	// 	$(this).parent().find('div').slideToggle();
	// 	$(this).parent().toggleClass('active');
	// });

	$('.lang').hover(function() {
		$(this).find('div').slideToggle();
		$(this).toggleClass('active');
	});

	$('.tel').hover(function() {
		$(this).find('div').slideToggle();
		$(this).toggleClass('active');
	});

	var video_wrapper = $('.youtube-video-place');
	//  Check to see if youtube wrapper exists
	if(video_wrapper.length){
	// If user clicks on the video wrapper load the video.
	$('.play-youtube-video').on('click', function(){
	/* Dynamically inject the iframe on demand of the user.
	 Pull the youtube url from the data attribute on the wrapper element. */
	video_wrapper.html('<iframe allowfullscreen frameborder="0" class="embed-responsive-item" src="' + video_wrapper.data('yt-url') + '"></iframe>');
	});
	}

	// $('.tel').hover(function() {
	// 	$(this).parent().find('div').slideToggle();
	// 	$(this).parent().toggleClass('active');
	// });

	// $('.lang > span, .tel>firstphone').on('mouseout', function() {
	// 	$(this).parent().find('div').slideToggle();
	// 	$(this).parent().toggleClass('active');
	// });

	

	// Open mobile menu
	$('#burger').on('click', function() {
		$('nav').addClass('active');
		$('html').addClass('overflow-menu');
	});
	// Close mobile menu
	$('#close-menu').on('click', function() {
		$('nav').removeClass('active');
		$('html').removeClass('overflow-menu');
	});
	// Open phone numbers menu
	$('#tel-button').on('click', function() {
		$('.tel-dropdown').addClass('active');
		$('html').addClass('overflow-menu');
	});
	// Close phone numbers menu
	$('#close-tel').on('click', function() {
		$('.tel-dropdown').removeClass('active');
		$('html').removeClass('overflow-menu');
	});
	// Sidebars accordeon open / close
	$('.sidebar-wrap > span').on('click', function() {
		$(this).toggleClass('active').next().slideToggle(350);
	});

	$('.custom-menu-title > span, .custom-menu-title > a').on('click', function(e){
		if($(this).hasClass('h4')){
			if(winW < 768) e.preventDefault();
			else return;
		}
		$(this).parent().toggleClass('active').next().slideToggle(350);
	});
	//accordeon
	$('.accordeon-title').click(function () {
		$(this).toggleClass('active');
		if ($(this).hasClass('active') == true) {
			$(this).next().slideDown(350);
			$('html, body').animate({scrollTop: $(this).offset().top - $('header').outerHeight() * 1.35}, 600);
        	return false;
		} else {
			$(this).next().slideUp(350);
		}
	});
	// price tabs
	$('.price-tab').on('click', function() {
		var $tabMenuWrap = $('.price-nav'),
			$tabsWrapper = $('.price-tabs-wrapper'),
			$tabsMenu = $tabMenuWrap.find('.price-tab'),
			$tabsItem = $tabsWrapper.find('.price-tab-info'),
			$index = $tabsMenu.index(this);
		
		$($tabsItem).eq($index).addClass('active').siblings().removeClass('active');
		$(this).addClass('active').siblings().removeClass('active');
	});
	
	// Input focus
	$(document).on('focus', '.form input:not([type="file"]), .form textarea', function(){
		$(this).parent().parent().addClass('active');
	});

	// Input blur
	$(document).on('blur', '.form input:not([type="file"]), .form textarea', function(){
		$(this).parent().parent().removeClass('active');
	});

	// Check if input is empty / hide placeholder
	$(document).on('change', '.form input:not([type="file"]), .form textarea', function(){
		if ($(this).val()) {
			$(this).closest('label').addClass('hide-pl');
		} else {
			$(this).closest('label').removeClass('hide-pl');
		}
	});
	
	/*==============================*/
	/* 08 - pop-up */
	/*==============================*/
	$(document).on('click', '.open-popup', function() {
		$('.popup-content').removeClass('active');
		$('.popup-wrapper, .popup-content[data-rel="' + $(this).data('rel') + '"]').addClass('active');
		$('html').addClass('overflow-hidden');
		return false;
	});

	$(document).on('click', '.popup-wrapper .button-close, .popup-wrapper .layer-close', function() {
		$('.popup-wrapper, .popup-content').removeClass('active');
		$('html').removeClass('overflow-hidden');
		$('input[name="daterange"]').data('dateRangePicker').close();
		setTimeout(function() {
				$('.ajax-popup').remove();
		}, 300);
		return false;
	});

	/*==============================*/
	/* 10 - tabs */
	/*==============================*/
	var tabFinish = 0;
	$('.nav-tab-item:not(.not-a-tab)').on('click', function() {
		var $t = $(this);
		if (tabFinish) return false;
		if(!$t.hasClass('active')){
			tabFinish = 1;
			$t.closest('.nav-tab').find('.nav-tab-item').removeClass('active');
			$t.addClass('active');
			var index = $t.parent().parent().find('.nav-tab-item').index(this);
				$t.parents('.tab-nav-wrapper').find('.tab-select select option:eq(' + index + ')').prop('selected', true);
				$t.closest('.tab-wrapper').find('.tabs-content').first().children('.tab-info:visible').fadeOut(300, function() {
					var $tabActive = $t.closest('.tab-wrapper').find('.tabs-content').first().children('.tab-info').eq(index);
					$tabActive.css('display', 'block').css('opacity', '0');
					tabReinit($tabActive.parents('.tab-wrapper'));
					$tabActive.animate({
						opacity: 1
					});
					tabFinish = 0;
				});
		} else {
			tabFinish = 0;
		}

		if(winW < 768){
			$('html, body').animate({
				scrollTop: $('.nav-tab.item-tabs').offset().top - 10
			}, 300);
		}
	});

	$('.tab-select').on('click', function(e) {
		$(this).parent('.tab-nav-wrapper').find('.select-arrow').toggleClass('icon-change');
		e.preventDefault();
	});

	function tabReinit($tab) {
		$tab.find('.swiper-container').each(function() {
			var thisSwiper = swipers['swiper-' + $(this).attr('id')];
			thisSwiper.update();
		});
	}

	$('.nav-tab-item.not-a-tab').on('click', function() {
		$('.tab-info, .nav-tab-item').first().addClass('active');
		$('.tab-info, .nav-tab-item').first().siblings().removeClass('active');
		$('.tab-info').first().fadeIn(300);
		$('.tab-info').first().siblings().fadeOut(300);
	});
	/*==============================*/
	/* 11 - smooth scroll*/
	/*==============================*/
	$(function() {
		$('a[href*="#"]:not([href="#"])').click(function() {
			if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
				if (target.length) {
					$('html, body').animate({
						scrollTop: target.offset().top - $('header').outerHeight()
					}, 1000);
					return false;
				}
			}
		});
	});

	/*==============================*/
	/* 12 - hover Star */
	/*==============================*/
	function ratingStars() {
		
		if ($('.stars').length) {
			$('.stars').each(function(i){
				let c_stars = $(this);
				let index = $(this).find('span.active').index();
				$(c_stars).find('span').each(function(i){
					if ($(this).index() < index) {
						$(this).addClass('orange');
					} else if ($(this).index() == index) {
						$(this).addClass('orange');
					} else {
						$(this).removeClass('orange');
					}
				});
			});
		}
	}

	$('.stars span').hover(function() {
		$(this).addClass('hover');
		let c_stars = $(this).closest('.stars');
		$(c_stars).find('span').each(function() {
			if ($(this).index() < $(c_stars).find('span.hover').index()) {
				$(this).addClass('orange');
			} else {
				$(this).removeClass('orange');
			}
		});
	});

	$('.stars span').mouseleave(function() {
		$(this).removeClass('hover');
		ratingStars();
	});
	$(document).ready(function(){

		$(".fancy").each(function () {
			$(this).replaceWith('<a class="fancybox" href="'+$(this).attr('src')+'">'+$(this)[0].outerHTML +'</a>');
		}).promise().done(function(){ $('.fancybox').fancybox(); });
	
	});

	function setCookie(cname, cvalue, exdays) {
	  var d = new Date();
	  d.setTime(d.getTime() + (exdays*24*60*60*1000));
	  var expires = "expires="+ d.toUTCString();
	  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
	}
	jQuery('.lang>div>a').click(function(event){
	    event.preventDefault();
	    setCookie("qtrans_front_language",jQuery(this).data('lang'));
	    document.location.href = $(this).attr('href');
	});

});
