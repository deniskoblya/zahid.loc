<?php if(!defined('ABSPATH')) exit;

if(is_404()){
	$sidebar_title = get_field('sidebar_room_title','options');
	$site_sidebar = get_field('site_sidebar','options');
} elseif( is_home() ){
	$pfp = get_option('page_for_posts');
	$sidebar_title = get_field('sidebar_room_title', $pfp);
	$site_sidebar = get_field('site_sidebar', $pfp);
} else {
	$sidebar_title = get_field('sidebar_room_title');
	$site_sidebar = get_field('site_sidebar');
}
$get_choose_sidebar = get_field('chhosce_sidebar');




//if($site_sidebar && !is_page_template('page-institution.php') && $get_choose_sidebar == 'main' && !is_home() && !is_page_template('page-main.php') && !(!is_page_template() && !is_front_page()) && !is_singular('room')){ 
if($site_sidebar && $get_choose_sidebar == 'main' || is_404()){ ?>
<div class="sidebar-wrap">
    <?php if($sidebar_title){ ?>
    <span>
        <span class="h4"><?php echo esc_html($sidebar_title); ?></span>
        <span></span>
    </span>
    <?php } ?>
    <div class="sidebar">
        <?php
				foreach($site_sidebar as $item){
					if(!empty($item['sidebar_title']) && !empty($item['page_left_sidebar'])){ ?>
        <div>
            <a href="<?php echo get_permalink($item['sidebar_title']->ID); ?>" class="h4"><?php echo get_the_title($item['sidebar_title']->ID); ?></a>
            <div class="simple-text">
                <nav class="mobile-nav">
                    <ul>
                        <?php foreach($item['page_left_sidebar'] as $sub_item){ 
									$item_title = get_field('sidebar_room_title',$sub_item); ?>
                        <li><a href="<?php echo get_permalink($sub_item); ?>"><?php echo ($item_title ? $item_title : get_the_title($sub_item)); ?></a></li>
                        <?php } ?>
                    </ul>
                </nav>
            </div>
        </div>
        <?php }
				}
			?>
    </div>
</div>
<div class="empty-lg-70 empty-sm-50 empty-xs-30"></div>
<?php } elseif ($site_sidebar && !is_home()){ ?>
<div class="custom-menu">
    <?php
			foreach($site_sidebar as $item){
				if(!empty($item['sidebar_title']) && !empty($item['page_left_sidebar'])){ ?>
    <div class="custom-menu-title jj">
        <a href="<?php echo get_permalink($item['sidebar_title']->ID); ?>" class="h4 light"><?php echo get_the_title($item['sidebar_title']->ID); ?></a>
        <span></span>
    </div>
    <div class="simple-text">
        
            <nav class="mobile-nav">
                <ul>
                <?php foreach ($item['page_left_sidebar'] as $sub_item){ ?>
                <li>
                    <a href="<?php echo get_permalink($sub_item); ?>">
                        <?php
											$item_title = get_field('sidebar_room_title',$sub_item);
											echo ($item_title ? $item_title : get_the_title($sub_item));
										?>
                    </a>
                </li>
                <?php } ?>
            </ul>
            </nav>
        
    </div>
    <?php }
			}
		?>
</div>
<div class="empty-lg-70 empty-sm-50 empty-xs-20"></div>
<?php } elseif (is_home() || is_category() || $get_choose_sidebar == 'postr') {
    $blog_sidebar_categories = get_categories( array(
        'taxonomy'     => 'category',
        'type'         => 'post',
        'orderby'      => 'name',
        'order'        => 'ASC',
        'hide_empty'   => 1,
        'hierarchical' => 1,
        'child_of'     => 0,
        'parent'       => 0,
    ) );

    ?>
<div class="sidebar-wrap">
    <span>
        <span class="h4"><?php _e('Category', 'travel'); ?></span>
        <span></span>
    </span>
    <div class="sidebar">
        <?php
            foreach ($blog_sidebar_categories as $item) { ?>
        <?php if ($item) {
                    $current_category = get_queried_object()?>
        <div>
            <a href="<?php echo get_category_link($item->term_id); ?>" <?php if ($current_category->term_id === $item->term_id) { ?>class="h4 active" <?php } else { ?> class="h4" <?php } ?>><?php echo esc_html($item->cat_name); ?></a>
            <?php
                        $blog_sub_args = array(
                            'hide_empty' => 1,
                            'orderby' => 'name',
                            'depth' => 1,
                            'parent' => $item->term_id,
                            'order' => 'ASC',
                            'taxonomy' => 'category'
                        );
                        $blog_sub_categories = get_categories( $blog_sub_args );
                        if ($blog_sub_categories) { ?>
            <div class="simple-text">
                <nav class="mobile-nav">
                    <ul>
                        <?php foreach($blog_sub_categories as $sub_cat){?>
                        <li><a <?php if ($current_category->term_id === $sub_cat->term_id) { ?>class="active" <?php } ?> href="<?php echo get_category_link($sub_cat->term_taxonomy_id); ?>"><?php echo esc_html($sub_cat->cat_name); ?></a></li>
                        <?php } ?>
                    </ul>
                </nav>
            </div>
            <?php } ?>
        </div>
        <?php }
            }
            ?>
    </div>
</div>
<div class="empty-lg-70 empty-sm-50 empty-xs-30"></div>
<?php }

$set_off_sidebar = get_field('set_off_sidebar');
if(!$set_off_sidebar){

	if(is_404()){
		$news_sidebar = get_field('news_sidebar','options');
	} elseif (is_home()){
		$page_for_posts = get_option('page_for_posts');
		$news_sidebar = get_field('news_sidebar',$page_for_posts);
	} else {
		$news_sidebar = get_field('news_sidebar');
	}

	if(!$news_sidebar){
		$args = array(
			'post_type' => 'new',
			'posts_per_page' => 3,
			'orderby' => 'date',
			'order' => 'DESC'
		);
		$news_sidebar = get_posts($args);
	}
	if($news_sidebar){ ?>
<div class="blog-sidebar only-desktop">
    <a href="<?php echo get_permalink(TRAVEL_PAGE_NEWS); ?>" class="h2"><?php echo get_the_title(TRAVEL_PAGE_NEWS); ?></a>
    <?php foreach ($news_sidebar as $item){ ?>
    <div>
        <div class="overflow-hidden">
            <div class="img-box" style="background-image: url(<?php echo get_the_post_thumbnail_url($item->ID); ?>);"></div>
            <span class="date"><?php echo date('d.m.Y',strtotime($item->post_date)); ?></span>
        </div>
        <p class="h4"><?php echo get_the_title($item->ID); ?></p>
        <a href="<?php echo get_permalink($item->ID); ?>" class="full-size"></a>
    </div>
    <?php } ?>
    <div class="text-center">
        <a href="<?php echo get_permalink(TRAVEL_PAGE_NEWS); ?>" class="h5"><?php _e('Go to section','travel'); ?> >></a>
    </div>
</div>
<?php }
}
