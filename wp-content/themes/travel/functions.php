<?php

// $args = array( 'post_type' => 'room', 'posts_per_page'  => -1);

// $loop = new WP_Query( $args );
// while ( $loop->have_posts() ) : $loop->the_post();

//     $id_room = get_the_ID();

//     $old_title = get_post_meta($id_room , 'sanatorium_content_2_tab_content_sanatorium_0_price_title')[0];
//     $new_title = get_post_meta($id_room , 'sanatorium_content_2_tab_content_sanatorium_0_text')[0];
//     $old_text = get_post_meta($id_room , 'sanatorium_content_2_tab_content_sanatorium_0_table_text_content')[0];
//     $new_text = get_post_meta($id_room , 'sanatorium_content_2_tab_content_sanatorium_1_text_sanatorium')[0];

//     delete_post_meta( $id_room, 'sanatorium_content_2_tab_content_sanatorium_0_text');
//     add_post_meta($id_room, 'sanatorium_content_2_tab_content_sanatorium_0_text', $old_title, true);

//     delete_post_meta( $id_room, 'sanatorium_content_2_tab_content_sanatorium_1_text_sanatorium');
//     add_post_meta($id_room, 'sanatorium_content_2_tab_content_sanatorium_1_text_sanatorium', $old_text, true);

// endwhile;


define('TRAVEL_URI', get_template_directory_uri());
define('TRAVEL_URL', get_template_directory());
define('TRAVEL_HML', 35);
define('TRAVEL_MIR', 37);
define('TRAVEL_SHC', 202);
define('TRAVEL_SAN_HML', 731);
define('TRAVEL_SAN_MIR', 435);
define('TRAVEL_SAN_SHC', 2120);
define('TRAVEL_PAGE_NEWS', 9342);

get_template_part('functions/walker');
get_template_part('functions/schema');
require_once('rating.php');


/* after setup theme function */
function travel_setup()
{
    load_theme_textdomain('travel', TRAVEL_URL . '/languages');
    add_theme_support('automatic-feed-links');
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    register_nav_menus(array(
        'top_menu' => esc_html__('Top menu', 'travel'),
        'bot_menu' => esc_html__('Bottom menu', 'travel')
    ));
    add_theme_support('html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
    ));
}

add_action('after_setup_theme', 'travel_setup');

//-Custom Taxonomy
function travel_create_taxonomy()
{
    register_post_type('room', array(
        'labels' => array('name' => __('Room', 'travel'), 'singular_name' => __('Room', 'travel')),
        'supports'    => array('title', 'thumbnail', 'comments'),
        'public'      => true,
        'has_archive' => false,
        'rewrite'     => array('slug' => 'room', 'with_front' => false),
    ));

    register_post_type('new', array(
        'labels' => array('name' => __('New', 'travel'), 'singular_name' => __('New', 'travel')),
        'supports' => array('title', 'thumbnail'),
        'public' => true,
        'has_archive' => false,
        'menu_position' => 5,
        'rewrite' => array('slug' => 'new', 'with_front' => false),
    ));
}
add_action('init', 'travel_create_taxonomy');



