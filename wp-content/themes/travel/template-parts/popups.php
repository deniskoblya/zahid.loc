<?php if(!defined('ABSPATH')) exit; ?>
<div class="popup-wrapper">
	<div class="bg-popup-layer"></div>
	
	<div class="popup-content" data-rel="2">
		<div class="layer-close"></div>
		<div class="popup-container size-1">
			<div class="popup-align text-center">
				<p class="h2"><?php _e('Thank!','travel'); ?></p>
				<div class="empty-lg-20 empty-xs-15"></div>
				<p class="h4"><?php _e('The application is being processed. We will contact you shortly','travel'); ?></p>
			</div>
			<div class="button-close"><span></span><span></span></div>
		</div>
	</div>

	<?php
		$request_call = get_field('request_call','options');
		if($request_call){ ?>
			<div class="popup-content" data-rel="3">
				<div class="layer-close"></div>
				<div class="popup-container size-1">
					<div class="popup-align text-center">
						<?php
							echo ($request_call['title'] ? '<p class="h2">'.esc_html($request_call['title']).'</p>' : '');
							echo ($request_call['title'] && $request_call['text'] ? '<div class="empty-lg-20 empty-xs-15"></div>' : '');
							echo ($request_call['text'] ? '<p class="h4">'.esc_html($request_call['text']).'</p>' : '');
						?>
					</div>
					<div class="button-close"><span></span><span></span></div>
				</div>
			</div>
	<?php }

		$add_comment = get_field('add_comment','options');
		if($add_comment){ ?>
			<div class="popup-content" data-rel="33">
				<div class="layer-close"></div>
				<div class="popup-container size-1">
					<div class="popup-align text-center">
						<?php
							echo ($add_comment['title'] ? '<p class="h2">'.esc_html($add_comment['title']).'</p>' : '');
							echo ($add_comment['title'] && $add_comment['text'] ? '<div class="empty-lg-20 empty-xs-15"></div>' : '');
							echo ($add_comment['text'] ? '<p class="h4">'.esc_html($add_comment['text']).'</p>' : '');
						?>
					</div>
					<div class="button-close"><span></span><span></span></div>
				</div>
			</div>
	<?php } ?>

	<div class="popup-content" data-rel="4">
		<div class="layer-close"></div>
		<div class="popup-container size-1">
			<div class="popup-align text-center">
				<p class="h2"><?php _e('Thank!','travel'); ?></p>
				<div class="empty-lg-20 empty-xs-15"></div>
				<p class="h4"><?php _e('Check your Inbox or Spam for a message containing a confirmation link.','travel'); ?></p>
			</div>
			<div class="button-close"><span></span><span></span></div>
		</div>
	</div>

	<?php
		if(is_singular('room')){
			global $wp_query;
			$wp_query->in_the_loop = true;
			
			$reservation_form = get_field('reservation_form','options');
			if($reservation_form){ ?>
				<div class="popup-content" data-rel="5">
					<div class="layer-close"></div>
					<div class="popup-container size-2">
						<div class="popup-align">
							<div class="text-center reservation">
								<?php
									$reservation_form_title = get_field('reservation_form_title','options');
									echo ($reservation_form_title ? '<p class="h2">'.esc_html($reservation_form_title).'</p><div class="empty-lg-20 empty-xs-15"></div>' : '');
									travel_the_form($reservation_form, 'form row booking', 'BookingForm');
								?>
							</div>
						</div>
						<div class="button-close"><span></span><span></span></div>
					</div>
				</div>
		<?php }
			$wp_query->in_the_loop = false;
		}
		
		$reservation_popup = get_field('reservation_popup','options');
		if($reservation_popup){ ?>
			<div class="popup-content" data-rel="6">
				<div class="layer-close"></div>
				<div class="popup-container size-1">
					<div class="popup-align text-center">
						<?php
							echo ($reservation_popup['title_t'] ? '<p class="h2">'.esc_html($reservation_popup['title_t']).'</p>' : '');
							echo ($reservation_popup['title_t'] && $reservation_popup['text'] ? '<div class="empty-lg-20 empty-xs-15"></div>' : '');
							echo ($reservation_popup['text'] ? '<p class="h4">'.esc_html($reservation_popup['text']).'</p>' : '');
						?>
					</div>
					<div class="button-close"><span></span><span></span></div>
				</div>
			</div>
	<?php } ?>

    <?php
    $get_title_form = get_field('get_title_form','options');
    if($get_title_form){ ?>
        <div class="popup-content" data-rel="1">
            <div class="layer-close"></div>
            <div class="popup-container size-1">
                <div class="popup-align">
                    <div class="row">
                        <div class="text-center col-lg-6 col-lg-offset-3 col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 col-xs-12">
                            <?php
                            $get_title_form_title = get_field('get_title_form_title','options');
                            echo ($get_title_form_title ? '<p class="h2">'.esc_html($get_title_form_title).'</p><div class="empty-lg-20 empty-xs-15"></div>' : '');
                            travel_the_form($get_title_form, 'form get_call', 'BackCallForm');
                            ?>
                        </div>
                    </div>
                </div>
                <div class="button-close"><span></span><span></span></div>
            </div>
        </div>
    <?php } ?>
</div>