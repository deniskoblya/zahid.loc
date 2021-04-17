<?php
/*
Plugin Name: Admin Panel CSS
Version: 1
Text Domain: rs_aps
*/

//Actions
add_action( 'admin_init', 'rs_aps_settings_init' );
add_action( 'admin_menu', 'rs_aps_menu_page' );

//Functions
function rs_aps_settings_init() {
  register_setting( 'rs_aps_group', 'rs_aps_disable_css' );
  register_setting( 'rs_aps_group', 'rs_aps_admin_css' );
}
function rs_aps_menu_page() {
	add_menu_page( 'Add Custom CSS to Admin Panel', 'Admin Panel CSS', 'manage_options', 'rs-aps', 'rs_aps_admin_page', 'dashicons-edit' );
}

function rs_aps_admin_page(){
	if ( !current_user_can( 'manage_options' ) )  {
		wp_die( __( 'You do not have sufficient permissions to access this page.' ) );
	} ?>

	<script src="https://cdn.jsdelivr.net/ace/1.2.3/min/ace.js"></script>
	<div class="wrap">
	    <h2>Admin Panel CSS</h2>

	    <form method="post" action="options.php">
	        <?php
	        settings_fields( 'rs_aps_group' );
	        do_settings_sections( 'rs_aps_group' );
	        $rs_aps_disable_css = get_option('rs_aps_disable_css');
	        ?>

	        <table class="form-table">
	        <tbody>
	            <tr>
	                <th scope="row">Disable CSS</th>
	                <td>
	                    <input name="rs_aps_disable_css" type="checkbox" id="users_can_register" value="1" <?php checked( '1', $rs_aps_disable_css); ?>/>
	                </td>
	            </tr>
	        </tbody>
	        </table>

	        <hr />
	        <textarea name="rs_aps_admin_css"><?php echo get_option('rs_aps_admin_css'); ?></textarea>
	        <div id="rs_aps_admin_css"></div>
	        <hr />
	        <?php submit_button(); ?>

	    </form>
	</div>

	<script>
		var editor = ace.edit("rs_aps_admin_css");
		editor.setTheme("ace/theme/monokai");
		editor.getSession().setMode("ace/mode/css");

		var textarea = jQuery('textarea[name=rs_aps_admin_css]');
		editor.getSession().setValue(textarea.val());
		editor.getSession().on('change', function(){
		  textarea.val(editor.getSession().getValue());
		});
	</script>
	<style>
		#rs_aps_admin_css{width: 100%; height: 400px; font-size: 14px;}
		textarea[name=rs_aps_admin_css]{display: none;}
	</style>
<?php }


//Add Style to Admin Head
$rs_aps_disable_css = get_option('rs_aps_disable_css');
if(!$rs_aps_disable_css)
	add_action('admin_head', 'rs_aps_custom_admin_css');

function rs_aps_custom_admin_css(){
	echo '<style>'.get_option('rs_aps_admin_css').'</style>';
}