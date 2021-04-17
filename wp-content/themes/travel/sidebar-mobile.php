<?php if(!defined('ABSPATH')) exit;

$set_off_sidebar = get_field('set_off_sidebar');
if(!$set_off_sidebar){
	if(is_404()){
		$news_sidebar = get_field('news_sidebar','options');
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
		<div class="blog-sidebar only-mobile">
			<a href="<?php echo get_permalink(TRAVEL_PAGE_NEWS); ?>" class="h2"><?php echo get_the_title(TRAVEL_PAGE_NEWS); ?></a>
			<?php foreach($news_sidebar as $item){ ?>
				<div>
					<div class="overflow-hidden">
						<div class="img-box" style="background-image: url(<?php echo get_the_post_thumbnail_url($item->ID); ?>);"></div>
						<span class="date"><?php echo date('d.m.Y',strtotime($item->post_date)); ?></span>
					</div>
					<p class="h4"><?php echo get_the_title($item->ID); ?></p>
					<a href="<?php echo get_permalink($item->ID); ?>" class=""></a>
				</div>
			<?php } ?>
			<div class="text-center">
				<a href="<?php echo get_permalink(TRAVEL_PAGE_NEWS); ?>" class="h5"><?php _e('Go to section','travel') ?> >></a>
			</div>
		</div>
	<?php }
}