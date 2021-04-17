jQuery(document).ready(function($) {
	jQuery('.ulb-main-dashboard-review-ask').css('display', 'block');

  jQuery(document).on('click', '.ulb-main-dashboard-review-ask .notice-dismiss', function(event) {
    var data = 'ask_review_time=7&action=ulb_hide_review_ask';
    jQuery.post(ajaxurl, data, function() {});
  });

	jQuery('.ulb-review-ask-yes').on('click', function() {
		jQuery('.ulb-review-ask-feedback-text').removeClass('ulb-hidden');
		jQuery('.ulb-review-ask-starting-text').addClass('ulb-hidden');

		jQuery('.ulb-review-ask-no-thanks').removeClass('ulb-hidden');
		jQuery('.ulb-review-ask-review').removeClass('ulb-hidden');

		jQuery('.ulb-review-ask-not-really').addClass('ulb-hidden');
		jQuery('.ulb-review-ask-yes').addClass('ulb-hidden');

		var data = 'ask_review_time=7&action=ulb_hide_review_ask';
        jQuery.post(ajaxurl, data, function() {});
	});

	jQuery('.ulb-review-ask-not-really').on('click', function() {
		jQuery('.ulb-review-ask-review-text').removeClass('ulb-hidden');
		jQuery('.ulb-review-ask-starting-text').addClass('ulb-hidden');

		jQuery('.ulb-review-ask-feedback-form').removeClass('ulb-hidden');
		jQuery('.ulb-review-ask-actions').addClass('ulb-hidden');

		var data = 'ask_review_time=1000&action=ulb_hide_review_ask';
        jQuery.post(ajaxurl, data, function() {});
	});

	jQuery('.ulb-review-ask-no-thanks').on('click', function() {
		var data = 'ask_review_time=1000&action=ulb_hide_review_ask';
        jQuery.post(ajaxurl, data, function() {});

        jQuery('.ulb-main-dashboard-review-ask').css('display', 'none');
	});

	jQuery('.ulb-review-ask-review').on('click', function() {
		jQuery('.ulb-review-ask-feedback-text').addClass('ulb-hidden');
		jQuery('.ulb-review-ask-thank-you-text').removeClass('ulb-hidden');

		var data = 'ask_review_time=1000&action=ulb_hide_review_ask';
        jQuery.post(ajaxurl, data, function() {});
	});

	jQuery('.ulb-review-ask-send-feedback').on('click', function() {
		var feedback = jQuery('.ulb-review-ask-feedback-explanation textarea').val();
		var email_address = jQuery('.ulb-review-ask-feedback-explanation input[name="feedback_email_address"]').val();
		var data = 'feedback=' + feedback + '&email_address=' + email_address + '&action=ulb_send_feedback';
        jQuery.post(ajaxurl, data, function() {});

        var data = 'ask_review_time=1000&action=ulb_hide_review_ask';
        jQuery.post(ajaxurl, data, function() {});

        jQuery('.ulb-review-ask-feedback-form').addClass('ulb-hidden');
        jQuery('.ulb-review-ask-review-text').addClass('ulb-hidden');
        jQuery('.ulb-review-ask-thank-you-text').removeClass('ulb-hidden');
	});
});