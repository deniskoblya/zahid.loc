jQuery(function($) {
	"use strict";

	//remove not valid input
    $(document).on('focus','.wpcf7-not-valid',function(){
        $(this).removeClass('wpcf7-not-valid');
    });
    $(document).on('change','select.wpcf7-not-valid',function(){
        $(this).removeClass('wpcf7-not-valid');
    });

    if('.gallery'){
    	function changeAltLightBox(_this){
			const _simpleLB = $('.simple-lightbox').find('img');
			if(_simpleLB){
				return _simpleLB.attr('alt', _this.attr('title'));
			}
		}
		$('.single-page-image-link').on('changed.simplelightbox', function (e) {
			changeAltLightBox($(this));
		})
		$('.single-page-image-link').on('click', function(e) {
			changeAltLightBox($(this));
		})
	}

	$('#comm-submit').click(function(e){
		$(this).closest('form').find('input[name="post_id"]').val($('#POST_ID').val());
		$(this).closest('form').find('input[type="submit"]').click();
	});

	document.addEventListener( 'wpcf7mailsent', function( event ) {
		let form = $(event.srcElement).find('form');
		if(form.hasClass('comment-form')){
			$(form).find('label').removeClass('hide-pl');
			$('.popup-wrapper, .popup-content[data-rel="33"]').addClass('active');
			$('html').addClass('overflow-hidden');
			return false;
		}

		if(form.hasClass('get_call')){
			$('.popup-content.active').removeClass('active');
			$(form).find('label').removeClass('hide-pl');
			$('.popup-wrapper, .popup-content[data-rel="3"]').addClass('active');
			$('html').addClass('overflow-hidden');
			return false;
		}

		if(form.hasClass('booking')){
			$('.popup-content.active').removeClass('active');
			$('.layer-close').click();
			$(form).find('label').removeClass('hide-pl');
			$('.popup-wrapper, .popup-content[data-rel="6"]').addClass('active');
			$('html').addClass('overflow-hidden');

			$('select[name="adults"]')[0].sumo.selectItem(1);
			$('select[name="children"]')[0].sumo.selectItem(1);

			$('input[name="daterange"]').data('dateRangePicker').clear();

			return false;
		}
	}, false );

	$('#load_more').click(function(e){
		let j = 0;
		$('.row.dinamyc').find('div.c_item:hidden').each(function(i){
			if (j <= 8){
				$(this).fadeIn();
			}
			j++;
		});

		if ($('.row.dinamyc').find('div.c_item:hidden').length == 0){
			$('#load_more').hide();
		}
	});

	$('div[data-scroll*="#"]').click(function() {
		var target = $($(this).data('scroll'));
		target = target.length ? target : $('[name='+this.hash.slice(1)+']');
		if(target.length){
			$('html, body').animate({ scrollTop: target.offset().top }, 1000);
		}
		return false;
	});

	$(window).on('load',function(){
		if($('.reservation').length){
			$('select[name="children"] option:first-child').text(travel.children).prop('disabled',true);
			$('select[name="adults"] option:first-child').text(travel.adults).prop('disabled',true);

			$('select[name="adults"]')[0].sumo.reload();
			$('select[name="children"]')[0].sumo.reload();
		}
	});

	if ($('#searchCalendar').length){
		$.dateRangePickerLanguages['ua'] = {
            selected: "Обрано:",
            day: "День",
            days: "Днів",
            apply: "Застосувати",
            "week-1": "пн",
            "week-2": "вт",
            "week-3": "ср",
            "week-4": "чт",
            "week-5": "пт",
            "week-6": "сб",
            "week-7": "нд",
            "month-name": ["січень", "лютий", "Березень", "квітень", "травень", "червень", "липня", "Серпень", "вересень", "жовтень", "листопад", "грудень"],
            shortcuts: "Швидкий вибір",
            "custom-values": "Призначені для користувача значення",
            past: "Минулі",
            following: "Наступні",
            previous: "&nbsp;&nbsp;&nbsp;",
            "prev-week": "Тиждень",
            "prev-month": "Місяць",
            "prev-year": "Рік",
            next: "&nbsp;&nbsp;&nbsp;",
            "next-week": "Тиждень",
            "next-month": "Місяць",
            "next-year": "Рік",
            "less-than": "Діапазон не може бути більше %d днів",
            "more-than": "Діапазон не може бути менше %d днів",
            "default-more": "Будь ласка виберіть діапазон більше %d днів",
            "default-single": "Будь ласка виберіть дату",
            "default-less": "Будь ласка виберіть діапазон менше %d днів",
            "default-range": "Будь ласка виберіть діапазон між %d і %d днями",
            "default-default": "Будь ласка виберіть діапазон",
            time: "Час",
            hour: "Годинники",
            minute: "Хвилини"
        };
		$('input[name="daterange"]').prop('readonly',true).dateRangePicker({
			format: 'DD-MM-YYYY',
			separator: ' - ',
			language: travel.lang,
			startDate: travel.minDate,
			startOfWeek: 'monday',
			singleDate: false,
			singleMonth: false,
			setValue: function(s){
				if(!$(this).is(':disabled') && s != $(this).val()){
					$(this).val(s);
				}
			}
		}).bind('datepicker-change',function(e,obj){
			$(e.target).change();
		});
	}

	const buttonClick = (event, buttonName) => {
		const maxCount = 9;
		let counter = 0;
		let _buttonLoading = false;
		$(buttonName).click(function(){
			const _thisButton = $(this);
			_thisButton.addClass('sanatorium_loading');
			let data = {
				'action': event,
				'count': counter,
				'page_id': ajaxGet.page_id,
			};
			if (!_buttonLoading){
				_buttonLoading = true;
				$.ajax({
					url: ajaxurl,
					data: data,
					type: 'POST',
					success: function(data){
						const result = JSON.parse(data);
						_thisButton.removeClass('sanatorium_loading');
						if (result.contents) {
							counter += maxCount;
							if(!result.more){
								_thisButton.remove();
							}
							_buttonLoading = false;
							return $('#true_loadmore_content').append(result.contents);
						}
						return false;
					}
				});
			}
		});
	}
	if ($("#true_loadmore")){
		buttonClick('loadmore_catalog', '#true_loadmore');
	}
	if ($("#true_loadmore_sanatorium")) {
		buttonClick('loadmore_catalog_sanatorium', '#true_loadmore_sanatorium');
	}
});