<?php
/*
Plugin Name: Ultimate Lightbox
Plugin URI: http://www.EtoileWebDesign.com/plugins/
Description: A plugin that lets you add a lightbox to images on your site
Author: Etoile Web Design
Author URI: http://www.EtoileWebDesign.com/
Terms and Conditions: http://www.etoilewebdesign.com/plugin-terms-and-conditions/
Text Domain: ultimate-lightbox
Version: 1.0.2
*/

if ( ! defined( 'ABSPATH' ) )
	exit;

if ( ! class_exists( 'ulbInit' ) ) {
class ulbInit {

	/**
	 * Initialize the plugin and register hooks
	 */
	public function __construct() {

		self::constants();
		self::includes();
		self::instantiate();
		self::wp_hooks();
	}

	/**
	 * Define plugin constants.
	 *
	 * @since  1.0.0
	 * @access protected
	 * @return void
	 */
	protected function constants() {

		define( 'ULB_PLUGIN_DIR', untrailingslashit( plugin_dir_path( __FILE__ ) ) );
		define( 'ULB_PLUGIN_URL', untrailingslashit( plugin_dir_url( __FILE__ ) ) );
		define( 'ULB_PLUGIN_FNAME', plugin_basename( __FILE__ ) );
		define( 'ULB_VERSION', '1.0.0' );
	}

	/**
	 * Include necessary classes.
	 *
	 * @since  1.0.0
	 * @access protected
	 * @return void
	 */
	protected function includes() {

		require_once( ULB_PLUGIN_DIR . '/includes/AttachmentOptions.class.php' );
		require_once( ULB_PLUGIN_DIR . '/includes/DeactivationSurvey.class.php' );
		require_once( ULB_PLUGIN_DIR . '/includes/InstallationWalkthrough.class.php' );
		require_once( ULB_PLUGIN_DIR . '/includes/ReviewAsk.class.php' );
		require_once( ULB_PLUGIN_DIR . '/includes/Settings.class.php' );
		require_once( ULB_PLUGIN_DIR . '/includes/template-functions.php' );
	}

	/**
	 * Spin up instances of our plugin classes.
	 *
	 * @since  1.0.0
	 * @access protected
	 * @return void
	 */
	protected function instantiate() {

		new ulbAttachmentOptions();
		new ulbDeactivationSurvey();
		new ulbInstallationWalkthrough();
		new ulbReviewAsk();

		$this->settings = new ulbSettings();

	}

	/**
	 * Run walk-through, load assets, add links to plugin listing, etc.
	 *
	 * @since  1.0.0
	 * @access protected
	 * @return void
	 */
	protected function wp_hooks() {

		register_activation_hook( __FILE__, 	array( $this, 'run_walkthrough' ) );
		register_activation_hook( __FILE__, 	array( $this, 'convert_options' ) );

		add_action( 'plugins_loaded',        	array( $this, 'load_textdomain' ) );

		add_action( 'admin_enqueue_scripts', 	array( $this, 'enqueue_admin_assets' ), 10, 1 );
		add_action( 'wp_enqueue_scripts', 		array( $this, 'register_assets' ) );
		add_action( 'wp_head',					'ewd_add_frontend_ajax_url' );

		add_filter( 'plugin_action_links',		array( $this, 'plugin_action_links' ), 10, 2);
	}

	/**
	 * Run the options conversion function on update if necessary
	 *
	 * @since  1.0.0
	 * @access protected
	 * @return void
	 */
	public function convert_options() {
		
		require_once( ULB_PLUGIN_DIR . '/includes/BackwardsCompatibility.class.php' );
		new ulbBackwardsCompatibility();
	}

	/**
	 * Load the plugin textdomain for localisation
	 * @since 1.0.0
	 */
	public function load_textdomain() {
		
		load_plugin_textdomain( 'ultimate-lightbox', false, ULB_PLUGIN_DIR . "/languages/" );
	}

	/**
	 * Set a transient so that the walk-through gets run
	 * @since 1.0.0
	 */
	public function run_walkthrough() {

		set_transient( 'ulb-getting-started', true, 30 );
	} 

	/**
	 * Enqueue the admin-only CSS and Javascript
	 * @since 1.0.0
	 */
	public function enqueue_admin_assets( $hook ) {

		global $ulb_controller;

		// Use the page reference in $admin_page_hooks because
		// it changes in SOME hooks when it is translated.
		// https://core.trac.wordpress.org/ticket/18857
		global $admin_page_hooks;

		$screen = get_current_screen(); 
		if ( empty( $screen ) ) {
			
			return;
		}

		if ( $screen->base == 'toplevel_page_ulb-settings' ) {
			
			wp_enqueue_style( 'ewd-ulb-admin-css', ULB_PLUGIN_URL . '/assets/css/admin.css', array(), ULB_VERSION );

			wp_enqueue_script( 'ewd-ulb-admin-js', ULB_PLUGIN_URL . '/assets/js/admin.js', array( 'jquery' ), ULB_VERSION );
		}

		if ($hook == 'upload.php') {
    	    wp_enqueue_script( 'ewd-ulb-admin', plugins_url('ultimate-lightbox/js/admin-upload-media.js'), array('jquery', 'media-editor'), true);
    	}

		wp_enqueue_script( 'image-block-meta-js', ULB_PLUGIN_URL . '/assets/js/image-block-meta.js', array( 'wp-blocks', 'wp-element', 'wp-components', 'wp-i18n' ), ULB_VERSION );
	}

	/**
	 * Register the front-end CSS and Javascript for the lightbox
	 * @since 1.0.0
	 */
	function register_assets() {
		global $ulb_controller;

    	if ( ! empty( $ulb_controller->settings->get_setting( 'add-lightbox' ) ) ) {

    		wp_enqueue_style( 'ewd-ulb-main', ULB_PLUGIN_URL . '/assets/css/ewd-ulb-main.css', ULB_VERSION );
   			wp_enqueue_style( 'ewd-ulb-twentytwenty', ULB_PLUGIN_URL . '/assets/css/twentytwenty.css', ULB_VERSION );

    		$deps = array( 'jquery' );
	    	if ( in_array( 'woocommerce/woocommerce.php', (array) get_option( 'active_plugins', array() ), true ) ) { $deps[] = 'woocommerce'; }
	
	    	wp_enqueue_script( 'iframe-clicks', ULB_PLUGIN_URL . '/assets/js/jquery.iframetracker.js', array( 'jquery' ), true );
	    	wp_enqueue_script( 'ewd-ulb', ULB_PLUGIN_URL . '/assets/js/ewd-ulb.js', $deps, ULB_VERSION );
	
	    	$add_lightbox_data = array(
	    		'add_lightbox' 			=> json_encode( $ulb_controller->settings->get_setting( 'add-lightbox' ) ),
	            'image_class_list' 		=> $ulb_controller->settings->get_setting( 'image-class-list' ),
	            'image_selector_list' 	=> $ulb_controller->settings->get_setting( 'image-selector-list' ),
	            'min_height' 			=> $ulb_controller->settings->get_setting( 'min-height' ),
	            'min_width' 			=> $ulb_controller->settings->get_setting( 'min-width' ),
	            'overlay_text_source' 	=> $ulb_controller->settings->get_setting( 'overlay-text-source' )
	        );
	
	    	wp_localize_script( 'ewd-ulb', 'ewd_ulb_php_add_data', $add_lightbox_data );

        	wp_enqueue_script( 'event-move', ULB_PLUGIN_URL . '/assets/js/jquery.event.move.js', array('jquery'), true );
        	wp_enqueue_script( 'twenty-twenty', ULB_PLUGIN_URL . '/assets/js/jquery.twentytwenty.js', array('jquery'), true );
        	wp_enqueue_script( 'ultimate-lightbox', ULB_PLUGIN_URL . '/assets/js/ultimate-lightbox.js', array('jquery', 'event-move', 'twenty-twenty'), ULB_VERSION );
        	wp_enqueue_script( 'jquery.mousewheel.min', ULB_PLUGIN_URL . '/assets/js/jquery.mousewheel.min.js', array('jquery', 'ultimate-lightbox'), true );

        	if ( $ulb_controller->settings->get_setting( 'disable-other-lightboxes' ) ) {
        	    wp_enqueue_script( 'ewd-ulb-disable-lightboxes', ULB_PLUGIN_URL . '/assets/js/ewd-ulb-disable-lightboxes.js', array('jquery'), true, true );
        	}

        	$style_string = ulb_add_custom_styling();

        	$lightbox_controls = array(
        		'top_right_controls' 	=> $ulb_controller->settings->get_setting( 'top-right-controls' ),
        		'top_left_controls' 	=> $ulb_controller->settings->get_setting( 'top-left-controls' ),
        		'bottom_right_controls' => $ulb_controller->settings->get_setting( 'bottom-right-controls' ),
        		'bottom_left_controls' 	=> $ulb_controller->settings->get_setting( 'bottom-left-controls' )
        	);

        	$data_array = array(
        		'custom_css' 			=> $ulb_controller->settings->get_setting( 'custom-css' ),
                'styling_options' 		=> $style_string,
                'background_close' 		=> $ulb_controller->settings->get_setting( 'background-close' ),
                'gallery_loop' 			=> $ulb_controller->settings->get_setting( 'gallery-loop' ),
                'show_thumbnails' 		=> $ulb_controller->settings->get_setting( 'show-thumbnails' ),
                'show_thumbnail_toggle' => $ulb_controller->settings->get_setting( 'show-thumbnail-toggle' ),
                'show_progress_bar'		=> $ulb_controller->settings->get_setting( 'show-progress-bar' ),
                'autoplay' 				=> $ulb_controller->settings->get_setting( 'start-autoplay' ),
                'autoplay_interval' 	=> $ulb_controller->settings->get_setting( 'autoplay-interval' ),
                'transition_class' 		=> $ulb_controller->settings->get_setting( 'transition-type' ),
                //'transition_speed' 		=> $ulb_controller->settings->get_setting( 'transition-speed' ),
                'hide_elements' 		=> $ulb_controller->settings->get_setting( 'mobile-hide-elements' ),
                'controls' 				=> $lightbox_controls,
                'ulb_arrow' 			=> $ulb_controller->settings->get_setting( 'arrow' ),
                'ulb_icon_set' 			=> $ulb_controller->settings->get_setting( 'icon-set' ),
                'curtain_slide' 		=> $ulb_controller->settings->get_setting( 'curtain-slide' ),
                'mousewheel_navigation'	=> $ulb_controller->settings->get_setting( 'mousewheel-navigation' ),
        	);

        	wp_localize_script( 'ultimate-lightbox', 'ewd_ulb_php_data', $data_array );
    	}
	}

	/**
	 * Add links to the plugin listing on the installed plugins page
	 * @since 1.0.0
	 */
	public function plugin_action_links( $links, $plugin ) {

		if ( $plugin == ULB_PLUGIN_FNAME ) {

			$links['settings'] = '<a href="admin.php?page=ulb-settings" title="' . __( 'Head to the settings page for Ultimate Lightbox', 'ultimate-lightbox' ) . '">' . __( 'Settings', 'ultimate-lightbox' ) . '</a>';
		}

		return $links;

	}

}
} // endif;

global $ulb_controller;
$ulb_controller = new ulbInit();