//Apikey ACF
add_filter('acf/settings/google_api_key', function ($value) {
    $api_key = get_field('api_key_option', 'option');
    return $api_key;
});
//-Enqueue scripts and styles.
function travel_scripts()
{

    $api_key = get_field('api_key_option', 'option');

    wp_deregister_script('jquery');

    //wp_enqueue_style('travel-google-fonts',    travel_fonts_url(), '', null);
    //wp_enqueue_style('travel-fancybox',        TRAVEL_URI . '/css/fancybox.min.css');
    wp_enqueue_style('travel-daterangepicker', TRAVEL_URI . '/css/daterangepicker.min.css');
    //wp_enqueue_style('travel-rating',          TRAVEL_URI . '/css/rating.css');
    //wp_enqueue_style('travel-main',            TRAVEL_URI . '/css/main.css');
    wp_enqueue_style('travel-style',           TRAVEL_URI . '/css/style.css');

    //wp_enqueue_style('travel-wp-style',        get_stylesheet_uri());

    wp_enqueue_script('jquery',                        TRAVEL_URI . '/js/jquery.min.js', array(), '', true);
    wp_enqueue_script('travel-swiper.jquery',          TRAVEL_URI . '/js/swiper.jquery.min.js', array('jquery'), '', true);
    //wp_enqueue_script('travel-fancybox',               TRAVEL_URI . '/js/jquery.fancybox.min.js', array('jquery'), '', true);
    wp_enqueue_script('travel-moment',                 TRAVEL_URI . '/js/moment.js', array('jquery'), '', true);
    //wp_enqueue_script('travel-lightbox',               TRAVEL_URI . '/js/simple-lightbox.min.js', array('jquery'), '', true);
    wp_enqueue_script('travel-sumoselect',             TRAVEL_URI . '/js/jquery.sumoselect.min.js', array('jquery'), '', true);
    wp_enqueue_script('travel-jquery.daterangepicker', TRAVEL_URI . '/js/jquery.daterangepicker.min.js', array('jquery'), '', true);
    wp_enqueue_script('travel-global',                 TRAVEL_URI . '/js/global.js', array('jquery'), '', true);
    wp_enqueue_script('travel-rating',                 TRAVEL_URI . '/js/rating.js', array('jquery'), '', true);

    if ($api_key) {
        wp_register_script('googleapis', 'https://maps.googleapis.com/maps/api/js?key=' . $api_key, array('jquery'), '', true);
        wp_register_script('googleapisL', 'https://maps.googleapis.com/maps/api/js?v=3&libraries=places&&key=' . $api_key, array('jquery'), '', true);
    } else {
        wp_register_script('googleapis', 'https://maps.googleapis.com/maps/api/js?v=3.exp', array('jquery'), '', true);
    }
    wp_register_script('travel-map-contact',    TRAVEL_URI . '/js/map-contact.js', array('jquery'), '', true);
    wp_register_script('travel-infobox_packed', TRAVEL_URI . '/js/infobox_packed.js', array('jquery'), '', true);
    wp_register_script('travel-map',            TRAVEL_URI . '/js/map.js', array('jquery'), '', true);
    wp_register_script('travel-smoothscroll',   TRAVEL_URI . '/js/smoothscroll.js', array('jquery'), '', true);
    wp_enqueue_script('travel-custom',          TRAVEL_URI . '/js/custom.js', array('jquery'), '', true);

    //conditional load
    if (is_singular() && comments_open() && get_option('thread_comments')) {
        wp_enqueue_script('comment-reply');
    }

    $travel = array(
        'lang' => qtranxf_getLanguage(),
        'minDate' => date('d-m-Y'),
        'children' => __('Children', 'travel'),
        'adults' => __('Adults', 'travel'),
    );
    wp_localize_script('travel-global', 'travel', $travel);
    wp_localize_script('travel-global', 'ajaxGet', array('page_id' => get_the_id()));
}
add_action('wp_enqueue_scripts', 'travel_scripts');

//Ajax url
function travel_wp_head()
{ ?>
<script>
    var ajaxurl = '<?php echo admin_url('admin-ajax.php'); ?>';

</script>
<?php }
add_action('wp_head', 'travel_wp_head', 0);

//Remove version css, js
function travel_remove_script_version($src)
{
    if (strpos($src, 'ver='))
        $src = remove_query_arg('ver', $src);
    return $src;
}
add_filter('script_loader_src', 'travel_remove_script_version', 15, 1);
add_filter('style_loader_src', 'travel_remove_script_version', 15, 1);

//Remove tag css, js
function travel_remove_script_tag($tag, $handle)
{
    return preg_replace("/type=['\"]text\/(javascript|css)['\"]/", '', $tag);
}

/**
 * Get Pagination
 */
function travel_pagination($pages = '', $range = 4)
{
    $showitems = ($range * 2) + 1;
    global $paged;
    if (empty($paged)) $paged = 1;
    if (!$pages) {
        global $wp_query;
        $pages = $wp_query->max_num_pages;
        if (!$pages) $pages = 1;
    }

    if ($pages != 1) {
        echo '<div class="pagination">';
        echo '<a href="' . get_pagenum_link($paged - 1) . '" class="prev" style="' . ($paged < $pages ? 'visibility: hidden;' : '') . '"><<span class="only-desktop"> ' . __('Previous', 'travel') . '</span></a>';
        if (2 < $paged && $pages >= $showitems) echo '<a class="pagination-item" href="' . get_pagenum_link(1) . '">1</a>';
        if (3 < $paged && $pages >= $showitems) echo '<span>...</span>';
        for ($i = 1; $i <= $pages; $i++) {
            if (!($i >= $paged + $range || $i <= $paged - $range) || $pages < $showitems) {
                if ($paged == $i) echo '<a class="active">' . $i . '</a>';
                else echo '<a href="' . get_pagenum_link($i) . '">' . $i . '</a>';
            }
        }
        if ($paged < ($pages - 2) && $pages >= $showitems) echo '<span>...</span>';
        if ($paged < ($pages - 1) && $pages >= $showitems) echo '<a href="' . get_pagenum_link($pages) . '">' . $pages . '</a>';
        if ($paged < $pages) echo '<a href="' . get_pagenum_link($paged + 1) . '" class="next"><span class="only-desktop"> ' . __('Next', 'travel') . '</span> ></a>';
        else echo '<a href="#next" class="next"></a>';
        echo '</div>';
    }
}

