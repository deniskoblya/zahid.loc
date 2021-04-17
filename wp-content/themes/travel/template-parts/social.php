<?php
	$facebook  = get_field( 'facebook_option', 'option' );
	$twitter   = get_field( 'twitter_option', 'option' );
	$google    = get_field( 'google_option', 'option' );
	$youtube   = get_field( 'youtube_option', 'option' );
	$instagram = get_field( 'instagram_option', 'option' );
if( !empty( $facebook ) ){ ?>	
<li>
	<img src="<?php echo TRAVEL_URI; ?>/img/facebook-icon.png" alt="facebook" title="<?php _e('Facebook','travel'); ?>">
	<a href="<?php echo esc_url( $facebook ); ?>" target="_blank"><?php _e('Facebook','travel'); ?></a>
</li>
<?php }
if( !empty( $twitter ) ){ ?>
<li>
	<img src="<?php echo TRAVEL_URI; ?>/img/twitter-icon.png" alt="twitter" title="<?php _e('Twitter','travel'); ?>">
	<a href="<?php echo esc_url( $twitter ); ?>" target="_blank"><?php _e('Twitter','travel'); ?></a>
</li>
<?php }
if( !empty( $google ) ){ ?>
<li>
	<img src="<?php echo TRAVEL_URI; ?>/img/google-plus-icon.png" alt="google-plus" title="<?php _e('Google+','travel'); ?>">
	<a href="<?php echo esc_url( $google ); ?>" target="_blank"><?php _e('Google+','travel'); ?></a>
</li>
<?php }
if( !empty( $youtube ) ){ ?>
<li>
	<img src="<?php echo TRAVEL_URI; ?>/img/youtube-icon.png" alt="youtube" title="<?php _e('Youtube','travel'); ?>">
	<a href="<?php echo esc_url( $youtube ); ?>" target="_blank"><?php _e('Youtube','travel'); ?></a>
</li>
<?php }
if( !empty( $instagram ) ){ ?>
<li>
	<img src="<?php echo TRAVEL_URI; ?>/img/instagram-icon.png" alt="instagram" title="<?php _e('Instagram','travel'); ?>">
	<a href="<?php echo esc_url( $instagram ); ?>" target="_blank"><?php _e('Instagram','travel'); ?></a>
</li>
<?php } ?>