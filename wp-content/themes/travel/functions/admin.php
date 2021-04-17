<?php  if(!defined('ABSPATH')) exit;
function wph_require_post_elements() { ?>
    <script type="text/javascript">
        jQuery(document).ready(function($) {
            $('#submitpost :submit').on('click.edit-post', function(event) {
                if ( !$('#excerpt').val().length ) {
                    alert( 'Необходимо указать отрывок записи.' );
                    $('#excerpt').focus();
                } else {
                    return true;
                }
                return false;
            });
        });
    </script>
    <?php
}
add_action('admin_footer-post.php',     'wph_require_post_elements');
add_action('admin_footer-post-new.php', 'wph_require_post_elements');