function travel_get_num_only($s)
{
    return preg_replace('~[^0-9]+~', '', $s);
}
add_filter('style_loader_tag', 'travel_remove_script_tag', 10, 2);
add_filter('script_loader_tag', 'travel_remove_script_tag', 10, 2);

//Site Options
if (function_exists('acf_add_options_page')) {
    acf_add_options_page(array(
        'page_title' => esc_html__('Theme Options', 'travel'),
        'menu_title' => esc_html__('Theme Options', 'travel'),
        'menu_slug'  => 'theme-general-settings',
        'capability' => 'edit_posts',
        'redirect'   => false
    ));
}

//-RESERVE-room
function travel_wpcf7_add_form_tag_reserve_room()
{
    wpcf7_add_form_tag(array('reserve_room', 'reserve_room*'), 'travel_wpcf7_reserve_room_form_tag_handler', true);
}
add_action('wpcf7_init', 'travel_wpcf7_add_form_tag_reserve_room');

function travel_wpcf7_mail_sent($contact_form)
{
    if (!empty($_POST['post_id']) && !empty($_POST['user_name']) && !empty($_POST['comment'])) {
        $data = [
            'comment_post_ID' => $_POST['post_id'],
            'comment_author' => $_POST['user_name'],
            'comment_approved' => 0,
            'comment_content' => $_POST['comment']
        ];
        wp_insert_comment(wp_slash($data));
    }
};
add_action('wpcf7_mail_sent', 'travel_wpcf7_mail_sent', 10, 1);

function travel_wpcf7_reserve_room_form_tag_handler($tag)
{
    $tag = new WPCF7_FormTag($tag);

    if (empty($tag->name)) {
        return '';
    }

    $validation_error = wpcf7_get_validation_error($tag->name);
    $class            = wpcf7_form_controls_class($tag->type);
    if ($validation_error) {
        $class .= ' wpcf7-not-valid';
    }

    $atts = array();
    $atts['class'] = $tag->get_class_option($class);
    $atts['id'] = $tag->get_id_option();
    if ($tag->is_required()) {
        $atts['aria-required'] = 'true';
    }
    $atts['aria-invalid'] = $validation_error ? 'true' : 'false';
    $atts['name'] = $tag->name;

    $html     = '';
    $hangover = wpcf7_get_hangover($tag->name);

    $id = get_the_id();
    $html = '';
    $html .= '<option selected disabled>' . __('Please select number', 'travel') . '</option>';

    if (have_rows('sanatorium_content', $id)) :
        while (have_rows('sanatorium_content', $id)) : the_row();
            if (get_row_layout() == 'page_tab_sanatorium') {
                if (have_rows('tab_content_sanatorium')) :
                    while (have_rows('tab_content_sanatorium')) : the_row();
                        if (get_row_layout() == 'room_sanatorium') {
                            $room_title = get_sub_field('name');
                            if ($room_title) $html .= "<option value='" . html_entity_decode($room_title) . "'>" . html_entity_decode($room_title) . '</option>';
                        }
                    endwhile;
                endif;
            }
        endwhile;
    endif;


    $atts = wpcf7_format_atts($atts);
    $html = sprintf('<span class="wpcf7-form-control-wrap %1$s"><select %2$s>%3$s</select>%4$s</span>', sanitize_html_class($tag->name), $atts, $html, $validation_error);
    return $html;
}


/**
 *  Get Lang Switcher
 */
function get_lang_switcher()
{
    global $q_config;
    $cur_lang = $q_config['language'];
    $switch_html = '<div class="lang">';
    $flag_url = ($cur_lang === 'ru') ? TRAVEL_URI . '/img/flag-ru.png' : TRAVEL_URI . '/img/flag-uk.png';
    $switch_html .= '<span style="background-image: url(' . $flag_url . ');"></span><div>';
    foreach ($q_config['enabled_languages'] as $lang) {
        $class = '';
        if ($cur_lang === $lang) $class = 'active';
        $flag_url = ($lang === 'ru') ? TRAVEL_URI . '/img/flag-ru.png' : TRAVEL_URI . '/img/flag-uk.png';

        $switch_html .= '<a href="' . str_replace( '/'.$q_config['default_language'], '', qtranxf_convertURL('', $lang, false, true) ) . '" data-lang="'.$lang.'" style="background-image: url(' . $flag_url . ');" class="' . $class . '"></a>';
    }
    $switch_html .= '</div></div>';

    return $switch_html;
}

/* Validation filter */
function travel_wpcf7_validation($result, $tag)
{
    $name     = $tag->name;
    $response = (isset($_POST[$name]) ? $_POST[$name] : '');

    if (!$response) {
        $result->invalidate($name, wpcf7_get_message($name));
    }
    return $result;
}
add_filter('wpcf7_validate_reserve_room*', 'travel_wpcf7_validation', 10, 2);


function single_rating($id = false, $class = '', $schema = true)
{
    if (!$id) $id = get_the_id();

    $total = (int) get_post_meta($id, 'vote-total', true);
    $rating = (int) get_post_meta($id, 'vote-rating', true);
    if (!$total) $total = 0;
    if (!$rating) $rating = 0;

    $yellow = '';
    $procent = $abs = 0;
    if (!empty($total)) {
        $procent = ($rating / ($total * 5)) * 100;
        $rating = round($rating / $total, 1);
    }

    if ($procent != 0) {
        $yellow = 'yellow';
    }

    $star_count = (int) round($procent / 20); ?>
<div class="ratings <?php echo $class . ' ' . (isset($_COOKIE['vote-post-' . get_the_ID()]) ? 'disabled' : ''); ?>" data-id="<?php echo $id; ?>">
    <div class="empty-lg-10 empty-xs-20"></div>
    <link itemprop="availability" href="https://schema.org/InStock" />
    <div class="stars">
        <?php
                for ($i = 1; $i <= 5; $i++) {
                    $star_class = '';
                    if ($star_count >= $i) $star_class = 'orange rated ';
                    if ($star_count == $i) $star_class = 'active';

                    echo '<span class="' . $star_class . '">' . $i . '</span>';
                }
                ?>
    </div>
    <div class="legend"><?php echo $rating . ' (' . round($procent, 0) . '%) ' . sprintf(_n('%s vote', '%s votes', $total, 'travel'), $total); ?></div>
</div>
<?php
        if ($schema) {
            //travel_schema_aggregate_rating($id);
            ?>
<div itemscope itemtype="http://data-vocabulary.org/Review-aggregate">
    <div itemprop=itemreviewed content="<?php echo esc_html(get_the_title($id)) ?>"></div>
    <meta itemprop=count content=<?php echo esc_html($total) ?>>
    <div class="legend" itemprop=rating itemscope itemtype="http://data-vocabulary.org/Rating">
        <meta itemprop=best content=5>
        <meta itemprop=average content=<?php echo esc_html($rating) ?>>
    </div>
</div>
<?php };
        }


        // Breadcrumbs
        function travel_breadcrumbs()
        {
            if (!is_front_page()) {
                $i = 1;
                $html = '';
                $html .= '<nav id="breadcrumbs" itemprop="breadcrumb" class="mobile-nav breadcrumbs" vocab="http://schema.org/" typeof="BreadcrumbList"><ol>';
                $html .= '<li property="itemListElement" typeof="ListItem">';
                $html .= '<a href="' . home_url('/') . '" property="item" typeof="WebPage">' . get_the_title(get_option('page_on_front')) . '</a>';
                $html .= '<meta property="position" content="' . $i . '">';
                $html .= '<meta property="name" content="' . get_the_title(get_option('page_on_front')) . '">';
                $html .= '</li>';
                //$html .= '</div>';

                $breadcrumbs_custom = get_field('breadcrumbs_custom');
                $breadcrumbs = get_field('breadcrumbs');
                if ($breadcrumbs_custom && $breadcrumbs) {
                    $count = sizeof($breadcrumbs);
                    foreach ($breadcrumbs as $crumbs) {
                        $html .= '<li property="itemListElement" typeof="ListItem">';
                        if ($i != $count) {
                            $html .= '<a href="' . get_permalink($crumbs) . '" property="item" typeof="WebPage">' . get_the_title($crumbs) . '</a>';
                            $delimiter = true;
                        } else {
                            $html .= '<span>' . get_the_title($crumbs) . '</span>';
                            $delimiter = false;
                        }
                        $i++;

                        $html .= '<meta property="position" content="' . $i . '">';
                        $html .= '<meta property="name" content="' . get_the_title($crumbs) . '">';
                        $html .= '</li>';

                        if ($delimiter) {
                            //$html .= '</div>';
                        }
                    }
                } else {
                    if (is_home()) {
                        $page_for_posts = get_option('page_for_posts');
                        if ($page_for_posts) {
                            $i++;
                            $html .= '<li property="itemListElement" typeof="ListItem">';
                            $html .= '<span>' . get_the_title($page_for_posts) . '</span>';
                            $html .= '<meta property="position" content="' . $i . '">';
                            $html .= '<meta property="name" content="' . get_the_title($page_for_posts) . '">';
                            $html .= '</li>';
                        }
                    } elseif (is_category()) {
                        $page_for_posts = get_option('page_for_posts');
                        $get_current_category = get_queried_object();

                        if ($page_for_posts) {
                            $i++;
                            $html .= '<li property="itemListElement" typeof="ListItem">';
                            $html .= '<a href="' . get_permalink($page_for_posts) . '" property="item" typeof="WebPage">' . get_the_title($page_for_posts) . '</a>';
                            $html .= '<meta property="position" content="' . $i . '">';
                            $html .= '<meta property="name" content="' . get_the_title($page_for_posts) . '">';
                            $html .= '</li>';
                            //$html .= '</div>';
                        }

                        $i++;
                        $html .= '<li property="itemListElement" typeof="ListItem">';
                        $html .= '<span property="item" typeof="WebPage">' . esc_html($get_current_category->name) . '</span>';
                        $html .= '<meta property="position" content="' . $i . '">';
                        $html .= '<meta property="name" content="' . esc_html($get_current_category->name) . '">';
                        $html .= '</li>';
                    } elseif (is_singular('post')) {
                        $page_for_posts = get_option('page_for_posts');
                        $get_current_category = get_queried_object();
                        $current_category = get_the_category($get_current_category->ID)[0];

                        if ($page_for_posts) {
                            $i++;
                            $html .= '<li property="itemListElement" typeof="ListItem">';
                            $html .= '<a href="' . get_permalink($page_for_posts) . '" property="item" typeof="WebPage">' . get_the_title($page_for_posts) . '</a>';
                            $html .= '<meta property="position" content="' . $i . '">';
                            $html .= '<meta property="name" content="' . get_the_title($page_for_posts) . '">';
                            $html .= '</li>';
                            //$html .= '</div>';
                        }

                        if ($current_category) {
                            $i++;
                            $html .= '<li property="itemListElement" typeof="ListItem">';
                            $html .= '<a href="' . get_category_link($current_category->term_id) . '" property="item" typeof="WebPage">' . esc_html($current_category->name) . '</a>';
                            $html .= '<meta property="position" content="' . $i . '">';
                            $html .= '<meta property="name" content="' . esc_html($current_category->name) . '">';
                            $html .= '</li>';
                            //$html .= '</div>';
                        }

                        $i++;
                        $html .= '<li property="itemListElement" typeof="ListItem">';
                        $html .= '<span property="item" typeof="WebPage">' . get_the_title() . '</span>';
                        $html .= '<meta property="position" content="' . $i . '">';
                        $html .= '<meta property="name" content="' . get_the_title() . '">';
                        $html .= '</li>';
                    } elseif (is_singular('new')) {
                        $i++;
                        $html .= '<li property="itemListElement" typeof="ListItem">';
                        $html .= '<a href="' . get_permalink(TRAVEL_PAGE_NEWS) . '" property="item" typeof="WebPage">' . get_the_title(TRAVEL_PAGE_NEWS) . '</a>';
                        $html .= '<meta property="position" content="' . $i . '">';
                        $html .= '<meta property="name" content="' . get_the_title(TRAVEL_PAGE_NEWS) . '">';
                        $html .= '</li>';
                        //$html .= '</div>';

                        $i++;
                        $html .= '<li property="itemListElement" typeof="ListItem">';
                        $html .= '<span property="item" typeof="WebPage">' . get_the_title() . '</span>';
                        $html .= '<meta property="position" content="' . $i . '">';
                        $html .= '<meta property="name" content="' . get_the_title() . '">';
                        $html .= '</li>';
                    } else if (is_singular('room')) {
                        $sidebar_title = get_field('site_sidebar_0_sidebar_title');
                        if (isset($sidebar_title->ID) && $sidebar_title->ID == TRAVEL_SAN_HML) {
                            $i++;
                            $html .= '<li property="itemListElement" typeof="ListItem">';
                            $html .= '<a href="' . get_permalink(TRAVEL_HML) . '" property="item" typeof="WebPage">' . get_the_title(TRAVEL_HML) . '</a>';
                            $html .= '<meta property="position" content="' . $i . '">';
                            $html .= '<meta property="name" content="' . get_the_title(TRAVEL_HML) . '">';
                            $html .= '</li>';
                            //$html .= '</div>';
                        } else if (isset($sidebar_title->ID) && $sidebar_title->ID == TRAVEL_SAN_MIR) {
                            $i++;
                            $html .= '<li property="itemListElement" typeof="ListItem">';
                            $html .= '<a href="' . get_permalink(TRAVEL_MIR) . '" property="item" typeof="WebPage">' . get_the_title(TRAVEL_MIR) . '</a>';
                            $html .= '<meta property="position" content="' . $i . '">';
                            $html .= '<meta property="name" content="' . get_the_title(TRAVEL_MIR) . '">';
                            $html .= '</li>';
                            //$html .= '</div>';
                        } else if (isset($sidebar_title->ID) && $sidebar_title->ID == TRAVEL_SAN_SHC) {
                            $i++;
                            $html .= '<li property="itemListElement" typeof="ListItem">';
                            $html .= '<a href="' . get_permalink(TRAVEL_SHC) . '" property="item" typeof="WebPage">' . get_the_title(TRAVEL_SHC) . '</a>';
                            $html .= '<meta property="position" content="' . $i . '">';
                            $html .= '<meta property="name" content="' . get_the_title(TRAVEL_SHC) . '">';
                            $html .= '</li>';
                            //$html .= '</div>';
                        }

                        if ($sidebar_title) {
                            $i++;
                            $html .= '<li property="itemListElement" typeof="ListItem">';
                            $html .= '<a href="' . get_permalink($sidebar_title) . '" property="item" typeof="WebPage">' . get_the_title($sidebar_title) . '</a>';
                            $html .= '<meta property="position" content="' . $i . '">';
                            $html .= '<meta property="name" content="' . get_the_title($sidebar_title) . '">';
                            $html .= '</li>';
                            //$html .= '</div>';
                        }
                        $i++;
                        $html .= '<li property="itemListElement" typeof="ListItem">';
                        $html .= '<span>' . get_the_title() . '</span>';
                        $html .= '<meta property="position" content="' . $i . '">';
                        $html .= '<meta property="name" content="' . get_the_title() . '">';
                        $html .= '</li>';
                    } else if (is_page()) {
                        global $post;
                        if ($post->post_parent) {
                            $parents = '';
                            $anc = get_post_ancestors($post->ID);
                            $anc = array_reverse($anc);

                            foreach ($anc as $ancestor) {
                                $parents .= '<li property="itemListElement" typeof="ListItem">';
                                $parents .= '<a href="' . get_permalink($ancestor) . '" property="item" typeof="WebPage">' . get_the_title($ancestor) . '</a>';
                                $parents .= '<meta property="position" content="' . $i . '">';
                                $parents .= '<meta property="name" content="' . get_the_title($ancestor) . '">';
                                $parents .= '</div>';
                                $parents .= '<span>/</span>';
                                $i++;
                            }

                            $html .= $parents;
                            $html .= '<li property="itemListElement" typeof="ListItem">';
                            $html .= '<span>' . get_the_title() . '</span>';
                            $html .= '<meta property="position" content="' . $i . '">';
                            $html .= '<meta property="name" content="' . get_the_title() . '">';
                            $html .= '</li>';
                        } else if ($post->ID == TRAVEL_SAN_HML) {
                            $i++;
                            $html .= '<li property="itemListElement" typeof="ListItem">';
                            $html .= '<a href="' . get_permalink(TRAVEL_HML) . '" property="item" typeof="WebPage">' . get_the_title(TRAVEL_HML) . '</a>';
                            $html .= '<meta property="position" content="' . $i . '">';
                            $html .= '<meta property="name" content="' . get_the_title(TRAVEL_HML) . '">';
                            $html .= '</li>';
                            //$html .= '</div>';

                            $i++;
                            $html .= '<li property="itemListElement" typeof="ListItem">';
                            $html .= '<span>' . get_the_title() . '</span>';
                            $html .= '<meta property="position" content="' . $i . '">';
                            $html .= '<meta property="name" content="' . get_the_title() . '">';
                            $html .= '</li>';
                        } else if ($post->ID == TRAVEL_SAN_MIR) {
                            $i++;
                            $html .= '<li property="itemListElement" typeof="ListItem">';
                            $html .= '<a href="' . get_permalink(TRAVEL_MIR) . '" property="item" typeof="WebPage">' . get_the_title(TRAVEL_MIR) . '</a>';
                            $html .= '<meta property="position" content="' . $i . '">';
                            $html .= '<meta property="name" content="' . get_the_title(TRAVEL_MIR) . '">';
                            $html .= '</li>';
                            //$html .= '</div>';

                            $i++;
                            $html .= '<li property="itemListElement" typeof="ListItem">';
                            $html .= '<span>' . get_the_title() . '</span>';
                            $html .= '<meta property="position" content="' . $i . '">';
                            $html .= '<meta property="name" content="' . get_the_title() . '">';
                            $html .= '</li>';
                        } else if ($post->ID == TRAVEL_SAN_SHC) {
                            $i++;
                            $html .= '<li property="itemListElement" typeof="ListItem">';
                            $html .= '<a href="' . get_permalink(TRAVEL_SHC) . '" property="item" typeof="WebPage">' . get_the_title(TRAVEL_SHC) . '</a>';
                            $html .= '<meta property="position" content="' . $i . '">';
                            $html .= '<meta property="name" content="' . get_the_title(TRAVEL_SHC) . '">';
                            $html .= '</li>';
                            //$html .= '</div>';

                            $i++;
                            $html .= '<li property="itemListElement" typeof="ListItem">';
                            $html .= '<span>' . get_the_title() . '</span>';
                            $html .= '<meta property="position" content="' . $i . '">';
                            $html .= '<meta property="name" content="' . get_the_title() . '">';
                            $html .= '</li>';
                        } else {
                            $i++;
                            $html .= '<li property="itemListElement" typeof="ListItem">';
                            $html .= '<span>' . get_the_title() . '</span>';
                            $html .= '<meta property="position" content="' . $i . '">';
                            $html .= '<meta property="name" content="' . get_the_title() . '">';
                            $html .= '</li>';
                        }
                    }
                }
                $html .= '</ol>';
                $html .= '</nav>';
                echo $html;
            }
        }

        //remove slug for post type room
        function travel_remove_slug($post_link, $post, $leavename)
        {
            if ('room' != $post->post_type || 'publish' != $post->post_status) {
                return $post_link;
            }
            $post_link = str_replace('/' . $post->post_type . '/', '/', $post_link);
            return $post_link;
        }
        add_filter('post_type_link', 'travel_remove_slug', 10, 3);

        function travel_parse_request($query)
        {
            if (!$query->is_main_query() || 2 != count($query->query) || !isset($query->query['page'])) {
                return;
            }
            if (!empty($query->query['name']) && $query->query['name'] != '404') {
                $query->set('post_type', array('room', 'post'));
            }
        }
        add_action('pre_get_posts', 'travel_parse_request');

        function travel_the_form($form_id = null, $class = '', $id = '')
        {
            if (empty($form_id)) return;

            $form_short_code = '[contact-form-7 html-id="' . $id . '" html_class="' . $class . '" id="' . $form_id . '"]';
            echo do_shortcode($form_short_code);
        }

        //image alt
        function travel_get_the_post_thumbnail_alt($post = null)
        {
            $post_thumbnail_id = get_post_thumbnail_id($post);
            if (!$post_thumbnail_id) {
                return false;
            }
            return trim(strip_tags(get_post_meta($post_thumbnail_id, '_wp_attachment_image_alt', true)));
        }

        function travel_the_post_thumbnail_alt($post = null)
        {
            $alt = travel_get_the_post_thumbnail_alt($post);
            if ($alt)
                echo $alt;
        }

        //img title
        function travel_get_the_post_thumbnail_title($post = null)
        {
            $post_thumbnail_id = get_post_thumbnail_id($post);
            if (!$post_thumbnail_id) {
                return false;
            }
            return trim(strip_tags(get_the_title($post_thumbnail_id)));
        }

        function travel_the_post_thumbnail_title($post = null)
        {
            $title = travel_get_the_post_thumbnail_title($post);
            if ($title)
                echo $title;
        }

        //Disable the emoji's
        function travel_disable_emojis()
        {
            remove_action('wp_head', 'print_emoji_detection_script', 7);
            remove_action('admin_print_scripts', 'print_emoji_detection_script');
            remove_action('wp_print_styles', 'print_emoji_styles');
            remove_action('admin_print_styles', 'print_emoji_styles');
            remove_filter('the_content_feed', 'wp_staticize_emoji');
            remove_filter('comment_text_rss', 'wp_staticize_emoji');
            remove_filter('wp_mail', 'wp_staticize_emoji_for_email');
        }
        add_action('init', 'travel_disable_emojis');
        remove_action('wp_head', 'qtranxf_wp_head');

        //Output the locale, doing some conversions to make sure the proper Facebook locale is outputted.
        function travel_wpseo_og_og_locale($content)
        {
            return str_replace(array('uk_UA', 'ru_RU'), array('uk', 'ru'), $content);
        }
        add_filter('wpseo_og_og_locale', 'travel_wpseo_og_og_locale');

        //
        function travel_mb_ucfirst($str, $encoding = "UTF-8", $lower_str_end = true)
        {
            $first_letter = mb_strtoupper(mb_substr($str, 0, 1, $encoding), $encoding);
            $str_end = "";
            if ($lower_str_end) {
                $str_end = mb_strtolower(mb_substr($str, 1, mb_strlen($str, $encoding), $encoding), $encoding);
            } else {
                $str_end = mb_substr($str, 1, mb_strlen($str, $encoding), $encoding);
            }
            $str = $first_letter . $str_end;
            return $str;
        }

        //Special Mail Tags
        function travel_wpcf7_post_related_smt($output)
        {
            return __($output);
        }
        // add_filter('wpcf7_special_mail_tags', 'travel_wpcf7_post_related_smt', 11);

        function true_load_content()
        {

            $start = 9;
            $count = $_POST['count'];
            $page_id = $_POST['page_id'];
            $next = $start + $count;
            $end = $next + $start;
            $catalog_sanatorium = get_field('catalog_sanatorium', $page_id);
            $maxFields = count($catalog_sanatorium);

            if ($maxFields > $start) {
                ob_start();
                foreach ($catalog_sanatorium as $key => $item) {
                    $price = get_field('price', $item);
                    $link = get_permalink($item);
                    if ($key >= $next && $key < $end) {
                        ?>
<article class="c_item col-lg-4 col-sm-6 col-xs-12">
    <div class="sanatorium-item type-2">
                                    <a class="overflow-hidden" href="<?php echo $link; ?>">
                            <h3 class="h5"><?php echo get_the_title($item); ?></h3>
                            <img src="<?php echo get_the_post_thumbnail_url($item); ?>" alt="">
                            <?php echo ($price ? '<span>' . $price . '</span>' : ''); ?>
                        </a>
                                    <div class="text-block text-center">
                                        
                                    </div>
                                   
                                </div>
</article>
<?php
                        }
                    }
                    $contents = ob_get_clean();

                    $more = false;
                    if ($maxFields > $end) {
                        $more = true;
                    }

                    echo json_encode(array("contents" => $contents, "more" => $more));
                    exit();
                } else {
                    return [];
                }
                die();
            }
            add_action('wp_ajax_loadmore_catalog', 'true_load_content');
            add_action('wp_ajax_nopriv_loadmore_catalog', 'true_load_content');

            function true_load_content_sanatorium()
            {

                $start = 9;
                $count = $_POST['count'];
                $page_id = $_POST['page_id'];
                $next = $start + $count;
                $end = $next + $start;
                $catalog_sanatorium = get_field('catalog_sanatorium', $page_id);
                $maxFields = count($catalog_sanatorium);

                if ($maxFields > $start) {
                    ob_start();
                    foreach ($catalog_sanatorium as $key => $item) {
                        $price = get_field('price', $item);
                        $link = get_permalink($item);
                        if ($key >= $next && $key < $end) {
                            ?>
<div class="ff c_item col-lg-4 col-sm-6 col-xs-12">
    <div class="sanatorium-item type-2">
        <div class="overflow-hidden">
            <div class="img-box" style="background-image: url(<?php echo get_the_post_thumbnail_url($item); ?>);"></div>
            <?php echo ($price ? '<span>' . $price . '</span>' : ''); ?>
        </div>
        <div class="text-block text-center">
            <p class="h5"><?php echo get_the_title($item); ?></p>
            <?php echo single_rating($item, 'disabled', false); ?>
            <a href="<?php echo $link; ?>" class="button"><?php _e('Book now', 'travel'); ?></a>
        </div>
        <a href="<?php echo $link; ?>" class="full-size"></a>
    </div>
</div>
<?php
            }
        }
        $contents = ob_get_clean();

        $more = false;
        if ($maxFields > $end) {
            $more = true;
        }

        echo json_encode(array("contents" => $contents, "more" => $more));
        exit();
    } else {
        return [];
    }
    die();
}
add_action('wp_ajax_loadmore_catalog_sanatorium', 'true_load_content_sanatorium');
add_action('wp_ajax_nopriv_loadmore_catalog_sanatorium', 'true_load_content_sanatorium');


add_action( 'template_redirect', 'so16179138_template_redirect', 0 );
function so16179138_template_redirect()
{
    if( is_singular() )
    {
        global $post, $page;
        $num_pages = substr_count( $post->post_content, '<!--nextpage-->' ) + 1;
        if( $page > $num_pages ){
            include( get_template_directory() . '/404.php' );
            exit;
        }
    }
}


add_action('do_feed', 'fb_disable_feed', 1);
add_action('do_feed_rdf', 'fb_disable_feed', 1);
add_action('do_feed_rss', 'fb_disable_feed', 1);
add_action('do_feed_rss2', 'fb_disable_feed', 1);
add_action('do_feed_atom', 'fb_disable_feed', 1);
remove_action( 'wp_head', 'feed_links_extra', 3 );
remove_action( 'wp_head', 'feed_links', 2 );
remove_action( 'wp_head', 'rsd_link' );
